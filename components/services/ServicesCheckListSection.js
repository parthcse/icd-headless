import { Fragment } from "react";

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

export default function ServicesCheckListSection({ data }) {
  return (
    <section className="services-checklist full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {Array.isArray(data.subtitle)
            ? data.subtitle.map((p, i) => (
                <p key={i} className="mx-auto max-w-5xl">{Array.isArray(p) ? renderParts(p) : p}</p>
              ))
            : <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
        </div>
        <div className={`grid grid-cols-1 ${data.benefitsRight ? "md:grid-cols-2" : ""} gap-space-mini xl:gap-space mx-auto max-w-[1280px] lg:font-22 font-normal`}>
          {(data.benefitsRight ? [data.benefitsLeft, data.benefitsRight] : [data.benefitsLeft]).map((col, ci) => (
            <ul
              key={ci}
              className="[&>li]:flex [&>li]:items-center [&>li]:gap-[1.2em] [&>li]:pb-space-small [&>li]:mb-space-small [&>li]:border-b [&>li]:border-white/15 [&>li:last-child]:pb-0 [&>li:last-child]:mb-0 [&>li:last-child]:border-0"
            >
              {col.map((item, i) => (
                <li key={i}>
                  <img className="w-[2.4em] min-w-[2.4em] my-auto" src="/assets/icons/check-primary-icon.svg" alt="" />
                  {typeof item === "object" && item.title ? (
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="font-normal">{item.body}</p>
                    </div>
                  ) : (
                    <p className="font-normal">{item}</p>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
        {data.textContent && (
          <div className="mx-auto max-w-5xl text-center mt-10 space-y-4">
            {(Array.isArray(data.textContent) ? data.textContent : [data.textContent]).map((p, i) => (
              <p key={i}>{Array.isArray(p) ? renderParts(p) : p}</p>
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
