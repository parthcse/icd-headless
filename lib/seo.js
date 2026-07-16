import client from "./apollo-client";
import {
  SEO_BY_URI_QUERY,
  SEO_META_BY_URI_QUERY,
  CONTENT_TYPE_ARCHIVE_SEO_QUERY,
  PAGE_SCHEMA_DATA_BY_URI_QUERY,
} from "../graphql/seoQueries";

// Normalize a URL/path down to its pathname with a single trailing slash.
function normPath(u) {
  if (!u) return "";
  const path = String(u).replace(/^https?:\/\/[^/]+/, "");
  return path.endsWith("/") ? path : `${path}/`;
}

// Paths the FRONTEND should mark noindex — controlled here, on our side, NOT
// inherited from the CMS. The site is indexable by DEFAULT; add a path below
// (leading + trailing slash) to noindex it. This deliberately does not follow
// Yoast's noindex, so a WordPress "Discourage search engines" toggle (which
// keeps the cms.* backend hidden) can never noindex the whole live frontend.
const NOINDEX_PATHS = new Set(["/thank-you/"]);

// Canonical host for the public frontend. Yoast returns an EMPTY canonical over
// GraphQL, so every page falls back to a self-referencing canonical on this origin.
const PUBLIC_ORIGIN = "https://www.icecubedigital.com";

// Pull the JSON-LD (@graph) out of a Yoast `fullHead` HTML blob.
function extractJsonLd(fullHead) {
  if (!fullHead) return "";
  const m = fullHead.match(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/i);
  return m ? m[1].trim() : "";
}

// Clean Yoast's per-page @graph for the headless frontend:
//  - drop the WebSite node — our site-wide schema (lib/site-schema.js) is the
//    authoritative WebSite, and Yoast's also carries a SearchAction for a
//    WordPress /?s= search page that doesn't exist on the headless site,
//  - strip any remaining SearchAction (the site has no search),
//  - point remaining @ids/URLs at the public www host (keep /wp-content/ media on the CMS).
function cleanYoastSchema(raw) {
  if (!raw) return raw;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed["@graph"])) {
      parsed["@graph"] = parsed["@graph"]
        .filter((n) => n["@type"] !== "WebSite")
        .map((n) => {
          if (Array.isArray(n.potentialAction)) {
            const pa = n.potentialAction.filter((a) => a["@type"] !== "SearchAction");
            if (pa.length) n.potentialAction = pa;
            else delete n.potentialAction;
          }
          // On the home page Yoast emits a single-crumb BreadcrumbList —
          // [{ position: 1, name: "Home" }] with no `item`, because it treats the
          // last crumb as the current page. With only one crumb that leaves it
          // invalid ("Missing field item"). REPAIR it (rather than drop it) by
          // adding item = the page's own URL (the breadcrumb @id minus #breadcrumb).
          // Deeper pages have 2+ crumbs where only the last omits `item` (valid per
          // Google) — those are left untouched.
          if (
            n["@type"] === "BreadcrumbList" &&
            Array.isArray(n.itemListElement) &&
            n.itemListElement.length === 1
          ) {
            const pageUrl = String(n["@id"] || "").replace(/#breadcrumb$/, "") || `${PUBLIC_ORIGIN}/`;
            n.itemListElement = n.itemListElement.map((li) =>
              li && !li.item ? { ...li, item: pageUrl } : li
            );
          }
          return n;
        });
      raw = JSON.stringify(parsed);
    }
  } catch {
    /* not parseable — fall through to the plain host rewrite */
  }
  return raw.replace(/https:\/\/cms\.icecubedigital\.com(?!\/wp-content)/g, PUBLIC_ORIGIN);
}

// Yoast exposes CPT *archive* SEO only via the root seo.contentTypes query, so
// singular pages (nodeByUri) miss it. Match the requested URI to an archive.
async function getArchiveSchemaByUri(uri) {
  try {
    const { data } = await client.query({
      query: CONTENT_TYPE_ARCHIVE_SEO_QUERY,
      fetchPolicy: "no-cache",
    });
    const target = normPath(uri);
    const types = data?.seo?.contentTypes || {};
    for (const key of Object.keys(types)) {
      const a = types[key]?.archive;
      if (a?.hasArchive && normPath(a.archiveLink) === target) {
        return extractJsonLd(a.fullHead);
      }
    }
  } catch {
    /* ignore */
  }
  return "";
}

