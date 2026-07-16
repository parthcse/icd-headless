import renderParts from "./renderParts";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

/**
 * Two-column "what it is" section: eyebrow + title + paragraphs + checklist on
 * the left, a numbered "stack" card (vertical flow diagram) on the right.
 *
 * Props: { eyebrow?, title?, paragraphs?, bullets?: (string|parts[])[],
 *   stackLabel?, stackItems: [{title, body?}] }
 */
export default function StackCard({ eyebrow, title, paragraphs, bullets, stackLabel, stackItems = [] }) {
  return (
    <section className="special-stack-card full-section border-t-0">
      <div className="container grid items-center gap-space lg:grid-cols-2">
        <div className="animate fadeUp">
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{eyebrow}</p>}
          {title && <h2 className="mb-5 font-36 font-bold leading-tight">{title}</h2>}
          {paragraphs?.map((p, i) => <p key={i} className="mb-4 text-muted leading-relaxed">{Array.isArray(p) ? renderParts(p) : p}</p>)}
          {bullets?.length > 0 && (
            <ul className="mt-5 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckPrimaryIcon className="mt-0.5 w-[1.4em] shrink-0" />
                  <span>{Array.isArray(b) ? renderParts(b) : b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Gradient wash + a soft radial glow in the top-right corner. `relative` +
            `overflow-hidden` keep the glow clipped to the card's rounded corners. */}
        <div className="animate fadeUp relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black-light via-black-light to-black p-6 xl:p-8">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="relative">
            {stackLabel && <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{stackLabel}</p>}
            <ol>
              {stackItems.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex shrink-0 flex-col items-center self-stretch">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-black-light text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Connector line down to the next number. flex-1 makes it span
                        whatever height that row's text happens to be. */}
                    {i < stackItems.length - 1 && <span aria-hidden="true" className="my-1 w-px flex-1 bg-white/15" />}
                  </div>
                  <div className={i < stackItems.length - 1 ? "pb-6" : ""}>
                    <p className="mb-0 font-semibold leading-snug">{s.title}</p>
                    {s.body && <p className="mb-0 text-sm text-muted">{s.body}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
