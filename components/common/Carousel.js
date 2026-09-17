"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import useDragSwipe from "@/components/common/useDragSwipe";

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
 *  - responsive     {minWidth: itemsVisible} → fixed N-up with `gap` (culture).
 *                   Fractions work too: 1.15 shows one slide plus a peek of the
 *                   next, which tells people on touch devices they can swipe.
 *
 * Options:
 *  - loop           (default true) seamless loop: the track renders the slides
 *                   twice and snaps back transition-free when it crosses into the
 *                   clone set, so autoplay never visibly rewinds. Set false for a
 *                   strip whose items must ALL stay clickable (the clones are
 *                   `inert`), e.g. tab buttons — it then stops at either end.
 *  - mobileOnly     a slider below 768px only. From md up the stage becomes a
 *                   plain CSS grid laid out by `stageClassName` (e.g.
 *                   "md:grid-cols-2 lg:grid-cols-3 md:gap-8"); swipe, autoplay,
 *                   nav and loop clones are all switched off there. Done in CSS
 *                   (styles/input.css → .carousel-mobile-only), not by swapping
 *                   components in JS, so the server HTML is already correct at
 *                   every width and nothing jumps when the page hydrates.
 */

const PREV_PATH =
  "M9.27999 16.3199C9.62666 16.6666 9.62666 16.9866 9.27999 17.2799C8.93332 17.6266 8.61332 17.6266 8.31999 17.2799L0.47999 9.39992C0.15999 9.07992 0.15999 8.74659 0.47999 8.39992L8.31999 0.519921C8.61332 0.173254 8.93332 0.173254 9.27999 0.519921C9.62666 0.813255 9.62666 1.13325 9.27999 1.47992L2.11999 8.91992L9.27999 16.3199Z";
const NEXT_PATH =
  "M0.52001 16.3199L7.68001 8.91992L0.52001 1.47992C0.173343 1.13325 0.173343 0.813255 0.52001 0.519921C0.866676 0.173254 1.18668 0.173254 1.48001 0.519921L9.32001 8.39992C9.64001 8.74659 9.64001 9.07992 9.32001 9.39992L1.48001 17.2799C1.18668 17.6266 0.866676 17.6266 0.52001 17.2799C0.173343 16.9866 0.173343 16.6666 0.52001 16.3199Z";

