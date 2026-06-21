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

export default function ServicesTopIconBoxSection({ data }) {
  return (
    <section className="services-top-icon-box full-section">
      <div className="container">
        <div className="heading-wrap mx-auto max-w-5xl animate fadeUp start">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {data.subtitles ? (
            data.subtitles.map((p, i) => (
              <p key={i}>{Array.isArray(p) ? renderParts(p) : p}</p>
            ))
          ) : data.subtitle ? (
            <p>{data.subtitle}</p>
          ) : null}
        </div>
        <div className={`grid sm:grid-cols-2 ${data.columns === 4 ? "lg:grid-cols-4" : data.columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"} ${data.textAlign === "left" ? "text-left" : "text-center"} gap-6 leading-relaxed`}>
          {data.items.map((item, i) => (
            <div key={i} className="bg-black-light py-space-small px-4 md:px-6 xl:px-8">
              {item.icon && <img className="max-w-20 mb-6 mx-auto" src={item.icon} alt="" />}
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
        {data.footerNote && (
          <p className="text-center max-w-4xl mx-auto mt-10 leading-relaxed">{data.footerNote}</p>
        )}
      </div>
    </section>
  );
}
