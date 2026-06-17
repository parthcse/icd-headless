export default function ServicesSupportPlansTable({ data }) {
  return (
    <section className="full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title">{data.title}</h2>
        </div>
        {data.subtitle && (
          <p className="text-center max-w-4xl mx-auto mb-8 xl:mb-12">{data.subtitle}</p>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.plans.map((plan, i) => (
            <div key={i} className="border border-primary">
              <div className="bg-primary py-4 px-6 xl:py-6 xl:px-8 text-center">
                <h3 className="font-22 font-semibold mb-0">{plan.name}</h3>
              </div>
              <div className="p-6 xl:p-8 space-y-4 xl:space-y-6">
                <p>{plan.body}</p>
                {plan.checklistItems && (
                  <ul className="space-y-2 font-semibold">
                    {plan.checklistItems.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <img className="w-[1em]" src="/assets/icons/check-primary-icon.svg" alt="" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {plan.ctaLabel && (
                  <div className="btn-wrap">
                    <a href={plan.ctaHref || "#"} className="btn btn-primary">
                      {plan.ctaLabel} ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
