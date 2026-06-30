"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/common/ContactForm";

// Fire this from anywhere to open the popup manually:
//   window.dispatchEvent(new Event(QUOTE_POPUP_EVENT))
export const QUOTE_POPUP_EVENT = "icd:open-quote-popup";

const AUTO_OPEN_DELAY = 15000; // 15s after the visitor lands
const SESSION_KEY = "icd_quote_popup_seen";

const VISION_CARDS = [
  {
    icon: "/assets/icons/popup-modern-tech.svg",
    title: "Modern Tech",
    text: "300+ projects. Clear vision.",
  },
  {
    icon: "/assets/icons/popup-proven-results.svg",
    title: "Proven Results",
    text: "Tech that wins. Lasting impact.",
  },
  {
    icon: "/assets/icons/popup-global-reach.svg",
    title: "Global Reach",
    text: "Innovating in 10+ countries.",
  },
  {
    icon: "/assets/icons/popup-certified-excellence.svg",
    title: "Certified Excellence",
    text: "Recognized for proven innovation.",
  },
];

const CloseIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function GetQuotePopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false); // drives the enter transition

  // Auto-open once per session, 15s after load.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
    }, AUTO_OPEN_DELAY);
    return () => clearTimeout(t);
  }, []);

  // Manual open from any "Get a Quote" button (always works).
  useEffect(() => {
    const handler = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
    };
    window.addEventListener(QUOTE_POPUP_EVENT, handler);
    return () => window.removeEventListener(QUOTE_POPUP_EVENT, handler);
  }, []);

  // Lock body scroll + Escape to close + enter transition while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Pause Lenis smooth-scroll so the wheel scrolls the popup, not the page.
    window.lenis?.stop();
    const raf = requestAnimationFrame(() => setShown(true));
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.lenis?.start();
      cancelAnimationFrame(raf);
      setShown(false);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Get a free quote"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        data-lenis-prevent
        className={`relative z-10 w-full max-w-[60rem] max-h-[95vh] overflow-y-auto overflow-x-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#181818] to-[#0c0c0c] shadow-2xl shadow-black/70 transition-all duration-300 ease-out ${
          shown ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.97]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* thin gradient hairline along the very top for a premium edge */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" aria-hidden="true" />

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur transition hover:rotate-90 hover:border-primary hover:bg-primary hover:text-white"
        >
          <CloseIcon />
        </button>

        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          {/* Left — value proposition + cards */}
          <div className="relative overflow-hidden p-7 sm:p-8 lg:p-9">
            {/* layered ambient gradients for depth */}
            <span className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-primary/30 blur-[90px]" aria-hidden="true" />
            <span className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary/10 blur-[80px]" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent" aria-hidden="true" />

            <div className="relative">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Icecube Digital
              </p>
              <h2 className="text-2xl font-bold leading-tight xl:text-[28px]">
                Your Vision, Our Solutions{" "}
                <span className="bg-gradient-to-r from-primary to-[#ffa46b] bg-clip-text text-transparent">
                  For Ultimate Growth
                </span>
              </h2>

              <div className="mt-6 grid gap-2.5">
                {VISION_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="group/card flex cursor-pointer items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/[0.05] ring-1 ring-inset ring-primary/20 transition-colors duration-200 group-hover/card:from-primary/40 group-hover/card:ring-primary/40">
                      <img src={card.icon} alt="" className="h-7 w-7" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-22 font-semibold leading-tight">{card.title}</p>
                      <p className="text-sm text-muted">{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="relative border-t border-white/10 bg-white/[0.02] p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
            <h2 className="mb-1 whitespace-nowrap text-2xl font-semibold xl:text-[26px]">Get A Free Quote</h2>
            <p className="mb-5 text-sm text-muted">Tell us about your project — we reply within one business day.</p>
            <ContactForm variant="banner" animate={false} bordered={false} compact />
          </div>
        </div>
      </div>
    </div>
  );
}
