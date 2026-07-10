import ServiceCtaButton from "@/components/services/ServiceCtaButton";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

export default function ServicesTableCompare({ data }) {
  const colsClass = data.plans.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <section className="services-support-plans-table full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title">{data.title}</h2>
        </div>
        {data.subtitle && (
          <p className="text-center max-w-4xl mx-auto mb-8 xl:mb-12">{data.subtitle}</p>
        )}
        <div className={`grid grid-cols-1 ${colsClass} gap-6 items-stretch`}>
          {data.plans.map((plan, i) => (
            <div key={i} className="border border-primary flex flex-col">
              <div className="bg-primary py-4 px-6 xl:py-6 xl:px-8 text-center">
                <h3 className="font-22 font-semibold mb-0">{plan.name}</h3>
              </div>
              <div className="p-6 xl:p-8 space-y-4 xl:space-y-6 flex-1 flex flex-col">
                {plan.suitableFor && (
                  <p className="font-22 font-semibold text-center">{plan.suitableFor}</p>
                )}
                {plan.body && <p>{plan.body}</p>}
                {plan.features && (
                  <ul className="list-disc pl-5 space-y-2">
                    {plan.features.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {plan.checklistItems && (
                  <ul className="space-y-2 font-semibold">
                    {plan.checklistItems.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckPrimaryIcon className="w-[1em] mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {plan.ctaLabel && (
                  <div className="btn-wrap mt-auto pt-2">
                    <ServiceCtaButton href={plan.ctaHref} label={data.btnArrow ? plan.ctaLabel : `${plan.ctaLabel} ↗`} btnArrow={data.btnArrow} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
