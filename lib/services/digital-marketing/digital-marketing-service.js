const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const DigitalMarketingService = {
	slug: "digital-marketing-service",
	pageTitle: "Digital Marketing Services | Icecube Digital",
	metaDescription: "Partner with Icecube Digital for strategy-driven digital marketing services — SEO, PPC, content marketing, social media, email automation, analytics, and eCommerce marketing to grow your business online.",

	banner: {
		heading: "Strategy-Driven Digital Marketing Services",
		paragraphs: [
			"Build a strong digital presence with our digital marketing services. We help brands attract the right audience, increase qualified leads, and boost ROI through proven digital strategies. You can also hire digital marketing experts to build and optimize your online presence. Our expertise provides an optimized website that helps boost conversion, brand reputation, and analytics monitoring.",
			"Partnering with Icecube Digital means gaining a long-term growth partner, not just a service provider. We work collaboratively, refine strategies continuously, and adapt quickly as your business evolves.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Your Free AI-Powered Digital Marketing Plan",
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
		postIds: [56581, 56582, 56543],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Icecube Digital: Your Reliable",
		title: "Digital Marketing Agency",
		contentAlign: "center",
		paragraphs: [
			"With more than a decade of experience in the field, Icecube Digital provides user-centric services to provide a strong online presence. We track search behavior, user intent, and performance data to provide measurable outcomes. Our experienced digital marketing specialists build custom digital marketing plans aligned with specific business goals. From SEO, SMM to CRO and content marketing, we work collaboratively to ensure every channel supports the same conversion-focused goals.",
			"Our expertise helps businesses improve engagement, reduce friction, and increase ROI across platforms like Google, Shopify, Magento, and WooCommerce. We continuously track, test, and refine campaigns using advanced analytics and reporting. By focusing on long-term growth rather than short-term wins, we help businesses build sustainable digital presence, stronger brand authority, and consistent results.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	imageText: {
		eyebrow: "Get",
		title: "Noticed Today!",
		image: "/assets/photos/digital-marketing-team.png",
		imageAlt: "Get Noticed Today - Digital Marketing Team at Icecube Digital",
		contentTitle: "Become A Lead Generation Machine For Your Online Business",
		paragraphs: [
			"Many business owners use their website like an online brochure. It is a major mistake! Your website is a virtual sales representative with a built-in sales funnel, not a brochure. However, your website cannot produce leads or revenues without traffic. Let Icecube Digital demonstrate how to develop a successful digital marketing solution to turn your website into a lead-generation powerhouse.",
			[
				"Right now, people are looking for a business on the Internet like yours. Icecube Digital has helped several organizations increase website traffic, leads, and revenues under theirs. To discover more about each of the different services we offer, click on the links above, or get in touch with our ",
				{ text: "seo marketing agency in Las Vegas", href: "/las-vegas-seo-company/" },
				" and let us demonstrate our capabilities for you.",
			],
		],
		ctaLabel: "See Case Studies",
		ctaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Core Digital",
		title: "Marketing Services",
		textAlign: "left",
		items: [
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Search Engine Optimization (SEO)",
				body: "Search Engine Optimization (SEO) helps in improving website visibility in organic search results to attract high-intent users smoothly. At Icecube Digital, our SEO experts combine technical precision, data-backed keyword strategies, and content optimization. This helps businesses rank higher, drive qualified traffic, and achieve long-term growth. Our SEO Sub-Services Include:",
				bodyList: [
					"Technical SEO audits & fixes",
					"On-page SEO optimization",
					"Keyword research & mapping",
					"Local SEO & Google Business Profile optimization",
					"Enterprise & multi-location SEO",
					"Link building & authority growth",
				],
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Pay-Per-Click Advertising (PPC)",
				body: "Pay-per-click advertising enables instant visibility to users actively searching for your products or services. Our PPC specialists at Icecube Digital create conversion-focused campaigns that balance cost efficiency with performance, ensuring every click enables measurable business results. Our PPC Sub-Services Include:",
				bodyList: [
					"Google Ads management",
					"Bing & Microsoft Ads",
					"Search & display advertising",
					"Shopping & Performance Max campaigns",
					"Conversion tracking & ROI optimization",
					"Ad copy & landing page alignment",
				],
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Content Marketing",
				body: "Content marketing helps educate, engage, and convert users by delivering relevant and valuable information at every stage of the customer journey. At Icecube Digital, we craft SEO-friendly content that enhances brand authority, boosts rankings, and supports lead generation objectives. Our Content Marketing Sub-Services Include:",
				bodyList: [
					"SEO blog writing",
					"Website & landing page content",
					"Product descriptions & category content",
					"Case studies & thought leadership",
					"Content optimization & refresh",
				],
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Social Media Marketing",
				body: "Social media marketing establishes brand presence, fosters trust, and drives engagement across platforms where your target audience is most active. Our expert digital marketing team creates result-oriented organic and paid social campaigns that drive awareness, traffic, and conversions. Our Social Media Sub-Services Include:",
				bodyList: [
					"Social media strategy & planning",
					"Paid social advertising",
					"Content creation & scheduling",
					"Audience targeting & growth",
					"Performance monitoring & insights",
				],
			},
			{
				icon: "/assets/icons/pc.svg",
				title: "Analytics & Performance Tracking",
				body: "Analytics and performance tracking provide actionable insights into what's working and where improvements are needed. At Icecube Digital, we implement advanced tracking systems to ensure every marketing decision is driven by accurate, measurable data. Our Analytics Sub-Services Include:",
				bodyList: [
					"Google Analytics & GA4 setup",
					"Conversion & event tracking",
					"Dashboard & custom reporting",
					"Data analysis & insights",
					"Ongoing performance optimization",
				],
			},
			{
				icon: "/assets/icons/email.svg",
				title: "Email Marketing & Automation",
				body: "Email marketing enables businesses to nurture leads, retain customers, and increase lifetime value through personalized communication. Our email specialists design automated workflows that deliver the right message at the right time. Our Email Marketing Sub-Services Include:",
				bodyList: [
					"Campaign strategy & setup",
					"Marketing automation workflows",
					"Lead nurturing sequences",
					"Customer retention campaigns",
				],
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "eCommerce Marketing",
				body: "eCommerce marketing focuses on driving targeted traffic and maximizing online sales performance. We specialize in scaling revenue for Shopify, Magento, and WooCommerce stores through platform-specific optimization and growth strategies. Our eCommerce Sub-Services Include:",
				bodyList: [
					"eCommerce SEO",
					"Product & category page optimization",
					"Paid shopping campaigns",
					"Conversion optimization for stores",
				],
			},
		],
	},

	tableBasic: {
		eyebrow: "Icecube Digital vs. Typical Digital",
		title: "Marketing Agency",
		boldColumns: [0],
		colWidths: ["33.33%", "33.33%", "33.33%"],
		contentAlign: "left",
		columns: ["Category", "Icecube Digital Advantage", "Typical Digital Agency"],
		rows: [
			[
				"Channel Expertise",
				{ icon: "check", title: "Specialized in Digital Ads & SEO", desc: "Focused efforts deliver maximum impact" },
				{ icon: "cross", title: "Generalist Approach", desc: "Spread thin across too many platforms" },
			],
			[
				"Client Service",
				{ icon: "check", title: "Work Directly with Experts", desc: "Senior specialists guide your strategy" },
				{ icon: "cross", title: "Outsourced & Junior Teams", desc: "Execution often handled by less experienced staff" },
			],
			[
				"KPI Alignment",
				{ icon: "check", title: "Revenue-Driven Metrics", desc: "Performance tied directly to ROI" },
				{ icon: "cross", title: "Surface-Level Metrics", desc: "Emphasis on vanity metrics like impressions or clicks" },
			],
			[
				"Strategy Customization",
				{ icon: "check", title: "Tailored to Your Business", desc: "No two campaigns are alike" },
				{ icon: "cross", title: "One-Size-Fits-All", desc: "Cookie-cutter strategies applied to every client" },
			],
			[
				"Speed To Market",
				{ icon: "check", title: "Rapid Campaign Launches", desc: "Streamlined processes for quick deployment" },
				{ icon: "cross", title: "Slow Execution", desc: "Prolonged onboarding and delayed rollouts" },
			],
			[
				"Reporting & Transparency",
				{ icon: "check", title: "Clear, Actionable Reporting", desc: "Full visibility into what's working" },
				{ icon: "cross", title: "Opaque & Overcomplicated Reports", desc: "Hard to tie results to real business goals" },
			],
		],

	},

	tablePackages: {
		eyebrow: "Our Digital Marketing",
		title: "Service Packages",
		ctaLabel: "Get a Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
		plans: [
			{
				name: "Starter",
				features: [
					"Affordable entry-level marketing",
					"Establish online presence",
					"Basic SEO foundation",
					"Social media setup",
					"Simple performance tracking",
				],
			},
			{
				name: "Growth",
				features: [
					"Advanced SEO optimization",
					"Lead generation campaigns",
					"Multi-channel marketing",
					"Email marketing automation",
					"Data-driven reporting",
				],
			},
			{
				name: "Premium",
				features: [
					"Full-service SEO coverage",
					"Conversion rate optimization",
					"Integrated PPC campaigns",
					"High-quality content marketing",
					"Weekly performance insights",
				],
			},
			{
				name: "Enterprise",
				features: [
					"Dedicated account manager",
					"Custom analytics dashboards",
					"Advanced A/B testing",
					"Scalable multi-location solutions",
					"End-to-end marketing strategy",
				],
			},
		],
	},

	leftIconBox: {
		eyebrow: "Why Hire",
		title: "Icecube Digital?",
		subtitle: "We offer solutions not just for generic digital marketing but target-driven advertising through performance marketing. Our main goal is to assist businesses in boosting prospects for conversion and client retention.",
		items: [
			{
				icon: "/assets/icons/user-round.svg",
				title: "Industry Experts",
				body: "Icecube Digital provides the knowledge you need to handle market shifts, investigate marketing channels, and eliminate data silos with its expert in-house professionals and years of experience. Our platform gives you access to business advisors, web developers, SEO specialists, and more.",
			},
			{
				icon: "/assets/icons/cup.svg",
				title: "Proven Track Record",
				body: "Data and research are crucial for corporate success. Our goal-oriented digital marketing services help you deliver the appropriate message on the right platform at the right moment. We analyze your brand to produce current metrics and yield information. Our long list of clientele always leaves a positive review!",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Transparency And Communication",
				body: "Want to come up with fresh marketing ideas? You can alter our internet marketing services to suit your particular requirements, whatever your preferred level of engagement. Our monthly reports and seamless 24/7 customer services bridge the gap between our clients and us.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Delivering Promising Results",
				body: "Since digital marketing requires a long-term investment, we prefer forming partnerships above attracting new customers. You can rely on your personal account manager to meet all your demands and exceed your expectations for outcomes.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Competitive Pricing",
				body: "Our tailored internet marketing services meet the expectations of your sector, online requirements, and financial resources. By using this technique, we help you gain the necessary web visibility without breaking the bank.",
			},
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Custom Digital Marketing Approach",
				body: "We assess your current marketing strategies and online presence, set key performance indicators (KPIs), identify your brand's core values, and take into account consumer experience at every stage of strategy development.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Regular Monitoring and Evaluation",
				body: "At Icecube Digital, we create your campaign metrics and carry out routine monitoring and assessment to assess the effectiveness of your strategies. To increase your audience targeting and put you in a better financial position, we adjust your online marketing strategies using the data from Google Analytics.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Monthly Reports",
				body: "We produce regular reports for qualified clientele and are known for our responsiveness and meticulousness. During our intake call, we will discuss the reporting and communication standards. The most crucial thing to consider is that we are fundamentally data-driven.",
			},
		],
	},

	imageTextSecondary: {
		eyebrow: "Our Recent",
		title: "Performance",
		image: "/assets/photos/recent-performance.png",
		imageAlt: "Icecube Digital Recent Performance - UK PPE Case Study",
		paragraphs: [
			"A UK-based company that provides personal protective equipment (PPE) clothing and masks wanted to increase its sales and ROAS. The company had been running Google Ads campaigns for a few months but had limited success due to high competition in the market. The company then decided to try Bing Ads, which they had not used before, to increase their visibility and sales.",
		],
		infoBoxes: [
			{
				title: "Strategy",
				body: "The company hired Icecube Digital to develop a strategy that would target their ideal audience, which included healthcare workers, construction workers, and others who needed PPE. After thorough analysis of the top competitors and market research, we built campaigns with relevant keywords, ad copy, and landing pages.",
			},
			{
				title: "Results",
				body: "Within two months of launching Bing Ads campaigns, the company saw a 1236% return on ads spend (ROAS). The campaigns generated over 48 new conversions, and the company's sales increased by 300%. The cost-per-click (CPC) was lower on Bing Ads than on Google Ads, resulting in a higher conversion rate and ROAS.",
			},
			{
				title: "Conclusion",
				body: "By shifting their focus from Google Ads to Bing Ads, the company was able to achieve a significant increase in ROAS and sales. The targeted campaigns and retargeting efforts helped them reach their ideal audience and convert leads into customers. This case study highlights the importance of considering alternative advertising platforms and optimizing campaigns for maximum ROAS.",
			},
		],
	},

	cta: {
		text: "Let's Start Your Project Today",
		ctaLabel: "Get a Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Digital Marketing",
		title: "Service FAQs",
		items: [
			{
				question: "Would digital marketing services benefit my business?",
				answer: "Every brand requires an online presence. A continuous, thorough digital marketing strategy and a professional team would benefit every firm.",
			},
			{
				question: "What digital marketing services would suit my business?",
				answer: "An efficient digital foundation requires a website design and tailored monitoring and analytics integration for most businesses. Several considerations, such as your budget, goals, product or service, and target market, determine which services are appropriate for your company.",
			},
			{
				question: "Is digital marketing better than traditional marketing?",
				answer: "Digital marketing is economical since it provides communication with your target market directly. Your digital marketing services and associated costs can readily be measured, helping you avoid wasting money.",
			},
			{
				question: "What distinguishes digital advertising from digital marketing?",
				answer: "Businesses can use digital marketing to promote their brands, tell consumers about their products, engage with them, and monitor their online reputation. To attract customers and offer deals or discounts, they use digital advertising. Therefore, digital marketing establishes a target consumer audience, and digital advertising brings in customers from this group.",
			},
			{
				question: "Why does SEO pricing vary so much?",
				answer: "There are a plethora of SEO tactics that can be applied. Some are laborious and may take several days or even weeks to complete. The cost of SEO completely depends upon the tactics used. The average SEO rate is $150 hourly when you employ a professional.",
			},
			{
				question: "How long does it take to see results from digital marketing?",
				answer: "The outcomes of digital marketing differ based on the strategy and business objectives. SEO and content marketing require 3-6 months to get substantial improvements, and paid campaigns, such as PPC and social media advertisements, are able to bring traffic and leads almost instantly. Long-term success depends on consistency and optimization.",
			},
			{
				question: "Can small businesses benefit from digital marketing?",
				answer: "Absolutely. Digital marketing enables small firms to access their local or international markets more effectively. Small businesses can become more visible, generate leads, and compete with larger businesses with a big budget by using such strategies such as local SEO, social media marketing, and specific ads.",
			},
			{
				question: "What is the difference between SEO, PPC, and SMM?",
				answer: "All the channels have a different role, but they are effective when combined with other channels in a complete digital marketing strategy.",
				answerList: [
					"SEO (Search Engine Optimization): Enhances the organic search result of your site on search engines using content, backlinks, and technical optimization.",
					"PPC (Pay-Per-Click): Paid advertising on websites such as Google or social networks that result in instant traffic and leads.",
					"SMM (Social Media Marketing): Advertises your brand on social networks by means of both organic and paid posts to attract customers and earn their loyalty.",
				],
			},
			{
				question: "Can digital marketing help improve brand reputation online?",
				answer: "Yes. Digital marketing assists companies in sustaining a good image online through regular content, social media interactions, review management, PR campaigns, and so on. Responding to customer feedback, demonstrating a level of expertise, and tracking mentions online are all helpful in building brand credibility and trust.",
			},
			{
				question: "How do you measure the success of digital marketing campaigns?",
				answer: "KPIs (Key Performance Indicators) determine the success and depend on the type of campaign: Monitoring and reporting daily will make sure that strategies are measured as optimum performance.",
				answerList: [
					"Web traffic and web ranking.",
					"PCR and CTR on PPC advertisements.",
					"Social media engagement statistics.",
					"Lead generation and email open rates.",
				],
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default DigitalMarketingService;
