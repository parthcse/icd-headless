import Link from "next/link";

const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

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

const SERVICES_CATEGORIES = [
  {
    label: "eCommerce",
    links: [
      { label: "AI in eCommerce", href: "/ai-in-ecommerce-solutions" },
      { label: "eCommerce Web Design", href: "/ecommerce-website-design-services" },
      { label: "eCommerce Web Development", href: "/ecommerce-website-development-services" },
      { label: "Hire eCommerce Developers", href: "/hire-ecommerce-designers-developers" },
      { label: "eCommerce SEO Services", href: "/ecommerce-seo-services" },
    ],
  },
  {
    label: "Magento",
    links: [
      { label: "Magento Development", href: "/magento-development-services" },
      { label: "Magento 2 Development", href: "/magento-2-development-services" },
      { label: "Magento Website Design", href: "/magento-website-design" },
      { label: "Hire Magento Developers", href: "/hire-magento-2-developers-programmers" },
      { label: "Magento 2 Migration", href: "/magento-2-upgrade-and-migration-services" },
      { label: "Magento SEO Service", href: "/magento-seo-services" },
      { label: "Magento Maintenance", href: "/magento-maintenance-services" },
    ],
  },
  {
    label: "WordPress",
    links: [
      { label: "WordPress Development", href: "/wordpress-development-services" },
      { label: "WordPress Website Design", href: "/wordpress-website-design-company" },
      { label: "WordPress VIP Services", href: "/wordpress-vip" },
      { label: "Hire WordPress Developers", href: "/hire-wordpress-developers-designers" },
      { label: "Hire WordPress VIP Developers", href: "/hire-wordpress-vip-developers" },
      { label: "WordPress SEO Service", href: "/wordpress-seo-service" },
      { label: "WordPress Maintenance", href: "/wordpress-maintenance-service" },
      { label: "WordPress VIP Maintenance", href: "/wordpress-vip-support-and-maintenance" },
    ],
  },
  {
    label: "Digital Marketing",
    links: [
      { label: "Answer Engine Optimization", href: "/answer-engine-optimization-aeo-services" },
      { label: "Marketing Automation", href: "/marketing-automation-services" },
      { label: "Digital Marketing Service", href: "/digital-marketing-service" },
      { label: "Professional SEO Service", href: "/seo-search-engine-optimization" },
      { label: "PPC Service", href: "/ppc-management-services" },
      { label: "Conversion Rate Optimization", href: "/conversion-rate-optimization-services" },
      { label: "Email Marketing Service", href: "/email-marketing-company" },
      { label: "Hire SEO Experts", href: "/hire-seo-experts" },
    ],
  },
  {
    label: "Shopify",
    links: [
      { label: "Shopify Development", href: "/shopify-development-services" },
      { label: "Shopify Website Design", href: "#" },
      { label: "Shopify Plus Development", href: "#" },
      { label: "Hire Shopify Plus Developers", href: "#" },
      { label: "Shopify Plus SEO Services", href: "#" },
      { label: "Shopify Plus Support", href: "#" },
    ],
  },
  {
    label: "WooCommerce",
    links: [
      { label: "Woocommerce Development", href: "#" },
      { label: "Hire Woocommerce Developers", href: "#" },
      { label: "Woocommerce SEO Service", href: "#" },
    ],
  },
  {
    label: "Webflow",
    links: [
      { label: "Webflow Development", href: "#" },
      { label: "Webflow Maintenance", href: "#" },
      { label: "Hire Webflow Developers", href: "#" },
    ],
  },
  {
    label: "White Label",
    links: [
      { label: "White Label Web Design and Development", href: "#" },
      { label: "White Label WordPress Development", href: "/white-label-wordpress-development" },
      { label: "White Label Magento Development", href: "#" },
      { label: "White Label Shopify Development", href: "#" },
      { label: "White Label SEO Services", href: "#" },
      { label: "White Label PPC Services", href: "#" },
      { label: "White Label Wordpress Maintenance", href: "#" },
    ],
  },
];

