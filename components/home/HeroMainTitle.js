"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

const TITLE = "Build, Grow & Scale";

const ease = [0.16, 1, 0.3, 1];

/** Wait for header / first paint before starting stagger (matches design timing). */
const BASE_DELAY_S = 0.5;

export default function HeroMainTitle() {
  const reduceMotion = useReducedMotion();
  const words = TITLE.split(/\s+/).filter(Boolean);

  return (
    <h1 className="main-title wpb" aria-label={TITLE}>
      <span aria-hidden="true" className="char-animate">
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            {i > 0 ? " " : null}
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={reduceMotion ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        delay: BASE_DELAY_S + i * 0.06,
                        duration: 1,
                        ease,
                      }
                }
              >
                {word}
              </motion.span>
            </span>
          </Fragment>
        ))}
      </span>
    </h1>
  );
}
