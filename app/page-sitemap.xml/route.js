import { sitemapRoute, getPageEntries } from "@/lib/sitemap-sources";

/**
 * Every page URL the frontend serves: hand-built routes under app/ plus
 * the data-file pages in the lib/services registry. This is the sitemap Yoast
 * could not get right, because most of these pages do not exist in WordPress.
 *
 * Filename kept from Yoast so the URL already submitted in Search Console keeps
 * resolving. force-dynamic (not prerendered) so a build that cannot reach the
 * CMS can never freeze an incomplete sitemap into the deployment; the response
 * is edge-cached for an hour instead — see SITEMAP_HEADERS.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const GET = sitemapRoute(getPageEntries);
