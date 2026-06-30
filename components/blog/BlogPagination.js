// Page 1 lives at the base path (canonical); page N at <base>page/N/.
function pageHref(n, basePath) {
  return n <= 1 ? basePath : `${basePath}page/${n}/`;
}

// Build a compact page list: 1 … current-1 current current+1 … last
function buildPages(current, total) {
  const out = [];
  const around = 1;
  for (let p = 1; p <= total; p++) {
    const edge = p === 1 || p === total;
    const near = p >= current - around && p <= current + around;
    if (edge || near) {
      out.push(p);
    } else if (out[out.length - 1] !== "…") {
      out.push("…");
    }
  }
  return out;
}

const baseCls =
  "flex h-11 min-w-[2.75rem] items-center justify-center rounded-lg border px-3 text-sm font-semibold transition-colors";

function Arrow({ dir }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d={dir === "prev" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export default function BlogPagination({ page, totalPages, basePath = "/blog/" }) {
  if (!totalPages || totalPages <= 1) return null;

  const pages = buildPages(page, totalPages);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Blog pagination">
      {hasPrev ? (
        <a href={pageHref(page - 1, basePath)} className={`${baseCls} border-[#2d2d2d] text-white hover:border-primary hover:text-primary`} aria-label="Previous page">
          <Arrow dir="prev" />
        </a>
      ) : (
        <span className={`${baseCls} border-[#1f1f1f] text-white/25`} aria-disabled="true">
          <Arrow dir="prev" />
        </span>
      )}

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="flex h-11 w-8 items-center justify-center text-muted">
            …
          </span>
        ) : p === page ? (
          <span key={p} aria-current="page" className={`${baseCls} border-primary bg-primary text-black-light`}>
            {p}
          </span>
        ) : (
          <a key={p} href={pageHref(p, basePath)} className={`${baseCls} border-[#2d2d2d] text-white hover:border-primary hover:text-primary`}>
            {p}
          </a>
        )
      )}

      {hasNext ? (
        <a href={pageHref(page + 1, basePath)} className={`${baseCls} border-[#2d2d2d] text-white hover:border-primary hover:text-primary`} aria-label="Next page">
          <Arrow dir="next" />
        </a>
      ) : (
        <span className={`${baseCls} border-[#1f1f1f] text-white/25`} aria-disabled="true">
          <Arrow dir="next" />
        </span>
      )}
    </nav>
  );
}
