const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const HireMagento2Migration = {
  slug: "magento-2-upgrade-and-migration-services",
  pageTitle: "Magento 2 Upgrade & Migration Services | Icecube Digital",
  metaDescription:
    "Icecube Digital provides expert Magento 2 upgrade and migration services. Move to the latest Magento version without downtime, data loss, or SEO impact.",

  banner: {
    heading: "Magento 2 Upgrade & Migration Services",
    paragraphs: [
      "Magento is powerful—but only when it's up to date.",
      "If you're running on an outdated version, you're exposed to security risks, performance issues, and missed revenue opportunities. Our Magento 2 upgrade and migration services help you move to the latest stable version without downtime, data loss, or SEO impact.",
      "Whether you're upgrading within Magento 2 or migrating from Magento 1 or another platform, we handle the entire process—from audit to launch.",
    ],
    checklistItems: [
      "Zero data loss",
      "Minimal downtime",
      "SEO & URL structure preserved",
      "Fully tested before go-live",
    ],
    ctaLabel: "Send me a proposal",
    ctaHref: "#",
    phoneLabel: "Call Us +91 9106060593",
    phoneHref: "tel:+919106060593",
    formTitle: "Get Free Magento Store Audit",
    btnArrow: BTN_ARROW,
  },

  // common section: ./common/milestone-section.js
  milestone: milestoneSection,

  plainText: {
    eyebrow: "Is Your Magento Store Running on an",
    title: "Unsupported Version?",
    contentAlign: "left-4xl",
    blocks: [
      { type: "p", text: "Magento regularly releases updates to improve security and performance. But older versions eventually lose support—meaning no more security patches, bug fixes, or official updates." },
      { type: "p", text: "If your store is running on an outdated version, you may already be at risk:" },
      { type: "ul", items: [
        "Increased vulnerability to cyber attacks",
        "Slower performance and checkout issues",
        "Compatibility problems with extensions and integrations",
        "Gradual drop in conversions and customer trust",
      ]},
      { type: "p", text: "Upgrading to the latest Magento version isn't just a technical upgrade—it's a business decision that directly impacts your revenue and store stability." },
    ],
    ctaLabel: "Request A Free Quote",
    ctaHref: "#",
    btnArrow: BTN_ARROW,
  },

  portfolio: {
    eyebrow: "Our",
    title: "Portfolio",
    subtitle: [
      "Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
      "In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
    ],
    // TODO: replace with real WordPress `portfolio` post IDs for Dortech Direct, Visor, Dealer Market
    postIds: [71, 65, 73],
    portfolioCtaLabel: "More Portfolio",
    portfolioCtaHref: "#",
    btnArrow: BTN_ARROW,
  },

  // common section: components/home/GetQuoteSection.js ("Let's Work Together / Get a Free Quote")
  getQuote: true,

  plainTextSecondary: {
    eyebrow: "Choosing the Right Magento 2 Migration",
    title: "Partner Matters",
    contentAlign: "left-4xl",
    blocks: [
      { type: "p", text: "Upgrading to Magento 2 isn't just a version change – it's a complete technical shift. Done right, it improves speed, scalability, and conversion rates. Done wrong, it can break your store." },
      { type: "p", parts: [
        "We've been working with Magento since its early releases, helping businesses migrate, upgrade, and scale without disruption through reliable ",
        { text: "Magento development services.", href: "#" },
      ]},
      { type: "p", text: "Our approach is simple:" },
      { type: "ul", items: [
        "Understand your current setup",
        "Identify risks before migration",
        "Plan upgrades without affecting sales",
        "Execute with full testing and validation",
      ]},
      { type: "p", text: "Whether you're moving from Magento 1 or upgrading to the latest Magento 2 version, we make sure your store performs better after the move – not worse." },
    ],
  },

  // common section: ./common/achievements-section.js
  achievements: achievementsSection,

  // TODO: replace with the real WP testimonial ID for Sean Scott (Director, Vuba Supplies Ltd – UK)
  testimonials: {
    eyebrow: "Hear What Our",
    title: "Clients Have to Say!",
    testimonialId: 31,
  },

  imageText: {
    eyebrow: "Upgrade Your Magento Store Without Breaking",
    title: "What’s Already Working",
    image: "/assets/photos/majento-2migration.png",
    imageAlt: "",
    blocks: [
      { type: "p", text: "Every Magento store is different. That’s why we don’t follow a fixed upgrade template." },
      { type: "p", text: "Before we begin, we analyze:" },
      { type: "ul", items: [
        "Your current performance bottlenecks",
        "Extensions and custom modules",
        "SEO structure and rankings",
        "Business workflows and integrations",
      ]},
      { type: "p", text: "From there, we upgrade your store in a way that improves:" },
      { type: "ul", items: [
        "Page speed",
        "Checkout experience",
        "Admin usability",
        "Overall stability",
      ]},
      { type: "p", text: "You don’t just get a new version – you get a better-performing store." },
    ],
  },

  imageTextSecondary: {
    eyebrow: "Upgrade Without",
    title: "Downtime or Data Loss",
    image: "/assets/photos/majento-2migration-1.png",
    imageAlt: "",
    imagePosition: "right",
    blocks: [
      { type: "p", text: "One of the biggest concerns store owners have is: \"Will my store break during the upgrade?\"" },
      { type: "p", text: "We’ve built our Magento upgrade process to eliminate that risk." },
      { type: "ul", items: [
        "Full backup before any changes",
        "Upgrade performed on a staging environment",
        "Live store remains unaffected during development",
        "Final deployment scheduled during low-traffic hours",
      ]},
      { type: "p", text: "We also ensure:" },
      { type: "ul", items: [
        "No loss of customer, product, or order data",
        "No disruption to ongoing sales",
        "Smooth transition from old version to new",
      ]},
      { type: "p", text: "Your business keeps running while we handle the upgrade in the background." },
    ],
  },

  featureCards: {
    eyebrow: "What's Included in Our Magento 2 Upgrade &",
    title: "Migration Services",
    subtitle:
      "We don't just \"upgrade version numbers.\" We handle everything required to make your store stable, secure, and ready for growth.",
    items: [
      {
        icon: "/assets/icons/grid.svg",
        title: "Magento 2 Upgrade (Version Updates)",
        bodyList: [
          "Upgrade to latest Magento 2 version",
          "Security patch installation",
          "PHP, Composer, and server compatibility updates",
          "Extension compatibility fixes",
        ],
      },
      {
        icon: "/assets/icons/processing.svg",
        title: "Magento Migration (Magento 1 / Other Platforms)",
        bodyList: [
          "Full data migration (products, customers, orders)",
          "Theme rebuild or redesign (if needed)",
          "URL structure & SEO preservation",
          "Platform-to-platform migration (Shopify, WooCommerce → Magento)",
        ],
      },
      {
        icon: "/assets/icons/code-monitor.svg",
        title: "Custom Development & Optimization",
        bodyList: [
          "Module updates and custom feature rebuilds",
          "Checkout optimization",
          "Performance tuning (Core Web Vitals)",
          "API & third-party integrations",
        ],
      },
      {
        icon: "/assets/icons/seo.svg",
        title: "SEO Protection During Migration",
        bodyList: [
          "URL mapping and redirects",
          "Metadata preservation",
          "Traffic and ranking protection strategy",
        ],
      },
    ],
  },

  topIconBox: {
    eyebrow: "Why Upgrading to Magento 2 Is",
    title: "No Longer Optional",
    items: [
      {
        icon: "/assets/icons/speed.svg",
        title: "Better Performance",
        body: "Magento 2 is built for speed. Faster loading pages mean better user experience and higher conversions.",
      },
      {
        icon: "/assets/icons/shield-check.svg",
        title: "Stronger Security",
        body: "Older versions no longer receive regular security updates, making your store vulnerable to attacks.",
      },
      {
        icon: "/assets/icons/inventory.svg",
        title: "Improved Checkout Experience",
        body: "Magento 2 reduces friction in checkout, helping you recover more sales.",
      },
      {
        icon: "/assets/icons/minicart.svg",
        title: "Easier Store Management",
        body: "The updated admin panel makes it easier for your team to manage products, orders, and customers.",
      },
      {
        icon: "/assets/icons/multidevice.svg",
        title: "Future-Ready Architecture",
        body: "Magento 2 supports modern integrations, APIs, and scalability—so your store can grow without limitations.",
      },
    ],
  },

  plainTextTertiary: {
    eyebrow: "How Long Does a Magento 2 Upgrade or",
    title: "Migration Take?",
    contentAlign: "left-4xl",
    blocks: [
      { type: "p", text: "Every Magento store is different, so timelines depend on complexity, integrations, and custom features. However, here's a realistic estimate:" },
      { type: "ul", items: [
        "Minor version upgrades: 2–4 working days",
        "Standard Magento upgrades: 5–7 working days",
        "Complex migrations (Magento 1 or custom builds): 10–14+ days",
      ]},
      { type: "p", parts: [
        "Before starting, we provide a clear timeline based on your store so you know exactly what to expect from our experienced ",
        { text: "Magento developers.", href: "#" },
      ]},
      { type: "p", text: "No surprises. No delays. Just a structured upgrade plan." },
    ],
  },

  processSteps: {
    eyebrow: "Our Magento 2 Upgrade &",
    title: "Migration Process",
    columns: 2,
    subtitle: "We follow a structured approach to ensure your upgrade is smooth and risk-free.",
    steps: [
      {
        title: "Store Audit & Planning",
        body: "We analyze your current store including extensions and integrations, performance issues, and SEO structure. Then we create a clear upgrade roadmap.",
      },
      {
        title: "Backup & Environment Setup",
        body: "Full backup of your existing store, setup of staging environment, and preparation for safe upgrade execution.",
      },
      {
        title: "Upgrade / Migration Execution",
        body: "Magento version upgrade or platform migration, extension updates and compatibility fixes, and theme development or adaptation.",
      },
      {
        title: "Testing & QA",
        body: "We test everything: checkout process, payment gateways, mobile responsiveness, performance and speed.",
      },
      {
        title: "Launch & Support",
        body: "Smooth deployment with minimal downtime, post-launch monitoring, and ongoing support and fixes (if needed).",
      },
    ],
  },

  infoBox: {
    eyebrow: "Why Agencies & Store Owners Choose Us For",
    title: "Magento Upgrades",
    textAlign: "left",
    items: [
      {
        title: "Proven Magento Experience",
        body: "We've been working with Magento for over a decade—handling everything from small upgrades to complex enterprise migrations.",
      },
      {
        title: "Zero-Risk Migration Approach",
        body: "We plan every upgrade carefully to avoid",
        bodyList: ["Data loss", "SEO drops", "Broken functionality"],
      },
      {
        title: "Transparent Communication",
        body: "You'll always know:",
        bodyList: ["What’s happening", "What’s next", "How long it will take"],
      },
      {
        title: "Flexible Engagement Models",
        body: "Whether you need:",
        bodyList: ["One-time upgrade", "Ongoing Magento support"],
        bodyAfter: "We adapt to your workflow.",
      },
      {
        title: "Post-Upgrade Support",
        body: "We don't disappear after launch. We help you:",
        bodyList: ["Fix issues (if any)", "Optimize performance", "Maintain your store"],
      },
    ],
  },

  cta: {
    text: "Are You Ready To Unlock The Full Magento Ecommerce Potential?",
    ctaLabel: "Get a Free Quote",
    ctaHref: "#",
    btnArrow: BTN_ARROW,
  },

  faq: {
    eyebrow: "Magento",
    title: "Migration FAQs",
    items: [
      {
        question: "What is the benefit of using your Magento 2 migration service?",
        answer:
          "We are a Magento 2 trained agency with 14+ Years of experience in Magento eCommerce. You work with certified Magento developers who will migrate your eCommerce website from Magento 1 to Magento 2 without losing any features, Data, or SEO of your website.",
      },
      {
        question: "How much time do I have to upgrade to magento 2?",
        answer:
          "Magento is officially going to end support for Magento 1 from June 2020 so we advise you to move to Magento 2 as soon as possible.",
      },
      {
        question: "What if I don't move to Magento 2?",
        answer:
          "Magento will not update the platform Magento 1 after June 2020 so there will be a high risk of security breaches + you won't be getting the benefits of the awesome features that Magento 2 offers.",
      },
      {
        question: "How much time it takes to migrate my website to magento 2?",
        answer:
          "It can take starting from a couple of weeks to a couple of months depending on how complex and custom your current Magento 1 setup is. Our expert developers can audit your Magento 1 website and provide a complete road map for a successful migration.",
      },
      {
        question: "Will it affect my current SEO rankings?",
        answer:
          "Your keyword's organic ranking will not get affected if you work with Magento SEO experts. Our Expert SEO team works with Magento experts to maintain your SEO rankings with migration to Magento 2.",
      },
    ],
  },

  // common section: ./common/our-clients-section.js
  ourClients: ourClientsSection,

  // common section: components/home/WeServeSection.js ("Countries We Serve")
  weServe: true,

  // common section: ./common/ceo-cta-section.js ("CEO CTA section")
  ceoCta: ceoCtaSection,
};

export default HireMagento2Migration;
