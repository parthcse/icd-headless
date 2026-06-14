export default function ServicesPartnerSection({ data }) {
  const isShaded = data.variant === "shaded";
  const subtitleClass = data.subtitleClass
    ? `mx-auto ${data.subtitleClass}`
    : data.headingWrapClass
    ? undefined
    : "mx-auto max-w-3xl";
  return (
    <section className="services-partner full-section">
      <div className="container">
        <div className={`heading-wrap${data.headingWrapClass ? ` ${data.headingWrapClass}` : ""} animate fadeUp`}>
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {Array.isArray(data.subtitle)
            ? data.subtitle.map((p, i) => <p key={i} className={subtitleClass}>{p}</p>)
            : <p className={subtitleClass}>{data.subtitle}</p>}
        </div>
        <div className={`grid ${data.gridClass || `sm:grid-cols-2 ${isShaded ? "lg:grid-cols-3" : "lg:grid-cols-4"}`} text-center gap-6 leading-relaxed small`}>
          {data.items.map((item, i) => (
            <div key={i} className={isShaded ? "bg-black-light p-8" : "border border-white/15 p-8"}>
              <h3 className="font-semibold font-22">{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
