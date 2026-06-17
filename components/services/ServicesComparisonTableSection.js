/**
 * Generic comparison table — reuses the visual design of the WordPress
 * Development Pricing table (ServicesWpPricingSection): primary header row,
 * alternating shaded body rows, primary cell borders.
 *
 * Unlike the pricing table (fixed type/bestFor/features/investment fields),
 * this renders arbitrary `columns` with `rows` as arrays of cells, so it can
 * back any "X vs Y" comparison (e.g. AEO vs SEO: Key Differences).
 *
 * `data.boldColumns` (default [0]) marks which cell columns render semibold.
 */
export default function ServicesComparisonTableSection({ data }) {
  const boldColumns = data.boldColumns || [0];
  return (
    <section className="services-comparison-table full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp text-center">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {data.subtitle && <p className="mx-auto max-w-4xl">{data.subtitle}</p>}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-primary text-center">
            <thead>
              <tr className="bg-primary font-22 text-nowrap">
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
                      className={`p-4 xl:px-6 xl:py-5${boldColumns.includes(j) ? " font-semibold" : ""}${j < row.length - 1 ? " border-r border-primary" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
