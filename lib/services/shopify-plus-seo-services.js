const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const ShopifyPlusSeoServices = {
	slug: "shopify-plus-seo-services",
	pageTitle: "Shopify Plus SEO Services | Icecube Digital",
	metaDescription: "Grow faster with Icecube Digital's Shopify Plus SEO services — technical audits, on-page and content optimization, app integrations, advanced analytics, and proven strategies that boost rankings, traffic, and revenue.",

	banner: {
		heading: "Grow Faster With Shopify Plus SEO Services",
		paragraphs: [
			"At Icecube Digital, we will be your strategic partner, armed with the knowledge and tools to supercharge the expansion of your online enterprise. Struggling with slow page load times or poor search rankings? We offer comprehensive Shopify Plus SEO services, including in-depth keyword research, technical SEO audits, site architecture optimization, and performance enhancements.",
			"With a proven track record, we optimize your Shopify store and ensure that your investment in us translates into measurable success and higher conversion rates through data-driven strategies, content optimization, and enhanced user experience. Let us help you overcome the barriers to growth, improve customer engagement, and scale your business seamlessly.",
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
		eyebrow: "Portfolio: How We Help Shopify Plus",
		title: "Brands Scale",
		subtitle: [
			"At Icecube Digital, we collaborate with you to maximize Shopify Plus's advanced features. Our proven portfolio highlights why we are a trusted Shopify Plus agency for enterprise-level eCommerce. You'll receive Shopify Plus SEO strategies that include technical audits, schema markup, advanced keyword targeting, and site architecture optimization with a consumer-centric approach to ensure smooth operations.",
			"Remember, Icecube Digital is not just another Shopify Plus SEO agency. We are your long-term partner in leveraging Shopify APIs, automation tools, and performance enhancements to create a unique store that aligns with your goals.",
			"Brands that We Have Empowered to Smash the Sales Records",
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

	achievements: {
		...achievementsSection,
		eyebrow: "Our Top Ratings and Recognitions Across",
		title: "Leading Platforms",
	},

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialId: 24,
	},

	plainText: {
		eyebrow: "We Help Your Brand to Earn Visibility. Attention and",
		title: "Revenue You Deserve!",
		contentAlign: "center",
		paragraphs: [
			[
				"Do you feel your SEO isn't where it should be? Is your effort in ",
				{ text: "Shopify SEO", href: "/shopify-seo-service/" },
				" lacking something? At Icecube Digital, we take this principle to heart, offering specialized SEO services to boost your visibility, including technical SEO audits, mobile optimization, and page speed improvements to drive meaningful ROI and amplify your impact among your target audience.",
			],
			"Our experts plan and execute your winning SEO strategy with our detail-focused approach, using advanced keyword research, structured data implementation, and content optimization to ensure your brand name stays in the user's mind for a long time to come.",
		],
	},

	leftIconBox: {
		eyebrow: "Our Proven Shopify Plus",
		title: "SEO Experience",
		items: [
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Technical SEO Enhancements",
				body: "While Shopify can be an excellent foundation for your eCommerce store, some technical issues are associated with the platform. Our Shopify Plus SEO experts develop internal processes to identify issues like canonicalization errors, slow page load speeds, and improper redirects. They review your site and guide removing duplicate content, optimizing robots.txt files, and resolving crawling or indexing issues. Our dedicated SEO frameworks ensure your eCommerce site stands out in the crowded digital marketplace.",
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Content Marketing That Converts",
				body: "Content is the basis of any marketing campaign. You deserve to express your brand vision clearly and concisely. At Icecube Digital, we craft content that uses keyword mapping, content clusters, and SEO-friendly formatting to cut through the noise and reach your audience. Our conversion-driven, SEO-optimized content includes blogs, landing pages, and product descriptions that engage users, inspire action, and generate sustained business success.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Custom App Integrations",
				body: "Shopify Plus integrates with a wide range of third-party apps to extend functionality. We enable seamless integration with essential tools like CRMs (Salesforce, HubSpot), ERPs (NetSuite, SAP), inventory systems, and payment gateways. Our custom app integrations support features such as automated workflows, real-time inventory updates, and personalized customer interactions, streamlining operations and enhancing your store's functionality for an amplified customer experience.",
			},
			{
				icon: "/assets/icons/predictive.svg",
				title: "Advanced Analytics and Reporting",
				body: "Tracking SEO success on Shopify Plus requires focus and the right tools. We implement Google Analytics, Search Console, and heat mapping tools to track organic traffic, keyword rankings, conversion rates, and user engagement. These insights help refine our SEO strategies. We also monitor Core Web Vitals, bounce rates, and click-through rates (CTR), adapting our techniques to emerging trends and user behavior for ongoing SEO success.",
			},
		],
	},

	topIconBox: {
		eyebrow: "Why",
		title: "Choose Us?",
		items: [
			{
				icon: "/assets/icons/grid.svg",
				title: "100+ Successful Shopify Plus Projects",
				body: "Your business is unique, and your store should reflect that. At Icecube Digital, we've delivered 100+ customizable Shopify Plus solutions, ensuring our SEO strategies align seamlessly with each brand's identity and unique requirements.",
			},
			{
				icon: "/assets/icons/cup.svg",
				title: "15+ Years of eCommerce SEO Experience",
				body: [
					"At Icecube Digital, we craft bespoke digital experiences. With 15+ years of ",
					{ text: "eCommerce SEO expertise", href: "/ecommerce-seo-services/" },
					", we specialize in complicated integrations, technical SEO tactics, and innovative marketing strategies to drive success for your Shopify store.",
				],
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Dedicated Team for Enterprise SEO Services",
				body: "Our in-house team of eCommerce SEO specialists offers end-to-end solutions for growth. With a strong regional footprint, we provide expertise from strategy and implementation to ongoing operations and management for your enterprise store.",
			},
		],
	},

	tableSeoPlans: {
		eyebrow: "Flexible SEO Pricing Plans For Every",
		title: "Stage of Growth",
		subtitle: "We create SEO pricing plans tailored to your business goals, helping you gain more visibility online and grow. Whether you're a small business or a large company, we focus on the right mix of on-page, off-page, and technical SEO to improve your rankings, bring in more visitors, and increase revenue. Let's work together to build an SEO plan that fits your needs!",
		planLabel: "CUSTOM White Label SEO PLANS",
		price: "500",
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
				body: "At Icecube Digital, clients gain access to a team of over 20+ digital marketing specialists, regular consultation calls, and ongoing business reviews, backed by detailed ROI reports. Our Woocommerce SEO experts can also manage complex digital marketing strategies, which you can explore with your dedicated strategist.",
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
		ctaLabel: "Get My Custom Proposal",
		ctaHref: "#",
	},

	topIconBoxSecondary: {
		eyebrow: "Why Should You Hire an SEO Plus",
		title: "SEO Agency?",
		items: [
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Develop Marketing Plan",
				body: "We take a holistic SEO approach for Shopify Plus, covering on-page optimization, technical SEO, content marketing, and link building. This ensures your store is well-structured to rank higher, attract qualified leads, and boost sales.",
			},
			{
				icon: "/assets/icons/database.svg",
				title: "Leverage Data Insights",
				body: "Our tailored SEO solutions use data-driven insights and audience research to craft optimization strategies. We ensure your SEO approach aligns with the unique capabilities of the Shopify Plus platform for maximum effectiveness.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Optimize Product Content",
				body: "Optimize product pages with structured data for star ratings, pricing, and availability in search results. We create high-quality product content, including blogs, guides, and FAQs, to improve rankings and drive targeted traffic.",
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Reach The Right Audience",
				body: [
					"Reaching your audience amid eCommerce competition is challenging. Our strategic ",
					{ text: "SEO solutions", href: "/seo-search-engine-optimization/" },
					" ensure your Shopify Plus store stands out, helping you reach the right audience at the right time for increased visibility.",
				],
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Expand Your Customer Base",
				body: "Our SEO strategies, including keyword optimization and targeted content, help search engines recognize your site. This drives qualified traffic, converting potential customers into leads, and expanding your customer base effectively.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Build Brand Authority",
				body: "We optimize your Shopify store to appear at the top of search results. This positions your brand as an authoritative source, boosting credibility and converting visitors into loyal customers inclined to purchase from you.",
			},
		],
	},

	infoBox: {
		eyebrow: "Rank Higher, Sell Smarter With Our Shopify Plus",
		title: "SEO Optimization Checklist",
		items: [
			{
				title: "SEO-Friendly Architecture",
				body: "An intuitive site architecture is vital for a successful Shopify Plus store. We create a logical, user-centric menu structure to help users easily find products and enable search engines to crawl your site efficiently.",
			},
			{
				title: "Comprehensive SEO Strategy",
				body: "Our comprehensive SEO strategy includes in-depth analysis, keyword targeting, and content gap identification. Leveraging Shopify Plus's unique features, we optimize content to improve UX, enhance search visibility, and drive measurable results.",
			},
			{
				title: "Optimized Category and Product Pages",
				body: "We enhance category and product pages with revenue-driving keywords, optimized title tags, and strategic internal links. Our experts also create new collection pages based on user search trends to boost visibility and sales.",
			},
			{
				title: "Leverage Product Reviews",
				body: "Product reviews are crucial for establishing trust and improving conversions. We integrate structured data for star ratings and customer feedback to display rich snippets in search results. This enhances credibility, boosts click-through rates, and increases user confidence.",
			},
			{
				title: "Integrated Marketing Tools",
				body: "Shopify Plus supports a range of integrated marketing tools, including email automation, social media campaigns, and CRM integrations. We streamline these tools to enhance customer engagement, nurture leads, and maximize your eCommerce store's marketing potential.",
			},
			{
				title: "Google Shopping Feed Optimization",
				body: "We optimize your Google Shopping feed by enhancing product titles, descriptions, images, and pricing. Our strategies include structured data, high-quality images, and relevant keywords to improve ad placements, drive qualified traffic, and boost conversions.",
			},
		],
	},

	cta: {
		text: "Tell Us About Your Shopify Plus SEO Service Requirements And Get A Free Quote To Hire Experts Today!",
		ctaLabel: "Get In Touch Now",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Shopify Plus SEO",
		title: "FAQs",
		items: [
			{
				question: "What do your Shopify Plus SEO services include?",
				answer: "Our Shopify Plus SEO services include technical audits, on-page optimization, keyword research, content creation, backlink strategies, site architecture improvements, and advanced analytics to ensure optimal visibility and conversion rates.",
			},
			{
				question: "How do you Approach Shopify Plus SEO for my specific business needs?",
				answer: "We start with a comprehensive audit of your store, competitors, and target audience, then build a customized strategy aligned with your business goals. Our approach combines technical SEO, on-page optimization, content, and link building tailored to your industry, products, and growth stage — with continuous refinement based on performance data.",
			},
			{
				question: "Can you provide case studies or examples from businesses in my industry on Shopify Plus?",
				answer: "Yes. We have a proven portfolio of Shopify Plus brands across many industries, with measurable results in organic traffic, rankings, and revenue. During our consultation, we're happy to share relevant case studies and examples that match your industry and business model.",
			},
			{
				question: "How long does it take to see results from Shopify plus SEO services?",
				answer: "SEO is a long-term investment. Most clients see meaningful improvements in 3 to 6 months, depending on your store's current state, competition, and the scope of work. Technical fixes can yield early wins, while content and authority-building compound over time. We provide transparent monthly reporting so you can track progress.",
			},
			{
				question: "How do you keep up with changes in search engine algorithms for Shopify Plus?",
				answer: "Our team continuously monitors algorithm updates, industry news, and Shopify platform changes. We follow white-hat best practices, test against new features, and adapt strategies proactively — so your store stays compliant and competitive as search engines evolve.",
			},
			{
				question: "What is the difference between on-site and off-site SEO for Shopify Plus?",
				answer: "On-site (on-page) SEO covers everything on your store — site architecture, page speed, content, title tags, schema, and internal links — to help search engines understand and rank your pages. Off-site SEO builds your site's authority and reputation externally, mainly through high-quality backlinks, brand mentions, and digital PR. Both work together to improve rankings.",
			},
			{
				question: "How do you measure the success of your Shopify Plus SEO efforts?",
				answer: "We track KPIs tied to your goals — organic traffic, keyword rankings, click-through rates, conversion rates, and revenue from organic search. Using tools like Google Analytics, Search Console, SEMrush, and Ahrefs, we deliver transparent monthly reports with actionable insights and next steps.",
			},
			{
				question: "What are the challengers with SEO on the Shopify Plus website, and how do you overcome them?",
				answer: "Common Shopify Plus SEO challenges include duplicate content, limited URL control, theme-related crawl issues, and page speed on large catalogs. We overcome these with canonical tags, optimized site architecture, clean code, structured data, and performance enhancements tailored to the platform's capabilities.",
			},
			{
				question: "How much do Shopify Plus SEO services cost, and how do I get started?",
				answer: "Costs depend on your store's size, competition, and the scope of work involved. We offer flexible plans starting at $500/month and can tailor a package to your goals and budget. To get started, request a free SEO audit — we'll review your store and provide a custom proposal.",
			},
			{
				question: "Can you guarantee rankings for my Shopify Plus store?",
				answer: "No reputable SEO agency can guarantee specific rankings, since search engines control their algorithms. What we do guarantee is a proven, white-hat strategy, transparent reporting, and consistent effort that reliably improves visibility, traffic, and conversions over time. Beware of anyone promising guaranteed #1 rankings.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default ShopifyPlusSeoServices;
