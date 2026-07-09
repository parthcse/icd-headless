const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const TechnicalSeoServices = {
	slug: "technical-seo-services",
	pageTitle: "Professional Technical SEO Company | Technical SEO Services USA",
	metaDescription: "Looking for the best technical SEO agency in the USA? Icecube Digital offers technical SEO services, audits, and solutions from certified consultants and specialists.",

	banner: {
		heading: "Technical SEO Services",
		paragraphs: [
			"Technical SEO services entail the enhancement of latent components of a website in order to increase its efficacy and visibility in organic search results. It ensures that your site’s code quality, architecture, performance, security, and mobile responsiveness all conform to the most recent SEO standards, in addition to keywords and content. In light of ongoing Google updates that prioritize website performance and user satisfaction, technical SEO has become increasingly critical.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	caseStudy: {
		eyebrow: "Our",
		title: "Case Studies",
		subtitle: [
			"Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [56578, 56573, 56551],
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

	plainText: {
		eyebrow: "Advanced Technical SEO Strategies to Boost Your",
		title: "Website Performance",
		contentAlign: "center",
		paragraphs: [
			"Increased qualified organic traffic, accelerated load times, reduced exit rates, and enhanced rankings are all outcomes of optimizing technical elements. Technical SEO additionally ensures that your website is adequately indexed and accessible to search engine crawlers. In an era when users expect websites to appear quickly, a technically solid foundation is crucial for long-term SEO success.",
			"Icecube Digital, comprised of professionals with 14 years of experience in digital marketing, is a prominent provider of technical SEO services. Our technical SEO solutions are customized to detect and resolve website-specific issues that may be impeding visibility. We keep ourselves updated with the latest SEO best practices and Google’s evolving algorithms.",
		],
		ctaLabel: "Request a Demo!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	infoBox: {
		eyebrow: "Benefits of Professional",
		title: "Technical SEO",
		columns: 3,
		items: [
			{
				title: "Leverage SEO Expertise to Complement Content and On-Page Optimization",
				body: [
					"Technical SEO ensures that search engines can easily crawl, index, and rank your pages, whereas ",
					{ text: "on-page optimization", href: "/on-page-seo-services/" },
					" and high-quality content help users perceive topical relevance. Technical considerations and on-page optimization work together to produce the greatest search results and conversion rates possible. On-page factors influence the user experience, while technical SEO establishes the groundwork.",
				],
			},
			{
				title: "More Security from Threats and Hacking",
				body: [
					"Reputable ",
					{ bold: "technical SEO consultants" },
					" conduct routine audits and verifications to ensure that a site adheres to the most recent security best practices, employs full HTTPS encryption, is configured appropriately for its host, and hinders threats such as SQL injection. It safeguards your website against malicious software and phishing attempts, ensuring users have a secure browsing experience. Consistent security enhancements ensure the protection of website assets and user data.",
				],
			},
			{
				title: "Handle Complex Site Migrations",
				body: "With their advanced knowledge, specialized technical SEO solutions can migrate websites to newer, quicker platforms in a seamless fashion, ensuring that rankings and traffic are not disrupted. Proficient in managing intricate CMS migrations from platforms such as Magento to BigCommerce and WordPress to Shopify, they ensure the preservation of your SEO equity by employing appropriate URL redirects, URL mapping, and content integration.",
			},
			{
				title: "Increased Organic Visibility and Traffic",
				body: [
					"By incorporating the suggestions provided by a ",
					{ bold: "technical SEO audit" },
					" and expert, businesses can enhance the visibility of their website in organic search results and attract a greater volume of qualified visitors. Technical optimizations identify and correct deficiencies that affect how search engines crawl, index, and rank your pages, including but not limited to site architecture, performance, and mobile compatibility.",
				],
				bodyAfter: "Addressing these concerns leads to improved rankings for the desired keywords, thereby augmenting the influx of pertinent organic visitors to your site. This incoming traffic is exceptionally targeted as visitors actively seek your products, services, or information. Increasing organic traffic increases the likelihood of successfully converting visitors into customers.",
			},
			{
				title: "Better Page Speed and User Experience",
				body: "A primary objective of expert technical SEO is to enhance page performance by employing diverse techniques such as image compression, caching, and content delivery networks (CDNs), in addition to optimizing the HTML, CSS, and JavaScript code.",
				bodyAfter: "Increased page launch speeds directly correlate with enhanced user experience, decreased abandon rates, and increased conversions. In addition, technical SEO guarantees that your site functions flawlessly on desktop and mobile devices. Slow mobile speeds negatively impact rankings; therefore, technical SEO resolves site speed issues.",
			},
		],
	},

	topIconBox: {
		eyebrow: "Comprehensive Technical",
		title: "SEO Services",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/sliders.svg",
				title: "On-Site Optimization",
				body: "Typically, technical SEO involves a multitude of minor adjustments that result in significant outcomes. Enhancing on-site components (e.g., imagery, content, meta tags, internal linking, design, server performance, IP addresses), as well as delving into technical intricacies, can significantly improve a website’s search engine rankings. For improved indexing and ranking, our seasoned technical SEO agency will optimize all on-site elements, including but not limited to content, HTML tags, schema markup, site architecture, internal linking structure, and page performance.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Google Penalty Removal",
				body: [
					"Has your website been penalized by recent Google algorithm updates, such as the update to fundamental web metrics or product reviews? Our team comprises of the most qualified ",
					{ text: "SEO specialists", href: "/hire-seo-experts/" },
					", who will conduct a comprehensive manual audit of your site and implement the necessary measures to eliminate the penalty imposed by Google without causing additional harm to your rankings. Our technical SEO agency determines the issues that led to the penalty, resolves them, and then requests Google to reconsider the site in accordance with tried and true methods and best practices.",
				],
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Technical SEO Audit",
				body: "Technical SEO audit services are essential to finding the gaps or faults that make your website weak in terms of SEO. It is an imperative part of SEO maintenance to ensure that your website is optimized for different search engines, like Bing, Google, and Yahoo. It highlights all the technical problems, including hreflang errors, canonical issues, or mixed content problems. Besides identifying problems through an audit, our experts will help you suggest to overcome the issues.",
			},
			{
				icon: "/assets/icons/voice.svg",
				title: "Voice Search Optimization",
				body: "Methods of locating information on the web have evolved internationally. Voice commands on devices such as Siri, Alexa, and Google Assistant are being utilized more frequently to locate information online. We can assist you in optimizing your site for improved voice search engine rankings. Our specialists have extensive knowledge of optimizing site architecture, AMP pages, content duration, word selection, grammar, meta descriptions, schema encoding, and more for enhanced voice search visibility and usability.",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "JavaScript Optimization",
				body: "JavaScript, a critical element that influences search engine optimization outcomes, is an indispensable component found in virtually all contemporary websites. As it contributes to the site’s dynamism, interactivity, and user engagement, it has a substantial effect on the user experience.",
				bodyAfter: "Our technical experts will optimize the code to ensure that search engines can crawl, render, and index JavaScript content correctly after conducting a comprehensive analysis of the site’s JavaScript implementation.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Core Web Vitals",
				body: "Google’s Core Web Vitals are three key measures for web page loading and interactivity. Our seasoned technical SEO agency will analyze and optimize your web pages in order to substantially increase their scores for essential web metrics. This includes deferred non-critical resources, efficient hosting, compressed images, and browser caching, among other optimizations.",
			},
		],
	},

	checkList: {
		eyebrow: "Key Elements of",
		title: "Technical SEO",
		benefitsLeft: [
			{
				title: "Site Architecture",
				body: "Appropriate URL structure and internal linking enable search engines to crawl all pages efficiently. Additionally, site maps and breadcrumbs enhance navigation.",
			},
			{
				title: "Code Quality",
				body: "A website can increase search engine performance and speed by minifying HTML, CSS, and JavaScript code, optimizing pictures, and fixing broken links.",
			},
		],
		benefitsRight: [
			{
				title: "Mobile Optimization",
				body: "Given the exponential rise of mobile usage, responsive designs and faster mobile sites improve user experience.",
			},
			{
				title: "Crawlability",
				body: "Structured data encoding, crawl budget management, and robots.txt files all contribute to the enhanced crawling performance of search engine robots.",
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Role of Technical SEO",
		title: "Specialists and Consultants",
		contentAlign: "center",
		paragraphs: [
			"Technical SEO specialists are indispensable for optimizing a website’s hidden components, which have a significant impact on its efficacy and search engine visibility. They perform comprehensive audits of the site’s infrastructure, detect problems with code, performance, and security, among others, and suggest solutions.",
			"Hiring a technical SEO consultant enables the application of this knowledge to assess and enhance the technical condition of a site to increase SEO. By utilizing audit data-driven insights, they are capable of prioritizing high-impact adjustments. Additionally, consultants efficiently manage intricate migrations across CMS platforms and integrate the most recent technological advancements.",
		],
	},

	information: {
		eyebrow: "Understanding",
		title: "Technical SEO",
		cards: [
			{
				blocks: [
					{ type: "p", text: "Technical SEO optimizes backend code and infrastructure to boost search engine rankings. Technical SEO addresses technological issues that allow search engine crawlers to index your site. Link development and content production are also important. Technical SEO improves website crawl ability, indexation, and search engine ranks by analyzing and optimizing its structure." },
				],
			},
		],
	},

	cta: {
		text: "Don’t Let Technical Issues Hold You Back—Schedule a Consultation for Effective SEO Solutions!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Technical SEO",
		title: "FAQs",
		items: [
			{
				question: "Why is technical SEO important?",
				answer: "Technical SEO is important because search engines use various technical signals like site speed, mobile-friendliness, and crawlability to understand websites better and determine their rankings. Optimizing these technical factors helps websites get discovered more easily and provide a better user experience.",
			},
			{
				question: "How can technical SEO help my website’s search rankings?",
				answer: "By resolving technical issues, technical SEO can help search engines comprehensively discover all of a website’s content. It allows the content to be properly indexed and ranked. Technical SEO also enhances the user experience, which is a key ranking factor for search engines. Overall, it lays the foundation for better organic search visibility.",
			},
			{
				question: "How often should technical SEO be audited?",
				answer: "It’s generally recommended to conduct technical SEO audits every 3-6 months. It ensures any new issues are caught early. Website changes like platform migrations may also warrant interim audits. Regular auditing is important to track progress and make adjustments.",
			},
			{
				question: "What are the most common technical SEO issues found?",
				answer: "Some common issues include slow page speeds, JavaScript/CSS blocking rendering, outdated or missing sitemaps, duplicate content issues, non-HTTPS implementation, broken internal links, and missing page-level titles/descriptions. Mobile compatibility problems are also frequently spotted.",
			},
			{
				question: "How much does technical SEO cost?",
				answer: "Technical SEO service costs can vary significantly depending on the scope of work and a company’s experience/expertise. Basic setup usually starts around $1,000-$3,000, while ongoing monthly retainers range from $500-$3,000. Larger enterprise websites may pay $10,000+ for advanced technical optimization projects.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default TechnicalSeoServices;
