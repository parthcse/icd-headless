/**
 * Services data registry.
 *
 * HOW TO ADD A NEW SERVICE PAGE:
 *   1. Create lib/services/your-slug.js  (copy white-label-wordpress-development.js as a template)
 *   2. import it below
 *   3. Add it to MAP
 *   That's it — the route, metadata, and all sections are automatic.
 *
 * HOW TO ADD A NEW SECTION TO ONE PAGE:
 *   1. Build the section component in components/services/
 *   2. Add it to SECTION_RENDERERS in app/[slug]/page.js
 *   3. Add the yourSection key only to the service files that need it — others skip it automatically.
 *
 * HOW TO REORDER SECTIONS ON ONE PAGE:
 *   By default, sections render top-to-bottom in the SAME ORDER their keys
 *   are written in this data file — just reorder the keys (e.g. move
 *   `milestone` above `banner`'s sibling `achievements`) and the page follows.
 *   `getQuote` and `weServe` have no data block, so they default to their
 *   historical positions (after portfolio, and before ceoCta) unless you
 *   add `getQuote: true` / `weServe: true` as keys to place them explicitly.
 *   For full manual control, set `sectionOrder: [...]` to an array of section
 *   keys. The authoritative list of valid keys is SECTION_RENDERERS in
 *   app/[slug]/page.js — any key defined there may be used here. Providing
 *   sectionOrder overrides the key-order behavior entirely.
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
 * @property {Object} [milestone]
 * @property {Object} [plainText]
 * @property {Object} [infoBox]
 * @property {Object} [tableCompare]
 * @property {Object} [tableCompareAdvanced]
 * @property {Object} [cta]
 * @property {Object} [topIconBox]
 * @property {Object} [leftIconBox]
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
import AnswerEngineOptimizationServices from "./answer-engine-optimization-services";
import MarketingAutomationServices from "./marketing-automation-services";
import DigitalMarketingService from "./digital-marketing-service";
import ProfessionalSeoService from "./professional-seo-service";
import PpcService from "./ppc-service";
import ConversionRateOptimization from "./conversion-rate-optimization";
import EmailMarketingService from "./email-marketing-service";
import HireSeoExperts from "./hire-seo-experts";
import ShopifyDevelopment from "./shopify-development";
import ShopifyWebsiteDesign from "./shopify-website-design";
import ShopifyPlusDevelopment from "./shopify-plus-development";
import HireShopifyPlusDevelopers from "./hire-shopify-plus-developers";
import ShopifyPlusSeoServices from "./shopify-plus-seo-services";
import ShopifyPlusSupport from "./shopify-plus-support";
import HireShopifyDevelopers from "./hire-shopify-developers";
import HireShopifyDesigners from "./hire-shopify-designers";
import ShopifySeoService from "./shopify-seo-service";
import ShopifyMaintenance from "./shopify-maintenance";
import WoocommerceDevelopment from "./woocommerce-development";
import HireWoocommerceDevelopers from "./hire-woocommerce-developers";
import WoocommerceSeoService from "./woocommerce-seo-service";
import WebflowDevelopment from "./webflow-development";
import WebflowMaintenance from "./webflow-maintenance";
import HireWebflowDevelopers from "./hire-webflow-developers";
import WhiteLabelWebDesignAndDevelopment from "./white-label-web-design-and-development";
import WhiteLabelMagentoDevelopment from "./white-label-magento-development";
import WhiteLabelShopifyDevelopment from "./white-label-shopify-development";
import WhiteLabelSeoServices from "./white-label-seo-services";
import WhiteLabelPpcServices from "./white-label-ppc-services";
import WhiteLabelWordPressMaintenance from "./white-label-wordpress-maintenance";
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
  "answer-engine-optimization-aeo-services": AnswerEngineOptimizationServices,
  "marketing-automation-services": MarketingAutomationServices,
  "digital-marketing-service": DigitalMarketingService,
  "seo-search-engine-optimization": ProfessionalSeoService,
  "ppc-management-services": PpcService,
  "conversion-rate-optimization-services": ConversionRateOptimization,
  "email-marketing-company": EmailMarketingService,
  "hire-seo-experts": HireSeoExperts,
  "shopify-development-services": ShopifyDevelopment,
  "shopify-website-design": ShopifyWebsiteDesign,
  "shopify-plus-development-agency": ShopifyPlusDevelopment,
  "hire-shopify-plus-developers": HireShopifyPlusDevelopers,
  "shopify-plus-seo-services": ShopifyPlusSeoServices,
  "shopify-plus-support-and-maintenance-services": ShopifyPlusSupport,
  "hire-shopify-developers-experts": HireShopifyDevelopers,
  "hire-shopify-website-designers": HireShopifyDesigners,
  "shopify-seo-service": ShopifySeoService,
  "shopify-maintenance-services": ShopifyMaintenance,
  "woocommerce-development-services": WoocommerceDevelopment,
  "hire-woocommerce-developers-experts": HireWoocommerceDevelopers,
  "woocommerce-seo-service": WoocommerceSeoService,
  "webflow-development-agency": WebflowDevelopment,
  "webflow-maintenance-services": WebflowMaintenance,
  "hire-webflow-developers": HireWebflowDevelopers,
  "white-label-web-design-and-development-services": WhiteLabelWebDesignAndDevelopment,
  "white-label-magento-development": WhiteLabelMagentoDevelopment,
  "white-label-shopify-development": WhiteLabelShopifyDevelopment,
  "white-label-seo-services": WhiteLabelSeoServices,
  "white-label-ppc-services": WhiteLabelPpcServices,
  "white-label-wordpress-maintenance-services": WhiteLabelWordPressMaintenance,
  // Add new entries here ↑ (key = URL slug, must match the file's slug field)
};

export const SERVICES_SLUGS = Object.keys(MAP);

/** @param {string} slug @returns {ServiceData | null} */
export function getServiceData(slug) {
  return MAP[slug] ?? null;
}
