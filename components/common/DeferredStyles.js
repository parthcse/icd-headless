"use client";

import { useEffect } from "react";

/**
 * Loads non-critical, below-the-fold stylesheets after hydration so they don't
 * block the initial render. Currently: owl.carousel CSS (only the testimonial /
 * success-story carousels use it, and they're initialized afterInteractive).
 * A <noscript> fallback in the document head covers no-JS users.
 */
const DEFERRED_HREFS = ["/css/owl.carousel.min.css"];

export default function DeferredStyles() {
  useEffect(() => {
    for (const href of DEFERRED_HREFS) {
      if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) continue;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  return null;
}
