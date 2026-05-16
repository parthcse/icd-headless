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
 *   2. Add {data.yourSection && <YourSection data={data.yourSection} />} in app/services/[slug]/page.js
 *   3. Add the yourSection key only to the service files that need it — others skip it automatically.
 *
 * @typedef {Object} ServiceData
 * @property {string} slug
 * @property {string} pageTitle
 * @property {string} metaDescription
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
// import woocommerceDevelopment from "./woocommerce-development";
// import shopifyDevelopment from "./shopify-development";
// Add new service imports here ↑

/** @type {Record<string, ServiceData>} */
const MAP = {
  "white-label-wordpress-development": WhiteLabelWordPressDevelopment,
  // "woocommerce-development": woocommerceDevelopment,
  // "shopify-development": shopifyDevelopment,
  // Add new entries here ↑ (key = URL slug, must match the file's slug field)
};

export const SERVICES_SLUGS = Object.keys(MAP);

/** @param {string} slug @returns {ServiceData | null} */
export function getServiceData(slug) {
  return MAP[slug] ?? null;
}
