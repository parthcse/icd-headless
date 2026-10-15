import { sitemapRoute, getPostEntries } from "@/lib/sitemap-sources";

/**
 * Blog posts — /blog/<slug>/ for every published post.
 *
 * Filename kept from Yoast so the URL already submitted in Search Console keeps
 * resolving. force-dynamic (not prerendered) so a build that cannot reach the
 * CMS can never freeze an incomplete sitemap into the deployment; the response
 * is edge-cached for an hour instead — see SITEMAP_HEADERS.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const GET = sitemapRoute(getPostEntries);
