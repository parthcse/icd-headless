const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const Magento2Development = {
  slug: "magento-2-development-services",
  pageTitle: "Magento 2 Development Services | Icecube Digital",
  metaDescription:
    "Build a powerful, scalable Magento 2 store with Icecube Digital. Custom development, theme design, migration, mobile apps, and ongoing support from certified Magento 2 experts.",

  banner: {
    heading: "Magento 2 Development Services",
    paragraphs: [
      "We build beautiful Magento websites that are responsive and user focused. If you have a Magento e-commerce store and you would like to know there is a Magento 2 development agency you can call to resolve your issues and assist you with developing and growing your business then we can help.",
      "We understand how critical it is that your eCommerce website stays up and transactional at all times. Our clients trust us to provide the best Magento 2 development service, support and advice. Get in touch with our experts to find out what we can do for you.",
    ],
    checklistItems: [],
    ctaLabel: "Send me a proposal",
    ctaHref: "#",
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
      "In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
    ],
    postIds: [71, 65, 73],
    portfolioCtaLabel: "More Portfolio",
    portfolioCtaHref: "#",
    btnArrow: BTN_ARROW,
  },

  getQuote: true,

  plainText: {
    eyebrow: "Magento 2",
    title: "Development Company",
    contentAlign: "center",
    blocks: [
      { type: "p", text: "With the launch of Magento 2 at the end of 2015, the next generation open source digital commerce platform has become one of the most favourite platforms for developers. Not only this, because it effectively offers Omnichannel shopping experience without any hassle, it has become the choice of retailers and business owners too. Magento is the most versatile and popular eCommerce platform that offers the perfect environment for business growth to business owners. Giving complete control over the presentation, content, and functionality of the online store, Magento offers flexibility to its users to update the shopping portal with ease." },
      { type: "p", parts: [
        "Being a leading Magento 2 development company in USA, IceCube Digital focuses on satisfying the clients with its flawless Magento 2 eCommerce development services around the globe. With ",
        { text: "certified Magento 2 developers", href: "#" },
        ", we always give comprehensive support and solutions to the needs of clients understanding the global market. We always make efforts to support digital stores in achieving their targets and drawing more and more business from the target audience expanding the loyal customer base.",
      ]},
    ],
    ctaLabel: "Request A Free Quote",
    ctaHref: "#",
    btnArrow: BTN_ARROW,
  },

  achievements: achievementsSection,

  testimonials: {
    eyebrow: "What",
    title: "Clients Say?",
    testimonialId: 89,
  },

  topIconBox: {
    eyebrow: "Magento 2",
    title: "Development Services",
    items: [
      {
        icon: "/assets/icons/multidevice.svg",
        title: "Magento 2 Web Design",
        body: "With the expert team of Magento 2 theme designers, we assure pixel perfect quality conversion of your designs. With our extensively adept designers, we have been designing the custom Magento 2 themes which fascinate the users for sure.",
      },
      {
        icon: "/assets/icons/html-code.svg",
        title: "Magento 2 Customization",
        body: "Leveraging the unmatched features of Magento 2, we develop feature rich custom Magento 2 website for you. Our Magento 2 developers are highly competent and experienced who can deliver you top notch solutions.",
      },
      {
        icon: "/assets/icons/processing.svg",
        title: "Magento 2 Migration",
        body: "Taking your website from Magento 1 to Magento 2, we will also help you to migrate all your data safely. Data is the asset of any organization and thus, we migrate all the data with utmost care and precision",
      },
      {
        icon: "/assets/icons/mobile.svg",
        title: "Magento 2 Mobile App Development",
        body: "As a leading Magento 2 company, we offer a complete solution to build mobile apps of your Magento stores, for iOS and Android. We develop Magento 2 Mobile Apps that offer an unforgettable user experience and which are easy to use.",
      },
      {
        icon: "/assets/icons/grid.svg",
        title: "Magento 2 Module Development",
        body: "Developed by the certified Magento 2 developers, Magento 2 extensions can be your real supporters for the growth of business and profit. Our developers have creatively developed some of the most useful Magento 2 modules considering the needs of the market.",
      },
      {
        icon: "/assets/icons/gear.svg",
        title: "Magento 2 Maintenance",
        body: "We do not just develop or upgrade your Magento 1 store to Magento 2, but also provide you 24×7 Magento 2 support services for its maintenance. Walking with hand in hand, our Magento 2 experts understand the changing requirements of the clients and serve them promptly.",
      },
    ],
  },

  leftIconBox: {
    eyebrow: "Magento 2",
    title: "Website Customization",
    items: [
      {
        icon: "/assets/icons/multidevice.svg",
        title: "Open And Flexible Architecture",
        body: "Magento 2 has a component based structure of modules that offers more flexibility to the website owners supporting fast time to market. With its modular code base for customization, it allows easy addition or deletion to meet merchant needs.",
      },
      {
        icon: "/assets/icons/speed.svg",
        title: "Improved Performance",
        body: "It is believed that Magento 2 is 20% faster than Magento 1 which encourages better search engine results with increased website visibility leading to increased sales. With full page caching, the pages now load quite faster giving growth to the online business.",
      },
      {
        icon: "/assets/icons/mobile.svg",
        title: "More Mobile Friendly",
        body: "When more and more customers are shopping via smartphones or tablets, considering the need of the time, Magento 2 has come up with mobile responsiveness. Moreover, cross-platform compatibility, cross-browser compatibility and device-agnostic capability of Magento 2 adds a feather to its cap.",
      },
      {
        icon: "/assets/icons/grid.svg",
        title: "Enhanced Admin Interface",
        body: "Powerful tools at backend make it easy for admins to handle the online store in minimal time. It is now simple to personalize the admin panel for users to increase productivity managing the products, orders, deliveries and customer data easily.",
      },
      {
        icon: "/assets/icons/shield-check.svg",
        title: "Secure Payments",
        body: "Magento 2 comes with the default integration of payment gateways like PayPal, Braintree and Autorize.net. In addition to this, Magento Commerce Edition 2.0 integrates with WorldPay and CyberSource offering utmost security to the users.",
      },
      {
        icon: "/assets/icons/inventory.svg",
        title: "Simplified Check Out",
        body: "To achieve higher conversion rates, Magento 2 has streamlined the checkout process which curbs the shopping cart abandonment rate offering hassle free check out process.",
      },
    ],
  },

  imageText: {
    eyebrow: "Magento 2",
    title: "Approach",
    image: "/assets/photos/our-approach.png",
    imageAlt: "",
    paragraphs: [
      "Agile methodology is one of the most effective project development methodologies and we follow the same for our Custom Magento 2 development projects. Our Agile development process follows;",
    ],
    checklistItems: [
      "Requirement gathering",
      "Front end Design",
      "Magento Development",
      "Quality Test",
      "Launch",
      "Support and Maintenance",
    ],
  },

  topIconBoxSecondary: {
    eyebrow: "The Top Notch Qualities That Separate Us From Other Providers Like",
    title: "Wheat From The Chaff Are",
    subtitles: [
      "Being Magento 2 web development company, we offer comprehensive solutions to our clients from Magento 2 eCommerce website development to maintenance, support and migration. Our expert magento developers team offers creative B2B Magento eCommerce solutions that enhance your web identity and business.",
      "Having expertise in HTML/HTML5/CSS/CSS3 and jQuery, our Magento 2 specialist team makes sure to deliver unmatched user experience. Visually appealing designs by our UI designers are a promise we make to our clients.",
    ],
    columns: 4,
    items: [
      {
        icon: "/assets/icons/result.svg",
        title: "Conversion and Growth Focused",
        body: "We do not believe in working just for the completion of the project, but we analyze the market and develop the Magento 2 store in a way that increase conversions and thus, grow the clients in the best possible way.",
      },
      {
        icon: "/assets/icons/user-round.svg",
        title: "Committed Developers",
        body: "Our certified Magento 2 developers are reliable and accountable for the successful project completion. They are always there even after the launch of the portal.",
      },
      {
        icon: "/assets/icons/support-call.svg",
        title: "Bespoke Solutions",
        body: "Every domain is different, every client is different and thus, everyone's requirements are different too. Believing in customized solutions, we understand the client requirements, his industry and target audience and craft the solutions accordingly.",
      },
      {
        icon: "/assets/icons/trusted-value.svg",
        title: "Industry Best Formula",
        body: "Our formula lies in- 'Customer Satisfaction'. We work for our customers' growth and we serve them till their satisfaction; and that is the reason our clients turn up to us again and again for their technical needs.",
      },
    ],
  },

  checkList: {
    eyebrow: "Why Choose Icecube Digital As Your Magento 2",
    title: "Development Company?",
    benefitsLeft: [
      "A team of 20+ expert Magento e-commerce developers with rich experience of project management and Magento portal development",
      "Adequate team for Magento 2 website optimization, maintenance and support services",
      "Highly trained Magento 2 web developers who offer solutions with utmost transparency in a workflow",
    ],
    benefitsRight: [
      "A variety of Magento 2 website development services offering with implementation, migration, mobility, consulting, optimization and maintenance",
      "Competency in mobile responsive e-commerce websites and Magento 2 Mobile App development with back-end",
    ],
  },

  cta: {
    text: "Make Your Business Global with Icecube Digital's Magento 2 Development Services.",
    ctaLabel: "Contact Us Today for a Free Consultation!",
    ctaHref: "#",
    btnArrow: BTN_ARROW,
  },

  faq: {
    eyebrow: "Magento 2",
    title: "Development FAQs",
    items: [
      {
        question: "What is the benefit of using your Magento 2 development service?",
        answer:
          "We are a magento 2 trained development agency with 14+ Years experience on Magento eCommerce platform. You work with certified Magento developers for design and development of your website.",
      },
      {
        question: "How can I update the website myself once it's been built?",
        answer:
          "We are a professional Magento 2 development company and we'll provide you all the training and tools to be able to make website amendments yourself after it's live. We also provide a step by step screen shot guide on how you can update pictures, categories, products information, content etc from Magento back end.",
      },
      {
        question: "Who will host my website?",
        answer:
          "We do not host your website but based on our years of experience, we suggest the best Magento hosting providers in the market that you can use to host the website.",
      },
      {
        question: "How does your payment terms work?",
        answer:
          "Project payments are divided in phases as per the project scope. You will need to release part of the payment as we finish the set milestones. For SEO & website maintenance services, It will be monthly or yearly based on package selected.",
      },
      {
        question: "How secure my website will be?",
        answer:
          "Our Magento 2 experts will make sure that all the required security measures are implemented with latest Magento 2 version during development phase of the website. You can opt for a regular maintenance package provided by us for getting security updates and keeping your website updated/safe from any vulnerability.",
      },
    ],
  },

  ourClients: ourClientsSection,

  weServe: true,

  ceoCta: ceoCtaSection,
};

export default Magento2Development;
