"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Cloudflare Turnstile site key used by the live Contact Form 7 form (id 4751).
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAABnARYR1_ICkLUDJ";
const CF7_FORM_ID = process.env.NEXT_PUBLIC_CF7_FORM_ID || "4751";

// CF7 REST feedback endpoint on the WordPress site. Origin is derived from the
// existing GraphQL endpoint so there's a single source of truth for the host.
function cf7Endpoint() {
  let origin = "https://www.icecubedigital.com";
  try {
    origin = new URL(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT).origin;
  } catch {
    /* keep default */
  }
  return `${origin}/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`;
}

// Accept 3 website formats — "https://x.com", "www.x.com", "x.com" — and hand
// CF7 a scheme-qualified URL (its [url] validator requires http/https).
function normalizeWebsite(value) {
  const s = (value || "").trim();
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s}`;
}

// Map CF7 field names → our logical field keys (for inline error display).
const CF7_FIELD_TO_KEY = {
  "full-name": "name",
  "email-id": "email",
  phone: "phone",
  "your-message": "message",
  "website-url": "website",
};

const SUBMIT_ARROW_PATH =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

// Load the Cloudflare Turnstile script once (shared across all form instances).
let turnstilePromise = null;
function loadTurnstile() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (turnstilePromise) return turnstilePromise;

  turnstilePromise = new Promise((resolve, reject) => {
    const waitReady = () => {
      const start = Date.now();
      const iv = setInterval(() => {
        if (window.turnstile) {
          clearInterval(iv);
          resolve(window.turnstile);
        } else if (Date.now() - start > 10000) {
          clearInterval(iv);
          reject(new Error("Turnstile load timeout"));
        }
      }, 50);
    };
    const existing = document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]');
    if (existing) {
      waitReady();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    s.onload = waitReady;
    s.onerror = () => reject(new Error("Turnstile failed to load"));
    document.head.appendChild(s);
  });
  return turnstilePromise;
}

// Best-effort visitor country from IP (free, keyless, CORS-enabled). Memoized so
// multiple form instances on a page share one lookup. Returns "" on failure.
let countryPromise = null;
function detectCountry() {
  if (typeof window === "undefined") return Promise.resolve("");
  if (countryPromise) return countryPromise;
  countryPromise = (async () => {
    try {
      const r = await fetch("https://get.geojs.io/v1/ip/country.json");
      if (r.ok) {
        const d = await r.json();
        if (d?.name) return d.name; // full name, e.g. "India"
        if (d?.country) return d.country; // code fallback, e.g. "IN"
      }
    } catch {
      /* try fallback */
    }
    try {
      const r = await fetch("https://ipwho.is/?fields=success,country");
      if (r.ok) {
        const d = await r.json();
        if (d?.success && d?.country) return d.country;
      }
    } catch {
      /* give up */
    }
    return "";
  })();
  return countryPromise;
}

/**
 * Single shared contact form used by:
 *  - "Get a Free Quote" section (variant="split")
 *  - "SEO Audit Report Now!" section (variant="split")
 *  - Services banner form (variant="banner")
 *
 * Submits directly to the live WordPress Contact Form 7 form (id 4751) via its
 * REST feedback endpoint, so WP handles the entry (Flamingo), the notification
 * email and the rest of the CF7 pipeline. A Cloudflare Turnstile widget provides
 * the spam token the form requires.
 */
export default function ContactForm({ variant = "split", title, btnArrow, animate = true, bordered = true, compact = false, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);
  const countryRef = useRef("");

  // Detect the visitor's country early so it's ready by submit time.
  useEffect(() => {
    let cancelled = false;
    detectCountry().then((c) => {
      if (!cancelled) countryRef.current = c;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Render the Turnstile widget for this form instance.
  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !ts || !turnstileRef.current || widgetIdRef.current != null) return;
        widgetIdRef.current = ts.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          size: "compact",
        });
      })
      .catch(() => {
        /* widget won't render — submit will prompt the user */
      });
    return () => {
      cancelled = true;
      try {
        if (widgetIdRef.current != null && window.turnstile) window.turnstile.remove(widgetIdRef.current);
      } catch {
        /* noop */
      }
      widgetIdRef.current = null;
    };
  }, []);

  const resetFeedback = useCallback(() => {
    setError("");
    setFieldErrors({});
    setSuccess(false);
  }, []);

  const resetTurnstile = useCallback(() => {
    try {
      if (widgetIdRef.current != null && window.turnstile) window.turnstile.reset(widgetIdRef.current);
    } catch {
      /* noop */
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFeedback();

    const token =
      typeof window !== "undefined" && window.turnstile && widgetIdRef.current != null
        ? window.turnstile.getResponse(widgetIdRef.current)
        : "";
    if (!token) {
      setError("Please complete the security check and try again.");
      return;
    }

    setLoading(true);

    const fd = new FormData();
    fd.set("_wpcf7", CF7_FORM_ID);
    fd.set("_wpcf7_version", "6.1");
    fd.set("_wpcf7_locale", "en_US");
    fd.set("_wpcf7_unit_tag", `wpcf7-f${CF7_FORM_ID}-headless`);
    fd.set("_wpcf7_container_post", "0");
    fd.set("_wpcf7_posted_data_hash", "");
    fd.set("full-name", name);
    fd.set("email-id", email);
    fd.set("phone", phone);
    fd.set("website-url", normalizeWebsite(website));
    fd.set("your-message", message);
    // Headless page context → CF7 hidden fields [page-title] / [page-url], since
    // the server-side [_post_title] / [_url] tags can't see a headless page.
    if (typeof window !== "undefined") {
      fd.set("page-title", document.title || "");
      fd.set("page-url", window.location.href || "");
    }
    // IP-based country → CF7 hidden field [country] (mail already references it).
    let country = countryRef.current;
    if (!country) {
      try {
        country = await detectCountry();
      } catch {
        country = "";
      }
    }
    fd.set("country", country || "");
    fd.set("_wpcf7_turnstile_response", token);

    try {
      const res = await fetch(cf7Endpoint(), { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (data.status === "mail_sent") {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setWebsite("");
        setMessage("");
        onSuccess?.();
      } else if (data.status === "validation_failed") {
        const fe = {};
        (data.invalid_fields || []).forEach((f) => {
          const key = CF7_FIELD_TO_KEY[f.field];
          if (key) fe[key] = f.message;
        });
        setFieldErrors(fe);
        setError(data.message || "Please fix the highlighted fields.");
      } else {
        // spam / aborted / mail_failed
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
      resetTurnstile();
    }
  };

  const isBanner = variant === "banner";
  const inputCls = isBanner
    ? `w-full border-0 bg-[#252525] outline-none px-5 ${compact ? "rounded-lg py-2.5" : "py-3.5"}`
    : "w-full border border-[#272727] bg-transparent px-5 py-4 outline-none";

  const fields = (
    <>
      <div className={isBanner ? `grid ${compact ? "gap-3" : "gap-4 xl:gap-4.5"}` : "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-4.5"}>
        <div>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Full Name*"
            className={inputCls}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "err-name" : undefined}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {fieldErrors.name ? (
            <p id="err-name" className="contact-form-field-error">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="Email*"
            className={inputCls}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "err-email" : undefined}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {fieldErrors.email ? (
            <p id="err-email" className="contact-form-field-error">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div>
          <input
            id="contact-phone"
            type="tel"
            required
            placeholder="Phone*"
            className={inputCls}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "err-phone" : undefined}
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {fieldErrors.phone ? (
            <p id="err-phone" className="contact-form-field-error">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
        <div>
          <input
            id="contact-agency-url"
            type="text"
            inputMode="url"
            placeholder="Your Website URL"
            className={inputCls}
            aria-invalid={Boolean(fieldErrors.website)}
            aria-describedby={fieldErrors.website ? "err-website" : undefined}
            name="website-url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          {fieldErrors.website ? (
            <p id="err-website" className="contact-form-field-error">
              {fieldErrors.website}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={isBanner ? (compact ? 3 : 4) : 6}
          placeholder="Message*"
          className={inputCls}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "err-message" : undefined}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {fieldErrors.message ? (
          <p id="err-message" className="contact-form-field-error">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {/* Cloudflare Turnstile — spam token required by the CF7 form */}
      <div ref={turnstileRef} className={isBanner ? "flex justify-center" : ""} />

      {error ? <p className="contact-form-banner contact-form-banner--error">{error}</p> : null}
      {success ? (
        <p className="contact-form-banner contact-form-banner--success">
          Thank you — your message was sent. We&apos;ll get back to you soon.
        </p>
      ) : null}

      <button
        type="submit"
        className={`btn btn-primary md:w-fit${isBanner ? " lg:mx-auto" : ""}`}
        disabled={loading}
      >
        {loading ? "Sending…" : "Send Message"}
        {!loading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 13 13"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={btnArrow || SUBMIT_ARROW_PATH} />
          </svg>
        ) : null}
      </button>
    </>
  );

  if (isBanner) {
    const boxCls = [
      bordered ? "border border-primary px-space-mini pb-space-mini pt-space-small backdrop-blur" : "",
      animate ? "animate fadeUp" : "",
    ]
      .filter(Boolean)
      .join(" ");
    return (
      <div className={boxCls}>
        {title && <h2 className="font-36 font-semibold text-center mb-4 leading-snug">{title}</h2>}
        <form className={`grid ${compact ? "gap-3" : "gap-4 xl:gap-4.5"}`} onSubmit={handleSubmit} autoComplete="off" noValidate>
          {fields}
        </form>
      </div>
    );
  }

  return (
    <div className="contact-quote-form min-w-0 flex-1">
      <form className="grid gap-4 xl:gap-4.5" onSubmit={handleSubmit} autoComplete="off" noValidate>
        {fields}
      </form>
    </div>
  );
}
