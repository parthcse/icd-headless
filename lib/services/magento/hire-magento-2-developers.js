const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const HireMagento2Developers = {
  slug: "hire-magento-2-developers-programmers",
  pageTitle: "Hire Magento 2 Developers & Programmers | Icecube Digital",
  metaDescription:
    "Hire certified Magento 2 developers from Icecube Digital to build, customize, and scale your eCommerce store. Expert Magento programmers for B2B, B2C, and enterprise solutions.",

  banner: {
    heading: "Hire Magento 2 Developers & Programmers",
    paragraphs: [
      "Hire certified Magento 2 (Adobe Commerce) developers from Icecube Digital to build, customize, migrate, and scale your online store. Whether you need a dedicated Magento developer or a full development team, we provide flexible engagement models tailored to your project requirements. Our Magento experts help businesses improve performance, streamline operations, and accelerate growth with scalable eCommerce solutions.",
    ],
    checklistItems: [],
    ctaLabel: "Send me a proposal",
    ctaHref: "popup",
    phoneLabel: "Call Us +91 9106060593",
    phoneHref: "tel:+919106060593",
    formTitle: "Get Free Magento Store Audit",
    btnArrow: BTN_ARROW,
  },

  milestone: milestoneSection,

  portfolio: {
    eyebrow: "Our",
    title: "Portfolio",
    subtitle: [
      "At Icecube Digital, our work reflects the depth of our Magento expertise and the results our developers deliver. Each project showcases how we solve complex eCommerce challenges, build custom Magento solutions, and help businesses scale with confidence.",
      "From B2B platforms with advanced workflows to high-conversion B2C stores, our Magento developers focus on performance, usability, and long-term growth so clients don’t just launch better websites, they build stronger businesses.",
    ],
    postIds: [40954, 40966, 40947],
    portfolioCtaLabel: "More Portfolio",
    portfolioCtaHref: "/our-portfolio/",
    btnArrow: BTN_ARROW,
  },

  plainText: {
    eyebrow: "Why Businesses Hire",
    title: "Magento Developers",
    contentAlign: "center",
    blocks: [
      { type: "p", text: "Magento powers some of the world's most flexible and scalable eCommerce stores, but unlocking its full potential requires experienced developers. Businesses hire Magento developers to create custom functionality, integrate third-party systems, improve store performance, enhance security, and support long-term growth. Whether you're launching a new store, migrating from another platform, or optimizing an existing Magento website, experienced developers help ensure a smooth, scalable, and future-ready eCommerce experience." },
    ],
  },

  getQuote: true,

  plainTextSecondary: {
    eyebrow: "What Does a Magento",
    title: "Developer Do",
    contentAlign: "center",
    blocks: [
      { type: "p", text: "A Magento developer builds, customizes, and maintains eCommerce stores on Magento Open Source and Adobe Commerce. Day to day, that means custom theme and module development, third-party integrations (ERP, CRM, POS, and payment and shipping gateways), Magento 1 → 2 and version migrations, performance and Core Web Vitals optimization, security patching, and headless/PWA builds. A certified Magento developer has passed Adobe's official exams, which signals proven competence in Magento architecture, GraphQL, and Adobe Commerce best practices." },
    ],
  },

  imageText: {
    eyebrow: "Hire Magento 2 Developers For Customized",
    title: "eCommerce Solutions",
    image: "/assets/photos/hire-magento-ecommerce-left.png",
    imageAlt: "Magento 2 Developers for eCommerce Solutions",
    paragraphs: [
      "Our Magento 2 developers are here to turn your eCommerce ideas into reality. With solid experience in creating custom Magento stores, we focus on delivering exactly what your business needs. Whether improving performance, adding new features, or integrating third-party tools, we've got the expertise. Every project is tailored to your specific goals. We handle all details carefully to ensure a seamless and scalable solution. Trust our team to bring your vision to life and support your eCommerce growth.",
    ],
    ctaLabel: "Request a Free Quote",
    ctaHref: "popup",
    btnArrow: BTN_ARROW,
  },

  achievements: achievementsSection,

  testimonials: {
    eyebrow: "Hear What Our",
    title: "Clients Have to Say!",
    testimonialSlug: "sean-scott",
  },

  leftIconBox: {
    eyebrow: "Magento Experts Driving",
    title: "eCommerce Excellence",
    items: [
      {
        icon: "/assets/icons/setting.svg",
        title: "Integrations For ERP/CRM/And POS Systems",
        body: "Our Magento experts provide seamless integration with ERP, CRM, and POS systems, ensuring that your store operates efficiently. We connect your Magento store with key business tools to streamline operations, enhance productivity, and maintain synchronized data across platforms.",
      },
      {
        icon: "/assets/icons/web.svg",
        title: "Frontend and Backend Development",
        body: "Our Magento experts specialize in both frontend and backend development. From creating responsive, engaging user interfaces to building robust backend systems, we ensure your store performs optimally, delivering a smooth experience for both administrators and customers.",
      },
      {
        icon: "/assets/icons/pc.svg",
        title: "Multi-Channel Solutions",
        body: "Our Magento experts help businesses implement multi-channel solutions, connecting your store across various sales platforms. We ensure smooth integration across online marketplaces, social platforms, and physical stores, providing a unified and consistent shopping experience for your customers.",
      },
      {
        icon: "/assets/icons/html-code.svg",
        title: "Module Development Services",
        body: "Boost your store's functionality with custom module development. Our Magento experts design and develop tailored modules that add specific features to your store, improving its performance and providing customers with a more interactive and engaging experience.",
      },
      {
        icon: "/assets/icons/cloud.svg",
        title: "Hosting and Critical Support",
        body: "Ensure your store runs smoothly with reliable hosting and critical support services. Our Magento experts monitor and manage your store's performance, offering proactive support to prevent issues and ensure consistent uptime for a flawless shopping experience.",
      },
      {
        icon: "/assets/icons/processing.svg",
        title: "Platform Migration Services",
        body: "Our Magento experts specialize in platform migration, ensuring a seamless transition from your existing platform to Magento. We prioritize data integrity and security, ensuring that your business experiences minimal disruption and benefits from Magento's advanced capabilities.",
      },
      {
        icon: "/assets/icons/multidevice.svg",
        title: "UI/UX and Technical Audits",
        body: "Enhance your store's performance with comprehensive UI/UX and technical audits. Our Magento experts analyze your store's user interface, functionality, and technical health, identifying areas for improvement to boost engagement, usability, and overall performance.",
      },
    ],
  },

  topIconBoxSecondary: {
    eyebrow: "Hire Magento Web Developer to Unlock Your",
    title: "Store's Full Potential",
    items: [
      {
        icon: "/assets/icons/multidevice.svg",
        title: "Magento Theme Design",
        body: "Our expert developers design custom Magento themes that enhance your brand's identity and user experience. Whether you need a fresh design or improvements to an existing one, we ensure the theme is responsive, visually appealing, and optimized for performance across all devices.",
      },
      {
        icon: "/assets/icons/user-team.svg",
        title: "Multi-Vendor Marketplace Creation",
        body: "Build a scalable multi-vendor marketplace with our Magento developers. We create platforms where multiple vendors can manage their products, orders, and customers effortlessly. Our solutions offer a smooth user experience for both vendors and buyers, driving engagement and expanding your marketplace.",
      },
      {
        icon: "/assets/icons/mobile.svg",
        title: "Headless eCommerce & API-First Architecture",
        body: "With headless e-commerce solutions, our Magento developers separate the back-end from the front-end, providing you with unparalleled flexibility. This approach allows faster development, better customization, and enhanced scalability to ensure your store meets the evolving demands of the digital marketplace.",
      },
      {
        icon: "/assets/icons/minicart.svg",
        title: "B2C eCommerce Development",
        body: "Create a seamless shopping experience with our B2C e-commerce development services. Our Magento developers focus on designing user-friendly, intuitive platforms that make it easy for customers to browse, shop, and check out, while ensuring high performance and fast loading times for increased sales.",
      },
      {
        icon: "/assets/icons/pie-chart.svg",
        title: "B2B E-commerce Development",
        body: "Our Magento developers build robust B2B e-commerce platforms designed to handle complex operations. Features like custom pricing, bulk ordering, and integrated invoicing are crafted to meet the needs of large-scale business transactions, improving efficiency and driving business growth.",
      },
      {
        icon: "/assets/icons/html-code.svg",
        title: "Custom Magento Extensions Development",
        body: "Enhance the functionality of your Magento store with custom extensions tailored to your specific needs. Our developers build and integrate extensions that boost performance, add features, and offer your customers a richer experience, ensuring your store operates seamlessly with added capabilities.",
      },
      {
        icon: "/assets/icons/grid.svg",
        title: "Magento Omnichannel Retail Solutions",
        body: "Provide your customers with a seamless shopping experience across all channels with our Magento omnichannel solutions. Our developers integrate online and offline sales channels, ensuring a unified customer experience, streamlined inventory management, and smooth operations across platforms.",
      },
      {
        icon: "/assets/icons/processing.svg",
        title: "Magento 2 Upgrade and Migration Services",
        body: "Upgrade or migrate your Magento store with minimal downtime and zero data loss. Our developers ensure a smooth transition to Magento 2, optimizing your site for better performance, improved security, and access to the latest features to keep your business competitive.",
      },
      {
        icon: "/assets/icons/code-monitor.svg",
        title: "Adobe Commerce Enterprise Solutions",
        body: "Unlock the full potential of Adobe Commerce with our enterprise solutions. Our Magento developers deliver scalable, secure, and fully customized Adobe Commerce platforms, designed to meet the demands of high-volume, enterprise-level e-commerce businesses, ensuring superior performance and reliability.",
      },
    ],
  },

  topIconBox: {
    eyebrow: "Craft Scalable and Secure Solutions with the",
    title: "Right Magento 2 Developers",
    columns: 4,
    items: [
      {
        icon: "/assets/icons/user-round.svg",
        title: "Engage With Magento Experts",
        body: "Icecube Digital, the leading Magento development agency, has developers who have worked on numerous Magento projects for clients in every sector, from healthcare to retail, and have expertise in delivering custom Magento development services.",
      },
      {
        icon: "/assets/icons/user-team.svg",
        title: "A Team of Magento 2 Experts Under One Roof",
        body: "Hire Magento 2 developers who will exclusively work with you to make your e-commerce services better, more attractive, and more seamless throughout your journey with us. With a proven methodology and agile delivery, we ensure we fulfill all your business functions.",
      },
      {
        icon: "/assets/icons/like.svg",
        title: "A Decade of Dedicated Experience",
        body: "With over nine years of experience being the professional Magento 2 experts in the industry, we have the perfect tools to turn our client's vision into consumer-attracting products. When you entrust us, we will deliver Magento development services that generate massive returns.",
      },
      {
        icon: "/assets/icons/hand-shake.svg",
        title: "Ongoing Magento Support & Maintenance",
        body: "Launching a Magento store is only the beginning. Our Magento experts provide ongoing maintenance, security updates, performance monitoring, bug fixes, and feature enhancements to ensure your store remains secure, stable, and competitive. With proactive support and continuous improvements, we help businesses maximize the long-term value of their Magento investment.",
      },
    ],
  },

  tableBasic: {
    eyebrow: "Flexible Ways to Hire",
    title: "Magento Developers",
    subtitle:
      "Choose the model that fits your scope, budget, and timeline. Every engagement includes a signed NDA, a dedicated project manager, time tracking, and weekly progress reports.",
    columns: ["Model", "Best For", "Commitment", "What's Included"],
    boldColumns: [0],
    colWidths: ["25%", "25%", "25%", "25%"],
    rows: [
      ["Hourly", "Fixes, audits, small features", "From 10 hrs/wk", "Time-tracked, pay-as-you-go, support"],
      ["Monthly (Dedicated Developer)", "Ongoing roadmaps", "1 dev, 3 hrs/day", "NDA + SLA, PM, weekly reports"],
      ["Dedicated Team", "Builds, replatforms, B2B", "Scalable squad", "Lead + developers + QA, agile sprints"],
      ["Fixed-Price (Project)", "Defined scope", "Per milestone", "Scope, timeline, guaranteed deliverables"],
    ],
    note: "Magento development costs vary based on project complexity, developer experience, Adobe Commerce requirements, integrations, and engagement model. Contact our team for a tailored quote.",
  },

  processSteps: {
    eyebrow: "How Hiring Works - From",
    title: "Inquiry to Launch",
    columns: 2,
    steps: [
      { title: "Share requirements", body: "Send your scope via the form, email, or a quick call." },
      { title: "Scoping & matched profiles", body: "We confirm scope and send 1-3 developer profiles matched to your stack within 24 hours." },
      { title: "Interview & NDA", body: "Interview your developer(s); we sign the NDA and SLA before any code is written." },
      { title: "Sprint kickoff", body: "Agile sprints begin with a dedicated PM, shared board (Jira/Trello/Slack), and weekly demos." },
      { title: "QA & UAT", body: "Manual + automated testing on staging before every release." },
      { title: "Launch & support", body: "Deploy with zero-downtime process; 7 days of post-launch support included, with optional maintenance plans." },
    ],
  },

  checkList: {
    eyebrow: "Certified Magento & Adobe",
    title: "Commerce Developers",
    subtitle:
      "When you hire from Icecube Digital you work with engineers trained and certified on the Magento/Adobe Commerce stack - not generalists.",
    benefitsLeft: [
      "Adobe Commerce Certified Developers",
      "Adobe Commerce Certified Front-End / JavaScript Developers",
    ],
    benefitsRight: [
      "Magento / Adobe Commerce Business Practitioners",
      "14+ years average team experience · 300+ projects delivered",
    ],
  },

  imageTextSecondary: {
    eyebrow: "Migrate and Upgrade Magento 2 with",
    title: "eCommerce Experts",
    image: "/assets/photos/ecommerce-experts.png",
    imageAlt: "eCommerce Experts",
    paragraphs: [
      "Our expert Magento e-commerce developers will help you seamlessly upgrade from Magento core to Magento 1 to Magento 2, along with the security patches, theme, and plugin updates. We help you develop a dynamic and fully functional website powered by Magento 2 with extensive exclusive features that align with your business goals.",
      "Icecube Digital's Magento developers also assist you in optimizing your eCommerce store with advanced web solutions, including payment gateway integrations that will enrich your online store's appearance and engagement level!",
      [
        "Hire our Magento 2 experts to ensure a secure, risk-free ",
        { text: "Magento 2 migration and upgrade!", href: "/magento-2-upgrade-and-migration-services/" },
      ],
    ],
  },

  imageTextTertiary: {
    eyebrow: "Magento Development Services Tailored to",
    title: "Your Business",
    image: "/assets/photos/magento-development-tailored.svg",
    imageAlt: "Magento Development Services Tailored to Your Business",
    imagePosition: "right",
    paragraphs: [
      "Every eCommerce business has unique requirements, which is why our Magento developers create solutions tailored to your goals, industry, and customers. From custom storefront development and extension creation to ERP integrations and performance optimization, we build scalable Magento solutions that help businesses improve customer experience, streamline operations, and increase revenue.",
    ],
  },

  checkListSecondary: {
    eyebrow: "Why Hire Magento Developers from",
    title: "Icecube Digital",
    benefitsLeft: [
      [{ bold: "Proven outcomes, not promises" }, " — live results include +117% organic traffic (Dortech Direct) and +74% sales (Visor)."],
      [{ bold: "Top-rated" }, " — 5.0 on Clutch, 4.9 on GoodFirms, 4.8 on Google across 50+ reviews."],
      [{ bold: "Certified expertise" }, " — Adobe Commerce-certified engineers across back end, front end, and Hyvä."],
    ],
    benefitsRight: [
      [{ bold: "Transparent engagement" }, " — hourly, monthly, dedicated-team or fixed-price, NDA from day one, weekly reporting."],
      [{ bold: "Full lifecycle" }, " — design, build, migration, integrations, headless/PWA, speed, security, and ongoing support."],
      [{ bold: "Global delivery" }, " — serving the US, UK, EU, Canada, Australia and the Middle East with overlapping-hours communication."],
    ],
  },

  checkListTertiary: {
    eyebrow: "The Magento Stack",
    title: "Our Developers Work In",
    benefitsLeft: [
      "Core: Magento Open Source, Adobe Commerce (Cloud), PHP 8.x, MySQL/MariaDB, Elasticsearch/OpenSearch, Redis, Varnish, Composer.",
      "Front end & headless: Hyvä themes, Luma/custom themes, GraphQL, PWA Studio, React, Vue.js, Next.js, REST & GraphQL APIs.",
    ],
    benefitsRight: [
      "Integrations: ERP (SAP, NetSuite, Dynamics), CRM (Salesforce, HubSpot), POS, payment & shipping gateways, PIM, marketplaces.",
      "DevOps & QA: Git, CI/CD, Docker, automated + manual testing, performance & Core Web Vitals tuning, PCI-DSS-aligned security.",
    ],
  },

  plainTextTertiary: {
    eyebrow: "Build on the Modern Magento Frontend:",
    title: "Hyvä & Headless",
    contentAlign: "center",
    blocks: [
      { type: "p", text: "Slow Luma themes are the #1 reason Magento stores fail Core Web Vitals. Our developers build with Hyvä - the modern, lightweight Magento theme framework - and headless/PWA architectures using GraphQL, so your store loads faster, scores better in Google's page-experience signals, and is cheaper to maintain. Whether you're on Magento Open Source or Adobe Commerce, we can re-platform your frontend to Hyvä or a headless setup without rebuilding your backend." },
    ],
  },

  cta: {
    text: "Bring in the Big Hit Right Off the Bat!",
    ctaLabel: "Hire Magento Web Developers",
    ctaHref: "/hire-magento-2-developers-programmers/",
    btnArrow: BTN_ARROW,
  },

  faq: {
    eyebrow: "Hire Magento Developers",
    title: "FAQs",
    items: [
			{
				question: "How much does it cost to hire a Magento 2 developer?",
				answer: "Rates generally run 25-50$/hour by seniority and location; monthly dedicated and fixed-price models are more cost-efficient for ongoing work. We send an exact quote within 24 business hours of your requirements.",
			},
			{
				question: "Can I hire a dedicated Magento developer hourly, monthly, or per project?",
				answer: "Yes — hourly, monthly dedicated, full dedicated team, or fixed-price per milestone. You can scale up or down between sprints.",
			},
			{
				question: "Are your Magento developers Adobe-certified?",
				answer: "Yes. Our team holds Adobe Commerce developer, front-end, and JavaScript certifications, verifiable on Adobe’s credential portal.",
			},
			{
				question: "How fast can a developer start?",
				answer: "Matched developer profiles within 12–24 hours; kickoff typically within 1–2 business days of NDA signing.",
			},
			{
				question: "Do you work with Hyva and headless/PWA?",
				answer: "Yes — Hyva theme builds and headless/PWA via GraphQL and PWA Studio are core capabilities.",
			},
			{
				question: "Will I lose SEO rankings or data during a Magento 1→2 migration?",
				answer: "No. We preserve URLs, redirects, metadata, and customer/order data; we’ve completed 50+ migrations without ranking loss.",
			},
			{
				question: "What's the difference between Magento and Adobe Commerce?",
				answer: "Magento Open Source is the free, self-hosted platform; Adobe Commerce (formerly Magento Commerce) adds enterprise B2B, hosting, and advanced features. We develop on both.",
			},
			{
				question: "How customizable is Magento 2?",
				answer: "Magento 2 is highly customizable. From creating custom themes and modules to integrating third-party systems like ERP, CRM, and POS, Magento 2 can be tailored to fit your exact business requirements. Our developers can help customize your store to suit your specific needs.",
			},
			{
				question: "What are the advantages of headless eCommerce with Magento 2?",
				answer: "Headless eCommerce separates the front-end from the back-end, offering greater flexibility for customization, faster development, and improved performance. Magento 2’s headless architecture allows businesses to deliver a more dynamic and personalized user experience across different devices and platforms.",
			},
		],
  },

  ourClients: ourClientsSection,

  weServe: true,

  ceoCta: ceoCtaSection,
};

export default HireMagento2Developers;
