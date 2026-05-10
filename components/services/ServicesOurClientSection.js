export default function ServicesOurClientSection({ data }) {
  return (
    <section className="services-our-client bg-black-light font-48 font-semibold py-space-mini">
      <div className="container flex flex-wrap justify-center items-center md:justify-between gap-4">
        {data.logos.map((logo, i) => (
          <div key={i} className="column">
            <img className="max-w-[2.85em] max-h-[1.48em] object-contain" src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
