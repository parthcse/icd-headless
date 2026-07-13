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

  return (
    <>
      {bodies.map((body, i) => (
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
