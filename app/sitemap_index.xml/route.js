import { SITEMAPS, SITEMAP_HEADERS, buildSitemapIndex, originFor } from "@/lib/sitemap-sources";

/**
 * The sitemap index — the one URL robots.txt and Search Console point at
 * (/sitemap.xml 301s here, which is what Yoast did too).
 *
 * Each sub-sitemap is loaded so the index can carry that sitemap's newest
 * <lastmod>: without it a crawler has no way to tell which of the seven files
 * is worth re-fetching, and the whole point of this rewrite is that those dates
 * are finally truthful. The work is the same handful of GraphQL queries the
 * sub-sitemaps run, and the response is edge-cached for an hour.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    // Sequential on purpose. Loading all seven in parallel fires ~14 GraphQL
    // requests at the CMS in one burst, and Cloudflare answered 520 to one of
    // them in testing, taking the whole index to 503. This route is cached for
    // an hour, so a few extra seconds costs nothing and the CMS stays happy.
    const loaded = [];
    for (const { name, load } of SITEMAPS) {
      const entries = await load();
      if (!entries.length) throw new Error(`${name} resolved no URLs`);
      // Entries are sorted newest-first, but author/category URLs carry no date.
      const lastmod = entries.map((e) => e.lastmod).filter(Boolean).sort().pop() ?? null;
      loaded.push({ name, lastmod });
    }
    return new Response(buildSitemapIndex(loaded, originFor(request)), { headers: SITEMAP_HEADERS });
  } catch (err) {
    console.error("[sitemap] index generation failed:", err?.message || err);
    return new Response("Sitemap temporarily unavailable", {
      status: 503,
      headers: { "content-type": "text/plain; charset=UTF-8", "cache-control": "no-store" },
    });
  }
}
