import FaqAccordion from "@/components/common/FaqAccordion";

/**
 * FAQ section. Service pages pass `eyebrow` + `title` (big "main-title"
 * style); pass `label` instead for a small orange uppercase label + a font-48
 * H2 (single case-study page style).
 */
export default function ServicesFaqSection({ data }) {
  return (
    <section className="services-faq full-section">
      <div className="container">
        {(data.label || data.eyebrow || data.title || data.subtitle) && (
          <div className="heading-wrap animate fadeUp">
            {data.label ? (
              <>
                <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">{data.label}</p>
                <h2 className="mx-auto mb-0 max-w-5xl font-48 font-semibold leading-tight">{data.title}</h2>
              </>
            ) : (
              <>
                <h3 className="font-48">{data.eyebrow}</h3>
                <h2 className="main-title pb-2">{data.title}</h2>
              </>
            )}
            {data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
          </div>
        )}
        <FaqAccordion items={data.items} />
      </div>
    </section>
  );
}
