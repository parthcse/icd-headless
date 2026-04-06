import HeroMainTitle from "./HeroMainTitle";

export default function HeroSection() {
  return (
    <section className="home-banner full-section relative text-center border-t-0 xl:py-36">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" aria-hidden="true" src="/images/home-banner-bg.png" alt="" />
        <span className="bg-black absolute inset-0 bg-opacity-25"></span>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-space-mini mt-8 xl:mt-0">
        <HeroMainTitle />
        <h2 className="font-48 font-normal mb-0 wpb_animate animated wpb_fadeUp" style={{ animationDelay: "0.6s" }}>Your eCommerce Store With Experts</h2>
        <div className="border border-[#202020] my-4 lg:my-6 xl:my-10 wpb_animate animated wpb_line" style={{ animationDelay: "0.8s" }}></div>
        <h4 className="font-30 font-normal my-4 lg:my-6 xl:my-10 wpb_animate animated wpb_fadeUp" style={{ animationDelay: "0.8s" }}>Your Success, Our Strategy</h4>
        <div className="border border-[#202020] my-4 lg:my-6 xl:my-10 wpb_animate animated wpb_line" style={{ animationDelay: "0.8s" }}></div>
        <div className="flex flex-col gap-4 md:flex-row md:text-left items-center justify-between max-w-4xl mx-auto wpb_animate animated wpb_fadeUp" style={{ animationDelay: "1s" }}>  
          <p className="max-w-lg">We design, develop, and market high-performing eCommerce websites that drive real growth.</p>
          <a href="#" className="btn btn-primary">
            Get a free consultation 
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
              <path d="M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z"></path>
            </svg> 
          </a>
        </div>
      </div>
    </section>
  );
}