/**
 * Raw Yoast JSON-LD schema (@graph) string for a WordPress URL, e.g. "/about-us/".
 * Returns "" if unavailable so callers can render nothing. `uri` should be the
 * WP path with a trailing slash ("/" for the home page). Falls back to CPT
 * archive SEO (e.g. /case-studies/) when the URL isn't a singular content node.
 */
export async function getYoastSchemaByUri(uri) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || !uri) return "";
  try {
    const { data } = await client.query({
      query: SEO_BY_URI_QUERY,
      variables: { uri },
      fetchPolicy: "no-cache",
    });
    const raw = data?.nodeByUri?.seo?.schema?.raw;
    if (raw) return cleanYoastSchema(raw);
  } catch {
    /* fall through to archive lookup */
  }
  return cleanYoastSchema(await getArchiveSchemaByUri(uri));
}

/**
 * Raw per-page SEO schema markup from the ACF `seoSchemaData` field
 * (field group GraphQL type `pageFields`). Returns the stored string verbatim
 * (usually a full <script type="application/ld+json">…</script> block), or ""
 * when the page has no value / isn't a Page. `uri` is the WP path with a
 * trailing slash (e.g. "/ai-in-ecommerce-solutions/").
 */
export async function getPageSchemaByUri(uri) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || !uri) return "";
  try {
    const { data } = await client.query({
      query: PAGE_SCHEMA_DATA_BY_URI_QUERY,
      variables: { uri },
      fetchPolicy: "no-cache",
    });
    const raw = data?.nodeByUri?.pageFields?.seoSchemaData;
    return typeof raw === "string" ? raw.trim() : "";
  } catch {
    return "";
  }
}

/**
 * Yoast SEO meta for a WordPress URL, shaped as a Next.js Metadata object
 * (title, description, canonical, openGraph, twitter, robots). Returns `null`
 * when unavailable so callers can fall back to their own defaults. `uri` should
 * be the WP path with a trailing slash (e.g. "/ai-in-ecommerce-solutions/").
 */
export async function getYoastMetadataByUri(uri) {
  const forceNoindex = NOINDEX_PATHS.has(normPath(uri));
  const noindexMeta = () => (forceNoindex ? { robots: { index: false, follow: true } } : null);
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || !uri) return noindexMeta();
  try {
    const { data } = await client.query({
      query: SEO_META_BY_URI_QUERY,
      variables: { uri },
      fetchPolicy: "no-cache",
    });
    const seo = data?.nodeByUri?.seo;
    if (!seo || (!seo.title && !seo.metaDesc)) return noindexMeta();

    const meta = {};
    if (seo.title) meta.title = seo.title;
    if (seo.metaDesc) meta.description = seo.metaDesc;
    // Always emit a canonical. Yoast's canonical comes back empty over GraphQL,
    // so fall back to a self-referencing www URL for this path. Reused for og:url,
    // since Yoast's opengraphUrl still points at the cms.* host.
    const canonical = seo.canonical || `${PUBLIC_ORIGIN}${normPath(uri)}`;
    meta.alternates = { canonical };
    // Indexable by default: the frontend owns its robots directive and does NOT
    // inherit the CMS's noindex. Only our NOINDEX_PATHS are marked noindex,follow.
    if (forceNoindex) meta.robots = { index: false, follow: true };

    const ogImg = seo.opengraphImage?.sourceUrl;
    meta.openGraph = {
      title: seo.opengraphTitle || seo.title || undefined,
      description: seo.opengraphDescription || seo.metaDesc || undefined,
      url: canonical,
      siteName: seo.opengraphSiteName || undefined,
      type: seo.opengraphType === "article" ? "article" : "website",
      ...(ogImg ? { images: [{ url: ogImg }] } : {}),
    };

    const twImg = seo.twitterImage?.sourceUrl;
    if (seo.twitterTitle || seo.twitterDescription || twImg) {
      meta.twitter = {
        card: "summary_large_image",
        ...(seo.twitterTitle ? { title: seo.twitterTitle } : {}),
        ...(seo.twitterDescription ? { description: seo.twitterDescription } : {}),
        ...(twImg ? { images: [twImg] } : {}),
      };
    }
    return meta;
  } catch {
    return noindexMeta();
  }
}
