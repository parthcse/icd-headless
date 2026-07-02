export default function WhyChooseUsSection() {
  return (
    <section className="home-why-choose common-counter full-section xl:pt-28 xl:pb-36">
      <div className="container">
        <div className="heading-wrap xl:pb-16 animate fadeUp">
          <h3 className="mb-0 font-48 font-normal">Count On The Recognized Leader</h3>
          <h2 className="main-title mb-0">Why Choose Us?</h2>
          <p>
            We&apos;ve helped businesses increase their revenue on an average by 90% in their first year with us!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-space-mini md:grid-cols-2 xl:gap-x-40 xl:gap-y-24">
          <div className="column">
            <div className="top-bar main-title pb-space-small font-medium xl:pb-8">
              <figure className="mb-[0.25em]">
                <img
                  className="w-full max-h-[0.46em] max-w-[0.46em]"
                  src="/assets/icons/home-why-choose-1.svg"
                  width="67"
                  height="44"
                  alt=""
                />
              </figure>
              <p className="counter text-[0.592em] font-semibold" data-target="35" data-suffix="+">
                0
              </p>
              <p className="mt-2 font-22 font-normal xl:text-[0.27em]">People</p>
            </div>
            <div className="discription border-t border-[#202020] pt-space-small xl:pt-10">
              <p>
                Over 35 experts in eCommerce & digital marketing. Our team includes certified developers, designers,
                SEO specialists, marketers, and project managers working together to deliver measurable business growth.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="top-bar main-title pb-space-small font-medium xl:pb-8">
              <figure className="mb-[0.15em]">
                <img
                  className="w-full max-h-[0.43em] max-w-[0.46em]"
                  src="/assets/icons/home-why-choose-2.svg"
                  width="70"
                  height="70"
                  alt=""
                />
              </figure>
              <p className="counter text-[0.592em] font-semibold" data-target="14" data-suffix="+">
                0
              </p>
              <p className="mt-2 font-22 font-normal xl:text-[0.27em]">Years</p>
            </div>
            <div className="discription border-t border-[#202020] pt-space-small xl:pt-10">
              <p>
                Over 14 years as an independent eCommerce agency. With more than a decade of industry experience, we&apos;ve
                successfully delivered scalable digital solutions for startups, SMBs, and enterprise businesses.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="top-bar main-title pb-space-small font-medium xl:pb-8">
              <figure className="mb-[0.2em]">
                <img
                  className="w-full max-h-[0.46em] max-w-[0.46em]"
                  src="/assets/icons/home-why-choose-3.svg"
                  width="70"
                  height="70"
                  alt=""
                />
              </figure>
              <p className="counter text-[0.592em] font-semibold" data-target="250" data-suffix="+">
                0
              </p>
              <p className="mt-2 font-22 font-normal xl:text-[0.27em]">Client</p>
            </div>
            <div className="discription border-t border-[#202020] pt-space-small xl:pt-10">
              <p>
                250+ current clients in ecommerce development, SEO & more. Businesses across multiple industries trust
                us for long-term partnerships, reliable support, and results-driven digital services.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="top-bar main-title pb-space-small font-medium xl:pb-8">
              <figure className="mb-[0.2em]">
                <img
                  className="w-full max-h-[0.46em] max-w-[0.46em]"
                  src="/assets/icons/home-why-choose-4.svg"
                  width="70"
                  height="70"
                  alt=""
                />
              </figure>
              <p className="counter text-[0.592em] font-semibold" data-target="500" data-prefix="$" data-suffix="M">
                0
              </p>
              <p className="mt-2 font-22 font-normal xl:text-[0.27em]">Annual Billings</p>
            </div>
            <div className="discription border-t border-[#202020] pt-space-small xl:pt-10">
              <p>
                $500 million in annual revenue for our customers. Our eCommerce solutions and digital marketing
                strategies have helped clients generate over $500 million in combined annual revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
