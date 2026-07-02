import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import { getPortfolioCategories, getPortfolioPage } from "@/lib/portfolio";

export const metadata = {
  title: "Our Portfolio | Icecube Digital",
  description:
    "Explore our portfolio — eCommerce stores and websites we've designed, built and grown across fashion, furniture, jewelry, automotive, healthcare and more.",
};

export default async function OurPortfolioPage() {
  const [categories, firstPage] = await Promise.all([
    getPortfolioCategories(),
    getPortfolioPage({ category: "all" }),
  ]);

  return (
    <>
      <Header />
      <main>
        {/* Top section */}
        <section className="services-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black-light" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Our Work</p>
            <h1 className="font-48 font-semibold leading-tight">
              Our Portfolio
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              A selection of the brands and stores we&apos;ve designed, built and grown — across fashion, furniture,
              jewelry, automotive, healthcare and more.
            </p>
          </div>
        </section>

        {/* Portfolio gallery — category filter + paginated load more */}
        <section className="full-section">
          <div className="container">
            <PortfolioGallery
              categories={categories}
              initialItems={firstPage.items}
              initialEndCursor={firstPage.endCursor}
              initialHasNextPage={firstPage.hasNextPage}
            />
          </div>
        </section>

        <GetQuoteSection />
      </main>
      <Footer />
    </>
  );
}
