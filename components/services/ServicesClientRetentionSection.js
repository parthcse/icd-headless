export default function ServicesClientRetentionSection({ data }) {
  return (
    <section className="services-client-retention full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-mini xl:gap-space xl:px-5">
          <figure>
            <img src={data.image} alt={data.imageAlt} />
          </figure>
          <div className="text-box mt-auto space-y-4 xl:space-y-6 leading-relaxed">
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
          </div>
        </div>
      </div>
    </section>
  );
}
