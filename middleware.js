import { NextResponse } from "next/server";

/**
 * Sitemap proxy for the headless setup.
 *
 * The Next app is live at the public domain, but the WordPress/Yoast sitemaps
 * live on the CMS subdomain (cms.icecubedigital.com). Yoast generates a sitemap
 * index (/sitemap.xml → /sitemap_index.xml) plus one sub-sitemap per post type /
 * taxonomy (post-sitemap.xml, page-sitemap.xml, …). We proxy all of them through
 * the public domain and rewrite the CMS host on page/sitemap URLs to the public
 * host — while leaving /wp-content/ (media + the XSL stylesheet) on the CMS,
 * where those assets are actually served.
 */
const CMS_ORIGIN = "https://cms.icecubedigital.com";
// Always emit the canonical www origin in the sitemap (matches the site canonical),
// regardless of which host requested it.
const PUBLIC_ORIGIN = "https://www.icecubedigital.com";

// /sitemap.xml, /sitemap_index.xml, or any <type>-sitemap<N>.xml
const SITEMAP_RE = /^\/(sitemap(_index)?|[a-z0-9_-]+-sitemap\d*)\.xml$/i;

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (!SITEMAP_RE.test(pathname)) return NextResponse.next();

  let upstream;
  try {
    upstream = await fetch(`${CMS_ORIGIN}${pathname}`, {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; IcecubeSitemapProxy/1.0)",
        accept: "application/xml,text/xml;q=0.9,*/*;q=0.8",
      },
      redirect: "follow",
    });
  } catch {
    return NextResponse.next();
  }
  if (!upstream.ok) return NextResponse.next();

  let xml = await upstream.text();
  // Rewrite CMS page + sub-sitemap URLs to the canonical www origin, but keep
  // /wp-content/ (media, XSL) pointing at the CMS where those assets live.
  xml = xml.replace(/https:\/\/cms\.icecubedigital\.com(?!\/wp-content)/g, PUBLIC_ORIGIN);

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=UTF-8",
      "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}

export const config = {
  // Only run on *.xml requests (sitemaps); everything else is untouched.
  matcher: ["/((?!_next|api).*\\.xml)"],
};
