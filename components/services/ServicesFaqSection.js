import FaqAccordion from "@/components/common/FaqAccordion";

export default function ServicesFaqSection({ data }) {
  return (
    <section className="services-faq full-section">
      <div className="container">
        {(data.eyebrow || data.title || data.subtitle) && (
          <div className="heading-wrap animate fadeUp">
            <h3 className="font-48">{data.eyebrow}</h3>
            <h2 className="main-title pb-2">{data.title}</h2>
            {data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
          </div>
        )}
        <FaqAccordion items={data.items} />
      </div>
    </section>
  );
}
