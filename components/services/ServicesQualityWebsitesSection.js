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

export default function ServicesQualityWebsitesSection({ data }) {
  return (
    <section className="services-quality-websites full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp start">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {Array.isArray(data.subtitle)
            ? data.subtitle.map((p, i) => <p key={i} className={`mx-auto ${data.subtitleClass || "max-w-3xl"}`}>{p}</p>)
            : <p className={`mx-auto ${data.subtitleClass || "max-w-3xl"}`}>{data.subtitle}</p>}
        </div>
        <div className="grid lg:grid-cols-2 gap-6 leading-relaxed">
          {data.items.map((item, i) => (
            <div key={i} className="flex bg-black-light py-space-small px-space-small gap-4 sm:gap-6 md:gap-8">
              <div className="col-img min-w-14 sm:min-w-20">
                <img className="w-full" src={item.icon} alt="" />
              </div>
              <div className="text-box">
                <h3 className="font-semibold font-22">{item.name}</h3>
                {item.bodyList ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {item.bodyList.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                ) : (
                  <p>{Array.isArray(item.body) ? renderParts(item.body) : item.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {data.ctaLabel && (
          <div className="btn-wrap pt-space-mini text-center">
            <a href={data.ctaHref || "#"} className="btn btn-primary">
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
