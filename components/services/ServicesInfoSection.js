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

/** A single bullet — plain string, inline-link parts array, or a bold lead-in `{ title, text }`. */
function renderBullet(li, k) {
  if (typeof li === "string") return <li key={k}>{li}</li>;
  if (Array.isArray(li)) return <li key={k}>{renderParts(li)}</li>;
  return (
    <li key={k}>
      <strong>{li.title}</strong>
      {li.text ? <> {li.text}</> : null}
    </li>
  );
}

/**
 * Table block inside an information card — same visual design as ServicesTableBasic
 * (orange header row, alternating dark rows, primary-bordered cells).
 */
function InfoTable({ columns, rows }) {
  return (
    <div className="table-data-content overflow-x-auto">
      <table className="w-full table-fixed border border-primary text-center">
        <thead>
          <tr className="bg-primary font-22">
            {columns.map((col, i) => (
              <th
                key={i}
                className={`p-4 xl:px-6 xl:py-5 font-semibold${i < columns.length - 1 ? " border-r border-black/50" : ""}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 !== 0 ? "bg-black" : ""}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`p-4 xl:px-6 xl:py-5 align-middle${j < row.length - 1 ? " border-r border-primary" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ServicesInfoSection({ data }) {
  const isCenter = data.textAlign === "center";
  return (
    <section className="services-information full-section">
      <div className="container">
        <div className={`heading-wrap animate fadeUp${isCenter ? " text-center" : ""}`}>
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title">{data.title}</h2>
        </div>
        <div className="grid gap-4 leading-relaxed">
          {data.cards.map((card, i) => (
            <div key={i} className={`bg-black-light space-y-3 p-6 lg:p-8${isCenter ? " text-center" : ""}`}>
              {card.title && <h3 className="font-semibold font-22">{card.title}</h3>}
              {card.blocks
                ? card.blocks.map((block, j) =>
                    block.type === "table" ? (
                      <InfoTable key={j} columns={block.columns} rows={block.rows} />
                    ) : block.type === "ul" ? (
                      <ul key={j} className="list-disc pl-5 space-y-1">
                        {block.items.map((li, k) => renderBullet(li, k))}
                      </ul>
                    ) : (
                      <p key={j}>{Array.isArray(block.parts) ? renderParts(block.parts) : block.text}</p>
                    )
                  )
                : (
                  <>
                    {card.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
                    {card.listItems && (
                      <ul className="list-disc pl-5 space-y-3">
                        {card.listItems.map((item, j) => (
                          <li key={j}>
                            {item.title && <><strong>{item.title}</strong><br /></>}
                            {renderParts(item.parts)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
            </div>
          ))}
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
