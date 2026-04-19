export default function AboutOurHeartSection() {
  return (
    <section className="about-our-heart full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">eCommerce lies</h3>
          <h2 className="main-title">At Our Heart</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-mini lg:gap-0">
          <figure>
            <img src="/images/about-our-heart.png" alt="" />
          </figure>
          <div className="my-auto grid gap-6 text-center sm:text-left lg:gap-8 lg:pl-20 xl:pl-24">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-5">
              <img className="max-w-20 xl:max-w-24" src="/images/magento-icon.svg" alt="" />
              <img className="max-w-20 xl:max-w-24" src="/images/shopify-icon.svg" alt="" />
              <img className="max-w-20 xl:max-w-24" src="/images/woocommerce-icon.svg" alt="" />
            </div>
            <p>
              Icecube Digital, a prominent eCommerce agency is famous for its creative eCommerce solutions with
              game-changing digital marketing services that transform the businesses of the clients. Our approach
              consists of holistic brand building, seamless integration of marketing strategy, creative implementations,
              audience targeting, media procurement, and cutting-edge analytics.
            </p>
          </div>
        </div>
        <div className="grid gap-space-mini pt-space-mini md:grid-cols-2">
          <div className="cart bg-black-light py-space-small px-space-small xl:p-12 flex flex-col gap-4 lg:gap-5 items-start">
            <h2 className="flex items-center gap-3 border-b-2 border-white/10 mb-0 xl:mb-2 pb-4 lg:pb-5 xl:pb-6 w-full">
              <img className="max-h-[1.2em]" src="/images/vision-icon.svg" alt="" /> Our Vision
            </h2>
            <p>
              At Icecube Digital, our vision is to revolutionize the digital landscape of every organization by
              bringing the utmost digital growth with our proven strategies. We take pride in our ability to leverage
              our strengths that solve the most complex challenges.
            </p>
            <p>
              Delivering partnership-focused Cloud, Maps, and Ad Stack solutions, we make sure to leave our strong
              imprints in the markets of the United States, Canada, UAE, India, and Singapore. We seek to establish
              ourselves as a prominent industry leader and a choice of digital agencies looking for a white-label
              partner.
            </p>
          </div>
          <div className="cart bg-black-light py-space-small px-space-small xl:p-12 flex flex-col gap-4 lg:gap-5 items-start">
            <h2 className="flex items-center gap-3 border-b-2 border-white/10 mb-0 xl:mb-2 pb-4 lg:pb-5 xl:pb-6 w-full">
              <img className="max-h-[1.2em]" src="/images/mision-icon.svg" alt="" /> Our Mission
            </h2>
            <p>
              Our mission is to make clients happy through our world-class eCommerce solutions and digital marketing
              expertise. Our happy teams deliver the best ROI making our clients happy.
            </p>
            <p>
              The value of investment in the business is paramount and thus, we commit to maximize return on investment
              for our esteemed clients. We incessantly strive to accelerate growth, boost workforce performance, and
              ameliorate cost efficiency for all enterprises, SMBs, and startups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
