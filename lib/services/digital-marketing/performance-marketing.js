const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const PerformanceMarketingServices = {
	slug: "performance-marketing-services",
	pageTitle: "Performance Marketing Services | Performance Marketing Agency",
	metaDescription: "Looking for results-driven performance marketing services? Icecube Digital is a leading performance marketing company USA. Connect with performance marketing experts today!",

	banner: {
		heading: "Scale Smarter with Performance Marketing Services",
		paragraphs: [
			"Performance marketing is transforming the way brands sell themselves globally by leveraging advanced strategies to build brands and drive business online. Performance-based marketing makes it relatively easier for you to track and measure your business success.",
			"Being one of the top-performing marketing agencies, we have many effective tools at our disposal, including pay-per-performance SEO. At Icecube Digital, we employ game-changing branding tactics to ensure your brand is highly visible online.",
			"Let’s curate a marketing strategy built to boost sales, not just stats.",
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
			"These examples illustrate the impact of our trusted marketing efforts on diverse industries. Each project reflects our burning ambition to help businesses grow, whether that be bold eCommerce projects, cutting-edge SEO services in the USA, or lucrative PPC campaigns.",
		],
		postIds: [56582, 56567, 56534],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	plainText: {
		eyebrow: "What Are Performance",
		title: "Marketing Services?",
		contentAlign: "center",
		paragraphs: [
			"Performance marketing is any advertising where you pay only when the desired action has taken place, and results can be measured. Performance marketing services use a diverse range of tactics that make an advertising activity more effective by focusing on the specific kind of results you want to achieve.",
			"It emphasizes achieving specific actions or conversions, such as clicks, leads, sales, and so on, rather than the broader scope of marketing activities that might emphasize brand awareness or reach. Our performance marketing experts at Icecube Digital apply methods such as search engine advertising, affiliate marketing, email marketing, social media advertising, PPC management service, and more to bring in accountability and quantifiable results.",
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

	topIconBox: {
		eyebrow: "Our Performance",
		title: "Marketing Services",
		subtitles: [
			"Icecube Digital’s customized marketing services offer measured and optimized performance marketing solutions distributed through the right channels to your target demographic while aligning with your budget and objectives.",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Paid Media Advertising",
				body: "Our highly skilled performance marketing experts can help you create ad copy tailored to your target demographic, optimize your bidding methods, and track your keyword ROI while expanding your audience reach.",
			},
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Search Engine Optimization (SEO)",
				body: "Our Search Engine Marketing (SEM) strategy is designed to boost your website’s visibility by placing it higher on search engine results pages using paid advertising methods such as Google Ads. You can bid on keywords relevant to your target demographic for your adverts to appear when consumers search for related phrases.",
			},
			{
				icon: "/assets/icons/social-share.svg",
				title: "Social Media Marketing",
				body: "Our own SMM professionals deliver effective ad campaigns on Facebook, Instagram, Twitter, and LinkedIn, enabling businesses to target niche interests and behaviors. Our social media ad campaign efforts stimulate clicks, engagements, app installs, and conversions.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Conversion Rate Optimization (CRO)",
				body: "We assist you in elevating the design aspect, navigation, and layout of websites for a great user experience. We track customer actions on your site, find where the conversion funnel gets blocked, and implement strategic changes that lead to measurable improvements in performance.",
			},
			{
				icon: "/assets/icons/email.svg",
				title: "Email Marketing Automation",
				body: "Our professional email marketing services help your business promote deals, promotions, or content to your target audience with personalized messages. We run results-focused email marketing, which means we track key metrics such as opens, click-through rates, and conversions to determine the success of campaigns.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Analytics & Reporting",
				body: "Our performance marketing tools allow campaign optimization and decision-making through analytics and data tracking. In doing so, you can optimize over time by understanding insights into audience behavior, campaign performance, and conversion indicators.",
			},
		],
	},

	infoBox: {
		eyebrow: "Key Metrics and KPIs That Matter in Our",
		title: "Performance Marketing Services",
		subtitle: "Implementing KPIs, optimizing your return on investment, and using data-driven performance marketing services can generate effective marketing campaigns. Want to know which metrics primarily pay attention? Let’s dive in!",
		items: [
			{
				title: "Cost Per Acquisition (CPA)",
				body: "A declining CPA helps reach the highest marketing ROI while not compromising the number of quality leads generated. We track how well your paid ads perform across platforms like social media, search engines, and email.",
			},
			{
				title: "Customer Acquisition Cost (CAC)",
				body: "CAC tells us how much it really costs to win a new customer. Monitoring the CAC enables you to make data-driven decisions and optimize marketing efforts and fund allocation in a way that you spend money on the correct customers.",
			},
			{
				title: "Conversion Rate (CVR)",
				body: "CVR shows how good your site is at turning visitors into leads. A respectable conversion rate reflects that your SEO efforts bring targeted customers who are interested in what you have to offer.",
			},
			{
				title: "Return on Ad Spend (ROAS)",
				body: "ROAS is a metric that measures the efficiency of a business using advertising expenses to increase sales or conversions. A good return on investment indicates that the campaign is highly productive. An insufficient ROAS reflects that the campaign performance can be improved through retargeting, creative changes, or replacing the strategy.",
			},
			{
				title: "Lifetime Value (LTV)",
				body: "Our performance marketing experts consider account variables like average purchase value, frequency of purchases, and client retention time. We determine the long-term worth of your clientele and direct the development of effective customer acquisition and retention plans through LTV.",
			},
		],
	},

	imageText: {
		eyebrow: "Why Do Businesses Need a Performance",
		title: "Marketing Company?",
		image: "/assets/photos/perf-mktg-why-businesses.png",
		imageAlt: "Why Do Businesses Need a Performance Marketing Company - Icecube Digital",
		imagePosition: "right",
		paragraphs: [
			"Having trouble producing excellent leads for your business? Any business that wants to grow must leverage performance marketing since it focuses on measurable results. It also provides a clear connection between marketing campaigns and specific objectives such as leads, sales, or website traffic.",
			"Businesses can monitor and assess the success of their marketing activities with performance marketing. This way, businesses can target particular audiences based on demographics, hobbies, behavior, and other factors. It also allows for campaigns for performance marketing to be readily scaled up or down according to budget. With Icecube Digital—the best performance marketing firm in the US—you receive solutions tailored to your needs rather than generic, one-size-fits-all tactics.",
		],
		ctaLabel: "Get in touch",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "Our Strategic Approach to",
		title: "Performance Marketing",
		subtitle: "Have a great idea for a marketing campaign, but your business isn’t getting enough attention? Drive results with data-led performance ads and build a funnel full of qualified leads. Clicks are not what we seek; results are, and here’s how we do it!",
		columns: 2,
		steps: [
			{
				title: "Audit",
				body: "We evaluate your digital assets, such as SEO, social media, and website, through a thorough audit. Our consulting team then turns insights into action, helping enhance your online presence and aligning strategies with your marketing goals for better reach and results.",
			},
			{
				title: "Strategy",
				body: "We team up with you to get your goals, audience, and edge, then build a solid performance marketing plan. The plan is tailored to position your brand effectively and drive measurable growth across digital platforms.",
			},
			{
				title: "Execution",
				body: "From ad creatives to targeting and bidding, we handle full campaign management. We execute performance marketing services across channels with a sharp focus on ROI, keyword research, audience segmentation, and continuous improvement for maximum results.",
			},
			{
				title: "Optimization",
				body: "We track campaigns in real time using tools like GA, AppsFlyer, and Hotjar. Our team identifies vulnerabilities, refines tactics, and ensures peak performance by analyzing metrics such as engagement, conversions, and user behavior.",
			},
			{
				title: "Scaling",
				body: "After the optimization, we conduct CPA, CTR, and ROI key metric analysis to increase campaigns. This extends beyond surfing on new platforms, stretching audience reach, especially for younger, high-potential user segments and budget increases.",
			},
		],
		ctaLabel: "Schedule a Meeting Today!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	infoBoxSecondary: {
		eyebrow: "Performance Marketing for",
		title: "All Kinds of Businesses",
		subtitle: "Icecube Digital’s performance marketing services boost visibility and success across products, services, or causes. With real-time tracking, proven results, and creative strategies, we help brands succeed in a fast and dynamic market.",
		columns: 2,
		items: [
			{
				title: "B2C (Business To Customer)",
				body: "The B2C marketing by our leading performance marketing agency in the USA focuses on quick conversions using targeted ads, personalized messaging, emails, and social media. It boosts satisfaction, loyalty, and sales, tailored to the product, audience, and overall business strategy.",
			},
			{
				title: "B2B (Business To Business)",
				body: "Our B2B marketing uses a project-based approach for managing company relationships—digitally, collaboratively, or strategically. The model is chosen based on specific goals, engagement level, and agency support that the business prefers.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Why Icecube Digital is the Right Performance",
		title: "Marketing Agency",
		subtitle: "Partner with Icecube Digital, the top performance marketing company, and start hitting your digital goals today! We focus on growth and hit your KPIs by building an omnichannel presence that attracts and engages your audience.",
		items: [
			{
				icon: "/assets/icons/award-badge.svg",
				title: "14+ years of experience",
				body: "As the leading performance marketing agency, we have mastered paid advertising, content creation, and curated brand experiences that help you achieve your goals. We promise that every dollar you spend brings quantifiable outcomes with our customized marketing techniques.",
			},
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Custom strategy development",
				body: "Icecube Digital, a leading performance marketing firm, specializes in developing performance marketing plans that are tailored to your target market and business objectives. Our flexible solutions deliver your business requirements precisely.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Results-driven, not just service-based",
				body: "We use data analysis to get insights into problem areas, modify our approaches, and make decisions to drive results. It necessitates a thorough analysis of customer behavior, knowledge of market trends, and measuring campaign efficacy to maximize marketing goals.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Access to proprietary tools and automation",
				body: "We focus on strategy and scale fast with automation—no wasting time on boring, repetitive issues. Our performance marketing solutions employ automated tools to access tasks like budget management, broken-link checking, real-time reporting, and poor performance pauser.",
			},
			{
				icon: "/assets/icons/user-time.svg",
				title: "Dedicated account manager",
				body: "An account manager spends time getting to know your business, objectives, and target market. The manager oversees this individualized strategy so our marketing initiatives align with your distinct business identity and goals.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Transparent communication & regular reports",
				body: "We collect significant information from various sources, like media platforms, websites, sales CRMs, and analytics. Our performance marketing experts then examine the fundamental causes of performance results, whether favorable or unfavorable, to present you with a thorough report.",
			},
		],
	},

	cta: {
		text: "Want Real Growth? Harness the Power of Our Performance Marketing Services!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Performance Marketing",
		title: "FAQs",
		items: [
			{
				question: "What does performance marketing do?",
				answer: "Performance marketing is a tactic that focuses on quantifiable outcomes, such as clicks, leads, or sales, instead of merely increasing brand recognition and impressions. It involves campaigns that must be targeted and optimized to maximize return on investment to accomplish corporate goals.",
			},
			{
				question: "How does Icecube Digital measure success?",
				answer: "We track several KPIs, including CTR, CPC, conversion rate, ROI, CPA, sales, CLV, subscription, and more, to evaluate the efficacy of performance marketing campaigns. We also set KPIs and check your campaign performance.",
			},
			{
				question: "What is the difference between performance marketing and digital marketing?",
				answer: "While digital marketing aims to develop long-term brand awareness, reputation, and loyalty, a performance marketing company concentrates on quantifiable results and rapid outcomes. Metrics like click-through rates (CTR), conversion rates, ROI, cost per acquisition, and others are used by performance marketing agencies.",
			},
			{
				question: "Is performance marketing right for small businesses?",
				answer: "Yes, small businesses can benefit from performance marketing. Collaborating with the best performance marketing agency in the USA allows them to optimize budget efficiency by focusing on quantifiable results, including sales, leads, or clicks, and only paying for results obtained.",
			},
			{
				question: "What is a good ROI for performance marketing?",
				answer: "A ratio of 5:1 or greater, or $5 earned for every $1 invested, is typically seen as an excellent Return on investment (ROI) for performance marketing.",
			},
			{
				question: "Which channels are used in performance marketing?",
				answer: "Several digital platforms, including influencer marketing, affiliate marketing, email marketing, display advertising, native advertising, social media advertising, and search engine marketing (SEM), are used to monitor ROI in performance marketing.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default PerformanceMarketingServices;
