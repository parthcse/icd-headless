import ServiceCtaButton from "@/components/services/ServiceCtaButton";

// Feature-comparison pricing built with the same column-card design as
// ServicesTableInfoCards: a "Feature" column followed by one card per plan, each
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
  // Four columns fit the 75rem container at a 240px floor, but five (four plans
  // plus the feature column) need 1200px and spill into a horizontal scroll on
  // desktop. Past four columns the feature column keeps a wider track — its
  // labels are the long ones — while the plan columns take a lower floor.
  // `minColWidth` overrides the plan-column floor when a table needs more.
  const planMin = data.minColWidth ?? (columns.length > 4 ? 150 : 240);
  const gridTemplateColumns =
    columns.length > 4
      ? `minmax(260px, 1.6fr) repeat(${columns.length - 1}, minmax(${planMin}px, 1fr))`
      : `repeat(${columns.length}, minmax(${planMin}px, 1fr))`;

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
              gridTemplateColumns,
              gridTemplateRows: `auto repeat(${rowCount}, auto)${hasCta ? " auto" : ""}`,
            }}
          >
            {columns.map((col, i) => (
              <div
                key={i}
                className="grid min-w-0 border border-primary"
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
                    className={`flex min-w-0 items-center justify-center text-center px-4 xl:px-6 py-4 xl:py-5 border-b border-white/25${
                      i === 0 ? " font-semibold" : ""
                    }${j === 0 ? " font-24" : ""}`}
                    // Inline rather than a Tailwind class: public/css/output.css is
                    // prebuilt, so a new utility would need `npm run build:css` to
                    // exist. Keeps a long unbreakable label (e.g.
                    // "Maintenance/Support/Care") inside its column instead of
                    // spilling over the border into the next one.
                    style={{ overflowWrap: "anywhere" }}
                  >
                    {col.values[j]}
                  </div>
                ))}
                {hasCta && (
                  <div className="flex items-center justify-center text-center px-4 xl:px-6 py-4 xl:py-5">
                    {col.ctaLabel && (
                      <ServiceCtaButton href={col.ctaHref} label={col.ctaLabel} btnArrow={data.btnArrow} />
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
