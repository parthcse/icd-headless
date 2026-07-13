import renderParts from "./renderParts";

/** Small orange kicker + centered title + optional subtitle. */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  if (!eyebrow && !title && !subtitle) return null;
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center animate fadeUp xl:mb-14">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{eyebrow}</p>}
      {title && <h2 className="mb-4 font-36 font-bold leading-tight">{title}</h2>}
      {subtitle && <p className="mb-0 text-muted">{Array.isArray(subtitle) ? renderParts(subtitle) : subtitle}</p>}
    </div>
  );
}
