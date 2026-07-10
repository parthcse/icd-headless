"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ContactForm from "@/components/common/ContactForm";
import { getPopupVariant, subscribePopupVariant } from "@/components/common/popupVariantStore";

// Fire this from anywhere to open the popup manually:
//   window.dispatchEvent(new Event(QUOTE_POPUP_EVENT))
export const QUOTE_POPUP_EVENT = "icd:open-quote-popup";

const AUTO_OPEN_DELAY = 15000; // 15s after the visitor lands
const CLOSE_MS = 300; // must match the panel/overlay transition duration
const SNOOZE_KEY = "icd_quote_autoopen_until"; // localStorage timestamp
const SNOOZE_MS = 24 * 60 * 60 * 1000; // 24h

// The 24h snooze ONLY suppresses the auto-open; manual button opens ignore it.
function autoOpenSnoozed() {
  try {
    return Date.now() < Number(localStorage.getItem(SNOOZE_KEY) || 0);
  } catch {
    return false;
  }
}
function snoozeAutoOpen() {
  try {
    localStorage.setItem(SNOOZE_KEY, String(Date.now() + SNOOZE_MS));
  } catch {
    /* ignore */
  }
}

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
  const [shown, setShown] = useState(false); // false = hidden (enter/exit); true = visible
  const autoRef = useRef(false); // is the current open an auto-open?
  const autoTimer = useRef(null); // pending 15s auto-open timer
  const closeTimer = useRef(null); // pending unmount-after-exit timer
  const [variant, setVariant] = useState(null); // page-specific popup variant, or null = default

  // Pick up the current page's popup variant (image + form copy + delay), if any.
  useEffect(() => {
    setVariant(getPopupVariant());
    return subscribePopupVariant(setVariant);
  }, []);

  const openPopup = useCallback((viaAuto) => {
    clearTimeout(closeTimer.current);
    autoRef.current = viaAuto;
    setOpen(true);
  }, []);

  // Animate out, then unmount after the transition finishes.
  const requestClose = useCallback(() => {
    if (autoRef.current) snoozeAutoOpen(); // dismissing the auto-open → snooze 24h
    setShown(false);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_MS);
  }, []);

  // A submitted lead shouldn't be auto-pestered either.
  const handleSuccess = useCallback(() => snoozeAutoOpen(), []);

  // Auto-open once, N seconds after load — unless snoozed (closed/submitted in last 24h).
  useEffect(() => {
    if (autoOpenSnoozed()) return;
    autoTimer.current = setTimeout(() => openPopup(true), variant?.autoDelay ?? AUTO_OPEN_DELAY);
    return () => clearTimeout(autoTimer.current);
  }, [openPopup, variant]);

  // Manual open from any "Get a Quote" button — always works, pre-empts auto-open.
  useEffect(() => {
    const handler = () => {
      clearTimeout(autoTimer.current);
      openPopup(false);
    };
    window.addEventListener(QUOTE_POPUP_EVENT, handler);
    return () => window.removeEventListener(QUOTE_POPUP_EVENT, handler);
  }, [openPopup]);

  // Lock body scroll + Escape to close + enter transition while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") requestClose();
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
    };
  }, [open, requestClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Get a free quote"
      onClick={requestClose}
    >
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ease-out ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

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
          onClick={requestClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur transition hover:rotate-90 hover:border-primary hover:bg-primary hover:text-white"
        >
          <CloseIcon />
        </button>

        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          {/* Left — value proposition + cards */}
          {variant ? (
            <div className="relative min-h-[16rem] overflow-hidden bg-black-light lg:min-h-full">
              <img src={variant.image} alt="" className="h-full w-full object-cover" />
            </div>
          ) : (
          <div className="relative overflow-hidden p-7 sm:p-8 lg:p-9">
            {/* layered ambient gradients for depth */}
            <span className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-primary/30 blur-[90px]" aria-hidden="true" />
            <span className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary/10 blur-[80px]" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent" aria-hidden="true" />

            <div className="relative">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Icecube Digital
              </p>
              <h2 className="font-30 font-bold">
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
          )}

          {/* Right — contact form */}
          <div className="relative border-t border-white/10 bg-white/[0.02] p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
            <h2 className="mb-1 font-24">{variant?.title || "Get A Free Quote"}</h2>
            <p className="mb-5 text-sm text-muted">{variant?.subtitle || "Tell us about your project — we reply within one business day."}</p>
            <ContactForm variant="banner" animate={false} bordered={false} compact onSuccess={handleSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}
