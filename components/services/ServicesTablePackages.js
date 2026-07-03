import ServiceCtaButton from "@/components/services/ServiceCtaButton";

export default function ServicesTablePackages({ data }) {
  // One grid row per feature so every column's cells share the same row height
  // (via subgrid); shorter columns still render bordered filler cells.
  const rowCount = Math.max(...data.plans.map((p) => p.features.length));
  const totalRows = rowCount + 1; // header + feature rows

  return (
    <section className="services-table-packages full-section">
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

        {data.ctaLabel && (
          <div className="text-center pt-space-small">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} className="btn btn-primary" />
          </div>
        )}
      </div>
    </section>
  );
}
