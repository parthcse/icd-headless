import client from "@/lib/apollo-client";
import { SERVICES_SLUGS } from "@/lib/services";
import { NOINDEX_PATHS } from "@/lib/seo";
import { isRedirectSource } from "@/lib/redirects.mjs";
import manifest from "@/lib/sitemap-manifest.json";
import {
  SITEMAP_AUTHORS_QUERY,
  SITEMAP_CASE_STUDIES_QUERY,
  SITEMAP_CATEGORIES_QUERY,
  SITEMAP_PERSONNEL_QUERY,
  SITEMAP_PORTFOLIOS_QUERY,
  SITEMAP_POSTS_QUERY,
  SITEMAP_WP_PAGES_QUERY,
} from "@/graphql/sitemapQueries";

/**
 * The data behind our own XML sitemaps.
 *
 * REPLACES THE YOAST SITEMAP. Yoast could only list what exists in WordPress,
 * which left two holes the SEO team kept running into:
 *
 *  1. Pages the frontend builds from data files (lib/services/**) have no
 *     WordPress post, so they never appeared — eight pages were missing when
 *     this was written, including every blinds/curtains guide.
 *  2. <lastmod> only moved when a WordPress post was saved. Content that lives
 *     in the repo could change on every deploy without the sitemap noticing,
 *     and a few WordPress pages that now 301 elsewhere were still being listed
 *     as crawlable URLs.
 *
 * Here the FRONTEND is the source of truth for which URLs exist:
 *  • page URLs come from lib/sitemap-manifest.json (built from app/ and the
 *    lib/services registry — see scripts/build-sitemap-manifest.mjs),
 *  • posts / case studies / portfolio / team come from WPGraphQL, so adding one
 *    in WordPress puts it in the sitemap within the hour with no deploy,
 *  • <lastmod> is the later of the source file's commit date and the matching
 *    WordPress entry's `modifiedGmt`, so both a code change and a CMS-only edit
 *    move the date.
 *
 * The sub-sitemap filenames deliberately match Yoast's (post-sitemap.xml,
 * page-sitemap.xml, …) so the URLs already submitted in Search Console keep
 * working — only their contents get fixed.
 */

const SITE = "https://www.icecubedigital.com";

/**
 * Post-category archives (/blog/category/<slug>/). Yoast never listed these;
 * publishing them was a deliberate call, taken on 2026-10-15 — they are real
 * topic hubs (SEO 122 posts, eCommerce 97, Shopify 51 …), all returning 200.
 * Set to false to pull them back out; category-sitemap.xml then 404s and drops
 * out of the index. Thin or junk terms are filtered by SKIP_CATEGORIES below.
 */
export const SITEMAP_INCLUDE_CATEGORIES = true;

/**
 * Page URLs owned by a per-type sitemap below, so page-sitemap.xml doesn't list
 * them twice. Anything DEEPER than these archive roots belongs to its own
 * sitemap — e.g. the hand-built /case-studies/mahesh-eng-works/ page comes from
 * case-studies-sitemap.xml, while /case-studies/ itself stays a page.
 */
const TYPE_OWNED_PREFIXES = ["/blog/", "/case-studies/", "/portfolio/", "/team/"];

function isTypeOwned(url) {
  return TYPE_OWNED_PREFIXES.some((p) => url.startsWith(p) && url.length > p.length);
}

/** WPGraphQL returns "2026-10-15T10:13:11" with no zone; it is always UTC. */
function toLastmod(modifiedGmt) {
  if (!modifiedGmt) return null;
  return /[Zz]|[+-]\d{2}:?\d{2}$/.test(modifiedGmt) ? modifiedGmt : `${modifiedGmt}+00:00`;
}

/** Later of two dates, either of which may be missing. */
function newer(a, b) {
  if (!a) return b || null;
  if (!b) return a;
  return new Date(a) >= new Date(b) ? a : b;
}

const xmlEscape = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

/**
 * Pages through a connection 100 nodes at a time (WPGraphQL's `first` ceiling).
 * Errors are deliberately NOT swallowed: the route must fail loudly rather than
 * publish a sitemap that silently lost 400 posts — Google then keeps the copy it
 * already has and retries later. The hop cap is a guard against a server that
 * reports hasNextPage forever.
 */
