import ServiceCtaButton from "@/components/services/ServiceCtaButton";

export default function ServicesCtaSection({ data }) {
  return (
    <section className="services-cta bg-black-light font-30 font-semibold py-space-mini">
      <div className="container flex flex-col gap-space-small justify-between items-center text-center lg:flex-row lg:text-left">
        <div>
          <p className="leading-snug">{data.text}</p>
          {data.subtitle && <p className="font-16 font-normal mt-2">{data.subtitle}</p>}
        </div>
        {data.ctaLabelSecondary ? (
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[17rem]">
            <ServiceCtaButton
              href={data.ctaHref}
              label={data.ctaLabel}
              btnArrow={data.btnArrow}
              className="btn btn-primary w-full justify-center whitespace-normal lg:whitespace-nowrap"
            />
            <ServiceCtaButton
              href={data.ctaHrefSecondary}
              label={data.ctaLabelSecondary}
              className="btn btn-secondary w-full justify-center whitespace-normal lg:whitespace-nowrap"
            />
          </div>
        ) : (
          <ServiceCtaButton
            href={data.ctaHref}
            label={data.ctaLabel}
            btnArrow={data.btnArrow}
            className="btn btn-primary whitespace-normal lg:whitespace-nowrap"
          />
        )}
      </div>
    </section>
  );
}
