import { Fragment } from 'react';
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

export default function ServicesPlainTextSection({ data }) {
  return (
    <section className="services-plain-text full-section">
      <div className="container">
        {(data.eyebrow || data.title) && (
          <div className="heading-wrap pb-2 animate fadeUp">
            {data.eyebrow && <h3 className="font-48">{data.eyebrow}</h3>}
            {data.title && <h2 className="main-title">{data.title}</h2>}
          </div>
        )}
        <div
          className={`space-y-4 mt-4 animate fadeUp${
            data.contentAlign === "left"
              ? " w-full text-left"
              : " text-center max-w-5xl mx-auto"
          }`}
        >
          {data.blocks
            ? data.blocks.map((block, i) =>
                block.type === "ul" ? (
                  <ul key={i} className="list-disc pl-5 space-y-1">
                    {block.items.map((item, j) => (
                      <li key={j}>
                        {Array.isArray(item) ? renderParts(item) : typeof item === "string" ? item : <><strong>{item.title}:</strong> {item.body}</>}
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
                        {Array.isArray(item) ? renderParts(item) : typeof item === "string" ? item : <><strong>{item.title}:</strong> {item.body}</>}
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
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} />
          </div>
        )}
      </div>
    </section>
  );
}
