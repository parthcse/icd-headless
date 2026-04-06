"use client";

import { motion, useReducedMotion } from "framer-motion";

const TITLE = "Build, Grow, & Scale";

const ease = [0.16, 1, 0.3, 1];

export default function HeroMainTitle() {
  const reduceMotion = useReducedMotion();
  const chars = TITLE.split("").map((c) => (c === " " ? "\u00A0" : c));
  return (
    <h1 className="main-title wpb">
      <span className="sr-only">{TITLE}</span>
      <span aria-hidden="true" className="char-animate">
        {chars.map((char, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              initial={reduceMotion ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      delay: i * 0.02,
                      duration: 1,
                      ease,
                    }
              }
            >
              {char}
            </motion.span>
          </span>
        ))}
      </span>
    </h1>
  );
}
