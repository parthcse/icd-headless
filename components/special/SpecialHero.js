import renderParts from "./renderParts";
import CtaButton from "./CtaButton";

/**
 * Split hero for the special AI pages: eyebrow + accent headline + text + CTAs
 * (and optional rating row / stat tiles) on the left, an animated GIF/media box
 * on the right. Dark theme, our fade-up animation.
 *
 * Props: { eyebrow?, heading (string | parts[] with {accent}), paragraphs?,
 *   primary?: {label, href}, secondary?: {label, href}, phone?: {label, href},
 *   rating?: [{value,label}], stats?: [{value,label}], media, mediaAlt? }
 */
export default function SpecialHero({ eyebrow, heading, paragraphs, primary, secondary, phone, rating, stats, media, mediaAlt }) {
  return (
    <section className="services-banner full-section relative border-t-0 xl:py-32">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
        <span className="absolute inset-0 bg-black bg-opacity-25" />
      </div>
      <div className="container relative z-10 mt-8 grid items-center gap-space pt-space-mini md:mt-0 lg:grid-cols-2 xl:pt-0">
        <div className="text-box my-auto space-y-5 leading-relaxed animate fadeUp">
          {eyebrow && <p className="mb-0 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{eyebrow}</p>}
          <h1 className="font-48 font-bold leading-tight">{renderParts(heading)}</h1>
          {paragraphs?.map((p, i) => <p key={i} className="text-muted">{Array.isArray(p) ? renderParts(p) : p}</p>)}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {primary && <CtaButton href={primary.href} label={primary.label} />}
            {secondary && <CtaButton href={secondary.href} label={secondary.label} variant="secondary" arrow={false} />}
            {phone && (
              <a href={phone.href} className="btn btn-secondary">
                <img src="/assets/icons/call-icon-orange.svg" alt="" /> {phone.label}
              </a>
            )}
          </div>
          {rating?.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm text-muted">
              {rating.map((r, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <span className="text-primary">★★★★★</span>
                  <strong className="font-semibold text-white">{r.value}</strong>
                  <span>{r.label}</span>
                </span>
              ))}
            </div>
          )}
          {stats?.length > 0 && (
            <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-black-light px-4 py-3">
                  <p className="mb-0 font-24 font-bold leading-none text-primary">{s.value}</p>
                  <p className="mb-0 mt-1.5 text-xs leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative animate fadeUp">
          <div className="overflow-hidden rounded-2xl border border-primary/50 bg-black-light shadow-2xl shadow-primary/10">
            <img src={media} alt={mediaAlt || ""} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
