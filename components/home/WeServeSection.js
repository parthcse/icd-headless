const COUNTRIES = [
  { name: "United States", flag: "united-states-flag" },
  { name: "South America", flag: "south-america-flag" },
  { name: "United Kingdom", flag: "united-kingdom-flag" },
  { name: "Canada", flag: "canada-flag" },
  { name: "Australia", flag: "australia-flag" },
  { name: "Germany", flag: "germany-flag" },
  { name: "Dubai", flag: "dubai-flag" },
  { name: "Singapore", flag: "singapore-flag" },
  { name: "South Africa", flag: "south-africa-flag" },
  { name: "Sweden", flag: "sweden-flag" },
  { name: "Netherlands", flag: "netherlands-flag" },
  { name: "Japan", flag: "japan-flag" },
  { name: "Norway", flag: "norway-flag" },
  { name: "Finland", flag: "finland-flag" },
  { name: "France", flag: "france-flag" },
  { name: "Ireland", flag: "ireland-flag" },
  { name: "Spain", flag: "spain-flag" },
  { name: "Italy", flag: "italy-flag" },
  { name: "India", flag: "india-flag" },
];

export default function WeServeSection() {
  return (
    <section className="countries-we-serve-section full-section xl:pt-28 xl:pb-36">
      <div className="container">
        <div className="heading-wrap xl:pb-10 animate fadeUp">
          <h3 className="mb-0 font-48 font-normal">Countries</h3>
          <h2 className="main-title mb-0">We Serve</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 animate fadeUp" style={{ animationDelay: "0.3s" }}>
          {COUNTRIES.map((country) => (
            <div key={country.name} className="column flex items-center gap-2 bg-black-light px-4 py-2">
              <img
                className="aspect-square w-[1em] rounded-full object-cover"
                src={`/assets/flags/${country.flag}.png`}
                alt={country.name}
              />
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
