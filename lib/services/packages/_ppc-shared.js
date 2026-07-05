/**
 * Shared PPC-package feature content. The three live PPC pages (US, India,
 * Australia) list the same capabilities in every tier — only the top three
 * meta rows (setup fee, accounts handled, maintenance fee) carry currency
 * values, and the Advanced/Enterprise tiers add Google PLA support. This module
 * holds the common groups once so each page file only supplies its prices.
 */

export const PPC_NETWORKS = [
  "Google Ads Network",
  "Google Search Network (reach people who search in the Google search bar)",
  "Google Display Network (reach people on industry websites, blogs, videos, etc.)",
  "Google Remarketing (reach people who visited your website previously)",
];

export const PPC_PLA =
  "If Applicable — Google Product Listing Ads / PLAs (requires a Google Merchant account)";

const PPC_ANALYSIS = [
  { group: "Initial Analysis & Setup" },
  "Website Review & Ongoing Consulting for PPC Success",
  "If Applicable, a Complete Analysis of Your PPC Advertising History",
  "Set Initial Expectations and Specific Goals",
  "Design and Build Proper Campaigns for Search, Display & Remarketing Networks",
  "Entire Campaign Optimization, Highly Structured and Targeted Campaigns",
  "Perform Comprehensive Keyword Research and Selection",
  "Build and Implement a Comprehensive Negative Keyword List",
  "Proper Keyword Categorization, Matching Options and AdGroup Development",
  "Creative & Effective Ad Copy — Multiple Ads Per AdGroup for Testing",
  "Landing Page Optimization Suggestions",
  "Call To Action (CTA) Optimization Suggestions",
  "Ad Scheduling and Geographical Targeting",
  "Integrate Location, Social, Call, Sitelink and other Extensions if needed",
  "Mobile Ads & Bid Optimization (if the website is mobile responsive)",
  "Conversion Tracking & Remarketing Code Installation",
];

const PPC_MANAGEMENT = [
  { group: "Ongoing Account Management" },
  "A Dedicated Account Executive for Questions, Concerns and Ideas",
  "Ongoing PPC Strategy Development",
  "Continual Bid & Position Monitoring to Achieve Desired Results",
  "Ongoing Keyword Performance Analysis, Additions & Deletions",
  "Ongoing Competitor Tracking with Auction Analysis",
  "Ongoing Ad Copy Analysis and Testing",
  "Continued Conversion Tracking Analysis",
  "Work to Increase Conversion Rates, CTR and Quality Scores",
  "Competitor Tracking, Research and Benchmarking",
  "A/B Landing Page & CTA Split Testing",
  "Work to Lower CPA (cost per acquisition)",
];

const PPC_REPORTING = [
  { group: "Reporting" },
  "Fortnightly Campaign Report",
  "Campaign | AdGroup | Keyword | Position | Clicks | Cost | CPC | Impressions | CTR",
  "Conversions | Conv. Rate | Cost Per Conversion",
];

/**
 * Build a PPC tier's full feature list.
 * @param {string[]} meta - the 3 currency-specific meta rows (setup / accounts / maintenance)
 * @param {boolean} includePla - whether this tier includes Google PLA support
 */
export function ppcFeatures(meta, includePla) {
  return [
    ...meta,
    { group: "PPC Advertising Networks" },
    ...PPC_NETWORKS,
    ...(includePla ? [PPC_PLA] : []),
    ...PPC_ANALYSIS,
    ...PPC_MANAGEMENT,
    ...PPC_REPORTING,
  ];
}

/**
 * Build the three PPC plans for a currency.
 * @param {Array<{name: string, amount: string, meta: string[], includePla?: boolean, featured?: boolean}>} tiers
 * @param {{label: string, ctaHref: string, ctaLabel: string}} opts
 */
export function ppcPlans(tiers, { label, ctaHref, ctaLabel }) {
  return tiers.map((t) => ({
    name: t.name,
    ...(t.featured ? { featured: true } : {}),
    price: { amount: t.amount, unit: "PPC", label },
    ctaLabel,
    ctaHref,
    features: ppcFeatures(t.meta, !!t.includePla),
  }));
}
