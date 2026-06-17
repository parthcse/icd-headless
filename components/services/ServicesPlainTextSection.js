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

export default function ServicesPlainTextSection({ data }) {
  return (
    <section className="common-text-box full-section">
      <div className="container">
        <div className="heading-wrap pb-1 animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        <div
          className={`space-y-4 animate fadeUp${
            data.contentAlign === "center"
              ? " text-center max-w-5xl mx-auto"
              : data.contentAlign === "left"
              ? " w-full text-left"
              : data.contentAlign === "left-4xl"
              ? " w-full text-left max-w-4xl mx-auto"
              : ""
          }`}
        >
          {data.blocks
            ? data.blocks.map((block, i) =>
                block.type === "ul" ? (
                  <ul key={i} className="list-disc pl-5 space-y-1">
                    {block.items.map((item, j) => (
                      <li key={j}>
                        {typeof item === "string" ? item : <><strong>{item.title}:</strong> {item.body}</>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{Array.isArray(block.parts) ? renderParts(block.parts) : block.text}</p>
                )
              )
            : (
              <>
                {data.paragraphs.map((p, i) => <p key={i}>{Array.isArray(p) ? renderParts(p) : p}</p>)}
                {data.listItems && (
                  <ul className="list-disc pl-5 space-y-1">
                    {data.listItems.map((item, i) => (
                      <li key={i}>
                        {typeof item === "string" ? item : <><strong>{item.title}:</strong> {item.body}</>}
                      </li>
                    ))}
                  </ul>
                )}
                {data.outro && <p>{Array.isArray(data.outro) ? renderParts(data.outro) : data.outro}</p>}
              </>
            )
          }
        </div>
        {data.ctaLabel && (
          <div className="btn-wrap text-center pt-space-small">
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
