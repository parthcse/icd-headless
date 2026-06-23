const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const MagentoSeoService = {
	slug: "magento-seo-services",
	pageTitle: "Magento SEO Services | Icecube Digital",
	metaDescription: "Boost your Magento store's organic traffic with Icecube Digital's expert Magento SEO services. Technical SEO, on-page optimization, content strategy, and more.",

	banner: {
		heading: "Magento SEO Services",
		paragraphs: [
			"Magento is the best eCommerce platform in the market in terms of performance and features it offers but if your website is not well optimized for SEO, you could be losing a huge amount of potential traffic and sales. Optimizing your Magento website for SEO might be the best business decision to grow organic sales from search engines.",
			"We are a leading Magento 2 SEO company with lots of experience in helping Magento ecommerce store owners to achieve their digital growth goals. We really understand that when it comes to selling magento online store, having a solid digital marketing & SEO strategy is vital. All Magento stores are different. Therefore, we will draw upon our SEO expertise to create a bespoke SEO strategy based on your industry and business goals.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Your Free AI SEO Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "SEO Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	plainText: {
		eyebrow: "Result Driven Magento",
		title: "SEO Company",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "Magento is one of the best available options for eCommerce as it offers a flexible platform capable of several functions in addition to numerous features suitable to eCommerce." },
			{ type: "p", text: "It comes with advanced SEO features including URL structure, sitemaps, tags, meta-implementation options, and more. Another advantage of Magento for eCommerce is that it also includes analytics that helps in tracking site visitors. The need is to use these features to your best advantage which is what a Magento SEO expert can help you with and turn your site search-engine friendly." },
			{ type: "p", text: "Ecommerce businesses looking for a customized but easy and convenient solution for their website should take the help of Magento SEO optimization services as they can help you create a site that is not only customer-friendly but is also helpful for a high conversion rate." },
			{ type: "p", text: "The platform is free for businesses. But then how can you create a competitive edge and drive high-quality traffic to your website? Unleash the power of Magento's open-source platform with the right SEO practices. An experienced Magento SEO agency can turn the platform into a shopping site customized to your business." },
			{ type: "p", text: "The right SEO strategies for Magento can help you to take your eCommerce business to a new level without having to incur heavy ad expenses." },
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialId: 24,
	},

	faq: {
		eyebrow: "Top Magento SEO Challenges Icecube Digital Can",
		title: "Handle For You",
		subtitle: "Has your website got jammed in terms of ever-evolving SEO? In the world of SEO puzzles, we at Icecube Digital, the best SEO agency for Magento, act as a game changer. We make every piece of the SEO puzzle come together perfectly, giving you a crystal clear picture.",
		items: [
			{
				question: "After migrating my website, I have experienced a decline in website traffic and sales.",
				answer: "If you are witnessing a fall in your website's traffic and sales growth after migrating, then website migration could be a shakeup for search engines. Icecube Digital ensures to take the best turn on the website migration without losing traffic while leveraging the expertise of our Magento SEO optimization.",
				answerList: [
					"Make your page stay relevant and carry the most authoritative content.",
					"Gain insights and drive more organic traffic to your website.",
					"Map the analytical reports to stay updated for all Google updates.",
				],
			},
			{
				question: "We require assistance with the technical SEO setup to ensure steady growth.",
				answer: "Technical SEO is the backbone of your website's visibility. Icecube Digital's Magento SEO experts conduct a comprehensive technical audit covering site speed, XML sitemaps, robots.txt, structured data, and mobile optimization. We implement precise technical fixes to ensure your Magento store is fully search-engine-ready and positioned for steady organic growth.",
			},
			{
				question: "We need comprehensive SEO services to support our Magento migration.",
				answer: "Migrating your Magento store requires careful SEO planning to maintain your rankings. We create redirect maps, preserve link equity, optimize your new site structure, and ensure seamless continuity in your search engine presence. Our team monitors performance post-migration to address any drops quickly and effectively.",
			},
			{
				question: "We need a solid approach to boost organic sales and elevate our website to the next level.",
				answer: "Icecube Digital develops a data-driven SEO strategy tailored to your Magento store's goals. From advanced keyword research and on-page optimization to content marketing and link building, we implement a holistic approach that drives qualified organic traffic, improves conversion rates, and elevates your website to the top of search engine results.",
			},
			{
				question: "My Magento website is not receiving sufficient traffic.",
				answer: "Low traffic often points to gaps in keyword targeting, on-page SEO, or link building. Our Magento SEO team conducts a thorough site audit to identify and fix these gaps. Through targeted keyword strategies, content optimization, and off-page SEO, we drive meaningful organic traffic growth to your Magento store.",
			},
			{
				question: "My Magento website is not generating enough leads.",
				answer: "Traffic without conversions is a common challenge. We optimize your Magento store's landing pages, calls-to-action, and user experience to turn visitors into leads. Combined with targeted SEO strategies that attract high-intent users, our approach ensures your store generates more qualified leads and increases revenue.",
			},
			{
				question: "My Magento ecommerce site was penalized following Google's core update.",
				answer: "Google algorithm penalties can be devastating but recoverable. Our team analyzes your site against Google's quality guidelines, identifies the issues that triggered the penalty, and implements a structured recovery plan. We focus on content quality, E-E-A-T compliance, and technical improvements to restore and improve your rankings.",
			},
			{
				question: "We are a Fortune 500 company seeking a Magento SEO agency capable of handling everything from Magento maintenance to SEO.",
				answer: "Icecube Digital is equipped to handle enterprise-level Magento projects. Our team provides end-to-end solutions including Magento maintenance, security updates, performance optimization, and comprehensive SEO services. We understand the scale and complexity of large eCommerce operations and deliver tailored strategies that meet your business goals.",
			},
		],
	},

	topIconBox: {
		eyebrow: "Our Magento SEO",
		title: "Services Include",
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Magento SEO Audit",
				body: "You can sit back and let our experts do the job for you! We will do a thorough audit of your Magento website and provide insight into core technical and structural issues as well as highlight new opportunities to outrank your competitors online.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Competition Analysis",
				body: "Our Magento experts go beyond on-page and off-page as they are also armed with market research and your rival sites' analysis. They come up with tactics to boost your eCommerce or online store's business performance and generate higher ROI for your marketing efforts.",
			},
			{
				icon: "/assets/icons/pc.svg",
				title: "Google Analytics",
				body: "What gets measured grows. Our Magento SEO Experts enable you to track your traffic and analyze the search results because of various SEO strategies and keep up with your performance metrics related to the search ranking of your website. This helps in making the right tweaks to your SEO strategy.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Magento SEO Content",
				body: "We let your content do the selling for you. Apart from helping you create powerful content that delivers results, based on keyword research, our team helps you chalk out a clear content marketing strategy. Apart from blogs, articles, and press releases we also enable you to build your brand persona through social media marketing.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "On Page and Off-page SEO setup",
				body: "Based on our analysis, our Magento SEO Specialists help you to develop a strong on-page and off-page SEO strategy for your Magento store. In order to make your site Google-friendly we help you set up XML maps of your portal. If the inbuilt components aren't enough for your business needs, then we help you build extensions and add the features you need.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Responsive Design and web development",
				body: "You could be from any industry and you could be a start-up or an established business, but Magento has functional features that we can help you use. In addition to numerous features suitable to eCommerce, using Magento we help you make customized addition and upgrades as per the requirement of the business.",
			},
		],
	},

	tableSeoPlans: {
		eyebrow: "SEO Pricing Plans Customized For Your",
		title: "Business Success",
		subtitle: "We create SEO pricing plans tailored to your business goals, helping you gain more visibility online and grow. Whether you're a small business or a large company, we focus on the right mix of on-page, off-page, and technical SEO to improve your rankings, bring in more visitors, and increase revenue. Let's work together to build an SEO plan that fits your needs!",
		planLabel: "CUSTOM MAGENTO SEO PLANS",
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
				body: "At Icecube Digital, clients gain access to a team of over 20+ digital marketing specialists, regular consultation calls, and ongoing business reviews, backed by detailed ROI reports. Our Magento SEO experts can also manage complex digital marketing strategies, which you can explore with your dedicated strategist.",
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
			"Local Seo and Google Business Profile Optimization",
		],
		ctaLabel: "Get My Custom Proposal ↗",
		ctaHref: "#",
	},

	topIconBoxSecondary: {
		eyebrow: "Why Hire Us As Your Magento",
		title: "SEO Agency",
		columns: 4,
		items: [
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Experience, Expertise and Strategies",
				body: ["You may have developed a ", { text: "Magento 2 eCommerce site", href: "#" }, " that is abreast with the latest technology and up-gradation — complete with up-to-date features and customization. But without getting traffic on your site, there will be no impact on your bottom line. This is where you can count on us with our Magento 2 search engine optimization expertise."],
			},
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Get It Right",
				body: "Our Magento website SEO experts have years of experience, and knowledge of what things work and what don't and can help you with strategies to boost the ranking of your website. Using the best white-hat SEO techniques and strategies, our Magento SEO company can deliver the best long term results you need, without setting out a daily budget for PPC ads.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Drive Business Results",
				body: "Ecommerce sites have to evolve and improve their online ranking is an ongoing process. We don't just give you a one-time strategy but even help you implement it to boost your business results.",
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Stay Updated",
				body: "Google Algorithm is continuously evolving. As a business owner, it is difficult to keep track. Our seasoned Magento eCommerce SEO team is regularly trained with the latest information and updates that you can rely upon and ensure that your site is ready to meet the new challenges of your growing business.",
			},
		],
	},

	imageText: {
		eyebrow: "Best Result With Our Magento",
		title: "SEO Experts",
		subtitle: "A leading food wholesale business picked IceCube Digital to take rankings to the next level in order to attain all-time online sales highs. Organic traffic surged by more than 460% in a year, with more than 10,000 new keywords ranking on Google.",
		image: "/assets/photos/magento-seo-experts.png",
		imageAlt: "Magento SEO analytics dashboard showing 460% traffic growth",
		paragraphs: [
			"Icecube Digital took over complete SEO for Food Packaging Direct after building a brand new Magento website. It could be a challenging part for any professional to drive sales within a short period of time. Our team of Magento SEO experts collaborated with clients and worked on copy, PR, and link building created infographics and designs, and fixed crucial on-page issues. Ultimately, they went from not ranking at all on many search terms to dominating their highly competitive keywords.",
		]
	},

	cta: {
		text: "Make Your Business Global With Icecube Digital's Magento SEO Services.",
		ctaLabel: "Contact Us Today For a Free Consultation",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	information: {
		eyebrow: "Magento SEO",
		title: "Guide Information",
		cards: [
			{
				title: "What is Magento SEO?",
				paragraphs: [
					"Magento SEO is all about making your Magento store visible in search engines. It's not just about adding keywords—it's about optimizing everything that helps customers find you. Magento 2 SEO services include improving site speed, making product pages more attractive, and ensuring mobile users have a smooth experience. The technical aspects are handled, but content matters too. With better metadata, structured data, and thoughtful link-building, your store stands out. Ultimately, it's about bringing in targeted traffic, boosting conversions, and making sure that when people search, they find your store. When done right, Magento SEO becomes a key part of growing your business online.",
				],
			},
			{
				title: "Our 360° Magento Search Engine Optimization Solution",
				paragraphs: [
					"As a professional SEO agency, our Magento SEO solution covers everything your online store needs to thrive in search engines. We focus on both on-page and off-page optimization, ensuring your product pages, category pages, and site structure are fully optimized for better visibility.",
					"From keyword research to optimizing metadata, every element is geared towards capturing more organic traffic. We also improve page load speeds, mobile responsiveness, and overall user experience—key factors that keep visitors engaged and coming back.",
					"Link-building strategies are put in place to boost credibility, while content enhancements ensure your products and services are well-represented. Our solution also includes technical SEO, which means fixing issues like broken links, duplicate content, and ensuring proper indexing by search engines.",
					"Additionally, local SEO efforts make your store more accessible to nearby customers, while eCommerce-specific tactics help you compete within your niche. It's all about driving more relevant traffic, increasing conversions, and helping your store grow with a complete SEO approach.",
				],
			},
			{
				title: "Our Magento SEO Optimization Strategy",
				listItems: [
					{ title: "Conducting an SEO Audit", parts: ["We begin with a thorough SEO audit, examining your Magento site for issues like slow loading times, duplicate content, or errors. This step helps identify key areas that need immediate attention."] },
					{ title: "Performing Keyword Research", parts: ["Effective keyword research is essential for Magento SEO optimization. We identify high-impact keywords that your target customers are using, ensuring your content is aligned with what people are actively searching for."] },
					{ title: "In-Depth Analysis of SEO Performance", parts: ["We analyze the existing SEO performance to understand what's working and what needs improvement. Using this data, we adjust our approach for better outcomes and stay ahead of changes in search algorithms."] },
					{ title: "Developing Strategic SEO Plans", parts: ["Once the analysis is complete, we create tailored SEO strategies for your Magento store. These plans are designed to enhance visibility, increase traffic, and focus on areas that drive maximum growth for your online business."] },
					{ title: "Optimizing for Search Engines", parts: ["Our ", { text: "local search optimization services", href: "#" }, " include on-page and off-page techniques. From enhancing product descriptions to improving backlinks, everything we do aims to ensure your site ranks well for relevant searches."] },
					{ title: "Tracking SEO Progress", parts: ["Tracking the progress of our SEO efforts is essential. We use analytics tools to monitor key metrics, such as rankings and traffic, to ensure our strategies are leading towards better performance."] },
					{ title: "Creating Comprehensive SEO Reports", parts: ["We provide detailed SEO reports, offering insights into what has been achieved and how it impacts your Magento store. These reports help in maintaining transparency and tracking the return on investment from SEO efforts."] },
				],
			},
			{
				title: "Fixing SEO Roadblocks for Better Rankings",
				listItems: [
					{ title: "Magento Page Speed Challenges", parts: ["Slow page speed can negatively impact user experience and search rankings. As a Magento SEO company, we address speed challenges by optimizing images, enabling caching, and improving server response times to ensure a fast, seamless shopping experience."] },
					{ title: "Complex URL Structures", parts: ["Magento's complex URL structures can hurt SEO. We simplify and optimize URLs to be more user-friendly and search-engine-friendly, ensuring that each product and category page is easily accessible and ranks better in search results."] },
					{ title: "Indexing and Crawling Issues", parts: ["Indexing issues can prevent search engines from discovering your pages. We ensure proper use of sitemaps, robots.txt, and noindex tags, making sure all valuable content is easily crawled and indexed by search engines."] },
					{ title: "Limited Built-in SEO Features", parts: ["Magento has limited built-in SEO capabilities. We fill these gaps by implementing advanced SEO plugins, customizing meta tags, and enhancing schema markup, giving your store the visibility it needs to compete effectively."] },
					{ title: "Heavy Use of JavaScript and AJAX", parts: ["JavaScript and AJAX can make it hard for search engines to understand your content. We implement solutions to ensure important content is visible to search engines, boosting your site's SEO performance without compromising on dynamic features."] },
				],
			},
		],
	},

	faqSecondary: {
		eyebrow: "Magento SEO",
		title: "Service FAQs",
		items: [
			{
				question: "What Is Magento SEO?",
				answer: "The process of optimising an e-commerce website for search engines using the Magento platform is known as Magento SEO. It entails tasks like keyword research, content marketing, technical optimization, on-page optimization, and link building. Magento SEO seeks to enhance a website's traffic and sales while enhancing its presence in search engine results pages.",
			},
			{
				question: "Why is Magento SEO Important?",
				answer: "Magento SEO is crucial because it helps your store rank higher in search engine results, driving more organic traffic without relying on paid advertising. Higher rankings mean more visibility, more clicks, and ultimately more sales. With Magento's powerful platform, proper SEO optimization ensures you capitalize on every feature available to outrank competitors and grow your online business.",
			},
			{
				question: "Is Duplicate Content a Common Magento SEO issue?",
				answer: "Yes, duplicate content is one of the most common Magento SEO challenges. Magento can generate duplicate pages through product variants, category filters, and URL parameters. This can confuse search engines and dilute your rankings. Our Magento SEO experts address this through canonical tags, proper URL configuration, and content optimization to ensure each page is unique and indexed correctly.",
			},
			{
				question: "Is Optimizing Magento URLs Important?",
				answer: "Absolutely. Clean, descriptive URLs help search engines understand your content and improve click-through rates. Magento's default URL structure can be complex and SEO-unfriendly. We optimize your URLs to be short, keyword-rich, and user-friendly, ensuring both search engines and customers can navigate your store easily.",
			},
			{
				question: "How To Speed Up Your Magento Site?",
				answer: "Site speed is a critical ranking factor. We improve Magento site speed through image optimization, enabling full-page cache, using a CDN, optimizing database queries, reducing JavaScript and CSS files, and choosing the right hosting environment. A faster Magento store improves user experience, reduces bounce rates, and boosts search rankings.",
			},
			{
				question: "How To Optimize Magento Keywords?",
				answer: "Effective keyword optimization in Magento involves thorough research to identify high-value keywords relevant to your products and audience. We implement keywords strategically in product titles, descriptions, meta tags, headings, and category pages. We also focus on long-tail keywords to capture specific buyer intent and drive highly qualified traffic.",
			},
			{
				question: "How To Optimize Magento HTML Sitemap?",
				answer: "A well-structured HTML sitemap helps both users and search engines navigate your Magento store. We optimize your sitemap by including all important pages, organizing them logically, and ensuring it's regularly updated. We also submit your XML sitemap to Google Search Console to ensure all pages are properly indexed.",
			},
			{
				question: "When will I see results with SEO?",
				answer: "SEO is a long-term strategy. While some improvements can be seen within the first few weeks, significant results typically take 4-6 months. For new websites, it may take 6-12 months to see substantial ranking improvements. Our team provides regular reports so you can track progress and see the impact of our Magento SEO work.",
			},
			{
				question: "Is Magento good for SEO?",
				answer: "Yes, Magento is one of the most SEO-friendly eCommerce platforms available. It offers built-in SEO features including customizable meta tags, URL rewrites, XML sitemaps, canonical tags, and rich snippet support. With proper configuration and expert optimization, Magento can achieve excellent search engine rankings.",
			},
			{
				question: "How do Magento SEO companies optimize sites for search engine visibility?",
				answer: "Magento SEO companies improve search visibility through a combination of technical SEO fixes, on-page optimization, content strategy, link building, and ongoing monitoring. This includes optimizing site structure, improving page speed, implementing schema markup, creating high-quality content, and building authoritative backlinks to improve domain authority.",
			},
			{
				question: "Do Magento SEO companies leverage extensions as part of their SEO campaign?",
				answer: "Yes, Magento has a rich ecosystem of SEO extensions that can enhance your store's capabilities. We leverage trusted extensions for advanced meta tag management, rich snippets, site audits, and more. However, we are selective about which extensions we use to avoid performance issues and ensure compatibility with your Magento version.",
			},
			{
				question: "How can I audit the SEO factors on my Magento site?",
				answer: "A comprehensive Magento SEO audit covers technical factors (site speed, crawlability, indexation), on-page elements (meta tags, headings, content), URL structure, internal linking, backlink profile, and mobile-friendliness. Icecube Digital provides detailed SEO audits that identify all issues affecting your store's performance and provide a clear roadmap for improvement.",
			},
			{
				question: "What SEO considerations should I make when migrating to Magento?",
				answer: "When migrating to Magento, preserve your existing URL structure or create proper 301 redirects, maintain your meta tags, ensure all pages are indexed, monitor for crawl errors, and verify that your XML sitemap is properly configured. Work with an experienced Magento SEO team to minimize ranking drops and maintain your search visibility during the transition.",
			},
			{
				question: "Which is the better SEO platform, Shopify or Magento?",
				answer: "Both platforms have strong SEO capabilities, but Magento offers more flexibility and customization for SEO. Magento allows deeper technical optimization, advanced URL configurations, and greater control over your store's architecture. For large-scale eCommerce stores with complex product catalogs, Magento typically provides better SEO opportunities.",
			},
			{
				question: "I have read somewhere that Magento loading speed is a drawback for SEO, is that true?",
				answer: "Magento can be resource-intensive out of the box, but with proper optimization, it can be very fast. We address Magento speed issues through hosting optimization, full-page caching, image optimization, code minification, and CDN implementation. A well-optimized Magento store can achieve excellent Core Web Vitals scores and compete effectively in search rankings.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default MagentoSeoService;
