import SectionHeading from "./SectionHeading";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-green-500" fill="currentColor" aria-hidden="true">
      <path d="M8 13.2 4.6 9.8l-1.4 1.4L8 16l8.8-8.8-1.4-1.4z" />
    </svg>
  );
}
function Cross() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-white/30" fill="currentColor" aria-hidden="true">
      <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15 10 11.4 13.6 15 15 13.6 11.4 10z" />
    </svg>
  );
}

/**
 * "X vs Y" comparison table. Cells are strings, or {icon:"check"|"cross", title}
 * to render an icon + label. The last column is highlighted as "ours". Dark theme.
 */
export default function CompareTable({ eyebrow, title, columns = [], rows = [] }) {
  const last = columns.length - 1;
  const cell = (c) =>
    c && typeof c === "object" ? (
      <span className="inline-flex items-center justify-center gap-1.5 font-semibold text-white">
        {c.icon === "cross" ? <Cross /> : <Check />} {c.title}
      </span>
    ) : (
      c
    );
  return (
    <section className="full-section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-white/10 animate fadeUp">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="bg-black-light">
                  {columns.map((c, i) => (
                    <th key={i} className={`px-5 py-4 font-semibold ${i === 0 ? "" : "text-center"} ${i === last ? "bg-primary/10 text-primary" : ""}`}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, r) => (
                  <tr key={r} className="border-t border-white/10">
                    {row.map((c, i) => (
                      <td key={i} className={`px-5 py-4 align-middle ${i === 0 ? "font-semibold" : "text-center"} ${i === 1 ? "text-muted" : ""} ${i === last ? "bg-primary/[0.04]" : ""}`}>
                        {cell(c)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
