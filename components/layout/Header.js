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

// Header.js - Optimized for Overlay
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    // Change: absolute instead of sticky, removed bg-black/35 and border-b
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-6 sm:px-6 lg:px-[60px] lg:py-8">
        <Link href="/" className="shrink-0">
          <span className="relative block h-[44px] w-[120px] sm:h-[52px] sm:w-[140px] lg:h-[56px] lg:w-[150px]">
            <Image src="/images/Icecube-Digital-Logo.svg" alt="Icecube Digital" fill className="object-contain object-left" priority />
          </span>
        </Link>

        {/* Navigation - Centered like Figma */}
        <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul className="flex items-center gap-x-8 xl:gap-x-10">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-normal text-[15px] text-white/90 tracking-wide transition-colors hover:text-[#f17e3f]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <QuoteCTAButton className="btn-cta-header hidden sm:inline-flex">
            Get a Quote
          </QuoteCTAButton>
          {/* Mobile toggle remains same */}
        </div>
      </div>
    </header>
  );
}
