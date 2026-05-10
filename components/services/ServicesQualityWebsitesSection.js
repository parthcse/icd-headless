export default function ServicesQualityWebsitesSection({ data }) {
  return (
    <section className="services-quality-websites full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp start">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          <p className="mx-auto max-w-3xl">{data.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 leading-relaxed">
          {data.items.map((item, i) => (
            <div key={i} className="flex bg-black-light py-space-small px-space-small gap-4 sm:gap-6 md:gap-8">
              <div className="col-img min-w-14 sm:min-w-20">
                <img className="w-full" src={item.icon} alt="" />
              </div>
              <div className="text-box">
                <h3 className="font-semibold font-22">{item.name}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
