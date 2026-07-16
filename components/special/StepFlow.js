import SectionHeading from "./SectionHeading";

/** Numbered step-flow: kicker + title/subtitle, then a row of numbered cards. */
export default function StepFlow({ eyebrow, title, subtitle, steps = [] }) {
  const lg = steps.length === 5 ? "lg:grid-cols-5" : steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section className="special-step-flow full-section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className={`grid gap-5 sm:grid-cols-2 ${lg} animate fadeUp`}>
          {steps.map((s, i) => (
            <div key={i} className="relative h-full rounded-xl border border-white/10 bg-black-light p-6">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-24 font-bold text-black">{i + 1}</span>
              <h3 className="mb-2 font-22">{s.title}</h3>
              {s.body && <p className="mb-0 text-muted leading-relaxed">{s.body}</p>}

              {/* Connector arrow between cards (1 → 2 → 3 …). `left-full` starts it at
                  the card's right edge and `w-5` matches the grid gap exactly, so it sits
                  centred in the gutter. Only shown at lg, where every step is on ONE row —
                  below that the grid wraps and a rightward arrow would point at nothing. */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-full top-1/2 hidden w-5 -translate-y-1/2 justify-center text-primary/70 lg:flex"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
