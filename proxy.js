import { NextResponse } from "next/server";

/**
 * Sitemap + llms.txt proxy for the headless setup. (Next.js 16 "proxy" file
 * convention — formerly `middleware`.)
 *
 * The Next app is live at the public domain, but the WordPress/Yoast sitemaps
 * live on the CMS subdomain (cms.icecubedigital.com). Yoast generates a sitemap
 * index (/sitemap.xml → /sitemap_index.xml) plus one sub-sitemap per post type /
 * taxonomy (post-sitemap.xml, page-sitemap.xml, …). We proxy all of them through
 * the public domain and rewrite the CMS host on page/sitemap URLs to the public
 * host — while leaving /wp-content/ (media) on the CMS where it's served.
 *
 * We also proxy Yoast's XSL stylesheet at a same-origin path (/sitemap.xsl):
 * browsers block cross-origin XSLT, so the styled sitemap view only works when
 * the .xsl is served from the same origin as the .xml. The stylesheet is
 * self-contained (inline CSS, no sub-resources), so proxying the one file is
 * enough to restore the pretty Yoast table view.
 */
const CMS_ORIGIN = "https://cms.icecubedigital.com";
// Always emit the canonical www origin in the sitemap (matches the site canonical).
const PUBLIC_ORIGIN = "https://www.icecubedigital.com";
// Same-origin alias for Yoast's stylesheet + the real file on the CMS.
const XSL_PATH = "/sitemap.xsl";
const XSL_UPSTREAM = "/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl";

// /sitemap.xml, /sitemap_index.xml, or any <type>-sitemap<N>.xml
const SITEMAP_RE = /^\/(sitemap(_index)?|[a-z0-9_-]+-sitemap\d*)\.xml$/i;

// Sub-sitemaps to drop from the index (and 404 on a direct hit). Basename only.
const EXCLUDED_SITEMAPS = ["cs_category-sitemap.xml"];

const UPSTREAM_HEADERS = {
  "user-agent": "Mozilla/5.0 (compatible; IcecubeSitemapProxy/1.0)",
  accept: "application/xml,text/xml;q=0.9,*/*;q=0.8",
};

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // Serve Yoast's sitemap stylesheet from OUR origin so cross-origin XSLT isn't blocked.
  if (pathname === XSL_PATH) {
    let res;
    try {
      res = await fetch(`${CMS_ORIGIN}${XSL_UPSTREAM}`, { headers: UPSTREAM_HEADERS, redirect: "follow" });
    } catch {
      return NextResponse.next();
    }
    if (!res.ok) return NextResponse.next();
    return new NextResponse(await res.text(), {
      status: 200,
      headers: {
        "content-type": "text/xsl; charset=UTF-8",
        "cache-control": "public, max-age=86400, s-maxage=604800",
      },
    });
  }

  // Proxy Yoast's llms.txt (an LLM-facing site overview) from the CMS. Yoast
  // already emits www URLs inside it, so the rewrite is defensive (no-op today).
  if (pathname === "/llms.txt") {
    let res;
    try {
      res = await fetch(`${CMS_ORIGIN}/llms.txt`, { headers: UPSTREAM_HEADERS, redirect: "follow" });
    } catch {
      return NextResponse.next();
    }
    if (!res.ok) return NextResponse.next();
    const txt = (await res.text()).replace(/https:\/\/cms\.icecubedigital\.com(?!\/wp-content)/g, PUBLIC_ORIGIN);
    return new NextResponse(txt, {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=UTF-8",
        "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  }

  if (!SITEMAP_RE.test(pathname)) return NextResponse.next();

  // Match Yoast's default: /sitemap.xml is a 301 redirect to the real index at
  // /sitemap_index.xml — NOT a second copy of it. Serving the index content at
  // both URLs (what redirect:"follow" did) looks like duplicate sitemaps; a 301
  // makes /sitemap_index.xml the single canonical sitemap.
  if (pathname === "/sitemap.xml") {
    return NextResponse.redirect(new URL("/sitemap_index.xml", request.url), 301);
  }

  // Excluded sub-sitemaps: 404 on direct access so they're fully removed.
  if (EXCLUDED_SITEMAPS.includes(pathname.slice(1))) {
    return new NextResponse("Not Found", { status: 404, headers: { "content-type": "text/plain" } });
  }

  let upstream;
  try {
    upstream = await fetch(`${CMS_ORIGIN}${pathname}`, { headers: UPSTREAM_HEADERS, redirect: "follow" });
  } catch {
    return NextResponse.next();
  }
  if (!upstream.ok) return NextResponse.next();

  let xml = await upstream.text();
  // Point the stylesheet at our same-origin proxy (Yoast's lives on the CMS
  // origin → cross-origin XSLT is blocked, blanking / hanging the styled view).
  xml = xml.replace(/<\?xml-stylesheet[\s\S]*?\?>/i, `<?xml-stylesheet type="text/xsl" href="${XSL_PATH}"?>`);
  // Rewrite CMS page + sub-sitemap URLs to the canonical www origin, but keep
  // /wp-content/ (media) pointing at the CMS where those assets live.
  xml = xml.replace(/https:\/\/cms\.icecubedigital\.com(?!\/wp-content)/g, PUBLIC_ORIGIN);
  // Drop excluded sub-sitemaps from the sitemap index.
  for (const name of EXCLUDED_SITEMAPS) {
    const esc = name.replace(/[.]/g, "\\.");
    xml = xml.replace(new RegExp(`\\s*<sitemap>\\s*<loc>[^<]*${esc}</loc>[\\s\\S]*?</sitemap>`, "gi"), "");
  }

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=UTF-8",
      "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}

export const config = {
  // Run on *.xml (sitemaps), the proxied stylesheet, and llms.txt; else untouched.
  matcher: ["/((?!_next|api).*\\.xml)", "/sitemap.xsl", "/llms.txt"],
};
