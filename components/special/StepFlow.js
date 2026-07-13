import SectionHeading from "./SectionHeading";

/** Numbered step-flow: kicker + title/subtitle, then a row of numbered cards. */
export default function StepFlow({ eyebrow, title, subtitle, steps = [] }) {
  const lg = steps.length === 5 ? "lg:grid-cols-5" : steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section className="full-section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className={`grid gap-5 sm:grid-cols-2 ${lg} animate fadeUp`}>
          {steps.map((s, i) => (
            <div key={i} className="h-full rounded-xl border border-white/10 bg-black-light p-6">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-24 font-bold text-black">{i + 1}</span>
              <h3 className="mb-2 font-20 font-semibold leading-snug">{s.title}</h3>
              {s.body && <p className="mb-0 text-muted leading-relaxed">{s.body}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
