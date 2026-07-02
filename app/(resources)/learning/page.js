import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import LearningVideoCard from "@/components/learning/LearningVideoCard";
import GetQuoteSection from "@/components/home/GetQuoteSection";

export const metadata = {
  title: "Learning | Tutorials & Guides | Icecube Digital",
  description:
    "Free tutorials, guides and insights from the Icecube Digital team — covering Google Tag Manager, eCommerce, Google Ads conversion tracking and more.",
};

const VIDEOS = [
  {
    videoId: "aiDP1D5MUDQ",
    title: "Google Tag Manager Tutorial: How to Track Phone & Email Clicks Like a Pro!",
  },
  {
    videoId: "lNJOKgtuDKc",
    title: "Top 10 Ecommerce Myths You Should Know About",
  },
  {
    videoId: "ykNaRMRe56E",
    title: "How to Set Up Google Ads Conversion Tracking with GTM (The Right Way) | 2025 Step By Step Tutorial",
  },
];

export default function LearningPage() {
  return (
    <>
      <YoastSchema uri="/learning/" />
      <Header />
      <main>
        <section className="services-banner full-section relative border-t-0 pt-28 pb-16 xl:pt-40 xl:pb-28">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              aria-hidden="true"
              src="/assets/photos/home-banner-bg.png"
              alt=""
              fetchPriority="high"
            />
            <span className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Watch &amp; Learn</p>
            <h1 className="font-48 font-semibold leading-tight">Learning</h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              Free tutorials, guides and insights from our team to help you grow your digital presence.
            </p>
          </div>
        </section>

        <section className="full-section">
          <div className="container">
            <div className="grid animate fadeUp gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {VIDEOS.map((video) => (
                <LearningVideoCard key={video.videoId} videoId={video.videoId} title={video.title} />
              ))}
            </div>
          </div>
        </section>

        <GetQuoteSection />
      </main>
      <Footer />
    </>
  );
}
