import CtaButton from "./CtaButton";

/** Dark rounded CTA band: headline + optional subtitle + up to two buttons. */
export default function CtaBand({ text, subtitle, primary, secondary }) {
  return (
    <section className="full-section">
      <div className="container">
        <div className="rounded-2xl border border-primary/30 bg-black-light px-6 py-12 text-center animate fadeUp xl:px-16">
          <h2 className="mb-3 font-36 font-bold leading-tight">{text}</h2>
          {subtitle && <p className="mx-auto mb-6 max-w-2xl text-muted">{subtitle}</p>}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primary && <CtaButton href={primary.href} label={primary.label} />}
            {secondary && <CtaButton href={secondary.href} label={secondary.label} variant="secondary" arrow={false} />}
          </div>
        </div>
      </div>
    </section>
  );
}
