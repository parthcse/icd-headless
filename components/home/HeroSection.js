"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-[76px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/75 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.22),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-[1320px] w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[13px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-5"
        >
          Full Service Digital Agency
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.06] tracking-tight"
        >
          Build, Grow, &amp; Scale
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-lg sm:text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto"
        >
          Your Ecommerce Growth &amp; Digital
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-[14px] font-semibold text-black hover:bg-orange-400 transition-all duration-300 hover:shadow-[0_0_24px_rgba(249,115,22,0.35)]"
          >
            Get a Free Quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
