const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const JewelrySeoServices = {
	slug: "jewelry-seo-services",
	pageTitle: "Jewelry SEO Services | Expert Jewelry SEO Agency",
	metaDescription: "Our jewelry SEO services help online jewelers rank higher on Google, attract high-intent buyers, and grow revenue. Get our SEO services to boost sales now!",

	banner: {
		heading: "Jewelry SEO Services to Rank Your Brand Among Google’s Top Search Results",
		paragraphs: [
			"Get advanced jewellery SEO services to stand out from the competitive market landscape. Our team helps improve ranking on Google based on user search queries. By optimizing the website for relevant keywords, improving performance, and enhancing content quality, we aim to attract the right audience and multiply the conversion ratio.",
			"As an expert jewelry SEO company, Icecube Digital provides custom SEO strategies to fulfill the specific needs of jewelry businesses. From optimizing product pages and creating content that highlights craftsmanship to improve website speed with mobile responsiveness, we use a custom approach to improve online presence.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [44876, 40913, 40835],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	imageTextBlocks: [
		{
			eyebrow: "Jewelry SEO Services",
			title: "We Provide",
			subtitle: "Our jewelry SEO services are designed to fit the requirements of jewelry brands, jewelry manufacturers, jewelry designers, and online stores. This helps them to achieve better search optimization, attract the right visitors, and increase online sales.",
			contentTitle: "On-Page SEO Optimization",
			image: "/assets/photos/jewelry-on-page-seo.svg",
			imageAlt: "On-page SEO optimization for a jewelry product page with title tag, meta description and SEO-friendly URL",
			paragraphs: [
				"We refine your website structure to improve visibility and Google rankings. Our team optimizes product titles, descriptions, category pages, meta tags, headers, URLs, and internal links so search engines clearly understand your content pages and index your pages correctly.",
			],
		},
		{
			contentTitle: "Technical SEO",
			image: "/assets/photos/jewelry-technical-seo.svg",
			imageAlt: "Technical SEO for a jewelry website showing page speed, product structured data and mobile responsiveness",
			imagePosition: "right",
			paragraphs: [
				"Technical SEO assists in offering seamless web functioning across platforms. Our SEO specialists correct crawl errors, broken links and add product, price, and review structured data. This assists in enhancing page speed, mobile responsiveness, web architecture, and search engine indexing.",
			],
		},
		{
			contentTitle: "Local SEO",
			image: "/assets/photos/jewelry-local-seo.svg",
			imageAlt: "Local SEO for a jewelry store with an optimized Google Business Profile, map listing and customer reviews",
			paragraphs: [
				"Our local SEO helps jewelry businesses to feature in local search engines when clients are searching for local jewelers. We optimize Google Business Profile, maintain local listings, establish location-based pages, and enhance customer reviews to guarantee local presence, in-store visits, and phone calls.",
			],
		},
		{
			contentTitle: "Jewelry Keyword Research",
			image: "/assets/photos/jewelry-keyword-research.svg",
			imageAlt: "Jewelry keyword research showing search volume, keyword difficulty and search trend analysis",
			imagePosition: "right",
			paragraphs: [
				"Our professionals conduct targeted keyword research in accordance with how our clients search for jewelry on the internet. With a practical SEO background, we go through the competitor rankings to identify growth opportunities by drawing in visitors who are more likely to convert.",
			],
		},
		{
			contentTitle: "Product & Content Optimization",
			image: "/assets/photos/jewelry-product-content-optimization.svg",
			imageAlt: "Jewelry product and content optimization with unique keyword-rich descriptions and a diamond buying guide",
			paragraphs: [
				"Well-optimized content builds trust and answers user queries. Our jewelry SEO specialists optimize and create content to highlight craftsmanship and brand value by writing unique product descriptions, informative buying guides, blog articles, and collection pages.",
			],
		},
		{
			contentTitle: "Link Building & Authority Growth",
			image: "/assets/photos/jewelry-link-building.svg",
			imageAlt: "Jewelry SEO link building and domain authority growth from high-quality referring websites",
			imagePosition: "right",
			paragraphs: [
				"We are an experienced team of SEO experts with expertise in building high-quality backlinks from trusted and relevant websites within the jewelry, fashion, and lifestyle industries. These links help in improving the website authority and help search engines consider the brand as credible and reliable.",
			],
		},
		{
			contentTitle: "Conversion Rate Optimization",
			image: "/assets/photos/jewelry-conversion-rate-optimization.svg",
			imageAlt: "Conversion rate optimization for a jewelry store showing an improved sales funnel and product page",
			paragraphs: [
				"Conversion rate optimization indicates turning visitors into customers. Our SEO specialists improve product page layouts, navigation flow, calls to action, and checkout experience to increase sales and optimize the page layouts and categorization.",
			],
		},
		{
			contentTitle: "SEO Tracking, Reporting & Continuous Optimization",
			image: "/assets/photos/jewelry-seo-tracking-reporting.svg",
			imageAlt: "Jewelry SEO tracking and reporting dashboard with organic traffic growth and keyword rankings",
			imagePosition: "right",
			paragraphs: [
				"We track the website’s SEO performance using advanced tools. Our reports include keyword rankings, traffic growth, conversions, and technical health updates. Based on specific data insights, we restructure and optimize strategies to enable measurable growth.",
			],
		},
	],

	getQuote: true,

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	infoBox: {
		eyebrow: "Benefits of Our Jewelry",
		title: "SEO Services",
		subtitle: "We don’t do “template-based” designs. And, never take the “One Package suits All” approach. Instead, we first take the time to understand your specific business requirements and then create a unique custom jewelry ecommerce website design that matches your brand and needs perfectly.",
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				title: "Proven Jewelry SEO Expertise",
				body: "We are an experienced SEO agency with hands-on experience to optimize jewelry websites and online stores. Our team determines the unique challenges of the jewelry industry and delivers consistent results.",
			},
			{
				title: "Increased Qualified Traffic",
				body: "Our SEO specialists are experienced in search intent analysis that helps in attracting the right audience. We ensure increased inquiries, engagement ratio, and overall sales by targeting high-intent and buyer-focused keywords.",
			},
			{
				title: "Sales-Driven SEO Approach",
				body: "We align SEO efforts with specific business goals to attract a potential audience. We assist jewelry brands in creating qualified leads without relying on paid advertising through product page optimization, collection optimization, and conversion path optimization.",
			},
			{
				title: "Cost-Effective & Scalable Marketing",
				body: "SEO is the long-term aspect and one of the most cost-effective digital marketing approaches. As a full-proof agency, we focus on building long-term strategies that continue to deliver results over time for both growing and established jewelry brands.",
			},
			{
				title: "Stronger Brand Authority & Trust",
				body: "Constant top ranking gives credibility and trust. We place your jewelry brand as a trusted brand in the competitive market with the help of strategic content, authoritative backlinks, and technical excellence.",
			},
			{
				title: "Refined User Experience & Technical Excellence",
				body: "We enhance technical performance, cell phone usability, web architecture, and navigation to give a user-friendly shopping experience. This assists in ensuring a smooth online experience, which increases interaction and leads to increased conversion.",
			},
		],
	},

	tableBasic: {
		eyebrow: "Jewelry SEO",
		title: "Pricing Plan",
		subtitle: "We are an experienced SEO agency and understand that each company has its own objectives, level of competition, and growth periods. That is why we offer an efficient pricing framework that suits the interests of each jewelry company.",
		columns: ["Starter SEO", "Growth SEO", "Premium SEO", "Enterprise SEO"],
		colWidths: ["25%", "25%", "25%", "25%"],
		boldColumns: [],
		rows: [
			["SEO-ready foundation", "Advanced keyword strategy", "High-intent dominance", "Bespoke SEO strategy"],
			["Core keyword targeting", "Authority-building focus", "Luxury market positioning", "Enterprise-level scalability"],
			["Clean site structure", "Content-led optimization", "Conversion-driven optimization", "Advanced technical SEO"],
			["Essential performance tracking", "Scalable traffic growth", "Brand authority growth", "Dedicated expert support"],
		],
		ctaLabel: "Explore Our Pricing Structure",
		ctaHref: "/seo-packages/",
		btnArrow: BTN_ARROW,
	},

	cta: {
		text: "Want to captivate your audience with a website as unique as your jewelry?",
		ctaLabel: "Contact Us Today for a Free Quote!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "Our Process for Jewelry Website",
		title: "SEO Services",
		columns: 2,
		steps: [
			{
				title: "Discovery & SEO Audit",
				body: "We start with an in-depth examination of your jewelry website, market positioning, and competitors. This includes an in-depth audit of SEO, a review of keyword opportunities, and a technical analysis of gaps and growth opportunities.",
			},
			{
				title: "Strategy & Keyword Mapping",
				body: "We develop a tailored SEO plan to map high-intent jewelry keywords according to the audit report. We map the keywords according to product, category, and content pages to fit into the target segment.",
			},
			{
				title: "Optimization and Implementation",
				body: "We maximize on-page website architecture, content, and technical performance. This action ensures the website is search-friendly, user-centric, and better placed to generate higher conversions.",
			},
			{
				title: "Monitoring, Refinement and Growth",
				body: "We constantly monitor performance, optimize strategies, and restructure strategies. Frequent reporting keeps you posted with consistent and long-term growth.",
			},
		],
	},

	infoBoxSecondary: {
		eyebrow: "Why Choose Icecube Digital for Jewelry",
		title: "SEO Services",
		subtitle: "At Icecube Digital, we combine deep jewelry-industry knowledge with proven, white-hat SEO strategies to help your brand rank higher and attract high-intent buyers. From fine jewelry to everyday collections, every campaign is tailored to your products, your audience, and your growth goals — here's what sets us apart.",
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				title: "Transparent Reporting",
				body: "We create clear reports, in-depth insights, and long-term SEO strategies specific to the jewelry business with our expertise in SEO approaches. Our sustainable SEO strategies help jewelry brands to improve authority, visibility, and sales pipeline.",
			},
			{
				title: "Comprehensive Market Understanding",
				body: "Our team stays updated with the buyer search trends based on gemstone education, metal types, certifications, occasion-based buying, and luxury branding. This helps in providing achievable SEO strategies and approaches.",
			},
			{
				title: "Result-driven Approach",
				body: "We create result-oriented strategies by ensuring long-tail keyword targeting, category-level optimization, product schema, local SEO optimization, and rich snippet eligibility. This helps in boosting region-specific visibility, click rates, and qualified traffic.",
			},
			{
				title: "ROI-Focused Approach",
				body: "Our jewelry experts monitor the organic performance, revenue, and keyword fluctuation based on specific intent and conversion ratio. We create optimization strategies based on thorough analysis to enable measurable growth and increased ROI.",
			},
			{
				title: "Futuristic SEO for AI & Voice Search",
				body: "Our experienced SEO team helps you to create content that helps in improving results on AI platforms, featured snippets, and voice search queries. We ensure this by structuring user-friendly FAQs and a blend of keywords and structured data to enable consistent brand visibility.",
			},
			{
				title: "Expertise in Visual & Image SEO",
				body: "Jewelry purchases are highly influenced by visuals and design images. We optimize images to a high resolution, adding ALT text, file format, and image sitemaps. This helps your product image rank in Google Image and visual search, which helps in attracting users.",
			},
		],
	},

	ctaSecondary: {
		text: "Beautifully Designed. Expertly Developed. Let’s Build Your Dream Jewelry Store!",
		ctaLabel: "Contact Us Today for a Free Quote!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Jewelry SEO",
		title: "FAQs",
		items: [
			{
				question: "Why is SEO important for jewelry websites?",
				answer: "The jewelry market is very competitive, and the majority of buyers initiate their search online. SEO can make your brand visible in the search engines at the appropriate time and enhance visibility, trust, and qualified traffic that leads to sales and inquiries.",
			},
			{
				question: "What is the difference between jewelry SEO and normal SEO?",
				answer: "Jewelry SEO is associated with high-intent keywords, luxury positioning, product-strong content, and trust statements. It also entails proper image optimization and organized data on products and strategies of seasonality and buyer behavior that are specific to the jewelry industry.",
			},
			{
				question: "Will SEO promote the sale of jewelry?",
				answer: "Yes. Our search engine optimization is targeted at contacting buyers with high purchasing intentions. Maximization of product pages, collections, user experience, inquiries, add-to-carts, and final purchase will be achieved through SEO.",
			},
			{
				question: "What is the success measure of jewelry SEO?",
				answer: "We track the position of the keywords, organic traffic, conversions, questions, and the technical performance. We also offer periodical reports, which give a clear picture of the role of SEO in developing a business.",
			},
			{
				question: "Do you offer custom SEO services to jewelry brands?",
				answer: "Yes. Every jewelry brand is unique. Our tailored SEO programs are being developed in relation to products, target market, competition level, and business goals.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default JewelrySeoServices;
