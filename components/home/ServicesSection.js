"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../animations/Reveal";

const tabs = [
  {
    id: "web",
    label: "Web Design & Development",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
    heading: "Custom Web Solutions",
    description: "We design and develop high-performance websites tailored to your brand. From responsive layouts to headless CMS integrations, we build digital experiences that convert visitors into customers.",
    features: ["Custom WordPress & Headless CMS", "Responsive & Mobile-First Design", "Performance Optimized", "SEO-Friendly Architecture"],
  },
  {
    id: "ecommerce",
    label: "eCommerce Development",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.348-1.872l1.699-7.217a1.5 1.5 0 00-1.456-1.857H5.778" />
      </svg>
    ),
    heading: "Scalable eCommerce Stores",
    description: "Build powerful online stores with Shopify, Magento, or WooCommerce. We create seamless shopping experiences with secure payments, inventory management, and conversion-focused design.",
    features: ["Shopify & Shopify Plus", "Magento 2 Development", "WooCommerce Solutions", "Payment & Shipping Integration"],
  },
  {
    id: "digital",
    label: "Digital Marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    heading: "Growth-Driven Marketing",
    description: "Drive qualified traffic and maximize ROI with data-driven digital marketing strategies. From SEO to paid campaigns, we help brands grow their online presence and revenue.",
    features: ["SEO & Content Marketing", "PPC & Paid Social Ads", "Email Marketing Automation", "Analytics & Conversion Optimization"],
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    heading: "User-Centered Design",
    description: "Create intuitive and visually stunning interfaces that delight users. Our design process combines research, wireframing, and prototyping to deliver pixel-perfect experiences.",
    features: ["User Research & Strategy", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing"],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("web");
  const activeService = tabs.find((t) => t.id === activeTab);

  return (
    <Reveal>
      <section className="py-20 lg:py-28">
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
            Creative Services
          </h2>
          <p className="mt-4 text-zinc-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
            We offer a full spectrum of digital services to help your brand thrive online — from stunning websites to scalable ecommerce and growth marketing.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-[13px] font-medium transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-orange-500 text-black border-orange-500"
                  : "bg-transparent text-zinc-300 border-zinc-700 hover:border-orange-500/50 hover:text-white"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8 lg:p-10"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {activeService.heading}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                  {activeService.description}
                </p>
                <ul className="space-y-3">
                  {activeService.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[14px] text-zinc-200">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/15 text-orange-400 shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-[13px] font-semibold text-black hover:bg-orange-400 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-zinc-800/80 flex items-center justify-center text-orange-400">
                      {activeService.icon}
                    </div>
                    <p className="text-xs text-zinc-500">Service Image</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </Reveal>
  );
}
