import Reveal from "../animations/Reveal";
import Counter from "./Counter";

const reasons = [
  "Senior-level team across strategy, UX, development, and growth.",
  "Obsessed with performance, accessibility, and maintainability.",
  "Flexible engagement models to match how your team works.",
];

export default function WhyChooseUsSection() {
  return (
    <Reveal>
      <section className="py-20 lg:py-28">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
              Count On The Numbers to Decide
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-zinc-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
              We combine strategy, design, and engineering to ship experiences that look beautiful and convert.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-14">
            <Counter end={35} suffix="+" label="Years of Experience" />
            <Counter end={14} suffix="+" label="Digital Specialists" />
            <Counter end={250} suffix="+" label="Projects Delivered" />
            <Counter end={500} prefix="$" suffix="M+" label="Client Revenue Generated" />
          </div>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-[14px] text-zinc-200">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-400 shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
