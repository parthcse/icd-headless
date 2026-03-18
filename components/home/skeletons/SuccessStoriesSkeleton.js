export default function SuccessStoriesSkeleton() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-8">
        <div className="h-3 w-40 animate-pulse rounded bg-zinc-800" />
        <div className="mt-3 h-8 w-52 animate-pulse rounded bg-zinc-800" />
        <div className="mt-3 h-4 w-[340px] max-w-full animate-pulse rounded bg-zinc-800" />
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70"
          >
            <div className="h-44 w-full animate-pulse bg-zinc-900" />
            <div className="space-y-2 p-5">
              <div className="h-3 w-28 animate-pulse rounded bg-zinc-900" />
              <div className="h-5 w-36 animate-pulse rounded bg-zinc-900" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

