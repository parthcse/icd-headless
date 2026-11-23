/**
 * Blog URLs retired for good — served as HTTP 410 Gone by middleware.js.
 *
 * 410 (not 404) tells search engines the removal is deliberate and permanent,
 * so the URL drops out of the index faster and is not re-crawled hopefully.
 * Deliberately NOT redirects: these posts have no successor page, and a 301 to
 * something unrelated is worse for users and for search than an honest "gone".
 *
 * ── HOW TO ADD MORE ────────────────────────────────────────────────────────
 * Append the path with a leading AND trailing slash. Two things read this list
 * automatically:
 *   • middleware.js      — returns the 410
 *   • lib/sitemap-sources.js — keeps the URL out of every XML sitemap
 *
 * A path here must NOT also appear in lib/redirects.mjs: next.config's
 * redirects() runs BEFORE middleware, so the 301 would win and the 410 would
 * never fire.
 *
 * ── 2026-11-23 ─────────────────────────────────────────────────────────────
 * First batch — 18 blog posts retired at the SEO team's request.
 */
export const GONE_PATHS = new Set([
  "/blog/ai-click-fraud-on-ecommerce-websites-how-to-avoid-it/",
  "/blog/benefits-of-subscription-based-ecommerce-model/",
  "/blog/easy-days-for-ecommerce-are-over-whats-the-next/",
  "/blog/exploring-whats-new-and-changed-in-php-8-4/",
  "/blog/how-long-does-seo-take-to-work/",
  "/blog/how-push-notifications-can-help-you-reach-your-potential-customers/",
  "/blog/how-to-become-a-top-wordpress-developer/",
  "/blog/how-to-know-if-you-need-a-dedicated-server-for-your-magento-ecommerce-website/",
  "/blog/how-to-reduce-product-returns-for-your-online-store/",
  "/blog/how-to-upgrade-your-wordpress-website-to-php-7/",
  "/blog/how-virtual-sizing-solutions-boost-conversion-rates-for-fashion-websites/",
  "/blog/the-difference-between-remarketing-vs-retargeting/",
  "/blog/what-is-bounce-rate-how-to-reduce-it-for-your-ecommerce-website/",
  "/blog/what-is-life-time-value-of-customer-and-why-it-matters-the-most/",
  "/blog/why-does-your-company-require-a-store-locator/",
  "/blog/why-your-web-designers-and-developers-should-be-working-together/",
  "/blog/woocommerce-vs-bigcommerce/",
  "/blog/youtube-seo/",
]);

/** True when `path` should be served as 410 Gone. Tolerates a missing trailing slash. */
export function isGone(path) {
  if (!path) return false;
  return GONE_PATHS.has(path.endsWith("/") ? path : `${path}/`);
}

/**
 * Body served with the 410. Plain HTML with inline styles on purpose: this is
 * returned from proxy.js, which runs before React and cannot use the app's
 * prebuilt stylesheet.
 */
export const GONE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Gone — Icecube Digital</title>
<style>
  :root { color-scheme: dark }
  body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
         background:#000; color:#fff; text-align:center; padding:24px;
         font-family:"Gilroy","Segoe UI",Helvetica,Arial,sans-serif }
  main { max-width:34rem }
  h1 { font-size:clamp(1.75rem,1.2rem+2vw,2.5rem); margin:0 0 .5rem; font-weight:600 }
  p { color:#b8c6c2; line-height:1.6; margin:0 0 1.75rem }
  a { display:inline-block; background:#F17E3F; color:#000; text-decoration:none;
      font-weight:600; padding:.75rem 1.5rem; border-radius:999px }
</style>
</head>
<body>
  <main>
    <h1>This page is gone</h1>
    <p>This article has been retired and will not be coming back. You may find what you need on our blog.</p>
    <a href="/blog/">Go to the blog</a>
  </main>
</body>
</html>`;
