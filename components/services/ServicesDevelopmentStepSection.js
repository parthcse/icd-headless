export default function ServicesDevelopmentStepSection({ data }) {
  return (
    <section className="services-development-step full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp start">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {data.subtitle && <p className="mx-auto max-w-4xl">{data.subtitle}</p>}
        </div>
        <div className="grid gap-4 leading-relaxed sm:px-4 xl:px-0">
          {data.steps.map((step, i) => (
            <div key={i} className="step-box relative bg-black-light p-6 lg:p-8 flex gap-6 lg:gap-8 items-center">
              <div className="number-box bg-white rounded-full aspect-square text-black font-30 font-semibold min-w-[2.1em] flex items-center justify-center overflow-hidden">
                {i + 1}
              </div>
              <div className="text-box">
                <h5 className="font-22 mb-0">{step.title}</h5>
                <p>{step.body}</p>
              </div>
              {i < data.steps.length - 1 && (
                <div className="step-icon hidden sm:block absolute -left-10 xl:-left-14 -bottom-14 w-6 h-[5.5rem]">
                  <img src="/images/step-icon.svg" alt="" />
                </div>
              )}
            </div>
          ))}
        </div>
        {data.ctaLabel && (
          <div className="btn-wrap text-center pt-space-mini">
            <a href={data.ctaHref} className="btn btn-primary">
              {data.ctaLabel}
              {data.btnArrow && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                  <path d={data.btnArrow} />
                </svg>
              )}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
