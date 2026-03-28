"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BtnArrowIcon from "../icons/BtnArrowIcon";

const SITE_KEY =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY : undefined;

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
    <div className="contact-quote-form flex min-w-0 flex-1 flex-col justify-center gap-5">
      <form
        className="flex flex-col gap-5"
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

        <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
          <div className="min-w-0 flex-1">
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name*"
              className="contact-form-input"
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "err-name" : undefined}
            />
            {fieldErrors.name ? (
              <p id="err-name" className="contact-form-field-error">
                {fieldErrors.name}
              </p>
            ) : null}
          </div>
          <div className="min-w-0 flex-1">
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              className="contact-form-input"
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "err-email" : undefined}
            />
            {fieldErrors.email ? (
              <p id="err-email" className="contact-form-field-error">
                {fieldErrors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message*"
            className="contact-form-textarea"
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "err-message" : undefined}
          />
          {fieldErrors.message ? (
            <p id="err-message" className="contact-form-field-error">
              {fieldErrors.message}
            </p>
          ) : null}
        </div>

        {error ? <p className="contact-form-banner contact-form-banner--error">{error}</p> : null}
        {success ? (
          <p className="contact-form-banner contact-form-banner--success">
            Thank you — your message was sent. We&apos;ll get back to you soon.
          </p>
        ) : null}

        <button type="submit" className="btn btn-primary w-fit" disabled={loading}>
          {loading ? "Sending…" : "Send Message"}
          <BtnArrowIcon />
        </button>
      </form>
    </div>
  );
}
