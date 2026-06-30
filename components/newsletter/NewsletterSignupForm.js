"use client";

import { useState } from "react";

// Email field and button share the same height + radius so the stacked form
// reads as one consistent, rounded pair (the theme's .btn is square by default).
const fieldCls =
  "h-[3.25rem] w-full rounded-lg border border-[#2d2d2d] bg-[#1c1c1c] px-5 outline-none transition-colors focus:border-primary";

/**
 * Newsletter signup — posts to /api/newsletter, which subscribes the email to
 * Mailchimp (audience 6b6d8d4c0f) once MAILCHIMP_API_KEY is set. Until then the
 * route accepts gracefully so the UI still works.
 */
export default function NewsletterSignupForm() {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (hp.trim().length > 0) return; // honeypot
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, hp }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg border border-primary/40 bg-primary/10 px-5 py-4 text-center font-semibold">
        🎉 You&apos;re in! Check your inbox to confirm your subscription.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="nl-hp">Leave this field empty if you&apos;re human</label>
        <input id="nl-hp" name="nl-hp" type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="flex flex-col gap-3">
        <input
          id="nl-email"
          type="email"
          required
          placeholder="Your email address"
          className={fieldCls}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary h-[3.25rem] w-full justify-center rounded-lg text-[1em] xl:text-[1em]" disabled={status === "loading"}>
          {status === "loading" ? "Joining…" : "Try it"}
        </button>
      </div>

      {error ? <p className="mt-3 text-sm font-semibold text-red-500">{error}</p> : null}
    </form>
  );
}
