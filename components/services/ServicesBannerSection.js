import ServicesBannerForm from "./ServicesBannerForm";

export default function ServicesBannerSection({ data }) {
  return (
    <section className="services-banner full-section relative border-t-0 xl:py-36">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" aria-hidden="true" src="/images/home-banner-bg.png" alt="" />
        <span className="bg-black absolute inset-0 bg-opacity-25" />
      </div>
      <div className="container relative z-10 pt-space-mini mt-8 md:mt-0 xl:pt-0 grid lg:grid-cols-2 gap-space">
        <div className="text-box leading-relaxed space-y-5 my-auto animate fadeUp">
          <h1 className="font-48 font-bold leading-tight">{data.heading}</h1>
          {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <ul className="space-y-2 font-semibold">
            {data.checklistItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <img className="w-[1em]" src="/images/check-primary-icon.svg" alt="" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <a href={data.ctaHref} className="btn btn-primary">
              {data.ctaLabel}
              {data.btnArrow && (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                  <path d={data.btnArrow} />
                </svg>
              )}
            </a>
            <span className="text-muted font-semibold">OR</span>
            <a href={data.phoneHref} className="btn btn-primary bg-transparent">
              <img src="/images/mobile-call-icon.svg" alt="" /> {data.phoneLabel}
            </a>
          </div>
        </div>
        <ServicesBannerForm title={data.formTitle} btnArrow={data.btnArrow} />
      </div>
    </section>
  );
}
