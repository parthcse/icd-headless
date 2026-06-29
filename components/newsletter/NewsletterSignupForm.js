"use client";

import { useState } from "react";

/**
 * Newsletter signup — UI only for now (reference). Wire `onSubmit` to your
 * email provider (Mailchimp, etc.) or a /api/newsletter route later.
 */
export default function NewsletterSignupForm() {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (hp.trim().length > 0) return; // honeypot
    // TODO: connect to the email provider here.
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className="rounded-lg border border-primary/40 bg-primary/10 px-5 py-4 text-center font-semibold">
        🎉 You&apos;re in! Watch your inbox every Wednesday.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
      {/* honeypot */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="nl-hp">Leave this field empty if you&apos;re human</label>
        <input id="nl-hp" name="nl-hp" type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="nl-email"
          type="email"
          required
          placeholder="Your email address"
          className="w-full rounded-lg border border-[#2d2d2d] bg-[#1c1c1c] px-5 py-3.5 outline-none transition-colors focus:border-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary shrink-0 sm:w-fit">
          Try it
        </button>
      </div>
    </form>
  );
}
