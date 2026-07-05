import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Page Not Found | Icecube Digital",
  description: "Sorry, we couldn't find the page you're looking for.",
  robots: { index: false, follow: true },
};

const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="not-found-section common-top-banner full-section relative flex min-h-[70vh] items-center border-t-0 pt-32 pb-16 xl:pt-40 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-2xl py-8 text-center animate fadeUp">
            <h1 className="main-title text-primary">404</h1>
            <p className="font-36 font-semibold mt-2">Page Not Found</p>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn btn-primary">
                Back to Homepage
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
                  <path d={BTN_ARROW} />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
