const testimonials = [
  {
    quote:
      "They felt like an extension of our own team. From the first strategy workshop to launch, every detail was dialed in.",
    name: "Sarah Thompson",
    role: "VP of Marketing, Haven Living",
  },
  {
    quote:
      "Our new headless storefront is lightning fast and incredibly easy for our team to manage. We saw an immediate lift in conversions.",
    name: "Daniel Lee",
    role: "Founder, Northline Studio",
  },
  {
    quote:
      "Their process gives you confidence at every stage. Clear communication, strong opinions, and a beautiful final product.",
    name: "Priya Desai",
    role: "Product Lead, Meridian Finance",
  },
];

export default function HappyCustomersSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <header className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
          Testimonials
        </p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Happy Customers</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
          Teams of all sizes trust us to design, build, and scale digital products that perform.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-left"
          >
            <p className="text-sm leading-relaxed text-zinc-200">&ldquo;{testimonial.quote}&rdquo;</p>
            <figcaption className="mt-5 text-sm">
              <p className="font-semibold text-orange-300">{testimonial.name}</p>
              <p className="mt-0.5 text-xs text-zinc-400">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

