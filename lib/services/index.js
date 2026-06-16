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
 *   historical positions (after portfolio, and before ceoCta) unless you
 *   add `getQuote: true` / `weServe: true` as keys to place them explicitly.
 *   For full manual control, set `sectionOrder: [...]` to an array of section
 *   keys (banner, facility, achievements, testimonials, portfolio, getQuote,
 *   textBox, textBoxSecondary, textBoxTertiary, textBoxQuaternary, checkList,
 *   imageText, imageTextSecondary, imageTextTertiary, imageTextQuaternary,
 *   development, offers, offersSecondary,
 *   infoBoxes, infoBoxesSecondary, infoBoxesTertiary, pricing, seoPricing, wpPricing, seoAuditForm,
 *   cta, iconCards, iconCardsSecondary, featureCards, featureCardsSecondary, processSteps,
 *   information, faq, faqSecondary, ourClients, weServe, ceoCta) — this overrides the key-order
 *   behavior entirely.
 *
 * @typedef {Object} ServiceData
 * @property {string} slug
 * @property {string} pageTitle
 * @property {string} metaDescription
 * @property {string[]} [sectionOrder]
 * @property {Object} banner
 * @property {Object} [achievements]
 * @property {Object} [portfolio]
 * @property {Object} [testimonials]
 * @property {Object} [checkList]
 * @property {Object} [imageText]
 * @property {Object} [development]
 * @property {Object} [offers]
 * @property {Object} [infoBoxes]
 * @property {Object} [pricing]
 * @property {Object} [cta]
 * @property {Object} [iconCards]
 * @property {Object} [featureCards]
 * @property {Object} [processSteps]
 * @property {Object} [information]
 * @property {Object} [faq]
 * @property {Object} [ourClients]
 * @property {Object} [ceoCta]
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
import MagentoSeoService from "./magento-seo-service";
import MagentoMaintenance from "./magento-maintenance";
import WordPressDevelopment from "./wordpress-development";
import WordPressWebsiteDesign from "./wordpress-website-design";
import WordPressVipServices from "./wordpress-vip-services";
import HireWordPressDevelopers from "./hire-wordpress-developers";
import HireWordPressVipDevelopers from "./hire-wordpress-vip-developers";
import WordPressSeoService from "./wordpress-seo-service";
import WordPressMaintenance from "./wordpress-maintenance";
import WordPressVipMaintenance from "./wordpress-vip-maintenance";
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
  "magento-seo-services": MagentoSeoService,
  "magento-maintenance-services": MagentoMaintenance,
  "wordpress-development-services": WordPressDevelopment,
  "wordpress-website-design-company": WordPressWebsiteDesign,
  "wordpress-vip": WordPressVipServices,
  "hire-wordpress-developers-designers": HireWordPressDevelopers,
  "hire-wordpress-vip-developers": HireWordPressVipDevelopers,
  "wordpress-seo-service": WordPressSeoService,
  "wordpress-maintenance-service": WordPressMaintenance,
  "wordpress-vip-support-and-maintenance": WordPressVipMaintenance,
  // "woocommerce-development": woocommerceDevelopment,
  // "shopify-development": shopifyDevelopment,
  // Add new entries here ↑ (key = URL slug, must match the file's slug field)
};

export const SERVICES_SLUGS = Object.keys(MAP);

/** @param {string} slug @returns {ServiceData | null} */
export function getServiceData(slug) {
  return MAP[slug] ?? null;
}
