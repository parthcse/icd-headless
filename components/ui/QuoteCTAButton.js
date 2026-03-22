"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Scoped CTA — class `icd-quote-cta` only.
 * Hover interactions handled with Framer Motion and scoped to the arrow only.
 * - No transform/scale on the button itself
 * - No shadows applied
 * Arrow behavior:
 * - default arrow (↗) visible by default
 * - on hover default arrow animates up & fades out; hover-arrow (→) rises from bottom
 * - on mouse leave hover-arrow animates down & fades out; default arrow drops in from above
 */
export default function QuoteCTAButton({
  href = "/contact",
  children,
  className = "",
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "icd-quote-cta relative inline-flex items-center justify-center gap-3 overflow-hidden",
        "rounded-sm border border-white/10 bg-[#f17e3f] px-5 py-3 text-[15px] font-gilroy-bold text-white",
        "shadow-none transition-colors duration-200 ease-out",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="relative z-10 whitespace-nowrap">{children}</span>

      <span className="icd-quote-cta__arrow-wrap relative z-10 inline-flex h-5 w-5 shrink-0 items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          {!hovered ? (
            <motion.svg
              key="arrow-default"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="h-full w-full text-white"
              aria-hidden
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="arrow-hover"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full text-white"
              aria-hidden
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>
    </Link>
  );
}
