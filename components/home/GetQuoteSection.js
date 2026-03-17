export default function GetQuoteSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/70">
              Let&apos;s Talk
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-black sm:text-3xl">
              Ready to start your next
              <span className="block">digital project with us?</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-black/80 sm:text-base">
              Share a bit about your brand, goals, and timelines. We&apos;ll follow up with a
              tailored approach, budget range, and next steps within two business days.
            </p>
          </div>

          <form className="space-y-4 rounded-2xl bg-black/10 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 text-sm">
                <label className="text-xs font-semibold uppercase tracking-wide text-black/70">
                  Name
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-lg border border-black/15 bg-white/80 px-3 text-xs text-black outline-none placeholder:text-black/40 focus:border-black/40"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="text-xs font-semibold uppercase tracking-wide text-black/70">
                  Company
                </label>
                <input
                  type="text"
                  className="h-9 w-full rounded-lg border border-black/15 bg-white/80 px-3 text-xs text-black outline-none placeholder:text-black/40 focus:border-black/40"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label className="text-xs font-semibold uppercase tracking-wide text-black/70">
                Work Email
              </label>
              <input
                type="email"
                className="h-9 w-full rounded-lg border border-black/15 bg-white/80 px-3 text-xs text-black outline-none placeholder:text-black/40 focus:border-black/40"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="text-xs font-semibold uppercase tracking-wide text-black/70">
                Project Type
              </label>
              <select className="h-9 w-full rounded-lg border border-black/15 bg-white/80 px-3 text-xs text-black outline-none focus:border-black/40">
                <option>Website / Marketing Site</option>
                <option>E‑commerce / Headless Commerce</option>
                <option>Product Design &amp; UX</option>
                <option>Growth &amp; Performance Marketing</option>
              </select>
            </div>

            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black/90"
            >
              Get a Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

