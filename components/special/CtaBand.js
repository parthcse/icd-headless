import CtaButton from "./CtaButton";

/** Dark rounded CTA band: kicker + headline + optional subtitle + up to three buttons. */
export default function CtaBand({ eyebrow, text, subtitle, primary, secondary, phone }) {
  return (
    <section className="special-cta-band full-section">
      <div className="container">
        <div className="rounded-2xl border border-primary/30 bg-black-light px-6 py-12 text-center animate fadeUp xl:px-16">
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{eyebrow}</p>}
          <h2 className="mb-3 font-36 font-bold leading-tight">{text}</h2>
          {subtitle && <p className="mx-auto mb-6 max-w-2xl text-muted">{subtitle}</p>}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primary && <CtaButton href={primary.href} label={primary.label} />}
            {secondary && <CtaButton href={secondary.href} label={secondary.label} variant="secondary" arrow={false} />}
            {phone && (
              <a href={phone.href} className="btn btn-secondary">
                <img src="/assets/icons/call-icon-orange.svg" alt="" /> {phone.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
