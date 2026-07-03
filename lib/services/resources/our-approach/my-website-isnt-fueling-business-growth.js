const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../../common-section/milestone-section";
import achievementsSection from "../../common-section/achievements-section";
import ourClientsSection from "../../common-section/our-clients-section";
import ceoCtaSection from "../../common-section/ceo-cta-section";

/** @type {import('../../index').ServiceData} */
const MyWebsiteIsntFuelingBusinessGrowth = {
	slug: "my-website-isnt-fueling-business-growth",
	pageTitle: "6 Reasons Your Website Isn't Fueling Growth & How to Fix It",
	metaDescription: "Learn 6 reasons your website isn't fueling business growth and how Icecube Digital can help you fix them for better results.",

	banner: {
		heading: "6 Reasons Your Website Isn't Fueling Business Growth (And How to Fix It)",
		paragraphs: [
			"A website is meant to drive growth, but if it is not bringing in leads or sales, then something is definitely wrong. Common issues, like slow speed, poor SEO, and weak content, are the reasons that are holding your website back from shining. An optimized website attracts visitors, keeps them entertained, and transforms them into customers. When you partner with Icecube Digital, the experts not only help you find the gaps but also assist in bridging them through thoughtful strategies.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Or Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	getQuote: true,

	checkList: {
		eyebrow: "Our Approach To",
		title: "Revenue Growth",
		subtitle: [
			"Generating sustainable revenue growth requires not just Search Engine Optimization, but user experience and conversion optimization. As a prominent WooCommerce development and SEO agency, we implement data-driven strategies for maximizing online visibility and sales. With our specialities of SEO solutions, your business gets ranked up high and better engagement with revenue.",
			"Websites should act as salespeople that work round-the-clock to fetch leads and generate revenue. However, in case it doesn't deliver, it's time to work on the problems blocking your way. From technical SEO to conversion optimization, we help the business achieve maximum online visibility. Connect with Icecube Digital to turn your website into a high-performing sales machine.",
		],
		benefitsLeft: [
			{ title: "Comprehensive SEO audits", body: "Comprehensive audits are usually carried out based on a full-blown analysis of technical SEO, content gaps, and backlink profiles." },
			{ title: "Specific keyword strategy", body: "Royalties earned for high-converting search terms will be optimized for the right audience." },
			{ title: "User Experience enhancement", body: "It basically takes into account the improvement of a website with respect to speed, mobile responsiveness, and navigation." },
		],
		benefitsRight: [
			{ title: "Content Optimization", body: "We create engaging and SEO-friendly content with the intention of organic traffic." },
			{ title: "Conversion optimization (CRO)", body: "Improve landing pages and CTAs for direct sales increase." },
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "How to Optimize a Site That Isn't Driving",
		title: "Business Growth?",
		subtitle: [
			[
				"If your site isn't fueling business growth, something is wrong with SEO, user experience, and content quality. If these areas are weak, you'll struggle with traffic and conversions. However, an experienced ",
				{ text: "WooCommerce SEO agency", href: "/woocommerce-seo-service/" },
				" can help you fix these issues and transform your site into a high-converting platform.",
			],
		],
		steps: [
			{
				title: "Improve Website Speed & Performance",
				body: "A slow website will kill conversion. The visitor will abandon your website if it takes longer than 3 seconds to load. Meanwhile, Google considers site speed as one of the rank factors. Therefore, slow websites lose traffic and potential customers. A WooCommerce SEO company will see to it that speed is within range of optimization; this keeps the engagement of users on your site while improving the rankings. Here's what we do:",
				bodyList: [
					"Use a Content Delivery Network (CDN) to load content faster worldwide.",
					"Compress images to minimize the file sizes without losing quality.",
					"Minimize HTTP requests by reducing unnecessary elements.",
				],
			},
			{
				title: "Optimize for Mobile Users",
				body: "More than 60% of Internet users are browsing on mobile devices. If your site is not mobile-friendly, you are missing potential customers. Poor mobile experiences will damage rankings due to Google's mobile-first indexing. Good mobile optimization creates a good user experience, encourages conversion, and helps search visibility. To improve mobile optimization, here's what our WooCommerce experts do:",
				bodyList: [
					"Use responsive design to ensure your site adjusts across all screen sizes.",
					"Simplify navigation to make it frictionless and users easily find what they need.",
					"Optimize mobile checkout by reducing form fields and enabling autofill.",
				],
			},
			{
				title: "Create High-Quality, Relevant Content",
				body: "Content feeds SEO and engages visitors. However, poor-quality, obsolete, or irrelevant content can deter visitors. Google will rank content that is helpful and centered on users. Our team of writers assist in creating valuable content pieces that follow Google's EEAT (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines. While our experts conduct extensive keyword research to target relevant search queries, we also implement other strategies, like",
				bodyList: [
					"Write detailed, informative, and engaging content for your audience.",
					"Avoid duplicate content, which can lead to penalties.",
					"Include images, videos, and infographics to enhance readability.",
				],
			},
			{
				title: "Strengthen Your Technical SEO",
				body: [
					"Technical SEO ensures the crawlability, indexability, and accessibility of your site for search engines. If Google cannot properly read your site, it becomes impossible for you to rank. Our ",
					{ text: "SEO experts", href: "/hire-seo-experts/" },
					" conduct a technical audit to spot and fix these roadblocks. Here's what we do to improve the technical SEO:",
				],
				bodyList: [
					"Fix broken links to avoid user frustration and Improve URL structures to keep them clear and descriptive.",
					"Submit an XML sitemap to help search engines crawl your pages.",
					"Use structured data markup to enhance search results with rich snippets.",
				],
			},
			{
				title: "Improve User Experience (UX)",
				body: "A well-designed website means more user engagement and conversions. If users find your website hard to navigate, they will leave without taking action. A user-friendly website makes users stay back, leading to higher conversion rates. Here's what we do to enhance UX:",
				bodyList: [
					"Make navigation simple and intuitive with clear menus.",
					"Use engaging visuals and readable fonts for a seamless experience.",
					"Add clear CTAs to guide users toward conversions.",
				],
			},
			{
				title: "Improve Conversion Rate Optimization (CRO)",
				body: "Traffic, by itself, will not guarantee sales. If a visitor isn't converting, then something is lacking in optimizing your website for conversions. A WooCommerce SEO agency will help with your site testing and optimization for a better conversion rate. Here's how an expert will assist in improving CRO:",
				bodyList: [
					"Simplify checkout processes to reduce friction.",
					"Use A/B testing to determine what design and messaging work best.",
					"Show customer reviews and testimonials to build trust.",
				],
			},
		],
	},

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	achievements: achievementsSection,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default MyWebsiteIsntFuelingBusinessGrowth;
