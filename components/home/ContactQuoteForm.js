"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SITE_KEY =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY : undefined;

const SUBMIT_ARROW_PATH =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

async function getRecaptchaToken() {
  if (!SITE_KEY || typeof window === "undefined") return "";
  const g = window.grecaptcha;
  if (!g?.execute) return "";
  return g.execute(SITE_KEY, { action: "contact_submit" });
}

export default function ContactQuoteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (!SITE_KEY || scriptAdded.current) return;
    if (document.querySelector(`script[src*="google.com/recaptcha/api.js"]`)) {
      scriptAdded.current = true;
      return;
    }
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    document.head.appendChild(s);
    scriptAdded.current = true;
  }, []);

  const resetFeedback = useCallback(() => {
    setError("");
    setFieldErrors({});
    setSuccess(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFeedback();
    setLoading(true);

    try {
      let recaptchaToken = "";
      try {
        recaptchaToken = await getRecaptchaToken();
      } catch {
        recaptchaToken = "";
      }

      if (SITE_KEY && !recaptchaToken) {
        setError("Security check is still loading. Please try again in a moment.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website,
          recaptchaToken,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 422 && data.fields) {
        setFieldErrors(data.fields);
        setError(data.error || "Please fix the highlighted fields.");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-quote-form min-w-0 flex-1">
      <form
        className="grid gap-4 xl:gap-4.5"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-4.5">
          <div>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Full Name*"
              className="w-full border border-[#272727] bg-transparent px-5 py-4 outline-none"
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
              className="w-full border border-[#272727] bg-transparent px-5 py-4 outline-none"
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
        </div>

        <textarea
          id="contact-message"
          name="message"
          required
          rows={8}
          placeholder="Message*"
          className="w-full border border-[#272727] bg-transparent px-5 py-4 outline-none"
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

        {error ? <p className="contact-form-banner contact-form-banner--error">{error}</p> : null}
        {success ? (
          <p className="contact-form-banner contact-form-banner--success">
            Thank you — your message was sent. We&apos;ll get back to you soon.
          </p>
        ) : null}

        <button type="submit" className="btn btn-primary w-fit" disabled={loading}>
          {loading ? "Sending…" : "Send Message"}
          {!loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={SUBMIT_ARROW_PATH} />
            </svg>
          ) : null}
        </button>
      </form>
    </div>
  );
}
