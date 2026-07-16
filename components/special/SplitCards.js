import SectionHeading from "./SectionHeading";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

/**
 * Two side-by-side labeled cards, each a checklist of {title, text} items —
 * e.g. "Mandatory" vs "Add-ons". Dark band. Optional footnote below.
 *
 * Props: { eyebrow?, title?, subtitle?, footnote?, cards: [
 *   { label?, title?, intro?, highlight?, items: [{title, text}] } ] }
 */
export default function SplitCards({ eyebrow, title, subtitle, footnote, cards = [] }) {
  return (
    <section className="special-split-cards full-section bg-black-light">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-6 lg:grid-cols-2 animate fadeUp">
          {cards.map((card, i) => (
            <div key={i} className={`rounded-2xl border p-6 xl:p-8 ${card.highlight ? "border-primary/40 bg-primary/[0.05]" : "border-white/10 bg-black"}`}>
              {card.label && <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-black">{card.label}</span>}
              {card.title && <h3 className="mb-2 font-24 font-semibold leading-snug">{card.title}</h3>}
              {card.intro && <p className="mb-5 text-muted">{card.intro}</p>}
              <ul className="space-y-3">
                {card.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckPrimaryIcon className="mt-0.5 w-[1.4em] shrink-0" />
                    <span className="leading-relaxed">
                      <strong className="font-semibold text-white">{it.title}</strong> {it.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {footnote && <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted animate fadeUp">{footnote}</p>}
      </div>
    </section>
  );
}
