"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import ServiceCtaButton from "@/components/services/ServiceCtaButton";

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold">{part.bold}</strong>
    ) : (
      <a key={i} href={part.href} {...(/^https?:\/\//.test(part.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * Scroll-spy section: a sticky numbered left rail of topics beside a scrolling
 * column of content blocks. The active rail item tracks whichever block is in
 * view (IntersectionObserver); clicking a rail item smooth-scrolls to its block
 * (each block has an id + scroll-margin so it clears the fixed header).
 *
 * Data shape:
 *   {
 *     eyebrow?, title?, subtitle?,
 *     items: [{ title, body?: string|parts[], bodyList?: (string|parts[])[] }],
 *     ctaLabel?, ctaHref?, btnArrow?
 *   }
 */
export default function ServicesScrollNavigation({ data }) {
  const items = data.items || [];
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]) setActive(Number(inView[0].target.dataset.index));
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [items.length]);

  const go = (i) => refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="services-scroll-navigation full-section">
      <div className="container">
        {(data.eyebrow || data.title || data.subtitle) && (
          <div className="heading-wrap animate fadeUp">
            {data.eyebrow && <h3 className="font-48">{data.eyebrow}</h3>}
            {data.title && <h2 className="main-title pb-2">{data.title}</h2>}
            {data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-12 xl:gap-14 animate fadeUp">
          {/* Sticky rail (desktop) */}
          <nav className="hidden lg:col-span-4 lg:block xl:col-span-4">
            <div className="sticky top-28 rounded-xl border border-[#272727] bg-black-light p-6">
              {data.navLabel && (
                <p className="mb-5 border-b border-white/10 pb-4 font-24 font-semibold text-primary">{data.navLabel}</p>
              )}
              <ul className="space-y-1">
                {items.map((it, i) => {
                  const on = active === i;
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => go(i)}
                        aria-current={on ? "true" : undefined}
                        className={`flex w-full items-center border-l-2 px-4 py-3 text-left font-semibold leading-snug transition-colors duration-300 ${
                          on ? "border-primary bg-primary/[0.06] text-primary" : "border-white/10 text-white/75 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        {it.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Content column */}
          <div className="lg:col-span-8 space-y-5 xl:space-y-6">
            {items.map((it, i) => {
              const on = active === i;
              return (
                <div
                  key={i}
                  id={slugify(it.title)}
                  data-index={i}
                  ref={(el) => (refs.current[i] = el)}
                  className={`scroll-mt-28 border bg-black-light p-6 leading-relaxed transition-colors duration-300 lg:p-8 ${
                    on ? "border-primary/60" : "border-white/10"
                  }`}
                >
                  <h3 className="font-24 font-semibold mb-4">{it.title}</h3>
                  {it.blocks ? (
                    <div className="space-y-4 text-muted">
                      {it.blocks.map((block, j) =>
                        block.type === "ul" ? (
                          <ul key={j} className="list-disc space-y-2 pl-5">
                            {block.items.map((li, k) => <li key={k}>{Array.isArray(li) ? renderParts(li) : li}</li>)}
                          </ul>
                        ) : (
                          <p key={j} className="mb-0">{Array.isArray(block.text) ? renderParts(block.text) : block.text}</p>
                        )
                      )}
                    </div>
                  ) : (
                    <>
                      {it.body && <p className="mb-0 text-muted">{Array.isArray(it.body) ? renderParts(it.body) : it.body}</p>}
                      {it.bodyList && (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                          {it.bodyList.map((li, j) => (
                            <li key={j}>{Array.isArray(li) ? renderParts(li) : li}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              );
            })}

            {data.ctaLabel && (
              <div className="pt-2">
                <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} className="btn btn-primary" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
