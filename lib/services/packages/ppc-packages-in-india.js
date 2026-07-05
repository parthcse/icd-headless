const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import { ppcPlans } from "./_ppc-shared";

/** @type {import('../index').ServiceData} */
const PpcPackagesInIndia = {
  slug: "ppc-packages-in-india",
  pageTitle: "PPC Packages in India | Affordable Google Ads Management Plans | Icecube Digital",
  metaDescription:
    "Affordable, tailor-made PPC packages in India for small, medium and large enterprises. Transparent Google Ads management pricing in INR built to drive traffic and conversions.",

  simpleBanner: {
    eyebrow: "PPC Management",
    heading: "PPC Packages In India",
    paragraphs: [
      "Highly affordable and tailor-made PPC packages for small, medium and large enterprises to suit their unique business needs. These packages serve the core purpose of driving huge traffic to your website.",
    ],
  },

  tablePackages: {
    eyebrow: "Choose Your",
    title: "PPC Package",
    subtitle: "Transparent, results-driven Google Ads management — pick the plan that matches your monthly ad spend.",
    plans: ppcPlans(
      [
        {
          name: "Small",
          amount: "₹0 – ₹100K",
          meta: ["₹25K Initial Campaign Setup Fees", "1 Account Handling", "₹20K Monthly Maintenance Fees"],
          includePla: false,
        },
        {
          name: "Corporate",
          amount: "₹100K – ₹200K",
          featured: true,
          meta: ["₹30K Initial Campaign Setup Fees", "5–10 Account Handling", "20% Monthly Maintenance Fees"],
          includePla: true,
        },
        {
          name: "Enterprise",
          amount: "₹200K & Above",
          meta: ["₹35K Initial Campaign Setup Fees", "11–15 Account Handling", "18% Monthly Maintenance Fees"],
          includePla: true,
        },
      ],
      { label: "Monthly Spend", ctaHref: "popup", ctaLabel: "Get Started" }
    ),
    note: "Not sure which plan fits your goals? Talk to our PPC specialists for a custom recommendation.",
    btnArrow: BTN_ARROW,
  },

  getQuote: true,

  weServe: true,
};

export default PpcPackagesInIndia;
