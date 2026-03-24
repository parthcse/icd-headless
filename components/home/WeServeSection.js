import Reveal from "../animations/Reveal";

/* Flag assets: /images/flags/us-flag.png, sa-flag.png, uk-flag.png, etc. — placeholders below until assets exist. */
const COUNTRIES = [
  "United States",
  "South America",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Dubai",
  "Singapore",
  "South Africa",
  "Sweden",
  "Netherlands",
  "Japan",
  "Norway",
  "Finland",
  "France",
  "Ireland",
  "Spain",
  "Italy",
  "India",
];

export default function WeServeSection() {
  return (
    <Reveal>
      <section className="section-pad">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-[40px]">
          <div className="mb-10 lg:mb-14">
            <h2 className="flex flex-col">
              <span className="section-heading-light">Countries</span>
              <span className="section-heading-bold">We Serve</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-[20px]">
            {COUNTRIES.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 bg-[#151515] px-[20px] py-[10px]"
              >
                <div className="h-[18px] w-[18px] shrink-0 rounded-full bg-[#3a3a3a]" aria-hidden />
                <span className="font-gilroy text-[20px] text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
