const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const DigitalMarketingAgencyAhmedabad = {
	slug: "digital-marketing-agency-ahmedabad",
	pageTitle: "Digital Marketing Agency Ahmedabad | Digital Marketing Services",
	metaDescription:
		"Looking for digital marketing services in Ahmedabad? We provide SEO, PPC, and social media marketing to increase traffic, generate qualified leads & grow your business.",

	popup: {
		image: "/assets/photos/digital-marketing-expert-popup-img.png",
		title: "Book Consultation with Digital Marketing Expert",
		subtitle: "",
		autoDelay: 10000,
	},

	banner: {
		heading: "Best Digital Marketing Agency in Ahmedabad",
		paragraphs: [
			"Build a powerful online presence with result-driven digital marketing services in Ahmedabad. We help businesses attract the right audience, generate qualified leads, and improve ROI using data-driven strategies.",
			"Our team specializes in SEO, PPC, social media marketing, and conversion optimization to grow your brand online. You can also hire dedicated digital marketing experts to manage and continuously optimize your campaigns, improve website performance, and strengthen your brand visibility.",
			"We work closely with your team to understand business goals, refine strategies regularly, and adapt quickly to changing market trends so your business can grow consistently in the competitive digital landscape.",
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

	caseStudy: {
		eyebrow: "Our",
		title: "Case Studies",
		subtitle: [
			"Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [56547, 56546, 56488],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	imageText: {
		eyebrow: "What's Included in Our",
		title: "Digital Marketing Package",
		image: "/assets/photos/bonus_addons_square.png",
		imageAlt: "What's included in our digital marketing package",
		imagePosition: "right",
		blocks: [
			{
				type: "checklist",
				items: [
					"Google Business Profile Optimization",
					"Complete SEO",
					"Google Ads Management",
					"Social Media Marketing",
					"AI SEO and AEO",
					"Link Building",
					"Monthly Reports & Rank Tracking",
				],
			},
		],
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "Marketing Strategy Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	plainText: {
		eyebrow: "Meet Your Digital Marketing Experts",
		title: "In Ahmedabad",
		contentAlign: "center",
		paragraphs: [
			"With more than a decade of industry experience, our team delivers user-focused digital marketing services in Ahmedabad designed to strengthen your online presence. We analyze search behavior, user intent, and performance data to create strategies that deliver measurable business results.",
			"Our digital marketing specialists develop customized marketing plans aligned with specific business goals. From SEO and social media marketing to CRO and content marketing, every channel works together to support higher engagement, qualified leads, and better conversions.",
			"By combining strategic planning with advanced analytics, campaigns are continuously monitored, tested, and optimized. This approach helps businesses improve engagement, reduce friction in the customer journey, and achieve sustainable growth across platforms like Google, Shopify, Magento, and WooCommerce.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,


	imageTextSecondary: {
		eyebrow: "Turn Your Website Into a",
		title: "Lead Generation Machine",
		image: "/assets/photos/dm-lead-generation.png",
		imageAlt: "Turn your website into a lead generation machine",
		imagePosition: "right",
		paragraphs: [
			"Many businesses treat their website like an online brochure, which is a common mistake. A well-optimized website should work as a 24/7 digital sales representative with a structured sales funnel designed to attract, engage, and convert visitors into customers.",
			"However, generating leads and revenue requires consistent traffic and the right digital marketing strategy. With professional digital marketing services in Ahmedabad, businesses can reach the right audience, increase website traffic, and convert visitors into qualified leads.",
			"Our team helps businesses improve online visibility through SEO, paid advertising, social media marketing, and conversion optimization. By combining data-driven strategies with continuous monitoring and optimization, websites become powerful tools that consistently generate leads and support long-term business growth.",
		],
	},

	milestone: milestoneSection,

	plainTextSecondary: {
		eyebrow: "Flexible Digital Marketing Plans for",
		title: "Every Business",
		contentAlign: "center",
		paragraphs: [
			"Every business has different goals, competition levels, and marketing budgets. That's why our digital marketing services in Ahmedabad are designed to be flexible, scalable, and focused on delivering maximum ROI.",
			"Whether you're a startup or an established brand, customized strategies are created to align with your specific business objectives. By combining SEO, paid advertising, social media marketing, and data-driven insights, businesses can reach the right audience and generate consistent growth.",
			"A strategic and data-focused approach ensures campaigns are continuously monitored, optimized, and improved. This helps businesses increase online visibility, generate qualified leads, and achieve sustainable long-term results.",
		],
	},

	cta: {
		text: "Still Not Sure If This Is Right for You?",
		subtitle:
			"Let's find out together — no cost, no pressure. Quick checkup, easy fixes, clear action plan.",
		ctaLabel: "Claim my free visibility audit",
		ctaHref: "popup",
		ctaLabelSecondary: "Call Us +91 9106060593",
		ctaHrefSecondary: "https://wa.me/919106060593",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Core Digital Marketing Services",
		title: "In Ahmedabad",
		subtitle:
			"As a trusted digital marketing company in Ahmedabad, we offer result-driven strategies that help businesses improve online visibility, attract targeted audiences, and generate qualified leads. Our digital marketing services in Ahmedabad combine SEO, paid advertising, content marketing, and analytics to drive measurable and sustainable business growth.",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Search Engine Optimization (SEO)",
				body: "Search Engine Optimization helps improve your website's visibility in organic search results and attract users actively looking for your products or services. Through technical optimization, keyword strategy, and high-quality content, SEO drives consistent traffic and long-term growth.",
			},
			{
				icon: "/assets/icons/square-cursor.svg",
				title: "Pay-Per-Click Advertising (PPC)",
				body: "Pay-per-click advertising helps businesses gain instant visibility on search engines and reach potential customers at the right moment. Well-optimized campaigns, strategic keyword targeting, and landing page alignment ensure every click contributes to meaningful business results.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Marketing",
				body: "Content marketing helps businesses educate and engage their audience through valuable and relevant information. SEO-friendly blogs, website content, and product descriptions improve search rankings while building brand authority and supporting lead generation.",
			},
			{
				icon: "/assets/icons/social-share.svg",
				title: "Social Media Marketing",
				body: "Social media marketing strengthens brand presence and builds meaningful connections with your audience across popular platforms. Strategic content and targeted campaigns help increase engagement, drive traffic, and encourage conversions.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Conversion Rate Optimization (CRO)",
				body: "Conversion rate optimization focuses on improving user experience and removing friction points that prevent visitors from taking action. Data-driven testing and performance improvements help turn more website visitors into customers.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Analytics & Performance Tracking",
				body: "Analytics and performance tracking provide insights into campaign performance and user behavior. Accurate data helps businesses understand what works best and continuously refine marketing strategies for better results.",
			},
			{
				icon: "/assets/icons/email.svg",
				title: "Email Marketing & Automation",
				body: "Email marketing enables businesses to nurture leads and maintain long-term relationships with customers. Automated campaigns deliver personalized messages that improve engagement, retention, and customer loyalty.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "eCommerce Marketing",
				body: "eCommerce marketing focuses on driving targeted traffic and increasing online sales. Optimized product pages, shopping campaigns, and conversion-focused strategies help online stores maximize revenue and growth.",
			},
		],
	},

	tableBasic: {
		eyebrow: "Icecube Digital vs. Typical Digital",
		title: "Marketing Agency",
		boldColumns: [0],
		colWidths: ["33.33%", "33.33%", "33.33%"],
		contentAlign: "left",
		columns: ["Category", "Icecube Digital Advantage", "Typical Digital Agency"],
		rows: [
			[
				"Channel Expertise",
				{ icon: "check", title: "Specialized in Digital Ads & SEO", desc: "Focused efforts deliver maximum impact" },
				{ icon: "cross", title: "Generalist Approach", desc: "Spread thin across too many platforms" },
			],
			[
				"Client Service",
				{ icon: "check", title: "Work Directly with Experts", desc: "Senior specialists guide your strategy" },
				{ icon: "cross", title: "Outsourced & Junior Teams", desc: "Execution often handled by less experienced staff" },
			],
			[
				"KPI Alignment",
				{ icon: "check", title: "Revenue-Driven Metrics", desc: "Performance tied directly to ROI" },
				{ icon: "cross", title: "Surface-Level Metrics", desc: "Emphasis on vanity metrics like impressions or clicks" },
			],
			[
				"Strategy Customization",
				{ icon: "check", title: "Tailored to Your Business", desc: "No two campaigns are alike" },
				{ icon: "cross", title: "One-Size-Fits-All", desc: "Cookie-cutter strategies applied to every client" },
			],
			[
				"Speed To Market",
				{ icon: "check", title: "Rapid Campaign Launches", desc: "Streamlined processes for quick deployment" },
				{ icon: "cross", title: "Slow Execution", desc: "Prolonged onboarding and delayed rollouts" },
			],
			[
				"Reporting & Transparency",
				{ icon: "check", title: "Clear, Actionable Reporting", desc: "Full visibility into what's working" },
				{ icon: "cross", title: "Opaque & Overcomplicated Reports", desc: "Hard to tie results to real business goals" },
			],
		],
	},

	tableInfoCards: {
		eyebrow: "Our Digital Marketing",
		title: "Service Packages",
		ctaLabel: "Get a Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
		plans: [
			{
				name: "Starter",
				features: [
					"Affordable entry-level marketing",
					"Establish online presence",
					"Basic SEO foundation",
					"Social media setup",
					"Simple performance tracking",
				],
			},
			{
				name: "Growth",
				features: [
					"Advanced SEO optimization",
					"Lead generation campaigns",
					"Multi-channel marketing",
					"Email marketing automation",
					"Data-driven reporting",
				],
			},
			{
				name: "Premium",
				features: [
					"Full-service SEO coverage",
					"Conversion rate optimization",
					"Integrated PPC campaigns",
					"High-quality content marketing",
					"Weekly performance insights",
				],
			},
			{
				name: "Enterprise",
				features: [
					"Dedicated account manager",
					"Custom analytics dashboards",
					"Advanced A/B testing",
					"Scalable multi-location solutions",
					"End-to-end marketing strategy",
				],
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Why Choose Our Digital Marketing Company",
		title: "In Ahmedabad",
		subtitle:
			"Choosing the right digital marketing company in Ahmedabad can make a significant difference in your online growth. Our approach focuses on data-driven strategies, transparent communication, and measurable results to help businesses achieve sustainable digital success.",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/user-team.svg",
				title: "Industry Experts",
				body: "Our team includes experienced professionals specializing in SEO, PPC, content marketing, and analytics. This expertise helps businesses identify the most effective marketing channels and adapt quickly to changing market trends.",
			},
			{
				icon: "/assets/icons/ai-target.svg",
				title: "Result-Driven Approach",
				body: "Every campaign is designed with clear goals and performance metrics. By analyzing user behavior and market data, strategies are continuously optimized to improve traffic quality, lead generation, and conversions.",
			},
			{
				icon: "/assets/icons/comment.svg",
				title: "Transparent Communication",
				body: "Clear reporting and regular performance updates ensure you always understand how your campaigns are performing. Detailed insights help businesses make informed marketing decisions.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Better Return on Investment (ROI)",
				body: "Our strategies focus on maximizing marketing ROI by improving campaign efficiency and targeting the right audience. This helps businesses generate more leads and conversions without unnecessary spending.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Competitive Pricing",
				body: "Flexible digital marketing plans are designed to fit different business needs and budgets. This ensures companies receive effective marketing solutions while maintaining cost efficiency.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Data-Driven Optimization",
				body: "Continuous monitoring, testing, and analytics help refine marketing strategies over time. This data-driven approach ensures consistent performance improvements and long-term business growth.",
			},
		],
	},

	ctaSecondary: {
		text: "Grow your business online with Professional Digital Marketing services!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	plainTextTertiary: {
		eyebrow: "Is Your Google Business Profile Optimized for",
		title: "Local Visibility?",
		contentAlign: "center",
		paragraphs: [
			[{ bold: "Take Our Free 2-Minute Audit and Find Out" }],
			"Many businesses miss important optimization steps that directly affect their visibility in local search results. An incomplete or poorly optimized Google Business Profile can prevent your business from appearing in the local pack and attracting nearby customers in Ahmedabad.",
			"Answer 6 quick questions and instantly discover whether your profile is helping or hurting your local rankings.",
			"Get your Google Business Profile health score delivered to your email within seconds, along with actionable insights to improve local visibility, attract more local customers, and strengthen your presence in Google search and maps.",
		],
		ctaLabel: "Take the Free Audit",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Digital Marketing",
		title: "Service FAQs",
		items: [
			{
				question: "What Services Does a Digital Marketing Agency in Ahmedabad Offer?",
				answer:
					"A digital marketing agency provides services such as SEO, PPC advertising, social media marketing, content marketing, conversion rate optimization, and email marketing. These strategies help businesses increase online visibility, attract targeted traffic, and generate qualified leads.",
			},
			{
				question: "How Can Digital Marketing Help My Business Grow?",
				answer:
					"Digital marketing helps businesses reach the right audience through search engines, social media platforms, and paid advertising. With the right strategy, businesses can increase brand awareness, generate leads, improve customer engagement, and boost online sales.",
			},
			{
				question: "How Long Does Digital Marketing Take to Show Results?",
				answer:
					"The timeline depends on the strategy used. Paid advertising campaigns can generate results quickly, while SEO and content marketing typically take 3–6 months to show consistent improvements in traffic and rankings.",
			},
			{
				question: "How Do I Choose the Right Digital Marketing Agency in Ahmedabad?",
				answer:
					"Look for an agency with proven experience, transparent reporting, and a strong portfolio of successful campaigns. A reliable agency focuses on data-driven strategies, clear communication, and measurable results aligned with your business goals.",
			},
			{
				question: "What Is the Cost of Digital Marketing Services?",
				answer:
					"Digital marketing costs vary depending on the services required, industry competition, and campaign goals. Businesses can choose flexible plans that match their marketing budget while focusing on strategies that deliver measurable ROI.",
			},
			{
				question: "Why Is Local SEO Important for Ahmedabad Businesses?",
				answer:
					"Local SEO helps businesses appear in search results when customers in Ahmedabad search for related products or services. Optimizing your Google Business Profile, local citations, and website content helps attract nearby customers and increase local visibility.",
			},
			{
				question: "Can Digital Marketing Generate Leads for My Business?",
				answer:
					"Yes. With the right combination of SEO, paid advertising, social media marketing, and conversion optimization, digital marketing can consistently generate qualified leads and help businesses grow their customer base.",
			},
		],
	},

	getQuote: true,

	trustedClients: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default DigitalMarketingAgencyAhmedabad;
