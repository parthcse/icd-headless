import Image from "next/image";

const posts = [
  {
    title: "Designing High‑Converting Landing Pages",
    date: "Feb 12, 2026",
    image: "/images/blog-landing-page.jpg",
  },
  {
    title: "Why Headless Commerce Wins in 2026",
    date: "Jan 28, 2026",
    image: "/images/blog-headless.jpg",
  },
  {
    title: "Building a Design System That Scales",
    date: "Jan 10, 2026",
    image: "/images/blog-design-system.jpg",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
            Insights
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Latest News</h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-300 sm:text-base">
            Perspectives from our team on design, development, and growth for modern brands.
          </p>
        </div>
        <button className="rounded-full border border-zinc-700 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-100 hover:border-orange-500 hover:text-orange-300">
          View All Articles
        </button>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70"
          >
            <div className="relative h-32 w-full sm:h-36">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-2 p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{post.date}</p>
              <h3 className="text-sm font-semibold sm:text-base">{post.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

