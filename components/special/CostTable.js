import renderParts from "./renderParts";
import SectionHeading from "./SectionHeading";

/**
 * Monthly running-cost table: kicker + title, an intro line, a highlighted
 * "pay as you grow" callout, then a 3-column table whose last row (total) is
 * emphasised. Optional footnote. Dark theme.
 *
 * Props: { eyebrow?, title?, intro?, callout?: string|parts[], columns, rows, footnote? }
 */
export default function CostTable({ eyebrow, title, intro, callout, columns = [], rows = [], footnote }) {
  const lastRow = rows.length - 1;
  return (
    <section className="special-cost-table full-section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mx-auto max-w-4xl animate fadeUp">
          {intro && <p className="mb-5 text-center text-muted">{intro}</p>}
          {callout && (
            <div className="mb-6 rounded-xl border border-primary/30 bg-primary/[0.05] p-5 text-center leading-relaxed">
              {Array.isArray(callout) ? renderParts(callout) : callout}
            </div>
          )}
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left">
                <thead>
                  <tr className="bg-black-light">
                    {columns.map((c, i) => (
                      <th key={i} className={`px-5 py-4 font-semibold ${i === 1 ? "text-center" : ""}`}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, r) => {
                    // The final row is the "Estimated total" — lift it out of the body
                    // with a tinted band, an orange top rule and a bigger price so it
                    // reads as the summary rather than just another line item.
                    const isTotal = r === lastRow;
                    return (
                      <tr
                        key={r}
                        className={
                          isTotal
                            ? "border-t-2 border-primary/50 bg-primary/[0.07] text-white"
                            : "border-t border-white/10"
                        }
                      >
                        {row.map((c, i) => (
                          <td
                            key={i}
                            className={[
                              "px-5 align-top",
                              isTotal ? "py-5" : "py-4",
                              i === 0 ? "font-semibold" : "",
                              i === 0 && isTotal ? "font-22 whitespace-nowrap" : "",
                              i === 1 ? "whitespace-nowrap text-center text-primary" : "",
                              i === 1 && isTotal ? "font-24" : "",
                              i === 2 && !isTotal ? "text-muted" : "",
                              i === 2 && isTotal ? "text-white/80" : "",
                            ].join(" ")}
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {footnote && <p className="mt-4 text-sm text-muted">{footnote}</p>}
        </div>
      </div>
    </section>
  );
}
