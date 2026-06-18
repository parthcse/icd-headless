export default function ServicesTableSeoPackages({ data }) {
  return (
    <section className="services-table-seo-packages full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title">{data.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 small">
          {data.plans.map((plan, i) => (
            <div key={i} className="border border-primary">
              <div className="bg-primary py-4 px-6 xl:py-6 xl:px-8 text-center">
                <h3 className="font-22 font-semibold mb-0">{plan.name}</h3>
              </div>
              <div className="px-4 xl:px-6 py-3">
                <ul className="[&_li]:py-4 xl:[&_li]:py-5 [&_li]:border-b [&_li]:border-white/25 [&_li]:text-center [&_li:last-child]:border-b-0">
                  {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {data.ctaLabel && (
          <div className="text-center pt-space-small">
            <a href={data.ctaHref || "#"} className="btn btn-primary">
              {data.ctaLabel}
              {data.btnArrow && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                  <path d={data.btnArrow} />
                </svg>
              )}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
