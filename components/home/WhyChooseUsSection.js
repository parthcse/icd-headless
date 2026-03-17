const stats = [
  { label: "Years of experience", value: "15+" },
  { label: "Digital specialists", value: "40+" },
  { label: "Projects delivered", value: "250+" },
  { label: "Client revenue generated", value: "$500M+" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              A growth partner for
              <span className="block text-orange-400">ambitious digital brands.</span>
            </h2>
            <p className="mt-4 text-sm text-zinc-300 sm:text-base">
              We combine strategy, design, and engineering to ship experiences that look beautiful
              and convert. From headless architectures to full‑funnel campaigns, we&apos;re built
              to support modern teams.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>Senior‑level team across strategy, UX, development, and growth.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>Obsessed with performance, accessibility, and maintainability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>Flexible engagement models to match how your team works.</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 text-left"
              >
                <p className="text-2xl font-semibold text-orange-400">{stat.value}</p>
                <p className="mt-1 text-xs text-zinc-300 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

