const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const BrisbaneSeo = {
	slug: "seo-services-brisbane",
	pageTitle: "SEO Services Brisbane | SEO Agency for Growth & AI Search",
	metaDescription: "Grow your Brisbane business with expert SEO services. Improve rankings, leads, organic traffic, and AI search visibility with tailored SEO strategies from Icecube Digital.",

	banner: {
		heading: "SEO Services Brisbane That Drive Rankings, Leads & Business Growth",
		paragraphs: [
			"Before a Brisbane customer calls, books, or buys, they search online. Around 68% of online experiences start with organic search, not a social media ad or a referral link. In many cases, it begins with a simple Google search from someone actively looking for the products or services you offer.",
			"Icecube Digital offers SEO services for Brisbane businesses that improve brand visibility, attracting purchase-intent customers or qualified leads.",
			"Our Brisbane SEO services are designed around the goal: To connect your business with the customers who are already looking for you. We audit, plan, build, and report with full visibility into what's being done and why it matters for your bottom line.",
			"Most agencies chase rankings alone; we talk about what those rankings should actually achieve: Qualified leads, customer acquisition, and measurable revenue growth. If you're ready to stop competing on ad spend and start building something that lasts, let's talk.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	achievements: achievementsSection,

	caseStudy: {
		eyebrow: "Our",
		title: "Case Studies",
		subtitle: [
			"Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [56558, 56534, 56582],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "SEO Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	infoBox: {
		eyebrow: "Why SEO is Essential for",
		title: "Long-Term Business Growth?",
		subtitle: "For Brisbane businesses, organic search is one of the most effective ways to attract new customers. SEO helps improve your visibility in these search results, and here’s how it benefits your business:",
		items: [
			{
				title: "Increased Online Visibility",
				body: "Most clicks go to the businesses ranking on page one of Google. If your website sits on page two or three of Google, it might as well be invisible. Organic SEO moves your business to top positions of Page 1, where people are actively looking and researching.",
			},
			{
				title: "Generate Qualified Leads",
				body: "SEO targets people who are already searching for a solution. It means you're answering a question they're already asking or solving a problem they’re struggling with. This search intent means organic visitors are more likely to convert, leading to more enquiries, calls, and sales.",
			},
			{
				title: "Compete Against Larger Brands",
				body: [
					"A local Brisbane business doesn't need a national marketing budget to win locally. With the right ",
					{ text: "local SEO strategy", href: "/local-seo-services/" },
					", a well-optimized local business can outrank larger competitors in the searches that matter most, the ones happening in their own suburb or service area.",
				],
			},
			{
				title: "Long-Term Marketing ROI",
				body: "Paid advertising stops generating leads the moment you stop paying for it. SEO works differently. The authority and content you build compound over time. Once a page earns strong rankings, it keeps generating traffic month after month, turning your website into a long-term asset.",
			},
			{
				title: "Build Brand Authority",
				body: "Businesses that appear consistently at the top of relevant search results build trust. Customers tend to view businesses that rank well as more established and more credible, even before they've visited the site or read a single review. Showing up repeatedly across multiple searches (whether informational or commercial) positions your brand as a recognized authority in your field.",
			},
		],
	},

	topIconBox: {
		eyebrow: "Results-Driven SEO Services for",
		title: "Brisbane Businesses",
		subtitle: "Every business has a different starting point, with different competitors, different technical issues, and different growth goals. Our SEO services for Brisbane businesses are built around your specific business needs rather than a fixed package. Across every service we deliver, our approach is the same: understand what's holding your rankings back, fix it properly, and build something that lasts.",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/home.svg",
				title: "Local SEO",
				body: "Our local SEO Brisbane strategies optimize your Google Business Profile, build consistent local citations, and target location-specific keywords your customers are actively searching for. This helps Brisbane businesses appear in local search results and Google Maps.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "eCommerce SEO",
				body: "We offer an eCommerce SEO Brisbane strategy that includes category page structure, product page optimization, internal linking, and schema markup tailored to suit online shopping sites. This ensures improved search results for commercial keywords and increased sales through organic searches.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO",
				body: [
					"A site with crawl errors, slow load times, or broken indexation signals is invisible to Google, regardless of how good its content is. Our ",
					{ text: "technical SEO", href: "/technical-seo-services/" },
					" work begins with a thorough audit of your site's architecture and covers Core Web Vitals, XML sitemaps, robots.txt configuration, and mobile performance.",
				],
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "On-Page SEO",
				body: [
					"We offer ",
					{ text: "on-page SEO", href: "/on-page-seo-services/" },
					" Brisbane services that optimize title tags, meta descriptions, heading structure, and content quality across every important page of the website, such that it ranks easily for the right search terms.",
				],
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "SEO Audit",
				body: "Our SEO audit Brisbane services are designed to conduct a detailed SEO audit to analyze the present technical health, on-page and off-page quality signals, and competitor positioning. This helps in designing a clear action plan for a complete SEO optimization process.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Link Building",
				body: "We create a structured link building Brisbane strategy that focuses on using a white-hat acquisition approach from relevant, high-quality, and authoritative Australian and industry-specific sites. The result is a website with a strong domain authority and ranking potential.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "SEO Consulting",
				body: "Many businesses already have a full in-house marketing team and only need expert guidance and support. We offer SEO consultant Brisbane services that assist teams with a structured strategy, a clear and detailed audit, and a well-planned roadmap that can be executed by the teams with confidence.",
			},
			{
				icon: "/assets/icons/shopify.svg",
				title: "Shopify SEO",
				body: [
					"We provide ",
					{ text: "Shopify SEO", href: "/shopify-seo-service/" },
					" Brisbane services to address unique Shopify challenges, like duplicate content issues, thin content collected pages, and limited control over canonical URLs, by using techniques like URL configurations, optimizing collection and product pages, implementing structured data, and resolving app conflicts that affect crawlability.",
				],
			},
			{
				icon: "/assets/icons/wordpress.svg",
				title: "WordPress SEO",
				body: [
					"WordPress sites commonly encounter issues related to plugin conflicts, bloated code, and SEO structures. Our ",
					{ text: "WordPress SEO", href: "/wordpress-seo-service/" },
					" Brisbane services are designed to address these issues through plugin optimization, website speed improvements, and content structure, along with a clear internal linking strategy.",
				],
			},
			{
				icon: "/assets/icons/magento.svg",
				title: "Magento SEO",
				body: [
					"Magento-based websites face technical complexities such as ineffective crawls, complicated facet-based navigation, and slower loading speeds, resulting in a negative impact on the organic rankings. Our ",
					{ text: "Magento SEO service", href: "/magento-seo-services/" },
					" especially addresses these issues by integrating canonical tags, optimizing website speed, and category structure.",
				],
			},
		],
	},

	processSteps: {
		eyebrow: "Our Data-Driven SEO Process for",
		title: "Long-Term Success",
		subtitle: "Whether a small or a large-scale Brisbane business, every business type has different business goals, competitors, and a unique set of audience. That’s why we offer customized SEO strategies that are tailored to meet the real SEO requirements for businesses in actual competitive Brisbane markets.",
		columns: 2,
		steps: [
			{
				title: "Website Audit & Discovery",
				body: "Our SEO optimization process starts with a detailed SEO audit that involves analyzing the technical health, content strategy, backlink profile, and the present competition. The audit process does not create a generic checklist or an upsell; it sets a foundation that helps businesses in understanding what’s holding back their website and where improvements are required.",
			},
			{
				title: "Competitor Research",
				body: "Competitor analysis is a valuable SEO strategy. This includes analyzing the keyword rankings, content gaps, search results positioning, and link profiles. The overall goal is to identify the existing opportunities to build a smarter path for businesses and not to copy what’s already out there.",
			},
			{
				title: "Keyword Research",
				body: "Identifying potential customers requires using the right search keywords. Our team focuses on identifying the long-tail, local keyword-mapping, and high-value, intent-matching keywords that help you connect your business with the right customers instead of just boosting the search volume.",
			},
			{
				title: "AI-Ready SEO Strategies",
				body: "A successful AI-ready SEO strategy brings together the results from the audit, keyword research, and competitor analysis into a clear plan. Additionally, a tailored strategy based on each business's competition, goals, and industry needs is included to enhance SEO results instead of relying on a one-size-fits-all template.",
			},
			{
				title: "On-Page Optimization",
				body: "For a target search experience, we focus on optimizing the headings, page titles, internal linking, and modifying the content depth throughout the website. This approach enables search engines to better understand and analyze your content for better visibility while also providing an improved navigation experience for the website user.",
			},
			{
				title: "AI Search Optimization",
				body: [
					"We provide ",
					{ text: "AI SEO services", href: "/ai-seo-services/" },
					" that help in refining your website content, with clear headings, schema markup, entity relationships, and transforming the structure into an answer-focused format. The aim here is to improve AI visibility along with the traditional organic search.",
				],
			},
			{
				title: "Technical Improvements",
				body: "Technical issues have a direct impact on the performance of your website, even if it has highly optimized content. We fix the technical issues related to website page speed, crawlability, indexing, structured data implementation, site architecture, XML sitemaps, and mobile usability. Such technical fixes help in improving the accessibility of your website across the search engines.",
			},
			{
				title: "Link Building",
				body: "Website authority is an important ranking factor. Our link building Brisbane strategies assist businesses in integrating relevant and high-quality backlinks from trusted Australian and authentic industry-related websites. We focus on improving the relevance and credibility over volume, which strengthens the website's authority and ranking potential.",
			},
			{
				title: "Reporting",
				body: "To maintain transparency, we provide clear monthly reports to our clients that include every detail of the work done to improve the organic traffic performance, rankings, lead generation, and upcoming priorities. This way, our clients know exactly what is happening with their SEO, and what the right steps are being consistently taken to improve the performance.",
			},
			{
				title: "Continuous Optimization",
				body: "Investing in SEO optimization is a continuous process. With search algorithms evolving rapidly, your website also needs to adapt to optimize according to new customer search behaviors, search engine ranking criteria, and your changing business requirements. We offer continuous optimization for SEO that includes services to refine the SEO strategies to maintain visibility and a long-term partnership with the clients.",
			},
		],
	},

	infoBoxSecondary: {
		eyebrow: "Future-Ready SEO for AI Search",
		title: "(AEO & GEO)",
		subtitle: "A higher rank on the Google search results page does not signify that you are accessible to all potential customers. Your customers are also searching for the products and services you offer on the latest AI search engines or models such as ChatGPT, Google AI overviews, Perplexity, or Gemini. Brisbane businesses need an SEO partner that combines smart strategies such as technical SEO, structured content, semantic optimization, and authority building to make your business appear wherever your customers search.",
		items: [
			{
				title: "Answer Engine Optimization (AEO)",
				body: [
					"Our ",
					{ text: "AEO services", href: "/answer-engine-optimization-aeo-services/" },
					" Brisbane are designed to boost the website’s visibility across featured snippets, Google AI overviews, and answer-focused search experiences. We include techniques like search intent alignment, FAQ optimization, structured data implementation, and adding conversational content to allow AI search engines to discover and priorities your website content in the search results.",
				],
			},
			{
				title: "Generative Engine Optimization (GEO)",
				body: "To make your content visible and gain reference to your website in Generative search answers different factors, including the semantic relevance, topical authority, and entity relationships, should be optimized. Our GEO strategies support and strengthen the E-E-A-T signals, enhance entity optimization, improve topical depth, and focus on creating citation-worthy content that increases its chances of appearance in the AI search results.",
			},
			{
				title: "Future-Proof Search Strategy",
				body: "A strong and future-proof SEO strategy enhances your business’s visibility across traditional and AI search results. Our team aims to improve the website visibility across Google Search, Google AI overviews, Gemini, ChatGPT, Perplexity, and Claude. This approach ensures that your business remains visible as the user search behavior evolves.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Why Choose Icecube Digital for",
		title: "Your Brisbane SEO?",
		subtitles: [
			"Selecting an agency that offers SEO services Brisbane requires more than just comparing the list of services offered by the leading businesses in the industry. You need a team that combines technical depth and knowledge with real commercial thinking.",
			"Icecube Digital is a popular SEO company Brisbane that prioritizes working closely with Brisbane businesses to understand and align their business goals with the evolving customer search behavior.",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/user-team.svg",
				title: "Experienced SEO Specialists",
				body: "Our dedicated SEO team comprises experts in technical SEO, off-page authority building, and content strategy development. This board team of skilled SEO specialist Brisbane is capable of addressing a full spectrum of SEO challenges that impact the website's visibility and search performance. From technical audits that analyze the present website complexities to powerful AEO Services Brisbane, our team provides useful recommendations for efficient business outcomes.",
			},
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "AI-Ready SEO Strategies",
				body: "Ranking on the traditional Google search page results solely is not enough. We build SEO strategies for Google AI overviews, modern AI search platforms, semantic search, entity optimization, and structured data. This approach helps your business remain visible among the evolving AI search models as well as the traditional search platforms.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "eCommerce Expertise",
				body: [
					"A majority of agencies offer eCommerce SEO as an additional service. Unlike those, we provide ",
					{ text: "eCommerce SEO", href: "/ecommerce-seo-services/" },
					" as a core capability and design strategies that work extensively across popular platforms such as Shopify, WooCommerce, Magento, etc. This helps businesses in overcoming platform-specific SEO challenges while boosting their organic revenue performance.",
				],
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Transparent Reporting",
				body: "Our clients receive well-structured and clear monthly reports that cover the progress in achieving improved rankings, organic traffic, and the next steps in the SEO optimization process. We do not encourage unnecessary jargon or complicated metrics integrated into the reports that confuse the clients. Instead, we adopt simple reporting practices that define clear insights and maintain transparency with our customers.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Dedicated SEO Strategy",
				body: "Every Brisbane business is different, which is why a generic SEO strategy rarely delivers the best results. We build tailored SEO campaigns based on your industry, target audience, competitors, and growth objectives. This customized approach helps your business improve search visibility, attract high-intent customers, and drive measurable long-term growth.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Data-Driven Decisions",
				body: "Our SEO recommendations are grounded in real data insights that are drawn from Google Search Console, Google Analytics, keyword research, performance data, and detailed competitor research. We do not leave room for guesswork; if a tactic isn't producing results, the data tells us quickly, and we adjust accordingly.",
			},
			{
				icon: "/assets/icons/hand-support.svg",
				title: "Ongoing SEO Support",
				body: "Consistency in SEO optimization is important. That’s why we offer regular strategy reviews, SEO performance analysis and continuous improvement in the integrated SEO strategies so that the search algorithms are able to access your website content with the evolving business requirements and updates.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "White-Hat SEO Practices",
				body: [
					"No shortcuts, no link schemes, and no risky tactics are integrated. We adopt ethical and transparent SEO methodologies that align with Google’s guidelines and the industry’s best practices. Every ",
					{ text: "SEO optimization strategy", href: "/seo-search-engine-optimization/" },
					" is implemented with a goal to boost search visibility while maintaining compliance with the transforming search engine standards.",
				],
			},
		],
	},

	infoBoxTertiary: {
		eyebrow: "Measurable SEO Results That",
		title: "Grow Your Business",
		subtitle: "Good search engine rankings are only one part of the SEO optimization process. Modern businesses want to achieve improved organic traffic and high-converting leads that drive strong revenue. Our SEO processes do not priorities vanity metrics that contribute very little to your bottom line. Instead, we create a structured SEO optimization plan to achieve measurable results and long-term business goals.",
		items: [
			{
				title: "Increased Organic Traffic",
				body: "Effective SEO techniques drive high-intent organic traffic, ultimately attracting stronger engagement and improved conversion opportunities. Our well-designed SEO approach strengthens organic traffic growth that gains traction from customers who are actually looking for what your business offers, unlike the marketing campaigns that just increase the search volume by attracting customers who might not even have purchase intent.",
			},
			{
				title: "Better Rankings",
				body: "Ranking your website for valuable keywords is what most businesses want to achieve. We provide thoroughly designed SEO processes that focus on enhancing your website's visibility for the important keywords that many of your customers might actually be using to search for the products and services that you might be offering. We also focus on improving the visibility for the critical keyword searches that impact local relevance, buyer intent, and your business goals, rather than focusing on keywords that do not add any practical benefit to your visibility or revenue.",
			},
			{
				title: "More Qualified Leads",
				body: "When your website starts appearing in the top intent-driven search results, the quality of the customer enquiries improves gradually. Strong visibility efficiently leads to increased customer calls, service requests, and submission of contact forms, which all together can ultimately lead to qualified lead conversions.",
			},
			{
				title: "Higher eCommerce Revenue",
				body: "For eCommerce businesses, the right SEO strategy offers visibility across product and category pages. This helps in attracting traffic, customers who actually intend to buy, and creates opportunities that quickly convert organic traffic into sales revenue.",
			},
			{
				title: "Sustainable Business Growth",
				body: "Paid advertising offers visibility for a fixed duration, i.e, till the time your ad runs. But SEO focuses on delivering compounding long-term returns. It strengthens website visibility, storing rankings and authoritative content that helps in driving sustainable traffic and leads, making SEO a long-term revenue-generating asset instead of a recurring advertising expense.",
			},
		],
	},

	plainText: {
		eyebrow: "Ready to Grow Your Brisbane Business with",
		title: "SEO That Delivers?",
		contentAlign: "center",
		paragraphs: [
			"Whether you're in construction, professional services, retail, or eCommerce, you're up against local operators, national chains, and Brisbane businesses that have been investing in their online presence for years. Most Brisbane business owners know they should be ranking on Google. But only a few of them know the reason behind their degrading SEO performance. A well-designed SEO strategy developed by an experienced SEO agency can help businesses appear in search results when customers are actively searching. Thus, helping you build trust even before they click.",
			"If your Brisbane business depends on customers finding you online, SEO is one of the most reliable ways to build that visibility into a long-term asset rather than an ongoing expense.",
			"Icecube Digital offers a free consultation with no lock-in contracts, just a straightforward conversation to get you more traffic, more leads, and more revenue from the people already searching for what you offer. Start with a free SEO strategy consultation and find out exactly where your site stands.",
		],
	},

	cta: {
		text: "Grow Your Brisbane Business with Expert SEO Services",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Brisbane SEO",
		title: "FAQs",
		items: [
			{
				question: "What do SEO services include?",
				answer: "A comprehensive SEO programme covers keyword research, on-page optimization, technical SEO, link building, content strategy, and ongoing reporting. The covered services might vary based on your industry, existing website condition, and business goals.",
			},
			{
				question: "How much do SEO services cost in Brisbane?",
				answer: "The cost of SEO services varies depending on your competition level, the size of your website, and the scope of work required to reach your goals. Icecube Digital offers tailored packages based on your specific requirements and SEO goals.",
			},
			{
				question: "How long does SEO take to show results?",
				answer: "Most businesses begin seeing progress within three to six months. But businesses in more competitive markets can take six to twelve months to show movement in sales. Early wins with technical fixes and quick keyword gain often appear sooner, but the returns compound over time.",
			},
			{
				question: "Is SEO worth it for my Brisbane business?",
				answer: "Yes. Organic traffic converts well because the people finding you are already actively searching for what you offer. In a growing market like Brisbane, SEO remains one of the highest-ROI digital marketing channels available.",
			},
			{
				question: "What is Local SEO, and do I need it?",
				answer: "Local SEO is the process of optimizing a business's online presence to appear in geographically relevant search results. It includes strategies to make your business appear on Google Maps and the local listings in the form of organic results.",
			},
			{
				question: "Do you provide eCommerce SEO services?",
				answer: "Yes, Icecube Digital offers eCommerce SEO that includes category and product page optimization, managing faceted navigation correctly, implementing schema markup, and targeting keywords with a conversion goal.",
			},
			{
				question: "Do you work with Shopify, Magento, and WordPress sites?",
				answer: "Yes, we offer SEO services that can be customized for different platforms, including Shopify, Magento, and WordPress. With a thorough understanding of the specific challenges these platforms present, such as duplicate content, navigation challenges, and speed performance, we customize each optimization suited to the environment.",
			},
			{
				question: "Can you guarantee first-page rankings on Google?",
				answer: "No, Icecube Digital does not guarantee first-page rankings. As SEO algorithms continuously evolve and influence the search visibility, rankings, and overall SEO performance, an assurance of ranking on the first page is difficult. Instead, we guarantee a structured, transparent process, regular reporting, and a consistent focus on growing organic traffic and leads that offer an improved SEO performance over a realistic timeframe.",
			},
			{
				question: "How do I choose the right SEO agency in Brisbane?",
				answer: "Look for transparency in reporting, a proven track record, effective communication, and experience on that platform. Also, check out the reviews on Google from their former customers and make sure to inquire about their methodology, ensuring that they practice white-hat methods.",
			},
			{
				question: "What makes Icecube Digital different from other Brisbane SEO agencies?",
				answer: "With years of experience in developing SEO strategies for eCommerce, B2B, and online retail, and other types of businesses, Icecube Digital follows a structured data-driven process in every engagement. We don't generate impressive-looking dashboards; we report on the metrics that connect to your business outcomes. We also invest in strategies beyond traditional Google rankings and help businesses gain visibility in AI search results. For Brisbane businesses serious about long-term SEO growth, we work as a genuine partner rather than a service vendor.",
			},
			{
				question: "How can SEO help my business show up in Google AI Overviews, ChatGPT, and other AI search tools?",
				answer: "To assist businesses in ranking on the leading AI search results, integrating SEO strategies for structured content, subject matter expertise, strong E-E-A-T signals, schema markup, topical authority, and entity optimization is essential. Icecube Digital develops and implements these strategies to address both traditional and AI-powered search visibility from scratch.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default BrisbaneSeo;