async function fetchAllNodes(query, pick) {
  const nodes = [];
  let after = null;
  for (let page = 0; page < 50; page++) {
    const { data } = await client.query({ query, variables: { after }, fetchPolicy: "no-cache" });
    const conn = pick(data);
    nodes.push(...(conn?.nodes ?? []));
    if (!conn?.pageInfo?.hasNextPage || !conn.pageInfo.endCursor) break;
    after = conn.pageInfo.endCursor;
  }
  return nodes;
}

function assertConfigured() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT is not set — refusing to emit an empty sitemap");
  }
}

/** Sort newest-first so the most recently touched URLs lead each sitemap. */
function byNewest(a, b) {
  if (!a.lastmod) return 1;
  if (!b.lastmod) return -1;
  return new Date(b.lastmod) - new Date(a.lastmod);
}

/**
 * Final gate every sitemap entry passes through: a sitemap may contain only
 * canonical, crawlable URLs.
 *
 * Drops anything the frontend 301s away (lib/redirects.mjs) or marks noindex.
 * This is not theoretical — WordPress still publishes the superseded versions of
 * two rewritten blog posts, so their old slugs come back from GraphQL even
 * though the live site redirects them. Yoast listed those, plus two pages that
 * now 301; filtering here means it cannot happen again whatever lands in the
 * CMS or the redirect table.
 */
function toEntry({ path, lastmod }) {
  if (NOINDEX_PATHS.has(path) || isRedirectSource(path)) return null;
  return { loc: `${SITE}${path}`, lastmod: lastmod ?? null };
}

function toEntries(items) {
  return items.map(toEntry).filter(Boolean).sort(byNewest);
}

/**
 * Page URLs: every route the frontend actually serves.
 *
 * The manifest is authoritative for WHICH URLs exist. WordPress is consulted
 * only for dates — a WP page that no longer has a matching route (the ones that
 * now 301 elsewhere) contributes nothing and is therefore dropped, which is how
 * redirects stop appearing in the sitemap.
 */
export async function getPageEntries() {
  assertConfigured();
  const wpPages = await fetchAllNodes(SITEMAP_WP_PAGES_QUERY, (d) => d?.pages);
  const wpModified = new Map(wpPages.filter((n) => n?.uri).map((n) => [n.uri, toLastmod(n.modifiedGmt)]));

  // Belt and braces: the registry is the live list of data-file pages, so a slug
  // added without rebuilding the manifest still gets into the sitemap (dateless).
  const urls = new Map(Object.entries(manifest.routes).map(([url, r]) => [url, r.lastmod ?? null]));
  for (const slug of SERVICES_SLUGS) if (!urls.has(`/${slug}/`)) urls.set(`/${slug}/`, null);

  return toEntries(
    [...urls]
      .filter(([url]) => !isTypeOwned(url))
      .map(([url, lastmod]) => ({ path: url, lastmod: newer(lastmod, wpModified.get(url)) }))
  );
}

export async function getPostEntries() {
  assertConfigured();
  const nodes = await fetchAllNodes(SITEMAP_POSTS_QUERY, (d) => d?.posts);
  return toEntries(
    nodes.filter((n) => n?.slug).map((n) => ({ path: `/blog/${n.slug}/`, lastmod: toLastmod(n.modifiedGmt) }))
  );
}

export async function getCaseStudyEntries() {
  assertConfigured();
  const nodes = await fetchAllNodes(SITEMAP_CASE_STUDIES_QUERY, (d) => d?.caseStudies);
  return toEntries(
    nodes.filter((n) => n?.slug).map((n) => ({ path: `/case-studies/${n.slug}/`, lastmod: toLastmod(n.modifiedGmt) }))
  );
}

export async function getPortfolioEntries() {
  assertConfigured();
  const nodes = await fetchAllNodes(SITEMAP_PORTFOLIOS_QUERY, (d) => d?.portfolios);
  return toEntries(
    nodes.filter((n) => n?.slug).map((n) => ({ path: `/portfolio/${n.slug}/`, lastmod: toLastmod(n.modifiedGmt) }))
  );
}

export async function getPersonnelEntries() {
  assertConfigured();
  const nodes = await fetchAllNodes(SITEMAP_PERSONNEL_QUERY, (d) => d?.allPersonnel);
  return toEntries(
    nodes.filter((n) => n?.slug).map((n) => ({ path: `/team/${n.slug}/`, lastmod: toLastmod(n.modifiedGmt) }))
  );
}

/** Author archives carry no date of their own — Yoast listed them without one too. */
export async function getAuthorEntries() {
  assertConfigured();
  const { data } = await client.query({ query: SITEMAP_AUTHORS_QUERY, fetchPolicy: "no-cache" });
  return toEntries(
    (data?.users?.nodes ?? []).filter((n) => n?.slug).map((n) => ({ path: `/blog/author/${n.slug}/`, lastmod: null }))
  );
}

