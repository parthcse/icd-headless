"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "../animations/Reveal";

const tabs = [
  { id: "digital-marketing", label: "Digital\nMarketing", icon: "📊" },
  { id: "magento", label: "Magento\nDevelopment", icon: "🔧" },
  { id: "shopify", label: "Shopify\nDevelopment", icon: "🛒" },
  { id: "woocommerce", label: "WooCommerce\nDevelopment", icon: "🔌" },
  { id: "wordpress", label: "WordPress\nDevelopment", icon: "📝" },
  { id: "white-label", label: "White Label\nServices", icon: "🏷️" },
];

const figmaServiceLinksLeft = [
  { icon: "↗", label: "AI SEO Services", href: "#" },
  { icon: "↗", label: "AI Digital Marketing Services", href: "#" },
  { icon: "↗", label: "Answer Engine Optimization Services", href: "#" },
  { icon: "↗", label: "Digital Marketing Services", href: "#" },
];

const figmaServiceLinksRight = [
  { icon: "↗", label: "Professional SEO Services", href: "#" },
  { icon: "↗", label: "PPC Services", href: "#" },
  { icon: "↗", label: "Email Marketing Services", href: "#" },
];

const tabPanels = {
  "digital-marketing": {
    body:
      "From search to social, we build data-led campaigns that scale with your business. Our team blends strategy, creative, and analytics so every touchpoint moves prospects closer to conversion—whether you are launching a new brand or scaling an established store.",
    linksLeft: figmaServiceLinksLeft,
    linksRight: figmaServiceLinksRight,
  },
  magento: {
    body:
      "Enterprise-grade Magento builds with clean architecture, fast storefronts, and integrations that match your operations. We handle custom modules, migrations, performance tuning, and ongoing support so your commerce platform stays reliable at scale.",
    linksLeft: [
      { icon: "↗", label: "Magento 2 Development", href: "#" },
      { icon: "↗", label: "Custom Extensions", href: "#" },
      { icon: "↗", label: "Performance & Hyvä", href: "#" },
      { icon: "↗", label: "Migration & Upgrades", href: "#" },
    ],
    linksRight: [
      { icon: "↗", label: "B2B & Multi-store", href: "#" },
      { icon: "↗", label: "ERP & CRM Integrations", href: "#" },
      { icon: "↗", label: "Managed Support", href: "#" },
    ],
  },
  shopify: {
    body:
      "Launch and grow on Shopify with themes, apps, and checkout experiences tailored to your catalog and brand. We focus on speed, conversion-focused UX, and maintainable code so your team can iterate confidently.",
    linksLeft: [
      { icon: "↗", label: "Shopify Plus", href: "#" },
      { icon: "↗", label: "Custom Theme Development", href: "#" },
      { icon: "↗", label: "Headless Shopify", href: "#" },
      { icon: "↗", label: "App Integrations", href: "#" },
    ],
    linksRight: [
      { icon: "↗", label: "Subscriptions & Bundles", href: "#" },
      { icon: "↗", label: "CRO & Analytics", href: "#" },
      { icon: "↗", label: "Ongoing Optimization", href: "#" },
    ],
  },
  woocommerce: {
    body:
      "Flexible WooCommerce solutions on WordPress—custom product types, subscriptions, memberships, and integrations with your marketing stack. We keep plugins lean, security tight, and checkout friction low.",
    linksLeft: [
      { icon: "↗", label: "WooCommerce Builds", href: "#" },
      { icon: "↗", label: "Custom Checkout Flows", href: "#" },
      { icon: "↗", label: "Plugin Development", href: "#" },
      { icon: "↗", label: "Speed & Core Web Vitals", href: "#" },
    ],
    linksRight: [
      { icon: "↗", label: "Payment Gateways", href: "#" },
      { icon: "↗", label: "ERP / Inventory Sync", href: "#" },
      { icon: "↗", label: "Maintenance Plans", href: "#" },
    ],
  },
  wordpress: {
    body:
      "Editor-friendly WordPress sites and headless setups with modern front ends. We deliver scalable content models, accessible components, and workflows your marketing team can own without filing a ticket for every update.",
    linksLeft: [
      { icon: "↗", label: "Custom Themes & Blocks", href: "#" },
      { icon: "↗", label: "Headless WordPress", href: "#" },
      { icon: "↗", label: "Multisite & Enterprise", href: "#" },
      { icon: "↗", label: "Security Hardening", href: "#" },
    ],
    linksRight: [
      { icon: "↗", label: "API & Integrations", href: "#" },
      { icon: "↗", label: "Editor Training", href: "#" },
      { icon: "↗", label: "Support & SLAs", href: "#" },
    ],
  },
  "white-label": {
    body:
      "Expand your agency’s delivery capacity with a white-label partner that matches your quality bar. We plug into your PM tools, NDAs, and brand voice so your clients see one seamless team—from discovery through launch.",
    linksLeft: [
      { icon: "↗", label: "Development Resourcing", href: "#" },
      { icon: "↗", label: "Design-to-Dev Handoff", href: "#" },
      { icon: "↗", label: "Dedicated Pods", href: "#" },
      { icon: "↗", label: "Sprint-Based Engagements", href: "#" },
    ],
    linksRight: [
      { icon: "↗", label: "NDA & White-label SOPs", href: "#" },
      { icon: "↗", label: "QA & Launch Support", href: "#" },
      { icon: "↗", label: "Partner Pricing", href: "#" },
    ],
  },
};

function LinkColumn({ items }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="group inline-flex items-center gap-3 text-white text-xl font-normal leading-snug hover:text-[#f17e3f] transition-colors"
          >
            <span className="text-[#f17e3f] shrink-0 w-6 text-center" aria-hidden>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("digital-marketing");
  const panel = tabPanels[activeTab];

  return (
    <Reveal>
      <section className="section-pad border-b border-[#202020]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[40px]">
          <header className="mb-8 lg:mb-12">
            <h2 className="section-heading-light">We Provide The Full Stack of</h2>
            <h2 className="section-heading-bold mt-1">Creative Services</h2>
            <p className="section-desc mt-4 text-[22px] max-w-none">
              Customized solutions for eCommerce and digital marketing
            </p>
          </header>

          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "flex flex-col items-center justify-center gap-2 min-w-[120px] sm:min-w-0 sm:flex-1 px-3 py-4 sm:py-5 transition-colors border-b-2 rounded-t-lg",
                    isActive
                      ? "bg-gradient-to-b from-black to-[#1e1e1e] border-[#f17e3f] text-white"
                      : "bg-transparent border-[#202020] text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  <span
                    className="text-2xl leading-none"
                    style={{ color: isActive ? "#f17e3f" : undefined }}
                    aria-hidden
                  >
                    {tab.icon}
                  </span>
                  <span className="text-xl font-bold text-white whitespace-pre-line text-center leading-tight">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 lg:mt-14 border-t border-[#202020] pt-10 lg:pt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 xl:gap-16"
              >
                <div className="lg:pr-4">
                  <p className="text-white text-xl font-normal leading-relaxed">{panel.body}</p>
                </div>
                <div className="border-t border-[#202020] lg:border-t-0 lg:border-l lg:border-[#202020] lg:pl-8 pt-8 lg:pt-0">
                  <LinkColumn items={panel.linksLeft} />
                </div>
                <div className="border-t border-[#202020] lg:border-t-0 lg:border-l lg:border-[#202020] lg:pl-8 pt-8 lg:pt-0">
                  <LinkColumn items={panel.linksRight} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
