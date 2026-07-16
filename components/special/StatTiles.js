/**
 * Standalone band of stat tiles — big orange value + supporting line.
 *
 * Same tile treatment as SpecialHero's inline `stats`, but as its own section so
 * it can sit below the TrustStrip instead of crowding the hero (matches the live
 * layout). Props: { items: [{ value, label }] }
 */
export default function StatTiles({ items = [] }) {
  if (items.length === 0) return null;
  const cols = items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <section className="special-stat-tiles full-section border-t-0 pb-0">
      <div className="container">
        <div className={`grid grid-cols-2 gap-4 animate fadeUp ${cols}`}>
          {items.map((s, i) => (
            <div key={i} className="h-full rounded-xl border border-white/10 bg-black-light px-5 py-6">
              <p className="mb-0 font-24 font-bold leading-none text-primary">{s.value}</p>
              <p className="mb-0 mt-2 text-sm leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
