import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";
import { getPortfolioBySlug, getAllPortfolioSlugs } from "@/lib/portfolio";
import { getYoastMetadataByUri } from "@/lib/seo";
import YoastSchema from "@/components/common/YoastSchema";

const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

export async function generateStaticParams() {
  const slugs = await getAllPortfolioSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) return {};
  const yoast = await getYoastMetadataByUri(`/portfolio/${slug}/`);
  return yoast || {
    title: `${portfolio.title} | Portfolio | Icecube Digital`,
    description: portfolio.label || `${portfolio.title} — a project by Icecube Digital.`,
  };
}

export default async function PortfolioSinglePage({ params }) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) notFound();

  return (
    <>
      <YoastSchema uri={`/portfolio/${slug}/`} />
      <Header />
      <main>
        {/* Top section */}
        <section className="portfolio-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
            <h1 className="font-48 font-semibold leading-tight">{portfolio.title}</h1>
            {portfolio.label && (
              <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-muted">{portfolio.label}</p>
            )}
          </div>
        </section>

        {/* Work Performed — 2 columns: image | list + live-site button */}
        {(portfolio.workPerformedHtml || portfolio.image) && (
          <section className="work-performed-section full-section">
            <div className="container">
              <div className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
                {portfolio.image && (
                  <figure className="animate fadeUp">
                    <img
                      src={portfolio.image}
                      alt={portfolio.imageAlt}
                      className="w-full border border-white/10 bg-black-light"
                    />
                  </figure>
                )}
                <div className="animate fadeUp" style={{ animationDelay: "0.1s" }}>
                  <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-primary">What We Did</p>
                  <h2 className="mb-6 font-36 font-semibold leading-tight">Work Performed</h2>
                  {portfolio.workPerformedHtml && (
                    <div className="blog-content [&_a]:font-semibold [&_a]:!underline" dangerouslySetInnerHTML={{ __html: portfolio.workPerformedHtml }} />
                  )}
                  {portfolio.liveUrl && (
                    <div className="mt-8">
                      <a href={portfolio.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Live Website
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                          <path d={BTN_ARROW} />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <GetQuoteSection />
        <WeServeSection />
      </main>
      <Footer />
    </>
  );
}
