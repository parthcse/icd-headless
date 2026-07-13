"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

// Open the site-wide quote popup (see components/common/GetQuotePopup.js). Also
// closes the mobile drawer if it's open (no-op on desktop).
const openQuotePopup = (e) => {
  e.preventDefault();
  if (typeof window === "undefined") return;
  document.getElementById("drawerClose")?.click();
  window.dispatchEvent(new Event("icd:open-quote-popup"));
};

/* ── Active-nav helpers ───────────────────────────────────────────────────
   Compare the current route to each link href so the open page (and its
   parent submenu + top-level menu) highlight, like a typical site nav.
   ────────────────────────────────────────────────────────────────────────── */
const normPath = (p) => {
  const clean = (p || "/").split(/[?#]/)[0];
  return clean.replace(/\/+$/, "") || "/";
};
const isLinkActive = (href, current) =>
  typeof href === "string" && href.startsWith("/") && normPath(href) === current;
const isGroupActive = (links, current) =>
  Array.isArray(links) && links.some((l) => isLinkActive(l.href, current));
const areItemsActive = (items, current) =>
  Array.isArray(items) &&
  items.some((it) => (it.links ? isGroupActive(it.links, current) : isLinkActive(it.href, current)));

const ChevronDown = () => (
  <svg className="h-[1em] w-[1em] shrink-0 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-4 h-4 shrink-0 -rotate-90" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
);

const BackArrow = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ──────────────────────────────────────────────────────────────────────────
   Single source of truth for the whole nav. Desktop AND mobile render from
   these — so the two can never drift (no extra/missing items between them).
   - simple dropdown items:  { label, href }
   - nested dropdown items:   { label, links: [{ label, href }] }  (has a flyout)
                              or { label, href }  (direct link, no flyout)
   ────────────────────────────────────────────────────────────────────────── */

const SERVICES_CATEGORIES = [
  {
    label: "AI Services",
    links: [
      { label: "AI Software Development Services", href: "/ai-software-development-services/" },
      { label: "AI Agent Development Services", href: "/ai-agent-development-services/" },
      { label: "AI Consulting Services", href: "/ai-consulting-services/" },
      { label: "AI Integration Services", href: "/ai-integration-services/" },
      { label: "ChatGPT Ads Agency Services", href: "/chatgpt-advertising-services/" },
    ],
  },
  {
    label: "Magento",
    links: [
      { label: "Magento Development", href: "/magento-development-services/" },
      { label: "Magento 2 Development", href: "/magento-2-development-services/" },
      { label: "Magento Website Design", href: "/magento-website-design/" },
      { label: "Hire Magento Developers", href: "/hire-magento-2-developers-programmers/" },
      { label: "Magento 2 Migration", href: "/magento-2-upgrade-and-migration-services/" },
      { label: "Magento SEO Service", href: "/magento-seo-services/" },
      { label: "Magento Maintenance", href: "/magento-maintenance-services/" },
    ],
  },
  {
    label: "WordPress",
    links: [
      { label: "WordPress Development", href: "/wordpress-development-services/" },
      { label: "WordPress Website Design", href: "/wordpress-website-design-company/" },
      { label: "WordPress VIP Services", href: "/wordpress-vip/" },
      { label: "Hire WordPress Developers", href: "/hire-wordpress-developers-designers/" },
      { label: "Hire WordPress VIP Developers", href: "/hire-wordpress-vip-developers/" },
      { label: "WordPress SEO Service", href: "/wordpress-seo-service/" },
      { label: "WordPress Maintenance", href: "/wordpress-maintenance-service/" },
      { label: "WordPress VIP Maintenance", href: "/wordpress-vip-support-and-maintenance/" },
    ],
  },
  {
    label: "Digital Marketing",
    links: [
      { label: "Answer Engine Optimization Services", href: "/answer-engine-optimization-aeo-services/" },
      { label: "Marketing Automation Services", href: "/marketing-automation-services/" },
      { label: "Digital Marketing Service", href: "/digital-marketing-service/" },
      { label: "Professional SEO Service", href: "/seo-search-engine-optimization/" },
      { label: "AI SEO Services", href: "/ai-seo-services/" },
      { label: "PPC Service", href: "/ppc-management-services/" },
      { label: "Conversion Rate Optimization", href: "/conversion-rate-optimization-services/" },
      { label: "Email Marketing Service", href: "/email-marketing-company/" },
      { label: "Hire SEO Experts", href: "/hire-seo-experts/" },
    ],
  },
  {
    label: "Shopify",
    links: [
      { label: "Shopify Development", href: "/shopify-development-services/" },
      { label: "Shopify Website Design", href: "/shopify-website-design/" },
      { label: "Shopify Plus Development", href: "/shopify-plus-development-agency/" },
      { label: "Hire Shopify Plus Developers", href: "/hire-shopify-plus-developers/" },
      { label: "Shopify Plus SEO Services", href: "/shopify-plus-seo-services/" },
      { label: "Shopify Plus Support", href: "/shopify-plus-support-and-maintenance-services/" },
      { label: "Hire Shopify Developers", href: "/hire-shopify-developers-experts/" },
      { label: "Hire Shopify Designers", href: "/hire-shopify-website-designers/" },
      { label: "Shopify SEO Service", href: "/shopify-seo-service/" },
      { label: "Shopify Maintenance", href: "/shopify-maintenance-services/" },
    ],
  },
  {
    label: "WooCommerce",
    links: [
      { label: "Woocommerce Development", href: "/woocommerce-development-services/" },
      { label: "Hire Woocommerce Developers", href: "/hire-woocommerce-developers-experts/" },
      { label: "Woocommerce SEO Service", href: "/woocommerce-seo-service/" },
    ],
  },
  {
    label: "Webflow",
    links: [
      { label: "Webflow Development", href: "/webflow-development-agency/" },
      { label: "Webflow Maintenance", href: "/webflow-maintenance-services/" },
      { label: "Hire Webflow Developers", href: "/hire-webflow-developers/" },
    ],
  },
  {
    label: "White Label",
    links: [
      { label: "White Label Web Design and Development", href: "/white-label-web-design-and-development-services/" },
      { label: "White Label WordPress Development", href: "/white-label-wordpress-development/" },
      { label: "White Label Magento Development", href: "/white-label-magento-development/" },
      { label: "White Label Shopify Development", href: "/white-label-shopify-development/" },
      { label: "White Label SEO Services", href: "/white-label-seo-services/" },
      { label: "White Label PPC Services", href: "/white-label-ppc-services/" },
      { label: "White Label Wordpress Maintenance", href: "/white-label-wordpress-maintenance-services/" },
    ],
  },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about-us/" },
  { label: "Web Design FAQs", href: "/ecommerce-website-design-development-faqs/" },
  { label: "Career", href: "/career/" },
];

const INDUSTRY_LINKS = [
  { label: "Jewelry", href: "/jewelry-website-design-development/" },
  { label: "Furniture", href: "/furniture-website-design-development/" },
  { label: "Blinds & Curtains", href: "/blinds-website-design-development/" },
  { label: "Automotive", href: "/automotive-website-design/" },
  { label: "Fashion", href: "/fashion-website-design/" },
];

const OUR_WORK_LINKS = [
  { label: "Our Portfolio", href: "/our-portfolio/" },
  { label: "Case Studies", href: "/case-studies/" },
];

const RESOURCES_ITEMS = [
  {
    label: "Our Approach",
    links: [
      { label: "My Marketing Agency Isn’t Delivering Results", href: "/my-marketing-agency-isnt-delivering-results/" },
      { label: "My Website Isn’t Appearing on Google", href: "/my-website-isnt-appearing-on-google/" },
      { label: "My Website Isn’t Fueling Business Growth", href: "/my-website-isnt-fueling-business-growth/" },
      { label: "Why My Website Isn’t Converting", href: "/why-my-website-isnt-converting/" },
      { label: "Why Is My Website Traffic Going Down?", href: "/why-is-my-website-traffic-going-down/" },
      { label: "Why My Website Isn’t Driving Leads", href: "/why-my-website-isnt-driving-leads/" },
    ],
  },
  {
    label: "Pricing Guides",
    links: [
      { label: "How Much Does a Website Cost?", href: "/how-much-does-a-website-cost/" },
      { label: "How Much Does SEO Cost?", href: "/how-much-does-seo-cost/" },
      { label: "How Much Does PPC Cost?", href: "/how-much-does-ppc-cost/" },
      { label: "How Much Does Email Marketing Cost?", href: "/how-much-does-email-marketing-cost/" },
      { label: "How Much Does Social Media Management Cost?", href: "/how-much-does-social-media-management-cost/" },
      { label: "How Much Does WordPress SEO Cost?", href: "/how-much-does-wordpress-seo-cost/" },
      { label: "How Much Does Shopify SEO Cost?", href: "/how-much-does-shopify-seo-cost/" },
      { label: "How Much Does a WordPress Website Cost?", href: "/how-much-does-a-wordpress-website-cost/" },
      { label: "How Much Does Magento Website Development Cost?", href: "/how-much-does-magento-website-development-cost/" },
      { label: "How Much Does Shopify Website Cost?", href: "/how-much-does-shopify-website-cost/" },
    ],
  },
  { label: "Testimonial", href: "/client-testimonials/" },
  { label: "Blog", href: "/blog/" },
  { label: "Newsletter", href: "/web-wednesday-newsletter/" },
  { label: "Learning", href: "/learning/" },
  { label: "Meta Length checker", href: "/meta-length-checker/" },
];

/* Mobile panel models derived from the SAME data as desktop (guarantees parity). */
const MOB_SIMPLE_PANELS = [
  { id: "mob-panel-company", label: "Company", links: COMPANY_LINKS },
  { id: "mob-panel-industry", label: "Industry", links: INDUSTRY_LINKS },
  { id: "mob-panel-ourwork", label: "Our Work", links: OUR_WORK_LINKS },
];
const MOB_SERVICE_PANELS = SERVICES_CATEGORIES.map((c, i) => ({ id: `mob-panel-svc-${i}`, label: c.label, links: c.links }));
const RESOURCES_NAV = RESOURCES_ITEMS.map((it, i) => (it.links ? { ...it, id: `mob-panel-res-${i}` } : it));
const MOB_RESOURCE_SUBPANELS = RESOURCES_NAV.filter((it) => it.links);

/* ── Desktop dropdown components ─────────────────────────────────────────── */

const PANEL_UL = "rounded-lg border border-white/10 bg-black-light py-2 text-base shadow-lg";
const PANEL_LINK_BASE = "mx-1 block whitespace-nowrap rounded-md px-4 py-1.5 font-medium leading-snug transition-colors hover:bg-white/5";
const panelLink = (active) => `${PANEL_LINK_BASE} ${active ? "text-primary font-medium" : "text-white/80 hover:text-primary"}`;

// Simple one-level dropdown (Company, Industry, Our Work).
function NavDropdown({ label, links, current }) {
  const active = isGroupActive(links, current);
  return (
    <li className="group relative flex items-center self-stretch">
      <a href="#" className={`flex cursor-pointer items-center gap-1 transition group-hover:text-primary${active ? " text-primary" : ""}`}>
        {label} <ChevronDown />
      </a>
      <div className="nav-flyout invisible absolute left-0 top-full z-50 -translate-y-2 pt-4 xl:pt-6 opacity-0 transition duration-200 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ul className={`min-w-56 ${PANEL_UL}`}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={panelLink(isLinkActive(link.href, current))}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

// Two-level dropdown (Services, Resources). Items may be direct links or have a flyout.
function NavNestedDropdown({ label, items, flyoutSide = "right", current }) {
  const flyoutPos = flyoutSide === "left" ? "right-full translate-x-2 pr-2" : "left-full -translate-x-2 pl-2";
  const active = areItemsActive(items, current);
  return (
    <li className="group relative flex items-center self-stretch">
      <a href="#" className={`flex cursor-pointer items-center gap-1 transition group-hover:text-primary${active ? " text-primary" : ""}`}>
        {label} <ChevronDown />
      </a>
      <div className="nav-flyout invisible absolute left-0 top-full z-50 -translate-y-2 pt-4 xl:pt-6 opacity-0 transition duration-200 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ul className={`min-w-56 ${PANEL_UL}`}>
          {items.map((item, i) => {
            // The lowest item with a flyout opens upward so a long list stays in-viewport.
            const openUp = i === items.length - 1;
            if (!item.links) {
              const itemActive = isLinkActive(item.href, current);
              return (
                <li key={item.label}>
                  <a href={item.href} className={`mx-1 block whitespace-nowrap rounded-md px-4 py-2.5 font-medium leading-snug transition-colors hover:bg-white/5 ${itemActive ? "text-primary" : "hover:text-primary"}`}>{item.label}</a>
                </li>
              );
            }
            const catActive = isGroupActive(item.links, current);
            return (
              <li key={item.label} className="group/cat relative">
                <span className={`mx-1 flex cursor-pointer items-center justify-between gap-3 whitespace-nowrap rounded-md px-4 py-2.5 font-medium transition-colors hover:bg-white/5 hover:text-primary group-hover/cat:bg-white/5 group-hover/cat:text-primary${catActive ? " text-primary" : ""}`}>
                  {item.label} <ChevronRight />
                </span>
                <div className={`nav-flyout invisible absolute z-50 opacity-0 transition duration-200 ease-in-out group-hover/cat:visible group-hover/cat:translate-x-0 group-hover/cat:opacity-100 group-focus-within/cat:visible group-focus-within/cat:translate-x-0 group-focus-within/cat:opacity-100 ${flyoutPos} ${openUp ? "bottom-[-9px]" : "top-0"}`}>
                  <ul data-lenis-prevent className={`max-h-[80vh] w-max overflow-y-auto overscroll-y-contain ${PANEL_UL}`}>
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className={panelLink(isLinkActive(link.href, current))}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

/* ── Mobile panel components ─────────────────────────────────────────────── */

const MOB_HEAD = (label) => (
  <div className="mob-panel-head">
    <button className="back-btn text-white/60" aria-label="Back"><BackArrow /></button>
    <span className="font-semibold text-primary uppercase leading-none pt-1">{label}</span>
  </div>
);
const MOB_LINK = "block px-5 py-4 font-medium hover:text-primary transition-colors";
const MOB_SUB_BTN = "open-sub w-full flex items-center justify-between px-5 py-4 text-white font-medium hover:text-primary transition-colors text-left";

// A leaf panel: a back header + a flat list of links.
function MobLinkPanel({ id, label, links, current }) {
  return (
    <div id={id} className="mob-panel level-2">
      {MOB_HEAD(label)}
      <ul>
        {links.map((link) => (
          <li key={link.label} className="border-b border-white/10">
            <a href={link.href} className={`${MOB_LINK}${isLinkActive(link.href, current) ? " text-primary" : ""}`}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const current = normPath(usePathname());

  const companyActive = isGroupActive(COMPANY_LINKS, current);
  const servicesActive = areItemsActive(SERVICES_CATEGORIES, current);
  const industryActive = isGroupActive(INDUSTRY_LINKS, current);
  const ourWorkActive = isGroupActive(OUR_WORK_LINKS, current);
  const resourcesActive = areItemsActive(RESOURCES_ITEMS, current);
  const contactActive = isLinkActive("/contact-us/", current);

  return (
    <>
      <header className="header-main w-full fixed top-0 left-0 z-50 py-4 xl:py-6 transition-all duration-300 animate fadeDown">
        <div className="container max-w-[1920px]">
          <div className="relative flex items-center justify-between gap-2">

            {/* Logo */}
            <div className="header-logo max-w-28 md:max-w-32 xl:max-w-36">
              <Link href="/">
                <img src="/assets/icons/header-logo.svg" alt="Icecube Digital" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden self-stretch lg:flex">
              <ul className="flex items-center self-stretch gap-8 xl:gap-9 text-lg font-medium">
                <NavDropdown label="Company" links={COMPANY_LINKS} current={current} />
                <NavNestedDropdown label="Services" items={SERVICES_CATEGORIES} current={current} />
                <NavDropdown label="Industry" links={INDUSTRY_LINKS} current={current} />
                <NavDropdown label="Our Work" links={OUR_WORK_LINKS} current={current} />
                <NavNestedDropdown label="Resources" items={RESOURCES_ITEMS} flyoutSide="left" current={current} />
                <li className="flex items-center self-stretch"><Link href="/contact-us/" className={`transition ${contactActive ? "text-primary" : "hover:text-primary"}`}>Contact Us</Link></li>
              </ul>
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <a href="#" onClick={openQuotePopup} className="btn btn-primary">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                  <path d={BTN_ARROW} />
                </svg>
              </a>
            </div>

            {/* Mobile hamburger — SVG icons */}
            <div className="lg:hidden text-white text-2xl">
              <button id="menuBtn" aria-label="Open menu" className="text-white p-1">
                <svg id="iconOpen" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg id="iconClose" className="w-6 h-6 hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div id="mob-overlay" className="mobile-ovelay fixed inset-0 bg-black/55 z-[90] opacity-0 pointer-events-none transition-opacity duration-[350ms] ease-in-out" />

      {/* Mobile drawer */}
      <div id="mob-drawer" className="mobile-menu fixed top-0 left-0 bottom-0 w-full max-w-[350px] z-[100] overflow-hidden -translate-x-full bg-black-light">

        {/* PANEL 1: Main menu — same top-level items as desktop */}
        <div id="mob-panel-main" className="mob-panel">
          <div className="mob-panel-head justify-between">
            <Link href="/" className="block w-24">
              <img src="/assets/icons/header-logo.svg" alt="Icecube Digital" />
            </Link>
            <button id="drawerClose" aria-label="Close menu" className="bg-primary p-1">
              <CloseIcon />
            </button>
          </div>
          <ul className="font-medium">
            <li className="border-b border-white/10">
              <button className={`open-sub w-full flex items-center justify-between px-5 py-4 hover:text-primary transition-colors text-left${companyActive ? " text-primary" : ""}`} data-panel="mob-panel-company">
                Company <ChevronRight />
              </button>
            </li>
            <li className="border-b border-white/10">
              <button className={`open-sub w-full flex items-center justify-between px-5 py-4 hover:text-primary transition-colors text-left${servicesActive ? " text-primary" : ""}`} data-panel="mob-panel-services">
                Services <ChevronRight />
              </button>
            </li>
            <li className="border-b border-white/10">
              <button className={`open-sub w-full flex items-center justify-between px-5 py-4 hover:text-primary transition-colors text-left${industryActive ? " text-primary" : ""}`} data-panel="mob-panel-industry">
                Industry <ChevronRight />
              </button>
            </li>
            <li className="border-b border-white/10">
              <button className={`open-sub w-full flex items-center justify-between px-5 py-4 hover:text-primary transition-colors text-left${ourWorkActive ? " text-primary" : ""}`} data-panel="mob-panel-ourwork">
                Our Work <ChevronRight />
              </button>
            </li>
            <li className="border-b border-white/10">
              <button className={`open-sub w-full flex items-center justify-between px-5 py-4 hover:text-primary transition-colors text-left${resourcesActive ? " text-primary" : ""}`} data-panel="mob-panel-resources">
                Resources <ChevronRight />
              </button>
            </li>
            <li className="border-b border-white/10">
              <Link href="/contact-us/" className={`flex items-center justify-between px-5 py-4 hover:text-primary transition-colors${contactActive ? " text-primary" : ""}`}>Contact Us</Link>
            </li>
            <li className="px-5 py-4">
              <a href="#" onClick={openQuotePopup} className="btn btn-primary w-full">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                  <path d={BTN_ARROW} />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Simple leaf panels: Company, Industry, Our Work */}
        {MOB_SIMPLE_PANELS.map((panel) => (
          <MobLinkPanel key={panel.id} id={panel.id} label={panel.label} links={panel.links} current={current} />
        ))}

        {/* PANEL 2: Services — sub-group buttons */}
        <div id="mob-panel-services" className="mob-panel level-2">
          {MOB_HEAD("Services")}
          {MOB_SERVICE_PANELS.map((panel) => (
            <div key={panel.id} className="border-b border-white/10">
              <button className={`${MOB_SUB_BTN}${isGroupActive(panel.links, current) ? " text-primary" : ""}`} data-panel={panel.id}>
                {panel.label} <ChevronRight />
              </button>
            </div>
          ))}
        </div>
        {/* Service category leaf panels */}
        {MOB_SERVICE_PANELS.map((panel) => (
          <MobLinkPanel key={panel.id} id={panel.id} label={panel.label} links={panel.links} current={current} />
        ))}

        {/* PANEL 2: Resources — mix of sub-groups and direct links */}
        <div id="mob-panel-resources" className="mob-panel level-2">
          {MOB_HEAD("Resources")}
          <ul>
            {RESOURCES_NAV.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                {item.links ? (
                  <button className={`${MOB_SUB_BTN}${isGroupActive(item.links, current) ? " text-primary" : ""}`} data-panel={item.id}>
                    {item.label} <ChevronRight />
                  </button>
                ) : (
                  <a href={item.href} className={`${MOB_LINK}${isLinkActive(item.href, current) ? " text-primary" : ""}`}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Resources sub-group leaf panels (Our Approach, Pricing Guides) */}
        {MOB_RESOURCE_SUBPANELS.map((panel) => (
          <MobLinkPanel key={panel.id} id={panel.id} label={panel.label} links={panel.links} current={current} />
        ))}

      </div>
    </>
  );
}
