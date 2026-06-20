const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

// Common sections shared across all service pages — edit these files to update every page at once.
import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const EcommerceSeoServices = {
	slug: "ecommerce-seo-services",
	pageTitle: "Ecommerce SEO Services | Icecube Digital",
	metaDescription: "Boost your online store's visibility with Icecube Digital's eCommerce SEO services. Drive organic traffic, higher rankings, and more sales.",

	banner: {
		heading: "eCommerce SEO Services",
		paragraphs: [
			"Search Engine Optimization is an essential component of your online marketing strategy, and our seasoned experts are here to ensure that you can make the best out of every opportunity. Icecube Digital's efficient and proven eCommerce SEO services are designed to elevate your online visibility, earn double profits, and enhance your target audience reach.",
			"No two businesses are the same and have different expectations and business goals. Our team of SEO experts customize the strategy to optimize every facet of your eCommerce store. From conducting meticulous research for the right keywords to on-page and off-page optimization, we can assure you we have got everything covered!",
		],
		checklistItems: [],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free eCommerce Store Audit",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/milestone-section.js
	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a  journey through real-world examples of how we transformed challenges  into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative  solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites,  boosting brand visibility through SEO to achieving remarkable ROI with  data-driven PPC campaigns, each Portfolio is a testament to our  unwavering commitment to driving growth.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portoflio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// "Get Your FREE SEO Audit Report Now!" — global section, same contact form as Get a Quote
	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "SEO Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	plainText: {
		eyebrow: "What is",
		title: "Ecommerce SEO?",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "eCommerce SEO optimization refers to using the best practices to fine-tune your website to meet the requirements at the top of search engine results. Also, it ensures you update your website content regularly so the customers are aware of what services/products your brand provides and your target audience finds what they are looking for." },
			{ type: "p", text: "Search engine algorithms are updated in a timely manner, so it is essential to update your website continuously to meet search engine requirements and maintain the top ranks. For example, the site structure should be simple; the webpage loading time should lie between 2-10 seconds; every page of your website should be accessible within a few intuitive clicks, and others." },
			{ type: "p", text: "As an eCommerce website, it is tough to target every keyword, so it is best to conduct keyword research based on four factors: volume, competition, relevancy, and intent. The ultimate keyword would be looking for keywords with high volume but low competition." },
		],
	},

	plainTextSecondary: {
		eyebrow: "Providing Result-Driven",
		title: "SEO Services For eCommerce",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "Most of the traffic to your eCommerce store comes from search engines, and it becomes essential to focus on SEO to rank higher on search engine results. When your eCommerce platform ranks higher, the chances of rate conversion increase significantly. Optimizing the website to rank higher on SEO requires meticulous efforts and a strategy, and you can hire an eCommerce SEO specialist to do the magic work on your behalf." },
			{ type: "p", text: "Icecube Digital experts can happily take the load of optimizing your website from your shoulders so that you can focus on your core business activities. Our experts will brainstorm and engage to create a solid SEO strategy that will draw your target audience towards your brand. Search engine optimization is tricky because search engines rank the most popular, credible, and authentic websites at the top. Our team will conduct an SEO audit, and after analyzing the result, we'll come up with a plan and an implementation strategy to drive organic traffic by ranking your business at the top of search engine results." },
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/achievements-section.js
	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialId: 24,
	},

	topIconBox: {
		eyebrow: "Services Offered By Our eCommerce",
		title: "SEO Experts",
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Implementation",
				body: "Icecube Digital experts have a strategy to implement the keyword in the right places. Content that is filled with keywords at inappropriate places is likely to be not ranked in the SERP. However, with a solid strategy and experience, our experts will distribute the keywords equally in the webpage's content to earn a higher rank.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Product Page Optimization",
				body: "Product pages are important to optimize as they are most likely to rank for very specific search phrases or long-tail keywords. Our team will ensure that each product page has a specific and unique product description which is rich in keywords and perfectly describes the product.",
			},
			{
				icon: "/assets/icons/pc.svg",
				title: "Navigation Optimization",
				body: "Site structure plays a crucial part in allowing the user to navigate easily to their favourite products. Our team will help you develop an easy-to-navigate website, even if you have a wide variety of products. We will ensure every product is categorized into a category and there is a link to each top-level page strategically placed in the menu.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Content Management",
				body: "Content is one of the important aspects of a website, and it helps in connecting with your target audience. Our eCommerce SEO services include content management to ensure your content conveys the brand's message and product description clearly and beautifully to the audience. From interactive and engaging product descriptions to creative and helpful blogs, we can cater to all your needs.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Technical SEO Audit and Repair",
				body: "Before beginning any work, our SEO services for eCommerce websites include a thorough and stringent SEO audit to understand what your website requires. Besides, you can hire our experts for a one-time service, where the team will find the gaps during the audit and repair the technical SEO stuff at an affordable cost.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Conversion Rate Optimization",
				body: "Icecube Digital experts will analyze your campaign's key performance indicators (KPI) to monitor your marketing success. We will conduct search analyzes, in-depth site audits, and A/B split testing that will help to make data-driven recommendations to boost your conversion rates.",
			},
			{
				icon: "/assets/icons/www.svg",
				title: "Keyword Identification",
				body: "We utilize high-tech keyword identification tools and conduct meticulous research to ensure your business has access to keywords with high search volume and possibly low competition.",
			},
		],
	},

	// "SEO Pricing Plans Customized For Your Business Success" — custom pricing box
	tableSeoPlans: {
		eyebrow: "SEO Pricing Plans Customized For Your",
		title: "Business Success",
		subtitle: "We create SEO pricing plans tailored to your business goals, helping you gain more visibility online and grow. Whether you're a small business or a large company, we focus on the right mix of on-page, off-page, and technical SEO to improve your rankings, bring in more visitors, and increase revenue. Let's work together to build an SEO plan that fits your needs!",
		planLabel: "CUSTOM Ecommerce SEO PLANS",
		price: "599",
		period: "Monthly",
		leftTitle: "How We Determine Our SEO Pricing",
		items: [
			{
				icon: "/assets/icons/note-edit-orange.svg",
				title: "Content Marketing Solutions",
				body: "Icecube Digital offers a comprehensive range of content formats, designed to elevate your business with high-quality, SEO-optimized content tailored to any industry. Our dedicated content team ensures impactful and engaging strategies that drive results.",
			},
			{
				icon: "/assets/icons/grid-icon-orange.svg",
				title: "Website Size Considerations",
				body: "Your website's size significantly influences its SEO strategy, including content planning, management, and on-page optimization. Icecube Digital's experts analyze your website's unique requirements to develop a personalized SEO approach that maximizes performance.",
			},
			{
				icon: "/assets/icons/support-icon-orange.svg",
				title: "Consultation Services",
				body: "At Icecube Digital, clients gain access to a team of over 20+ digital marketing specialists, regular consultation calls, and ongoing business reviews, backed by detailed ROI reports. Our WooCommerce SEO experts can also manage complex digital marketing strategies, which you can explore with your dedicated strategist.",
			},
		],
		rightTitle: "Included in All Plans:",
		features: [
			"AI-Driven Strategy Suggestions",
			"Competitor Analysis and Lead Monitoring",
			"Data-Backed Improvement Ideas",
			"Support from a Team of 50+ Digital Experts",
			"Full-Funnel ROI Tracking",
			"Unified Marketing and Sales Data",
			"Complete SEO (On-Page, Off-Page, and Technical)",
			"Track Phone Calls, Leads, and Revenue",
			"Custom Reports and Insights",
			"Local SEO and Google Business Profile Optimization",
		],
		ctaLabel: "Get My Custom Proposal ↗",
		ctaHref: "#",
	},

	plainTextTertiary: {
		eyebrow: "Icecube Digital - Your Partner in Growth and",
		title: "Driving Traffic To Your Website",
		contentAlign: "center",
		blocks: [
			{ type: "p", parts: [
				"We are an industry-leading eCommerce SEO company providing our expertise in Magento, Shopify, WooCommerce, and other eCommerce platforms to create websites that draw in customers. With 14 years of experience in delivering SEO-optimized, user-friendly, and responsive websites, our team focuses on every aspect of ",
				{ text: "eCommerce website development.", href: "#" },
				" Our SEO specialists will work closely with you to understand your needs, analyze your existing website and its structure, and create a strategy that helps to meet your future business goals.",
			]},
			{ type: "p", text: "When you hire Icecube Digital for your website, you can assured that we'll handle all the aspects of optimizing your eCommerce store to rank higher on SERP. From improving the site structure, technical SEO, meta tags, and website loading speed to content management, ensuring it is written as per Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, and Trustworthiness), we can give you everything your website requires to rank higher." },
		],
	},

	checkList: {
		eyebrow: "Benefits of SEO For",
		title: "eCommerce Website",
		subtitle: "Investing in professional eCommerce SEO can guarantee your business a profitable ROI as it:",
		benefitsLeft: [
			"Increases brand awareness as the target audience resonates with your brand",
			"Creates a surge in traffic and sales because the optimized site ranks well and becomes visible to the user",
			"Encourages the customer to engage with your brand and make a sale",
		],
		benefitsRight: [
			"Assists in gaining customer trust as your brand becomes more responsive",
			"Gains a higher rank in SERP, and it directly translates to higher clicks and increased search traffic",
			"Reduces customer abandon rate because your website is quick, user-friendly, and responsive.",
		],
	},

	plainTextQuaternary: {
		eyebrow: "When Does SEO Strategy",
		title: "Bear The Results?",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "It is one of the common questions that is asked by many, and as a reputed and experienced SEO agency for eCommerce, we tell our clients it usually takes 4-6 months for any SEO strategy to work and reflect the results. However, there are circumstances where the time period may change, as the SEO strategy for a brand-new website may take around 12 months to reflect results. In some cases, like with a well-established, may witness the result within 1-2 months. Nonetheless, the results will improve with time." },
		],
	},

	cta: {
		text: "Rank Higher, Sell More – Unlock Your Store's Potential Now!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Ecommerce SEO",
		title: "Services FAQs",
		items: [
			{
				question: "Which eCommerce platform has the best SEO?",
				answer: "Shopify, WooCommerce, and BigCommerce are the top three eCommerce platforms that can make it super easy to implement a holistic SEO strategy. However, most businesses prefer Shopify, as it has a user-friendly interface to create and operate the store. Also, it comes with built-in eCommerce features with unlimited integrations and SEO functionalities.",
			},
			{
				question: "What kind of online stores require an eCommerce SEO consultant?",
				answer: "As per Ice Cube Digital's eCommerce SEO experts, all types of stores require eCommerce specialists that can help them to rank higher on SERP and drive organic results. From furniture to jewelry and beauty, our experts are updated with the latest trends in each industry and optimize the website as per the end-users' and businesses' requirements.",
			},
			{
				question: "What are some tips to increase the SEO to 100%?",
				answer: "As the leading eCommerce SEO company, here are some tips:",
				answerList: [
					"Design and optimize the content with shoppers in mind.",
					"Provide alt text in images to make it convenient for search engine crawlers can easily identify the image.",
					"Allow customers to write reviews as consumers are likely to buy products with reviews, even if they are not positive.",
					"Create new and unique descriptions for your product, as writing duplicate product descriptions may affect rankings and increase the risk of getting a penalty.",
				],
			},
			{
				question: "Does my business require an eCommerce SEO agency?",
				answer: "Most small and medium business owners prefer DIY (do-it-yourself) SEO; however, it would be best to hire an eCommerce specialist. The specialists have hands-on experience in optimizing website content, finding and targeting the right keywords, managing on-page and off-page SEO, and others. Business owners can invest the saved time in focusing on other important business-related tasks. The team will also ensure maintenance and ongoing management of your eCommerce store.",
			},
			{
				question: "How will eCommerce SEO help my business?",
				answer: "Search engine optimization is becoming an integral part of any business's digital marketing strategy, especially eCommerce stores. A solid eCommerce strategy ensures high online visibility that directly creates a surge in organic traffic, conversion rates, revenue, and profit rates.",
			},
		],
	},

	// common section: ./common/our-clients-section.js
	ourClients: ourClientsSection,

	// common section: components/home/GetQuoteSection.js ("Let's Work Together / Get a Free Quote")
	getQuote: true,

	// common section: components/home/WeServeSection.js ("Countries We Serve")
	weServe: true,

	// common section: ./common/ceo-cta-section.js ("CEO CTA section")
	ceoCta: ceoCtaSection,
};

export default EcommerceSeoServices;
