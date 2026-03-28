export function stripHtml(html) {
  if (!html) return "";
  return String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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

export function wordpressOrigin() {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;
  if (!endpoint) return "";
  try {
    const u = new URL(endpoint);
    return `${u.protocol}//${u.host}`;
  } catch {
    return "";
  }
}

/** Full URL to a WordPress path (e.g. case study permalink). */
export function wpPermalink(uri) {
  if (!uri) return "#";
  if (uri.startsWith("http")) return uri;
  const base = wordpressOrigin();
  if (!base) return uri.startsWith("/") ? uri : `/${uri}`;
  const path = uri.startsWith("/") ? uri : `/${uri}`;
  return `${base}${path}`;
}

export function testimonialsArchiveUrl() {
  const direct = process.env.NEXT_PUBLIC_WORDPRESS_TESTIMONIALS_URL;
  if (direct) return direct;
  const base = wordpressOrigin();
  if (base) return `${base}/testimonials/`;
  return "#";
}
