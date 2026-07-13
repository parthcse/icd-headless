import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";
import CaseStudyGallery from "@/components/case-studies/CaseStudyGallery";
import CaseStudyClientsSection from "@/components/case-studies/CaseStudyClientsSection";
import CaseStudyTestimonials from "@/components/case-studies/CaseStudyTestimonials";
import { getCaseStudyCategories, getCaseStudyPage } from "@/lib/case-studies";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/case-studies/");
  return yoast || {
  title: "Case Studies | Icecube Digital",
  description:
    "Real results, real businesses — explore our case studies across eCommerce, healthcare, HVAC, automotive, food, furniture and more, and see how we turned challenges into growth.",
};
}

export default async function CaseStudiesPage() {
  const [categories, firstPage] = await Promise.all([
    getCaseStudyCategories(),
    getCaseStudyPage({ category: "all" }),
  ]);

  return (
    <>
      <YoastSchema uri="/case-studies/" />
      <Header />
      <main>
        {/* Top section */}
        <section className="common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Project Case Studies</p>
            <h1 className="font-48 font-semibold leading-tight">
              Real Results for Real Businesses
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              Take a journey through real-world examples of how we transformed challenges into wins — across
              eCommerce, healthcare, HVAC, automotive, food, furniture and more.
            </p>
          </div>
        </section>

        {/* A Selection of Our Best Work — heading, then filter + cards */}
        <section className="case-study-gallery full-section">
          <div className="container">
            <div className="heading-wrap animate fadeUp xl:pb-12">
              <h3 className="mb-0 font-48 font-normal">A Selection of</h3>
              <h2 className="main-title mb-0">Our Best Work</h2>
              <p className="mx-auto max-w-5xl">
                We offer custom design and development services tailored to contribute in the growth of your
                online business. Our experienced team of designers and developers build websites that engage
                your customers and make more sales. Our focus is always to make sure that we don&rsquo;t just
                deliver but over deliver for the trust and money our valued customers put on us. Review our
                project case studies to know how we can partner together to grow your business through our
                ground breaking solutions.
              </p>
            </div>
            <CaseStudyGallery
              categories={categories}
              initialItems={firstPage.items}
              initialEndCursor={firstPage.endCursor}
              initialHasNextPage={firstPage.hasNextPage}
            />
          </div>
        </section>

        {/* Our Clients */}
        <CaseStudyClientsSection />

        {/* Testimonials — slider + View more reviews (shared) */}
        <CaseStudyTestimonials />

        <GetQuoteSection />

        {/* Countries We Serve */}
        <WeServeSection />
      </main>
      <PageSchema uri="/case-studies/" />
      <Footer />
    </>
  );
}
