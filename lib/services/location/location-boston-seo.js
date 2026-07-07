const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const BostonSeoServices = {
	slug: "boston-seo-services",
	pageTitle: "Boston SEO Company | Expert SEO Services Near You",
	metaDescription: "Looking for SEO Services in Boston? Icecube Digital is a leading SEO Company in Boston. Boost brand visibility and double your sales with local SEO consultants.",

	banner: {
		heading: "Boston SEO Company",
		paragraphs: [
			"Want to make your website a lead-generating machine? Looking to drive revenue from your website? We provide end-to-end SEO services, including complete website audits and on-page and off-page SEO. No matter what type and size of website you are running, we at Icecube Digital will comprehend your needs and provide the best solution.",
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
		eyebrow: "Boston SEO Services That Drive",
		title: "Targeted Traffic & Sales",
		cards: [
			{
				blocks: [
					{
						type: "p",
						parts: [
							"Do you keep googling your business a million times a day to keep checking your presence, and each time your search doesn’t satisfy you? Then calm your nerves as the ",
							{ bold: "Top SEO services" },
							" are here to optimize your online presence. ",
							{ bold: "Boston SEO services" },
							" are the bridge to make organic visitors come your way leading to better conversions and more revenue.",
						],
					},
					{
						type: "p",
						parts: [
							"Our ingenious SEO professionals have made some pact with google that each time they get an SEO project offered, We skyrocket it over google rankings. Google has admitted that customer behavior has changed in the last few years, but is that a problem? Well, not for our ",
							{ bold: "Top SEO Experts" },
							", as we have been winning this online battle almost every day… Ooops, Evey, click.",
						],
					},
					{
						type: "p",
						text: "Precisely what Magic is Boston SEO Experts going to create? No magic, only logic….",
					},
					{
						type: "ul",
						items: [
							[{ bold: "Expertise" }, ": An expert always sounds perfect, which helps sustain organic traffic."],
							[{ bold: "Authoritativeness" }, ": Accuracy and originality always convert."],
							[{ bold: "Trustworthiness" }, ": Visitors turn into organic customers."],
						],
					},
					{
						type: "p",
						text: "Are you thinking all this was blabbering? Well, in that case, you must try it to prove us wrong. Who knows if you might end up generating better revenue? Isn’t this the best win-win situation?",
					},
				],
			},
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	plainText: {
		eyebrow: "Strengthen Your Brand With",
		title: "Boston SEO Experts",
		contentAlign: "center",
		paragraphs: [
			"Have you ever wondered why SEO is called a strategy? Because it is comprehensive of not just one but a million ways that make a website visible. Rankings and Visibility are just two primary things fragmented into various factors like tags, keywords, image tags, inbound links, customer behavior, structure, and various offsite factors. All this sounds complex, but hey, we got your back.",
			"With each project for SEO, we discovered unique tactics for SEO that helped us grow each day. Today, here we are as top Boston SEO consultants.",
			"If the Content is the king, SEO is the crown, and a king with no crown… does that thing even exist?",
			"We personalize websites for their ranking and visibility. The search engine’s sole purpose is to provide the readers with the most relevant search results. And in that case, the only thing that can get you some light is on-page optimization and targeted keyword structure, not buy some newbie rather than professionals.",
		],
	},

	leftIconBox: {
		eyebrow: "Our Boston SEO Services",
		title: "Dominate Competition",
		subtitle: [
			"Before you start scratching your head and assuming how we perform SEO and how it will help you scale up, we will unwind this secret to you.",
		],
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "In-Depth Keyword Research",
				body: "It’s not just about visitors. Rather it’s about potential buyers. That’s why it’s important to chase what is getting phrased in the search bar by these buyers. It initially starts with discovering terminologies that are prime definitions for your business and then converting them into primary and secondary keywords. It’s a game of probability, throwing dice and winning a six, and trust me, our SEO Experts are sheer winners of this game.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "On-Page & Off-Page SEO",
				body: "It’s not just through search engines but other mediums like social media that drive traffic. Boston SEO professionals understand this connectivity pattern pretty well, so onsite and offsite optimization is kept in mind while performing the task.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical Optimization",
				body: "Any search engine scans the page and then ranks it further. Any search engine content is a sum of text and images, and there is a lot of technical stuffing to maintain proper scanning. Simple URL structure, page speed, sitemap, broken redirects, and website navigation are a few.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Originally curated Content",
				body: [
					"You are not the only one with a laptop, website, business, skills, and brain. Everyone has their originality of thoughts that curates authentic content. If there is a requirement for ",
					{ text: "SEO services", href: "/seo-search-engine-optimization/" },
					" to improve website ranking, it is quite clear that the competition for originality is high. Boston SEO experts believe in touching heights.",
				],
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "In-Bound linking",
				body: "The popularity of any site depends widely on this factor. This SEO practice involves the strategic and creative structuring of quality links. All online platforms that have developed organic traffic with potential customers are the after-effect of backlinking.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "E-Commerce SEO",
				body: "The E-commerce industry is the prime revenue generator. Shake hands with top SEO consultants. You also want these numbers to increase exponentially. With personalized optimization of your marketing pages, you can make some room.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Cost-effective SEO Setup",
				body: [
					"Anything heavy on pockets doesn’t count as a benefit, and we completely relate to that. Hence our ",
					{ text: "SEO optimization services near you", href: "/local-seo-services/" },
					" are an economical one-stop destination for SEO optimization.",
				],
			},
		],
	},

	infoBox: {
		eyebrow: "What Makes Icecube Digital The Best",
		title: "Boston SEO Agency",
		subtitle: [
			"Are we rocket scientists? No, are we the greatest philosophers of all time? No man, are we time travelers? Sad, but not yet. We are SEO experts who define what we do, and what we are good at and that’s why you can choose us.",
			"But if you are still not convinced, let me shower some points then;",
		],
		items: [
			{
				title: "Experience Provides Expertise",
				body: "Every business needs to be directed concerning the driving audience; thus, for Boston SEO experts, it becomes essential to formulate SEO tactics that are driven, unique, and personalized. Our experienced SEO professionals have gathered expertise over this quite well, and thus for every business, they follow essential but unique optimization.",
			},
			{
				title: "Brand Awareness",
				body: "Businesses skyrocket when they became a brand. And our SEO professionals team leaves no stone unturned to lavish your presence on various search engines, let it be Google, Yahoo, or Bing.",
			},
			{
				title: "More Potential Buyers",
				body: "It’s not just about the visitors or traffic; it’s about the conversion with every click. Every business that knocks on our door for SEO has the prime purpose of generating more traffic. Our sole purpose is to make that aim succeed. Each SEO professional is dedicated to bringing in exponential numbers your way.",
			},
			{
				title: "Providing You With the Creamy Layer",
				body: "The competition is high, and we are determined to make our clients touch that height. With every transformation in the customer’s approach, our approaches change too. In business, winners know how to sustain, and trust our SEO experts have all the How-to-guides for sustaining a brand in the digital era.",
			},
			{
				title: "Monitoring SEO results",
				body: [
					"Shake hands to improvise and optimize your website for better business, revenue, and branding. Within months our ",
					{ text: "Magento SEO experts", href: "/magento-seo-services/" },
					" can guarantee you the accomplishment of the well-mapped plan. If you are still here with me, you have probably understood the importance of SEO optimization to your website and how we process it. But obviously, there must be certain factors that would be leading your eyes to roll. So let’s take up these FAQS to fathom the subject better.",
				],
			},
		],
	},

	imageText: {
		eyebrow: "Achieve Best Results With #1 Ranked",
		title: "Boston SEO Consultant",
		image: "/assets/photos/boston-seo-consultant.png",
		imageAlt: "",
		paragraphs: [
			"With organic traffic at an all-time low, it was critical to turn things around. We regained the rankings and increased them to new all-time highs, generating more than 160% organic traffic and 67% organic revenue in 2022.",
			"CCC – A leading medical cannabis healthcare center came to us to recover their organic website traffic and revenue through the power of SEO. Some of the tasks we have performed such as removing thin content, toxic backlink removal, creating PR, writing informative copy with LSI keywords, website speed optimization, and fixing 404 errors. In 7 months, when Google rolled out another algorithm update, this time website got a nice recovery with continuous SEO efforts. Our Boston SEO experts grew organic traffic by more than 160% and 67% in revenue.",
		],
	},

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	faq: {
		eyebrow: "Boston SEO",
		title: "FAQs",
		items: [
			{
				question: "Why Should I Hire a Boston SEO Company?",
				answer: "To beat your competitors through custom SEO strategies and tactics, hire a professional Boston SEO company that comprehends your business requirements and delivers services accordingly. An experienced Boston SEO agency is known for delivering real revenue results to its customers.",
			},
			{
				question: "How Much Does it Cost to Hire a Boston SEO Expert?",
				answer: "The average cost to hire a professional Boston SEO consultant is between $25-$150 an hour. Generally, SEO costs range from $400 to $5000 per month. Moreover, it also depends on the type of expert you are hiring for your business, like years of experience, skills & experts, and more.",
			},
			{
				question: "How Long Does It Take to Rank on Google?",
				answer: "Being one of the leading WordPress SEO experts in the USA, we make use of various tools for different purposes. We use different paid tools from keyword research to optimizing content and preparing reports to understand your website’s health score that we can discuss with you on call during the consultation.",
			},
			{
				question: "If My Site Ranks Well Now, Should I Still Invest in SEO?",
				answer: "Yes, of course, you should invest in SEO to maintain your position on Google. As you know that SEO is an ongoing process, so if you are investing in the right Boston SEO experts, it will deliver greater results. No matter whether you are ranking on the first page of Google or 2nd page, you need to invest in SEO to maintain the position.",
			},
			{
				question: "Does an SEO Service Offer Guaranteed Results?",
				answer: "Most ethical Boston SEO agencies do not provide any kind of guarantee as they can’t really control the outcome. This is because search engines regularly update their algorithms and are constantly evolving. The best way to make this decision is by researching and checking out their credibility.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default BostonSeoServices;
