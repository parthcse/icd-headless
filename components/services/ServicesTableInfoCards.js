import { Fragment } from "react";

import ServiceCtaButton from "@/components/services/ServiceCtaButton";
import { linkAttrs } from "@/lib/link-attrs";

// Same inline link/bold parts the other sections support, so the note under
// the table can carry links without a separate text section.
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

export default function ServicesTableInfoCards({ data }) {
  // One grid row per feature so every column's cells share the same row height
  // (via subgrid); shorter columns still render bordered filler cells. The
  // table has no row-label column by design — every row is plain cell text.
  const rowCount = Math.max(...data.plans.map((p) => p.features.length));
  const totalRows = rowCount + 1; // header + feature rows

  return (
    <section className="services-table-info-cards full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title">{data.title}</h2>
          {data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
        </div>

        <div className="overflow-x-auto">
          <div
            className="grid gap-x-2 small"
            style={{
              gridTemplateColumns: `repeat(${data.plans.length}, minmax(240px, 1fr))`,
              gridTemplateRows: `auto repeat(${rowCount}, auto)`,
            }}
          >
            {data.plans.map((plan, i) => (
              <div
                key={i}
                className="grid border border-primary"
                style={{ gridColumn: i + 1, gridRow: `1 / span ${totalRows}`, gridTemplateRows: "subgrid" }}
              >
                <div className="bg-primary flex flex-col items-center justify-center py-4 px-6 xl:py-6 xl:px-8 text-center">
                  <h3 className="font-22 font-semibold mb-0">{plan.name}</h3>
                  {/* Caption naming what the first body row holds, e.g. "(Best for)". */}
                  {data.firstRowLabel && (
                    <p className="text-sm font-normal mb-0 mt-1">({data.firstRowLabel})</p>
                  )}
                </div>
                {Array.from({ length: rowCount }).map((_, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center text-center px-4 xl:px-6 py-4 xl:py-5 border-b border-white/25"
                  >
                    {plan.features[j]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {data.note && (
          <p className="mx-auto mt-6 max-w-4xl text-center leading-relaxed">
            {Array.isArray(data.note) ? renderParts(data.note) : data.note}
          </p>
        )}

        {data.ctaLabel && (
          <div className="text-center pt-space-small">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} className="btn btn-primary" />
          </div>
        )}
      </div>
    </section>
  );
}
