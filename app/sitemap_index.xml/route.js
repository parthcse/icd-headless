import { SITEMAPS, SITEMAP_HEADERS, buildSitemapIndex } from "@/lib/sitemap-sources";

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

export async function GET() {
  try {
    const loaded = await Promise.all(
      SITEMAPS.map(async ({ name, load }) => {
        const entries = await load();
        if (!entries.length) throw new Error(`${name} resolved no URLs`);
        // Entries are sorted newest-first, but author/category URLs carry no date.
        const lastmod = entries.map((e) => e.lastmod).filter(Boolean).sort().pop() ?? null;
        return { name, lastmod };
      })
    );
    return new Response(buildSitemapIndex(loaded), { headers: SITEMAP_HEADERS });
  } catch (err) {
    console.error("[sitemap] index generation failed:", err?.message || err);
    return new Response("Sitemap temporarily unavailable", {
      status: 503,
      headers: { "content-type": "text/plain; charset=UTF-8", "cache-control": "no-store" },
    });
  }
}
