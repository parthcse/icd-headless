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

// HeroSection.js - Natural Height & Seamless Background
export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Background graphic: Now covers the entire section including the area under the header */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />
      </div>

      <div className="site-gutter relative z-10">
        {/* Change: Removed min-h. 
            Added pt-32 (lg:pt-48) to push content down so it doesn't overlap the absolute header.
        */}
        <div className="site-container flex w-full flex-col items-center justify-center pb-20 pt-32 lg:pb-24 lg:pt-52">
          
          <div className="flex w-full flex-col items-center">
            
            {/* Top Border Line Section */}
            <div className="flex w-full flex-col items-center border-b border-white/10 pb-10 lg:pb-16">
              
              {/* Heading Group */}
              <div className="flex w-full items-center justify-center border-b border-white/10 pb-10 lg:pb-12">
                <div className="flex flex-col items-center text-center">
                  <motion.h1 className="font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight">
                    Build, Grow, &amp; Scale
                  </motion.h1>
                  <motion.p className="mt-4 text-[clamp(1.25rem,2.5vw,2.25rem)] font-light text-white/80">
                    Your eCommerce Store With Experts
                  </motion.p>
                </div>
              </div>

              {/* Secondary Heading */}
              <motion.p className="mt-10 text-center text-[clamp(1.5rem,3vw,2.75rem)] font-medium text-white lg:mt-12">
                Your Success, Our Strategy
              </motion.p>
            </div>

            {/* Bottom Content Area */}
            <motion.div className="mt-10 flex w-full max-w-[1100px] flex-col items-center justify-between gap-8 lg:mt-16 lg:flex-row">
              <p className="max-w-[580px] text-center text-[18px] leading-relaxed text-zinc-400 lg:text-left">
                We design, develop, and market high-performing eCommerce websites that drive real growth.
              </p>
              <QuoteCTAButton className="w-full sm:w-auto">
                Get a free consultation
              </QuoteCTAButton>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}