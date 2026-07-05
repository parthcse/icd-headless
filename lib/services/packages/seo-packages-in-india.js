const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import { SEO_HEAD_ROWS, SEO_CATEGORIES } from "./_seo-packages-shared";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";

/** @type {import('../index').ServiceData} */
const SeoPackagesInIndia = {
  slug: "seo-packages-in-india",
  pageTitle: "SEO Packages in India | Affordable Monthly SEO Plans & Pricing | Icecube Digital",
  metaDescription:
    "Affordable SEO packages in India for small, medium and large businesses. Compare our Basic, Silver, Gold and Platinum monthly SEO plans — including AI SEO — and pick the one that fits your goals.",

  banner: {
    heading: "SEO Packages in India",
    paragraphs: [
      "Search engine optimization is not just about on-page optimization, off-page optimization, or working on the website technicalities, so that it becomes usable and interactive. With the rise of AI searches, now SEO also includes optimization of AI search engines, so that you can get a reference in the AI overview and AI-generated results. So, in this new-age era, which is defined by AI, SEO is about making sure all parts work together: clear messaging, structured data, useful content, fast performance, and yes, even being understandable to AI systems. If you look over just one aspect, like on-page or technical SEO, you will surely be missing out on the bigger picture. Hence, you should opt for the best SEO packages in India, which include all the services that you need to rank higher on the SERPs. Icecube Digital provides the best and affordable SEO packages to businesses across different industries. Trusted by over 800+ clients and with a client satisfaction rate of 95%, we are the go-to choice of brands that need a boost in their rankings to get more organic traffic, leads, and revenue.",
    ],
    ctaLabel: "Send me a proposal",
    ctaHref: "popup",
    phoneLabel: "Call Us +91 9106060593",
    phoneHref: "tel:+919106060593",
    formTitle: "Get Your Free AI SEO Audit",
    btnArrow: BTN_ARROW,
  },

  tablePackagesAccordion: {
    eyebrow: "Our",
    title: "SEO Packages",
    subtitle:
      "SEO packages for small, medium and large enterprises to suit their unique needs. Choose a package that suits your business requirements and can serve the core purpose of ranking at the top of the search engine results.",
    budgetLabel: "SEO Plan",
    tiers: [
      { name: "Basic", price: "₹25K", per: "Monthly" },
      { name: "Silver / Starter", price: "₹40K", per: "Monthly" },
      { name: "Gold / Professional", price: "₹60K", per: "Monthly", popular: true },
      { name: "Platinum / Enterprise & Ecommerce", price: "₹90K", per: "Monthly" },
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
      "Search engine optimization has gone through massive changes, and now it is not what brands usually think it is. By making simple changes in the website structure or following the SEO guides published on the Internet, you can see improvement in your ranking, but not the results that you wish to see. Today, SEO is a game of strategy, precision, and expertise. And to truly turn the tables in your favor, you need seasoned professionals who understand how to play it right. Icecube Digital, with around 14 years of industry experience, becomes your extended team to create strategies that will deliver the desired outcomes.",
    ],
    columns: 3,
    items: [
      {
        icon: "/assets/icons/result.svg",
        title: "We Know What Gets Results",
        body: "We know all the tactics that will deliver the desired results. Our experts tailor the SEO strategies to infuse experience-backed strategies and the latest industry trends to meet your metrics, whether it is appearing in the AI overview or improving CTR or organic traffic.",
      },
      {
        icon: "/assets/icons/smart-search.svg",
        title: "We Find the Right Keywords for You",
        body: "With us in your team, you don't need to worry about anything. You need to tell us your motive, and our experts will handle everything. With our AI-powered tools, we will find the right keywords (long-tail and short-tail) that match your users' intent and your business objectives.",
      },
      {
        icon: "/assets/icons/shield-check.svg",
        title: "No Shady Stuff, Only Clean SEO",
        body: "We deliver the results using industry-standard practices and Google-approved methods. We don't chase shortcuts, buy sketchy backlinks, or play games with search algorithms. Real growth doesn't need any schemes; it needs a strategy that search engines trust and your audience values.",
      },
      {
        icon: "/assets/icons/wallet.svg",
        title: "Plans That Fit Your Budget",
        body: "Every business is different and has its priorities. That's why we have all sorts of SEO packages available to suit your brand's needs. SEO is important, but it doesn't need to be expensive. SEO is a part of digital marketing strategy, and our affordable SEO packages ensure that every part of your strategy gets the attention it deserves.",
      },
      {
        icon: "/assets/icons/note-edit.svg",
        title: "Content That Actually Connects",
        body: "Content is king in SEO, and our team of content writers curates the content that AI algorithms can understand, crawlers can skim, and your audience can relate to and learn something new from.",
      },
      {
        icon: "/assets/icons/www.svg",
        title: "Local or Global, We've Got You",
        body: "As an Indian brand, it might be in your future plans to expand to international markets. Regardless of your plans, our future-proof strategies are designed to easily scale as per your business growth and stakeholders' ambitions.",
      },
      {
        icon: "/assets/icons/search-link.svg",
        title: "Quality Backlinks, No Junk",
        body: "Backlinks are important to all SEO strategies, and we, as an agency, do not get you backlinks from private blog networks, low-quality directories, forums, or irrelevant websites. We ensure that all the backlinks are coming from relevant and trustworthy domains. Along with volume, there is context and authority as well.",
      },
      {
        icon: "/assets/icons/hand-support.svg",
        title: "Ongoing SEO Support",
        body: "SEO is an ongoing effort, and so are we as your affordable SEO agency. Our support doesn't end when the strategy is executed. We map the results and deliver them to you. Besides, our experts think long-term, and we plan future strategies to support your marketing efforts.",
      },
    ],
  },

  achievements: achievementsSection,

  leftIconBox: {
    eyebrow: "Why SEO Packages Are a",
    title: "Smart Choice for Businesses",
    subtitle: [
      "In SEO packages, you can get everything from website audit to local business listings and website monitoring at a cost-effective monthly rate. The packages work well for all sorts of businesses, like small businesses with limited budgets, agencies managing multiple clients, enterprises requiring scalable support, and founders needing expert guidance. Let's see how it is a smart choice for business:",
    ],
    items: [
      {
        icon: "/assets/icons/magnet.svg",
        title: "More People Can Find You Online",
        body: "With an SEO package, we work on all aspects, which also include landing page creation, local business optimization, and email outreach for backlink creation. So, our holistic approach ensures that your visibility reaches its maximum potential.",
      },
      {
        icon: "/assets/icons/dollar-graph.svg",
        title: "Saves Money Over Time",
        body: "Unlike paid ads that stop working the moment you stop spending, SEO never fails to deliver its value. It is time-consuming as it takes 6-12 months to deliver actual results, but it has a higher ROI than PPC.",
      },
      {
        icon: "/assets/icons/trusted-value.svg",
        title: "Boosts Trust and Credibility",
        body: "We pay attention to every detail, from a minor inconvenience in browsing the website to content quality. Our services in SEO packages ensure that every optimization we make helps in building trust and credibility, and that's how your brand reaches the top of SERPs.",
      },
      {
        icon: "/assets/icons/like.svg",
        title: "Improves the User Experience",
        body: "SEO packages include everything, which means an interactive user interface, a better workflow, high-quality content and visuals, and AI-powered features, making the end user happy. If end users are happy, you will see positive results in your revenue and organic traffic.",
      },
      {
        icon: "/assets/icons/rocket.svg",
        title: "Helps You Beat the Competition",
        body: "Our affordable SEO package also includes competitor research, so we ensure that your strategies fill the gaps in the market. With our AI-powered analytics, we can tailor the SEO strategy to adapt quickly to shifts in your industry. This helps in beating the competition and staying ahead of the curve.",
      },
      {
        icon: "/assets/icons/seo-monitor.svg",
        title: "You Can Track Everything",
        body: "All our processes are transparent. You'll always know where you stand. From keyword rankings and traffic sources to conversion rates and backlink profiles, every part of your SEO performance is trackable and reportable.",
      },
    ],
  },

  infoBox: {
    eyebrow: "What You'll Get",
    title: "With Our SEO Plans?",
    subtitle:
      "The SEO services change as per your business size, type, and industry. For instance, a local bakery's SEO strategy cannot be the same as an eCommerce brand. The local bakery will target a local audience, local keywords, and focus on improving foot traffic. An eCommerce brand will focus on a national or even global audience, aiming to rank for product-specific keywords, optimize hundreds of product pages, and drive online sales. When you go with our SEO packages, here are the things that will be common in all the packages:",
    gridClass: "sm:grid-cols-2 lg:grid-cols-3",
    items: [
      {
        title: "In-Depth On-Page SEO Audit",
        body: "We conduct a thorough website audit to understand the existing gaps in your website and areas that require improvement.",
      },
      {
        title: "Weekly Performance Updates",
        body: "As we start with our SEO initiatives, you will receive weekly performance reports, and a call will be scheduled to discuss the progress so far.",
      },
      {
        title: "Comprehensive Keyword Strategy",
        body: "From primary and secondary to short-tail and long-tail keywords, we conduct extensive research to find the keywords that match the intent and context.",
      },
      {
        title: "Manual Link Building",
        body: "We get the backlinks through real outreach and relationship-building, not through automation, tricks, or passive methods.",
      },
      {
        title: "Risk-Free Guarantee",
        body: "If you feel like there is no progress (which won't happen) or the team is not working as per your expectations (again, the possibility is very less), you can back out easily, no contract fuss!",
      },
      {
        title: "Dedicated Support Team",
        body: "You will be assigned a dedicated team and a project manager who handles all the communication and tasks. If there is any issue or doubt, our team will take it on priority.",
      },
    ],
  },

  caseStudy: {
    eyebrow: "Our",
    title: "Case Studies",
    subtitle: [
      "Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements. We are an SEO agency that believes in results, and that's why all our SEO strategies revolve around data-driven insights, experience-backed tactics, and growing industry trends. Our efforts and ideology are highlighted in the results. Read the case studies of a few clients who opted for the affordable SEO packages and how their brand's growth trajectory changed from stagnant visibility to steady climbs in rankings, traffic, and revenue.",
    ],
    postIds: [56547, 56546, 56488],
    caseStudyCtaLabel: "More Case Studies",
    caseStudyCtaHref: "/case-studies/",
    btnArrow: BTN_ARROW,
  },

  faq: {
    eyebrow: "Frequently Asked Questions –",
    title: "SEO Packages in India",
    items: [
      {
        question: "Are SEO packages really worth it for Indian businesses?",
        answerHtml:
          "<p>Yes—when done correctly, SEO delivers one of the <strong class=\"font-semibold\">highest long-term ROIs</strong> for Indian businesses. Unlike paid ads, SEO continues to generate traffic and leads even when monthly spending pauses. With competition increasing across Indian markets, structured SEO packages help businesses build authority, visibility, and trust steadily rather than chasing short-term wins.</p><p>At Icecube Digital, our SEO packages focus on <strong class=\"font-semibold\">sustainable growth</strong>, not temporary ranking spikes.</p>",
      },
      {
        question: "How much do SEO packages cost in India?",
        answerHtml:
          "<p>SEO package pricing in India depends on your business size, competition, and growth goals. At Icecube Digital, our SEO packages <strong class=\"font-semibold\">start from ₹25,000 per month</strong>, making them accessible for startups, local businesses, and growing brands.</p><p>As your requirements scale—such as targeting more keywords, locations, or product pages—the scope and pricing can be adjusted accordingly.</p>",
      },
      {
        question: "How long does SEO take to show results?",
        answerHtml:
          "<p>SEO is a <strong class=\"font-semibold\">long-term investment</strong>, not an instant fix. Typically:</p><ul class=\"list-disc pl-5 space-y-1\"><li>Initial improvements are visible within <strong class=\"font-semibold\">3–4 months</strong></li><li>Consistent growth happens around <strong class=\"font-semibold\">6–9 months</strong></li><li>Strong ROI and stable rankings develop after <strong class=\"font-semibold\">9–12 months</strong></li></ul><p>The exact timeline depends on factors like competition, website history, content quality, and technical health.</p>",
      },
      {
        question: "Do SEO packages work for small businesses and startups in India?",
        answerHtml:
          "<p>Absolutely. SEO packages are especially effective for <strong class=\"font-semibold\">small businesses and startups</strong> because they help you compete strategically instead of spending heavily on ads.</p><p>With focused keyword targeting, local SEO, and intent-driven content, even smaller brands can outperform larger competitors in specific niches or locations.</p>",
      },
      {
        question: "What services are included in your SEO packages?",
        answerHtml:
          "<p>Our SEO packages include a <strong class=\"font-semibold\">complete, end-to-end SEO framework</strong>, such as:</p><ul class=\"list-disc pl-5 space-y-1\"><li>Technical and on-page SEO audits</li><li>Keyword and competitor research</li><li>Content optimization and strategy</li><li>Manual, high-quality link building</li><li>Local SEO and Google Maps optimization</li><li>AI SEO (optimization for AI search and overviews)</li><li>Performance tracking and transparent reporting</li></ul><p>Each package is tailored based on your business type and growth stage.</p>",
      },
      {
        question: "What makes Icecube Digital different from other SEO agencies in India?",
        answerHtml:
          "<p>Icecube Digital combines <strong class=\"font-semibold\">14+ years of hands-on SEO experience</strong> with modern AI-driven strategies. We don't follow templates or shortcuts.</p><p>What sets us apart:</p><ul class=\"list-disc pl-5 space-y-1\"><li>Clean, Google-compliant SEO practices</li><li>AI search optimization (GEO, AI Overviews, LLM visibility)</li><li>Transparent reporting and clear communication</li><li>Dedicated project managers</li><li>No lock-in contracts</li></ul><p>We work as an <strong class=\"font-semibold\">extension of your team</strong>, not just a service provider.</p>",
      },
      {
        question: "Can SEO help my business appear in AI search results like ChatGPT or Google AI Overviews?",
        answerHtml:
          "<p>Yes. Modern SEO goes beyond traditional rankings. Our AI SEO services focus on:</p><ul class=\"list-disc pl-5 space-y-1\"><li>Structured data and semantic clarity</li><li>Authority-building content</li><li>Brand mentions and trust signals</li><li>Context-driven optimization</li></ul><p>These factors increase your chances of being referenced in <strong class=\"font-semibold\">AI-generated answers and overviews</strong>, not just standard search results.</p>",
      },
      {
        question: "Is local SEO included in your SEO packages?",
        answerHtml:
          "<p>Yes. Local SEO is included where relevant. This includes:</p><ul class=\"list-disc pl-5 space-y-1\"><li>Google Business Profile optimization</li><li>Local keyword targeting</li><li>Location-based landing pages</li><li>Citation and NAP consistency</li></ul><p>Local SEO is essential for Indian businesses that rely on regional visibility, walk-ins, or service-based leads.</p>",
      },
      {
        question: "Will you provide regular reports and performance updates?",
        answerHtml:
          "<p>Yes, transparency is a core part of our process. You will receive:</p><ul class=\"list-disc pl-5 space-y-1\"><li>Weekly performance updates</li><li>Monthly detailed SEO reports</li><li>Keyword ranking movement</li><li>Traffic, conversion, and visibility insights</li></ul><p>We also schedule review calls to discuss progress and next steps.</p>",
      },
      {
        question: "Is there any long-term contract or lock-in period?",
        answerHtml:
          "<p>No. We believe in performance, not forced commitments. Our SEO packages are <strong class=\"font-semibold\">risk-free</strong>, with no long-term lock-in.</p><p>If at any point you feel the collaboration isn't aligned with your expectations, you're free to discontinue without complications.</p>",
      },
      {
        question: "How do I choose the right SEO package for my business?",
        answerHtml:
          "<p>Choosing the right SEO package depends on:</p><ul class=\"list-disc pl-5 space-y-1\"><li>Your industry competitiveness</li><li>Target locations (local, national, global)</li><li>Number of services or products</li><li>Growth timeline</li></ul><p>Our team helps you select the most suitable package after understanding your goals, ensuring you don't overpay or underinvest.</p>",
      },
      {
        question: "When should a business hire an SEO company?",
        answerHtml:
          "<p>You should consider hiring an SEO company when:</p><ul class=\"list-disc pl-5 space-y-1\"><li>Your website isn't generating enough organic leads</li><li>Paid ads are becoming expensive</li><li>Competitors are outranking you</li><li>You want long-term, predictable growth</li></ul><p>The earlier SEO is implemented, the stronger the foundation for future growth.</p>",
      },
    ],
  },

  ourClients: ourClientsSection,

  getQuote: true,

  weServe: true,
};

export default SeoPackagesInIndia;
