import BtnArrowIcon from "../icons/BtnArrowIcon";

export default function HeroSection() {
  return (
    <section className="home-banner full-section relative border-t-0 text-center xl:py-36">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-90"
          aria-hidden="true"
          src="/images/home-banner-bg.svg"
          alt=""
        />
        <span className="absolute inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="container relative z-10 pt-space-mini mt-8 grid max-w-6xl gap-[1em] xl:mt-0">
        <h1 className="main-title animate-init" data-anim="animate__fadeInDown animate__faster">
          Build, Grow, & Scale
        </h1>

        <h2
          className="font-30 animate-init mb-0 font-normal"
          data-anim="animate__fadeInUp animate__delay-0.3s animate__fast"
        >
          Your eCommerce Store With Experts
        </h2>

        <h4
          className="font-24 animate-init my-4 border-b border-t border-white/10 py-4 lg:my-6 lg:py-6 xl:my-10 xl:py-10"
          data-anim="animate__fadeInUp animate__delay-0.6s animate__fast"
        >
          Your Success, Our Strategy
        </h4>

        <div
          className="animate-init flex flex-col items-center justify-between gap-4 sm:flex-row sm:text-left"
          data-anim="animate__fadeInUp animate__delay-0.8s animate__fast"
        >
          <p className="max-w-lg">
            We design, develop, and market high-performing eCommerce websites that drive real growth.
          </p>

          <a href="#" className="btn btn-primary">
            Get a free consultation
            <BtnArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
