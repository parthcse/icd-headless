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

/**
 * Escape raw control characters that sit INSIDE a JSON string literal.
 *
 * WordPress editors paste schema with real newlines/tabs inside string values,
 * which is invalid JSON — `JSON.parse` throws "Bad control character in string
 * literal". That used to make us give up and emit the block untouched, so its
 * aggregateRating survived and duplicated the site-wide one (and Google got
 * malformed JSON-LD). Escaping them first makes the block parseable so it can be
 * cleaned and re-emitted as valid JSON.
 */
function escapeControlChars(text) {
  let out = "";
  let inString = false;
  let escaped = false;
  for (const ch of text) {
    if (escaped) {
      out += ch;
      escaped = false;
      continue;
    }
    if (ch === "\\") {
      out += ch;
      escaped = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      out += ch;
      continue;
    }
    const code = ch.charCodeAt(0);
    if (inString && code < 0x20) {
      out += ch === "\n" ? "\\n" : ch === "\r" ? "\\r" : ch === "\t" ? "\\t" : `\\u${code.toString(16).padStart(4, "0")}`;
      continue;
    }
    out += ch;
  }
  return out;
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
  // Two passes: parse as-is, then retry after escaping raw control characters
  // (CMS-pasted schema is frequently invalid JSON for exactly that reason).
  // A block that still won't parse is DROPPED rather than emitted: it is broken
  // JSON-LD that Google can't use anyway, and emitting it re-introduces the
  // duplicate rating. Fix the source field in WordPress and it returns.
  const cleaned = bodies
    .map((body) => {
      for (const candidate of [body, escapeControlChars(body)]) {
        try {
          const parsed = JSON.parse(candidate);
          stripAggregateRating(parsed);
          return JSON.stringify(parsed);
        } catch {
          /* try the next candidate */
        }
      }
      return null;
    })
    .filter(Boolean);

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
