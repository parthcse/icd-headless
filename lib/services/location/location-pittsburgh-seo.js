const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const PittsburghSeoCompany = {
	slug: "pittsburgh-seo-company",
	pageTitle: "Pittsburgh SEO Company | Expert SEO Services, Consultants",
	metaDescription: "Icecube Digital is a leading SEO company in Pittsburgh, PA. Our SEO consultants provide Pittsburgh SEO Services that drive traffic and leads to your business.",

	banner: {
		heading: "Pittsburgh SEO Company",
		paragraphs: [
			"The world has started revolving and relying on the internet. From ordering daily essentials to making a market presence, everything has gone online. In this era, is it well enough to rely on conventional marketing methods? If not, then what is the solution? Well, Search Engine Optimization (SEO) is a very useful method for making your brand’s strong internet presence. To get the right SEO services, talk to our experts now!",
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
		eyebrow: "Stand Out Your Brand with Pittsburgh’s",
		title: "Premier SEO Agency",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "For more than 14 years now, Icecube Digital, a Pittsburgh SEO agency, has been prominently working towards helping clients achieve the topmost positions on Google search results and get them organic traffic. If you are planning to start using digital marketing strategies for your business online, then SEO will be one of the essential things you need to consider. Our analysts will curate various SEO strategies to get your website its deserving target audience. The right target audience tends to stay on your website for a longer time period. We offer a range of digital marketing services, including SEO, social media marketing, and web design. SEO can be used for many purposes like",
					},
					{
						type: "ul",
						items: [
							"Promotion of products and services;",
							"Attracting new customers;",
							"Improving traffic on your website;",
							"Generating leads from search engines.",
						],
					},
					{
						type: "p",
						text: "What’s making you think more? Get your appointment now to get a FREE consultation for your business.",
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
		eyebrow: "Benefits of Hiring PGH",
		title: "SEO Experts",
		items: [
			{
				icon: "/assets/icons/rocket.svg",
				title: "Rank up Your Website",
				body: [
					"By hiring a reliable SEO company like us; you no more need to worry about the ranking of your website. With the help of ",
					{ text: "Philadelphia SEO experts", href: "/philadelphia-seo-company/" },
					", you can push your website into the top search results on Google. You may have a good product or service, but if no one knows about it, it’s useless.",
				],
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Increase Your Traffic Considerably",
				body: "Increasing organic traffic is a demanding job, but for Pittsburgh SEO company, it is a mission. With the help of our SEO strategies, keyword research, google analytics, and link building, you can generate relevant content that increases your traffic noticeably. High-traffic websites hold the topmost position in Google, so your business’s online presence grows drastically.",
			},
			{
				icon: "/assets/icons/magnet.svg",
				title: "Primary Source of Leads",
				body: "Would you like your website to become the primary source of leads? If the traffic generated in an SEO-optimized website is educated properly about your products or services, then you are likely to get numerous leads from your website traffic only. If Pittsburgh SEO services strategize your website, it is enough to get you the desired business from your target audience through direct online marketing only.",
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Spend No More on PPC",
				body: "Investing money in creating SEO strategies is better than spending money on pay-per-click (PPC) marketing campaigns. Legitimate PPC is a costly yet less-effective way, while SEO is a cheap yet highly-effective way to attract your target audience. The audience shows more interest in useful content than in ads.",
			},
		],
	},

	cta: {
		text: "Boost Your Website’s Rankings And Drive More Traffic To Your Business",
		ctaLabel: "Get a quote!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "SEO Services We Provide",
		title: "in Pittsburgh",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Effective Keyword Research",
				body: "A good keyword strategy is essential because it can help increase your site’s traffic, sales, leads, and conversions. We at Pittsburgh SEO agency carefully research keywords, enlist them accordion to their search volume, and use them in the content. So, when content marketing published, it appears higher up in search engine results pages (SERP).",
			},
			{
				icon: "/assets/icons/detection.svg",
				title: "Competitor Analysis",
				body: "Staying on top of the business asks for everything. You never know when your competitors’ single move can badly impact your business. So, you should always keep an eye on their strategies and actions. Our SEO analysts do this job for you. They keep analyzing them and keep you in the loop, so you never have to sit back in front of your competitors.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Enhanced Credibility",
				body: "The better your website ranks, the more visitors it will get, and this will also lead to more sales as well. By ranking well in the SERPs, businesses can establish themselves as credible and authoritative sources of information in their industry. This can lead to increased brand visibility, as people are more likely to trust and engage with a reputable and trustworthy business.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Local SEO",
				body: [
					"Local SEO helps you increase the visibility of your business in local search results, which can lead to increased traffic, customer engagement, and, ultimately, increased sales. Our team of ",
					{ text: "local search optimization services", href: "/local-seo-services/" },
					" experts improves your business’s online presence so that it can be more easily found by people searching for products or services in their local area.",
				],
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "High-quality, well-written content can help to improve a website’s ranking in search engine results pages (SERPs). Search engines favor websites that provide valuable and informative content to users, so having a solid content strategy can help to improve a website’s ranking. We at Pittsburgh SEO services provide top-notch SEO-optimized content to keep your audiences engaged.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO",
				body: "Technical SEO involves optimizing a website’s infrastructure and architecture to ensure that it is easily crawlable, fast, and mobile-friendly. Technical SEO is a critical component of SEO because it helps search engines to understand and index a website’s content, which can improve the website’s ranking in Google. We, as a leading Pittsburgh SEO agency, carry out strategic technical SEO so that you don’t face any setbacks technically.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "On & Off Page SEO",
				body: "On-page SEO includes optimizing titles, descriptions, and headings to ensure they are relevant and keyword-rich. Off-page SEO is the optimization of a website’s presence outside its own site. This includes building high-quality backlinks from other reputable websites, as well as engaging in social media marketing and other promotional activities. We carry out on & off-page SEO on your website.",
			},
			{
				icon: "/assets/icons/social-share.svg",
				title: "Amazon Marketing and Promotion",
				body: "Listing your products on Amazon and competing with the best sellers globally is not an easy job. SEO experts at Pittsburgh accept this challenging task and strategically lists your products considering factors like Amazon SEO, promotion tactics, competitive pricing, and technical challenges.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "E-commerce SEO",
				body: "By partnering with Pittsburgh SEO agency, make your products and services stand out differently. Our carefully curated marketing strategies give your business a unique identity to stand different in the market. With our SEO services, not only is your business promoted, but you can see a drastic increase in sales numbers as well.",
			},
		],
	},

	plainText: {
		eyebrow: "Why Icecube Digital is the Ideal Pittsburgh SEO and",
		title: "Digital Marketing Partner",
		contentAlign: "center",
		paragraphs: [
			"Icecube Digital, based in the USA, has had its roots in SEO for more than 14 years now. We have a strong crew of SEO analysts, social media managers, and content writers, all having expertise in their respective fields. With their help, Icecube Digital ensures your business gets the identity it deserves over the internet.",
			"From the very first day of our foundation, we have tried to deliver the utmost customer satisfaction, which keeps us moving even after 14 years. We aim to provide digital marketing and web development solutions to every business possible.",
		],
	},

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	faq: {
		eyebrow: "Pittsburgh SEO",
		title: "FAQs",
		items: [
			{
				question: "Why is my website not getting ranked on Google?",
				answer: "There could be a number of reasons why your website is not getting ranked on Google. Here are a few potential explanations:",
				answerList: [
					"Lack of optimization: If your website is not optimized for search engines, it may be difficult for Google to understand and index its content.",
					"Poor user experience: Google takes the user experience into account when ranking websites, so if your website is difficult to navigate or has a poor design, it may struggle to rank well.",
					"Lack of high-quality content: In order to rank well in the search results, your website needs to have high-quality, relevant content that is useful to users.",
					"Low-quality backlinks: Backlinks from other websites can help to improve your website’s ranking in the search results. However, if your website has a lot of low-quality or spammy backlinks, it may get penalized by Google and struggle to rank well.",
				],
			},
			{
				question: "What is the difference between primary and secondary keywords?",
				answerList: [
					[{ bold: "Primary keywords" }, " are the most important keywords for your website and should be the focus of your SEO efforts. Primary keywords should be specific, relevant to your business, and have a high search volume."],
					[{ bold: "Secondary keywords" }, ", on the other hand, are additional terms or phrases that are related to your primary keywords and are less competitive and have a lower search volume than primary keywords. They help you to further clarify or expand upon the topic of your website or content."],
				],
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default PittsburghSeoCompany;
