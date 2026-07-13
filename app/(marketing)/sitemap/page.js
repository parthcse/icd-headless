import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import YoastSchema from "@/components/common/YoastSchema";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import { getYoastMetadataByUri } from "@/lib/seo";
import { SITEMAP_SECTIONS } from "@/lib/sitemap-data";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/sitemap/");
  return (
    yoast || {
      title: "Sitemap | Icecube Digital",
      description:
        "Explore every page on Icecube Digital — web design & development, digital marketing, AI, industry and location services, plus company, work and resources.",
    }
  );
}

function LinkList({ links, className = "" }) {
  return (
    <ul className={className}>
      {links.map((l) => (
        <li key={l.href} className="mb-2.5 break-inside-avoid">
          <Link
            href={l.href}
            className="group inline-flex items-start gap-2 leading-snug text-white/70 transition-colors hover:text-primary"
          >
            <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
            <span>{l.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  return (
    <>
      <YoastSchema uri="/sitemap/" />
      <Header />
      <main>
        {/* Top section */}
        <section className="common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Sitemap</p>
            <h1 className="font-48 font-semibold leading-tight">Icecube Digital Sitemap</h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              Every page in one place — browse our services, industries, work and resources.
            </p>
          </div>
        </section>

        {/* Sitemap sections */}
        <section className="sitemap-content-section full-section">
          <div className="container space-y-12 xl:space-y-16">
            {SITEMAP_SECTIONS.map((section) => (
              <div key={section.title} className="animate fadeUp">
                <h2 className="mb-6 font-36 font-semibold leading-tight">{section.title}</h2>

                {section.groups ? (
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {section.groups.map((group) => (
                      <div key={group.subtitle} className="rounded-xl border border-white/10 bg-black-light p-6">
                        <h3 className="mb-4 font-22 font-semibold text-primary">{group.subtitle}</h3>
                        <LinkList links={group.links} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-white/10 bg-black-light p-6 sm:p-8">
                    <LinkList links={section.links} className="gap-x-8 sm:columns-2 lg:columns-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <GetQuoteSection />
      </main>
      <PageSchema uri="/sitemap/" />
      <Footer />
    </>
  );
}
