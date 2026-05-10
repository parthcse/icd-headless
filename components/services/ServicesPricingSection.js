export default function ServicesPricingSection({ data }) {
  return (
    <section className="services-pricing full-section">
      <div className="container">
        <div className="heading-wrap xl:-mx-4 animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: data.note.replace(/Recurring Plans:/g, "<strong>Recurring Plans:</strong>").replace(/Buckets of Hours:/g, "<strong>Buckets of Hours:</strong>") }} />
        </div>
        <div className="grid gap-space-small sm:grid-cols-2 lg:grid-cols-4 text-center">
          {data.plans.map((plan, i) => (
            <div key={i} className="border border-primary py-space-small px-6">
              {plan.isBucket ? (
                <>
                  <div className="heading-box space-y-4">
                    <h3 className="font-36 font-semibold text-primary mb-0">{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <div className="text-box border-t border-white/15 -mx-1 pt-6 mt-6 space-y-3">
                    {plan.buckets.map((bucket, j) => (
                      <div key={j}>
                        <p><strong>{bucket.label}</strong></p>
                        <a href={bucket.ctaHref} className="btn btn-primary">
                          {bucket.ctaLabel}
                          {data.btnArrow && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                              <path d={data.btnArrow} />
                            </svg>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="heading-box space-y-4">
                    <h3 className="font-36 font-semibold mb-0">{plan.name}</h3>
                    <p>{plan.description}</p>
                    <a href={plan.ctaHref} className="btn btn-primary">
                      {plan.ctaLabel}
                      {data.btnArrow && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                          <path d={data.btnArrow} />
                        </svg>
                      )}
                    </a>
                    {plan.badge && <small className="block">{plan.badge}</small>}
                  </div>
                  <div className="text-box border-t border-white/15 -mx-1 pt-6 mt-6 space-y-3">
                    {plan.featureGroupTitle && <p><strong>{plan.featureGroupTitle}</strong></p>}
                    {plan.features.length > 0 && (
                      <ul className="text-sm text-left space-y-2">
                        {plan.features.map((f, j) => <li key={j}>• {f}</li>)}
                      </ul>
                    )}
                    {plan.altCtaLabel && (
                      <a href={plan.altCtaHref || "#"} className="btn btn-primary">
                        {plan.altCtaLabel}
                        {data.btnArrow && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                            <path d={data.btnArrow} />
                          </svg>
                        )}
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
