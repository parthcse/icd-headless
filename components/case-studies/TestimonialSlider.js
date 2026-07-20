"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/testimonials";

// Flatten a testimonial `quote` (string | array of paragraphs, each a string or
// an array of {text}/string parts) down to a single display string.
function quoteToText(quote) {
  const paras = Array.isArray(quote) ? quote : [quote];
  return paras
    .map((p) => (Array.isArray(p) ? p.map((x) => (typeof x === "string" ? x : x.text)).join("") : p))
    .join(" ");
}

const StarRow = () => (
  <div className="flex justify-center gap-1 text-primary" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ))}
  </div>
);

const ChevronIcon = ({ dir = "left" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
  </svg>
);

/**
 * One-at-a-time testimonial slider.
 *
 * `limit` caps how many of the shared TESTIMONIALS list is shown. The full list
 * is 29 — rendering all of them here produced 29 dots and an endless slider, so
 * we show the first few (the same ones the home carousel leads with). Change the
 * default below, or pass `limit` per page; `limit={0}` shows every testimonial.
 */
export default function TestimonialSlider({ limit = 6 }) {
  const slides = limit > 0 ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Autoplay — pauses on hover/focus within the slider.
  useEffect(() => {
    if (paused || count <= 1) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), 6500);
    return () => clearInterval(timer.current);
  }, [paused, count]);

  if (!count) return null;

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((t) => (
            <figure
              key={t.slug}
              className="w-full shrink-0 px-1 sm:px-2"
              aria-hidden={slides[index].slug !== t.slug}
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/[0.10] via-white/[0.04] to-transparent p-8 text-center backdrop-blur sm:p-10 lg:p-12">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-5 h-10 w-10 text-primary/30" aria-hidden="true">
                  <path d="M7.17 5A5.17 5.17 0 0 0 2 10.17V19h7.5v-7.5H5.75A1.75 1.75 0 0 1 7.5 9.75V8.5A3.5 3.5 0 0 0 4 5zm10.66 0A5.17 5.17 0 0 0 12.5 10.17V19H20v-7.5h-3.75A1.75 1.75 0 0 1 18 9.75V8.5A3.5 3.5 0 0 0 14.5 5z" />
                </svg>
                <StarRow />
                <blockquote className="mx-auto mt-5 max-w-3xl text-lg font-light italic leading-relaxed text-white/85 line-clamp-6">
                  {quoteToText(t.quote)}
                </blockquote>
                <figcaption className="mt-7 flex items-center justify-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.avatarAlt}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-primary/30"
                  />
                  <div className="text-left">
                    <p className="font-semibold leading-tight text-white">{t.name}</p>
                    {t.designation && <p className="text-sm text-muted">{t.designation}</p>}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black-light text-white/80 transition-colors hover:border-primary hover:text-primary sm:-left-3 lg:-left-6"
      >
        <ChevronIcon dir="left" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black-light text-white/80 transition-colors hover:border-primary hover:text-primary sm:-right-3 lg:-right-6"
      >
        <ChevronIcon dir="right" />
      </button>

      {/* Dots */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {slides.map((t, i) => (
          <button
            key={t.slug}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-primary" : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
