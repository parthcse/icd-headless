import AboutCharHeading from "./AboutCharHeading";

export default function AboutBannerSection() {
  return (
    <section className="about-banner full-section relative border-t-0 text-center xl:py-36">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" aria-hidden="true" src="/images/home-banner-bg.png" alt="" />
        <span className="absolute inset-0 bg-black bg-opacity-25" aria-hidden="true" />
      </div>
      <div className="relative z-10 container max-w-4xl pt-space-mini mt-8 xl:mt-0">
        <AboutCharHeading />
        <h2 className="font-30 animate fadeUp pb-1 font-light md:pb-2 xl:pb-3" style={{ animationDelay: "0.6s" }}>
          Because you come before us! making it all about your experience client-centric at the core!
        </h2>
        <p className="animate fadeUp" style={{ animationDelay: "0.7s" }}>
          We don&apos;t believe in the conventional way of defining us, as we believe we are defined by your ambitions
          and aspirations. We are inspired by you! What we do, why we do it, and how we do, it all hangs on you. This
          becoming our driving force helps us to emerge as more than just another run-of-the-mill marketing and
          technology agency. The purpose of why we thrive lies in our hunger for implementing innovative concepts to
          aid you achieve monumental goals.
        </p>
      </div>
    </section>
  );
}
