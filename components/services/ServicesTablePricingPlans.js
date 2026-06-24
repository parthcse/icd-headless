// Feature-comparison pricing built with the same column-card design as
// ServicesTablePackages: a "Feature" column followed by one card per plan, each
// with a bg-primary header and a bordered list. Subgrid keeps every column's
// rows (and the header) the same height, and shorter columns still render
// bordered filler cells. Columns keep equal width with horizontal scroll on
// small screens.
export default function ServicesTablePricingPlans({ data }) {
  const featureCol = data.featureLabel || "Feature";
  const columns = [{ name: featureCol, values: data.features }, ...data.plans];
  const rowCount = data.features.length;
  const hasCta = data.plans.some((p) => p.ctaLabel);
  const totalRows = rowCount + 1 + (hasCta ? 1 : 0); // header + feature rows + cta row

  return (
    <section className="services-table-pricing-plans full-section">
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
              gridTemplateColumns: `repeat(${columns.length}, minmax(240px, 1fr))`,
              gridTemplateRows: `auto repeat(${rowCount}, auto)${hasCta ? " auto" : ""}`,
            }}
          >
            {columns.map((col, i) => (
              <div
                key={i}
                className="grid border border-primary"
                style={{ gridColumn: i + 1, gridRow: `1 / span ${totalRows}`, gridTemplateRows: "subgrid" }}
              >
                <div className="bg-primary flex flex-col items-center justify-center py-4 px-6 xl:py-6 xl:px-8 text-center">
                  <h3 className="font-22 font-semibold mb-0">{col.name}</h3>
                  {col.price && (
                    <p className="font-30 font-bold mb-0">
                      ${col.price}
                      <span className="font-22 font-normal">/{col.period || "month"}</span>
                    </p>
                  )}
                </div>
                {Array.from({ length: rowCount }).map((_, j) => (
                  <div
                    key={j}
                    className={`flex items-center justify-center text-center px-4 xl:px-6 py-4 xl:py-5 border-b border-white/25${
                      i === 0 ? " font-semibold" : ""
                    }${j === 0 ? " font-24" : ""}`}
                  >
                    {col.values[j]}
                  </div>
                ))}
                {hasCta && (
                  <div className="flex items-center justify-center text-center px-4 xl:px-6 py-4 xl:py-5">
                    {col.ctaLabel && (
                      <a href={col.ctaHref || "#"} className="btn btn-primary">
                        {col.ctaLabel}
                        {data.btnArrow && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                            <path d={data.btnArrow} />
                          </svg>
                        )}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
