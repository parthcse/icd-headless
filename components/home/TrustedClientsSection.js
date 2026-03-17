const clients = [
  "Haven Living",
  "Northline Studio",
  "Meridian Finance",
  "Solace Health",
  "Atlas Realty",
  "Brightline Labs",
  "Cinder Coffee",
  "Nova Retail",
];

export default function TrustedClientsSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
          Partners
        </p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Trusted Clients</h2>
      </header>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 px-6 py-8 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-4 text-center text-xs font-semibold text-zinc-200 sm:text-sm"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

