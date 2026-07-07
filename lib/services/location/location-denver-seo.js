const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const DenverSeoAgency = {
	slug: "denver-seo-agency",
	pageTitle: "Denver SEO Company | Denver SEO Services By Experts",
	metaDescription: "Looking for Denver SEO Company? Icecube Digital has a decade of experience growing businesses like yours. Talk to our SEO experts for Free SEO Audit report.",

	banner: {
		heading: "Denver SEO Agency",
		paragraphs: [
			"Icecube Digital is a leading digital marketing and SEO company in Denver, delivering a range of SEO, PPC, and digital marketing services. Whether you want to increase traffic, ranking, leads, or overall sales, we specialize in serving highly targeted leads and top rank on Google. So, what are you looking for? Just get in touch with our SEO experts!",
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
		postIds: [56589, 56585, 56582],
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
		eyebrow: "Grow Your Business With Our Top Denver SEO",
		title: "Services Near You",
		contentAlign: "center",
		paragraphs: [
			[
				"Are you experiencing low organic traffic on your website? Do you feel that your website is not having a good ranking on top search engines like Google and Yahoo? Along with it, If you are also experiencing a low number of leads and sales, Icecube Digital is here to help with everything. We have a team of experienced and professional SEO experts to deliver a comprehensive range of ",
				{ text: "SEO services", href: "/seo-search-engine-optimization/" },
				" like off-page SEO, on-page SEO, content services, and link building.",
			],
			"Irrespective of the type and size of your business website, our team of SEO professionals is here to take your website to the next level. First of all, our team will comprehend your business website & its requirements, your goal, and accordingly prepare strategies to suffice your business needs. Just communicate with our experts and get the best possible solution TODAY!",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	leftIconBox: {
		eyebrow: "Benefits Of Hiring Our Denver SEO Experts",
		title: "For Your Business",
		items: [
			{
				icon: "/assets/icons/result.svg",
				title: "Get The Best & Desired Results",
				body: "Our team of SEO professionals have hands-on experience in evaluating your website, business goals, and competitors and preparing a complete plan to boost your website’s visibility and ranking. Our team will constantly track your website progress, ensuring that you achieve the desired results no matter how big your expectations are.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Stay on Top of Your Competitors",
				body: "As you know that SEO is evolving on a daily basis, and you might have to work on new strategies, trends, and tactics to keep your business website updated. Strategies and tactics keep changing every month, so our team will ensure that you stay on top of the trends and algorithm changes. We will dedicate our entire time to your business so that you stay ahead of your competitors.",
			},
			{
				icon: "/assets/icons/brand-tag.svg",
				title: "Build a Brand for your Website",
				body: [
					"If you have a website but you don’t have enough customers who buy from it, then it’s time to take serious steps. It’s time to make a brand for your website so that you can create awareness among your website visitors. Hiring us as your ",
					{ text: "WooCommerce SEO agency", href: "/woocommerce-seo-service/" },
					" will help you get more customers on your website and increase overall sales. We implement the right strategies, tactics, and techniques to turn your business into a brand.",
				],
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Better Return on Investment",
				body: "We are a leading Denver SEO agency, having the required data and insights on different local markets. Our experts have special expertise in delivering the right kind of traffic to your website. With building a brand to boost awareness of your brand, we know what it takes to make your website successful so that you get a better return on your investment.",
			},
		],
	},

	cta: {
		text: "Benefits Of Hiring Our Denver SEO Experts For Your Business",
		ctaLabel: "Get in touch now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Denver SEO Services To Suffice Your",
		title: "Business Website",
		subtitle: "To make your business website successful in terms of traffic, ranking, leads, and sales, we, a leading Denver SEO company, offer a comprehensive range of SEO services like keyword research, link building, local SEO, real-time analytics and more.",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research",
				body: "We have a team of Denver SEO consultants who do research for you to provide specific search data and keywords to help different businesses to rank online. Not only this, but we will also help to attract relevant organic search results. Using keyword research tools, competitive analysis, and strategies, we come up with a list of phrases to use.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Local SEO",
				body: [
					"No matter how small or big your business is, it is a must that you market it in the right manner through ",
					{ text: "local SEO services near you", href: "/local-seo-services/" },
					". Using SEO strategies, tactics, and guides, we make sure that your website ranks at the top of Google, gaining maximum traffic. Just get in touch with our experts, and our team will help you with everything you need.",
				],
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Link Building",
				body: "As you know that quality backlinks help different businesses gain overall visibility and organic traffic. We will help you get quality backlinks by being active on social media platforms, guest-blogging, link exchange, and creating diverse content.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Content is the king is the oldest saying on the web, and it helps businesses to boost brand awareness, traffic, and sales. From generating different types of content to content marketing, our SEO experts will help you with the exposure you need for your business to grow.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Real-time Analytics and Reporting",
				body: "We do real-time analysis to create reports so that we can empower you to understand the SEO campaigns fully. We can provide you with customized SEO service reports so that you know how your business is performing.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "eCommerce Marketing",
				body: "We have a team of eCommerce experts to focus on targeted keywords with white hat SEO tactics and techniques. We know how to bring your products on top of Google so that customers find them easily.",
			},
		],
	},

	checkList: {
		eyebrow: "Ready To Hire Icecube Digital As Your Denver",
		title: "SEO Partner?",
		subtitle: "If you have decided to hire Icecube Digital as your professional SEO partner, then you are in safe hands. Our team is proficient in creating effective strategies to make your website successful in a short span of time. Here are some top reasons why hire Icecube Digital as your Denver SEO partner:",
		benefitsLeft: [
			"14+ Years of Experience in the SEO Industry",
			"A Team of Professionals and Experienced SEO Consultants",
			"Cost Effective SEO Solutions",
		],
		benefitsRight: [
			"Single Point of Contact",
			"Simple Channels for Communication",
		],
	},

	imageText: {
		eyebrow: "Best Result With Our",
		title: "Denver SEO Experts",
		image: "/assets/photos/denver-seo-experts.png",
		imageAlt: "Best result with our Denver SEO experts",
		paragraphs: [
			"A leading food wholesale business picked Icecube Digital to take rankings to the next level in order to attain all-time sales highs. Organic traffic surged by more than 460% in a year, with more than 10,000 new keywords ranking on Google.",
			"As a well-known company in the firewood industry, they needed an established and trustworthy company to drive more customers to their online store. After having multiple proposals from various companies, they chose Icecube Digital to handle their entire digital marketing campaign and were very pleased with their decision. Our cohesive team of Denver SEO experts began SEO efforts by doing competitor research, identifying core business keywords, fixing page load speed, building links, blog outreach, and fixing URL architecture issues. Quarter over Quarter we increased organic traffic, sessions, and revenue. Fergal’s site saw phenomenal success with our strategic SEO efforts.",
		],
	},

	ctaSecondary: {
		text: "Tell Us About Your Denver SEO Service Requirements And Get A Free Quote To Hire Experts Today!",
		ctaLabel: "Get in touch now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	faq: {
		eyebrow: "Denver SEO",
		title: "FAQs",
		items: [
			{
				question: "How Much Does Denver SEO Service Cost?",
				answer: "The cost of Denver SEO services depends on factors like your website’s current situation, approach, the end goal, and even the company you select for SEO. Most Denver SEO companies that offer cheap services are well-known for “black-hat” techniques that can severely damage your organic ranking credibility and might also result in a penalty. Thus, it is highly recommended that you should only hire a professional Denver SEO company to get the best results.",
			},
			{
				question: "Can You Guarantee Rankings For My Website?",
				answer: "Most ethical Denver SEO companies do not provide any kind of guarantee as they can’t control the outcome. This is because google regularly updates its algorithms and is constantly evolving. You should stay away from such businesses which give some kind of guarantee or claim that they have some special relationship with Google.",
			},
			{
				question: "How Long Does Denver SEO Take To Work?",
				answer: "This too depends on your approach and what you are trying to achieve with SEO for your website in Denver. But with that being said, know that there is no overnight way to rank better on Google. If by results you mean a considerable increase in website traffic and sales, this would probably need at least 5 to 6 months. So consistent efforts and patience is most important for SEO success.",
			},
			{
				question: "What Are Denver Local Rankings Or Denver Local SEO?",
				answer: "Local ranking for websites is the process of ranking your business higher on local searches in Denver. Google uses a different algorithm for different location-based search queries. Apart from the factors, considered for a national search query, additional factors like local citations in 3rd party directories, quantity, quality of online reviews, etc. are also considered to rank a business in local search.",
			},
			{
				question: "How Will You Measure The Success Of SEO?",
				answer: "To measure the success of SEO, we will consider several performance metrics, including clicks, positioning of keywords, impressions, sessions, overall traffic, and organic sales on your website. We will ensure that you have implemented proper conversion tracking on your site.",
			},
			{
				question: "How Will You Know This Will Work For Us?",
				answer: "First, we will understand your business niche, products, and services and then analyze your competitors and target audience. Accordingly, we will prepare specific SEO strategies that will work for your website. We know that every business has different requirements, so we will provide unique services to fulfill your needs.",
			},
			{
				question: "Why Is It Important To Hire A Denver SEO Agency For My Website?",
				answer: "If you’ve just started a website, you might be able to handle the basics of SEO on your own by spending about 15-20 hours a week. But if you are serious about your website rankings, you’ll surely have to spend a lot more time on the process. On top of it, you’d also be required to keep yourself updated with the latest changes in Google algorithms and top strategies to get the desired results. This makes hiring a professional Denver SEO expert for the job a far better option.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default DenverSeoAgency;
