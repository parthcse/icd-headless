import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";
import TestimonialVideoCard from "@/components/testimonials/TestimonialVideoCard";
import CountUp from "@/components/case-studies/CountUp";
import { VIDEO_TESTIMONIALS, TEXT_TESTIMONIALS } from "@/lib/client-testimonials";

export const metadata = {
  title: "Client Testimonials | Icecube Digital",
  description:
    "See why clients around the world trust Icecube Digital — video testimonials and dozens of written reviews on our eCommerce, design, development and SEO work.",
};

const FALLBACK_AVATAR = "/assets/testimonial/user-avatar-dark.png";

const STATS = [
  { value: `${TEXT_TESTIMONIALS.length}+`, label: "Written Reviews" },
  { value: "8+", label: "Video Testimonials" },
  { value: "30+", label: "Clutch & GoodFirms" },
  { value: "5.0", label: "Average Rating" },
];

const StarRow = () => (
  <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ))}
  </div>
);

const QuoteMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-primary/30" aria-hidden="true">
    <path d="M7.17 5A5.17 5.17 0 0 0 2 10.17V19h7.5v-7.5H5.75A1.75 1.75 0 0 1 7.5 9.75V8.5A3.5 3.5 0 0 0 4 5zm10.66 0A5.17 5.17 0 0 0 12.5 10.17V19H20v-7.5h-3.75A1.75 1.75 0 0 1 18 9.75V8.5A3.5 3.5 0 0 0 14.5 5z" />
  </svg>
);

export default function ClientTestimonialsPage() {
  return (
    <>
      <YoastSchema uri="/client-testimonials/" />
      <Header />
      <main>
        {/* Banner + stats */}
        <section className="services-banner full-section relative border-t-0 pt-32 pb-14 xl:pt-48 xl:pb-20">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="absolute inset-0 bg-black/55" />
          </div>
          <div className="container relative z-10 mx-auto max-w-4xl text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Client Testimonials</p>
            <h1 className="font-48 font-semibold leading-tight">
              Loved by Clients Around the World
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              Don&apos;t just take our word for it — hear it straight from the businesses we&apos;ve helped grow.
            </p>

            <div className="mx-auto mt-9 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/[0.12] via-white/[0.05] to-transparent px-4 py-5 backdrop-blur">
                  <CountUp value={s.value} className="block font-36 font-semibold text-primary" />
                  <p className="mt-1 text-base font-semibold text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video testimonials */}
        {VIDEO_TESTIMONIALS.length > 0 && (
          <section className="full-section">
            <div className="container">
              <div className="heading-wrap animate fadeUp">
                <h3 className="font-48 font-normal">Hear It in Their Words</h3>
                <h2 className="main-title">Video Testimonials</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {VIDEO_TESTIMONIALS.map((video) => (
                  <TestimonialVideoCard key={video.videoId} video={video} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Text testimonials — masonry */}
        <section className="full-section">
          <div className="container">
            <div className="heading-wrap animate fadeUp">
              <h3 className="font-48 font-normal">Kind Words From Our</h3>
              <h2 className="main-title">Happy Customers</h2>
            </div>
            <div className="gap-6 [column-gap:1.5rem] sm:columns-2 lg:columns-3">
              {TEXT_TESTIMONIALS.map((t, i) => (
                <figure
                  key={i}
                  className="mb-6 break-inside-avoid rounded-2xl border border-[#272727] bg-black-light p-6 transition-colors duration-300 hover:border-primary/30 animate fadeUp"
                >
                  <div className="flex items-center justify-between">
                    <QuoteMark />
                    <StarRow />
                  </div>
                  <figcaption className="font-22 mt-4 font-semibold leading-snug">{t.title}</figcaption>
                  <blockquote className="mt-2 leading-relaxed text-white/75">{t.quote}</blockquote>
                  <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                    <img
                      src={t.image || FALLBACK_AVATAR}
                      alt={t.name || "Client"}
                      loading="lazy"
                      className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/10"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold leading-tight">{t.name}</p>
                      {t.role && <p className="text-sm text-muted">{t.role}</p>}
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <GetQuoteSection />
        <WeServeSection />
      </main>
      <Footer />
    </>
  );
}
