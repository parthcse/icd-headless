function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <a key={i} href={part.href} className="text-primary font-semibold">{part.text}</a>
    )
  );
}

export default function ServicesTextBoxSection({ data }) {
  return (
    <section className="common-text-box full-section">
      <div className="container">
        <div className="heading-wrap pb-1 animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        <div
          className={`space-y-4 animate fadeUp${
            data.contentAlign === "center"
              ? " text-center max-w-5xl mx-auto"
              : data.contentAlign === "left"
              ? " w-full text-left"
              : ""
          }`}
        >
          {data.paragraphs.map((p, i) => <p key={i}>{Array.isArray(p) ? renderParts(p) : p}</p>)}
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