const MOB_SERVICE_PANELS = [
  { id: "mob-panel-ecommerce", label: "eCommerce", links: [
    { label: "AI in eCommerce", href: "/ai-in-ecommerce-solutions" },
    { label: "eCommerce Web Design", href: "/ecommerce-website-design-services" },
    { label: "eCommerce Web Development", href: "/ecommerce-website-development-services" },
    { label: "Hire eCommerce Developers", href: "/hire-ecommerce-designers-developers" },
    { label: "eCommerce SEO Services", href: "/ecommerce-seo-services" },
  ]},
  { id: "mob-panel-magento", label: "Magento", links: [
    { label: "Magento Development", href: "/magento-development-services" },
    { label: "Magento 2 Development", href: "#" },
    { label: "Magento Website Design", href: "#" },
    { label: "Hire Magento Developers", href: "/hire-magento-2-developers-programmers" },
    { label: "Magento 2 Migration", href: "/magento-2-upgrade-and-migration-services" },
    { label: "Magento SEO Service", href: "/magento-seo-services" },
    { label: "Magento Maintenance", href: "/magento-maintenance-services" },
  ]},
  { id: "mob-panel-wordpress", label: "WordPress", links: [
    { label: "WordPress Development", href: "/wordpress-development-services" },
    { label: "WordPress Website Design", href: "/wordpress-website-design-company" },
    { label: "WordPress VIP Services", href: "/wordpress-vip" },
    { label: "Hire WordPress Developers", href: "/hire-wordpress-developers-designers" },
    { label: "Hire WordPress VIP Developers", href: "/hire-wordpress-vip-developers" },
    { label: "WordPress SEO Service", href: "/wordpress-seo-service" },
    { label: "WordPress Maintenance", href: "/wordpress-maintenance-service" },
    { label: "WordPress VIP Maintenance", href: "/wordpress-vip-support-and-maintenance" },
  ]},
  { id: "mob-panel-dm", label: "Digital Marketing", links: [
    { label: "Answer Engine Optimization", href: "/answer-engine-optimization-aeo-services" },
    { label: "Marketing Automation Services", href: "/marketing-automation-services" },
    { label: "Digital Marketing Service", href: "/digital-marketing-service" },
    { label: "Professional SEO Service", href: "/seo-search-engine-optimization" },
    { label: "PPC Service", href: "/ppc-management-services" },
    { label: "Conversion Rate Optimization", href: "/conversion-rate-optimization-services" },
    { label: "Email Marketing Service", href: "/email-marketing-company" },
    { label: "Hire SEO Experts", href: "/hire-seo-experts" },
  ]},
  { id: "mob-panel-shopify", label: "Shopify", links: [
    { label: "Shopify Development", href: "/shopify-development-services" },
    { label: "Shopify Website Design", href: "#" },
    { label: "Shopify Plus Development", href: "#" },
    { label: "Hire Shopify Plus Developers", href: "#" },
    { label: "Shopify Plus SEO Services", href: "#" },
    { label: "Shopify Plus Support", href: "#" },
  ]},
  { id: "mob-panel-woo", label: "WooCommerce", links: [
    { label: "Woocommerce Development", href: "#" },
    { label: "Hire Woocommerce Developers", href: "#" },
    { label: "Woocommerce SEO Service", href: "#" },
  ]},
  { id: "mob-panel-webflow", label: "Webflow", links: [
    { label: "Webflow Development", href: "#" },
    { label: "Webflow Maintenance", href: "#" },
    { label: "Hire Webflow Developers", href: "#" },
  ]},
  { id: "mob-panel-wl", label: "White Label", links: [
    { label: "White Label Web Design and Development", href: "#" },
    { label: "White Label WordPress Development", href: "/white-label-wordpress-development" },
    { label: "White Label Magento Development", href: "#" },
    { label: "White Label Shopify Development", href: "#" },
    { label: "White Label SEO Services", href: "#" },
    { label: "White Label PPC Services", href: "#" },
    { label: "White Label Wordpress Maintenance", href: "#" },
  ]},
];

