const services = [
  {
    title: "Brand Strategy",
    description: "Positioning, messaging, and visual systems that define how your brand shows up.",
    icon: "strategy",
  },
  {
    title: "UI/UX Design",
    description: "Product and marketing design that turns complex ideas into intuitive experiences.",
    icon: "design",
  },
  {
    title: "Web Development",
    description: "Fast, modern websites and headless commerce experiences built for performance.",
    icon: "development",
  },
  {
    title: "Growth Marketing",
    description: "Performance campaigns across paid, email, and CRM to acquire and retain customers.",
    icon: "growth",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
          Our Capabilities
        </p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Creative Services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
          An end‑to‑end partner for ambitious brands, from first idea to ongoing optimization.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 text-left transition hover:border-orange-500/80 hover:bg-zinc-900/80"
          >
            <div className="h-9 w-9 rounded-xl bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/40" />
            <h3 className="text-sm font-semibold sm:text-base">{service.title}</h3>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
              {service.description}
            </p>
            <button className="mt-auto inline-flex items-center text-xs font-semibold text-orange-400 hover:text-orange-300">
              Learn More
              <span className="ml-1 text-[10px]">↗</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

