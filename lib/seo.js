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

// Pull the JSON-LD (@graph) out of a Yoast `fullHead` HTML blob.
function extractJsonLd(fullHead) {
  if (!fullHead) return "";
  const m = fullHead.match(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/i);
  return m ? m[1].trim() : "";
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
    if (raw) return raw;
  } catch {
    /* fall through to archive lookup */
  }
  return getArchiveSchemaByUri(uri);
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
    if (seo.canonical) meta.alternates = { canonical: seo.canonical };
    // Indexable by default: the frontend owns its robots directive and does NOT
    // inherit the CMS's noindex. Only our NOINDEX_PATHS are marked noindex,follow.
    if (forceNoindex) meta.robots = { index: false, follow: true };

    const ogImg = seo.opengraphImage?.sourceUrl;
    meta.openGraph = {
      title: seo.opengraphTitle || seo.title || undefined,
      description: seo.opengraphDescription || seo.metaDesc || undefined,
      url: seo.opengraphUrl || undefined,
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
