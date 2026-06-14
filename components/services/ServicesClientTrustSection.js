function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <a key={i} href={part.href} className="text-primary font-semibold">{part.text}</a>
    )
  );
}

export default function ServicesClientTrustSection({ data }) {
  return (
    <section className="services-client-trust full-section">
      <div className="container">
        <div className="heading-wrap mx-auto max-w-4xl animate fadeUp start">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {data.subtitles ? (
            data.subtitles.map((p, i) => <p key={i}>{p}</p>)
          ) : data.subtitle ? (
            <p>
              {data.subtitle}
              {data.subtitleLink && (
                <a href={data.subtitleLink.href || "#"} className="text-primary font-semibold">
                  {data.subtitleLink.text}
                </a>
              )}
              {data.subtitleSuffix}
            </p>
          ) : null}
        </div>
        <div className={`grid sm:grid-cols-2 ${data.gridCols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} text-center gap-6 leading-relaxed`}>
          {data.items.map((item, i) => (
            <div key={i} className="bg-black-light py-space-small px-4 md:px-6 xl:px-8">
              <img className="mx-auto max-w-20 mb-6" src={item.icon} alt="" />
              <h3 className="font-semibold font-22">{item.name}</h3>
              <p>{Array.isArray(item.body) ? renderParts(item.body) : item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
