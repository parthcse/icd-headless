/**
 * Services data registry.
 *
 * HOW TO ADD A NEW SERVICE PAGE:
 *   1. Create lib/services/your-slug.js  (copy white-label-wordpress.js as a template)
 *   2. import it below
 *   3. Add it to MAP
 *   That's it — the route, metadata, and all sections are automatic.
 *
 * HOW TO ADD A NEW SECTION TO ONE PAGE:
 *   1. Build the section component in components/services/
 *   2. Add it to SECTION_RENDERERS (and DEFAULT_SECTION_ORDER) in app/[slug]/page.js
 *   3. Add the yourSection key only to the service files that need it — others skip it automatically.
 *
 * HOW TO REORDER SECTIONS ON ONE PAGE:
 *   By default, sections render top-to-bottom in the SAME ORDER their keys
 *   are written in this data file — just reorder the keys (e.g. move
 *   `facility` above `banner`'s sibling `achievements`) and the page follows.
 *   `getQuote` and `weServe` have no data block, so they default to their
 *   historical positions (after clientSuccess, and before seoSay) unless you
 *   add `getQuote: true` / `weServe: true` as keys to place them explicitly.
 *   For full manual control, set `sectionOrder: [...]` to an array of section
 *   keys (banner, facility, achievements, clientSay, clientSuccess, getQuote,
 *   textBox, whyChoose, clientRetention, development, offers, partner,
 *   partnerSecondary, pricing, cta, clientTrust, qualityWebsites,
 *   qualityWebsitesSecondary, developmentStep, information, faq, ourClients,
 *   weServe, seoSay) — this overrides the key-order behavior entirely.
 *
 * @typedef {Object} ServiceData
 * @property {string} slug
 * @property {string} pageTitle
 * @property {string} metaDescription
 * @property {string[]} [sectionOrder]
 * @property {Object} banner
 * @property {Object} [achievements]
 * @property {Object} [clientSuccess]
 * @property {Object} [whyChoose]
 * @property {Object} [clientRetention]
 * @property {Object} [development]
 * @property {Object} [offers]
 * @property {Object} [partner]
 * @property {Object} [pricing]
 * @property {Object} [cta]
 * @property {Object} [clientTrust]
 * @property {Object} [qualityWebsites]
 * @property {Object} [developmentStep]
 * @property {Object} [faq]
 * @property {Object} [ourClients]
 * @property {Object} [seoSay]
 */

import WhiteLabelWordPressDevelopment from "./white-label-wordpress";
import AiInEcommerceSolutions from "./ai-in-ecommerce-solutions";
// import woocommerceDevelopment from "./woocommerce-development";
// import shopifyDevelopment from "./shopify-development";
// Add new service imports here ↑

/** @type {Record<string, ServiceData>} */
const MAP = {
  "white-label-wordpress-development": WhiteLabelWordPressDevelopment,
  "ai-in-ecommerce-solutions": AiInEcommerceSolutions,
  // "woocommerce-development": woocommerceDevelopment,
  // "shopify-development": shopifyDevelopment,
  // Add new entries here ↑ (key = URL slug, must match the file's slug field)
};

export const SERVICES_SLUGS = Object.keys(MAP);

/** @param {string} slug @returns {ServiceData | null} */
export function getServiceData(slug) {
  return MAP[slug] ?? null;
}
