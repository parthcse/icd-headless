import { getYoastSchemaByUri } from "@/lib/seo";

/**
 * Injects the page's Yoast SEO JSON-LD (@graph), fetched from WordPress by URI.
 * Async server component — drop `<YoastSchema uri="/about-us/" />` into a page.
 * Renders nothing if the schema can't be fetched.
 */
export default async function YoastSchema({ uri }) {
  const raw = await getYoastSchemaByUri(uri);
  if (!raw) return null;
  // Guard against a stray "</script>" in any field breaking out of the tag.
  const safe = raw.replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safe }} />;
}
