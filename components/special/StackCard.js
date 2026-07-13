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
    <section className="full-section">
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
        <div className="animate fadeUp rounded-2xl border border-white/10 bg-black-light p-6 xl:p-8">
          {stackLabel && <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{stackLabel}</p>}
          <ol className="space-y-5">
            {stackItems.map((s, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 font-semibold text-primary">{i + 1}</span>
                <div>
                  <p className="mb-0 font-semibold leading-snug">{s.title}</p>
                  {s.body && <p className="mb-0 text-sm text-muted">{s.body}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
