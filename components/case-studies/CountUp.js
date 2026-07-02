"use client";

import { useEffect, useRef, useState } from "react";

// Split a metric string like "472%", "5.0", "$50k", "1,200+" into an animatable
// number plus its non-numeric prefix/suffix. Non-numeric values pass through.
function parseValue(value) {
  const s = String(value ?? "").trim();
  const m = s.match(/^(\D*?)([\d.,]+)(.*)$/s);
  if (!m) return { prefix: s, number: null, suffix: "", decimals: 0 };
  const prefix = m[1];
  const suffix = m[3];
  const raw = m[2].replace(/,/g, "");
  const number = parseFloat(raw);
  if (Number.isNaN(number)) return { prefix: s, number: null, suffix: "", decimals: 0 };
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return { prefix, number, suffix, decimals };
}

const format = (n, decimals) => (decimals > 0 ? n.toFixed(decimals) : String(Math.round(n)));

// Counts up from 0 → value once the element scrolls into view.
export default function CountUp({ value, duration = 1600, className }) {
  const { prefix, number, suffix, decimals } = parseValue(value);
  const [display, setDisplay] = useState(number === null ? value : format(0, decimals));
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (number === null) return;
    const el = ref.current;
    if (!el) return;

    const run = () => {
      let start = null;
      const tick = (ts) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(format(number * eased, decimals));
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(format(number, decimals));
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [number, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {number === null ? value : `${prefix}${display}${suffix}`}
    </span>
  );
}
