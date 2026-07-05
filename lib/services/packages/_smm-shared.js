/**
 * Shared SMM-package feature content. The SMM pages (US + India) list identical
 * capabilities per tier — only the monthly agency fee differs by currency (the
 * ad-spend row stays in USD on both live pages). Tiers grow the Facebook and
 * LinkedIn depth from Basic → Advanced → Enterprise.
 */

const INSTAGRAM = [
  { group: "Instagram Marketing" },
  "Audience Research",
  "Instagram Ads Creative Creation & Design",
  "Instagram Ads Monitoring and Management",
];

const PINTEREST = [
  { group: "Pinterest Marketing" },
  "Audience Research",
  "Pinterest Ads Creative Creation & Design",
  "Pinterest Ads Monitoring and Management",
];

const BASIC_FEATURES = [
  "$0–500 Ad Spend (paid to the ad platform)",
  "3 Campaign Creations",
  { group: "Facebook Marketing" },
  "Facebook Business Manager Setup",
  "Detailed Audience Creation",
  "Facebook Analytics Report Creation",
  "Ad Campaign Monitoring",
  "Customization of Ad Placements",
  "Traffic Monitoring",
  "Monthly Report",
  ...INSTAGRAM,
  { group: "LinkedIn Marketing" },
  "Campaign Manager Account Setup",
  "Ads Monitoring",
  "Monthly Report",
  ...PINTEREST,
];

const ADVANCED_FEATURES = [
  "$500–1200 Ad Spend (paid to the ad platform)",
  "6 Campaign Creations",
  { group: "Facebook Marketing" },
  "Facebook Business Manager Setup",
  "Pixel Installation",
  "Custom Conversion Creation",
  "Remarketing",
  "Detailed Audience Creation",
  "Custom Audience Creation",
  "Creation of Automated Rules",
  "Facebook Analytics Report Creation",
  "Ad Campaign Monitoring",
  "Instant Experience Ads Creation",
  "Customization of Ad Placements",
  "Traffic Monitoring",
  "Monthly Report",
  ...INSTAGRAM,
  { group: "LinkedIn Marketing" },
  "Campaign Manager Account Setup",
  "Creation of Custom Conversion",
  "Ads Monitoring",
  "Monthly Report",
  ...PINTEREST,
];

const ENTERPRISE_FEATURES = [
  "$1200+ Ad Spend (paid to the ad platform)",
  "8 Campaign Creations",
  { group: "Facebook Marketing" },
  "Facebook Business Manager Setup",
  "Pixel Installation",
  "Custom Conversion Creation",
  "Remarketing",
  "Detailed Audience Creation",
  "Custom Audience Creation",
  "Creation of Automated Rules",
  "Facebook Analytics Report Creation",
  "Ad Campaign Monitoring",
  "Catalogue Creation",
  "Dynamic Ads Creation",
  "Instant Experience Ads Creation",
  "Customization of Ad Placements",
  "A/B Testing of Ad Set, Creative and Placement",
  "Carousel and Collection Ads",
  "Traffic Monitoring",
  "Monthly Report",
  ...INSTAGRAM,
  { group: "LinkedIn Marketing" },
  "Campaign Manager Account Setup",
  "LinkedIn Insight Tag Installation",
  "Creation of Custom Conversion",
  "Ads Monitoring",
  "Monthly Report",
  ...PINTEREST,
];

/**
 * Build the three SMM plans for a currency.
 * @param {{basic: string, advanced: string, enterprise: string}} prices - agency-fee amounts
 * @param {string} label - the price caption (e.g. "Monthly Agency / Service Fees")
 * @param {string} ctaHref - CTA target ("popup" or a URL)
 * @param {string} ctaLabel - CTA button label
 */
export function smmPlans(prices, label, ctaHref, ctaLabel) {
  return [
    {
      name: "Basic",
      price: { amount: prices.basic, unit: "SMM", label },
      ctaLabel,
      ctaHref,
      features: BASIC_FEATURES,
    },
    {
      name: "Advanced",
      featured: true,
      price: { amount: prices.advanced, unit: "SMM", label },
      ctaLabel,
      ctaHref,
      features: ADVANCED_FEATURES,
    },
    {
      name: "Enterprise",
      price: { amount: prices.enterprise, unit: "SMM", label },
      ctaLabel,
      ctaHref,
      features: ENTERPRISE_FEATURES,
    },
  ];
}
