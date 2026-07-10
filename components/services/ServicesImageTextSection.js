import { Fragment } from "react";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

import ServiceCtaButton from "@/components/services/ServiceCtaButton";
function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold">{part.bold}</strong>
    ) : (
      <a key={i} href={part.href} {...(/^https?:\/\//.test(part.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

function renderParagraph(content, i, className) {
  if (!Array.isArray(content)) return <p key={i} className={className}>{content}</p>;
  return (
    <p key={i} className={className}>
      {content.map((part, j) =>
        typeof part === "string" ? (
          <Fragment key={j}>{part}</Fragment>
        ) : part.bold ? (
          <strong key={j} className="font-semibold">{part.bold}</strong>
        ) : (
          <a key={j} href={part.href} {...(/^https?:\/\//.test(part.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-primary font-semibold inline underline">{part.text}</a>
        )
      )}
    </p>
  );
}

export default function ServicesImageTextSection({ data }) {
  return (
    <section className="services-image-text full-section">
      <div className="container">
        {(data.eyebrow || data.title || data.subtitle || data.subtitles) && (
          <div className="heading-wrap animate fadeUp">
            <h3 className="font-48">{data.eyebrow}</h3>
            <h2 className="main-title pb-2">{data.title}</h2>
            {data.subtitles
              ? data.subtitles.map((p, i) => (
                  <p key={i} className="mx-auto max-w-5xl">{Array.isArray(p) ? renderParts(p) : p}</p>
                ))
              : data.subtitle && <p className="mx-auto max-w-5xl">{Array.isArray(data.subtitle) ? renderParts(data.subtitle) : data.subtitle}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-mini xl:gap-space items-center">
          <figure className={data.imagePosition === "right" ? "lg:order-2" : undefined}>
            {data.video ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={data.video}
                  title={data.imageAlt || data.title || "Video"}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img src={data.image} alt={data.imageAlt} />
            )}
          </figure>
          <div className={`text-box space-y-4 xl:space-y-6 leading-relaxed${data.imagePosition === "right" ? " lg:order-1" : ""}`}>
            {data.contentTitle && <h2 className="font-bold text-3xl leading-snug">{data.contentTitle}</h2>}
            {data.blocks
              ? data.blocks.map((block, i) =>
                  block.type === "ul" ? (
                    <ul key={i} className="list-disc pl-5 space-y-1">
                      {block.items.map((item, j) => <li key={j}>{Array.isArray(item) ? renderParts(item) : item}</li>)}
                    </ul>
                  ) : block.type === "checklist" ? (
                    <ul key={i} className="space-y-3 font-semibold">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckPrimaryIcon className="w-[1.2em] mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    renderParagraph(block.text, i, block.strong ? "font-semibold" : undefined)
                  )
                )
              : (
                <>
                  {data.paragraphs.map((p, i) => renderParagraph(p, i))}
                  {data.checklistItems?.length > 0 && (
                    <ul className="space-y-3 font-semibold">
                      {data.checklistItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckPrimaryIcon className="w-[1.2em] mt-1 shrink-0" />
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
                <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} className="btn btn-primary" />
              </div>
            )}
          </div>
        </div>
        {data.footerParagraphs?.length > 0 && (
          <div className="leading-relaxed mt-10">
            {data.footerParagraphs.map((p, i) => renderParagraph(p, i))}
          </div>
        )}
        {data.infoBoxes?.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center small leading-relaxed mt-10">
            {data.infoBoxes.map((box, i) => (
              <div key={i} className="bg-black-light p-8">
                <h3 className="font-semibold font-22">{box.title}</h3>
                <p>{Array.isArray(box.body) ? renderParts(box.body) : box.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
