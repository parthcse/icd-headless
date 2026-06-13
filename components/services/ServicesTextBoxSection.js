export default function ServicesTextBoxSection({ data }) {
  return (
    <section className="common-text-box full-section">
      <div className="container">
        <div className="heading-wrap pb-1 animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        <div className="space-y-4 animate fadeUp">
          {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          {data.listItems && (
            <ul className="list-disc pl-5 space-y-1">
              {data.listItems.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}:</strong> {item.body}
                </li>
              ))}
            </ul>
          )}
          {data.outro && <p>{data.outro}</p>}
        </div>
        {data.ctaLabel && (
          <div className="btn-wrap text-center pt-space-small">
            <a href={data.ctaHref || "#"} className="btn btn-primary">
              {data.ctaLabel}
              {data.btnArrow && (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
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
