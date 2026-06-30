"use client";

import { useEffect, useRef, useState } from "react";

const HEADER_OFFSET = 112; // clear the fixed header when scrolling to a section

export default function BlogTableOfContents({ html }) {
  const ref = useRef(null);
  const [activeId, setActiveId] = useState(null);

  // Wire smooth-scroll on click + active-section observer.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const links = Array.from(root.querySelectorAll('a[href^="#"]'));
    const ids = links
      .map((a) => decodeURIComponent((a.getAttribute("href") || "").slice(1)))
      .filter(Boolean);
    const headings = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!headings.length) return;

    // Something is highlighted from the start.
    setActiveId((cur) => cur ?? headings[0].id);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = decodeURIComponent((a.getAttribute("href") || "").slice(1));
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      setActiveId(id);
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -HEADER_OFFSET });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      window.history.replaceState(null, "", `#${id}`);
    };
    root.addEventListener("click", onClick);

    // Active = the lowest heading whose top has passed the offset band. We track
    // each heading's position via the observer and recompute on every change so
    // it's correct scrolling both up and down, and at the very bottom.
    const ratios = new Map();
    const recompute = () => {
      // Heading is "above/at" the band top if its top <= offset band.
      const bandTop = HEADER_OFFSET + 24;
      let current = null;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= bandTop) current = h.id;
      }
      // Past the last heading (e.g. scrolled into the footer) → keep last.
      if (!current) {
        // Above the first heading → first; otherwise keep whatever we had.
        const firstTop = headings[0].getBoundingClientRect().top;
        current = firstTop > bandTop ? headings[0].id : null;
      }
      if (current) setActiveId(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => ratios.set(en.target.id, en.isIntersecting));
        recompute();
      },
      { rootMargin: `-${HEADER_OFFSET}px 0px 0px 0px`, threshold: [0, 1] }
    );
    headings.forEach((h) => observer.observe(h));
    recompute();

    return () => {
      root.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, [html]);

  // Reflect active onto links + keep the active link visible inside the sidebar's
  // own scroll area (never scrolls the page).
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let activeLink = null;
    root.querySelectorAll('a[href^="#"]').forEach((a) => {
      const id = decodeURIComponent((a.getAttribute("href") || "").slice(1));
      const on = id === activeId;
      a.classList.toggle("toc-active", on);
      if (on) activeLink = a;
    });
    if (!activeLink) return;

    const container = root.closest("[data-toc-scroll]");
    if (!container || container.scrollHeight <= container.clientHeight) return; // not scrollable (e.g. mobile)
    const c = container.getBoundingClientRect();
    const l = activeLink.getBoundingClientRect();
    let delta = 0;
    if (l.top < c.top + 8) delta = -(c.top - l.top + 16);
    else if (l.bottom > c.bottom - 8) delta = l.bottom - c.bottom + 16;
    if (delta === 0) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({ top: container.scrollTop + delta, behavior: reduceMotion ? "auto" : "smooth" });
  }, [activeId]);

  return <div ref={ref} className="blog-toc" dangerouslySetInnerHTML={{ __html: html }} />;
}
