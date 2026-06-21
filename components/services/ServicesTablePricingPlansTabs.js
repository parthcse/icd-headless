"use client";

import { useState } from "react";

function Cell({ value }) {
  if (value === true)
    return <img className="w-[1em] min-w-[1em] mx-auto" src="/assets/icons/check-white-icon.svg" alt="Included" />;
  if (value === false)
    return <img className="w-[1em] min-w-[1em] mx-auto" src="/assets/icons/close-primary-icon.svg" alt="Not included" />;
  return value;
}

function Price({ price }) {
  return (
    <>
      {price.original && <div className="font-24 mb-1 text-white/50 line-through">{price.original}</div>}
      <div className="font-30 text-white">
        {price.amount}
        <span className="small font-normal text-white/50">{price.unit || "/mo"}</span>
      </div>
    </>
  );
}

export default function ServicesTablePricingPlansTabs({ data }) {
  const { tabs, plans, rows, ctaLabel = "Sign Up Now", ctaHref = "#" } = data;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activePlan, setActivePlan] = useState(0);

  const prices = data.pricing[activeTab];

  return (
    <section className="pricing-main full-section">
      <div className="container">
        <div className="heading-wrap mx-auto max-w-3xl animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title">{data.title}</h2>
          {data.subtitle && <p>{data.subtitle}</p>}
        </div>

        <div className="pricing-tabs flex flex-col md:flex-row gap-2 justify-center mb-space-small font-22 mx-auto max-w-3xl lg:max-w-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`pricing-tab flex-1 px-5 py-4 border border-primary font-semibold transition-all text-center ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
              {tab.note && <span className="block text-primary">{tab.note}</span>}
            </button>
          ))}
        </div>

        <div className="pricing-content active">
          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto text-center">
            <table className="w-full xl:table-fixed border-collapse border-spacing-0">
              <thead>
                <tr>
                  <th></th>
                  {plans.map((plan, i) => (
                    <th key={i} className="px-1 align-bottom">
                      {plan.popular ? (
                        <div className="border-x-4 border-primary overflow-hidden">
                          <div className="bg-primary p-3.5 text-center text-white font-bold tracking-widest uppercase">
                            {plan.badge || "Most Popular"}
                          </div>
                          <div className="p-5">
                            <h3 className="font-22 mb-1 text-primary">{plan.name}</h3>
                            <Price price={prices[i]} />
                          </div>
                        </div>
                      ) : (
                        <div className="border-x border-t border-primary p-5">
                          <h3 className="font-22 mb-1">{plan.name}</h3>
                          <Price price={prices[i]} />
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri}>
                    <td className="text-left text-white/70">{row.label}</td>
                    {row.values.map((value, ci) => (
                      <td key={ci}>
                        <Cell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  {plans.map((plan, i) => (
                    <td key={i} className="px-1">
                      <div className={`btn-wrap py-6 px-3 border-b ${plan.popular ? "border-x-4 border-b-4" : "border-x"} border-primary`}>
                        <a href={ctaHref} className="btn btn-primary">
                          {ctaLabel} ↗
                        </a>
                      </div>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div className="flex gap-2 overflow-x-auto mb-space-small">
              {plans.map((plan, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePlan(i)}
                  className={`plan-sel-btn flex-shrink-0 px-4 py-1.5 rounded-full border border-white/20 font-semibold text-white/60 transition-all ${activePlan === i ? "active" : ""}`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
            {(() => {
              const plan = plans[activePlan];
              const price = prices[activePlan];
              return (
                <div className={plan.popular ? "border-2 border-t-0 border-primary overflow-hidden" : "border border-white/20 overflow-hidden"}>
                  {plan.popular && (
                    <div className="bg-primary p-3.5 text-center text-white font-bold tracking-widest uppercase">
                      {plan.badge || "Most Popular"}
                    </div>
                  )}
                  <div className="p-5 border-b border-white/10 text-center">
                    <h3 className={`font-22 mb-1 ${plan.popular ? "text-primary" : "text-white"}`}>{plan.name}</h3>
                    {price.original && <div className="font-24 mb-1 text-white/50 line-through">{price.original}</div>}
                    <div className="font-36 text-white">
                      {price.amount}
                      <span className="small font-normal text-white/50">{price.unit || "/mo"}</span>
                    </div>
                  </div>
                  <div className="divide-y divide-white/10 px-5">
                    {rows.map((row, ri) => (
                      <div key={ri} className="flex justify-between items-center gap-4 py-3">
                        <span className="text-white/60 text-left">{row.label}</span>
                        <span className="text-white font-semibold shrink-0">
                          <Cell value={row.values[activePlan]} />
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-5">
                    <a href={ctaHref} className="btn btn-primary">
                      {ctaLabel} ↗
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
