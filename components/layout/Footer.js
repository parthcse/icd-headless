"use client";

import { usePathname } from "next/navigation";

const normPath = (p) => {
  const clean = (p || "/").split(/[?#]/)[0];
  return clean.replace(/\/+$/, "") || "/";
};

/* Footer service columns — data-driven so the active page can highlight. */
const SERVICE_COLUMNS = [
  [
    { label: "ECommerce Website Design", href: "/ecommerce-website-design-services/" },
    { label: "ECommerce Web Development", href: "/ecommerce-website-development-services/" },
    { label: "Hire eCommerce Developers", href: "/hire-ecommerce-designers-developers/" },
    { label: "Magento 2 Upgrade", href: "/magento-2-upgrade-and-migration-services/" },
    { label: "Magento Development", href: "/magento-development-services/" },
    { label: "Hire Magento Developers", href: "/hire-magento-2-developers-programmers/" },
    { label: "Magento 2 Development", href: "/magento-2-development-services/" },
    { label: "Technical SEO Services", href: "#" },
    { label: "Hire ReactJS Developers", href: "#" },
  ],
  [
    { label: "Shopify Development", href: "/shopify-development-services/" },
    { label: "Hire Shopify Developers", href: "/hire-shopify-developers-experts/" },
    { label: "Woocommerce Development", href: "/woocommerce-development-services/" },
    { label: "Hire Woocommerce Developers", href: "/hire-woocommerce-developers-experts/" },
    { label: "WordPress Development", href: "/wordpress-development-services/" },
    { label: "Hire WordPress Developers", href: "/hire-wordpress-developers-designers/" },
    { label: "Custom PHP Development", href: "#" },
    { label: "Local SEO Services", href: "#" },
    { label: "Hire Next.js Developers", href: "#" },
  ],
  [
    { label: "PPC Management", href: "/ppc-management-services/" },
    { label: "Magento SEO Services", href: "/magento-seo-services/" },
    { label: "Shopify SEO Service", href: "/shopify-seo-service/" },
    { label: "WordPress SEO Service", href: "/wordpress-seo-service/" },
    { label: "Professional SEO Service", href: "/seo-search-engine-optimization/" },
    { label: "Digital Marketing Service", href: "/digital-marketing-service/" },
    { label: "Email Marketing Service", href: "/email-marketing-company/" },
    { label: "On Page SEO Services", href: "#" },
    { label: "Hire NodeJS Developers", href: "#" },
  ],
];

const BOTTOM_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Portfolio", href: "#" },
  { label: "Testimonial", href: "#" },
  { label: "Our Blog", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Scam Alert", href: "#" },
  { label: "Privacy", href: "#" },
];

export default function Footer() {
  const current = normPath(usePathname());
  const isActive = (href) => typeof href === "string" && href.startsWith("/") && normPath(href) === current;

  return (
    <footer className="footer-main bg-black-light pt-space xl:pt-28 bg-[#151515]">
      <div className="container">
        <h2 className="font-24 mb-[0.8em]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-space xl:pb-28 gap-4 md:gap-6">
          {SERVICE_COLUMNS.map((column, i) => (
            <ul
              key={i}
              className="[&_a]:transition [&_a:hover]:text-primary [&_a:hover]:underline grid gap-2 mb-auto animate fadeUp"
              style={{ animationDelay: `0.${i + 1}s` }}
            >
              {column.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={isActive(link.href) ? "text-primary underline" : undefined}>{link.label}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className="footer-trusted bg-[#0f0f0f] text-center p-5 xl:p-6 animate fadeUp" style={{ animationDelay: "0.4s" }}>
            <img
              className="mx-auto mb-3 max-w-28"
              src="https://www.icecubedigital.com/wp-content/webp-express/webp-images/uploads/2023/08/top-web-development-company.png.webp"
              alt="Top web development company"
            />
            <h3 className="font-22 mb-2 xl:text-xl leading-tight">Most Trusted Company</h3>
            <p>Icecube Digital Is Rated As The Top Web Development Company By Good Firms</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-space-mini xl:pt-10 pb-space-mini xl:pb-10 text-center gap-4 flex flex-col lg:flex-row lg:text-left">
          <div className="text-white/60 grid gap-2">
            <ul className="[&_a]:transition [&_a]:text-white [&_a:hover]:text-primary flex flex-wrap items-center gap-2 justify-center">
              {BOTTOM_LINKS.map((link, i) => (
                <li key={link.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">|</span>}
                  <a href={link.href} className={isActive(link.href) ? "!text-primary" : undefined}>{link.label}</a>
                </li>
              ))}
            </ul>
            <small>Copyright © 2026 Icecube Digital. All rights reserved.</small>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center lg:flex-row lg:ml-auto lg:gap-11 xl:gap-16">
            <ul className="flex gap-3">
              <li>
                <a href="https://www.linkedin.com/company/ice-cube-digital/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/inkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/icecubedigital/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/IcecubeDigital" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://x.com/IcecubeDigital" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/twitter.svg" alt="X (Twitter)" />
                </a>
              </li>
            </ul>
            <img src="/assets/photos/dmca.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
