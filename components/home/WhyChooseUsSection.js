import Reveal from "../animations/Reveal";
import Counter from "./Counter";

const stats = [
  {
    icon: "👥",
    number: "35",
    suffix: "+",
    label: "People",
    desc: "Over 35 experts in eCommerce & digital marketing dedicated to growing your business.",
  },
  {
    icon: "📅",
    number: "14",
    suffix: "+",
    label: "Years",
    desc: "Over 14 years as an independent eCommerce agency delivering results.",
  },
  {
    icon: "🤝",
    number: "250",
    suffix: "+",
    label: "Client",
    desc: "250+ current clients in ecommerce development, SEO & more.",
  },
  {
    icon: "💰",
    number: "500",
    suffix: "M",
    prefix: "$",
    label: "Annual Revenue",
    desc: "$500 million in annual revenue generated for our customers.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="border-b border-[#202020] section-pad text-white">
      <div className="site-gutter">
        <div className="site-container">
        <Reveal>
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="section-heading-light">Count On The Recognized Leader</p>
            <h2 className="section-heading-bold mt-1">Why Choose Us?</h2>
            <p className="section-desc mx-auto mt-6 max-w-[920px] text-zinc-400">
              We&apos;ve helped businesses increase their revenue on an average by 90% in their first year with us!
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-[clamp(3rem,6vh,5rem)] grid max-w-[1200px] grid-cols-1 gap-y-[clamp(3rem,6vh,5rem)] gap-x-[clamp(2rem,10vw,12.5rem)] md:grid-cols-2">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 90}>
              <article className="flex flex-col items-center text-center md:items-start md:text-left">
                <span className="mb-4 text-[clamp(2.5rem,5vw,3.5rem)] leading-none" aria-hidden>
                  {stat.icon}
                </span>
                <div
                  className="w-full [&_p:first-of-type]:!text-[clamp(2.25rem,5.5vw,5.625rem)] [&_p:first-of-type]:!leading-[1.05] [&_p:first-of-type]:!font-bold [&_p:nth-of-type(2)]:!mt-3 [&_p:nth-of-type(2)]:!text-[clamp(1.125rem,2.5vw,2.5rem)] [&_p:nth-of-type(2)]:!text-white [&_p:nth-of-type(2)]:!leading-tight"
                >
                  <Counter
                    end={Number.parseInt(stat.number, 10)}
                    suffix={stat.suffix}
                    prefix={stat.prefix ?? ""}
                    label={stat.label}
                  />
                </div>
                <div
                  className="mt-6 h-px w-full max-w-[280px] bg-gradient-to-r from-transparent via-[#f17e3f] to-transparent md:max-w-none"
                  aria-hidden
                />
                <p className="mt-6 max-w-[520px] text-[clamp(0.9375rem,1.2vw,1.125rem)] leading-relaxed text-zinc-400">
                  {stat.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
