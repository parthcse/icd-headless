import Link from "next/link";

const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

/** "The Last Digital Marketing Agency You'll Ever Need." — 2-col (text | image). */
export default function AboutLastAgencySection() {
  return (
    <section className="about-last-agency full-section">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
          {/* Text — left */}
          <div className="animate fadeUp text-center lg:text-left">
            <h2 className="font-48 mb-0 leading-tight">The Last Digital Marketing Agency</h2>
            <h3 className="font-48 mb-0 leading-tight text-primary">You&rsquo;ll Ever Need.</h3>

            <div className="mt-6 lg:mt-8">
              <p className="font-22 mb-3 font-semibold text-white">Get marketing that drives results</p>
              <p className="mx-auto max-w-xl lg:mx-0">
                Ready to level up your strategy? We&rsquo;re here to help. For over 10 years we&rsquo;ve provided
                full-service digital marketing expertise across strategy, SEO, paid media and content.
              </p>
              <div className="btn-wrap mt-8">
                <Link href="/contact-us/" className="btn btn-primary">
                  Let&rsquo;s Talk
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
                    <path d={BTN_ARROW} />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Illustration — right */}
          <figure className="animate fadeUp mb-0" style={{ animationDelay: "0.15s" }}>
            <img
              src="/assets/photos/digital-marketing-growth.svg"
              alt="Digital marketing growth dashboard with rising performance charts"
              loading="lazy"
              className="mx-auto w-full max-w-xl transition-transform duration-500 ease-out hover:-translate-y-1.5"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
