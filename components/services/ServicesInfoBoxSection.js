import { Fragment } from 'react';

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <a key={i} href={part.href} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

export default function ServicesInfoBoxSection({ data }) {
  const isShaded = data.variant !== "noshade";
  const subtitleClass = data.subtitleClass
    ? `mx-auto ${data.subtitleClass}`
    : data.headingWrapClass
    ? undefined
    : "mx-auto max-w-4xl";
  return (
    <section className="services-partner full-section">
      <div className="container">
        <div className={`heading-wrap${data.headingWrapClass ? ` ${data.headingWrapClass}` : ""} animate fadeUp`}>
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {Array.isArray(data.subtitle)
            ? data.subtitle.map((p, i) => <p key={i} className={subtitleClass}>{p}</p>)
            : <p className={subtitleClass}>{data.subtitle}</p>}
        </div>
        <div className={`grid ${data.gridClass || `sm:grid-cols-2 ${data.columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`} ${data.textAlign === "left" ? "text-left" : "text-center"} gap-6 leading-relaxed small`}>
          {data.items.map((item, i) => (
            <div key={i} className={isShaded ? "bg-black-light p-8" : "border border-white/15 p-8"}>
              <h3 className="font-semibold font-22">{item.title}</h3>
              {item.body && <p>{Array.isArray(item.body) ? renderParts(item.body) : item.body}</p>}
              {item.bodyList && (
                <ul className="list-disc pl-5 space-y-1 text-left">
                  {item.bodyList.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
              )}
              {item.bodyAfter && <p>{item.bodyAfter}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
