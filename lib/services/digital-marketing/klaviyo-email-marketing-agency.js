const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const KlaviyoEmailMarketing = {
	slug: "klaviyo-email-marketing-agency",
	pageTitle: "Klaviyo Email Marketing Agency | Klaviyo Email Marketing Services",
	metaDescription: "Looking for Klaviyo email marketing services? Our agency offers expert Klaviyo specialists to enhance your email marketing strategy. Connect with email marketing experts today!",

	banner: {
		heading: "Leading Klaviyo Email Marketing Agency",
		paragraphs: [
			"As a top Klaviyo specialist and digital marketing company, Icecube Digital has unrivaled expertise in helping clients utilize Klaviyo. Our team has vast experience with Klaviyo to execute targeted campaigns, automate complicated processes and journeys, improve performance, and create exceptional email ROI.",
			"We have transformed high-growth startups and Fortune 500 companies with hundreds of Klaviyo deployments. Our strategic approach, hands-on advice, and optimization best practices help companies succeed with Klaviyo.",
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
		postIds: [56543, 56553, 56568],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Enhance Your Revenue With Klaviyo Email",
		title: "Marketing Agency",
		contentAlign: "center",
		paragraphs: [
			"Klaviyo helps companies create customer relationships with targeted communications, and our experts help you make the best use of it.",
			"Our professionals can help businesses quickly gather consumer data, segment lists by behavior and traits, and build automated email journeys using Klaviyo.",
			"With drag-and-drop email creation, A/B testing, lead-generating forms and popups, and connectors with over 200 shopping carts and CRMs, Klaviyo’s strong segmentation capabilities let businesses analyze consumer behavior and provide appropriate communications.",
			"Klaviyo’s journey builder lets you automate multi-step campaigns based on product views, purchases, and app installations. It boosts engagement and conversions. Klaviyo’s ROI monitoring helps assign revenues and assess campaign effectiveness. The right Klaviyo marketing strategy lets shops of all sizes expand their email campaigns and maximize marketing ROI.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	topIconBox: {
		eyebrow: "Why Choose Klaviyo Email",
		title: "Marketing Services?",
		subtitles: [
			"Klaviyo offers numerous benefits to brands looking to strengthen customer relationships through email marketing. With its powerful features and automation capabilities, Klaviyo allows merchants to reap the following key advantages:",
		],
		items: [
			{
				icon: "/assets/icons/sliders.svg",
				title: "Powerful Email Marketing Features",
				body: "With Klaviyo’s email marketing services, you may use its advanced segmentation, dynamic lists, and customized email campaigns. Our Klaviyo experts help you segment your audience to send targeted messages at the correct moment. We optimize your email marketing for relevancy and engagement. Klaviyo’s powerful targeting lets you reach your ideal clients and prospects.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "Building Customer Relationships",
				body: "Email marketing goes beyond advertising to build consumer connections. Klaviyo segmentation and automation enable you to create personalized emails that provide value, solve issues, and develop loyalty throughout the subscriber experience. Our Klaviyo campaigns strengthen engagement and trust between you and your customers.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "In-Depth Analytics and Reporting",
				body: [
					"It is essential to learn about the performance of email in order to optimize it. Klaviyo provides opens, clicks, conversions, unsubscribes, and other analytics to help our team improve your strategy. Klaviyo’s detailed data improves our email marketing. Because of the profound insights provided by the data, our ",
					{ text: "email marketing experts", href: "/email-marketing-company/" },
					" are able to iterate and improve your Klaviyo campaigns over time.",
				],
			},
			{
				icon: "/assets/icons/shopify.svg",
				title: "eCommerce Integrations with Shopify",
				body: "Through the use of Klaviyo and Shopify, the procedures of product synchronization, purchase tracking, and cart abandonment for online businesses are quite straightforward. Utilizing Klaviyo for purchase-based behavioral automation is something that our Shopify professionals can assist you with integrating. Through the link between Shopify and Klaviyo, order messaging is revolutionized.",
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Automation for Customized Journey",
				body: "Klaviyo enables automation for next-level email personalization. With Icecube Digital, you can set up multi-step onboarding journeys, retention campaigns, and transactional notifications completely customized to user behaviors and needs. Our team sets up these tailored automation workflows so you can turn one-time buyers into lifelong loyal customers. The customized journeys we build in Klaviyo foster long-term relationships between you and your subscribers.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Why Choose Us as Your Klaviyo",
		title: "Marketing Agency?",
		items: [
			{
				icon: "/assets/icons/user-time.svg",
				title: "Extensive Klaviyo Experience",
				body: "Icecube Digital, a prominent digital marketing business, has implemented Klaviyo for customers in eCommerce, SaaS, education, healthcare, and more for over five years. We have handled hundreds of Klaviyo integrations and clever campaigns. This proven track record gives us the knowledge and skills to quickly set up and optimize Klaviyo to maximize results for your unique business needs.",
			},
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Expert Strategy and Execution",
				body: "Our committed team possesses extensive knowledge of emerging Klaviyo features and best practices for strategic implementation, highly targeted segmentation, personalized automation workflows, campaign development and execution, and ongoing performance optimization. We remain current on the most recent Klaviyo functionalities and utilize them to implement effective data-driven strategies that are customized to your particular audiences and objectives. Proficient Klaviyo personnel provide comprehensive guidance at each stage.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Proven Campaign Success",
				body: "Our email marketing experts have designed and managed a plethora of successful Klaviyo campaigns for clients in a variety of industries over the years, all of which have generated tangible business results and an impressive return on investment. Our Klaviyo email designers, copywriters, and strategists optimize campaigns for your KPIs using best practices. Our production and management skills consistently turn Klaviyo campaigns into revenue growth.",
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Stellar Client Satisfaction",
				body: "Our enhanced client retention and satisfaction rates are the result of enduring partnerships, effective campaign outcomes, and proactive, hands-on service. Our Klaviyo specialists extend beyond the mere installation of Klaviyo; we offer customized ongoing optimization and support in order to ensure enduring value. Our genuine focus on your success forges trust and happy clients who stay with us year after year.",
			},
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Industry Recognition",
				body: "Icecube Digital has received prestigious honors and certifications directly from Klaviyo, including being named a Klaviyo Featured Partner Agency for demonstrating continued Klaviyo service excellence. Our expertise and accomplishments with Klaviyo have established us as a preeminent Klaviyo agency recognized for producing results.",
			},
		],
	},

	checkList: {
		eyebrow: "Different Klaviyo Services",
		title: "We Provide",
		subtitle: [
			[
				"As a full-service ",
				{ text: "digital marketing agency", href: "/digital-marketing-service/" },
				", we offer the expertise and strategies you require to boost revenue and increase the number of prospective clients in your sales pipeline. Here are the different services that our Klaviyo marketing experts offer:",
			],
		],
		benefitsLeft: [
			"List Segmentation and Predictive Analysis",
			"Email marketing strategy",
			"Campaign Management",
			"Template Production",
		],
		benefitsRight: [
			"Optimization and Support",
			"Migration",
			"Email Automation",
		],
	},

	cta: {
		text: "Pitch Your Target Audience With The Right Email",
		ctaLabel: "Call now",
		ctaHref: "tel:+919106060593",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Klaviyo Email Marketing",
		title: "FAQs",
		items: [
			{
				question: "Can I migrate to Klaviyo from another ESP?",
				answer: "Yes, email subscribers and campaign history can be transferred from other email service providers such as Mailchimp, Constant Contact, and Campaign Monitor to Klaviyo. Lists and campaign data are exported and imported using Klaviyo’s built-in tools and proven migration processes to ensure a smooth, disruption-free transition.",
			},
			{
				question: "Why should I migrate to Klaviyo?",
				answer: "Klaviyo offers advanced customization, automation, analytics, segmentation, and integration capabilities compared to many other ESPs. It enables highly targeted and personalized messaging, helping businesses engage customers effectively at every stage of their journey within a single platform.",
			},
			{
				question: "How much does an email marketing engagement with Klaviyo cost?",
				answer: "Klaviyo pricing typically starts around $99 per month for up to 10,000 subscribers, with additional costs for higher subscriber tiers or SMS features. Agency service fees vary depending on the scope of work, ranging from one-time setup to full ongoing management, with customized quotes based on specific needs.",
			},
			{
				question: "How long does it take to set up Klaviyo?",
				answer: "Klaviyo onboarding and setup usually take 4-6 weeks, depending on data migration, integrations, template creation, automation setup, and testing. Optimization continues after the initial setup to improve performance and results.",
			},
			{
				question: "Is your agency a certified Klaviyo partner?",
				answer: "Yes, Icecube Digital is an official Klaviyo Partner Agency with certified specialists who meet Klaviyo’s partnership standards and maintain direct access to platform resources, support, and updates to better serve clients.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default KlaviyoEmailMarketing;
