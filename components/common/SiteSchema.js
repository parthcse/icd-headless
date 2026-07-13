import { siteSchemas } from "@/lib/site-schema";

/**
 * Renders the site-wide JSON-LD structured data on every page/post. Included
 * once in the root layout (app/layout.js). Edit the actual schema data in
 * lib/site-schema.js — not here.
 *
 * `<` is escaped to < so the JSON can never prematurely close the
 * <script> tag (standard JSON-LD injection safety).
 */
export default function SiteSchema() {
  return (
    <>
      {siteSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
