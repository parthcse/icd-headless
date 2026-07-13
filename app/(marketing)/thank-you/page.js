import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/thank-you/");
  return (
    yoast || {
      title: "Thank You | Icecube Digital",
      description: "Thank you for contacting Icecube Digital — we'll get back to you within 24 hours.",
      robots: { index: false, follow: true },
    }
  );
}

const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main>
        <section className="thank-you-section common-top-banner full-section relative flex min-h-[70vh] items-center border-t-0 pt-32 pb-16 xl:pt-40 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-2xl py-8 text-center animate fadeUp">
            <span className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Message Received</p>
            <h1 className="font-48 font-semibold leading-tight">Thank You!</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Thank you for contacting us, we will get back to you within 24 hours.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn btn-primary">
                Back to Home
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
                  <path d={BTN_ARROW} />
                </svg>
              </Link>
              <Link href="/our-portfolio/" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageSchema uri="/thank-you/" />
      <Footer />
    </>
  );
}
