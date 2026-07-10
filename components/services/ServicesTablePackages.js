import ServiceCtaButton from "@/components/services/ServiceCtaButton";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

/**
 * Pricing packages section: one card per plan, each with a price header, a
 * per-card CTA and a grouped feature checklist. Used by the PPC / SMM package
 * pages. Feature entries are either a plain string (a checklist item) or an
 * object `{ group: "..." }` that renders an in-card sub-heading.
 *
 * The plan flagged `featured: true` is visually emphasised (primary border +
 * "Most Popular" ribbon). Cards are top-aligned so tiers with different feature
 * counts (e.g. SMM Basic vs Enterprise) don't grow huge empty gaps.
 */
export default function ServicesTablePackages({ data }) {
  const cols = data.plans.length;
  const gridCols =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 4
      ? "sm:grid-cols-2 xl:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="services-table-packages full-section">
      <div className="container">
        {(data.eyebrow || data.title || data.subtitle) && (
          <div className="heading-wrap animate fadeUp">
            {data.eyebrow && <h3 className="font-48">{data.eyebrow}</h3>}
            {data.title && <h2 className="main-title pb-2">{data.title}</h2>}
            {data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols} gap-6 xl:gap-8 items-start`}>
          {data.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex h-full flex-col bg-black-light border animate fadeUp ${
                plan.featured ? "border-primary lg:-mt-4 lg:mb-4 shadow-xl shadow-black/40" : "border-white/15"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-0 top-0 bg-primary px-4 py-1 text-sm font-semibold uppercase tracking-wide">
                  Most Popular
                </span>
              )}

              {/* Header: name + price */}
              <div className={`px-6 xl:px-8 pt-space-small pb-6 text-center ${plan.featured ? "bg-primary/10" : ""}`}>
                <h3 className="font-24 font-semibold mb-3">{plan.name}</h3>
                {plan.price && (
                  <>
                    <p className="font-36 font-bold text-primary mb-0 leading-tight">
                      {plan.price.amount}
                      {plan.price.unit && <span className="font-22 font-semibold text-white"> {plan.price.unit}</span>}
                    </p>
                    {plan.price.label && (
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted">{plan.price.label}</p>
                    )}
                  </>
                )}
                {plan.ctaLabel && (
                  <div className="pt-6">
                    <ServiceCtaButton
                      href={plan.ctaHref}
                      label={plan.ctaLabel}
                      btnArrow={data.btnArrow}
                      className={`btn ${plan.featured ? "btn-primary" : "btn-secondary"} w-full justify-center`}
                    />
                  </div>
                )}
              </div>

              {/* Feature checklist */}
              <ul className="flex-1 border-t border-white/10 px-6 xl:px-8 py-space-small space-y-3 leading-relaxed small">
                {plan.features.map((feat, j) =>
                  typeof feat === "object" && feat.group ? (
                    <li
                      key={j}
                      className={`font-semibold uppercase tracking-wide text-primary ${j === 0 ? "" : "mt-5 border-t border-white/10 pt-5"}`}
                    >
                      {feat.group}
                    </li>
                  ) : (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckPrimaryIcon className="mt-1 w-[0.9em] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {data.note && <p className="text-center max-w-4xl mx-auto mt-10 leading-relaxed text-muted">{data.note}</p>}
      </div>
    </section>
  );
}
