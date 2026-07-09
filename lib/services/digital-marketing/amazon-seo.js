const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const AmazonSeoServices = {
	slug: "amazon-seo-services",
	pageTitle: "Amazon SEO Company | Amazon SEO Services By Experts",
	metaDescription: "Icecube Digital is an award-winning amazon SEO agency. Boost brand visibility and double your sales with local SEO consultants. Get in touch with our Amazon SEO Specialist now.",

	banner: {
		heading: "Performance-driven Amazon SEO Services",
		paragraphs: [
			"Icecube Digital is the trusted Amazon SEO company based in the USA with a team of experienced SEO experts. Whether you want to increase your sales, online visibility, ranking, overall revenue, or want a stronger online presence, we know what it requires to make your product listing successful. We implement top product listing optimization strategies to reach maximum customers and increase sales. Without having a second thought, just book your consultation with our SEO experts NOW!",
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
		postIds: [56558, 56591, 56581],
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
		eyebrow: "Boost Productivity & Profit With Amazon",
		title: "SEO Company",
		contentAlign: "center",
		paragraphs: [
			"Do you know what an undeniable truth is? Amazon is one of the most popular eCommerce platforms in the world, where nearly half of the US internet users (46.7%) started product searches. To increase your Amazon product listing visibility and increase overall traffic, our team of SEO experts will help you stand out from your competitors.",
			[
				"We, along with our team of ",
				{ text: "Chicago SEO consultants", href: "/chicago-seo-company/" },
				", SEO experts, and strategists, will make the difference in how your product listing appears, optimize the relevant keywords, and increase brand awareness. With our number of SEO services like product keyword research, copywriting, on-page optimization & improvement, we will help you to sell on Amazon.",
			],
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	leftIconBox: {
		eyebrow: "What Amazon SEO",
		title: "Experts Do?",
		items: [
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Generate More Sales",
				body: "Our Amazon SEO experts will comprehend your eCommerce business and its requirements to help you increase the overall sales of your business. To know how you can double the sales, consult our skilled SEO experts.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Enhance Your Product Listing Visibility",
				body: "As we all know that it is difficult to stand out among similar products, so it is a must to enhance your overall product listing visibility by giving attention to the right ranking factors. Our team of Amazon professionals helps your business to improve its overall product listing visibility, resulting in a more substantial online presence.",
			},
			{
				icon: "/assets/icons/ai-target.svg",
				title: "Establishing Realistic Goals",
				body: "With the help of our team, you will not only get help in improving your presence and visibility, but we will also help you to set realistic goals for your business and achieve them through different SEO tactics. Just discuss your business requirements with our team, and we are here to guide you in the right direction.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Stronger Online Presence",
				body: "When you partner with our team and hire us for your Amazon SEO service requirements, you can expect that we will provide optimal services that are essential to improve your business’s growth. We will combine our skills with high-end tools that are mainly designed to help you achieve your expected online presence.",
			},
		],
	},

	topIconBox: {
		eyebrow: "Our Range Of Amazon",
		title: "SEO Services",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research",
				body: "With hands-on experience in the SEO industry, we know what it takes to research the most profitable keywords for your business to rank for. We will research primary keywords, second keywords, and long-tail keywords to give strong competition to your competitors. For researching keywords, we make use of advanced SEO tools.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Amazon Account Audit",
				body: [
					"Audit plays the most important role in making your website successful. We, as a leading Amazon ",
					{ text: "SEO company in US", href: "/seo-search-engine-optimization/" },
					", will conduct a complete audit of your website to know the issues and solve them through a strategic plan. Our strategic plan implementation will prove beneficial for your website to take your product sales to the next level.",
				],
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Competitor Analysis",
				body: "Before we start implementing top SEO strategies for your business, we will do a complete analysis of your competitors using best-in-class tools. We will identify your competitors and know the opportunities to make your place in the market. Strategies like pricing, top-quality customer service, products, deals & discounts to help you to beat your competitors.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Seller Account Setup",
				body: "We will help you to set up your Amazon seller account and enter your complete product details. We at Icecube Digital ensure that your account is ready to sell products to your customers and earn millions.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Monthly Reporting",
				body: "Get complete reporting on your Amazon stores, like total selling, profit, loss, product performance, and overall performance. We provide reporting to keep you updated about your store so that it becomes easier for you to make decisions.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Amazon Listing Optimization",
				body: "Our team of Amazon experts will optimize your Amazon store by improving product descriptions, meta titles, specifications, and more to improve sales and profit. Comprehending buyers’ needs, we will optimize your Amazon listing accordingly.",
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Icecube Digital As Your Amazon",
		title: "SEO Agency?",
		subtitle: "Hiring Icecube Digital SEO company for your Amazon SEO service needs will be the right decision for you. We will help you make a huge difference in how your product ranks on Amazon. Here are some of the major reasons why we are the perfect partner for your project:",
		benefitsLeft: [
			"Experienced and Skilled Team of Amazon Experts",
			"Award-Winning SEO Agency",
			"Point of Contact",
		],
		benefitsRight: [
			"Hands-on Experience in the SEO Industry",
			"Constant Support & Updates",
			"Transparency Throughout the Project",
		],
	},

	cta: {
		text: "Still Have Confusion How Amazon Experts Help You? Get In Touch With Us Today To Know!",
		ctaLabel: "Contact us today!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Amazon SEO",
		title: "FAQs",
		items: [
			{
				question: "What Is Amazon SEO, And How It Works?",
				answer: "In simple terms, Amazon SEO mainly focuses on different types of keywords that people use while searching for any product. Generally, Amazon users make transactional search intent; therefore, your content should be customized to meet the intent and include phrases that people are using for making purchases.",
			},
			{
				question: "How Do I Increase My Organic Ranking On Amazon?",
				answer: "To improve your organic ranking on Amazon, you need to understand how to make use of keywords correctly in your product listing. This way, you will increase your earning potential on Amazon. Here are four different ways to improve your organic ranking on Amazon with the help of Amazon SEO agency:",
				answerList: [
					"Product listing title",
					"Backend keywords",
					"Product images",
					"Bullet points and product descriptions",
				],
			},
			{
				question: "How Do I Find My Keyword Ranking Position On Amazon?",
				answer: "To find your keyword ranking position on Amazon, you must enter your most important keywords in the keyword tracker and click on Analyze. The extension crawls through the Amazon listing pages to analyze your listing position in the search results.",
			},
			{
				question: "Does Amazon SEO Also Work With Google SEO?",
				answer: "Google is the world’s biggest search engine, whereas Amazon is the largest eCommerce marketplace. Both Google SEO and Amazon SEO work together. You will not only reach more leads, but you can also use Google SEO to increase Amazon SEO product listings to earn more conversions.",
			},
			{
				question: "How Do I Find A Reputable Amazon SEO Services Provider?",
				answer: "To find the best right and professional Amazon SEO services USA provider, you need to consider different factors, including:",
				answerList: [
					"Hands-on experience in the Amazon SEO industry",
					"Check their reviews and ratings",
					"Read their testimonials from clients",
					"A dedicated team of Amazon SEO experts",
				],
			},
			{
				question: "Why is IceCube Digital the Best Choice for Amazon SEO Services?",
				answer: "IceCube Digital is the leading Amazon SEO service company based in the USA. The company is well-known for providing advanced-quality SEO services for different industries. Moreover, the company has:",
				answerList: [
					"An experienced team of SEO experts to work on your requirements",
					"Single point of contact to communicate",
					"Capable of handling complex requirements with utmost care",
					"Cost-effective solutions and services",
				],
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default AmazonSeoServices;
