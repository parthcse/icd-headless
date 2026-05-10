export default function ServicesWhyChooseSection({ data }) {
  return (
    <section className="services-why-choose full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-mini xl:gap-space mx-auto max-w-[1280px] font-22 font-normal">
          {[data.benefitsLeft, data.benefitsRight].map((col, ci) => (
            <ul
              key={ci}
              className="[&>li]:flex [&>li]:items-center [&>li]:gap-[1.2em] [&>li]:pb-space-small [&>li]:mb-space-small [&>li]:border-b [&>li]:border-white/15 [&>li:last-child]:pb-0 [&>li:last-child]:mb-0 [&>li:last-child]:border-0"
            >
              {col.map((item, i) => (
                <li key={i}>
                  <img className="w-[2.4em] min-w-[2.4em] my-auto" src="/images/check-primary-icon.svg" alt="" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
