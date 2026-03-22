"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import QuoteCTAButton from "../ui/QuoteCTAButton";

const navLinks = [
  { label: "Company", href: "/company" },
  { label: "Services", href: "/services" },
  { label: "Industry", href: "/industry" },
  { label: "Our Work", href: "/our-work" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.08] bg-black/25 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-8 lg:px-[40px] lg:py-[30px]">
        <Link href="/" className="flex shrink-0 items-center">
          <span className="relative h-[48px] w-[130px] sm:h-[56px] sm:w-[150px] lg:h-[63px] lg:w-[170px]">
            <Image
              src="/images/Icecube-Digital-Logo.svg"
              alt="Icecube Digital"
              fill
              className="object-contain object-left drop-shadow-sm"
              priority
            />
          </span>
        </Link>

        <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:px-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 xl:gap-x-8 2xl:gap-x-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-gilroy-medium text-[15px] text-white tracking-[0.02em] drop-shadow-sm transition-colors duration-200 hover:text-[#f17e3f] xl:text-[17px] 2xl:text-[18px] 2xl:tracking-[0.36px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <QuoteCTAButton className="hidden sm:inline-flex" href="/contact">
            Get a Quote
          </QuoteCTAButton>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-5 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-[#f17e3f]"
                >
                  {link.label}
                </Link>
              ))}
              <QuoteCTAButton
                className="mt-3 w-full sm:w-auto"
                href="/contact"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </QuoteCTAButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
