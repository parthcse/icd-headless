const industries = [
  "E‑commerce & Retail",
  "SaaS & Product",
  "Real Estate",
  "Finance & Fintech",
  "Healthcare",
  "Hospitality",
  "Education",
  "B2B Services",
];

export default function WeServeSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
          Industries
        </p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">We Serve</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
          From fast‑moving startups to established enterprises, we support teams across sectors.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {industries.map((industry) => (
          <div
            key={industry}
            className="flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-center text-xs font-semibold text-zinc-100 sm:text-sm"
          >
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}

