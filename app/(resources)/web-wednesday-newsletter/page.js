import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsletterSignupForm from "@/components/newsletter/NewsletterSignupForm";
import GetQuoteSection from "@/components/home/GetQuoteSection";

export const metadata = {
  title: "The Web Wednesday Newsletter | Icecube Digital",
  description:
    "Join the Web Wednesday newsletter by Icecube Digital. Every Wednesday, get 2 practical tips you can implement yourself to grow your online business faster. Free, no spam.",
};

const BENEFITS = [
  "2 practical tips every Wednesday",
  "Implement them yourself",
  "Free — no spam, ever",
];

export default function NewsletterPage() {
  return (
    <>
      <Header />
      <main>
        <section className="services-banner full-section relative border-t-0 xl:py-28">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              aria-hidden="true"
              src="/assets/photos/home-banner-bg.png"
              alt=""
              fetchPriority="high"
            />
            <span className="absolute inset-0 bg-black bg-opacity-50" />
          </div>

          <div className="container relative z-10 grid items-center gap-space lg:grid-cols-2">
            {/* Left — title + pitch */}
            <div className="animate fadeUp">
              <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Free Weekly Newsletter</p>
              <h1 className="font-48 font-semibold leading-tight xl:text-[52px]">
                The Web Wednesday Newsletter <span className="text-primary">by Icecube Digital</span>
              </h1>
              <p className="mt-5 max-w-xl text-xl font-medium italic leading-relaxed text-white/90">
                &ldquo;The most praised newsletter for online business growth.&rdquo;
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                Every Wednesday, the latest issue lands in your inbox with 2 practical tips — that you can
                implement yourself — to grow your online business faster than your competitors.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F76724" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — signup form */}
            <div className="rounded-xl border border-[#2a2a2a] bg-black-light/80 p-6 backdrop-blur animate fadeUp sm:p-8" style={{ animationDelay: "0.15s" }}>
              <h2 className="font-30 font-semibold leading-snug">
                Get the &ldquo;Web Wednesday&rdquo; newsletter in your inbox
              </h2>
              <p className="mb-5 mt-1 text-muted">Enter your email and sign up for free right now.</p>
              <NewsletterSignupForm />
              <p className="mt-4 text-sm text-muted">
                No spam. Just the highest quality ideas you&apos;ll find on the web.
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
