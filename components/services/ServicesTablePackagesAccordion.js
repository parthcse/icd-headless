"use client";

import { useState } from "react";
import ServiceCtaButton from "@/components/services/ServiceCtaButton";

/**
 * SEO-package comparison table with collapsible category groups.
 *
 * One shared CSS grid (label column + one column per tier) keeps the tier
 * header, the summary rows and every accordion feature row aligned, with a
 * vertical divider between every column. The "popular" tier is tinted with
 * primary column borders + a badge. All category groups start collapsed — the
 * visitor clicks a numbered bar to reveal its feature × tier matrix.
 *
 * Data shape:
 *   {
 *     eyebrow?, title?, subtitle?, budgetLabel, budgetHint?,
 *     tiers: [{ name, price, per, popular? }],
 *     headRows: [{ label, cells: string[] }],
 *     categories: [{ title, rows: [{ label, cells: string[] }] }],
 *     ctaLabel?, ctaHref?, btnArrow?, note?
 *   }
 * Cell value "check" → ✓, "cross" → dash, anything else → text.
 */

function CheckMark() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15">
      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-label="Included">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function ServicesTablePackagesAccordion({ data }) {
  const { tiers = [], headRows = [], categories = [], budgetLabel = "" } = data;
  const popularIndex = tiers.findIndex((t) => t.popular);
  const [open, setOpen] = useState(() => new Set());
  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const gridCols = { gridTemplateColumns: `minmax(230px, 1.5fr) repeat(${tiers.length}, minmax(150px, 1fr))` };
  const minWidth = 230 + tiers.length * 168;

  // Vertical divider for a tier column (0-based among tiers). The popular column
  // and the cell just right of it get a primary line so the highlight is framed;
  // every other boundary is a subtle white line.
  const sep = (i) => `border-l ${i === popularIndex || i === popularIndex + 1 ? "border-primary/30" : "border-white/10"}`;

  const Cell = ({ value, i }) => {
    const popular = i === popularIndex;
    const base = `flex items-center justify-center px-3 py-4 text-center ${sep(i)} ${popular ? "bg-primary/[0.06]" : ""}`;
    if (value === "check") return <div className={base}><CheckMark /></div>;
    if (value === "cross")
      return (
        <div className={base}>
          <span className="h-[2px] w-4 rounded-full bg-white/25" aria-label="Not included" />
        </div>
      );
    return <div className={`${base} text-[0.95rem] font-semibold`}>{value}</div>;
  };

  return (
    <section className="services-table-packages-accordion full-section">
      <div className="container">
        {(data.eyebrow || data.title || data.subtitle) && (
          <div className="heading-wrap animate fadeUp">
            {data.eyebrow && <h3 className="font-48">{data.eyebrow}</h3>}
            {data.title && <h2 className="main-title pb-2">{data.title}</h2>}
            {data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
          </div>
        )}

        <div className="overflow-x-auto animate fadeUp">
          <div style={{ minWidth }}>
            {/* ── Header block: tier cards + always-visible summary rows ── */}
            <div className="border border-white/10 bg-black-light/30">
              {/* Tier header: names top-aligned, price + CTA bottom-pinned so columns line up */}
              <div className="grid" style={gridCols}>
                <div className="flex flex-col justify-end gap-1 px-6 pb-7 pt-10">
                  <p className="font-24 font-semibold">{budgetLabel}</p>
                  <p className="text-sm leading-snug text-muted">{data.budgetHint || "Compare what's included in each plan."}</p>
                </div>
                {tiers.map((tier, i) => {
                  const popular = i === popularIndex;
                  return (
                    <div
                      key={i}
                      className={`relative flex h-full flex-col px-4 pb-7 pt-10 text-center ${sep(i)} ${
                        popular ? "bg-primary/[0.08] border-t-2 border-t-primary" : ""
                      }`}
                    >
                      {popular && (
                        <span className="absolute inset-x-0 top-0 mx-auto w-fit rounded-b-lg bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-black-light">
                          Most Popular
                        </span>
                      )}
                      <p className={`font-22 font-semibold leading-tight ${popular ? "text-primary" : ""}`}>{tier.name}</p>
                      <div className="mt-auto pt-6">
                        {tier.price && <p className="font-32 font-bold leading-none">{tier.price}</p>}
                        {tier.per && <p className="mt-1.5 text-sm text-muted">{tier.per}</p>}
                        <div className="mt-5">
                          <ServiceCtaButton
                            href={data.ctaHref || "popup"}
                            label={data.ctaLabel || "Buy Now"}
                            btnArrow={data.btnArrow}
                            className={`btn ${popular ? "btn-primary" : "btn-secondary"} btn-sm w-full justify-center`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary rows */}
              <div className="border-t border-white/10">
                {headRows.map((row, r) => (
                  <div key={r} className="grid border-b border-white/[0.07] last:border-b-0" style={gridCols}>
                    <div className="flex items-center px-6 py-4 font-semibold">{row.label}</div>
                    {row.cells.map((c, i) => (
                      <Cell key={i} value={c} i={i} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Accordion category bars (all collapsed by default), each separated by a small gap ── */}
            <div className="mt-3 space-y-2.5">
              {categories.map((cat, ci) => {
                const isOpen = open.has(ci);
                return (
                  <div key={ci} className="border border-white/10 bg-black-light/30">
                    <button
                      type="button"
                      onClick={() => toggle(ci)}
                      aria-expanded={isOpen}
                      className={`group flex w-full items-center gap-4 px-6 py-4 text-left transition-colors hover:bg-white/[0.03] ${isOpen ? "bg-white/[0.03]" : ""}`}
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold transition-colors ${
                          isOpen ? "bg-primary text-black-light" : "bg-white/[0.06] text-white/70 group-hover:text-primary"
                        }`}
                      >
                        {ci + 1}
                      </span>
                      <span className="flex-1 font-22 font-semibold">{cat.title}</span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-45 bg-primary/10" : ""
                        }`}
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>

                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        {cat.rows.map((row, r) => (
                          <div key={r} className="grid border-t border-white/[0.06] odd:bg-white/[0.015]" style={gridCols}>
                            <div className="flex items-center px-6 py-4 leading-snug text-white/85">{row.label}</div>
                            {row.cells.map((c, i) => (
                              <Cell key={i} value={c} i={i} />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {data.note && <p className="mx-auto mt-8 max-w-4xl text-center leading-relaxed text-muted">{data.note}</p>}
      </div>
    </section>
  );
}
