/**
 * Shared SEO-package comparison matrix. All three SEO package pages (US, India,
 * Australia) list the identical feature matrix across their four tiers — only
 * the tier names, prices and the budget-column label differ per page. This
 * module holds the always-visible summary rows and the accordion category
 * groups once; each page file supplies its own `tiers` + heading.
 *
 * Cell values: "check" → ✓, "cross" → ✗, any other string → shown as text.
 */

export const SEO_HEAD_ROWS = [
  { label: "Targeted Keywords", cells: ["Upto 10", "Upto 25", "Upto 50", "100+"] },
  { label: "Target Pages", cells: ["10", "40", "80", "100+"] },
  { label: "Quality Backlinks", cells: ["35", "55", "75", "100+"] },
];

const C = "check";
const X = "cross";

export const SEO_CATEGORIES = [
  {
    title: "Minimum Contract Duration",
    rows: [{ label: "Contract Period", cells: ["6 Months", "6 Months", "6 Months", "6 Months"] }],
  },
  {
    title: "Initial Review & Analysis",
    rows: [
      { label: "Deep Website Audit", cells: [C, C, C, C] },
      { label: "Smart Keyword Research", cells: [C, C, C, C] },
      { label: "Backlink Quality Audit", cells: [X, C, C, C] },
      { label: "Competitor Analysis", cells: [X, C, C, C] },
      { label: "Google Console Set-Up", cells: [C, C, C, C] },
      { label: "Google Analytics 4 Set-Up", cells: [C, C, C, C] },
      { label: "Google Tag Manager Set-Up", cells: [C, C, C, C] },
      { label: "Conversion Tracking Setup", cells: [C, C, C, C] },
      { label: "Duplicate Content Check", cells: [C, C, C, C] },
      { label: "Google Penalty Check", cells: [C, C, C, C] },
      { label: "Spam & Risk Audit", cells: [C, C, C, C] },
      { label: "Current Ranking Snapshot", cells: [C, C, C, C] },
      { label: "Mobile Performance Check", cells: [C, C, C, C] },
      { label: "Bing Webmaster Setup", cells: [X, C, C, C] },
    ],
  },
  {
    title: "On Page SEO Analysis",
    rows: [
      { label: "Canonical URL Check", cells: [C, C, C, C] },
      { label: "Title Tag Optimization", cells: [C, C, C, C] },
      { label: "Meta Tags Optimization", cells: [C, C, C, C] },
      { label: "Heading Structure Optimization", cells: [C, C, C, C] },
      { label: "Image Alt Tag Optimization", cells: [C, C, C, C] },
      { label: "Existing Content Optimization", cells: [C, C, C, C] },
      { label: "SEO-Friendly URL Setup", cells: [C, C, C, C] },
      { label: "Navigation Structure Optimization", cells: [C, C, C, C] },
      { label: "Custom 404 Page Setup", cells: [C, C, C, C] },
      { label: "Broken Link Audit", cells: [C, C, C, C] },
      { label: "Website Speed Optimization", cells: [C, C, C, C] },
      { label: "Google Index Coverage Check", cells: [C, C, C, C] },
      { label: "Robots.txt File Setup", cells: [C, C, C, C] },
      { label: "XML Sitemap Creation", cells: [C, C, C, C] },
      { label: "HTML Sitemap Setup", cells: [C, C, C, C] },
      { label: "Hyperlink Optimization", cells: [C, C, C, C] },
      { label: "Permalink Structure Analysis", cells: [C, C, C, C] },
      { label: "Internal Linking Strategy", cells: [C, C, C, C] },
      { label: "Structured Data Markup (Schema)", cells: [C, C, C, C] },
      { label: "Blog Section Creation", cells: [C, C, C, C] },
      { label: "Htaccess File Creation", cells: [C, C, C, C] },
    ],
  },
  {
    title: "Off Page SEO Analysis",
    rows: [
      { label: "Guest Posting", cells: [X, "01", "02", "03"] },
      { label: "Guest Blog Outreach", cells: [X, X, C, C] },
      { label: "Press Release Submission", cells: [X, "01", "02", "03"] },
      { label: "Web 2.0 Profile Creation", cells: [X, C, C, C] },
      { label: "Local Business Listings", cells: [C, C, C, C] },
      { label: "Bing Local Listing", cells: [X, X, C, C] },
      { label: "Profile Creation", cells: [C, C, C, C] },
      { label: "Forum Posting", cells: [X, C, C, C] },
      { label: "Competitor Backlink Research", cells: [X, X, C, C] },
      { label: "PPT Submissions", cells: [C, C, C, C] },
      { label: "Infographics Submission", cells: [C, C, C, C] },
      { label: "Video Submissions", cells: [X, C, C, C] },
      { label: "Contextual Link Building", cells: [X, X, C, C] },
      { label: "Blog Promotion on Social Media", cells: [X, C, C, C] },
      { label: "Broken Link Building", cells: [X, X, C, C] },
      { label: "Social Bookmarking", cells: [C, C, C, C] },
      { label: "Classified Ad Submissions", cells: [C, C, C, C] },
      { label: "Q&A Platforms", cells: [C, C, C, C] },
    ],
  },
  {
    title: "Content Marketing",
    rows: [
      { label: "SEO Blog Posts / Month", cells: ["2", "4", "6", "10"] },
      { label: "Content Words / Month", cells: ["2000", "4000", "6000", "10000"] },
      { label: "Landing Page Content", cells: [C, C, C, C] },
      { label: "Product/Service Page Content", cells: [C, C, C, C] },
      { label: "Content Refresh/Updates", cells: [C, C, C, C] },
      { label: "Blog Topic Research", cells: [C, C, C, C] },
      { label: "Blog Post Writing", cells: [C, C, C, C] },
      { label: "Guest Post Writing", cells: [C, C, C, C] },
      { label: "Press Release Writing", cells: [C, C, C, C] },
    ],
  },
  {
    title: "Google Maps & Local SEO Setup",
    rows: [
      { label: "Google Business Profile (GBP) Set-Up", cells: [C, C, C, C] },
      { label: "Local Keyword Research", cells: [C, C, C, C] },
      { label: "Authority Business Listing", cells: [C, C, C, C] },
      { label: "Local Citation Building", cells: [X, C, C, C] },
      { label: "NAP Syndication", cells: [X, C, C, C] },
      { label: "Q&A Optimization", cells: [C, C, C, C] },
      { label: "Service & Product Listings", cells: [C, C, C, C] },
      { label: "Monthly GBP Audits", cells: [X, C, C, C] },
    ],
  },
  {
    title: "AI SEO Services",
    rows: [
      { label: "AI Technical SEO Audit", cells: [X, X, C, C] },
      { label: "AI SERP Tracking & Analytics", cells: [X, X, C, C] },
      { label: "Voice & Visual Search Optimization", cells: [X, X, C, C] },
      { label: "AI Content Optimization", cells: [X, X, C, C] },
      { label: "Local SEO with AI", cells: [X, X, C, C] },
      { label: "AI-based Schema Markup", cells: [X, X, C, C] },
    ],
  },
  {
    title: "Reporting",
    rows: [
      { label: "Monthly Keyword Ranking Report", cells: [C, C, C, C] },
      { label: "Monthly SEO Performance Report", cells: [C, C, C, C] },
      { label: "Monthly Website Analytics Report", cells: [C, C, C, C] },
      { label: "Monthly Off-Page Report", cells: [C, C, C, C] },
      { label: "Monthly Technical SEO Report", cells: [C, C, C, C] },
      { label: "Monthly Local SEO Report", cells: [C, C, C, C] },
      { label: "Monthly Conversion Tracking Report", cells: [C, C, C, C] },
      { label: "Monthly AI SEO Insights Report", cells: [X, X, C, C] },
      { label: "Action Plan & Recommendations", cells: [C, C, C, C] },
    ],
  },
  {
    title: "Customer Support",
    rows: [
      { label: "Email", cells: ["hello@icecubedigital.com", "hello@icecubedigital.com", "hello@icecubedigital.com", "hello@icecubedigital.com"] },
      { label: "Call", cells: ["+91 9106060593", "+91 9106060593", "+91 9106060593", "+91 9106060593"] },
      { label: "Chat", cells: [C, C, C, C] },
    ],
  },
];
