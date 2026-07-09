const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const OnPageSeoServices = {
	slug: "on-page-seo-services",
	pageTitle: "Professional On-Page SEO Company | On-Page SEO Services by Experts",
	metaDescription:
		"Icecube Digital is a professional on-page SEO agency. Experience a detailed on-page SEO audit from our skilled on-page SEO specialists and experts. Contact us today!",

	banner: {
		heading: "On-Page SEO Services",
		paragraphs: [
			"Search engine optimization (SEO) is a dynamic field, and On-page SEO services remain the bedrock for online visibility and organic traffic growth. At Icecube Digital, we excel in crafting and implementing comprehensive On-page SEO strategies that harmonise with the latest search engine algorithms and user behaviour trends.",
			"As a reputable On-page SEO agency, we empower businesses across the USA to connect with their target audience, enhance their online presence, and ultimately drive conversions.",
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
			"In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [56589, 56571, 56581],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE On-Page SEO",
		title: "Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	information: {
		eyebrow: "What Is On-Page",
		title: "Search Engine Optimization?",
		contentAlign: "left",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "On-page SEO refers to optimising individual web pages so that they rank higher in search engines and receive more organic traffic. This involves a close examination of different parts of your site, such as:",
					},
					{
						type: "ul",
						items: [
							{
								title: "Content:",
								text: "Ensuring it is high-quality, relevant, keyword-optimized, and valuable to readers.",
							},
							{
								title: "HTML Source Code:",
								text: "Optimizing title tags, meta descriptions, header tags, etc., and including image alt text where necessary help provide clear signals to search engine robots about what your page's content entails.",
							},
							{
								title: "Site Architecture:",
								text: "Creating a logical structure for your website makes it easy for users and search engines to navigate through it quickly.",
							},
							{
								title: "User Experience (UX):",
								text: "On-page SEO ensures that your website is mobile-friendly, loads quickly, and provides a seamless user experience across all devices.",
							},
						],
					},
					{
						type: "p",
						text: "Strategically engaging these On-page elements can vastly improve where a website appears in search engine results pages (SERPs). On-page SEO plans and ranking factors, in turn, will attract qualified organic traffic that aligns with your business goals.",
					},
				],
			},
		],
		ctaLabel: "Request a Demo!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	topIconBox: {
		eyebrow: "Our On-Page",
		title: "SEO Services",
		subtitle:
			"Icecube Digital offers a range of comprehensive On-page SEO services, which should help take your website to new heights:",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "On-Page SEO Audit",
				body: "This involves an analysis by our On-page SEO experts, who then use their findings to develop strategies to improve different optimization aspects depending on what needs attention most. The technical issues during this audit include content quality, keywording, and user-friendliness. It also considers competitor analysis, thus giving you an overall view of your site's strengths and weaknesses.",
			},
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research & Analysis",
				body: "We do extensive research to determine which keywords will likely offer good returns on investment (ROI) based on what people search for when buying products/services like yours. We also consider how difficult it is to rank highly against those terms, considering where someone would be within their buying cycle if they were using them.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Optimization",
				body: "We optimise your current content and produce new, exciting content that resonates with your target audience and follows search engine optimization guidelines. This may include ensuring content relevance and depth, strategic keyword integration, optimising content structure and formatting, internal linking, and maintaining fresh materials.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Technical SEO",
				body: "This section addresses technical SEO issues that could slow down your site, such as mobile friendliness, crawlability, or speed. It also incorporates making the website fast by optimising site speed, achieving mobile responsiveness, fixing crawl errors and indexing problems, implementing structured data markup, and resolving duplicate content.",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "Meta Tag Optimization",
				body: "Compelling meta descriptions and title tags that contain keywords are composed to increase the click-through rate from SERPs. Our meta tags should accurately reflect page content while at the same time incorporating relevant keywords that will drive users into clicking them within character limits for maximum display.",
			},
			{
				icon: "/assets/icons/images-place.svg",
				title: "Image Optimization",
				body: "Image file names, sizes, and alt text are optimised to make them user-friendly, improving page load speed. We use descriptive file names with correct alt texts and compressed images so that they can have optimal size, thus creating image sitemaps for better search engine indexing.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Internal Linking",
				body: "Our internal links improve website navigation, distribute link equity, and establish a clear site hierarchy. This means redirecting users to related content, passing on link juice, and creating a clear site structure.",
			},
		],
	},

	infoBox: {
		eyebrow: "Why Choose Us As An On-Page",
		title: "SEO Company?",
		columns: 2,
		items: [
			{
				title: "Proven Expertise",
				body: [
					"Our team at Icecube Digital is not just a group of ",
					{ text: "SEO professionals", href: "/hire-seo-experts/" },
					", but a collective of experienced individuals who are constantly updating their knowledge to stay ahead of the latest search engine algorithms and On-page optimization strategies. This ensures that we are always equipped to provide you with the best On-page SEO services.",
				],
			},
			{
				title: "Data-Driven Approach",
				body: "We employ advanced SEO tools & analytics for insights which drive strategy development and monitor progress towards achieving results that can be measured.",
			},
			{
				title: "Client-Centric Focus",
				body: "At Icecube Digital, we understand that your business objectives are unique and important. That's why we align our On-page SEO service offerings with your specific needs, taking into account factors such as your industry positioning and budgetary allocations. We value your business and strive to provide the best solutions for your success.",
			},
			{
				title: "Transparency and Communication",
				body: "We believe in keeping our clients informed and involved throughout the On-page SEO process. We provide regular updates on the progress of your optimization, sharing insights and tips based on industry standards and our personal experiences. We want you to feel confident and informed every step of the way.",
			},
		],
	},

	checkList: {
		eyebrow: "Customized Packages From Our On-Page",
		title: "SEO Experts",
		benefitsLeft: [
			[
				{ bold: "White Label SEO Services: Diversify Your Offerings" },
				" We offer ",
				{ text: "white-label SEO services", href: "/white-label-seo-services/" },
				" for companies and marketers who want to expand their services. Our white-label solutions allow you to seamlessly add our professional On-page SEO services to your portfolio, boosting the value proposition and customer satisfaction.",
			],
			[
				{ bold: "Technical SEO Services: Treating The Cause" },
				" While On-page SEO deals with individual page elements, ",
				{ text: "Technical SEO services", href: "/technical-seo-services/" },
				" focus on your website's back-end infrastructure. We provide full-service technical SEO audits and optimization services to ensure that your site is crawlable, indexable, and free of technical problems that may prevent it from appearing in search engines.",
			],
		],
	},

	cta: {
		text: "Optimize Your Website for Success! Get Our Professional On-Page SEO Services Today.",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "On-Page SEO Services",
		title: "FAQs",
		items: [
			{
				question: "How long until my On-page SEO start showing results?",
				answer: "There's no definite answer to this question. The time it takes for results to show from On-page Search Engine Optimization can be influenced by factors like industry competitiveness level, current website status quo or how much optimization has been done. Still, significant changes will usually become apparent within a few months, followed by continuous growth.",
			},
			{
				question: "What is the price range for On-page SEO services?",
				answer: "On-page SEO services have varying costs based on the work, website size and specific needs. We determine pricing by quoting what suits you best.",
			},
			{
				question: "Should I consider On-page SEO if I've invested in Off-page SEO already?",
				answer: "Off-page and On-page optimization are essential parts of a complete search engine optimization strategy; they go hand in hand with each other. In particular, while Off-page optimizations concentrate mainly on creating authority through backlinks from external sources, among other signals, On-page ones ensure that search engines can understand what your site is about so that it can be shown to relevant users during queries related to its content or topic area within their SERPs thereby leading more traffic into your pages.",
			},
			{
				question: "Is it possible to do On-page SEO by myself?",
				answer: "Some elemental tasks of On-page optimization can be done by oneself, but the best possible outcomes are typically achieved with the help of a professional On-page SEO specialist. Our personnel has the information, equipment, and skillset required for executing advanced optimization strategies that conform to the latest industry standards.",
			},
			{
				question: "How often should I update my On-page SEO?",
				answer: "Search engine algorithms and user behavior keep changing, so it is necessary to frequently revisit and refresh your On-page SEO. We advise conducting regular audits and making any required modifications to sustain its maximum efficiency.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default OnPageSeoServices;
