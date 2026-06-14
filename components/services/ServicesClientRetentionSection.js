export default function ServicesClientRetentionSection({ data }) {
  return (
    <section className="services-client-retention full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-mini xl:gap-space xl:px-5 items-center">
          <figure className={data.imagePosition === "right" ? "lg:order-2" : undefined}>
            <img src={data.image} alt={data.imageAlt} />
          </figure>
          <div className={`text-box space-y-4 xl:space-y-6 leading-relaxed${data.imagePosition === "right" ? " lg:order-1" : ""}`}>
            {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <ul className="space-y-3 font-semibold">
              {data.checklistItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <img src="/images/check-primary-icon.svg" alt="" />
                  {item}
                </li>
              ))}
            </ul>
            {data.outro && <p>{data.outro}</p>}
            {data.ctaLabel && (
              <div className="btn-wrap pt-2">
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
        </div>
      </div>
    </section>
  );
}
