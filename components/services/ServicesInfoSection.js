import { Fragment } from 'react';

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <a key={i} href={part.href} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

export default function ServicesInfoSection({ data }) {
  return (
    <section className="services-information full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp start">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        <div className="grid gap-4 leading-relaxed">
          {data.cards.map((card, i) => (
            <div key={i} className="bg-black-light space-y-3 p-6 lg:p-8">
              <h3 className="font-semibold font-22">{card.title}</h3>
              {card.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
              {card.listItems && (
                <ul className="list-disc pl-5 space-y-3">
                  {card.listItems.map((item, j) => (
                    <li key={j}>
                      {item.title && <><strong>{item.title}</strong><br /></>}
                      {renderParts(item.parts)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