// Must match the min-width of the .carousel-mobile-only media query in styles/input.css.
const MOBILE_ONLY_MIN_WIDTH = 768;

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
  stageClassName = "",
  autoWidth = false,
  responsive = null,
  gap = 0,
  autoplay = 0, // ms between slides; 0 = off
  nav = true,
  loop = true,
  mobileOnly = false,
}) {
  const slides = Array.isArray(children) ? children.filter(Boolean) : [children].filter(Boolean);
  const count = slides.length;

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(true);
  // A mobile-only slider is by definition used on small screens, so start from
  // the smallest breakpoint; everything else keeps the desktop-first default.
  const [perView, setPerView] = useState(() => itemsForWidth(responsive, mobileOnly ? 0 : 1280));
  const [paused, setPaused] = useState(false);
  // True once we know a mobileOnly carousel is on a wide screen (i.e. it's a grid).
  const [isGrid, setIsGrid] = useState(false);

  const itemRefs = useRef([]);
  const outerRef = useRef(null);
  const timerRef = useRef(null);
  const atEndRef = useRef(false);

  // Track how many items fit, for the responsive (fixed N-up) mode.
  useEffect(() => {
    if (!responsive) return;
    const onResize = () => setPerView(itemsForWidth(responsive, window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [responsive]);

  useEffect(() => {
    if (!mobileOnly) return;
    const mq = window.matchMedia(`(min-width: ${MOBILE_ONLY_MIN_WIDTH}px)`);
    const onChange = () => {
      setIsGrid(mq.matches);
      if (mq.matches) setIndex(0); // so it restarts at the first slide if resized back down
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mobileOnly]);

  // Position the track by measuring real offsets — works for natural-width
  // slides and fixed N-up alike, and stays correct when widths change.
  const measure = useCallback(() => {
    const first = itemRefs.current[0];
    const target = itemRefs.current[index];
    if (!first || !target) return;
    let next = target.offsetLeft - first.offsetLeft;
    if (!loop) {
      // No clones to scroll into, so never leave empty space after the last
      // slide: clamp to where the last slide's right edge meets the viewport.
      const last = itemRefs.current[count - 1];
      const outer = outerRef.current;
      if (last && outer) {
        const max = Math.max(0, last.offsetLeft + last.offsetWidth - first.offsetLeft - outer.clientWidth);
        atEndRef.current = next >= max - 1;
        next = Math.min(next, max);
      }
    }
    setOffset(next);
  }, [index, loop, count]);

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
    if (!loop || index < count) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setIndex(index - count);
    }, 500); // must match the CSS transition duration below
    return () => clearTimeout(t);
  }, [loop, index, count]);

  // Re-enable the transition on the frame after a silent snap.
  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const next = useCallback(() => {
    if (!loop) {
      if (atEndRef.current) return;
      setIndex((i) => Math.min(i + 1, count - 1));
      return;
    }
    setIndex((i) => i + 1);
  }, [loop, count]);

  const prev = useCallback(() => {
    if (!loop) {
      setIndex((i) => Math.max(i - 1, 0));
      return;
    }
    setIndex((i) => {
      if (i > 0) return i - 1;
      // Stepping back from the first slide: jump silently to the clone set so
      // the move to the previous slide animates in the natural direction.
      setAnimate(false);
      return count;
    });
  }, [loop, count]);

  const sliderActive = !(mobileOnly && isGrid);

  useEffect(() => {
    if (!autoplay || paused || count <= 1 || !sliderActive) return;
    timerRef.current = setInterval(next, autoplay);
    return () => clearInterval(timerRef.current);
  }, [autoplay, paused, count, next, sliderActive]);

  // Drag / swipe. Pausing autoplay while a finger is down stops the track
  // advancing out from under the gesture.
  const { dragX, handlers: dragHandlers } = useDragSwipe({
    onNext: next,
    onPrev: prev,
    onDragChange: setPaused,
  });

  if (!count) return null;

  // Looping renders the slides twice so the track never runs out.
  const rendered = loop ? [...slides, ...slides] : slides;

  // autoWidth wins when both are given: slides keep their intrinsic width.
  const itemStyle =
    responsive && !autoWidth
      ? // minWidth 0: flex items default to min-width:auto, so a slide whose content
        // has a long unbreakable word would widen past its N-up share and make the
        // strip uneven. The share is authoritative; size the content to fit it.
        { flex: `0 0 calc((100% - ${gap * (perView - 1)}px) / ${perView})`, minWidth: 0, marginRight: `${gap}px` }
      : { flex: "0 0 auto" };

  return (
    <div
      className={`${className} owl-carousel owl-loaded${mobileOnly ? " carousel-mobile-only" : ""}`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* touch-action: pan-y lets the browser keep vertical page scrolling while
          useDragSwipe claims horizontal gestures for the slider. */}
      <div
        ref={outerRef}
        className="owl-stage-outer"
        style={{ touchAction: "pan-y" }}
        // As a desktop grid, a mouse drag must not swallow the next click.
        {...(sliderActive ? dragHandlers : {})}
      >
        <div
          className={`owl-stage ${stageClassName}`.trim()}
          style={{
            // dragX follows the finger 1:1; the transition is off mid-drag so it
            // tracks exactly, then back on for the settle/snap animation.
            transform: `translate3d(${-offset + dragX}px, 0, 0)`,
            transition: animate && dragX === 0 ? "transform 0.5s ease" : "none",
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
              // `inert` (NOT aria-hidden) on the loop clones. aria-hidden alone
              // hides them from screen readers while leaving their links
              // keyboard-focusable — an axe/Lighthouse failure ("[aria-hidden]
              // elements contain focusable descendants") and a real keyboard
              // trap. inert removes the subtree from the a11y tree *and* from
              // the tab order, so the duplicated slides can't be reached twice.
              {...(i >= count ? { inert: true } : {})}
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
