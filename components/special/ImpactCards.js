import renderParts from "./renderParts";
import SectionHeading from "./SectionHeading";

/**
 * Business-impact card grid — like FeatureCards, but each card carries a
 * category tag (Revenue / Cost / Risk / Insight) beside its icon so a buyer can
 * scan the grid by the kind of value rather than reading every card.
 *
 * Renders as a raised band (bg-black-light) with bg-black cards, matching the
 * "Why It's Different" treatment. Keep it between two plain sections or the
 * light/dark alternation breaks.
 *
 * Optional extras, both omitted if their props aren't passed:
 *  - `roiItems`      numbered "where the return comes from" columns
 *  - `bottomLine`    closing summary band
 */
function Card({ item }) {
  return (
    <div className="h-full rounded-xl border p-6 transition-colors duration-300 border-white/10 bg-black hover:border-primary/60">
      <div className="mb-4 flex items-center justify-between gap-3">
        {item.icon && <img src={item.icon} alt="" className="h-11 w-11" />}
        {item.tag && (
          <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            {item.tag}
          </span>
        )}
      </div>
      <h3 className="mb-2 font-22">{item.title}</h3>
      {item.body && (
        <p className="mb-0 text-muted leading-relaxed">
          {Array.isArray(item.body) ? renderParts(item.body) : item.body}
        </p>
      )}
    </div>
  );
}

export default function ImpactCards({
  eyebrow,
  title,
  subtitle,
  items,
  roiLabel,
  roiItems,
  roiFootnote,
  bottomLineLabel,
  bottomLine,
}) {
  return (
    <section className="special-impact-cards full-section bg-black-light">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 animate fadeUp">
          {(items || []).map((it, i) => (
            <Card key={i} item={it} />
          ))}
        </div>

        {roiItems?.length > 0 && (
          <div className="mx-auto mt-10 max-w-4xl animate fadeUp xl:mt-14">
            {roiLabel && (
              <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary">{roiLabel}</p>
            )}
            <div className="grid gap-5 sm:grid-cols-3">
              {roiItems.map((it, i) => (
                <div key={i} className="h-full rounded-xl border border-white/10 bg-black p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-24 font-bold text-black">
                    {i + 1}
                  </span>
                  <h3 className="mb-2 font-22">{it.title}</h3>
                  <p className="mb-0 text-muted leading-relaxed">
                    {Array.isArray(it.body) ? renderParts(it.body) : it.body}
                  </p>
                </div>
              ))}
            </div>
            {roiFootnote && <p className="mb-0 mt-5 text-center text-muted">{roiFootnote}</p>}
          </div>
        )}

        {bottomLine && (
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-primary/30 bg-black px-6 py-9 text-center animate fadeUp xl:mt-14 xl:px-14">
            {bottomLineLabel && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{bottomLineLabel}</p>
            )}
            <p className="mb-0 font-24 font-semibold leading-snug">
              {Array.isArray(bottomLine) ? renderParts(bottomLine) : bottomLine}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
