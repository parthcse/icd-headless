const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const SeattleSeoCompany = {
	slug: "seattle-seo-company",
	pageTitle: "Seattle SEO Company | Best SEO consultant Near You",
	metaDescription: "Looking for SEO Services in Seattle? Icecube Digital is a leading SEO Company in Seattle. Boost Brand Visibility and Double Your Sales with local SEO consultants.",

	banner: {
		heading: "Seattle SEO Company",
		paragraphs: [
			"Are you struggling to make your business a brand? Are you looking for a magic wand that upscales your business? Then your search ends here. Hire a Seattle SEO agency and witness what you think – count on us to make your website visible, increase daily traffic, generate leads, and compel your customers to avail of services and pay.",
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

	information: {
		eyebrow: "Join Hands With Seattle",
		title: "SEO Company",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "With a decade of experience in the SEO industry, Seattle SEO Agency has a team of qualified and skilled SEO experts, strategists, consultants, and professionals. We deliver a range of SEO services to small, medium, and enterprise-level companies worldwide. It doesn’t matter what type and size of business website you are running; we know how to make it rank at the top of the search results and generate your desired revenue.",
					},
					{
						type: "p",
						text: "Our SEO experts will first comprehend your business, target audience, and goal. Then, create a strategy to beat your competitors and ensure your company grows exponentially. So, if you have got a business website that you want to make successful, then connect with one of our SEO specialists and get the best possible solution today.",
					},
					{
						type: "ul",
						items: [
							"several awards",
							"retained big clients",
							"got positively reviewed on many business rating websites",
						],
					},
					{
						type: "p",
						text: "If you are a startup, you must let Google know about your business. If Google understands and updates your business, the world is automatically going to recognize it. We make it happen because our Seattle SEO experts are well-versed in SEO practices and metrics.",
					},
					{
						type: "p",
						text: "You don’t need to worry about anything when you hire our SEO agency based out of Seattle. Just sit back and focus on expanding your business/services. Making them catch customers’ attention falls under our job role.",
					},
				],
			},
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	leftIconBox: {
		eyebrow: "How Do You Benefit By Hiring Seattle",
		title: "SEO Experts?",
		items: [
			{
				icon: "/assets/icons/result.svg",
				title: "Get Your Products/Services in Ranking",
				body: [
					"Hiring ",
					{ text: "WordPress SEO experts", href: "/wordpress-seo-service/" },
					" in Seattle will always keep your business ahead when it comes to Google ranking. The reason is all the Seattle SEO professionals are well-versed in keyword research and have hands-on experience with link building. Having the capability of keyword research would be advantageous for your products/services to get ranked in Google.",
				],
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Increase Leads & Overall Sales",
				body: "Since you have an online platform for your eCommerce, you have won the half battle. But what about the other half? Leave that on our SEO experts to see in how short time your business gets orders across the world. Experienced the power of social media and leverage it by hiring our SEO experts. You will also witness how rapidly your business grows with potential customers.",
			},
			{
				icon: "/assets/icons/brand-tag.svg",
				title: "Build a Brand Out of Your Business",
				body: "Your business is just a few SEO strategies away from becoming a brand. Our SEO experts ensure that your business name comes into the top ten results of Google search engines. Users will start trusting your business and its products/services once it gets in the top search results.",
			},
			{
				icon: "/assets/icons/mobile.svg",
				title: "Make Your Business Mobile-Friendly",
				body: "More than half of the population prefers to use mobile when shopping or visiting any website. That also means that your business’s website should be mobile-friendly. Make your business website more convenient and user-friendly to deliver an unforgettable experience to your target audience.",
			},
		],
	},

	cta: {
		text: "Unveil The Power Of Search Engine Optimization & Scale Your Business",
		ctaLabel: "Talk to our experts",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Explore Seattle SEO Professional",
		title: "Services Near You",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Strategically Research Keyword",
				body: "SEO is entirely based on what you show to Google. Our Seattle SEO consultants have hands-on experience with various tools that offer keywords with search volumes. It means what your business target audience searches for on Google, the tools will fetch it out. This way, our SEO experts make strategies to promote your goods/services and stay ahead of the competition.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Analyze Competitors",
				body: "Our Seattle-based SEO consultants are well-acquainted with competitor analysis. With their sharp eye on what’s going on in the market and how Google would react, they ensure to fetch out the best backlinks and keywords. Besides, they even perform a keyword gap analysis to sort out the best keywords with high search volume.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Makes Your Business Visible",
				body: "SEO is a key to making your online platform visible to your target audience. Your business will never be monetized if it doesn’t come to the notice of the target audience. All your efforts to solve your target audiences’ problems may go in vain if you fail to promote your brand. Our Seattle SEO agency is a hub of SEO experts that ensures to make your business visible to your target audience within the stipulated time period.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Since we have SEO experts who fetch out the best keywords appropriate to your business, we can also write articles on it. Writing an article is one of the potential ways to promote your business. You can communicate with your target audience through articles or blogs. Our team of content curators can even do that job for you by writing articles for your products/services.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Local SEO",
				body: [
					"Are you struggling to promote or make your goods/services visible locally? Then you have landed on the right page. Talk to our Seattle ",
					{ text: "SEO provider near you", href: "/local-seo-services/" },
					" for various SEO strategies to choose from. They run different campaigns which make your business locally visible becomes no big deal. So, shake hands with our SEO experts and witness how agilely your business gets in attention locally.",
				],
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "On & Off Page SEO",
				body: "SEO factors like backlinks, meta-tags, optimization, anchors, and 404 are where our Seattle SEO professionals excelled at. On the other hand, the same SEO experts are also well-versed in handling business social media accounts, listings, and external link building. Besides, these SEO experts in Seattle also indulge in bringing in positive reviews through different social media channels, like Facebook, BBB, and Google.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO",
				body: "One of the potential factors to rank your business’s products/services is keeping an eye on the website’s technical soundness. If that matches Google’s algorithm, then there are fewer chances of not getting ranked on Google. Several negative errors are slow page speed, icons not properly visible or functional, and page errors are areas to be kept in check. Hire our SEO experts and get free from such hassles.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Amazon Marketing Services",
				body: "Amazon is a marketplace for all products and services. To get your product featured and ranked, you need to join hands with someone who knows the nitty-gritty about Amazon metrics. With our Seattle SEO consultants, don’t worry about product listings, pricing strategy, optimization, and Amazon SEO.",
			},
			{
				icon: "/assets/icons/minicart.svg",
				title: "E-commerce SEO",
				body: "If you are into an eCommerce business, you must hire SEO experts to leverage modern-day online business promotion and accelerate your business growth. Icecube’s SEO experts can become your helping hand since these professionals have the know-how about eCommerce business and its scalability.",
			},
		],
	},

	checkList: {
		eyebrow: "Why Should You Hire Icecube As Your Digital",
		title: "Marketing Agency?",
		subtitle: [
			[
				"Icecube is a hub of ",
				{ text: "digital marketing experts", href: "/digital-marketing-service/" },
				" who have years of experience in standing ahead of their competitors. Our strategies never fail to get the holdings of ranking. We are based out of the USA and are a house of SEO professionals, content curators, and strategists.",
			],
			"Having more than 14 years of experience in the industry, we make ourselves well-versed with the demand of Google and your target audience. Since our inception, we have kept one thing consistent, and that is the customer retention ratio. This proves that whatever we do, our clients always benefit.",
		],
		benefitsLeft: [
			"Team of experts with hands-on experience in different verticals",
			"Hourly and project-based dedicated SEO experts",
			"Technical support to your questions, queries, and concerns",
		],
		benefitsRight: [
			"Transparent communication",
			"Single point of contact for confusion-free discussion",
		],
	},

	imageText: {
		eyebrow: "Best Result With Our",
		title: "Seattle SEO Experts",
		image: "/assets/photos/seattle-seo-experts.png",
		imageAlt: "",
		paragraphs: [
			"A leading food wholesale business picked Icecube Digital to take rankings to the next level in order to attain all-time sales highs. Organic traffic surged by more than 460% in a year, with more than 10,000 new keywords ranking on Google.",
			"As a well-known company in the firewood industry, they needed an established and trustworthy company to drive more customers to their online store. After having multiple proposals from various companies, they chose Icecube Digital to handle their entire digital marketing campaign and were very pleased with their decision. Our cohesive team of Seattle SEO experts began SEO efforts by doing competitor research, identifying core business keywords, fixing page load speed, building links, blog outreach, and fixing URL architecture issues. Quarter over Quarter we increased organic traffic, sessions, and revenue. Fergal’s site saw phenomenal success with our strategic SEO efforts.",
		],
	},

	ctaSecondary: {
		text: "Tell Us About Your Seattle SEO Service Requirements And Get A Free Quote To Hire Experts Today!",
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
		eyebrow: "Seattle SEO",
		title: "FAQs",
		items: [
			{
				question: "How Much Does Seattle SEO Costs?",
				answer: "Seattle SEO services range from somewhere between $400-$10,000 per month, depending on service levels. Also, it depends on an hourly and monthly basis. Besides, a small business with 15 pages website to an eCommerce website with more than 50,000 products also includes the price-deciding factor.",
			},
			{
				question: "Is The Ranking Guaranteed After Hiring Seattle SEO Experts?",
				answer: "Yes, hiring SEO experts would help in ranking your products/services better. It doesn’t guarantee that the SEO campaigns would definitely fix the first spot in Google, but you can rest assured that there would be more chances of business getting visible with SEO experts than without hiring them.",
			},
			{
				question: "Why Should You Hire Seattle SEO Professionals?",
				answerHtml: "<p>Hiring SEO professionals and that too from Seattle would bring a lot of benefits to the table:</p><ul><li>Increase in organic traffic to your online business website</li><li>More visibility and click on your website</li><li>Better user experience for quick conversion</li><li>Gradual increase in sales and revenue levels</li><li>Get a better understanding of what your customers are looking for</li><li>Meeting your customers demands</li></ul><p>So, these are prime benefits of hiring dedicated SEO professionals to your business website.</p>",
			},
			{
				question: "How Long Do SEO Strategies Take To Show Results?",
				answer: "Search engine optimization doesn’t offer overnight results; it requires patience and testing around the clock. The average time SEO strategies take is somewhere around 4-12 months. It entirely depends on keyword search volumes, on and off-page SEO, and your business niche. If your business has a limited target audience and search volume is low, it might take no time to see results. Contrary to this, a highly demanding business would require patience to witness favorable results.",
			},
			{
				question: "How To Get Started With My Seattle Website SEO Project?",
				answer: "You can contact our Seattle SEO experts for your SEO requirements. One of our Seattle SEO specialists will schedule to get on a call with you. Our team will conduct a thorough SEO audit for your web store to find out areas for improvement. From there we will assign the best resources for your SEO project and get started.",
			},
			{
				question: "What Types Of SEO Strategies Do You Implement For Your Clients In Seattle?",
				answer: "We implement SEO strategies depending on the client’s website and requirements in Seattle. We suggest the best possible strategies that drive our client’s website traffic, ranking, reach, and conversion. Some of the most powerful techniques are keyword research, identifying your audience, optimizing the content, improving the user experience, and on-page and off-page SEO.",
			},
			{
				question: "What Are Local Rankings Or Local SEO Or Seattle SEO?",
				answer: "Local ranking for websites is the process of ranking your business higher on local searches in Seattle. Google uses a different algorithm for local rankings and local search queries. Apart from the factors, considered for a Seattle search query, additional factors like local citations in 3rd party directories, quantity, quality of online reviews, etc. are also considered to rank a business in local search.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default SeattleSeoCompany;
