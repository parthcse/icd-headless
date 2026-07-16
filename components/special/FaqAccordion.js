import SectionHeading from "./SectionHeading";

/**
 * FAQ accordion built on native <details> (no client JS). The "+" rotates to an
 * "×" when open. Dark theme.
 */
export default function FaqAccordion({ eyebrow, title, items = [] }) {
  return (
    <section className="special-faq full-section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mx-auto max-w-3xl space-y-3 animate fadeUp">
          {items.map((it, i) => (
            <details key={i} className="group rounded-xl border border-white/10 bg-black-light px-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold">
                {it.question}
                <span className="shrink-0 text-2xl leading-none text-primary transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mb-0 pb-4 leading-relaxed text-muted">{it.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
