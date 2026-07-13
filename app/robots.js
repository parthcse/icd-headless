/**
 * robots.txt for the live headless site. WordPress/Yoast used to serve this on
 * the old domain; now the Next app owns it. Points crawlers at the proxied
 * sitemap and declares the canonical www host.
 */
const SITE = "https://www.icecubedigital.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
