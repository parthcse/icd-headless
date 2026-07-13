import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import MetaLengthChecker from "@/components/tools/MetaLengthChecker";
import MetaGuideSection from "@/components/tools/MetaGuideSection";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import QuotePopupButton from "@/components/common/QuotePopupButton";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/meta-length-checker/");
  return yoast || {
  title: "Meta Length Checker | Free SEO Title & Description Tool | Icecube Digital",
  description:
    "Optimize your meta titles and descriptions and rank your pages on SERPs easily with our free title and meta description length checker. Live Google preview, character and pixel counts.",
};
}

export default function MetaLengthCheckerPage() {
  return (
    <>
      <YoastSchema uri="/meta-length-checker/" />
      <Header />
      <main>
        <section className="common-top-banner full-section relative border-t-0 pt-28 pb-16 xl:pt-40 xl:pb-28">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              aria-hidden="true"
              src="/assets/photos/home-banner-bg.png"
              alt=""
              fetchPriority="high"
            />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Free SEO Tool</p>
            <h1 className="font-48 font-semibold leading-tight">Meta Length Checker</h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              Optimize your meta titles &amp; descriptions and rank your pages on SERPs easily with our title
              and meta description length checker.
            </p>
            <div className="mt-6">
              <QuotePopupButton>Get Your Free SEO Audit</QuotePopupButton>
            </div>
          </div>
        </section>

        <MetaLengthChecker />
        <MetaGuideSection />
        <GetQuoteSection />
      </main>
      <PageSchema uri="/meta-length-checker/" />
      <Footer />
    </>
  );
}
