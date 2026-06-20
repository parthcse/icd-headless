import { Fragment } from "react";

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <a key={i} href={part.href} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

export default function ServicesProcessStepSection({ data }) {
  const twoCol = data.columns === 2;
  return (
    <section className="services-process-step full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp start">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
        </div>
        <div className={twoCol
          ? "grid lg:grid-cols-2 gap-6 leading-relaxed"
          : "grid gap-4 leading-relaxed sm:px-4 xl:px-0"}>
          {data.steps.map((step, i) => {
            const showStepIcon = twoCol
              ? i % 2 === 0 && i + 2 < data.steps.length
              : i < data.steps.length - 1;
            return (
              <div key={i} className="step-box relative bg-black-light p-6 lg:p-8 flex gap-6 lg:gap-8 items-start">
                <div className="number-box bg-white rounded-full aspect-square text-black font-30 font-semibold min-w-[2.6em] flex items-center justify-center overflow-hidden">
                  {i + 1}
                </div>
                <div className="text-box">
                  <h5 className="font-22 mb-0">{step.title}</h5>
                  <p>{Array.isArray(step.body) ? renderParts(step.body) : step.body}</p>
                </div>
                {showStepIcon && (
                  <div className="step-icon hidden sm:block absolute -left-10 xl:-left-14 -bottom-14 w-6 h-[5.5rem]">
                    <img src="/assets/icons/step-icon.svg" alt="" />
                  </div>
                )}
              </div>
            );
          })}
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
