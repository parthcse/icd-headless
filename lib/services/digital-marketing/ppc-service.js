const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const PpcService = {
	slug: "ppc-management-services",
	pageTitle: "PPC Campaign & Google AdWords Management Services | Icecube Digital",
	metaDescription: "Maximize ROI with Icecube Digital's certified PPC and Google AdWords management services — Google Search, Display, Shopping, remarketing, Bing Ads, and paid social campaigns built on data-driven strategy and continuous optimization.",

	banner: {
		heading: "PPC Campaign & Google Adwords Management Services",
		paragraphs: [
			"Are you not sure why are you missing out on your traffic? Our audits will help you identify the efforts missing in your digital marketing campaigns. Hiring the best PPC management company to enhance your digital marketing results can be the best decision for your organization. With a focus on delivering high results and maximum return on investments, we work on each customer's PPC campaign with a customized strategy. Our rightly hired PPC experts make data-driven decisions at each step and ensure to get the PPC results you dream of.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Your Free AI-Powered PPC Plan",
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
		postIds: [40941, 40927, 40956],
		portfolioCtaLabel: "More Case Studies",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Work With Certified Google Adwords",
		title: "Management Company",
		contentAlign: "center",
		paragraphs: [
			"Our PPC experts have been providing google AdWords campaign management services to small to large businesses since 2009. Our clear understanding of your business needs, years of PPC management services experience, and effective project management process altogether will make it possible to deliver the best return on your PPC spend with us.",
			"We know what it takes to build groundbreaking PPC campaigns. As a result, we have successful google AdWords campaign management services for hundreds of customers.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	topIconBox: {
		eyebrow: "Our PPC",
		title: "Management Services",
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Google Search Ads",
				body: "Our AdWords consultants are Specialists in creating high-performing google search ads strategies for google search network campaigns.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Setup Google Display Ads",
				body: "We set up compelling Google display ads campaigns to advertise your business to a targeted audience through Google Display Network.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Google Shopping Ads Optimization",
				body: "We take a scientific approach to Google Shopping campaign management to best reflect your profit margins.",
			},
			{
				icon: "/assets/icons/www.svg",
				title: "Remarketing Ads Management Services",
				body: "We will help you to make more profit by displaying ads to potential customers who have visited your site before.",
			},
			{
				icon: "/assets/icons/pc.svg",
				title: "PPC Campaign Review And Audit",
				body: "We do a thorough review to find out how well your existing google ads campaigns are doing and where is the opportunity to improve.",
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Bing Ads / Social Media Marketing",
				body: "We have great experience in building and optimizing ad campaigns for Yahoo & Bing search engines and Social media sites such as Facebook, Instagram, Twitter, LinkedIn, etc…",
			},
		],
	},

	imageText: {
		eyebrow: "We Are Not An Average PPC Campaign",
		title: "Management Company",
		image: "/assets/photos/ppc-management-company.png",
		imageAlt: "We Are Not An Average PPC Campaign Management Company - Icecube Digital",
		paragraphs: [
			"Our AdWords accounts management process is collaborative. Our expert team will work to create, optimize and continuously improve your PPC campaigns. Regular training, workshops, and brainstorming sessions keep all our account managers at the top of all the latest Google ads updates to provide our valued customers with the best return on their investment with us.",
			"Businesses today need a strong search engine presence to be competitive, which means showing ads on Google Search results pages right when customers are looking to buy.",
			"As you can probably imagine, running a successful paid search campaign requires a lot of time and attention. We are a professional AdWords management firm that constantly monitors and optimizes our clients' accounts to ensure the best results possible.",
		],
		ctaLabel: "See Case Studies",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	checkList: {
		eyebrow: "Why",
		title: "Work With Us?",
		subtitle: "We are a Google-certified SEO agency in the USA, focused on helping you build long-term growth and sustainable results. Our approach is centered on expertise, consistency, and strategies that are designed to deliver measurable performance over time.",
		benefitsLeft: [
			"Certified & experienced PPC management service company",
			"The easy and transparent communication process",
			"Free Google Adwords Campaign Audit Report",
		],
		benefitsRight: [
			"14+ Years of experience in google ads management services",
			"Flexible pricing plans around your needs",
			"24/7 Support",
		],
	},

	imageTextSecondary: {
		eyebrow: "Our",
		title: "Recent Performance",
		image: "/assets/photos/recent-performance.png",
		imageAlt: "Icecube Digital Recent Performance - UK PPE Bing Ads Case Study",
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
				body: [
					"Within two months of launching Bing Ads campaigns, the company saw a 1236% return on ads spend (ROAS). The campaigns generated over 48 new conversions, and the company's sales increased by 300%. The cost-per-click (CPC) was lower on Bing Ads than on Google Ads, resulting in a higher ",
					{ text: "conversion rate", href: "/conversion-rate-optimization/" },
					" and ROAS.",
				],
			},
			{
				title: "Conclusion",
				body: "By shifting their focus from Google Ads to Bing Ads, the company was able to achieve a significant increase in ROAS and sales. The targeted campaigns and retargeting efforts helped them reach their ideal audience and convert leads into customers. This case study highlights the importance of considering alternative advertising platforms and optimizing campaigns for maximum ROAS.",
			},
		],
	},

	cta: {
		text: "Stop Wasting Time And Money, Get Your Free Proposal Now.",
		ctaLabel: "Get My Free Proposal",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "PPC",
		title: "Management FAQs",
		items: [
			{
				question: "What is PPC management?",
				answer: "PPC management is the method of handling and managing the pay-per-click advertisement campaign on various platforms like Google, Meta, X, etc.",
			},
			{
				question: "Why is PPC management service important?",
				answer: "Search Engine Optimization (SEO) is an ongoing process. It picks up the adjustments we do daily and gains momentum to drive high traffic. If you are a business owner, with an inventory and manpower to manage, then there is a high chance you don’t have adequate time to run optimized ad campaigns. This is where we come in. Hiring PPC management agencies could be one of the smartest moves since you don’t have to require second thoughts on onboarding leads.",
			},
			{
				question: "How are we the best PPC management company?",
				answer: "Our team of highly skilled and certified PPC specialists can provide the industry’s best results. Here are some aspects that make it possible:",
				answerList: [
					"Our data analysis to optimize campaigns and bring the highest ROI has been a proven move for us.",
					"We don’t follow a vague approach.",
					"Our belief lies in curating a PPC campaign to target a specific audience.",
				],
			},
			{
				question: "How costly are PPC management services?",
				answer: "The cost of PPC campaigns depends on the business type, business size, and target audience. You can reach out to us to know more about it.",
			},
			{
				question: "What is included in PPC services?",
				answer: "PPC service deliverables would depend on the service provider and the selected plan. Mostly the services would include running ad campaigns on Google, Bing along with keyword targeting and Bid management.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default PpcService;
