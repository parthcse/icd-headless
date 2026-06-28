/**
 * Services data registry.
 *
 * HOW TO ADD A NEW SERVICE PAGE:
 *   1. Create lib/services/your-slug.js  (copy white-label/white-label-wordpress-development.js as a template)
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

import WhiteLabelWordPressDevelopment from "./white-label/white-label-wordpress-development";
import AiInEcommerceSolutions from "./ecommerce/ai-in-ecommerce";
import EcommerceWebsiteDesignServices from "./ecommerce/ecommerce-web-design";
import EcommerceWebsiteDevelopmentServices from "./ecommerce/ecommerce-web-development";
import HireEcommerceDevelopers from "./ecommerce/hire-ecommerce-developers";
import EcommerceSeoServices from "./ecommerce/ecommerce-seo-services";
import MagentoDevelopment from "./magento/magento-development";
import Magento2Development from "./magento/magento-2-development";
import MagentoWebsiteDesign from "./magento/magento-website-design";
import HireMagento2Migration from "./magento/magento-2-migration";
import HireMagento2Developers from "./magento/hire-magento-2-developers";
import MagentoSeoService from "./magento/magento-seo-service";
import MagentoMaintenance from "./magento/magento-maintenance";
import WordPressDevelopment from "./wordpress/wordpress-development";
import WordPressWebsiteDesign from "./wordpress/wordpress-website-design";
import WordPressVipServices from "./wordpress/wordpress-vip-services";
import HireWordPressDevelopers from "./wordpress/hire-wordpress-developers";
import HireWordPressVipDevelopers from "./wordpress/hire-wordpress-vip-developers";
import WordPressSeoService from "./wordpress/wordpress-seo-service";
import WordPressMaintenance from "./wordpress/wordpress-maintenance";
import WordPressVipMaintenance from "./wordpress/wordpress-vip-maintenance";
import AnswerEngineOptimizationServices from "./digital-marketing/answer-engine-optimization-services";
import MarketingAutomationServices from "./digital-marketing/marketing-automation-services";
import DigitalMarketingService from "./digital-marketing/digital-marketing-service";
import ProfessionalSeoService from "./digital-marketing/professional-seo-service";
import PpcService from "./digital-marketing/ppc-service";
import ConversionRateOptimization from "./digital-marketing/conversion-rate-optimization";
import EmailMarketingService from "./digital-marketing/email-marketing-service";
import HireSeoExperts from "./digital-marketing/hire-seo-experts";
import ShopifyDevelopment from "./shopify/shopify-development";
import ShopifyWebsiteDesign from "./shopify/shopify-website-design";
import ShopifyPlusDevelopment from "./shopify/shopify-plus-development";
import HireShopifyPlusDevelopers from "./shopify/hire-shopify-plus-developers";
import ShopifyPlusSeoServices from "./shopify/shopify-plus-seo-services";
import ShopifyPlusSupport from "./shopify/shopify-plus-support";
import HireShopifyDevelopers from "./shopify/hire-shopify-developers";
import HireShopifyDesigners from "./shopify/hire-shopify-designers";
import ShopifySeoService from "./shopify/shopify-seo-service";
import ShopifyMaintenance from "./shopify/shopify-maintenance";
import WoocommerceDevelopment from "./woocommerce/woocommerce-development";
import HireWoocommerceDevelopers from "./woocommerce/hire-woocommerce-developers";
import WoocommerceSeoService from "./woocommerce/woocommerce-seo-service";
import WebflowDevelopment from "./webflow/webflow-development";
import WebflowMaintenance from "./webflow/webflow-maintenance";
import HireWebflowDevelopers from "./webflow/hire-webflow-developers";
import WhiteLabelWebDesignAndDevelopment from "./white-label/white-label-web-design-and-development";
import WhiteLabelMagentoDevelopment from "./white-label/white-label-magento-development";
import WhiteLabelShopifyDevelopment from "./white-label/white-label-shopify-development";
import WhiteLabelSeoServices from "./white-label/white-label-seo-services";
import WhiteLabelPpcServices from "./white-label/white-label-ppc-services";
import WhiteLabelWordPressMaintenance from "./white-label/white-label-wordpress-maintenance";
import JewelryWebsiteDesignDevelopment from "./industry/industry-jewelry";
import FurnitureWebsiteDesignDevelopment from "./industry/industry-furniture";
import BlindsWebsiteDesignDevelopment from "./industry/industry-blinds-curtains";
import AutomotiveWebsiteDesign from "./industry/industry-automotive";
import FashionWebsiteDesign from "./industry/industry-fashion";
import MyMarketingAgencyIsntDeliveringResults from "./resources/our-approach/my-marketing-agency-isnt-delivering-results";
import MyWebsiteIsntAppearingOnGoogle from "./resources/our-approach/my-website-isnt-appearing-on-google";
import MyWebsiteIsntFuelingBusinessGrowth from "./resources/our-approach/my-website-isnt-fueling-business-growth";
import WhyMyWebsiteIsntConverting from "./resources/our-approach/why-my-website-isnt-converting";
import WhyIsMyWebsiteTrafficGoingDown from "./resources/our-approach/why-is-my-website-traffic-going-down";
import WhyMyWebsiteIsntDrivingLeads from "./resources/our-approach/why-my-website-isnt-driving-leads";
import HowMuchDoesAWebsiteCost from "./resources/pricing-guides/website-cost";
import HowMuchDoesSeoCost from "./resources/pricing-guides/seo-cost";
import HowMuchDoesPpcCost from "./resources/pricing-guides/ppc-cost";
import HowMuchDoesEmailMarketingCost from "./resources/pricing-guides/email-marketing-cost";
import HowMuchDoesSocialMediaManagementCost from "./resources/pricing-guides/social-media-management-cost";
import HowMuchDoesWordPressSeoCost from "./resources/pricing-guides/wordpress-seo-cost";
import HowMuchDoesShopifySeoCost from "./resources/pricing-guides/shopify-seo-cost";
import HowMuchDoesAWordPressWebsiteCost from "./resources/pricing-guides/wordpress-website-cost";
import HowMuchDoesMagentoWebsiteDevelopmentCost from "./resources/pricing-guides/magento-website-development-cost";
import HowMuchDoesShopifyWebsiteCost from "./resources/pricing-guides/shopify-website-cost";
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
  "jewelry-website-design-development": JewelryWebsiteDesignDevelopment,
  "furniture-website-design-development": FurnitureWebsiteDesignDevelopment,
  "blinds-website-design-development": BlindsWebsiteDesignDevelopment,
  "automotive-website-design": AutomotiveWebsiteDesign,
  "fashion-website-design": FashionWebsiteDesign,
  "my-marketing-agency-isnt-delivering-results": MyMarketingAgencyIsntDeliveringResults,
  "my-website-isnt-appearing-on-google": MyWebsiteIsntAppearingOnGoogle,
  "my-website-isnt-fueling-business-growth": MyWebsiteIsntFuelingBusinessGrowth,
  "why-my-website-isnt-converting": WhyMyWebsiteIsntConverting,
  "why-is-my-website-traffic-going-down": WhyIsMyWebsiteTrafficGoingDown,
  "why-my-website-isnt-driving-leads": WhyMyWebsiteIsntDrivingLeads,
  "how-much-does-a-website-cost": HowMuchDoesAWebsiteCost,
  "how-much-does-seo-cost": HowMuchDoesSeoCost,
  "how-much-does-ppc-cost": HowMuchDoesPpcCost,
  "how-much-does-email-marketing-cost": HowMuchDoesEmailMarketingCost,
  "how-much-does-social-media-management-cost": HowMuchDoesSocialMediaManagementCost,
  "how-much-does-wordpress-seo-cost": HowMuchDoesWordPressSeoCost,
  "how-much-does-shopify-seo-cost": HowMuchDoesShopifySeoCost,
  "how-much-does-a-wordpress-website-cost": HowMuchDoesAWordPressWebsiteCost,
  "how-much-does-magento-website-development-cost": HowMuchDoesMagentoWebsiteDevelopmentCost,
  "how-much-does-shopify-website-cost": HowMuchDoesShopifyWebsiteCost,
  // Add new entries here ↑ (key = URL slug, must match the file's slug field)
};

export const SERVICES_SLUGS = Object.keys(MAP);

/** @param {string} slug @returns {ServiceData | null} */
export function getServiceData(slug) {
  return MAP[slug] ?? null;
}
