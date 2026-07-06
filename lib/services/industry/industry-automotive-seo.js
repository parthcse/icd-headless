const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const AutomotiveSeoCompany = {
	slug: "automotive-seo-company",
	pageTitle: "Automotive SEO Company | Auto Repair SEO Services",
	metaDescription: "Icecube Digital is a leading automotive SEO agency in the USA. Explore our tailored SEO services for the automotive industry and see why we’re the top choice for auto repair SEO.",

	banner: {
		heading: "Automotive SEO Services",
		paragraphs: [
			"The automotive industry is highly competitive where most customers begin their buying journey online. Customers rely on online search results before visiting the store. They do searches for vehicles, dealerships, services, and repairs. Our Automotive SEO Services help businesses rank higher on Google, increase visibility, and attract customers who are ready to inquire, visit, or purchase.",
			"As an experienced automotive SEO agency, we determine the unique search behavior of automotive customers. Our expertise involves keyword targeting, local SEO, technical optimization, and content strategies created specifically for the automotive market.",
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
		eyebrow: "Automotive SEO",
		title: "Success Stories",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [40947, 40934, 40939],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "SEO Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	plainText: {
		eyebrow: "Drive Your Success with the Leading Automotive",
		title: "SEO Agency",
		contentAlign: "center",
		paragraphs: [
			"Automotive SEO can be a game changer for your business! Thanks to effective SEO methods, potential clients can reach you more easily when your firm ranks at the top of SERP results. You may increase traffic and turn website visitors into devoted clients by optimizing your website with relevant keywords, producing excellent content, and using local SEO services.",
			"At Icecube Digital, we understand the intricacies of the automotive market and have a proven track record of delivering results. Our all-inclusive auto repair SEO services will increase your company’s exposure and attract more clients. We also offer outstanding automobile website design to increase conversion rates and user experience. A well-designed, easy-to-navigate, mobile-friendly, fast-loading automotive website maintains visitors’ interest and motivates them to act.",
			"By doing this, you can be sure that your website will appear higher in top search results, boosting the possibility that customers will choose your business over competitors. Let Icecube Digital help you harness the power of automotive SEO and take your business to new heights.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "brian-rundell",
	},

	imageText: {
		eyebrow: "Dominate Google’s",
		title: "First Page",
		image: "/assets/photos/dominate-google-serp.jpg",
		imageAlt: "",
		paragraphs: [
			"Search engine optimization, or SEO, is a race to the top in the internet world. Ensuring the top spots on the first page of search results can help you leave your rivals behind.",
			"Did you know that the top-ranking Google search results have a 22.4% click-through rate? Your potential clients are probably not discovering you if your dealership isn’t on the top page.",
			"Good automotive SEO positions your automotive dealership first. We will make sure you use the correct keywords and techniques other rivals overlook, therefore assisting you to dominate Google’s first page and grab those worthwhile hits. In this sense, you will get more visitors and turn more leads into devoted consumers.",
		],
	},

	topIconBox: {
		eyebrow: "Comprehensive Automotive SEO Services",
		title: "We Provide",
		subtitles: [
			"Icecube Digital is an expert in providing comprehensive automotive SEO services, ensuring the automotive business ranks higher on search engines and stays ahead of competitors. Our automotive SEO services are customized to meet the needs of car dealerships, auto repair shops, automotive manufacturers, spare parts sellers, and online auto stores.",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Automotive Keyword Research",
				body: "We conduct in-depth keyword research based on user search trends for vehicles, services, repairs, and auto parts online. Our team maps keywords to match each stage of the funnel. This helps in displaying the website when users are researching, comparing, or ready to take action.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Content Optimization & Authority Building",
				body: "Our experienced automotive SEO experts optimize the content to provide clear insights to buyers. We ensure clear content for model comparisons, service explanations, maintenance guides, FAQs, and ownership advice. This helps users to make informed decisions and improve website authority.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Link Building & Authority Growth",
				body: "A highly authoritative website is regarded as credible by search engines. Our link-building tactics focus on high-quality backlinks in automotive blogs, industry publications, news portals, and niche directories. This assists in enhancing domain authority, keyword ranking, and brand positioning.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "On-Page SEO Optimization",
				body: "Our automotive SEO experts optimize website structure to improve ranking and search visibility. We help automotive businesses by boosting the visibility of vehicle listings, service pages, category pages, meta tags, headers, URLs, internal linking, and schema markup. This helps search engines to understand the website and display your pages to the relevant audience.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Technical SEO",
				body: "Our automotive SEO consultant provides technical SEO services to improve the website performance across various platforms. We also fix crawl errors, broken links, duplicate content, and indexing errors to improve page speed, mobile responsiveness, site architecture, and crawlability.",
			},
			{
				icon: "/assets/icons/www.svg",
				title: "Local SEO",
				body: "Local SEO allows automotive companies to be optimized for local search in situations where searchers seek local dealerships, workshops, or service centers. Our SEO experts optimize the Google Business Profiles, handle local citations, develop location-based pages, and enhance customer reviews to attract more traffic.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO Tracking, Reporting & Continuous Optimization",
				body: "Our automotive SEO experts track the performance of the websites through various analytics software. Based on that, we generate reports that monitor the ranking of keywords, organic traffic, conversions, the well-being of technical aspects, and indicators of user activity. Such reports will assist our SEO experts in improving the strategy to achieve scalable growth.",
			},
			{
				icon: "/assets/icons/voice.svg",
				title: "Voice Search Optimization",
				body: "Enhance your automobile brand’s presence in voice search to connect with consumers using smart speakers, smartphones, and other voice-activated devices. By optimizing for conversational queries and natural language, your products become easily discoverable, improving customer engagement, driving traffic, and increasing the likelihood of conversions as users can quickly find the vehicles or services they need.",
			},
			{
				icon: "/assets/icons/companies.svg",
				title: "Franchise SEO",
				body: "Create tailored SEO strategies for automotive franchises to boost online visibility across multiple locations. By optimizing each branch for local search, you ensure higher rankings in their respective areas, attract more targeted traffic, and drive increased customer engagement, ultimately helping every franchise location capture more leads and generate greater business opportunities.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "E-commerce SEO",
				body: "Enhance your automotive e-commerce platform to improve search engine rankings, attract highly targeted traffic, and increase online sales of vehicle parts, accessories, and services. By optimizing product pages, site structure, and content, you can drive more qualified visitors, boost conversions, and grow revenue through a seamless, search-friendly online shopping experience.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Conversion Rate Optimization",
				body: "The success of SEO is measured based on leads, not just rankings. We optimize CTAs, inquiry forms, filters, navigation, and booking or checkout flows. We help manage test drive requests, service appointments, quote inquiries, and completed purchases by improving user experience and page layouts.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Benefits of Our Automotive",
		title: "SEO Services",
		subtitles: [
			"In the high-octane world of automotive sales, a robust online presence is no longer a luxury, it’s the engine that drives conversions. Icecube Digital’s SEO services offer a strategic approach to attracting, engaging, and converting high-value leads, propelling your business to the forefront of online searches.",
			"Here’s how our easy-to-understand SEO can benefit you:",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/wallet.svg",
				title: "Reduced Dependency on Paid Marketing",
				body: "Most of the automotive business relies on paid ads, which restricts results once the budget runs out. Our SEO strategies help in building a strong foundation for businesses to generate organic traffic and leads over time. This helps boost overall ROI and website visibility organically.",
			},
			{
				icon: "/assets/icons/rocket.svg",
				title: "Scalable Growth Across Locations",
				body: "Whether you own a single dealership store or multiple stores, our SEO strategies help you to scale and expand easily. We create achievable strategies that help you to build visibility across diverse locations, add new services, or promote new vehicle models without rebuilding your SEO strategy.",
			},
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Long-term Competitive Advantage",
				body: "Effective SEO practices assist the automotive companies in ranking better and enhance website authority in the long term. Our custom SEO services help in gaining a competitive edge through sustainable strategies, which include authoritative content, technical optimization, and local search dominance.",
			},
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Faster Decision-Making for Customers",
				body: "We provide user-centric SEO services for the automotive industry that help potential customers find the necessary details about pricing, features, comparisons, and availability. This helps them in decision-making and boosting conversion ratios.",
			},
			{
				icon: "/assets/icons/mobile.svg",
				title: "Mobile Optimization",
				body: "Most automotive searches are done through mobile devices. Our SEO experts optimize automotive websites and local search results for mobile-first indexing and near-me search results. This helps in reaching a specific customer segment who are ready to visit the showroom or book a service.",
			},
		],
	},

	tableBasic: {
		eyebrow: "SEO",
		title: "Pricing Plans",
		subtitle: "We understand that automotive businesses vary in size, competition, and goals. That’s why our SEO pricing plans are flexible and designed to scale with your growth.",
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

	processSteps: {
		eyebrow: "Process for Automotive Website",
		title: "SEO Services",
		columns: 2,
		steps: [
			{
				title: "Discovery & SEO Audit",
				body: "We begin with a comprehensive audit of your automotive website, competitors, and online performance. This helps determine technical gaps, keyword opportunities, and growth potential.",
			},
			{
				title: "Strategy & Keyword Mapping",
				body: "Based on audit reports, we build custom automotive SEO strategies. We then map the keywords to vehicle listings, service pages, category pages, or location-based services.",
			},
			{
				title: "Optimization and Implementation",
				body: "We implement on-page, technical, and content optimization to increase visibility, usability, and conversion potential throughout your website.",
			},
			{
				title: "Monitoring, Refinement and Growth",
				body: "Our experts monitor the performance, improve strategies, and create reports to determine growth and improvement opportunities.",
			},
		],
	},

	infoBox: {
		eyebrow: "Why Choose Icecube Digital As Your Automotive",
		title: "SEO Company?",
		subtitle: "Selecting the ideal partner for your automotive SEO services can significantly impact your company’s success. Here’s why Icecube Digital is the leading automotive SEO agency in the USA:",
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				title: "Experienced Automotive SEO Specialists",
				body: "Our SEO professionals working on your project are experienced in automotive businesses. This guarantees detailed insight into dealership arrangements, service-based searches, and automotive purchaser purpose, leading to more precise and efficient optimization.",
			},
			{
				title: "Custom Strategy",
				body: "We do not apply generic SEO strategies. Each automotive company possesses diverse inventory, service orientation, and customer base. We build our strategies based on specific business objectives and market dynamics.",
			},
			{
				title: "SEO for Sales Funnel",
				body: "Our search engine strategy covers all phases of the automotive purchasing process, including research, comparison, and action. We make sure your website helps generate leads, test drives, booked services, and queries in a natural way.",
			},
			{
				title: "Search-Friendly Website Structure",
				body: "We streamline the website structure so that search engines and users can navigate vehicle listings, services, and location pages easily. This enables better indexing and improves user experience.",
			},
			{
				title: "Ethical SEO-Compliant to Google",
				body: "We build SEO strategies that comply with Google guidelines. Our automotive SEO specialists do not take shortcuts or use dangerous tricks to keep your website secure and establish a stable and trustworthy search presence.",
			},
			{
				title: "Continuous Adaptation to Search Updates",
				body: "Search engines and buyer behavior are dynamically changing. Our SEO team stays active with such advancements and updates strategies in advance to ensure your automotive website is compliant, competitive, and visible in changing search conditions.",
			},
		],
	},

	cta: {
		text: "Make Your Business Global With Icecube Digital’s Automotive SEO Services",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Automotive SEO",
		title: "FAQs",
		items: [
			{
				question: "What are the automotive SEO services?",
				answer: "Automotive SEO helps to optimize the websites of car dealerships, auto service stations, and auto brands. This also enhances search engine results, website popularity, and traffic.",
			},
			{
				question: "Do you provide local SEO services to car dealerships and service centers?",
				answer: "Yes. We optimize Google Business Profiles, local citations, location pages, and reviews in order to enable automotive businesses to appear higher in the search and Google Maps ranking.",
			},
			{
				question: "What is better, paid advertising or automotive SEO?",
				answer: "The combination of SEO and paid ads is most effective. SEO is more cost-effective in the long term, and paid ads achieve instant visibility. SEO would also provide leads after the termination of ad budgets.",
			},
			{
				question: "Will SEO contribute to the sales and service leads of cars?",
				answer: "Yes. SEO provides qualified traffic through buyer-intent keywords and landing page optimization. This results in test-drive bookings, service appointments, and sales inquiries.",
			},
			{
				question: "Are you offering content as an Automotive SEO service?",
				answer: "Yes. We include SEO-optimized blogs, service pages, and site content that attracts traffic, provides answers to questions of customers, and develops trust and authority.",
			},
			{
				question: "What is the measure of automotive SEO success?",
				answer: "We monitor the rankings of the keywords, organic traffic, lead generation, conversions, and local visibility. Clear reports indicate your business development through SEO.",
			},
			{
				question: "Will Automotive SEO work with small or local businesses?",
				answer: "Absolutely. Local and small automotive enterprises can find SEO helpful, as it allows targeting customers nearby and competing with big brands.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default AutomotiveSeoCompany;
