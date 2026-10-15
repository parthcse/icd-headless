import { SITEMAP_INCLUDE_CATEGORIES, getCategoryEntries, sitemapRoute } from "@/lib/sitemap-sources";

/**
 * Blog category archives — /blog/category/<slug>/.
 *
 * OFF by default. These URLs are indexable but Yoast never listed them, so
 * turning them on means asking Google to crawl ~30 extra archive pages — an SEO
 * decision, not a side effect of replacing the sitemap. Set
 * SITEMAP_INCLUDE_CATEGORIES = true in lib/sitemap-sources.js to publish them
 * (that also adds this file to the sitemap index); until then the URL 404s so
 * nothing can discover a sitemap we did not choose to advertise.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const serve = sitemapRoute(getCategoryEntries);

export async function GET(request) {
  if (!SITEMAP_INCLUDE_CATEGORIES) {
    return new Response("Not Found", { status: 404, headers: { "content-type": "text/plain; charset=UTF-8" } });
  }
  return serve(request);
}
