"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

/**
 * Scroll-based reveal animation.
 * - Uses framer-motion whileInView (IntersectionObserver under the hood).
 * - Respects `prefers-reduced-motion`.
 */
export default function Reveal({ children, className = "", delayMs = 0 }) {
  const reduceMotion = useReducedMotion();

  const transition = useMemo(
    () => ({
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      delay: delayMs / 1000,
    }),
    [delayMs]
  );

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

