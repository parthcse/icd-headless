import { Fragment } from "react";
import ServiceCtaButton from "@/components/services/ServiceCtaButton";

// Same inline link/bold parts the other sections support, so a table section can
// carry its own intro paragraph instead of needing a separate text section above it.
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

export default function ServicesTableBasic({ data }) {
  const boldColumns = data.boldColumns || [0];
  return (
    <section className="services-basic-table full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp text-center">
          {data.eyebrow && <h3 className="font-48">{data.eyebrow}</h3>}
          {data.title && <h2 className="main-title pb-2">{data.title}</h2>}
          {Array.isArray(data.subtitle)
            ? data.subtitle.map((p, i) => (
                <p key={i} className="mx-auto max-w-5xl">{Array.isArray(p) ? renderParts(p) : p}</p>
              ))
            : data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
        </div>

        <div className="table-data-content overflow-x-auto">
          <table className={`w-full border border-primary text-center${data.colWidths ? " xl:table-fixed" : ""}`}>
            {data.colWidths && (
              <colgroup>
                {data.colWidths.map((w, i) => <col key={i} style={{ width: w }} />)}
              </colgroup>
            )}
            <thead>
              <tr className={`bg-primary font-22${data.colWidths ? "" : " text-nowrap"}`}>
                {data.columns.map((col, i) => (
                  <th
                    key={i}
                    className={`p-4 xl:px-6 xl:py-5 font-semibold${i < data.columns.length - 1 ? " border-r border-black/50" : ""}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i} className={i % 2 !== 0 ? "bg-black-light" : ""}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`p-4 xl:px-6 xl:py-5${data.contentAlign === "left" ? " text-left" : ""}${boldColumns.includes(j) ? " font-semibold" : ""}${j < row.length - 1 ? " border-r border-primary" : ""}`}
                    >
                      {typeof cell === "string" ? (
                        cell
                      ) : (
                        <>
                          <span className="text-primary font-bold">{cell.icon === "cross" ? "✗" : "✓"}</span>{" "}
                          <span className="font-semibold">{cell.title}</span>
                          <br />
                          {cell.desc}
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.note && <p className="mx-auto mt-6 max-w-5xl text-center leading-relaxed text-white/70">{data.note}</p>}
        {data.ctaLabel && (
          <div className="btn-wrap pt-space-mini text-center animate fadeUp">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} />
          </div>
        )}
      </div>
    </section>
  );
}
