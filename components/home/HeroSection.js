import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-between gap-10 py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 max-w-xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Digital Creative Agency
        </p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Build, Grow, &amp; Scale
          <span className="block text-orange-400">Your Digital Presence</span>
        </h1>
        <p className="max-w-md text-sm text-zinc-300 sm:text-base">
          We help brands design, develop, and launch high‑converting digital experiences across web,
          e‑commerce, and marketing.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-orange-400">
            Get a Free Quote
          </button>
          <button className="text-sm font-semibold text-zinc-200 hover:text-white">
            View Success Stories
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,115,68,0.35),transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),#020617)]" />

      <div className="relative hidden h-[340px] w-[320px] shrink-0 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 shadow-[0_24px_80px_rgba(0,0,0,0.8)] sm:block lg:h-[380px] lg:w-[360px]">
        <Image
          src="/images/hero-agency.jpg"
          alt="Creative digital agency team working together"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-black/70 p-4 text-xs text-zinc-100 backdrop-blur">
          <p className="font-semibold tracking-wide">Full‑Funnel Growth Partner</p>
          <p className="mt-1 text-[11px] text-zinc-300">
            Strategy, design, development, and performance marketing for brands that want to scale.
          </p>
        </div>
      </div>
    </section>
  );
}

