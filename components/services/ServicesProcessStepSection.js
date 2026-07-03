import { Fragment } from "react";

import ServiceCtaButton from "@/components/services/ServiceCtaButton";
function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold">{part.bold}</strong>
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
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {Array.isArray(data.subtitle)
            ? data.subtitle.map((p, i) => (
                <p key={i} className="mx-auto max-w-5xl">{Array.isArray(p) ? renderParts(p) : p}</p>
              ))
            : data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
        </div>
        <div className={twoCol
          ? "grid lg:grid-cols-2 gap-6 leading-relaxed"
          : "grid gap-4 leading-relaxed sm:px-4 xl:px-0"}>
          {data.steps.map((step, i) => {
            const showStepIcon = twoCol
              ? i % 2 === 0 && i + 2 < data.steps.length
              : i < data.steps.length - 1;
            return (
              <div key={i} className={`step-box relative bg-black-light p-6 lg:p-8 flex gap-6 lg:gap-8 ${data.align === "center" ? "items-center" : "items-start"}`}>
                <div className="number-box bg-white rounded-full aspect-square text-black font-30 font-semibold min-w-[2.6em] flex items-center justify-center overflow-hidden">
                  {i + 1}
                </div>
                <div className="text-box">
                  <h3 className="font-22 mb-0">{step.title}</h3>
                  {step.body && <p>{Array.isArray(step.body) ? renderParts(step.body) : step.body}</p>}
                  {step.bodyList && (
                    <ul className="list-disc pl-5 space-y-1">
                      {step.bodyList.map((li, j) => <li key={j}>{Array.isArray(li) ? renderParts(li) : li}</li>)}
                    </ul>
                  )}
                  {step.bodyAfter && <p>{Array.isArray(step.bodyAfter) ? renderParts(step.bodyAfter) : step.bodyAfter}</p>}
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
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} className="btn btn-primary" />
          </div>
        )}
      </div>
    </section>
  );
}
