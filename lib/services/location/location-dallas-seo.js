const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const DallasSeoConsultant = {
	slug: "dallas-seo-consultant",
	pageTitle: "Dallas SEO Consultant | Dallas SEO Company & Agency",
	metaDescription: "Icecube Digital is a leading Dallas SEO agency with 14+ years of experience. Hire our Dallas SEO consultants to boost your rankings, traffic, and quality leads.",

	banner: {
		heading: "Dallas SEO Consultant",
		paragraphs: [
			"We believe in delivering results, not promises only. Icecube Digital is a leading Dallas SEO agency with 14+ years of experience in the industry. Whether you’re looking to increase your online presence and ranking or get more quality leads, we can help you with all. Just get in touch with us and discuss your SEO requirements today!",
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
		eyebrow: "Top Dallas SEO Marketing",
		title: "Company Near You",
		contentAlign: "center",
		paragraphs: [
			"Are you struggling to get more traffic to your website? Are you working hard to increase quality sales leads on your website? Then you have landed at the right place. Icecube Digital is a leading Dallas SEO company and has a team of professional SEO executives and experts to handle your varied project requirements.",
			"From content planning to content marketing, link building to on-page SEO, and keyword research to creating a strategy to increase leads, we can deliver a comprehensive range of SEO services for your website. We are dedicated to delivering both short and long-term results with our evolving SEO services and tailored strategies.",
			"With hands-on experience in the SEO industry, we provide a monthly reporting service to you, covering complete updates on current rankings, work completed by our team, and subsequent improvements.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	leftIconBox: {
		eyebrow: "A Varied Range of Professional Dallas SEO",
		title: "Services We Provide",
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research & Prepare Strategy",
				body: "Our team of SEO professionals has hands-on experience in researching the right keywords for your business to target the right audience. We will comprehend your target audience and what keywords they search for, and accordingly prepare a strategy for your campaigns. So, let our experts handle your keyword research needs and plan strategies to boost your competitors.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "On-Page SEO",
				body: [
					"How about earning more traffic from search engines like Google and Yahoo? What if you can double the sales leads? Wonderful, right? Our ",
					{ text: "Professional On-Page SEO", href: "/on-page-seo-services/" },
					" services like SEO audit, technical SEO, ROI tracking, competitive SEO analysis, content marketing plan, and website optimization will help you to get what you are looking for. Just talk to our experts and get a custom SEO proposal.",
				],
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Link Building",
				body: "Are you looking to increase your ranking, get more referral traffic, and gain brand control? Icecube Digital offers top-quality link-building services that work best for your business and industry. Our team knows how to implement the best SEO link-building practices to deliver the best quality links from the top DA websites.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO",
				body: "Do you know search engines like Google and Yahoo! have given more importance to those websites that give quality and user-friendly experiences? Our technical SEO team knows different technical SEO practices to deliver maximum results under your budget. We offer a range of technical SEO services to improve search rankings and help Google bots to crawl, interpret, and index your website’s pages.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "SEO Consultation",
				body: [
					"We at Icecube Digital have designed our ",
					{ text: "SEO consulting services", href: "/seo-search-engine-optimization/" },
					" for different businesses. Our SEO consultants will help with the best practices, advice, and top SEO strategies for your business website. Our experts will give the right suggestion for your company and implement the right suggestions to outrank the competition.",
				],
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "The saying will never go out of fashion that content is king; thus, our team of experienced content writers is here to help with top-quality content and editorial services. Here, we provide content writing services for social media, website design projects, PPC, and a wide variety of marketing copies.",
			},
		],
	},

	cta: {
		text: "Planning to Increase Website Rankings and Drive More Traffic to Your Business?",
		ctaLabel: "Get a quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	infoBox: {
		eyebrow: "How Hiring Dallas SEO Consultants Benefit",
		title: "Your Business?",
		columns: 2,
		items: [
			{
				title: "Our Experts Know It All",
				body: [
					"When it comes to hiring an SEO consultant for your business website, hiring ",
					{ text: "WooCommerce SEO experts", href: "/woocommerce-seo-service/" },
					" from Dallas is the best option. Our experts know the best practices and how to handle your website’s SEO with utmost care. Our team believes in delivering results that take your business to the next level.",
				],
			},
			{
				title: "Win More Quality Traffic",
				body: "If you are hiring an SEO consultant from us, then the chances are high that you will win more quality traffic to your website. Dallas SEO professionals have years of experience in handling different websites for their SEO needs. So, they will comprehend your website and accordingly deliver services that are in your favor.",
			},
			{
				title: "Increase Brand Awareness",
				body: "Another major reason to hire an SEO consultant from our agency is – to increase brand awareness so that you get many new visitors to your website and quality traffic. If done accurately, SEO will help you get new customers on your website, but make sure that you follow the correct strategies that are being suggested by our consultant.",
			},
			{
				title: "Improve ROI",
				body: "To improve the ROI of your business website, all you need to do is hire an experienced SEO consultant from our agency. Our consultants have practical experience and knowledge of different SEO techniques to help you identify marketing campaigns that deliver the best return on investment.",
			},
		],
	},

	checkList: {
		eyebrow: "Reasons to Hire Icecube Digital for Your",
		title: "SEO Requirements",
		subtitle: [
			[
				"Icecube Digital has a team of SEO specialists who know what it takes for your Dallas business to reach its goals in this ever-growing market. Hiring our ",
				{ text: "SEO consultants near you", href: "/local-seo-services/" },
				" in Dallas for your business website benefits you in many ways, like quality sales leads, traffic, and visibility. Here are reasons why you should hire us as your Dallas SEO agency project partner:",
			],
		],
		benefitsLeft: [
			"14+ Years of Experience in the SEO Industry",
			"Quality and Trained SEO Professionals",
			"Experienced in Handling Different Businesses With Varied Needs",
			"Dedicated Point of Contact",
		],
		benefitsRight: [
			"Clients Come First",
			"Transparent Communication",
			"Cost-Effective Rates",
		],
	},

	imageText: {
		eyebrow: "Best Results with Our Dallas",
		title: "SEO Service",
		image: "/assets/photos/dallas-seo-service.png",
		imageAlt: "Best results with our Dallas SEO service",
		paragraphs: [
			"With organic traffic at an all-time low, it was critical to turn things around. We regained the rankings and increased them to new all-time highs, generating more than 160% organic traffic and 67% organic revenue in 2022. CCC – A leading medical cannabis healthcare center came to us to recover their organic website traffic and revenue through the power of SEO.",
			"Some of the tasks we have performed such as removing thin content, toxic backlink removal, creating PR, writing informative copy with LSI keywords, website speed optimization, and fixing 404 errors. In 7 months, when Google rolled out another algorithm update, this time website got a nice recovery with continuous SEO efforts. Our Dallas SEO experts grew organic traffic by more than 160% and 67% in revenue.",
		],
	},

	ctaSecondary: {
		text: "Tell Us About Your SEO Service Requirements and Get a Free Quote to Hire Experts Today!",
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
		eyebrow: "Dallas SEO",
		title: "FAQs",
		items: [
			{
				question: "What are the benefits of hiring Dallas SEO consultants?",
				answerList: [
					"Here are the following benefits of hiring Dallas SEO experts:",
					"Improve your website’s ranking in search engines",
					"Help you remain competitive in your niche",
					"Increase your business’s revenue-generating potential",
					"Have hands-on experience in SEO techniques and tactics",
				],
			},
			{
				question: "How much does it cost to hire an SEO professional from Dallas?",
				answer: "The cost of hiring an SEO professional from Dallas depends on different factors like the years of experience of the expert, the services that you hire for, and the time you hire him for. The approximate cost of hiring a consultant for your SEO needs is $100-$250 an hour for USA.",
			},
			{
				question: "Why is SEO important for small businesses in Dallas?",
				answer: "Local SEO helps small businesses in Dallas to grow their business by making it more visible, increasing new customers, driving more traffic, and improving conversion rates.",
			},
			{
				question: "Why Should I Hire Icecube Digital for SEO Needs?",
				answer: "Hiring an SEO expert from Icecube Digital benefits you in many ways, like experienced professionals, trained & skilled experts to handle your project, and cost-effective rates. Not only this, but the company has been in the market for the past 14 years, so the team knows the ins and outs of SEO.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default DallasSeoConsultant;
