"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Dependency-free replacement for the jQuery Owl Carousel.
 *
 * WHY: Owl is a jQuery plugin, so it forced jQuery (30 KiB) + Owl (12 KiB) onto
 * all ~386 pages when only 2 of them actually contain a carousel. This renders
 * the SAME DOM structure and class names Owl produced (.owl-carousel /
 * .owl-stage-outer / .owl-stage / .owl-item / .owl-nav / .owl-prev / .owl-next)
 * so every existing style rule — the per-section .owl-nav placement and the
 * shared button styling in styles/input.css — keeps applying unchanged.
 *
 * Modes (matching the two old configs):
 *  - autoWidth      each slide keeps its natural width (testimonials, success
 *                   stories: cards size themselves via max-w-* + me-* classes)
 *  - responsive     {minWidth: itemsVisible} → fixed N-up with `gap` (culture)
 *
 * Looping is seamless: the track renders the slides twice and snaps back
 * transition-free when it crosses into the clone set, so autoplay never visibly
 * rewinds.
 */

const PREV_PATH =
  "M9.27999 16.3199C9.62666 16.6666 9.62666 16.9866 9.27999 17.2799C8.93332 17.6266 8.61332 17.6266 8.31999 17.2799L0.47999 9.39992C0.15999 9.07992 0.15999 8.74659 0.47999 8.39992L8.31999 0.519921C8.61332 0.173254 8.93332 0.173254 9.27999 0.519921C9.62666 0.813255 9.62666 1.13325 9.27999 1.47992L2.11999 8.91992L9.27999 16.3199Z";
const NEXT_PATH =
  "M0.52001 16.3199L7.68001 8.91992L0.52001 1.47992C0.173343 1.13325 0.173343 0.813255 0.52001 0.519921C0.866676 0.173254 1.18668 0.173254 1.48001 0.519921L9.32001 8.39992C9.64001 8.74659 9.64001 9.07992 9.32001 9.39992L1.48001 17.2799C1.18668 17.6266 0.866676 17.6266 0.52001 17.2799C0.173343 16.9866 0.173343 16.6666 0.52001 16.3199Z";

const NavIcon = ({ d }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor" aria-hidden="true">
    <path d={d} />
  </svg>
);

// Largest breakpoint <= viewport wins (same semantics as Owl's `responsive`).
function itemsForWidth(responsive, width) {
  if (!responsive) return 0;
  let items = 1;
  for (const bp of Object.keys(responsive).map(Number).sort((a, b) => a - b)) {
    if (width >= bp) items = responsive[bp];
  }
  return items;
}

export default function Carousel({
  children,
  className = "",
  autoWidth = false,
  responsive = null,
  gap = 0,
  autoplay = 0, // ms between slides; 0 = off
  nav = true,
}) {
  const slides = Array.isArray(children) ? children.filter(Boolean) : [children].filter(Boolean);
  const count = slides.length;

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [perView, setPerView] = useState(() => itemsForWidth(responsive, 1280));
  const [paused, setPaused] = useState(false);

  const itemRefs = useRef([]);
  const timerRef = useRef(null);

  // Track how many items fit, for the responsive (fixed N-up) mode.
  useEffect(() => {
    if (!responsive) return;
    const onResize = () => setPerView(itemsForWidth(responsive, window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [responsive]);

  // Position the track by measuring real offsets — works for natural-width
  // slides and fixed N-up alike, and stays correct when widths change.
  const measure = useCallback(() => {
    const first = itemRefs.current[0];
    const target = itemRefs.current[index];
    if (!first || !target) return;
    setOffset(target.offsetLeft - first.offsetLeft);
  }, [index]);

  useLayoutEffect(() => {
    measure();
  }, [measure, perView, count]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  // Crossing into the cloned set means we've completed a full cycle — snap back
  // to the equivalent real slide with the transition off so it's invisible.
  useEffect(() => {
    if (index < count) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setIndex(index - count);
    }, 500); // must match the CSS transition duration below
    return () => clearTimeout(t);
  }, [index, count]);

  // Re-enable the transition on the frame after a silent snap.
  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => {
    setIndex((i) => {
      if (i > 0) return i - 1;
      // Stepping back from the first slide: jump silently to the clone set so
      // the move to the previous slide animates in the natural direction.
      setAnimate(false);
      return count;
    });
  }, [count]);

  useEffect(() => {
    if (!autoplay || paused || count <= 1) return;
    timerRef.current = setInterval(next, autoplay);
    return () => clearInterval(timerRef.current);
  }, [autoplay, paused, count, next]);

  if (!count) return null;

  // Render the slides twice so the loop never runs out of track.
  const rendered = [...slides, ...slides];

  const itemStyle = responsive
    ? { flex: `0 0 calc((100% - ${gap * (perView - 1)}px) / ${perView})`, marginRight: `${gap}px` }
    : { flex: "0 0 auto" };

  return (
    <div
      className={`${className} owl-carousel owl-loaded`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            transform: `translate3d(-${offset}px, 0, 0)`,
            transition: animate ? "transform 0.5s ease" : "none",
          }}
        >
          {rendered.map((child, i) => (
            <div
              key={i}
              className="owl-item"
              style={itemStyle}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              aria-hidden={i >= count ? "true" : undefined}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {nav && count > 1 && (
        <div className="owl-nav">
          <button type="button" className="owl-prev" aria-label="Previous" onClick={prev}>
            <NavIcon d={PREV_PATH} />
          </button>
          <button type="button" className="owl-next" aria-label="Next" onClick={next}>
            <NavIcon d={NEXT_PATH} />
          </button>
        </div>
      )}
    </div>
  );
}
