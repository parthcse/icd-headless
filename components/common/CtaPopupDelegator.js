"use client";

import { useEffect } from "react";

/**
 * Site-wide behaviour: any button-styled placeholder CTA — an
 * `<a class="btn … " href="#">` — opens the GetQuotePopup instead of
 * navigating. This covers section CTAs (imageText / processSteps / checkList /
 * pricing plans / etc.) and the header "Get a Quote" without wiring each one
 * individually. Real-href CTAs and non-".btn" links (e.g. nav toggles) are
 * untouched. Primary CTAs that are already real <button>s dispatch the same
 * event directly, so both paths open the same popup.
 */
export default function CtaPopupDelegator() {
  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest?.('a.btn[href="#"]');
      if (!el) return;
      e.preventDefault();
      window.dispatchEvent(new Event("icd:open-quote-popup"));
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
