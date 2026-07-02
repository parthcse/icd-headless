"use client";

import { useCallback, useState } from "react";

// Square card in the blog-card style: image zooms, dark blur overlay fades in
// with the title + category on hover.
function PortfolioCard({ item }) {
  return (
    <a
      href={item.href || "#"}
      className="group relative block aspect-[37/32] overflow-hidden rounded-md border border-white/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/60"
    >
      <img
        src={item.image}
        alt={item.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 px-5 text-center opacity-0 backdrop-blur-md transition-opacity duration-300 ease-out group-hover:opacity-100">
        <h3 className="mb-0 font-30 font-semibold leading-snug text-white line-clamp-4">{item.title}</h3>
        <span className="h-0.5 w-9 rounded-full bg-primary" />
        {item.categories[0] && <span className="text-base font-medium text-primary">{item.categories[0].name}</span>}
      </div>
    </a>
  );
}

async function fetchPage(category, after) {
  const params = new URLSearchParams({ category });
  if (after) params.set("after", after);
  const res = await fetch(`/api/portfolios/?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to load portfolios");
  return res.json(); // { items, endCursor, hasNextPage }
}

export default function PortfolioGallery({ categories, initialItems, initialEndCursor, initialHasNextPage }) {
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
          {current.items.map((it) => <PortfolioCard key={it.id} item={it} />)}
        </div>
      )}

      {current.loading && current.items.length === 0 && (
        <div className="flex justify-center py-20" role="status" aria-label="Loading projects">
          <span className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        </div>
      )}
      {!current.loading && current.items.length === 0 && (
        <p className="py-12 text-center text-muted">No projects in this category yet.</p>
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
              "Load More"
            )}
          </button>
        </div>
      )}
    </>
  );
}
