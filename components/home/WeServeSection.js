import Reveal from "../animations/Reveal";

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "India", flag: "🇮🇳" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Norway", flag: "🇳🇴" },
];

export default function WeServeSection() {
  return (
    <Reveal>
      <section className="py-20 lg:py-28">
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
            Global Reach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
            We Serve
          </h2>
          <p className="mt-4 text-zinc-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
            From fast-moving startups to established enterprises, we support teams across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 hover:border-orange-500/40 transition-all duration-300 group"
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
