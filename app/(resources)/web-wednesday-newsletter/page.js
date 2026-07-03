import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import NewsletterSignupForm from "@/components/newsletter/NewsletterSignupForm";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/web-wednesday-newsletter/");
  return yoast || {
  title: "The Web Wednesday Newsletter | Icecube Digital",
  description:
    "Join the Web Wednesday newsletter by Icecube Digital. Every Wednesday, get 2 practical tips you can implement yourself to grow your online business faster. Free, no spam.",
};
}

export default function NewsletterPage() {
  return (
    <>
      <YoastSchema uri="/web-wednesday-newsletter/" />
      <Header />
      <main>
        <section className="common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-28">
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

          <div className="container relative z-10 grid gap-space lg:grid-cols-2">
            {/* Left — title + pitch (copy from live site) */}
            <div className="animate fadeUp">
              <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Free Weekly Newsletter</p>
              <h1 className="font-48 font-semibold leading-tight">
                The Web Wednesday Newsletter <span className="text-primary">by Icecube Digital</span>
              </h1>
              <p className="mt-5 max-w-xl text-xl font-medium italic leading-relaxed text-white/90">
                &ldquo;The most praised newsletter for online business growth.&rdquo;
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                The Web Wednesday newsletter is one of the most popular newsletters on practical tips to grow
                your online business. Every Wednesday, the latest issue is sent with 2 practical tips, that you
                can implement yourself, to grow your business faster than your competitors.
              </p>
            </div>

            {/* Right — signup form (fills the column height) */}
            <div className="flex flex-col rounded-xl border border-[#2a2a2a] bg-black-light/80 p-6 backdrop-blur animate fadeUp sm:p-8" style={{ animationDelay: "0.15s" }}>
              <h2 className="font-30 font-semibold leading-snug">
                Get the &ldquo;Web Wednesday&rdquo; newsletter in your inbox
              </h2>
              <p className="mb-5 mt-2 text-muted">Enter your email and sign up for free right now.</p>
              <NewsletterSignupForm />
              <p className="mt-auto border-t border-white/10 pt-5 text-sm text-muted">
                No spam. Just the highest quality ideas you&apos;ll find on the web. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        <GetQuoteSection />
      </main>
      <Footer />
    </>
  );
}
