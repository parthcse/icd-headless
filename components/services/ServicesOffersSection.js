function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <a key={i} href={part.href} className="text-primary font-semibold">{part.text}</a>
    )
  );
}

export default function ServicesOffersSection({ data }) {
  return (
    <section className="services-offers full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {data.subtitle && <p className={`mx-auto ${data.subtitleClass || "max-w-4xl"}`}>{data.subtitle}</p>}
        </div>
        <div className={`grid ${data.gridClass || "sm:grid-cols-2 lg:grid-cols-4"} text-center gap-6 leading-relaxed`}>
          {data.items.map((item, i) => (
            <div key={i} className="bg-black-light py-8 px-6">
              <img className="mx-auto max-w-20 mb-6" src={item.icon} alt="" />
              <h3 className="font-semibold font-22">{item.title}</h3>
              {Array.isArray(item.body)
                ? item.body.map((p, j) => <p key={j}>{Array.isArray(p) ? renderParts(p) : p}</p>)
                : <p>{item.body}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
