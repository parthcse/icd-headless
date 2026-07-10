const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const SeoCompanyAhmedabad = {
	slug: "seo-company-ahmedabad",
	pageTitle: "Best SEO Company in Ahmedabad | Professional SEO Services",
	metaDescription: "Partner with a leading SEO company in Ahmedabad offering professional SEO services to improve search rankings, increase organic traffic, and grow your business online.",

	popup: {
		image: "/assets/photos/icd-ahm-guj-popup.webp",
		title: "Book Consultation with SEO Expert",
		subtitle: "",
		autoDelay: 10000,
	},

	banner: {
		heading: "Best SEO Company in Ahmedabad Driving Real Business Growth",
		paragraphs: [
			"Businesses in Ahmedabad need more than just a website; they need strong search visibility to attract the right customers. At Icecube Digital, our SEO experts create tailored strategies that combine on-page optimization, technical SEO, and high-quality link building to improve rankings and drive measurable business growth.",
			"With years of experience helping businesses across industries, we have built a reputation as a trusted SEO company delivering real results. Our goal is simple: help your business increase organic traffic, generate qualified leads, and achieve sustainable growth through professional SEO services in Ahmedabad. Whether you want to hire SEO experts or need flexible SEO service packages, our team is ready to help your brand succeed online.",
		],
		guaranteeBadge: true,
		ctaLabel: "Send me a proposal",
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
			"At Icecube Digital, our SEO strategies are designed to deliver measurable results that help businesses grow online. Our case studies highlight how our SEO experts turn complex challenges into real opportunities by improving search visibility, increasing organic traffic, and driving qualified leads.",
			[
				"From optimizing eCommerce platforms to strengthening brand visibility through ",
				{ text: "professional SEO services", href: "/seo-search-engine-optimization/" },
				" in Ahmedabad, these success stories demonstrate the impact of data-driven SEO strategies. Each project reflects our commitment to helping businesses achieve sustainable growth and stronger digital performance.",
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
		eyebrow: "How Our SEO Experts Help",
		title: "Your Business Grow",
		contentAlign: "center",
		paragraphs: [
			"SEO is not just about increasing website traffic; it's about attracting the right audience that is more likely to convert into customers. A well-planned SEO strategy ensures your business appears in front of people actively searching for your products or services.",
			"At Icecube Digital, our SEO specialists create customized strategies that align with your business goals and target audience. By combining technical SEO improvements, on-page optimization, and high-quality content strategies, we help businesses in Ahmedabad increase search visibility and generate qualified leads.",
			"Search engine algorithms constantly evolve, which is why our team continuously audits and refines your SEO strategy. This proactive approach ensures your website remains competitive, visible, and capable of driving sustainable organic growth.",
		],
		ctaLabel: "Get a Free SEO Consultation",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	scrollNavigation: {
		eyebrow: "Real SEO Results We've Delivered for",
		title: "Our Clients",
		items: [
			{
				title: "Explosive Growth in 6 months",
				image: "/assets/photos/ahmedabad-result-1.webp",
				body: "A single strategic SEO fix triggered a wave of visibility and traffic within just one week.",
			},
			{
				title: "120-Day Organic Growth Surge",
				image: "/assets/photos/ahmedabad-result-2.webp",
				body: "From low visibility to consistent growth — powered by strong fundamentals and week-over-week SEO execution.",
			},
			{
				title: "53 Percent Growth in One Quarter",
				image: "/assets/photos/ahmedabad-result-3.webp",
				body: "Refined structure and intent led to steady, compounding growth without changing the site or niche.",
			},
			{
				title: "Massive SEO Recovery in 4 Months",
				image: "/assets/photos/ahmedabad-result-4.webp",
				body: "A critical technical issue was blocking growth. We fixed it fast and unlocked a wave of organic traffic.",
			},
		],
	},

	imageTextSecondary: {
		eyebrow: "How Icecube Digital Helps Your Business",
		title: "Grow with SEO",
		image: "/assets/photos/ahmedabad-seo-growth.png",
		imageAlt: "How Icecube Digital helps your business grow with SEO",
		paragraphs: [
			"At Icecube Digital, we specialize in delivering SEO strategies that help businesses strengthen their online presence and attract the right audience. As an experienced SEO company serving businesses in Ahmedabad, our team focuses on creating customized strategies that improve search rankings, increase organic traffic, and generate qualified leads.",
			"Our SEO experts analyze every aspect of your website from technical performance to content optimization to ensure it meets modern search engine standards while providing a seamless user experience.",
			[
				"We don't just aim for short-term ranking improvements; we focus on building long-term search visibility. Whether you want to ",
				{ text: "hire SEO experts", href: "/hire-seo-experts/" },
				" for local SEO or expand your reach to national markets, our team delivers data-driven strategies designed to support sustainable business growth.",
			],
		],
	},

	milestone: milestoneSection,

	tableSeoPlans: {
		eyebrow: "Flexible SEO Pricing Plans",
		title: "for Businesses",
		subtitle: [
			"At Icecube Digital, we understand that every business has unique goals, competition levels, and budgets. That's why our SEO services in Ahmedabad are tailored to deliver maximum ROI while remaining cost-effective and scalable.",
			"Whether you're a startup or an established brand, our SEO experts design strategies aligned with your business objectives. By combining technical SEO, on-page optimization, and high-quality off-page strategies, we create a sustainable path for long-term search growth. When you hire SEO experts from Icecube Digital, you invest in a strategy backed by experience, data, and measurable results.",
		],
		planLabel: "Custom SEO Plans, Built Around Your Business",
		priceNote: "Custom pricing, tailored to your business goals",
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
		ctaLabel: "Call Us +91 9106060593",
		ctaHref: "https://wa.me/919106060593",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Comprehensive SEO Solutions That",
		title: "Drive Results",
		subtitle:
			"At Icecube Digital, we provide comprehensive SEO services designed to improve visibility, attract targeted traffic, and grow your business online. Our SEO experts in Ahmedabad use data-driven strategies and proven optimization techniques to help your website achieve long-term search engine success.",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research & Market Analysis",
				body: "We perform in-depth keyword research and competitor analysis to identify high-value search opportunities that align with your business goals.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO Audit & Optimization",
				body: [
					"Our team conducts detailed ",
					{ text: "technical audits", href: "/technical-seo-services/" },
					" to identify issues affecting your website's performance and fixes them to ensure search engines can properly crawl and index your site.",
				],
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Comprehensive On-Page SEO",
				body: [
					"We optimize your website structure, meta tags, ",
					{ text: "internal linking", href: "/on-page-seo-services/" },
					", headings, and content to improve search engine rankings and user experience.",
				],
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Optimization & SEO Content Strategy",
				body: "Our content specialists refine existing content and develop SEO-driven strategies that attract search traffic and improve engagement.",
			},
			{
				icon: "/assets/icons/www.svg",
				title: "Local SEO Services",
				body: [
					"We help businesses improve their visibility in ",
					{ text: "local search results", href: "/local-seo-services/" },
					" through Google Business Profile optimization, citations, and localized SEO strategies.",
				],
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Page Speed & Core Web Vitals Optimization",
				body: "Website performance plays a major role in rankings. We improve page speed and optimize Core Web Vitals to enhance user experience and search visibility.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Strategic Link Building",
				body: "Our team builds high-quality backlinks from authoritative websites to strengthen your domain authority and improve rankings.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Backlink Audit & Toxic Link Removal",
				body: "We analyze your backlink profile to identify harmful links and remove them to protect your website from search engine penalties.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Google Penalty Recovery",
				body: "If your website has been affected by algorithm updates or manual penalties, our SEO specialists perform a detailed audit and implement recovery strategies.",
			},
			{
				icon: "/assets/icons/voice.svg",
				title: "Voice Search & Video SEO Optimization",
				body: "We optimize your content for emerging search trends like voice search and video SEO to expand your reach across multiple search platforms.",
			},
		],
	},

	processSteps: {
		eyebrow: "Our",
		title: "SEO Process",
		subtitle:
			"At Icecube Digital, our SEO process is designed to deliver sustainable growth and measurable results for businesses in Ahmedabad. We follow a structured, data-driven approach that focuses on improving search visibility, attracting the right audience, and turning traffic into meaningful business opportunities.",
		columns: 2,
		steps: [
			{
				title: "SEO Audit & Website Analysis",
				body: "We begin with a comprehensive audit of your website to evaluate technical performance, content quality, site structure, and existing SEO efforts. This helps us identify opportunities and areas that need improvement.",
			},
			{
				title: "Keyword Research & Competitor Analysis",
				body: "Our team performs in-depth keyword research and analyzes your competitors to identify high-value search opportunities. This allows us to target the right keywords that can drive relevant traffic and support your business goals.",
			},
			{
				title: "On-Page SEO Optimization",
				body: "We optimize key on-page elements such as meta titles, descriptions, headers, internal linking, and content structure to improve search engine understanding and user experience.",
			},
			{
				title: "Technical SEO Improvements",
				body: "Technical performance plays a critical role in rankings. We fix crawl errors, optimize site speed, improve mobile performance, and ensure your website follows the latest search engine guidelines.",
			},
			{
				title: "Content Optimization & Strategy",
				body: "High-quality content is essential for SEO success. Our specialists optimize existing pages and develop strategic content that aligns with search intent and engages your target audience.",
			},
			{
				title: "Authority Building & Link Development",
				body: "We strengthen your website's authority through ethical link-building strategies and partnerships with credible websites, helping improve your domain trust and search rankings.",
			},
			{
				title: "Performance Tracking & Continuous Optimization",
				body: "SEO is an ongoing process. We continuously monitor performance using analytics and search data, refine strategies, and provide transparent reports to ensure your website continues to grow in visibility and traffic.",
			},
		],
	},

	infoBox: {
		eyebrow: "Common SEO Challenges",
		title: "We Solve",
		subtitle:
			"Many businesses struggle to achieve consistent growth from SEO due to technical issues, poor strategy, or increasing competition. At Icecube Digital, our SEO experts identify the root causes of these challenges and implement proven solutions to improve visibility, traffic, and conversions.",
		items: [
			{
				title: "Struggling to Improve Organic Traffic",
				body: "A strong online presence starts with targeted traffic. Our SEO experts identify gaps in your website's content, keyword strategy, and technical structure to improve search visibility and drive steady organic growth.",
			},
			{
				title: "Getting Traffic but Not Enough Leads",
				body: "Attracting visitors is only part of the process. We optimize your website's user experience, content flow, and call-to-action placement to convert visitors into valuable leads and customers.",
			},
			{
				title: "Competitors Ranking Higher for Important Keywords",
				body: "If competitors are outranking you, we analyze their strategies and identify opportunities to outperform them. Our team targets high-value keywords and develops optimized content that helps your website compete more effectively in search results.",
			},
			{
				title: "Slow Website or Technical SEO Issues",
				body: "A slow or technically flawed website can limit rankings and hurt user experience. We identify performance issues, fix technical errors, and optimize your website for faster loading speeds and better search engine indexing.",
			},
			{
				title: "Struggling to Keep Up with Google Algorithm Updates",
				body: "Search engine algorithms evolve constantly. Our SEO specialists monitor updates and adjust strategies proactively to ensure your website stays compliant and continues to perform well in search results.",
			},
			{
				title: "Lack of High-Quality Backlinks",
				body: "Strong backlinks build trust and authority. We develop ethical link-building strategies and outreach campaigns that earn quality backlinks from reputable websites.",
			},
			{
				title: "Low Visibility in Local Search",
				body: "For local businesses, visibility in local search results is critical. We optimize your Google Business Profile, build citations, and create localized SEO strategies to improve rankings in local searches.",
			},
			{
				title: "Poor ROI from SEO Efforts",
				body: "SEO should deliver measurable results. We track performance data, refine strategies, and focus on actions that drive real business growth and maximize your return on investment.",
			},
		],
	},

	information: {
		eyebrow: "Dominating Competitive",
		title: "Keyword Rankings",
		contentAlign: "center",
		cards: [
			{
				blocks: [
					{ text: "Ranking for competitive keywords requires the right strategy, data analysis, and consistent optimization. As a leading SEO company, Icecube Digital combines industry expertise with advanced research tools to identify the search terms that matter most for businesses in Ahmedabad." },
					{ text: "We analyze search trends, competitor performance, and user intent to uncover high-value opportunities that drive meaningful traffic. As an experienced SEO company in Ahmedabad, we focus on targeting keywords that attract the right audience and generate real business results rather than just increasing traffic." },
					{ text: "Our SEO specialists implement strategic content optimization, technical improvements, and high-quality link building to help your website compete for the most valuable search queries. With our SEO services in Ahmedabad, businesses gain stronger search visibility, improved rankings, and long-term digital growth." },
					{ text: "When companies hire SEO experts from Icecube Digital, they gain a strategic partner focused on building sustainable authority in search results. Our goal is not just to help you rank but to ensure your brand stays competitive in the evolving search landscape." },
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
		eyebrow: "Is Your Google Business Profile Optimized for",
		title: "Maximum Visibility?",
		contentAlign: "center",
		paragraphs: [
			[{ bold: "Take Our Free 2-Minute Audit and Find Out" }],
			"Many businesses miss important optimization steps that directly impact their visibility in local search results. An incomplete or poorly optimized Google Business Profile can prevent your business from appearing in the local pack and attracting nearby customers.",
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
				answer: "SEO results depend on your goals, competition level, and the current condition of your website. There is no overnight way to rank higher on search engines. In most cases, noticeable improvements in traffic and rankings begin within 3-6 months. Achieving strong and sustainable results requires consistent optimization, quality content, and ongoing SEO efforts.",
			},
			{
				question: "What Is the Difference Between On-Site and Off-Site SEO?",
				answer: "On-site SEO focuses on optimizing elements within your website, such as meta titles, descriptions, header tags, URL structure, internal linking, image alt tags, and schema markup. Off-site SEO focuses on activities outside your website, including link building, brand mentions, online reviews, influencer outreach, and other strategies that improve your website's authority and credibility.",
			},
			{
				question: "How Much Does SEO Cost?",
				answer: "The cost of SEO services depends on several factors, including your website's current performance, industry competition, and business goals. While some providers may promise extremely low prices, they often rely on risky \"black-hat\" techniques that can harm your rankings. Working with an experienced SEO agency ensures ethical strategies that deliver sustainable growth and long-term results.",
			},
			{
				question: "Are SEO Rankings Guaranteed?",
				answer: "Ethical SEO agencies do not guarantee specific rankings because search engines constantly update their algorithms. No agency can directly control search engine results. If a company promises guaranteed rankings or claims to have a special relationship with Google, it is usually a warning sign. Reliable SEO focuses on proven strategies that improve visibility and performance over time.",
			},
			{
				question: "How Can SEO Help My Business in Ahmedabad?",
				answer: "SEO helps your business appear in local search results when customers in Ahmedabad search for products or services you offer. With the right keyword strategy, local SEO optimization, and Google Business Profile management, businesses can attract more local customers, increase visibility, and generate qualified leads.",
			},
			{
				question: "Why Should I Hire an SEO Company in Ahmedabad?",
				answer: "Hiring a professional SEO agency like Icecube Digital ensures your website is optimized using proven strategies and the latest search engine guidelines. An experienced SEO team understands local competition and search trends, helping businesses in Ahmedabad improve rankings, attract targeted traffic, and achieve long-term digital growth.",
			},
		],
	},

	getQuote: true,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default SeoCompanyAhmedabad;
