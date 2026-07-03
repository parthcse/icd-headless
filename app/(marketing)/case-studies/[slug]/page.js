import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";
import CaseStudyTestimonials from "@/components/case-studies/CaseStudyTestimonials";
import CountUp from "@/components/case-studies/CountUp";
import YoastSchema from "@/components/common/YoastSchema";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";
import { getYoastMetadataByUri } from "@/lib/seo";
import { stripHtml, truncateWords } from "@/lib/wp-text";

const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
    <path d={BTN_ARROW} />
  </svg>
);

// Gallery / single image for the challenge & solution sections.
function MediaBlock({ images }) {
  if (!images?.length) return null;
  return (
    <div className={images.length > 1 ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : ""}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full rounded-xl border border-white/10 bg-black-light object-cover"
        />
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) return {};
  const desc = truncateWords(stripHtml(cs.top.contentHtml), 30);
  const yoast = await getYoastMetadataByUri(`/case-studies/${slug}/`);
  return yoast || {
    title: `${cs.top.title || cs.title} | Case Study | Icecube Digital`,
    description: desc || `${cs.title} — a case study by Icecube Digital.`,
  };
}

export default async function CaseStudySinglePage({ params }) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const { top, results, challenges, solutions, liveUrl } = cs;

  return (
    <>
      <YoastSchema uri={`/case-studies/${slug}/`} />
      <Header />
      <main>
        {/* Top section — simple page-title banner */}
        <section className="common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-44 xl:pb-20">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-6 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Case Study</p>
            <h1 className="font-48 font-semibold leading-tight">{cs.title}</h1>
          </div>
        </section>

        {/* Case study info — eyebrow + title + content (caseStudyTopSection) */}
        {(top.title || top.contentHtml) && (
          <section className="case-study-info full-section">
            <div className="container">
              <div className="mx-auto max-w-5xl text-center animate fadeUp">
                {top.eyebrow && (
                  <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">{top.eyebrow}</p>
                )}
                {top.title && <h2 className="mb-0 font-48 font-semibold leading-tight">{top.title}</h2>}
                {top.contentHtml && (
                  <div
                    className="blog-content mx-auto mt-6 text-left [&_p]:text-center [&_p]:text-white [&_p]:text-lg"
                    dangerouslySetInnerHTML={{ __html: top.contentHtml }}
                  />
                )}
                {liveUrl && (
                  <div className="mt-8">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View Live Website
                      <ArrowIcon />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Results — counter metrics beside the image */}
        {(results.metrics.length > 0 || results.image) && (
          <section className="case-study-results full-section">
            <div className="container">
              {results.image ? (
                <div className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
                  <div className="animate fadeUp">
                    <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-primary">The Results</p>
                    <h2 className="mb-6 font-36 font-semibold leading-tight">Measurable Impact</h2>
                    {results.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 lg:gap-6">
                        {results.metrics.map((m, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/[0.12] via-white/[0.04] to-transparent px-4 py-7 text-center backdrop-blur"
                          >
                            <p className="mb-1 font-48 font-bold text-primary">
                              <small><CountUp value={m.value} /></small>
                            </p>
                            <p className="font-semibold text-white/75">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <figure className="animate fadeUp" style={{ animationDelay: "0.1s" }}>
                    <img
                      src={results.image}
                      alt={results.imageAlt}
                      loading="lazy"
                      className="w-full rounded-xl border border-white/10 bg-black-light object-cover"
                    />
                  </figure>
                </div>
              ) : (
                results.metrics.length > 0 && (
                  <>
                    <div className="heading-wrap animate fadeUp xl:pb-12">
                      <h3 className="mb-0 font-48 font-normal">The</h3>
                      <h2 className="main-title mb-0">Results</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 animate fadeUp">
                      {results.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/[0.12] via-white/[0.04] to-transparent px-4 py-7 text-center backdrop-blur"
                        >
                          <p className="mb-1 font-48 font-bold text-primary">
                            <small><CountUp value={m.value} /></small>
                          </p>
                          <p className="font-semibold text-white/75">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )
              )}
            </div>
          </section>
        )}

        {/* Challenges — image | content */}
        {(challenges.contentHtml || challenges.images.length > 0) && (
          <section className="case-study-challenges full-section">
            <div className="container">
              <div className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
                {challenges.images.length > 0 && (
                  <div className="animate fadeUp">
                    <MediaBlock images={challenges.images} />
                  </div>
                )}
                <div className="animate fadeUp" style={{ animationDelay: "0.1s" }}>
                  <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-primary">The Challenge</p>
                  <h2 className="mb-6 font-36 font-semibold leading-tight">What We Set Out to Solve</h2>
                  {challenges.contentHtml && (
                    <div className="blog-content [&_a]:font-semibold" dangerouslySetInnerHTML={{ __html: challenges.contentHtml }} />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Solutions — content | image (reversed) */}
        {(solutions.contentHtml || solutions.images.length > 0) && (
          <section className="case-study-solutions full-section">
            <div className="container">
              <div className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
                <div className="animate fadeUp lg:order-2">
                  {solutions.images.length > 0 ? <MediaBlock images={solutions.images} /> : null}
                </div>
                <div className="animate fadeUp lg:order-1" style={{ animationDelay: "0.1s" }}>
                  <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-primary">Our Solution</p>
                  <h2 className="mb-6 font-36 font-semibold leading-tight">How We Delivered</h2>
                  {solutions.contentHtml && (
                    <div className="blog-content [&_a]:font-semibold" dangerouslySetInnerHTML={{ __html: solutions.contentHtml }} />
                  )}
                </div>
              </div>
              {liveUrl && (
                <div className="btn-wrap mt-10 text-center animate fadeUp xl:mt-14">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Live Website
                    <ArrowIcon />
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Testimonials — slider + View more reviews (shared) */}
        <CaseStudyTestimonials />

        <GetQuoteSection />

        {/* Countries We Serve */}
        <WeServeSection />
      </main>
      <Footer />
    </>
  );
}
