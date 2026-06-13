export default function ServicesDevelopmentSection({ data }) {
  const textBox = (
    <div className="text-box mt-auto space-y-4 xl:space-y-6 leading-relaxed">
      {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      <div className="btn-wrap pt-2">
        <a href={data.ctaHref} className="btn btn-primary">
          {data.ctaLabel}
          {data.btnArrow && (
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
              <path d={data.btnArrow} />
            </svg>
          )}
        </a>
      </div>
    </div>
  );
  const figure = (
    <figure>
      <img src={data.image} alt={data.imageAlt} />
    </figure>
  );

  return (
    <section className="services-development full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-mini xl:gap-space xl:px-5">
          {data.imagePosition === "right" ? <>{textBox}{figure}</> : <>{figure}{textBox}</>}
        </div>
      </div>
    </section>
  );
}
