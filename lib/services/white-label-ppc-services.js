const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WhiteLabelPpcServices = {
	slug: "white-label-ppc-services",
	pageTitle: "White Label PPC Services | Icecube Digital",
	metaDescription: "Scale your agency with Icecube Digital's white label PPC services — Google Ads, Bing, Facebook, and Instagram campaign management, ad copy, bidding, A/B testing, analytics, and custom-branded reporting, delivered under your brand with no in-house team.",

	banner: {
		heading: "Scale Your Agency with our White Label PPC Services",
		paragraphs: [
			"PPC is a huge driver for brand awareness and revenue generation. However, crafting an effective and scalable PPC strategy requires a deep understanding of platform algorithms, keyword intent, and bid optimization.",
			"At Icecube Digital, we specialize in white-label PPC services that deliver unmatched technical precision and performance. As a premier white-label PPC agency, we act as your strategic partner, managing every aspect of your client's campaigns, right from advanced targeting and ad copy optimization to robust analytics and custom reporting. Our proven methodologies empower your agency to expand its portfolio, enhance client satisfaction, and achieve superior ROI without the overhead of in-house PPC teams.",
		],
		closingParagraph: "Get the White Label Support Straight from our Experts!",
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Your Free PPC Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "White Label PPC Services",
		title: "Success Stories",
		subtitle: [
			"Read our Case Studies to Understand the Impact of our White Label PPC Services With Icecube Digital, you are not just getting a service provider, you will be collaborating with a partner who values transparency and skills. We strive to be your dedicated technical experts, leveraging advanced tools like Google Ads Editor and SEMrush to craft high-performing campaigns. When you collaborate with us, we deliver you symbiotic solutions to handle the complexities of PPC advertising from data-driven keyword analysis using AI algorithms to dynamic campaign optimization based on performance metrics while you bask in the pride of stellar results.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Case Studies",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "What is",
		title: "White Label PPC?",
		contentAlign: "center",
		paragraphs: [
			"White-label PPC management is a service provided by one organization, such as a specialized PPC agency, to another organization, such as a digital marketing agency, that rebrands the service under its own name.",
			[
				"In this structure, the white-label provider handles all aspects of pay-per-click advertising campaigns on behalf of the client agency. This includes strategy development, precise account setup, continuous management, detailed ",
				{ text: "reporting, and comprehensive analytics", href: "/digital-marketing-service/" },
				". This setup allows agencies to expand their service offerings without the overhead of hiring a dedicated in-house PPC team.",
			],
			"While PPC ads can effectively drive targeted traffic and increase sales, the results rely heavily on skilled management and advanced strategy implementation. As the leading white-label Google Ads agency, Icecube Digital delivers customized solutions such as real-time bidding adjustments, data-backed keyword targeting, and performance-driven campaign monitoring to help you and your clients achieve exceptional paid search outcomes. Focus on growing your business while we ensure stellar results for your client's PPC campaigns.",
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: {
		...achievementsSection,
		eyebrow: "Our Top Ratings and Recognitions Across",
		title: "Leading Platforms",
	},

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	topIconBox: {
		eyebrow: "Advanced White Label PPC Solutions for",
		title: "Scalable Results",
		subtitles: [
			"With our white-label PPC services, we help those who want to focus more on the core aspects of running their business by outsourcing the task of aligning their ads services. We use advanced tools such as Google Ads Editor and custom automation scripts to optimize workflows, ease resource strain, streamline operations, and drive measurable results.",
			"Our certified PPC specialists employ data-driven strategies, including conversion tracking setup, competitor analysis, and audience segmentation, to optimize every aspect of your client's PPC campaigns.",
			"With the digital advertising sphere on a constant spree, staying ahead requires a partner who is dedicated to ongoing learning and adaptation. Icecube Digital embodies this principle, adopting trends such as AI-powered bid management and multi-platform integrations to align with the latest industry practices and technological advancements.",
		],
		items: [
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Campaign Strategy: Tailored Plans For Your Clients",
				body: "We start with a better understanding of your unique objectives and challenges, using tools like SEMrush and Google Ads Keyword Planner to analyze data and trends. Our strategic approach ensures your campaigns will capture your target audience effectively, focusing on precise keyword targeting, intent-based segmentation, and optimized ad placements to drive results."
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Campaign Build-Out: Detailed Account Setup and Structure",
				body: "As your partner, we create technically sound proposals, detailed ad account setups, and highly structured campaigns for your ads so that you have more time to focus on the growth and expansion of your business. We gather data-driven insights on crucial areas, such as competitor analysis using customer behavior tracking, and keyword performance metrics, to form the foundation of your proposal."
			},
			{
				icon: "/assets/icons/edit-board.svg",
				title: "Ad Management: Copywriting, Bidding, and A/B Testing",
				body: "Creating engaging and compelling ads can be a challenging experience. We take over this ad management process by designing high-quality ads, implementing automated bidding strategies through Google Ads, and conducting multi-variant A/B testing to optimize the copy and visual aspects of the ads to improve conversions and click-through rates."
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Performance Monitoring: Analytics, Optimization, and Reporting",
				body: "After executing your advertisements, you need to know what actions your audience should take to maximize their ad spending. We implement robust analytics and tracking to monitor the performance of ads meticulously. We simplify the process by providing real-time data insights, predictive performance trends, and actionable recommendations, ensuring the campaigns are being continually improved and delivering desired outcomes."
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Multi-Platform Management: Google Ads, Bing Ads, Facebook, Instagram",
				body: "We possess multi-platform expertise where you can access cutting-edge white-label PPC management services across Google Ads, Facebook Ads Manager, Bing Ads, and Instagram Ads, enabling you to scale rapidly and extend your portfolio. We ensure the delivery of outstanding results time and again in the long run by leveraging platform-specific optimization tools and audience-targeting features."
			},
		],
	},

	leftIconBox: {
		eyebrow: "Top Benefits of Using White Label",
		title: "PPC Services",
		items: [
			{
				icon: "/assets/icons/rocket.svg",
				title: "Scale Your Business",
				body: [
					"Expand your agency's service offerings without the overhead of building an in-house PPC team. At Icecube Digital, we take over the technical execution of campaigns, allowing you to focus on client acquisition and strategy. Right from advanced targeting to detailed performance tracking, we ensure ",
					{ text: "premium PPC services", href: "/ppc-management-services/" },
					" that help your agency scale seamlessly while maintaining a competitive edge.",
				]
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Data-Driven Campaigns",
				body: "Use inventive tools like Google Analytics 4 and SEMrush to craft campaigns that are optimized for ROI. At Icecube Digital, we base every decision on real-time data and performance metrics, from refining ad copy to optimizing bidding strategies. Our data-driven approach ensures that your client's campaigns achieve consistent results and long-term profitability."
			},
			{
				icon: "/assets/icons/magnet.svg",
				title: "Focus on Conversions",
				body: "Our expertise goes beyond clicks to deliver tangible results, such as qualified leads and increased sales. Icecube Digital uses A/B testing, dynamic retargeting, and high-intent keyword strategies to maximize conversions. We ensure every campaign aligns with your client's business objectives By optimizing landing pages and ad placements."
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Customized Solutions",
				body: "At Icecube Digital, we understand that every business has unique goals. Our PPC solutions are fully customized to match your client's requirements. From industry-specific keyword research to platform-specific optimization on Google Ads, Bing, or social media platforms, we ensure tailored strategies that resonate with your client's target audience and maximize ROI."
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Why Choose Icecube Digital As Your White Label",
		title: "PPC Agency?",
		subtitle: "For over a decade, we have built and manned thousands of successful PPC programs for businesses of all types and sizes. We have set it all up for you, including managing your campaigns on an ongoing basis to get the best possible results for your clients. Here's why we are the preferred choice among most PPC agencies.",
		items: [
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Expertise: Certified PPC Professionals and Google Premier Partner",
				body: "Our team is certified in Google Ads and uses advanced tools such as Google Ads Editor and Keyword Planner to optimize campaigns. With extensive knowledge of ad structures, bidding strategies, and keyword targeting, we ensure data-driven ad campaigns that deliver maximum results."
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Transparency: Monthly Reports Branded to your Agency",
				body: "At Icecube Digital, our rigorous monitoring practices are built to catch even the tiniest detail, assuring that all operations run smoothly and efficiently. Using Google Data Studio, we provide custom-branded, transparent, and comprehensive monthly reports with deep insights into the progress and performance of your campaigns."
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "No Contracts: Month-to-Month Agreements with no Long-Term Commitments",
				body: "We have no complex contract. With a no-lock-in period, it's your choice to work with us whenever you want for as long as you want. We offer seamless month-to-month agreements with no long-term commitments. This flexible approach ensures that your agency scales at its own pace while meeting client expectations effectively."
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Cost-Effective: Leverage our Team Instead of Hiring In-house",
				body: "If you are seeking white-label PPC management service, outsourcing our team is better instead of recruiting in-house. It will save you money on recruiting, hiring, training, managing, and investing in software like SpyFu, SEMrush, and automation tools. From basic PPC administration to strategy formation, we handle it all for you."
			},
			{
				icon: "/assets/icons/comment.svg",
				title: "Support: 24/7 Assistance Through Email, Skype, or Phone",
				body: "At Icecube Digital, we have a team of experts to aid you 24/7 through email, Skype, or phone. They will assist you with any issues, answer your questions, and offer advice on any concerns. Our robust support system ensures your campaigns are always on track and performing optimally."
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Improved ROI: Maximize on all Collected Opportunities",
				body: "We implement advanced targeting strategies, refine your keyword lists, and adjust your bids through continuous optimization to ensure that your client's campaigns stay competitive. We help your client's brands adapt to evolving market conditions by leveraging audience segmentation, negative keyword filtering, and dynamic ad retargeting."
			},
		],
	},

	processSteps: {
		eyebrow: "Our White Label PPC",
		title: "Management Process",
		columns: 2,
		steps: [
			{
				title: "Fill Out the Onboarding Form (basic details)",
				body: "Simply fill out our onboarding form with the necessary details, and let us map out a plan based on your client's online marketing activities. We use tools like SEMrush and Google Keyword Planner to pinpoint high-intent keywords that potential customers search for to find businesses like theirs."
			},
			{
				title: "Review and Confirm Campaign Details",
				body: "Once we map out the plan, we review and confirm the campaign details and customize them to your client's unique goals and industry-specific needs. Using data-driven insights, we refine campaign strategies to increase brand awareness or optimize ad spend, ensuring your campaign objectives are met effectively."
			},
			{
				title: "Campaign Launch",
				body: "We set up your custom campaigns with precisely defined keywords and ads designed to entice potential customers to click on your client's ads. Our process includes automated bid strategies and A/B testing to ensure optimal performance upon launch. Typically, ad campaigns will start showing in search results within hours of launch. When a user searches for keywords added to your campaigns, your ad will appear in Google search results."
			},
			{
				title: "Ongoing Optimization",
				body: "PPC is not a set-it-and-forget-it endeavor for businesses, it requires ongoing monitoring and monthly refinement to ensure optimal performance. We use advanced analytics and conversion tracking tools to analyze campaign performance and make precise adjustments to improve click-through rates, conversions, and ROI."
			},
			{
				title: "Reporting and Feedback",
				body: "Regular reporting can be overwhelming, we simplify this by delivering custom-branded reports to understand your performance at a glance. Our white-label PPC dashboard, powered by Google Data Studio, provides actionable tracking insights into visitor behavior, ad performance, and campaign results, empowering you with clear metrics for decision-making."
			},
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	infoBox: {
		eyebrow: "AI-Powered White Label PPC Plans to",
		title: "Maximize Agency ROI",
		items: [
			{
				title: "Local Build ($600): Best for Local Businesses with Limited Service Areas",
				body: "The local build, best for local businesses with limited service areas, is thoughtfully crafted to meet your diverse range of needs. This plan includes hyper-local targeting, precise geofencing strategies, and tailored ad copies optimized for localized search intent, ensuring maximum relevance and ROI."
			},
			{
				title: "Standard Plan ($800): Suitable for Agencies Managing Multiple Locations/Services",
				body: "To uplift your agency at a greater level, we offer a standard plan package, designed to manage multiple locations/services. This plan covers multi-location campaign management, advanced keyword grouping, and location-specific analytics to refine performance for each target area, driving better results across all services."
			},
			{
				title: "Large Plan ($1,200): Ideal for Larger Campaigns with National or Custom Targeting",
				body: "Our large plan is outlined for agencies seeking larger campaigns with national or custom targeting. This package includes nationwide audience targeting, dynamic ad creation, performance tracking through Google Analytics 4, and comprehensive reporting to meet the demands of expansive campaigns."
			},
		],
	},

	cta: {
		text: "Scale Your Agency With Trusted White Label PPC Management. Join us!",
		ctaLabel: "Get A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	leftIconBoxSecondary: {
		eyebrow: "Our",
		title: "Additional Services",
		columns: 1,
		items: [
			{
				icon: "/assets/icons/search-link.svg",
				title: "Google Ads Audit: Free 10-Point Analysis For New Clients",
				body: "Google is the most widely used search engine in the world, and ranking high on this platform demands a competitive edge. Our Google Ads experts utilize tools such as Google Ads Editor and SEMrush to perform a comprehensive audit with a free 10-point analysis for new clients, identifying keyword opportunities, campaign gaps, and optimization areas to elevate your PPC performance."
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Landing Page Optimization: Improve Client Landing Pages For Better Conversions",
				body: "Our designers and developers craft landing pages for your clients that turn visitors into loyal customers. By incorporating A/B testing, heatmap analysis, and mobile-first design principles, we continually optimize landing pages to improve performance, enhance user experience, and achieve the best ROI (Return on Investment) with increased leads and sales."
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Proposals & Budget Recommendations: Free White-Label PPC Proposals Tailored To Client Needs",
				body: "With Icecube Digital as your white-label PPC partner, you gain a strategic ally to move your business toward futuristic growth. Our team delivers detailed, data-driven proposals and budget recommendations, including competitive analysis and cost-per-click forecasts, tailored to meet the specific goals and requirements of your clients."
			},
		],
	},

	faq: {
		eyebrow: "White Label",
		title: "PPC FAQs",
		items: [
			{
				question: "What is white-label PPC?",
				answer: "White-label pay-per-click (PPC) is when another company runs PPC ads for an agency, which then rebrands the service as its own. The service provider manages all aspects of PPC campaigns, including keyword research, bid management, ad creation, and performance tracking, ensuring seamless integration for the agency.",
			},
			{
				question: "What are the benefits of white-label pay-per-click services?",
				answer: "You can expand your service offerings, increase revenue, and deliver expert PPC under your brand — without the cost of hiring, training, or managing an in-house team — while we handle strategy, execution, optimization, and reporting behind the scenes.",
			},
			{
				question: "What's the difference between white labeling and outsourcing PPC services?",
				answer: "With outsourcing, the provider may be visible to your client. With white labeling, all work is delivered under your brand and we stay completely invisible, so your clients see only your agency.",
			},
			{
				question: "How soon can I expect to see results from a PPC campaign?",
				answer: "Ads can start showing within hours of launch, and you'll often see initial traffic and clicks quickly. Meaningful conversion and ROI improvements typically build over the first few weeks as we optimize based on performance data.",
			},
			{
				question: "Will I have access to monitor what's happening with my PPC campaigns?",
				answer: "Yes. You get custom-branded reports and a white-label dashboard (powered by Google Data Studio) with real-time insights into ad performance, conversions, and campaign results.",
			},
			{
				question: "How do I ensure my campaigns are managed by experienced PPC professionals?",
				answer: "Our certified PPC specialists and Google Ads experts manage every campaign, using advanced tools and proven, data-driven strategies backed by over a decade of experience.",
			},
			{
				question: "Are there any restrictions when using your white-label PPC services?",
				answer: "Our service is flexible with month-to-month agreements and no long-term lock-ins. We'll align on scope and platforms upfront so the engagement fits your agency's needs.",
			},
			{
				question: "Who provides support for my white-label campaigns?",
				answer: "Our team provides 24/7 support via email, Skype, or phone, helping with questions, issues, and guidance to keep your campaigns on track and performing optimally.",
			},
			{
				question: "How much do your white-label PPC services cost?",
				answer: "We offer flexible plans — including Local Build ($600), Standard ($800), and Large ($1,200) — plus custom options scaled to your client's targeting and goals. Share your requirements for a tailored quote.",
			},
			{
				question: "Do you have experience managing non-eCommerce or lead-generation PPC campaigns?",
				answer: "Yes. We manage lead-generation, local, B2B, and service-based PPC campaigns in addition to eCommerce, tailoring strategy and targeting to each client's objectives.",
			},
			{
				question: "Do you offer other white-label marketing services beyond PPC?",
				answer: "Yes. We also provide white-label SEO, web design and development, and broader digital marketing services, so you can offer a full suite under your brand.",
			},
			{
				question: "Can white label PPC services help with conversion tracking and optimization?",
				answer: "Absolutely. We set up conversion tracking, run A/B tests, optimize bids and landing pages, and continuously refine campaigns to improve click-through rates, conversions, and ROI.",
			},
			{
				question: "What types of reports are provided for white label PPC services?",
				answer: "You receive custom-branded, comprehensive monthly reports covering ad performance, keyword data, conversions, spend, and ROI — delivered through a white-label dashboard for clear, at-a-glance insights.",
			},
			{
				question: "How can Icecube Digital's white label PPC services benefit my agency's growth?",
				answer: "We let you expand your offerings, take on more clients, and deliver premium PPC results under your brand — without operational overhead — so you can focus on sales, strategy, and client relationships while we drive performance.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuoteSecondary: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WhiteLabelPpcServices;
