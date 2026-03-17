import Image from "next/image";

const stories = [
  {
    title: "E‑commerce Replatform",
    subtitle: "Luxury Home Brand",
    metric: "+142% revenue",
    image: "/images/case-study-1.jpg",
  },
  {
    title: "Lead Gen Website",
    subtitle: "Real Estate Group",
    metric: "4.3x more leads",
    image: "/images/case-study-2.jpg",
  },
  {
    title: "Product Launch",
    subtitle: "Fintech Startup",
    metric: "72% faster rollout",
    image: "/images/case-study-3.jpg",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
            Our Work
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Success Stories</h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-300 sm:text-base">
            Real results from brands that partnered with us to redesign, rebuild, and scale.
          </p>
        </div>
        <button className="rounded-full border border-zinc-700 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-100 hover:border-orange-500 hover:text-orange-300">
          View All Projects
        </button>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {stories.map((story) => (
          <article
            key={story.title}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70 transition hover:border-orange-500/80"
          >
            <div className="relative h-40 w-full sm:h-44">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-orange-300 backdrop-blur">
                {story.metric}
              </div>
            </div>
            <div className="space-y-1 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{story.subtitle}</p>
              <h3 className="text-sm font-semibold sm:text-base">{story.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

