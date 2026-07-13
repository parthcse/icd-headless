/** Dark stats strip: big orange numbers + labels (the milestone counter band). */
export default function Counters({ items = [] }) {
  return (
    <section className="full-section bg-black-light">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 animate fadeUp">
          {items.map((c, i) => (
            <div key={i}>
              <p className="mb-1 font-48 font-bold leading-none text-primary">{c.value}</p>
              <p className="mb-0 text-muted">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
