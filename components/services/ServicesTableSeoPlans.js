import ServiceCtaButton from "@/components/services/ServiceCtaButton";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

export default function ServicesTableSeoPlans({ data }) {
  return (
    <section className="services-seo-pricing full-section">
      <div className="container">
        <div className="heading-wrap xl:pb-16 animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title mb-0">{data.title}</h2>
          {(Array.isArray(data.subtitle) ? data.subtitle : [data.subtitle]).map((p, i) => (
            <p key={i} className="max-w-5xl mx-auto">{p}</p>
          ))}
        </div>
        <div className="border border-primary">
          <div className="bg-primary text-center py-space-small px-space-small">
            <h3 className="text-white font-semibold mb-3">{data.planLabel}</h3>
            {data.price ? (
              <>
                <p className="text-white/90 mb-2">Starting at</p>
                <h2 className="text-white font-bold font-48 mb-0">
                  ${data.price}<span className="font-normal font-30">/{data.period}</span>
                </h2>
              </>
            ) : data.priceNote ? (
              <p className="text-white/90 mb-0 font-22">{data.priceNote}</p>
            ) : null}
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="py-space-small px-space-small border-r border-white/15">
              <h3 className="mb-space-small font-22 font-semibold">{data.leftTitle}</h3>
              {data.items.map((item, i) => (
                <div
                  key={i}
                  className={i < data.items.length - 1 ? "mb-space-small pb-space-small border-b border-white/15" : ""}
                >
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <img className="min-w-[3.25em] w-[3.25em]" src={item.icon} alt="" />
                    </div>
                    <div>
                      <h4 className="font-22 font-semibold mb-2">{item.title}</h4>
                      <p>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-space-small px-space-small font-22">
              <h3 className="font-22 font-semibold mb-space-small">{data.rightTitle}</h3>
              <ul className="space-y-0">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 py-3 border-b border-white/15">
                    <CheckPrimaryIcon className="w-[1em] min-w-[1em] mt-1" />
                    <span className="font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
