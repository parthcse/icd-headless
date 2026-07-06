const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const RealEstateSeo = {
	slug: "real-estate-seo-services",
	pageTitle: "Real Estate Search Engine Optimization Company | Real Estate SEO Services By Expert",
	metaDescription: "Are you searching for a real estate SEO agency in the USA? Our experts specialize in SEO for real estate agents and offer marketing solutions. Get a free consultation!",

	banner: {
		heading: "Real Estate SEO Company",
		paragraphs: [
			"A robust online presence is vital for success in the real estate industry. SEO services are essential for ensuring that buyers and sellers notice your properties. At Icecube Digital, we offer an array of real estate SEO solutions to increase your website’s visibility on search engines, attract qualified leads, and drive more sales.",
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
		postIds: [56510, 56548, 56508],
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
		eyebrow: "Why Real Estate Search Engine Optimization",
		title: "Is Important?",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "The great majority of home buyers kick off their hunt through the internet. Real estate search engine optimization (SEO) implies that your site appears among the top results pages (SERPs) whenever potential clients look for houses within your locality. By optimizing your website using relevant keywords as well as implementing effective strategies on SEO, you can;",
					},
					{
						type: "ul",
						items: [
							{
								title: "Increase Organic Traffic:",
								text: "Attract more visitors actively looking forward to buying or selling homes.",
							},
							{
								title: "Generate More Leads:",
								text: "Capture leads via contact forms, property inquiries, and calls from your website.",
							},
							{
								title: "Enhance Brand Visibility:",
								text: "Establish yourself as a trusted authority in your local market.",
							},
							{
								title: "Gain A Competitive Edge:",
								text: "Outshine competitors in search results, attracting more prospective customers.",
							},
							{
								title: "Maximize your Return on Investment:",
								text: "Get a higher ROI than any traditional marketing strategy.",
							},
						],
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
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "williams",
	},

	topIconBox: {
		eyebrow: "Our Comprehensive Real Estate",
		title: "SEO Services",
		subtitles: [
			"At Icecube Digital, we provide a full range of real estate SEO services aimed at meeting the specific needs of businesses as follows:",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research and Analysis",
				body: "We discover the most relevant and valuable keywords for potential clients looking for homes in your area.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "On-Page Optimization",
				body: "We improve relevance and search engine rankings by optimizing website content, meta tags, headings, and image alt text.",
			},
			{
				icon: "/assets/icons/www.svg",
				title: "Local SEO",
				body: "We ensure accurate and consistent listings on Google My Business and other local directories.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Marketing",
				body: "It involves creating engaging, informative blog posts, among other things, such as property listings. Link Building consists of building high-quality backlinks from authoritative sources to improve domain authority and enhance search rankings.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Competitor Analysis",
				body: "Through this service, we analyze your competitors’ strategies in terms of their performance so far compared to ours, thus enabling us to identify areas where we can capitalize more while also enhancing our competitiveness.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Performance Tracking and Reporting",
				body: "We provide regular reports on your website’s optimization performance based on keyword rankings, organic traffic, and lead generation.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO",
				body: "We deal with technical issues affecting visibility within search results pages (SERPs).",
			},
		],
	},

	infoBox: {
		eyebrow: "How to Achieve Success in Local",
		title: "Real Estate SEO",
		subtitle: "Real estate SEO depends on local SEO since it ensures that your business frequently appears on the search results pages whenever a potential customer searches for properties real estate services around where they are located. Here is what we do to ensure you succeed in local search:",
		columns: 2,
		items: [
			{
				title: "Google My Business Optimization",
				body: "We claim and optimize your Google My Business listing by providing accurate information about your business—name, address, phone number, website URL, business hours, and categories. We also enhance this listing with high-quality images and virtual tours, among other things, which can help attract more clients.",
			},
			{
				title: "Local Citations & Directory Listings",
				body: "What we do under this category is build consistent citations and listings across various relevant online directories/platforms like Yelp Yellow Pages industry-specific real estate directory sites, etcetera; doing so improves local visibility on searches while at the same time building trust with search engines bots and potential customers.",
			},
			{
				title: "Localized Content Creation",
				body: "As part of our strategy towards achieving success in local SEO for real estate agents agencies or any other professional involved in this area, we create content based on specific areas within your locality, e.g., neighborhood guide(s) market report(s) or even community events update(s). This brings local traffic and shows how much you know about selling homes locally.",
			},
			{
				title: "Location-Based Keyword Targeting",
				body: "We optimize the content of your website and meta tags with keywords specific to places clients search for property. This guarantees one’s website comes up on relevant local searches.",
			},
			{
				title: "Online Reviews and Reputation Management",
				body: "We keep track of and address all reviews posted about you online, both positive and negative. Responding to feedback promptly and professionally. It also increases credibility through positive reviews that influence potential clients’ decisions.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Optimize Your Website from Real Estate",
		title: "SEO Experts",
		subtitles: [
			"Apart from our real estate SEO services, we also have professional real estate website design services that are optimized for search engines. Our visually attractive designs convert visitors into leads since they are user-friendly websites that can be easily navigated through. Some of these service include:",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Responsive Design",
				body: "We optimize your web page so that all devices, such as laptops, desktops, tablets, and smartphones, can comfortably access it.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Forms to Capture Leads",
				body: "Lead capture forms are placed at strategic points on your site to collect contact details from prospects who visit the site.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "IDX Integration",
				body: "Internet Data Exchange (IDX) listings are integrated with real-time property data displayed on this platform, which we created for you.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Virtual Tours plus High-Quality Images",
				body: "This shows off various properties available for sale or rent using virtual tours and showcases your properties in the best possible light, high-resolution images.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Navigation That Is Friendly To Search Engines",
				body: "We create website navigation that is clear, intuitive, and easy for users and search engines to follow.",
			},
		],
	},

	cta: {
		text: "Don’t let your competitors outshine you - Sign up for our Real Estate SEO services today!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Real Estate SEO Marketing",
		title: "FAQs",
		items: [
			{
				question: "How long does it take to see results from real estate SEO?",
				answer: "SEO is an ongoing process, and the time it takes to see results can vary depending on your market’s competitiveness and where your site currently stands in terms of SEO. However, with consistent efforts toward good optimization, you should start seeing significant improvements within several months.",
			},
			{
				question: "How much do real estate SEO services cost?",
				answer: "The price for real estate SEO service depends on the work required by your business and its specific needs. We have customized packages designed around different budgets, so feel free to contact us for more information or, even better, to request a consultation!",
			},
			{
				question: "What are the main factors that affect the SEO of a real estate website?",
				answer: "When considering what can make your real estate listings rank well in search engines like Google or Bing, there are many things to consider. Here are a few points:",
				answerList: [
					[{ bold: "Keyword research and optimization:" }, " It is essential to find out which keywords people use while looking for properties for sale or rent in a particular area and use them appropriately within their site’s content."],
					[{ bold: "Local search engine optimization (SEO):" }, " This involves optimizing your web pages with localized phrases such as city names, neighborhood names etc., which help search engines understand where you’re located geographically, thus showing appropriate results only when needed."],
					[{ bold: "Content marketing:" }, " Regularly creating unique, valuable articles targeting specific needs will drive more organic traffic from long-tail keywords over time."],
					[{ bold: "Link building:" }, " Getting quality backlinks from related authoritative websites pointing towards yours tells Google that other people trust what you’ve got there, significantly improving overall rankings. However, it should be done naturally without spamming links all over the internet; otherwise, it may be penalized heavily, leading to a drop in rankings instead."],
					[{ bold: "Technical SEO:" }, " Making sure everything works smoothly behind the scenes, like proper website architecture and meta tags being used correctly throughout every page, among other things, because this helps bots easily crawl and index contents faster and display them higher up on SERPs."],
				],
			},
			{
				question: "Can I do SEO for my real estate website myself?",
				answer: "While there are some basic techniques that one could implement when doing search engine optimization work on their site, most people find hiring professional help highly recommended, especially if they want the best possible outcome quickly, such as our SEO Expert. Who knows what’s needed—we’ve got experience, knowledge, and resources!",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default RealEstateSeo;
