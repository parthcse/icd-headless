/**
 * Anchor attributes for links rendered from page data (the `{ text, href }`
 * parts used by every renderParts helper in components/services/**).
 *
 * SEO policy, in one place:
 *  • internal links  → no rel, same tab. They pass authority around the site.
 *  • third-party links → rel="nofollow noopener noreferrer", new tab.
 *
 * "Internal" means a path ("/blinds-website-design-development/") OR an
 * absolute URL on our own host. That second case matters: source documents
 * always supply full https://www.icecubedigital.com/... URLs and those get
 * converted to paths by hand, so one slipping through is a question of when,
 * not if. Treating it as external would nofollow our own page and open it in a
 * new tab — exactly backwards.
 *
 * noopener/noreferrer stay on external links: target="_blank" without noopener
 * lets the opened page reach back through window.opener.
 */
const OWN_HOSTS = ["icecubedigital.com"];

export function linkAttrs(href) {
  const url = String(href ?? "");

  // Paths, anchors, mailto:, tel: — all ours, or not a web page at all.
  if (!/^https?:\/\//i.test(url)) return {};

  let host = "";
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    // Unparseable absolute URL — treat as third party, the safer default.
    return { target: "_blank", rel: "nofollow noopener noreferrer" };
  }

  const isOwn = OWN_HOSTS.some((own) => host === own || host.endsWith(`.${own}`));
  return isOwn ? {} : { target: "_blank", rel: "nofollow noopener noreferrer" };
}

export default linkAttrs;
