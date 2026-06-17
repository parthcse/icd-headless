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

export default function ServicesLeftIconBoxSection({ data }) {
  const isCircle = data.variant === "circle";
  return (
    <section className="services-quality-websites full-section">
      <div className="container">
        <div className={`heading-wrap animate fadeUp${isCircle ? "" : " start"}`}>
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {Array.isArray(data.subtitle)
            ? data.subtitle.map((p, i) => <p key={i} className={`mx-auto ${data.subtitleClass || "max-w-4xl"}`}>{p}</p>)
            : <p className={`mx-auto ${data.subtitleClass || "max-w-4xl"}`}>{data.subtitle}</p>}
        </div>
        {isCircle ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 leading-relaxed text-center small">
            {data.items.map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-black-light px-8 py-10 gap-6">
                <div className="rounded-full bg-white flex items-center justify-center w-[108px] h-[108px] min-w-[108px] p-[14px]">
                  <img className="w-full h-full object-contain" src={item.icon} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold font-22">{item.name}</h3>
                  <p>{Array.isArray(item.body) ? renderParts(item.body) : item.body}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6 leading-relaxed">
            {data.items.map((item, i) => (
              <div key={i} className="flex bg-black-light py-space-small px-space-small gap-4 sm:gap-6 md:gap-8 relative">
                <div className="col-img w-14 sm:w-20 flex-shrink-0">
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
        )}
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
