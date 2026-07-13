const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const SeoCompanyGujarat = {
	slug: "seo-company-gujarat",
	pageTitle: "SEO Company in Gujarat | Expert SEO Services",
	metaDescription: "Looking for a reliable SEO company in Gujarat? Our expert team provides professional SEO services including technical SEO, on-page optimization, and strategy to grow your business online.",

	popup: {
		image: "/assets/photos/seo-expert-popup-img.png",
		title: "Book Consultation with SEO Expert",
		subtitle: "",
		autoDelay: 10000,
	},

	banner: {
		heading: "Top-Rated SEO Company in Gujarat for Measurable Growth",
		paragraphs: [
			"Icecube Digital is a leading SEO agency in Gujarat helping businesses improve search rankings, increase organic traffic, and generate qualified leads. Our data-driven SEO strategies are designed to help brands grow faster in competitive search markets.",
			"Our experienced SEO experts and consultants develop customized strategies that combine technical SEO, content optimization, and high-quality link building. Whether you need local SEO services in Gujarat or a complete organic growth strategy, we focus on delivering measurable results.",
			"Businesses trust Icecube Digital as their SEO partner in Gujarat because of our transparent processes, proven track record, and ROI-focused approach. From startups to established brands, we help companies strengthen their digital presence and achieve sustainable growth through SEO.",
		],
		guaranteeBadge: true,
		ctaLabel: "Get Your Free Quote Today!",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Schedule Your Free Consultation",
		formSubtitle: "Just pick a time that works for you.",
		btnArrow: BTN_ARROW,
	},

	imageText: {
		eyebrow: "What's Included in Our",
		title: "Local SEO Package",
		image: "/assets/photos/dominate-google-serp.jpg",
		imageAlt: "What's included in our local SEO package",
		imagePosition: "right",
		blocks: [
			{
				type: "checklist",
				items: [
					"Google Business Profile Optimization",
					"Local Keyword Research",
					"Fixing Business info across Directories",
					"Review Generation Strategy",
					"On-Page SEO",
					"Monthly Reports & Rank Tracking",
					"AI SEO and AEO",
				],
			},
		],
	},

	caseStudy: {
		eyebrow: "Our",
		title: "Case Studies",
		subtitle: [
			"Our case studies highlight how businesses grow with the help of our SEO services in Gujarat. As an experienced SEO company in Gujarat, we help brands improve search rankings, increase organic traffic, and generate measurable business results.",
			[
				"From eCommerce websites to local businesses, our SEO experts develop customized strategies that deliver long-term growth. These success stories demonstrate how companies that ",
				{ text: "hire SEO experts", href: "/hire-seo-experts/" },
				" from Icecube Digital achieve higher visibility, stronger online authority, and increased revenue through data-driven SEO.",
			],
		],
		postIds: [56547, 56546, 56488],
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

	plainText: {
		eyebrow: "Why Businesses Choose Our",
		title: "SEO Services in Gujarat",
		contentAlign: "center",
		paragraphs: [
			"SEO success is not just about increasing traffic—it's about attracting the right audience that converts into leads and customers. At Icecube Digital, we deliver strategic SEO services in Gujarat as a trusted SEO agency in Gujarat focused on long-term organic growth.",
			"Our experienced SEO experts and consultants create customized strategies based on in-depth keyword research, technical optimization, and high-quality content. Whether you need local SEO services in Gujarat or a scalable strategy for national growth, our team focuses on sustainable rankings and measurable results.",
			"By combining technical expertise with data-driven insights, we help businesses strengthen their online presence, outperform competitors, and stay ahead of search engine algorithm updates.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	scrollNavigation: {
		eyebrow: "What Happens When",
		title: "SEO is Done Right",
		items: [
			{
				title: "Explosive Growth in 6 months",
				image: "/assets/photos/ahmedabad-result-1.png",
				body: "A single strategic SEO fix triggered a wave of visibility and traffic within just one week.",
			},
			{
				title: "120-Day Organic Growth Surge",
				image: "/assets/photos/ahmedabad-result-2.png",
				body: "From low visibility to consistent growth — powered by strong fundamentals and week-over-week SEO execution.",
			},
			{
				title: "53 Percent Growth in One Quarter",
				image: "/assets/photos/ahmedabad-result-3.png",
				body: "Refined structure and intent led to steady, compounding growth without changing the site or niche.",
			},
			{
				title: "Massive SEO Recovery in 4 Months",
				image: "/assets/photos/ahmedabad-result-4.png",
				body: "A critical technical issue was blocking growth. We fixed it fast and unlocked a wave of organic traffic.",
			},
		],
	},

	imageTextSecondary: {
		eyebrow: "How Our SEO Experts Help Your",
		title: "Business Grow",
		image: "/assets/photos/ahmedabad-seo-growth.png",
		imageAlt: "How our SEO experts help your business grow",
		paragraphs: [
			"At Icecube Digital, we provide strategic SEO services in Gujarat designed to help businesses improve search visibility, attract qualified traffic, and generate consistent leads. Our SEO specialists combine technical expertise, data analysis, and content optimization to create strategies tailored to your business goals.",
			"Our team of SEO experts and SEO consultants in Gujarat perform in-depth keyword research, technical SEO improvements, and on-page optimization to ensure your website meets modern search engine standards. By aligning your content with user intent and search trends, we help your business connect with the right audience at the right time.",
			"Whether you want to hire an SEO expert in Gujarat for local SEO, expand your reach nationally, or improve your website's organic performance, our team focuses on sustainable strategies that deliver long-term growth.",
		],
	},

	milestone: milestoneSection,

	tableSeoPlans: {
		eyebrow: "Flexible SEO Pricing Plans",
		title: "for Businesses",
		subtitle: [
			[
				"Every business has different goals, competition levels, and SEO requirements. That's why our ",
				{ text: "professional SEO services", href: "/seo-search-engine-optimization/" },
				" in Gujarat are designed with flexible pricing plans tailored to your business needs and growth objectives.",
			],
			"Our SEO experts analyze your website, industry competition, and target keywords before recommending a strategy. Whether you are a startup looking for local SEO services in Gujarat or an established brand aiming for national visibility, we create SEO plans that balance performance, scalability, and long-term ROI.",
			"When you hire SEO experts from Icecube Digital, you gain access to a team that combines technical SEO, on-page optimization, and strategic link building to deliver measurable growth. Our goal is simple: create sustainable SEO results that continue to drive traffic and leads for your business.",
		],
		planLabel: "Custom SEO Plans",
		priceNote: "Starting at ₹25000 / Monthly",
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
				body: "At Icecube Digital, clients gain access to a team of over 20+ digital marketing specialists, regular consultation calls, and ongoing business reviews, backed by detailed ROI reports. Our SEO experts can also manage complex digital marketing strategies, which you can explore with your dedicated strategist.",
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
		ctaHref: "popup",
	},

	cta: {
		text: "Still Not Sure If This Is Right for You?",
		subtitle: "Let's find out together — no cost, no pressure. Quick checkup, easy fixes, clear action plan.",
		ctaLabel: "Claim my free visibility audit",
		ctaHref: "popup",
		ctaLabelSecondary: "Call Us +91 9106060593",
		ctaHrefSecondary: "https://wa.me/919106060593",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Complete SEO Solutions for",
		title: "Sustainable Growth",
		subtitle:
			"Icecube Digital offers comprehensive SEO services in Gujarat designed to improve search rankings, increase organic traffic, and generate qualified leads. Our SEO specialists combine technical expertise, data-driven insights, and strategic content optimization to deliver long-term results.",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research & SEO Strategy",
				body: "Our SEO experts conduct in-depth keyword research and competitor analysis to identify high-value search opportunities that drive targeted traffic and business growth.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO Optimization",
				body: [
					"Our SEO consultants in Gujarat perform comprehensive ",
					{ text: "technical audits", href: "/technical-seo-services/" },
					" to identify issues affecting crawlability, indexation, and performance, ensuring your website meets modern search engine standards.",
				],
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "On-Page SEO Optimization",
				body: [
					"Our team optimizes page titles, meta descriptions, headings, ",
					{ text: "internal linking", href: "/on-page-seo-services/" },
					", and content structure to improve keyword relevance and search rankings.",
				],
			},
			{
				icon: "/assets/icons/www.svg",
				title: "Local SEO Services",
				body: [
					"Our local SEO services in Gujarat help businesses improve visibility in ",
					{ text: "local search results", href: "/local-seo-services/" },
					" and Google Maps through citation building, Google Business Profile optimization, and localized content strategies.",
				],
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Optimization & SEO Content Strategy",
				body: "We develop and optimize high-quality content that aligns with search intent and improves your website's authority and engagement.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Link Building & Authority Development",
				body: "Our SEO specialists build high-quality backlinks from reputable websites to strengthen your domain authority and improve search engine rankings.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Core Web Vitals & Performance Optimization",
				body: "We optimize website speed, user experience, and performance metrics to ensure your website meets Google's Core Web Vitals standards.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO Analytics & Performance Reporting",
				body: "We track rankings, organic traffic, conversions, and SEO performance with detailed reports that help you measure the ROI of your SEO investment.",
			},
		],
	},

	processSteps: {
		eyebrow: "Our Proven",
		title: "SEO Process",
		subtitle:
			"At Icecube Digital, our SEO process is designed to deliver long-term, measurable results rather than short-term ranking spikes. We follow a structured, data-driven approach that combines technical expertise, strategic keyword targeting, and continuous optimization. Every step of our process focuses on improving your search visibility, driving qualified traffic, and converting visitors into valuable leads.",
		columns: 2,
		steps: [
			{
				title: "Comprehensive Website SEO Audit",
				body: "Every successful SEO campaign begins with a detailed analysis of your website. Our SEO experts perform a complete audit to identify technical issues, on-page gaps, and opportunities for improvement. This helps us understand your website's current performance and create a solid optimization plan.",
			},
			{
				title: "Keyword Research & Competitor Analysis",
				body: "Targeting the right keywords is essential for reaching the right audience. We conduct in-depth keyword research and analyze your competitors' strategies to identify high-value search terms that drive relevant traffic and business opportunities.",
			},
			{
				title: "On-Page SEO Optimization",
				body: "Our team optimizes key on-page elements including meta titles, descriptions, header tags, internal linking, and content structure. These improvements help search engines understand your pages better while also enhancing the overall user experience.",
			},
			{
				title: "Technical SEO Improvements",
				body: "Technical issues can limit your website's ability to rank. We fix problems related to crawlability, site structure, indexing, page speed, mobile performance, and Core Web Vitals to ensure your website meets modern search engine standards.",
			},
			{
				title: "Content Optimization & Strategy",
				body: "High-quality content is essential for SEO success. We optimize your existing content and create a strategic content plan that aligns with your target keywords, audience intent, and industry trends to improve visibility and engagement.",
			},
			{
				title: "Authority Building & Link Development",
				body: "Backlinks from trusted websites play a major role in rankings. Our SEO specialists build high-quality, relevant backlinks through ethical outreach strategies that strengthen your domain authority and search credibility.",
			},
			{
				title: "Performance Tracking & Continuous Optimization",
				body: "SEO is an ongoing process. We continuously monitor rankings, traffic, and user behavior to refine our strategies. Through regular reporting and performance analysis, we ensure your SEO campaign continues to improve and deliver measurable business growth.",
			},
		],
	},

	infoBox: {
		eyebrow: "Solving the Biggest SEO",
		title: "Challenges for Businesses",
		subtitle:
			"Many businesses struggle to grow through organic search because of technical issues, weak keyword strategies, or poor website optimization. At Icecube Digital, we identify these challenges and implement data-driven SEO services in Gujarat that help businesses improve visibility, generate leads, and achieve sustainable growth.",
		items: [
			{
				title: "We Are Not Able to Improve Organic Traffic",
				body: "Low traffic often results from poor keyword targeting, weak content, or technical SEO issues. Our SEO specialists analyze your website, identify gaps, and implement strategies that increase organic visibility and attract qualified visitors.",
			},
			{
				title: "We Are Not Getting Enough Leads from Our Website",
				body: "Traffic alone does not guarantee success. We optimize website structure, content flow, and calls-to-action to improve conversion rates and turn visitors into valuable business leads.",
			},
			{
				title: "Our Competitors Are Ranking Higher for Important Keywords",
				body: "When competitors dominate search results, strategic analysis is essential. We conduct competitor research, identify keyword opportunities, and build optimized content strategies that help your business compete effectively in search rankings.",
			},
			{
				title: "Our Website Loads Slowly or Has Technical Issues",
				body: "Technical problems such as slow loading speeds, crawl errors, and poor site structure can harm search rankings. Our team performs detailed technical audits and resolves issues that affect performance and user experience.",
			},
			{
				title: "Our Local Business Isn't Visible in Search Results",
				body: "Local search visibility is essential for attracting nearby customers. We optimize Google Business Profiles, create location-focused content, and build local citations to strengthen your presence in local search results.",
			},
			{
				title: "We Are Unable to Improve the ROI of Our SEO Efforts",
				body: "SEO should deliver measurable business outcomes. Our data-driven approach focuses on tracking rankings, traffic, and conversions to ensure your SEO investment produces real, long-term returns.",
			},
		],
	},

	information: {
		eyebrow: "Winning the Battle for",
		title: "Competitive Keywords",
		contentAlign: "center",
		cards: [
			{
				blocks: [
					{ text: "Ranking for competitive keywords requires more than basic SEO. It demands deep research, technical precision, and a strategy built on real search data. At Icecube Digital, our SEO experts identify high-value keywords by analyzing search trends, user intent, and competitor performance." },
					{ text: "Using advanced SEO tools and AI-assisted insights, we develop strategies that focus on keywords with the highest potential to drive qualified traffic and business growth. From content optimization to authority-building link strategies, every step is designed to strengthen your website's search visibility." },
					{ text: "Our SEO services in Gujarat focus on long-term keyword growth, helping businesses compete in crowded markets and establish strong organic authority. When businesses partner with Icecube Digital, they gain a strategic SEO team focused on sustainable rankings, increased traffic, and measurable results." },
				],
			},
		],
	},

	ctaSecondary: {
		text: "Grow Your Business Online With Professional SEO Services!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	checkList: {
		eyebrow: "Industries",
		title: "We Serve",
		columns: 3,
		benefits: [
			"Medical & healthcare",
			"Dentist",
			"Real estate",
			"Tours and Travels",
			"Jewelry stores",
			"Education & Finance",
			"Automotive",
			"Furniture",
			"Photography",
			"Hotel/Restaurant",
			"Sports & Fitness",
			"Fashion",
			"HVAC",
			"Garage Door Repair",
			"Moving Company",
			"Cleaning Company",
			"Restoration",
			"Roofing",
			"Electrician",
			"Funeral Home",
			"PPE",
			"Computer Repair",
			"Plumber",
			"Salon/Hair and Beauty",
		],
	},

	plainTextSecondary: {
		eyebrow: "Is Your Google Business Profile",
		title: "Fully Optimized?",
		contentAlign: "center",
		paragraphs: [
			[{ bold: "Take Our Free 2-Minute Audit and Find Out" }],
			"Most business profiles miss important optimization steps that directly impact their visibility in local search results. A poorly optimized Google Business Profile can limit your local SEO visibility, making it harder to attract nearby customers and appear in Google's local pack.",
			"Answer 6 quick questions and instantly discover whether your profile is helping or hurting your local rankings.",
			"You'll receive your personalized Google Business Profile health score by email within seconds, along with insights on how to improve your local visibility.",
		],
		ctaLabel: "Take the Free Audit",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Professional SEO",
		title: "Services FAQs",
		items: [
			{
				question: "How Long Does SEO Take to Work?",
				answer: "SEO results depend on your goals, competition, and the current state of your website. There is no overnight way to rank higher on search engines. In most cases, noticeable improvements in traffic and rankings start appearing within 3-6 months. Achieving strong and sustainable results requires consistent optimization, quality content, and ongoing SEO efforts.",
			},
			{
				question: "What Is the Difference Between On-Site and Off-Site SEO?",
				answer: "On-site SEO focuses on optimizing elements within your website, such as meta titles, descriptions, header tags, URL structure, image alt tags, internal linking, and schema markup. Off-site SEO focuses on activities outside your website, including link building, authority development, online reviews, influencer outreach, and brand mentions that help improve your site's credibility and rankings.",
			},
			{
				question: "How Much Does SEO Cost?",
				answer: "The cost of SEO services varies depending on several factors, including your website's current performance, industry competition, and business goals. While low-cost SEO providers may promise quick results, many rely on risky \"black-hat\" techniques that can harm your rankings. Working with an experienced SEO agency ensures ethical strategies that deliver sustainable growth and long-term results.",
			},
			{
				question: "Are SEO Rankings Guaranteed?",
				answer: "Ethical SEO agencies do not guarantee specific rankings because search engines constantly update their algorithms. No agency can directly control search engine results. If a company promises guaranteed rankings or claims to have a special relationship with Google, it is usually a warning sign. Reliable SEO focuses on proven strategies that improve visibility over time.",
			},
			{
				question: "What Is Local SEO or Local Ranking?",
				answer: "Local SEO focuses on improving your visibility in location-based searches. Google uses a slightly different algorithm for local results, considering factors such as Google Business Profile optimization, local citations, online reviews, proximity, and localized content. Strong local SEO helps businesses appear in Google Maps and local search results.",
			},
			{
				question: "Why Should I Hire an SEO Expert for My Website?",
				answer: "While basic SEO can be handled in-house, achieving strong rankings requires advanced expertise, consistent effort, and knowledge of evolving search algorithms. Professional SEO experts stay updated with industry changes, implement proven strategies, and continuously optimize your website to deliver better traffic, rankings, and conversions for businesses targeting local or national markets.",
			},
		],
	},

	getQuote: true,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default SeoCompanyGujarat;
