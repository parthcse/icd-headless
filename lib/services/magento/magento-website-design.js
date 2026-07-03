const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const MagentoWebsiteDesign = {
  slug: "magento-website-design",
  pageTitle: "Magento Website Design Services | Icecube Digital",
  metaDescription:
    "Icecube Digital is your premier destination for advanced Magento website design services. Customized solutions that enhance your online presence and foster business growth.",

  banner: {
    heading: "Magento Website Design Services",
    paragraphs: [
      "Icecube Digital is your premier destination for advanced Magento website design services. As a leading Magento website design company, we focus on delivering customized solutions that enhance your online presence and foster business growth.",
      "Our expertise lies in crafting tailored designs to meet your specific needs, ensuring an impactful online experience. Trust Icecube Digital for cutting-edge Magento web design that sets your business apart.",
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
    postIds: [40964, 40968, 40917],
    portfolioCtaLabel: "More Portfolio",
    portfolioCtaHref: "/our-portfolio/",
    btnArrow: BTN_ARROW,
  },

  getQuote: true,

  plainText: {
    eyebrow: "Unmatched Expertise in",
    title: "Magento Website Design",
    contentAlign: "center",
    blocks: [
      { type: "p", text: "At Icecube Digital, we take pride in being a top-tier Magento website design agency. Our team of skilled Magento website designers possesses extensive knowledge and experience in the field of eCommerce. Whether you're a startup or a Fortune 500 company, we offer professional Magento website design services that align with your business goals." },
      { type: "p", parts: [
        "Our expertise extends beyond traditional designs, ensuring your website proportionately resizes for optimal user experience on mobile devices. We provide ",
        { text: "Magento 2 development services", href: "/magento-2-development-services/" },
        " and improve quality content to captivate users with a design that adapts smoothly and boosts SEO rankings.",
      ]},
    ],
    ctaLabel: "Request A Free Quote",
    ctaHref: "popup",
    btnArrow: BTN_ARROW,
  },

  achievements: achievementsSection,

  testimonials: {
    eyebrow: "Hear What Our",
    title: "Clients Have to Say!",
    testimonialSlug: "sean-scott",
  },

  imageText: {
    eyebrow: "Tailored Magento",
    title: "eCommerce Design Solutions",
    image: "/assets/photos/majento-website-design.png",
    imageAlt: "",
    paragraphs: [
      "We specializes in providing tailor-made solutions that cater to your unique needs. Our Magento eCommerce design services are tailored to deliver impactful results, ensuring your online store stands out in the world of eCommerce.",
      "We understand that one design template doesn't fit all. That's why we go beyond standard solutions, offering custom Magento web designs that perfectly align with your brand identity and business objectives. Try our tailor-made Magento design services – where innovation meets functionality for a smooth and captivating user experience.",
    ],
    checklistItems: [],
    ctaLabel: "Get In Touch",
    ctaHref: "popup",
    btnArrow: BTN_ARROW,
  },

  infoBox: {
    eyebrow: "Why Choose Magento Platform for Your",
    title: "eCommerce Website?",
    subtitle: ["While Magento provides a solid foundation with a basic web design package and versatile templates, Icecube Digital takes it a step further. Our expertise lies in elevating your Magento site to high-end levels, especially focusing on creating a powerful and responsive design. From configuring products to optimizing search rankings, securing hosting, integrating apps, and designing your storefront, Icecube Digital ensures your Magento experience is exceptional. Here are some reasons why Magento should be your go-to-platform for an eCommerce website."],
    items: [
      {
        title: "Open-source platform",
        body: "It allows you to create a robust framework, proceed with default functionality with Magento 2 extensions, and customize your store.",
      },
      {
        title: "Affordable",
        body: "Magento is one of the cost-effective eCommerce platforms as it is a free, open-source platform.",
      },
      {
        title: "Performance",
        body: "Businesses can use many built-in and third-party plugins to speed up their Magento 2 websites.",
      },
      {
        title: "Multi-website setup",
        body: "Magento makes it easy to manage as it offers a centralized dashboard to view multiple websites, stores, and store views.",
      },
      {
        title: "SEO-optimized",
        body: "SEO optimization is essential for your website to rank higher in search engine results. With Magento, businesses can easily create SEO-optimized URLs, generate HTML and XML sitemaps, create robots.txt, set canonical tags, and more.",
      },
    ],
  },

  topIconBoxSecondary: {
    eyebrow: "Benefits of Our Magento Website",
    title: "Design Service",
    subtitles: ["As a leading Magento web design agency, besides offering effective designs, we also provide effortless integration and a responsive design that adapts to diverse devices, ensuring a flawless user experience. Here are some reasons why you can trust Icecube Digital"],
    items: [
      {
        icon: "/assets/icons/user-round.svg",
        title: "Expertise That Transcends",
        body: "Our team's profound expertise in Magento web design surpasses surface-level aesthetics. We have explored the platform's deep details, ensuring a comprehensive understanding that translates into designs with optimal functionality and performance.",
      },
      {
        icon: "/assets/icons/web.svg",
        title: "Tailored for Your Success",
        body: "Recognizing the distinct requirements of each business, our collaboration involves a meticulous process of understanding your specific goals. This results in a Magento responsive website design that isn't just visually appealing but strategically aligned with your objectives, creating a unique online identity for your brand.",
      },
      {
        icon: "/assets/icons/gear.svg",
        title: "Continuous Support & Maintenance",
        body: "Beyond the initial design phase, we are committed to providing ongoing support and maintenance services for your Magento online store. This commitment allows you to concentrate on your business's growth while we ensure the seamless and efficient operation of your online storefront.",
      },
      {
        icon: "/assets/icons/checklist.svg",
        title: "Comprehensive Solutions",
        body: [
          "Our services transcend professional Magento design. We offer a comprehensive suite of digital marketing services, including ",
          { text: "Magento SEO,", href: "/magento-seo-services/" },
          " Magento 2 development services, PPC, and social media marketing. This approach aims to drive more traffic to your site, increase conversations, and enhance your overall online presence. It's not just about how your site looks; it's about ensuring it performs optimally and contributes to your business growth.",
        ],
      },
      {
        icon: "/assets/icons/hand-shake.svg",
        title: "Transparent Collaboration",
        body: "Icecube Digital brings transparency to every step of the collaboration process. We believe in clear communication, providing you with insights into the design journey, timelines, and progress. Our commitment to transparency ensures that you are well-informed and involved throughout the Magento website design service, fostering a collaborative and trust-driven partnership.",
      },
      {
        icon: "/assets/icons/result.svg",
        title: "Proven Track Record",
        body: "Our Magento web design services come with a proven track record of success. Across various businesses, our designs consistently deliver outstanding results, contributing to increased sales and heightened customer satisfaction.",
      },
    ],
  },

  leftIconBox: {
    eyebrow: "Icecube Digital Approach To",
    title: "eCommerce Success",
    subtitle: "Icecube Digital experts follow a comprehensive approach to building a Magento store. Here's how our experts work when you collaborate with our experts",
    items: [
      {
        icon: "/assets/icons/generation.svg",
        title: "Initial Briefing",
        body: "During the initial briefing, we will collaborate with you to understand your business objectives, vision, pain points, and overall requirements. Based on the discussion, we will create a strategic plan that includes the entire website design plan and how we will proceed with the development.",
      },
      {
        icon: "/assets/icons/grid.svg",
        title: "Build a Wireframe",
        body: "As per the discussion, our creative design team will brainstorm ideas and create a wireframe. A wireframe will include a basic structure with all the essential elements. After your approval, our team will focus on building a prototype.",
      },
      {
        icon: "/assets/icons/html-code.svg",
        title: "Develop a Prototype",
        body: "As per the wireframe, our team of experts will develop an interactive preliminary version of your Magento website. It will give an idea of how your website would work and how each element contributes to the user experience.",
      },
      {
        icon: "/assets/icons/multidevice.svg",
        title: "Brainstorm User Interface Design",
        body: "UI design is an essential phase website designing process as it ensures that users can easily navigate the website and interact with your brand.",
      },
      {
        icon: "/assets/icons/code-monitor.svg",
        title: "Coding and Development",
        body: [
          "We even offer ",
          { text: "Magento website development services", href: "/magento-development-services/" },
          " where our experts will build the website and integrate the Magento website with other business tools. We utilize the best coding standards to write and build efficient and clean code.",
        ],
      },
      {
        icon: "/assets/icons/gear.svg",
        title: "Rigorous Testing",
        body: "We conduct rigorous testing protocols to ensure that the website is bug-free before going live to your customers. Our team of developers will address all the compatibility and performance issues before deploying the website.",
      },
      {
        icon: "/assets/icons/rocket.svg",
        title: "Launch and Maintenance",
        body: "After ensuring that the website is seamlessly working, our experts will deploy your new and improved Magento website. Our support is for the long term, so if any issues come up or you require a new update on your website, our experts will keep it updated and seamlessly functioning.",
      },
    ],
  },

  cta: {
    text: "Let’s Create The Perfect Magento Website For Your Ecommerce Business!",
    ctaLabel: "Contact Us Today for a Free Consultation!",
    ctaHref: "popup",
    btnArrow: BTN_ARROW,
  },

  faq: {
    eyebrow: "Magento",
    title: "Website Design FAQs",
    items: [
			{
				question: "What sets Icecube Digital's Magento website design services apart?",
				answer: "Our team’s extensive knowledge and hands-on experience in professional Magento website design services, coupled with a commitment to tailored solutions, distinguish us. We prioritize understanding your unique business needs to deliver impactful and customized web designs that drive growth.",
			},
			{
				question: "Why choose an in-house team for Magento web design?",
				answer: "Unlike outsourcing, our in-house Magento website designers stay updated on the latest trends and best practices. This ensures optimal outcomes for your online store, driven by a dedicated team dedicated to excellence.",
			},
			{
				question: "How does Icecube Digital approach Magento eCommerce design differently?",
				answer: "Our approach is rooted in a deep understanding of the Magento platform, translating into bespoke solutions that go beyond aesthetics. We focus on creating designs that not only look impressive but also align strategically with your business goals.",
			},
			{
				question: "Can Icecube Digital cater to a global clientele with USA-based operations?",
				answer: "Absolutely! Icecube Digital is uniquely positioned to serve Magento eCommerce design needs globally.",
			},
			{
				question: "Are long-term contracts mandatory for Icecube Digital's Magento design services?",
				answer: "No, they’re not. At Icecube Digital, we offer top-tier Magento eCommerce design services without the constraints of long-term contracts. We believe in flexibility, allowing you the freedom to work with us until you achieve your desired results for your online store.",
			},
		],
  },

  ourClients: ourClientsSection,

  weServe: true,

  ceoCta: ceoCtaSection,
};

export default MagentoWebsiteDesign;
