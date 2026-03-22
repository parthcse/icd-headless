"use client";

import { motion } from "framer-motion";
import QuoteCTAButton from "../ui/QuoteCTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full overflow-hidden text-white">
      {/* Background is rendered in HeroHeaderBackground (shared with header) */}
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col justify-center px-4 pb-12 pt-[calc(var(--header-offset)+1.25rem)] sm:px-6 sm:pb-14 sm:pt-[calc(var(--header-offset)+1.75rem)] lg:px-[40px] lg:pb-[60px] lg:pt-[calc(var(--header-offset)+2rem)] min-h-[min(100svh,920px)] lg:min-h-[850px]">
        <div className="flex w-full flex-col items-center gap-9 sm:gap-10 lg:gap-[60px]">
          <div className="flex w-full flex-col items-center gap-8 border-b border-[#272727]/90 pb-8 sm:gap-10 sm:pb-10 lg:gap-[60px] lg:pb-[60px]">
            <div className="flex w-full items-center justify-center border-b border-[#272727]/90 pb-6 sm:pb-8 lg:pb-10">
              <div className="flex max-w-full flex-col items-center justify-center px-1 text-center text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
                <motion.h1
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="font-gilroy-bold text-[clamp(2.25rem,6.5vw,9.375rem)] leading-[1.02] tracking-[-0.02em]"
                >
                  Build, Grow, &amp; Scale
                </motion.h1>
                <motion.p
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-2 max-w-[min(100%,52rem)] font-gilroy-light text-[clamp(1.125rem,2.8vw,3.75rem)] leading-[1.15] sm:leading-[1.2] lg:leading-[100px]"
                >
                  Your eCommerce Store With Experts
                </motion.p>
              </div>
            </div>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-gilroy max-w-[872px] px-2 text-center text-[clamp(1.125rem,2.2vw,2.5rem)] leading-snug lg:leading-[32px]"
            >
              Your Success, Our Strategy
            </motion.p>
          </div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex w-full max-w-[1100px] flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
          >
            <p className="font-gilroy text-center text-[clamp(0.9375rem,1.6vw,1.25rem)] leading-relaxed text-zinc-100 lg:w-[min(567px,100%)] lg:text-left lg:leading-8">
              We design, develop, and market high-performing eCommerce websites that
              drive real growth.
            </p>

            <QuoteCTAButton className="w-full px-6 py-3.5 text-[15px] sm:w-auto sm:px-[34px] sm:py-[18px] sm:text-[18px] lg:text-[20px]">
              Get a free consultation
            </QuoteCTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
