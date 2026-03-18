export default function TestimonialsSkeleton() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-8 text-center">
        <div className="h-3 w-28 animate-pulse rounded bg-zinc-800" />
        <div className="mt-3 h-8 w-44 animate-pulse rounded bg-zinc-800" />
        <div className="mt-3 h-4 w-[520px] max-w-full animate-pulse rounded bg-zinc-800" />
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <figure
            key={idx}
            className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-left"
          >
            <div className="h-24 w-full animate-pulse rounded bg-zinc-900" />
            <div className="mt-auto space-y-2">
              <div className="h-4 w-28 animate-pulse rounded bg-zinc-900" />
              <div className="h-3 w-40 animate-pulse rounded bg-zinc-900" />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

