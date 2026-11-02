import { Fragment } from "react";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

import ServiceCtaButton from "@/components/services/ServiceCtaButton";
import { linkAttrs } from "@/lib/link-attrs";
function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold">{part.bold}</strong>
    ) : (
      <a key={i} href={part.href} {...linkAttrs(part.href)} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

export default function ServicesCheckListSection({ data }) {
  // Columns: `benefits` (single array) + `columns` (2|3|4) auto-splits into N
  // even columns; otherwise the classic benefitsLeft/benefitsRight (1 or 2).
  //
  // `iconSize: "small"` is for lists of short one-line labels (an industries
  // list, say). The default row spacing is tuned for sentence-length benefits,
  // so thirty short items run to an absurd height; small shrinks the tick and
  // the row rhythm and drops the larger desktop type.
  const cols = data.columns || (data.benefitsRight ? 2 : 1);
  const small = data.iconSize === "small";
  const columnLists = data.benefits
    ? Array.from({ length: cols }, (_, i) => {
        const per = Math.ceil(data.benefits.length / cols);
        return data.benefits.slice(i * per, (i + 1) * per);
      })
    : data.benefitsRight
    ? [data.benefitsLeft, data.benefitsRight]
    : [data.benefitsLeft];
  const gridCols =
    cols >= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 3
      ? "md:grid-cols-3"
      : cols === 2
      ? "md:grid-cols-2"
      : "";
  const gridGap = small ? "gap-space-small" : "gap-space-mini xl:gap-space";
  const rowRhythm = small
    ? "[&>li]:items-center [&>li]:gap-[0.9em] [&>li]:pb-4 [&>li]:mb-4"
    : "[&>li]:items-start [&>li]:gap-[1.2em] [&>li]:pb-space-small [&>li]:mb-space-small";
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
        <div className={`grid grid-cols-1 ${gridCols} ${gridGap} mx-auto max-w-[1280px] font-normal${small ? " text-lg" : " lg:font-22"}`}>
          {columnLists.map((col, ci) => (
            <ul
              key={ci}
              className={`[&>li]:flex ${rowRhythm} [&>li]:border-b [&>li]:border-white/15 [&>li:last-child]:pb-0 [&>li:last-child]:mb-0 [&>li:last-child]:border-0`}
            >
              {col.map((item, i) => (
                <li key={i}>
                  <CheckPrimaryIcon
                    className={`shrink-0 ${small ? "w-[1.5em] min-w-[1.5em]" : "w-[2.4em] min-w-[2.4em]"}`}
                  />
                  {typeof item === "object" && item.title ? (
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="font-normal">{item.body}</p>
                    </div>
                  ) : (
                    <p className={small ? "font-medium" : "font-normal"}>
                      {Array.isArray(item) ? renderParts(item) : item}
                    </p>
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
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} className="btn btn-primary" />
          </div>
        )}
      </div>
    </section>
  );
}
