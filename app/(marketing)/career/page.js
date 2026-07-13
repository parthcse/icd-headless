import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";
import ServicesOurClientSection from "@/components/services/ServicesOurClientSection";
import ourClientsSection from "@/lib/services/common-section/our-clients-section";
import CareerOpenings from "@/components/career/CareerOpenings";
import { WHY_WORK, JOB_OPENINGS, CAREERS_APPLY_URL } from "@/lib/careers";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/career/");
  return yoast || {
  title: "Careers | Icecube Digital",
  description:
    "Join the Icecube Digital team. Explore open roles in Shopify, web development and performance marketing — and see why you'll love building your career with us.",
};
}

export default function CareerPage() {
  return (
    <>
      <YoastSchema uri="/career/" />
      <Header />
      <main>
        {/* Top section */}
        <section className="common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Careers</p>
            <h1 className="font-48 font-semibold leading-tight">
              Build Your Career With <br />Icecube Digital
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              We&apos;re a team of designers, developers and marketers who love building things that grow businesses.
              If that sounds like you, we&apos;d love to work together.
            </p>
          </div>
        </section>

        {/* Why Work With Us  +  We Are Looking For — 2 columns */}
        <section className="career-openings-section full-section">
          <div className="container">
            <div className="grid items-start gap-10 lg:grid-cols-5 xl:gap-12">
              {/* Left — Why Work With Us (sticky) */}
              <div className="lg:sticky lg:top-28 lg:col-span-2 lg:self-start">
                <div className="mb-6 animate fadeUp">
                  <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-primary">Life at Icecube</p>
                  <h2 className="font-36 font-semibold leading-tight">Why Work With Us?</h2>
                </div>
                <div className="space-y-4 animate fadeUp">
                  {WHY_WORK.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition-colors duration-300 hover:border-primary/30"
                    >
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/[0.05] text-primary ring-1 ring-inset ring-primary/25">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                        </svg>
                      </span>
                      <h3 className="mb-1.5 font-22 font-semibold">{item.title}</h3>
                      <p className="leading-relaxed text-white/75">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — We Are Looking For */}
              <div className="lg:col-span-3">
                <div className="mb-6 animate fadeUp">
                  <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-primary">We&apos;re Hiring</p>
                  <h2 className="font-36 font-semibold leading-tight">We Are Looking For</h2>
                </div>
                <div className="animate fadeUp">
                  <CareerOpenings openings={JOB_OPENINGS} applyUrl={CAREERS_APPLY_URL} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <ServicesOurClientSection data={ourClientsSection} />

        {/* Get a Quote */}
        <GetQuoteSection />

        {/* Countries We Serve */}
        <WeServeSection />
      </main>
      <PageSchema uri="/career/" />
      <Footer />
    </>
  );
}
