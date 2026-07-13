export function truncateWords(text, limit) {
  if (!text) return "";
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) return text;
  return `${words.slice(0, limit).join(" ")}...`;
}

export function stripHtml(html) {
  if (!html) return "";
  return String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Estimated reading time in whole minutes (min 1) at ~200 words/min. */
export function readingTime(html, wpm = 200) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}

export function formatPostDate(isoDate) {
  if (!isoDate) return "";
  try {
    return new Date(isoDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

/**
 * Relative on-site path for an internal WordPress link (case study, blog post,
 * etc.). WPGraphQL `uri` is already a root-relative path like `/blog/slug/`;
 * this strips any origin if one is present and guarantees a leading slash, so
 * links stay on the Next.js frontend instead of pointing at the CMS host.
 */
export function internalPath(uri) {
  if (!uri) return "#";
  try {
    if (/^https?:\/\//i.test(uri)) return new URL(uri).pathname;
  } catch {}
  return uri.startsWith("/") ? uri : `/${uri}`;
}

/**
 * Public frontend origin, for the rare cases that need an ABSOLUTE URL
 * (e.g. social share links). Override with NEXT_PUBLIC_SITE_URL; defaults to
 * the production frontend domain (NOT the CMS host).
 */
export function siteOrigin() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.icecubedigital.com").replace(/\/$/, "");
}

/** On-site testimonials archive ("View More Reviews"). Frontend route, never the CMS. */
export function testimonialsArchiveUrl() {
  return "/client-testimonials/";
}

/** On-site blog archive ("View More Blogs"). Frontend route, never the CMS. */
export function postsArchiveUrl() {
  return "/blog/";
}
