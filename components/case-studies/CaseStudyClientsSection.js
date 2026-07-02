import Link from "next/link";

const CLIENT_LOGOS = Array.from({ length: 15 }, (_, i) => `/assets/photos/out-client-${i + 1}.png`);

const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

export default function CaseStudyClientsSection() {
  return (
    <section className="all-brands-section full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp xl:pb-16">
          <h3 className="mb-0 font-48 font-normal"></h3>
          <h2 className="main-title mb-0">Our Clients</h2>
          <p className="mx-auto max-w-2xl">
            Clients who have worked with. They trust IceCube Digital for over 10 years.
          </p>
        </div>

        {/* Logo grid — subtle gradient tiles that light up on hover */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4 animate fadeUp">
          {CLIENT_LOGOS.map((src) => (
            <div
              key={src}
              className="group flex aspect-[16/9] items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-5 transition-all duration-300 hover:border-primary/40 hover:from-primary/[0.10]"
            >
              <img
                className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                src={src}
                alt=""
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="btn-wrap text-center pt-space-mini animate fadeUp">
          <Link href="/contact-us/" className="btn btn-primary">
            Let&rsquo;s Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
              <path d={BTN_ARROW} />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
