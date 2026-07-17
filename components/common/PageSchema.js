import { getPageSchemaByUri } from "@/lib/seo";

/**
 * Renders a page's own JSON-LD schema, pulled from the WordPress ACF
 * `seoSchemaData` field (see lib/seo.js → getPageSchemaByUri). Rendered near
 * the bottom of the page (before the footer). Renders nothing when the page
 * has no schema value.
 *
 * The stored value is normally a full <script type="application/ld+json">…</script>
 * block (possibly several). We extract the JSON body of each block and re-emit
 * it inside a clean React <script>. If the value has NO <script> wrapper, we
 * treat the whole value as the JSON body and wrap it — so the schema is always
 * valid even when the editor pasted only the JSON.
 *
 * @param {{ uri: string }} props - WP path with trailing slash, e.g. "/ai-in-ecommerce-solutions/".
 */
/**
 * Recursively delete every `aggregateRating` from a parsed JSON-LD node. The
 * per-page CMS schema (e.g. a Product) often carries its OWN aggregateRating,
 * which duplicates the site-wide LocalBusiness rating (lib/site-schema.js) and
 * makes Google report two ratings per page. The site-wide rating is kept as the
 * single source, so we strip it out of the per-page schema here.
 */
function stripAggregateRating(node) {
  if (Array.isArray(node)) {
    node.forEach(stripAggregateRating);
  } else if (node && typeof node === "object") {
    delete node.aggregateRating;
    Object.values(node).forEach(stripAggregateRating);
  }
}

export default async function PageSchema({ uri }) {
  const raw = await getPageSchemaByUri(uri);
  if (!raw) return null;

  const re = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
  const bodies = [];
  let m;
  while ((m = re.exec(raw))) {
    const body = m[1].trim();
    if (body) bodies.push(body);
  }
  // No <script> wrapper found → the raw value is the JSON body itself.
  if (bodies.length === 0) bodies.push(raw);

  // Remove any per-page aggregateRating so it doesn't duplicate the site-wide one.
  // Parse-and-strip when the body is valid JSON; leave unparseable bodies as-is.
  const cleaned = bodies.map((body) => {
    try {
      const parsed = JSON.parse(body);
      stripAggregateRating(parsed);
      return JSON.stringify(parsed);
    } catch {
      return body;
    }
  });

  return (
    <>
      {cleaned.map((body, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape any stray "</script>" so the JSON can't close the tag early.
          dangerouslySetInnerHTML={{ __html: body.replace(/<\/script>/gi, "<\\/script>") }}
        />
      ))}
    </>
  );
}
