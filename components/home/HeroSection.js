"use client";

import { motion } from "framer-motion";
import QuoteCTAButton from "../ui/QuoteCTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full text-white">
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center px-4 pb-10 pt-[calc(var(--header-offset)+1rem)] sm:px-6 lg:px-[40px] lg:pb-[clamp(2rem,4vh,3.75rem)] lg:pt-[calc(var(--header-offset)+clamp(0.5rem,2vh,2rem))] min-h-[min(100svh,920px)] lg:min-h-[min(100vh,850px)]">
        <div className="flex w-full flex-col items-center gap-[clamp(1.5rem,3vh,3.75rem)]">
          <div className="flex w-full flex-col items-center gap-[clamp(1.5rem,3vh,3.75rem)] border-b border-[#272727] pb-[clamp(1.5rem,3vh,3.75rem)]">
            <div className="flex w-full items-center justify-center border-b border-[#272727] pb-[clamp(1rem,2.5vh,2.5rem)]">
              <div className="flex flex-col items-center text-center">
                <motion.h1 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-gilroy-bold text-[clamp(2.25rem,6.5vw,9.375rem)] leading-[1.02] tracking-[-0.02em]">
                  Build, Grow, &amp; Scale
                </motion.h1>
                <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mt-1 font-gilroy-light text-[clamp(1.125rem,2.8vw,3.75rem)] leading-[1.15] lg:leading-[1.6]">
                  Your eCommerce Store With Experts
                </motion.p>
              </div>
            </div>
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="font-gilroy max-w-[872px] text-center text-[clamp(1.125rem,2.2vw,2.5rem)] leading-snug">
              Your Success, Our Strategy
            </motion.p>
          </div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex w-full max-w-[1100px] flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <p className="font-gilroy text-center text-[clamp(0.9375rem,1.5vw,1.25rem)] leading-relaxed text-zinc-200 lg:max-w-[567px] lg:text-left lg:leading-8">
              We design, develop, and market high-performing eCommerce websites that drive real growth.
            </p>
            <QuoteCTAButton className="w-full sm:w-auto px-6 py-3.5 sm:px-[34px] sm:py-[18px] text-[16px] lg:text-[20px]">
              Get a free consultation
            </QuoteCTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
