const CLIENT_LOGOS = Array.from({ length: 15 }, (_, i) => `/assets/photos/out-client-${i + 1}.png`);

const STATS = [
  { value: "500+", label: "Projects Delivered" },
  { value: "20+", label: "Countries Served" },
  { value: "10+", label: "Years of Experience" },
  { value: "5.0", label: "Average Client Rating" },
];

export default function CaseStudyClientsSection() {
  return (
    <section className="all-brands-section full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp xl:pb-16">
          <h3 className="mb-0 font-48 font-normal">Brands That</h3>
          <h2 className="main-title mb-0">Trust Us</h2>
          <p className="mx-auto max-w-2xl">
            For over a decade, businesses across the globe have partnered with IceCube Digital to design,
            build and grow their digital presence.
          </p>
        </div>

        {/* Logo grid — subtle gradient tiles that light up on hover */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4 animate fadeUp">
          {CLIENT_LOGOS.map((src) => (
            <div
              key={src}
              className="group flex aspect-[16/9] items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-5 transition-all duration-300 hover:border-primary/40 hover:from-primary/[0.10]"
            >
              <img
                className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                src={src}
                alt=""
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-14 animate fadeUp">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-black-light px-4 py-6 text-center">
              <p className="mb-1 font-48 font-bold text-primary">
                <small>{s.value}</small>
              </p>
              <p className="font-semibold text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
