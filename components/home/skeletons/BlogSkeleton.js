export default function BlogSkeleton() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="h-3 w-24 animate-pulse rounded bg-zinc-800" />
          <div className="mt-3 h-8 w-56 animate-pulse rounded bg-zinc-800" />
          <div className="mt-3 h-4 w-[520px] max-w-full animate-pulse rounded bg-zinc-800" />
        </div>
        <div className="h-9 w-44 animate-pulse rounded-full bg-zinc-800" />
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <article
            key={idx}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70"
          >
            <div className="h-36 w-full animate-pulse bg-zinc-900" />
            <div className="space-y-2 p-5">
              <div className="h-3 w-28 animate-pulse rounded bg-zinc-900" />
              <div className="h-4 w-64 animate-pulse rounded bg-zinc-900" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

