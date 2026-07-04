const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import achievementsSection from "../../common-section/achievements-section";
import ourClientsSection from "../../common-section/our-clients-section";
import ceoCtaSection from "../../common-section/ceo-cta-section";

/** @type {import('../../index').ServiceData} */
const MyWebsiteIsntAppearingOnGoogle = {
	slug: "my-website-isnt-appearing-on-google",
	pageTitle: "7 Common Reasons Your Website Isn't on Google & How to Fix Them",
	metaDescription: "Learn 7 common reasons why your website isn't showing on Google. Icecube Digital can help you fix them and improve your rankings. Contact us today!",

	banner: {
		heading: "7 Common Reasons Your Website Isn't Appearing on Google (And How to Fix Them)",
		paragraphs: [
			"Do you feel that your website invisible on Google, then you are not the only one. Google has indexed an estimated less than 5% of the total internet, with most of the website being unsearchable. If you're either a small business or a start-up looking for visibility, understanding the reasons behind the low rankings is a must.",
			"If your site is not coming up on Google, you lose valuable traffic and could make sales. Thus, an eCommerce SEO company can help you know about the possible reasons behind this problem and assist in solving it.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Or Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	checkList: {
		eyebrow: "Our Custom",
		title: "SEO Approach",
		subtitle: [
			"Every business has its characteristics that set them apart. The same is the case with the SEO practice we conduct for our clients. Your needs and goals would bring our approach into your specific required industry.",
			[
				"With our custom-tailored SEO strategies, we put your business in the limelight, drive relevant traffic, and improve conversion rates. For any SEO service you need, whether ",
				{ text: "local SEO services", href: "/local-seo-services/" },
				" or technical SEO, we have personalized solutions that fit your business needs. From keyword research to technical optimization, we make your website stand out amongst the crowd. With us taking care of all your SEO needs, you can focus on expanding your business.",
			],
		],
		benefitsLeft: [
			{ title: "Website Audit", body: "We analyze the website performance, discover technical issues and present actionable solutions for better ranking." },
			{ title: "Keyword Search and Competitor Analysis", body: "Research high-impact keywords and competitors to design a results-oriented strong SEO strategy that drives targeted traffic." },
			{ title: "On-Page & Technical SEO", body: "Optimize everything from Meta tags to site speed for improving user and search engine experience." },
		],
		benefitsRight: [
			{ title: "Content Strategy & Link Building", body: "High-quality, great copy with authoritative backlinks should be the domain boost." },
			{ title: "Monitoring & Optimization", body: "The end of SEO Process monitoring is a continuation. Tracking performance, analyzing results, and basic modification for long-term benefits are performed." },
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "How to Fix Your Site If It's Not Showing Up on Google:",
		title: "7 Common Reasons",
		steps: [
			{
				title: "Indexing Issues",
				body: "Your website should be indexed if it is to rank on Google. If Google has not indexed certain pages, they will not show up in search results. There are many reasons why it happens, like your website is newly established, and Google has not yet crawled it, the robots.txt is blocking search engines, and tags of noindex are preventing pages from appearing in search results. Here's how our experts fixes the issue:",
				bodyList: [
					"Use the URL Inspection Tool to check if a page is indexed or if there are any crawl errors.",
					"Fix 404 errors, server errors, and incorrect redirects.",
					"Use canonical tags correctly to avoid duplicate content issues.",
				],
				bodyAfter: "As an experienced local SEO service provider, it is important to ensure that Google indexes certain pages that are relevant to local searches.",
			},
			{
				title: "Backlink Profile",
				body: "Backlinks greatly influence how a website gets ranked on Google. Poor or spammy backlink profiles kill websites' chances of ranking. Most times, the low-quality or spammy backlinks originate from untrustworthy websites. Without reliable backlinking, the trustworthiness of the website disintegrates. Also, sudden removal of high-quality backlinks can affect the backlink profile. Here's how we fix it:",
				bodyList: [
					"Use tools like Ahrefs or SEMrush to audit your backlinks.",
					"Use Disavow Links tool in Google Search Console to tell Google to ignore those links.",
					"Build high-quality backlinks through guest posts, industry partnerships, and PR.",
				],
				bodyAfter: "Our experts help brands go for high-authority backlinks from niche blogs and review sites that can increase visibility.",
			},
			{
				title: "Matching Search Intent",
				body: "Users' search intent is what Google takes into account when it doesn't rank content. Here is why it may happen: your content does not completely answer the question asked by the user, the keywords are misused or go against the intent of the searcher, or Google favors the context of another format – a video over a text. Here's how the issue can be fixed:",
				bodyList: [
					"Conduct market analysis to check the top-ranking pages on your targeted keywords.",
					"Make the answers clear and straightforward with user queries.",
					"Make use of structured data to allow Google to understand content relevance.",
				],
				bodyAfter: "It is, therefore, best for businesses to use local SEO services to optimize for local intent because they have the knowledge about the best practices that will deliver favorable results.",
			},
			{
				title: "Content Quality & Relevance",
				body: "Content that Google regards as high quality and relevant is also valuable. The lack of depth or creativity in your content will ensure that your site is not ranked high. It happens due to thin or duplicate content, poor readability and structure of the content, and outdated or valueless information. This issue gets resolved by including experienced and industry-specific writers to:",
				bodyList: [
					"Make relevant, unique, and comprehensive content with proper referencing.",
					"Constantly revise old blog posts and pages.",
					"Use headings and subheadings to structure content to give more focus to keywords.",
				],
				bodyAfter: [
					"Expert copywriters from ",
					{ text: "eCommerce SEO", href: "/ecommerce-seo-services/" },
					" companies can optimize product descriptions with informative, creative, and keyword-rich content that can improve rankings.",
				],
			},
			{
				title: "Mobile User Experience",
				body: "Google uses a policy of indexing websites first on mobile devices, so if your mobile experience is poor, it will affect your ranks. The reasons for poor mobile user experience could be; first, there is no mobile-friendly website; second, slow loading speeds on mobile phones; and third, the unresponsive elements of the design affect usability. Here's how the issue can be resolved:",
				bodyList: [
					"Use Google's mobile-friendly test to find the performance of a site.",
					"Optimize images for lazy loading; enable AMP (Accelerated Mobile Pages).",
					"Ensure text, buttons, and navigation features are easy to read, click, and smooth for mobile devices.",
				],
				bodyAfter: "It is important for a user whether the site is mobile-friendly or not because most of the local searches occur from mobile devices.",
			},
			{
				title: "Google Penalties",
				body: "Google punishes the websites that violate the laws that come into being in lower ranks or, even worse, the exclusion of search results. It happens because of the following of keyword stuffing, duplicate content and cloaking, buying backlinks or just plain black-hat SEO techniques, and security issues like malware or hacking. As a professional eCommerce company, we help recover from Google penalties in legal way, like:",
				bodyList: [
					"Check for penalties through Google Search Console.",
					"Remove the bad SEO practices according to Google Webmaster Guidelines.",
					"Secure your site with HTTPS encryption and a regular security update.",
				],
				bodyAfter: "When product pages and category pages are optimized without keyword stuffing or any black hat SEO practices, then they can perform better on SERPs without any penalties.",
			},
			{
				title: "SEO Strategy & Implementation",
				body: "A poor or outdated SEO strategy can keep your website from getting ranked. Failing to optimize title tags, meta descriptions, or URLs, ignoring local SEO, especially for businesses that are tied to a location, and reckless use of internal linking and lack of structured data can cause this issue. Here's how to fix it:",
				bodyList: [
					"Comprehensive audit of SEO on-page elements and optimization.",
					"Use structured data to enhance visibility in search.",
					"A strong SEO strategy regarding technical SEO, on-page SEO, and off-page SEO.",
				],
				bodyAfter: "Adding NAP (Name, Address, Phone Number) in directories like Google My Business will also help improve local rankings in Local SEO Services.",
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

export default MyWebsiteIsntAppearingOnGoogle;