export default function Header() {
  return (
    <>
      <header className="header-main w-full fixed top-0 left-0 z-50 py-4 xl:py-6 transition-all duration-300 animate fadeDown">
        <div className="container max-w-[1920px]">
          <div className="relative flex items-center justify-between gap-2">

            {/* Logo */}
            <div className="header-logo max-w-28 md:max-w-32 xl:max-w-36">
              <Link href="/">
                <img src="/assets/icons/header-logo.svg" alt="" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8 xl:gap-9 text-lg">

                {/* Company */}
                <li className="group relative">
                  <a className="flex items-center gap-1 transition group-hover:text-primary" href="#">
                    Company <ChevronDown />
                  </a>
                  <div className="absolute left-0 top-full z-10 hidden pt-2 group-hover:block group-focus-within:block small">
                    <ul className="min-w-40 border border-white/10 bg-black-light">
                      <li className="border-b border-white/10 last:border-b-0">
                        <Link role="menuitem" className="block px-3 py-1.5 transition hover:bg-black-light hover:text-primary" href="/about">About</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Services — mega menu */}
                <li className="group">
                  <a href="#" className="flex items-center gap-1 transition group-hover:text-primary">
                    Services <ChevronDown />
                  </a>
                  <div className="mega-panel z-50 pt-4 w-full hidden group-hover:block absolute top-full left-0 -mt-4 overflow-hidden">
                    <div className="bg-black-light border border-white/10 p-6 xl:p-8 grid grid-cols-4 gap-6 max-h-[80vh] overflow-y-auto overscroll-y-contain">
                      {SERVICES_CATEGORIES.slice(0, 4).map((cat) => (
                        <div key={cat.label}>
                          <h6 className="text-primary uppercase tracking-widest font-semibold mb-3">{cat.label}</h6>
                          <ul className="space-y-2 text-white/80">
                            {cat.links.map((link) => (
                              <li key={link.label}><a href={link.href} className="hover:text-primary transition-colors">{link.label}</a></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-4 border-t border-white/10" />
                      {SERVICES_CATEGORIES.slice(4).map((cat) => (
                        <div key={cat.label}>
                          <h6 className="text-primary uppercase tracking-widest font-semibold mb-3">{cat.label}</h6>
                          <ul className="space-y-2 text-white/80">
                            {cat.links.map((link) => (
                              <li key={link.label}><a href={link.href} className="hover:text-primary transition-colors">{link.label}</a></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                <li><a href="#" className="hover:text-primary transition">Industry</a></li>
                <li><a href="#" className="hover:text-primary transition">Our Work</a></li>
                <li><a href="#" className="hover:text-primary transition">Resources</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <a href="#" className="btn btn-primary">
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
      <div id="mob-drawer" className="mobile-menu fixed top-0 left-0 bottom-0 w-full max-w-[350px] z-[100] overflow-hidden -translate-x-full transition-transform duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)] bg-black-light">

        {/* PANEL 1: Main menu */}
        <div id="mob-panel-main" className="mob-panel">
          <div className="mob-panel-head justify-between">
            <Link href="/" className="block w-24">
              <img src="/assets/icons/header-logo.svg" alt="" />
            </Link>
            <button id="drawerClose" className="bg-primary p-1">
              <CloseIcon />
            </button>
          </div>
          <ul className="font-medium">
            <li className="border-b border-white/10">
              <button className="open-sub w-full flex items-center justify-between px-5 py-4 hover:text-primary transition-colors text-left" data-panel="mob-panel-company">
                Company <ChevronRight />
              </button>
            </li>
            <li className="border-b border-white/10">
              <button className="open-sub w-full flex items-center justify-between px-5 py-4 hover:text-primary transition-colors text-left" data-panel="mob-panel-services">
                Services <ChevronRight />
              </button>
            </li>
            <li className="border-b border-white/10">
              <a href="#" className="flex items-center justify-between px-5 py-4 hover:text-primary transition-colors">Industry</a>
            </li>
            <li className="border-b border-white/10">
              <a href="#" className="flex items-center justify-between px-5 py-4 hover:text-primary transition-colors">Our Work</a>
            </li>
            <li className="border-b border-white/10">
              <a href="#" className="flex items-center justify-between px-5 py-4 hover:text-primary transition-colors">Resources</a>
            </li>
            <li className="border-b border-white/10">
              <a href="#" className="flex items-center justify-between px-5 py-4 hover:text-primary transition-colors">Contact Us</a>
            </li>
            <li className="px-5 py-4">
              <a href="#" className="btn btn-primary w-full">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                  <path d={BTN_ARROW} />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* PANEL 2: Company */}
        <div id="mob-panel-company" className="mob-panel level-2">
          <div className="mob-panel-head">
            <button className="back-btn text-white/60"><BackArrow /></button>
            <span className="font-semibold text-primary uppercase leading-none pt-1">Company</span>
          </div>
          <ul>
            <li className="border-b border-white/10"><Link href="/about" className="block px-5 py-4 hover:text-primary transition-colors">About Us</Link></li>
            <li className="border-b border-white/10"><a href="#" className="block px-5 py-4 hover:text-primary transition-colors">Web Design FAQs</a></li>
            <li className="border-b border-white/10"><a href="#" className="block px-5 py-4 hover:text-primary transition-colors">Career</a></li>
          </ul>
        </div>

        {/* PANEL 2: Services — shows sub-group buttons */}
        <div id="mob-panel-services" className="mob-panel level-2">
          <div className="mob-panel-head">
            <button className="back-btn text-white/60"><BackArrow /></button>
            <span className="font-semibold text-primary uppercase leading-none pt-1">Services</span>
          </div>
          {MOB_SERVICE_PANELS.map((panel) => (
            <div key={panel.id} className="border-b border-white/10">
              <button className="open-sub w-full flex items-center justify-between px-5 py-4 text-white font-medium hover:text-primary transition-colors text-left" data-panel={panel.id}>
                {panel.label} <ChevronRight />
              </button>
            </div>
          ))}
        </div>

        {/* PANEL 3s: Each service category */}
        {MOB_SERVICE_PANELS.map((panel) => (
          <div key={panel.id} id={panel.id} className="mob-panel level-2">
            <div className="mob-panel-head">
              <button className="back-btn text-white/60"><BackArrow /></button>
              <span className="font-semibold text-primary uppercase leading-none pt-1">{panel.label}</span>
            </div>
            <ul>
              {panel.links.map((link) => (
                <li key={link.label} className="border-b border-white/10">
                  <a href={link.href} className="block px-5 py-4 hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </>
  );
}
