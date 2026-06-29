'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    // Expose so overlays (e.g. the quote popup) can pause/resume page scroll
    // while they're open — otherwise Lenis keeps scrolling the page behind.
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      if (window.lenis === lenis) delete window.lenis;
    };
  }, []);

  return null;
}
