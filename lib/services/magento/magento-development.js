const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const MagentoDevelopment = {
  slug: "magento-development-services",
  pageTitle: "Magento Development Services | Icecube Digital",
  metaDescription: "Build a powerful, scalable Magento store with Icecube Digital. Custom development, theme design, migration, PWA, and ongoing support from certified Magento experts.",

  banner: {
    heading: "Magento Development Services",
    paragraphs: [
      "Seeking to create a powerful, user-friendly, and feature-rich online store on Magento that drives the sales and growth of your business?",
      "Icecube Digital is a leading Magento development company, where you can engage with Magento to the fullest extent to fuel the growth of your online business. Our dedicated team of Magento experts is highly skilled and qualified in customization and integrations to an advanced level to streamline your eCommerce operations and shopping experiences.",
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
      "Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
      "In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
    ],
    postIds: [40964, 40968, 40966],
    portfolioCtaLabel: "More Portfolio",
    portfolioCtaHref: "/our-portfolio/",
    btnArrow: BTN_ARROW,
  },

  getQuote: true,

  plainText: {
    eyebrow: "Establish a Magento-Powered Online Business",
    title: "That Continues To Thrive & Evolve!",
    contentAlign: "center",
    blocks: [
      { type: "p", text: "As the top-rated Magento e-commerce development company, Icecube Digital strives to develop custom websites with advanced features to give you a competitive edge. Our developers are well-experienced and instilled with the latest trends in Magento. Icecube Digital has constantly served as the brand-focused Magento development agency, creating custom solutions from beautiful storefront designs to enterprise-level eCommerce portals." },
      { type: "p", text: "Build your eCommerce store with us and scale your business to new heights!" },
    ],
    ctaLabel: "Request A Free Quote",
    ctaHref: "popup",
    btnArrow: BTN_ARROW,
  },

  achievements: achievementsSection,

  imageText: {
    eyebrow: "Powerful Duo - Magento 2 and",
    title: "Generative AI",
    image: "/assets/photos/majento-development.png",
    imageAlt: "",
    paragraphs: [
      "Magento 2 and Generative AI, when brought together by Icecube Digital, form a practical solution for enhancing eCommerce capabilities. Magento 2 handles the core of store management, while Generative AI adds real-time, personalized elements—like product recommendations and targeted promotions.",
      "Icecube Digital focuses on integrating these two technologies to create stores that adapt to user preferences, aiming to improve engagement and boost conversion rates. The combination leverages Magento's flexibility with AI-driven customization, providing a more tailored experience for customers without unnecessary complexity. This partnership aims to make digital commerce more intuitive and responsive to user needs.",
    ],
    checklistItems: [],
    ctaLabel: "Get In Touch",
    ctaHref: "popup",
    btnArrow: BTN_ARROW,
  },

  topIconBox: {
    eyebrow: "Personalized Magento",
    title: "Development Services",
    items: [
      { icon: "/assets/icons/multidevice.svg", title: "Magento Website Development & Design", body: "We design a state-of-the-art Magento eCommerce website with exquisite features and functionality for your business. After carefully listening to your requirements, our web developers and designers employ their skills to render every possible service, from front-end coding to plugin interaction." },
      { icon: "/assets/icons/html-code.svg", title: "Custom Module Development", body: "We bring your visionary concepts to life with our custom Magento development services with tailored functionalities and meet your business requirements. Our designers will create a distinctive e-commerce experience to deliver a seamless experience for web and mobile users." },
      { icon: "/assets/icons/grid.svg", title: "Magento Theme Development", body: "Our brilliant squad of designers creates responsive and visually appealing themes for your Magento store. We help you stand out from the crowd with our excellence in Magento theme development by working closely with you, enhancing the user experience and strengthening your brand presence." },
      { icon: "/assets/icons/gear.svg", title: "Magento Maintenance and Support", body: ["We make sure to continue the robust relationship with our customers even after the launch of their Magento store. Our ", { text: "hired Magento developers", href: "/hire-magento-2-developers-programmers/" }, " will provide ongoing support and maintenance to keep your website safe, up-to-date, and seamlessly operating with devoted developers by your side."] },
      { icon: "/assets/icons/processing.svg", title: "Magento Migration Services", body: "We help you avoid the hassles in migrating your website to Magento through our comprehensive Magento web development services. We help you move the website to the latest and chosen Magento platform while ensuring the safety and integrity of your data and the website's better performance and experience." },
      { icon: "/assets/icons/mobile.svg", title: "Headless PWA for Magento 2", body: "Hire our Magento developers to develop PWA with headless architecture, which ensures that every user can access your store on any tablet or smartphone while enjoying a seamless purchasing experience. The robust PWA will supercharge your eCommerce business, saving you time and money in the long run." },
      { icon: "/assets/icons/setting.svg", title: "Magento 2 API Intigration", body: "Connect your Magento store with any third-party tool, app, or service using our tailor-made Magento web development services and enhance your customer experience. Using the integration service, you can carry out different tasks via a single dashboard and generate a smooth and effortless transition." },
      { icon: "/assets/icons/code-monitor.svg", title: "FrontEnd Development Service", body: "We augment your store in Magento by implementing the interactive front-end development service, creating stunning and pixel-perfect web and mobile applications. We are equipped with cutting-edge responsiveness to deliver a responsive and intuitive visual experience for your business." },
      { icon: "/assets/icons/inventory.svg", title: "Multilingual Store Development", body: "A multilingual store development allows multiple global vendors to sell their products in a single ecosystem without language barriers. Our developers will develop an online marketplace website by harnessing the potential of our individualized Magento development services to deliver the best shopping experience." },
      { icon: "/assets/icons/payment-cycle.svg", title: "Payment, Shipping, and Gateway Integration", body: "Our Magento web development services include payment, shipping, and gateway integration, enabling you to streamline purchasing processes. Our professional developers integrate popular getaways, ensuring security and customer confidence while synchronizing your data, enhancing workflows, gaining efficiency, and saving money." },
      { icon: "/assets/icons/speed.svg", title: "Performance Optimization", body: "With our inclusive Magento development services and optimization strategies, we optimize the performance and effectiveness of your online store. Our optimization services include quick page loads, opalized codes, top-notch user experiences, and more." },
      { icon: "/assets/icons/cloud.svg", title: "Commerce Cloud Service", body: "Fuel your e-commerce experience across every challenge by bringing digital commerce, point-of-sale, store operations, order management, and predictive intelligence into shared commerce experience through our Magento development services." },
    ],
  },

  topIconBoxSecondary: {
    eyebrow: "Why Employ Magento For Your",
    title: "eCommerce Store?",
    subtitles: ["Leveraging Magento's powerful features will enhance your site performance, optimize the loading speed, and ensure smooth navigation. At Icecube Digital, our Magento development services will empower you to deliver an exceptional digital experience that sets you apart in the competitive landscape and indulges your customer at every touchpoint."],
    items: [
      { icon: "/assets/icons/multidevice.svg", title: "Build Scalable Store", body: "Magento development services have emerged as a preferable choice for small and large organizations to build scalable stores that can handle large amounts of traffic and expand their online presence." },
      { icon: "/assets/icons/grid.svg", title: "Create Robust architecture", body: "More technology is included in the Magento development services to increase website optimization and customization. The latest architecture of Magento serves as a powerhouse of speed and performance for your business to stay ahead of its competitors." },
      { icon: "/assets/icons/html-code.svg", title: "Access Flexible APIs", body: "Magento provides a better e-commerce experience and is a demanding solution due to its features and functionality. It is accessible to flexible APIs, including simple management, server customization, and product bundling." },
      { icon: "/assets/icons/code-monitor.svg", title: "Leverage ready-to-use extensions", body: "With Magento, you can also access additional extensions to optimize your website for a better experience and user experience." },
      { icon: "/assets/icons/payment-cycle.svg", title: "Multiple Payment Methods", body: "When you have Magento development services for your eCommerce stores, you can stay carefree as you will have access to multiple, secured payment methods. It allows on-site payments by enabling integration to various gateways." },
      { icon: "/assets/icons/gear.svg", title: "Utility Tool", body: "Magento offers a wide array of utility tools to smoothen the operation process of an eCommerce store right from the beginning to the end." },
      { icon: "/assets/icons/speed.svg", title: "Fast Rendering", body: "With its optimised codebase and caching mechanisms, Magento ensures fast rendering and quick loading times for your website. This enhances user experience and reduces bounce rates, leading to higher conversion rates and customer satisfaction." },
      { icon: "/assets/icons/transport.svg", title: "Multiple Shipping Methods", body: "Magento supports various shipping methods, allowing customers to choose their preferred shipping option. From standard shipping to express delivery and click-and-collect, Magento provides a seamless shipping experience." },
      { icon: "/assets/icons/trusted-value.svg", title: "Inventory Control", body: "Effectively manage your inventory with Magento's robust inventory management features. Track stock levels set up notifications for low stock, and streamline your supply chain processes for efficient inventory control." },
      { icon: "/assets/icons/minicart.svg", title: "Offline Service", body: "Magento offers offline service capabilities, allowing you to serve customers even when they are not connected to the internet. Whether offline browsing or order placement, Magento ensures a seamless shopping experience regardless of internet availability." },
      { icon: "/assets/icons/smart-search.svg", title: "Powerful Search", body: "Magento's advanced functionality allows customers to find products quickly and easily. With features like faceted search, auto-suggestions, and filtering options, Magento provides a powerful search experience that improves customer satisfaction and conversion rates." },
      { icon: "/assets/icons/shield-check.svg", title: "Real-Time Security", body: "Magento is a highly secured platform to operate e-commerce stores. The built-in security features will reduce the risk of cyber-attacks and remove the data vulnerability to advance the security of your business." },
      { icon: "/assets/icons/result.svg", title: "Boost Website Performance", body: "When it comes to website performance, Magento development services will enable you to build fast-loading pages." },
    ],
  },

  leftIconBox: {
    eyebrow: "Why Choose Us As your Magento",
    title: "Development Agency?",
    items: [
      { icon: "/assets/icons/user-round.svg", title: "Exceptional Expertise", body: "By harnessing the latest advancements and innovations in technology, Icecube Digital will be your supportive development company, ensuring to provide solutions with cutting-edge industry standards. With our profound expertise in tailoring Magento and experience in developing advanced applications, we ensure to carve solutions that meet your exact requirements in every aspect." },
      { icon: "/assets/icons/comment.svg", title: "Absolute Transparency", body: "From the beginning, we aspire to establish transparency and open lines of communication in our Magento development services, actively listening to your challenges and goals. With our deeper understanding of the platform and its abilities, we offer end-to-end solutions encompassing everything from design and development to integration and support, ensuring you get the best possible results with absolute transparency." },
      { icon: "/assets/icons/trusted-value.svg", title: "Customer-Centric Approach", body: "Icecube Digital has always excelled in the industry as the finest Magento eCommerce development company. Our customized solutions will consistently lead your business to profound heights in the client's market. It will also help you meet the growing demands of your business and provide a superior online shopping experience to your customers, creating a unique brand identity and boosting your bottom line." },
      { icon: "/assets/icons/timer.svg", title: "On-Time and In-Budget Delivery", body: "Experience intelligent solutions with on-time and affordable delivery with the greatest Magento website Design/Development company in the USA. Whether it's project progress or timelines, we will update you on the project status at all times so that you can feel valued by our services. Our experienced and dedicated Magento developers work round the clock to ensure every client's project is completed before the pre-defined schedule." },
    ],
  },

  cta: {
    text: "Make Your Business Global with Icecube Digital's Magento Development Services.",
    ctaLabel: "Contact Us Today for a Free Consultation!",
    ctaHref: "popup",
    btnArrow: BTN_ARROW,
  },


  faq: {
    eyebrow: "Magento",
    title: "Development FAQs",
    items: [
      { question: "What are Magento development services and what do they include?", answer: "Magento development services refer to designing, building, customizing, and managing eCommerce stores on the Magento platform. These services typically include store setup, custom features, API integrations, performance optimization, theme and extension development, migration, and ongoing support." },
      { question: "How does Magento development improve eCommerce performance?", answer: "Professional Magento development optimizes site architecture, caching, CDN use, and database indexing to reduce page load times and improve Core Web Vitals. This results in faster user experience, increased conversions, and better SEO performance." },
      { question: "Why should a business choose Magento over other platforms?", answer: "Magento offers unparalleled flexibility, scalability, and control, making it suitable for large catalogs, complex workflows, and enterprise growth. Its open‑source nature and extensive customization options set it apart from hosted solutions." },
      { question: "How much does Magento development cost?", answer: "Magento development costs vary based on project complexity, customization, integrations, and ongoing support needs. Enterprise projects typically require a larger investment for advanced features, but the long‑term ROI and scalability justify the cost." },
      { question: "Can Magento handle high traffic and large product catalogs?", answer: "Yes — Magento's modular architecture is designed to support large catalogs, high traffic volumes, and multiple storefronts without performance loss when properly optimized." },
      { question: "What are the benefits of migrating to Magento 2?", answer: "Migrating to Magento 2 unlocks improved performance, a modern codebase, better scalability, advanced caching, and headless/PWA capabilities — all of which support faster page loads and modern user experiences." },
      { question: "How do Magento APIs and integrations benefit my store?", answer: "Magento's flexible APIs allow seamless integration with ERP, CRM, payment gateways, shipping services, and marketing tools — enabling centralized operations and enhanced automation across your eCommerce ecosystem." },
      { question: "Is Magento secure for large online stores?", answer: "Yes — Magento includes enterprise‑grade security features with regular patches, access controls, and compliance tools. Keeping Magento updated and applying patches promptly helps protect customer data and reduce vulnerability risk." },
      { question: "What ongoing support is needed after Magento development?", answer: "Ongoing support typically includes security updates, performance monitoring, extension maintenance, bug fixes, and version upgrades. Regular maintenance ensures the store remains fast, secure, and compatible with evolving business needs." },
      { question: "How long does a Magento development project take?", answer: "Timeline varies based on scope — a standard Magento build may take several weeks, while enterprise‑grade customizations, integrations, and migrations can take a few months. Proper planning and discovery help define realistic expectations." },
    ],
  },

  ourClients: ourClientsSection,

  weServe: true,

  ceoCta: ceoCtaSection,
};

export default MagentoDevelopment;
