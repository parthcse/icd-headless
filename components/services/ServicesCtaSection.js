import ServiceCtaButton from "@/components/services/ServiceCtaButton";

export default function ServicesCtaSection({ data }) {
  return (
    <section className="services-cta bg-black-light font-30 font-semibold py-space-mini">
      <div className="container flex flex-col gap-space-small justify-between items-center text-center lg:flex-row lg:text-left">
        <div>
          <p>{data.text}</p>
          {data.subtitle && <p className="font-16 font-normal mt-2">{data.subtitle}</p>}
        </div>
        <ServiceCtaButton
          href={data.ctaHref}
          label={data.ctaLabel}
          btnArrow={data.btnArrow}
          className="btn btn-primary whitespace-normal lg:whitespace-nowrap"
        />
      </div>
    </section>
  );
}
