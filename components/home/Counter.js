"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function Counter({ end, suffix = "+", prefix = "", duration = 2000, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400">
        {prefix}{count}{suffix}
      </p>
      <p className="mt-2 text-[13px] sm:text-[14px] text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}
