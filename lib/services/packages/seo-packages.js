const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import { SEO_HEAD_ROWS, SEO_CATEGORIES } from "./_seo-packages-shared";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";

/** @type {import('../index').ServiceData} */
const SeoPackages = {
  slug: "seo-packages",
  pageTitle: "SEO Packages | Affordable Monthly SEO Plans & Pricing | Icecube Digital",
  metaDescription:
    "Compare Icecube Digital's affordable SEO packages for small, medium and large businesses. Transparent monthly pricing across Basic, Silver, Gold and Platinum plans built to grow organic traffic and revenue.",

  banner: {
    heading: "SEO Packages",
    paragraphs: [
      "Ready to dominate search results? At Icecube Digital, we don't do cookie-cutter SEO – we craft strategies that offer data-driven results. We're a leading force in the field offering the best SEO packages that help you achieve your business goals. Bid farewell to standard SEO tactics and welcome a skilled SEO team that will generate organic leads that turn into high-quality sales and revenue expansion. Your website will soar to page #1 ranks with our tried-and-true methods, bringing in a flood of organic visitors and increasing your brand visibility.",
      ["94% ", { bold: "Clients Retention Rate" }],
    ],
    ctaLabel: "Send me a proposal",
    ctaHref: "popup",
    phoneLabel: "Call Us +91 9106060593",
    phoneHref: "tel:+919106060593",
    formTitle: "Request a Free Quote",
    btnArrow: BTN_ARROW,
  },

  tablePackagesAccordion: {
    eyebrow: "Our",
    title: "SEO Packages",
    subtitle:
      "SEO packages for small, medium and large enterprises to suit their unique needs. Choose a package that suits your business requirements and can serve the core purpose of ranking at the top of the search engine results.",
    budgetLabel: "SEO Plan",
    tiers: [
      { name: "Basic", price: "$499", per: "Monthly" },
      { name: "Silver / Starter", price: "$799", per: "Monthly" },
      { name: "Gold / Professional", price: "$999", per: "Monthly", popular: true },
      { name: "Platinum / Enterprise & Ecommerce", price: "$1499", per: "Monthly" },
    ],
    headRows: SEO_HEAD_ROWS,
    categories: SEO_CATEGORIES,
    ctaLabel: "Buy Now",
    ctaHref: "popup",
    btnArrow: BTN_ARROW,
  },

  topIconBox: {
    eyebrow: "Want Better Search Rankings? Invest in",
    title: "Icecube Digital SEO Services",
    subtitles: [
      "With Icecube Digital's full-service solutions, you can get SEO services that offer a comprehensive approach to drawing in targeted traffic and converting it into sales. Our expertly curated and affordable SEO packages in the USA have everything you need — from strategy development and optimization implementation to performance measurement and change adaptation. Find out now what they include:",
    ],
    columns: 3,
    items: [
      {
        icon: "/assets/icons/result.svg",
        title: "We Know What Gets Results",
        body: "Since every business is different, a generic SEO strategy rarely works. As an experienced search engine optimization agency, we prioritize the target market and industry your brand caters to. Our experts develop personalized strategies to increase your online presence.",
      },
      {
        icon: "/assets/icons/smart-search.svg",
        title: "We Find the Right Keywords for You",
        body: "Our experts aim to find the most relevant terms for your brand through effective keyword research. We use top-notch tools for keyword research to provide insightful information and help in properly optimizing your website.",
      },
      {
        icon: "/assets/icons/shield-check.svg",
        title: "No Shady Stuff, Only Clean SEO",
        body: "We understand that most agencies overpromise and underdeliver. At Icecube Digital, we're obsessed with transparency. You'll always know exactly what we're doing, what the SEO packages pricing is, and how it's performing. Meaning? Zero guesswork.",
      },
      {
        icon: "/assets/icons/wallet.svg",
        title: "Plans That Fit Your Budget",
        body: "Our best SEO packages in the USA are made to fit your specific requirements and financial constraints, whether you're a startup, mid-sized business, or well-established business. We provide adaptable, scalable solutions that complement your objectives without going over budget.",
      },
      {
        icon: "/assets/icons/note-edit.svg",
        title: "Content That Actually Connects",
        body: "Our professional content strategy aligns with your goals, fills gaps, and drives traffic. With SEO tools, competitor analysis, and precise updates, we create content that ranks, engages, and converts.",
      },
      {
        icon: "/assets/icons/www.svg",
        title: "Local or Global, We've Got You",
        body: "Our team customizes SEO to fit your reach, whether it be local or worldwide. We create tactics that increase traffic, foster trust, and help your business grow, whether you're looking to expand locally or globally.",
      },
      {
        icon: "/assets/icons/search-link.svg",
        title: "Quality Backlinks, No Junk",
        body: "At Icecube Digital, we use partnerships, marketing, and guest pieces to create high-quality, moral backlinks. Without running the danger of penalties, our tactics increase the authority, ranks, and visibility of your website.",
      },
      {
        icon: "/assets/icons/hand-support.svg",
        title: "Ongoing SEO Support",
        body: "We understand that SEO isn't a one-time job but an ongoing effort. Our team stays ahead of trends, handles constant updates, and ensures your rankings are consistent.",
      },
    ],
  },

  achievements: achievementsSection,

  leftIconBox: {
    eyebrow: "Why SEO Packages Are a",
    title: "Smart Choice for Businesses",
    subtitle: [
      "Visibility on Google is essential since it holds an 86% market share in search engines. Our SEO products can help with that. At Icecube Digital, we develop customized plans that improve ranks and traffic, and produce tangible outcomes so your business can expand and stand out where it counts most confidently.",
    ],
    items: [
      {
        icon: "/assets/icons/magnet.svg",
        title: "More People Can Find You Online",
        body: "We help your business get found by the right people. Our SEO strategies boost organic visibility, driving high-quality traffic from users already searching for your products or services — no chasing, just genuine interest and results.",
      },
      {
        icon: "/assets/icons/dollar-graph.svg",
        title: "Saves Money Over Time",
        body: "Most managers and business owners don't have a lot of free time, particularly when it comes to a time-consuming strategy like SEO. Effective SEO plans like ours include working with a team of experts to fully manage your search marketing strategy, saving more time and effort.",
      },
      {
        icon: "/assets/icons/trusted-value.svg",
        title: "Boosts Trust and Credibility",
        body: "Our SEO plans boost your credibility when you rank on Google's first page. Most consumers rarely click on page two because they trust the top results. Strong SEO means fast site speed, excellent content, and mobile usability. It also helps you establish credibility and win over customers.",
      },
      {
        icon: "/assets/icons/like.svg",
        title: "Improves the User Experience",
        body: "At Icecube Digital, we help enhance your website's user experience, a crucial part of SEO. Google users expect quick, clear answers. Our SEO packages include tools to fix clutter, popups, and mobile issues so visitors stay, engage, and convert.",
      },
      {
        icon: "/assets/icons/rocket.svg",
        title: "Helps You Beat the Competition",
        body: "We research your market, monitor rival activity, and make constant optimizations so you dominate search results to stay one step ahead of the competition.",
      },
      {
        icon: "/assets/icons/seo-monitor.svg",
        title: "You Can Track Everything",
        body: "You can see every click, rank change, and lead with Icecube Digital. You won't ever have to wonder what's working because our SEO services are completely transparent.",
      },
    ],
  },

  infoBox: {
    eyebrow: "What You'll Get",
    title: "With Our SEO Plans?",
    subtitle:
      "Our affordable SEO service packages are packed with powerful features designed to deliver real results. Get SEO packages tailored to the specific requirements of small, medium, and large businesses. Just select a plan that meets your business needs to appear higher in search engine results.",
    items: [
      {
        title: "In-Depth On-Page SEO Audit",
        body: "Our diverse SEO service packages also include thorough on-page and off-page SEO audits. From technical checks and content analysis to backlink profiles and site structure, we uncover what's holding you back, and where growth opportunities lie.",
      },
      {
        title: "Weekly Performance Updates",
        body: "In the world of SEO, transparency is crucial, and we provide regular weekly updates to keep you informed about campaign data and results. These reports often contain data on conversion rate, backlink profile, keyword ranking, and website traffic.",
      },
      {
        title: "Comprehensive Keyword Strategy",
        body: "Our SEO plans focus on delivering real ROI by truly understanding your business. Our SEO experts review current rankings, research high-impact keywords, and select those with the strongest business intent for maximum SERP visibility.",
      },
      {
        title: "Manual Link Building",
        body: "Having trouble creating reliable connections that have an impact? Our SEO packages focus on manually creating high-quality links through press releases, specialized forums, and guest articles, increasing authority, fostering trust, and producing efficient SEO results.",
      },
      {
        title: "Risk-Free Guarantee",
        body: "Our affordable SEO packages in the USA come with warranties that give you total control and peace of mind. We only employ tried-and-true, moral SEO techniques, and you won't be charged if we don't produce quantifiable outcomes.",
      },
      {
        title: "Dedicated Support Team",
        body: "Working with Icecube Digital gives you access to a group of professionals committed to achieving results for your business. Together, we create strategic plans, monitor performance, and update plans in response to shifting market dynamics and algorithmic modifications.",
      },
    ],
  },

  caseStudy: {
    eyebrow: "Our",
    title: "Case Studies",
    subtitle: [
      "Our work at Icecube Digital is about smart, platform-specific execution. Our clients appreciate that we understand that every CMS is unique. We are well-versed in the technical nuances of WordPress and Shopify. Their outcomes speak for themselves, which is why they have faith in us. See the evidence and hear their stories.",
    ],
    postIds: [56589, 56585, 56582],
    caseStudyCtaLabel: "More Case Studies",
    caseStudyCtaHref: "/case-studies/",
    btnArrow: BTN_ARROW,
  },

  ourClients: ourClientsSection,

  getQuote: true,

  weServe: true,
};

export default SeoPackages;
