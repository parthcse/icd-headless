"use client";

import { useCallback, useState } from "react";

const ARROW_PATH =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

// Whole card links to the case study. Only the image zooms on hover; the title
// and paragraph sit below the image (not overlaid).
function CaseStudyCard({ item }) {
  return (
    <a
      href={item.href || "#"}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black-light transition-colors duration-300 hover:border-primary/40"
    >
      <figure className="relative m-0 aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
        />
        {item.categories[0] && (
          <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            {item.categories[0].name}
          </span>
        )}
      </figure>
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <h3 className="mb-2 font-22 font-semibold leading-snug transition-colors duration-300 group-hover:text-primary line-clamp-2">
          {item.title}
        </h3>
        {item.excerpt && <p className="leading-relaxed text-white/70 line-clamp-3">{item.excerpt}</p>}
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Read Case Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 13 13"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={ARROW_PATH} />
          </svg>
        </span>
      </div>
    </a>
  );
}

async function fetchPage(category, after) {
  const params = new URLSearchParams({ category });
  if (after) params.set("after", after);
  const res = await fetch(`/api/case-studies/?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to load case studies");
  return res.json(); // { items, endCursor, hasNextPage }
}

export default function CaseStudyGallery({ categories, initialItems, initialEndCursor, initialHasNextPage }) {
  const [active, setActive] = useState("all");
  // Independent state per tab, so "Load More" on one tab never affects another.
  const [tabs, setTabs] = useState({
    all: { items: initialItems || [], endCursor: initialEndCursor || null, hasNextPage: !!initialHasNextPage, loading: false },
  });

  const current = tabs[active] || { items: [], endCursor: null, hasNextPage: false, loading: true };

  const selectCategory = useCallback(
    async (key) => {
      setActive(key);
      if (tabs[key]) return; // already fetched — keep this tab's own paginated state
      setTabs((t) => ({ ...t, [key]: { items: [], endCursor: null, hasNextPage: false, loading: true } }));
      try {
        const page = await fetchPage(key, null);
        setTabs((t) => ({ ...t, [key]: { ...page, loading: false } }));
      } catch {
        setTabs((t) => ({ ...t, [key]: { items: [], endCursor: null, hasNextPage: false, loading: false } }));
      }
    },
    [tabs]
  );

  const loadMore = useCallback(async () => {
    const key = active;
    const cur = tabs[key];
    if (!cur || cur.loading || !cur.hasNextPage) return;
    setTabs((t) => ({ ...t, [key]: { ...t[key], loading: true } }));
    try {
      const page = await fetchPage(key, cur.endCursor);
      setTabs((t) => ({
        ...t,
        [key]: {
          items: [...t[key].items, ...page.items],
          endCursor: page.endCursor,
          hasNextPage: page.hasNextPage,
          loading: false,
        },
      }));
    } catch {
      setTabs((t) => ({ ...t, [key]: { ...t[key], loading: false } }));
    }
  }, [active, tabs]);

  const filterTabs = [{ slug: "all", name: "All" }, ...categories];

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2.5 sm:gap-3 animate fadeUp">
        {filterTabs.map((t) => (
          <button
            key={t.slug}
            type="button"
            onClick={() => selectCategory(t.slug)}
            className={`min-w-[75px] rounded-full border px-5 py-2.5 text-center text-base font-semibold transition-colors ${
              active === t.slug ? "border-primary bg-primary text-white" : "border-white/15 text-white/75 hover:border-primary hover:text-primary"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {current.items.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {current.items.map((it) => <CaseStudyCard key={it.id} item={it} />)}
        </div>
      )}

      {current.loading && current.items.length === 0 && (
        <div className="flex justify-center py-20" role="status" aria-label="Loading case studies">
          <span className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        </div>
      )}
      {!current.loading && current.items.length === 0 && (
        <p className="py-12 text-center text-muted">No case studies in this category yet.</p>
      )}

      {current.hasNextPage && (
        <div className="mt-12 text-center animate fadeUp">
          <button type="button" onClick={loadMore} disabled={current.loading} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
            {current.loading ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Loading
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                Load More
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            )}
          </button>
        </div>
      )}
    </>
  );
}
