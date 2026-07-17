/**
 * The current calendar year, for freshness-driven copy like "…in {year}"
 * marketing titles and the footer copyright. Evaluated at build/render time, so
 * it refreshes on every deploy (or per-request on client components).
 *
 * ⚠ Do NOT use this to replace years in STATISTICS, historical facts, or future
 * projections — those must stay fixed (e.g. "in 2024, 60% of searches were…",
 * "since 2023", "projected by 2027"). Only swap in the year where the number
 * simply means "now".
 */
export function currentYear() {
  return new Date().getFullYear();
}

/**
 * Dynamic-year token for CONTENT: write `{{year}}` anywhere in a service-data
 * string (pageTitle, metaDescription, heading, body copy, FAQ answers…) and it
 * renders the current year. Resolved centrally in getServiceData, so you never
 * touch code — just type {{year}} in the page's data file where you want the year.
 *
 * Walks strings/arrays/objects and returns the ORIGINAL reference untouched when
 * there's no token, so pages that don't use it pay nothing.
 */
export function resolveYearTokens(value, year = String(currentYear())) {
  if (typeof value === "string") {
    // .replace returns the SAME string reference when there's no match, so the
    // parent's `n !== value` check still short-circuits — no needless cloning.
    return value.replace(/\{\{\s*year\s*\}\}/g, year);
  }
  if (Array.isArray(value)) {
    let changed = false;
    const out = value.map((v) => {
      const n = resolveYearTokens(v, year);
      if (n !== v) changed = true;
      return n;
    });
    return changed ? out : value;
  }
  if (value && typeof value === "object") {
    let changed = false;
    const out = {};
    for (const k in value) {
      const n = resolveYearTokens(value[k], year);
      if (n !== value[k]) changed = true;
      out[k] = n;
    }
    return changed ? out : value;
  }
  return value;
}
