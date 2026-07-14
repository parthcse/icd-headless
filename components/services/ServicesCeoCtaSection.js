import ServiceCtaButton from "@/components/services/ServiceCtaButton";

export default function ServicesCeoCtaSection({ data }) {
  return (
    <section className="services-ceo-cta full-section text-center md:text-left pb-0 font-30 md:pt-0">
      <div className="container flex gap-space-small xl:gap-space flex-col md:flex-row-reverse items-center mt-0 md:-mt-12 xl:-mt-20">
        <div className="seo-say grid gap-[0.81em] xl:pt-20">
          <p>{data.text}</p>
          <div className="btn-wrap">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} className="btn btn-primary whitespace-normal" />
          </div>
        </div>
        <div className="seo-images md:w-[60%] xl:w-[45%]">
          {/* loading=lazy + fetchPriority=low so React 19 doesn't emit a <link rel=preload>
              for this below-the-fold image (avoids the "preloaded but not used" console warning). */}
          <img src={data.image} alt={data.imageAlt} loading="lazy" fetchPriority="low" decoding="async" />
        </div>
      </div>
    </section>
  );
}
