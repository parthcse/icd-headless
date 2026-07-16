import SectionHeading from "./SectionHeading";

/**
 * Live-in-production proof card: brand + context, a couple of metric tiles, a
 * quote and a description. Dark theme.
 *
 * Props: { eyebrow?, title?, brand, context?, metrics?: [{value,label}], quote?, body? }
 */
export default function ProofCard({ eyebrow, title, brand, context, metrics, quote, body }) {
  return (
    <section className="special-proof-card full-section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black-light p-8 animate fadeUp xl:p-10">
          <div className="mb-4 flex items-center gap-3">
            {brand && <span className="font-24 font-bold text-primary">{brand}</span>}
          </div>
          {context && <p className="mb-6 text-sm uppercase tracking-wider text-muted">{context}</p>}
          {metrics?.length > 0 && (
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              {metrics.map((m, i) => (
                <div key={i} className="rounded-lg border border-white/10 p-4">
                  <p className="mb-1 font-30 font-bold leading-none text-primary">{m.value}</p>
                  <p className="mb-0 text-sm text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          )}
          {quote && <p className="mb-4 text-lg font-medium italic leading-relaxed text-white/90">{quote}</p>}
          {body && <p className="mb-0 text-muted leading-relaxed">{body}</p>}
        </div>
      </div>
    </section>
  );
}
