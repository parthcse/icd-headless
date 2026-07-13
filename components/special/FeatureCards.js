import renderParts from "./renderParts";
import SectionHeading from "./SectionHeading";

function Card({ item, tinted, highlight }) {
  const base = highlight
    ? "border-primary/50 bg-primary/[0.05]"
    : tinted
    ? "border-white/10 bg-black hover:border-primary/60"
    : "border-white/10 bg-black-light hover:border-primary/60";
  return (
    <div className={`h-full rounded-xl border p-6 transition-colors duration-300 ${base}`}>
      {item.icon && <img src={item.icon} alt="" className="mb-4 h-12 w-12" />}
      <h3 className="mb-2 font-20 font-semibold leading-snug">{item.title}</h3>
      {item.body && <p className="mb-0 text-muted leading-relaxed">{Array.isArray(item.body) ? renderParts(item.body) : item.body}</p>}
    </div>
  );
}

/**
 * Feature/benefit card grid: kicker + centered title/subtitle, then a 2/3/4-col
 * grid of icon + title + description cards. `tinted` renders as a raised band
 * (alternating look). `coreItems` renders a highlighted "core" row on top.
 */
export default function FeatureCards({ eyebrow, title, subtitle, columns = 3, tinted, coreLabel, coreItems, items }) {
  const grid = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section className={`full-section${tinted ? " bg-black-light" : ""}`}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        {coreItems?.length > 0 && (
          <div className="mb-6">
            {coreLabel && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{coreLabel}</p>}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 animate fadeUp">
              {coreItems.map((it, i) => <Card key={i} item={it} tinted={tinted} highlight />)}
            </div>
          </div>
        )}
        <div className={`grid gap-5 ${grid} animate fadeUp`}>
          {(items || []).map((it, i) => <Card key={i} item={it} tinted={tinted} />)}
        </div>
      </div>
    </section>
  );
}
