import { Fragment } from "react";

function renderParagraph(content, i) {
  if (!Array.isArray(content)) return <p key={i}>{content}</p>;
  return (
    <p key={i}>
      {content.map((part, j) =>
        typeof part === "string" ? (
          <Fragment key={j}>{part}</Fragment>
        ) : (
          <a key={j} href={part.href} className="text-primary font-semibold inline underline">{part.text}</a>
        )
      )}
    </p>
  );
}

export default function ServicesClientRetentionSection({ data }) {
  return (
    <section className="services-client-retention full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        {data.subtitle && <p className="text-center max-w-4xl mx-auto pb-10 leading-relaxed">{data.subtitle}</p>}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-mini xl:gap-space xl:px-5 items-center">
          <figure className={data.imagePosition === "right" ? "lg:order-2" : undefined}>
            <img src={data.image} alt={data.imageAlt} />
          </figure>
          <div className={`text-box space-y-4 xl:space-y-6 leading-relaxed${data.imagePosition === "right" ? " lg:order-1" : ""}`}>
            {data.blocks
              ? data.blocks.map((block, i) =>
                  block.type === "ul" ? (
                    <ul key={i} className="list-disc pl-5 space-y-1">
                      {block.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  ) : (
                    <p key={i}>{block.text}</p>
                  )
                )
              : (
                <>
                  {data.paragraphs.map((p, i) => renderParagraph(p, i))}
                  {data.checklistItems?.length > 0 && (
                    <ul className="space-y-3 font-semibold">
                      {data.checklistItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <img src="/assets/icons/check-primary-icon.svg" alt="" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )
            }
            {data.outro && <p>{data.outro}</p>}
            {data.ctaLabel && (
              <div className="btn-wrap pt-2">
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
        </div>
      </div>
    </section>
  );
}
