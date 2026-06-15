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
 *   textBox, textBoxSecondary, textBoxTertiary, textBoxQuaternary, whyChoose,
 *   clientRetention, clientRetentionSecondary, development, offers, offersSecondary,
 *   partner, partnerSecondary, partnerTertiary, pricing, seoPricing, seoAuditForm,
 *   cta, clientTrust, clientTrustSecondary, qualityWebsites, qualityWebsitesSecondary, developmentStep,
 *   information, faq, ourClients, weServe, seoSay) — this overrides the key-order
 *   behavior entirely.
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

import WhiteLabelWordPressDevelopment from "./white-label-wordpress-development";
import AiInEcommerceSolutions from "./ai-in-ecommerce";
import EcommerceWebsiteDesignServices from "./ecommerce-web-design";
import EcommerceWebsiteDevelopmentServices from "./ecommerce-web-development";
import HireEcommerceDevelopers from "./hire-ecommerce-developers";
import EcommerceSeoServices from "./ecommerce-seo-services";
import MagentoDevelopment from "./magento-development";
import Magento2Development from "./magento-2-development";
import MagentoWebsiteDesign from "./magento-website-design";
import HireMagento2Migration from "./magento-2-migration";
import HireMagento2Developers from "./hire-magento-2-developers";
// import woocommerceDevelopment from "./woocommerce-development";
// import shopifyDevelopment from "./shopify-development";
// Add new service imports here ↑

/** @type {Record<string, ServiceData>} */
const MAP = {
  "white-label-wordpress-development": WhiteLabelWordPressDevelopment,
  "ai-in-ecommerce-solutions": AiInEcommerceSolutions,
  "ecommerce-website-design-services": EcommerceWebsiteDesignServices,
  "ecommerce-website-development-services": EcommerceWebsiteDevelopmentServices,
  "hire-ecommerce-designers-developers": HireEcommerceDevelopers,
  "ecommerce-seo-services": EcommerceSeoServices,
  "magento-development-services": MagentoDevelopment,
  "magento-2-development-services": Magento2Development,
  "magento-website-design": MagentoWebsiteDesign,
  "magento-2-upgrade-and-migration-services": HireMagento2Migration,
  "hire-magento-2-developers-programmers": HireMagento2Developers,
  // "woocommerce-development": woocommerceDevelopment,
  // "shopify-development": shopifyDevelopment,
  // Add new entries here ↑ (key = URL slug, must match the file's slug field)
};

export const SERVICES_SLUGS = Object.keys(MAP);

/** @param {string} slug @returns {ServiceData | null} */
export function getServiceData(slug) {
  return MAP[slug] ?? null;
}
