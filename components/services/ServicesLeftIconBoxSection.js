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

export default function ServicesLeftIconBoxSection({ data }) {
  const itemW = data.columns === 1 ? "w-full" : "w-full lg:w-[calc(50%_-_12px)]";
  return (
    <section className="services-left-icon-box full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {data.subtitle &&
            (Array.isArray(data.subtitle)
              ? data.subtitle.map((p, i) => (
                  <p key={i} className="mx-auto max-w-5xl">{Array.isArray(p) ? renderParts(p) : p}</p>
                ))
              : <p className="mx-auto max-w-5xl">{data.subtitle}</p>)}
        </div>
        <div className="flex flex-wrap justify-center gap-6 leading-relaxed">
          {data.items.map((item, i) => (
            <div key={i} className={`${itemW} flex bg-black-light py-space-small px-space-small gap-4 sm:gap-6 md:gap-8 relative`}>
              <div className="col-img w-14 sm:w-20 flex-shrink-0">
                <img className="w-full" src={item.icon} alt="" />
              </div>
              <div className="text-box">
                <h3 className="font-semibold font-22">{item.title}</h3>
                {item.body && <p>{Array.isArray(item.body) ? renderParts(item.body) : item.body}</p>}
                {item.bodyList && (
                  <ul className="list-disc pl-5 space-y-1">
                    {item.bodyList.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                )}
                {item.bodyAfter && <p>{Array.isArray(item.bodyAfter) ? renderParts(item.bodyAfter) : item.bodyAfter}</p>}
              </div>
            </div>
          ))}
        </div>
        {data.footerNote && (
          <p className="text-center max-w-4xl mx-auto mt-10 leading-relaxed">{data.footerNote}</p>
        )}
        {data.ctaLabel && (
          <div className="btn-wrap pt-space-mini text-center">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} className="btn btn-primary" />
          </div>
        )}
      </div>
    </section>
  );
}
