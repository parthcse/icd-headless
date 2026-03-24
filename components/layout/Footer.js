import Image from "next/image";
import Link from "next/link";

const col1 = [
  { label: "ECommerce Website Design", href: "#", accent: true },
  { label: "ECommerce Web Development", href: "#" },
  { label: "Hire eCommerce Developers", href: "#" },
  { label: "Magento 2 Upgrade", href: "#" },
  { label: "Magento Development", href: "#" },
  { label: "Hire Magento Developers", href: "#" },
  { label: "Magento 2 Development", href: "#" },
  { label: "Technical SEO Services", href: "#" },
  { label: "Hire ReactJS Developers", href: "#" },
];

const col2 = [
  { label: "Shopify Development", href: "#" },
  { label: "Hire Shopify Developers", href: "#" },
  { label: "Woocommerce Development", href: "#" },
  { label: "Hire Woocommerce Developers", href: "#" },
  { label: "WordPress Development", href: "#" },
  { label: "Hire WordPress Developers", href: "#" },
  { label: "Custom PHP Development", href: "#" },
  { label: "Local SEO Services", href: "#" },
  { label: "Hire Next.js Developers", href: "#" },
];

const col3 = [
  { label: "PPC management", href: "#" },
  { label: "Magento SEO Services", href: "#" },
  { label: "Shopify SEO Service", href: "#" },
  { label: "WordPress SEO Service", href: "#" },
  { label: "Professional SEO Service", href: "#" },
  { label: "Digital Marketing Service", href: "#" },
  { label: "Email Marketing Service", href: "#" },
  { label: "On Page SEO Services", href: "#" },
  { label: "Hire NodeJS Developers", href: "#" },
];

const bottomNav = [
  { label: "Home", href: "/" },
  { label: "Our Portfolio", href: "#" },
  { label: "Testimonial", href: "#" },
  { label: "Our Blog", href: "/blog" },
  { label: "Sitemap", href: "#" },
  { label: "Scam Alert", href: "#" },
  { label: "Privacy", href: "#" },
];

function ServiceLink({ label, href, accent }) {
  return (
    <Link
      href={href}
      className={`block text-[18px] leading-[1.9] ${
        accent ? "text-[#f17e3f] underline" : "text-zinc-300 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#151515] text-white">
      <div className="site-gutter">
        <div className="site-container pb-0 pt-[110px]">
        <div className="flex flex-col gap-12 pb-16 lg:flex-row lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-[24px] text-white">Our Services</h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <nav className="flex flex-col gap-1" aria-label="Services column 1">
                {col1.map((item) => (
                  <ServiceLink key={item.label} {...item} />
                ))}
              </nav>
              <nav className="flex flex-col gap-1" aria-label="Services column 2">
                {col2.map((item) => (
                  <ServiceLink key={item.label} {...item} />
                ))}
              </nav>
              <nav className="flex flex-col gap-1" aria-label="Services column 3">
                {col3.map((item) => (
                  <ServiceLink key={item.label} {...item} />
                ))}
              </nav>
            </div>
          </div>

          <div className="w-full shrink-0 bg-[#0f0f0f] p-[40px] lg:max-w-[420px]">
            <div className="mb-6 h-[72px] w-[72px] rounded-lg bg-[#2a2a2a]" aria-hidden />
            <h4 className="font-bold text-[24px] text-white">Most Trusted Company</h4>
            <p className="mt-4 text-[16px] leading-relaxed text-zinc-400">
              IceCube Digital partners with brands worldwide to deliver reliable eCommerce, marketing,
              and engineering outcomes you can measure.
            </p>
          </div>
        </div>

        <div className="border-t border-[#272727] py-[50px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-col gap-4">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] text-zinc-300">
                {bottomNav.map((item, i) => (
                  <span key={item.label} className="inline-flex items-center gap-2">
                    {i > 0 ? <span className="text-zinc-600" aria-hidden>|</span> : null}
                    <Link href={item.href} className="hover:text-[#f17e3f]">
                      {item.label}
                    </Link>
                  </span>
                ))}
              </div>
              <p className="text-[15px] text-[#bbb]">
                &copy; {year} IceCube Digital. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3" aria-label="Social links">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-[#2a2a2a]" aria-hidden />
                ))}
              </div>
              <div className="flex items-center gap-2" aria-label="Payment methods">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-12 rounded bg-[#2a2a2a]" aria-hidden />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <Link
        href="https://wa.me/919106060593"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full shadow-lg ring-2 ring-black/20 transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <Image src="/images/whatsapp.png" alt="" width={56} height={56} className="object-cover" />
      </Link>
    </footer>
  );
}