/**
 * Category archives to leave out even when categories are switched on.
 * "uncategorized" is WordPress's catch-all and holds one stray post; a term
 * nobody chose is not a page worth sending Google.
 */
const SKIP_CATEGORIES = new Set(["uncategorized"]);

export async function getCategoryEntries() {
  assertConfigured();
  const nodes = await fetchAllNodes(SITEMAP_CATEGORIES_QUERY, (d) => d?.categories);
  return toEntries(
    nodes
      .filter((n) => n?.slug && n.count > 0 && !SKIP_CATEGORIES.has(n.slug))
      // Flat single-segment URL: WPGraphQL reports child terms as nested paths
      // ("/blog/category/web-development/node-js/"), which the frontend 404s.
      .map((n) => ({ path: `/blog/category/${n.slug}/`, lastmod: null }))
  );
}

/**
 * Sub-sitemaps, in the order they appear in the index. `name` is both the public
 * filename and the route folder under app/.
 */
export const SITEMAPS = [
  { name: "post-sitemap.xml", load: getPostEntries },
  { name: "page-sitemap.xml", load: getPageEntries },
  { name: "personnel-sitemap.xml", load: getPersonnelEntries },
  { name: "portfolio-sitemap.xml", load: getPortfolioEntries },
  { name: "case-studies-sitemap.xml", load: getCaseStudyEntries },
  { name: "author-sitemap.xml", load: getAuthorEntries },
  ...(SITEMAP_INCLUDE_CATEGORIES ? [{ name: "category-sitemap.xml", load: getCategoryEntries }] : []),
];

/**
 * <?xml-stylesheet?> → our own copy in /public.
 *
 * Root-relative, NOT an absolute URL: browsers refuse to apply a stylesheet
 * from another origin, so hardcoding the www host blanked the styled view on
 * localhost and on any preview host. A leading-slash path resolves against
 * whatever origin served the XML, so it works everywhere. (This is the same
 * same-origin rule that forced the old setup to proxy Yoast's .xsl off the CMS.)
 */
const STYLESHEET = `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`;

export function buildUrlset(entries) {
  const urls = entries
    .map(({ loc, lastmod }) => `\t<url>\n\t\t<loc>${xmlEscape(loc)}</loc>${lastmod ? `\n\t\t<lastmod>${xmlEscape(lastmod)}</lastmod>` : ""}\n\t</url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
${STYLESHEET}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

/**
 * The index's own <lastmod> per sub-sitemap is the newest entry inside it, which
 * is what tells a crawler which sub-sitemap is worth re-fetching.
 */
export function buildSitemapIndex(sitemaps) {
  const items = sitemaps
    .map(({ name, lastmod }) => `\t<sitemap>\n\t\t<loc>${SITE}/${name}</loc>${lastmod ? `\n\t\t<lastmod>${xmlEscape(lastmod)}</lastmod>` : ""}\n\t</sitemap>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
${STYLESHEET}
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
`;
}

/**
 * Cached at the edge for an hour and served stale for a day while it refreshes,
 * so crawler traffic never waits on WPGraphQL twice in a row. These routes are
 * force-dynamic rather than prerendered on purpose: a build that cannot reach
 * the CMS (it has happened — Cloudflare once challenged the build IP) would
 * otherwise bake an empty sitemap into the deployment.
 */
export const SITEMAP_HEADERS = {
  "content-type": "application/xml; charset=UTF-8",
  "cache-control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
};

/**
 * Builds the GET handler for one sub-sitemap route.
 *
 * A failed or empty result answers 503 + no-store instead of 200 with a short
 * sitemap. That matters: Google treats a successful fetch as the truth and would
 * drop every URL that went missing, whereas after a 503 it keeps the copy it has
 * and comes back later. Nothing — browser, Cloudflare or crawler — caches it.
 */
export function sitemapRoute(load) {
  return async function GET() {
    try {
      const entries = await load();
      if (!entries.length) throw new Error("no URLs resolved");
      return new Response(buildUrlset(entries), { headers: SITEMAP_HEADERS });
    } catch (err) {
      console.error("[sitemap] generation failed:", err?.message || err);
      return new Response("Sitemap temporarily unavailable", {
        status: 503,
        headers: { "content-type": "text/plain; charset=UTF-8", "cache-control": "no-store" },
      });
    }
  };
}
