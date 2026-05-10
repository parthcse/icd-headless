"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SITE_KEY =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY : undefined;

async function getRecaptchaToken() {
  if (!SITE_KEY || typeof window === "undefined") return "";
  const g = window.grecaptcha;
  if (!g?.execute) return "";
  return g.execute(SITE_KEY, { action: "contact_submit" });
}

export default function ServicesBannerForm({ title, btnArrow }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
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
        body: JSON.stringify({ name, email, message, website, recaptchaToken }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      setSuccess(true);
      setName(""); setEmail(""); setPhone(""); setWebsite(""); setMessage("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "border-0 bg-[#252525] outline-none py-3.5 px-5";

  return (
    <div className="border border-primary px-space pb-space-mini pt-space-small backdrop-blur animate fadeUp">
      <h3 className="font-36 xl:text-[40px] font-semibold text-center mb-4 leading-snug">{title}</h3>
      {success ? (
        <p className="text-center py-8 text-primary font-semibold">
          Thank you! We'll be in touch shortly.
        </p>
      ) : (
        <form className="grid gap-4 xl:gap-[1.125rem]" onSubmit={handleSubmit} noValidate>
          <input type="text" placeholder="Full Name*" className={inputCls} value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email*" className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Phone*" className={inputCls} value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="url" placeholder="Your Agency's URL" className={inputCls} value={website} onChange={(e) => setWebsite(e.target.value)} />
          <textarea rows={4} placeholder="Message*" className={inputCls} value={message} onChange={(e) => setMessage(e.target.value)} required />
          {error && <p className="text-sm text-orange-500">{error}</p>}
          <button type="submit" disabled={loading} className="btn btn-primary mx-auto">
            {loading ? "Sending…" : "Send Message"}
            {!loading && btnArrow && (
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                <path d={btnArrow} />
              </svg>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
