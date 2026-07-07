const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const ShopifyDevelopment = {
	slug: "shopify-development-services",
	pageTitle: "Shopify Development Company | Shopify Experts | Icecube Digital",
	metaDescription:
		"Icecube Digital is a Shopify development company delivering high-performing, conversion-focused Shopify stores — custom development, theme design, migration, app integration, and performance optimization that scale your eCommerce revenue.",

	banner: {
		heading: "Best Shopify Development Company",
		paragraphs: [
			"We deliver high-performing Shopify eCommerce development services designed to increase conversions, improve site speed, and scale your online store. Our in-house Shopify experts combine strategy, design, and development to build stores that don't just look good but drive measurable revenue.",
		],
		checklistItems: [
			"400+ Shopify & eCommerce projects delivered",
			"14+ years of development experience",
			"Conversion-focused & performance-driven approach",
			"Up to 40% conversion uplift for optimized stores",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Shopify Store Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	achievements: achievementsSection,

	portfolio: {
		eyebrow: "Shopify Development",
		title: "Case Studies",
		subtitle: "See how we help eCommerce brands build, optimize, and scale high-performing Shopify stores. Our work focuses on improving conversions, increasing revenue, and delivering seamless user experiences across every touchpoint.",
		postIds: [40919, 40962, 40884],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "What Does a Shopify Development",
		title: "Company Do?",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "A Shopify development company designs, builds, customizes, and optimizes online stores on Shopify and Shopify Plus. That includes custom theme development (Liquid and Online Store 2.0), app and API integrations, headless builds with Hydrogen, conversion-focused UX, performance and Core Web Vitals optimization, platform migrations (from WooCommerce, Magento, BigCommerce), and ongoing support. A successful agency treats your store as a revenue asset tying every design and code decision to measurable conversion and revenue outcomes, not just launch." },
		],
	},

	imageText: {
		eyebrow: "Custom Shopify Development Solutions Built Around",
		title: "Your Business Goals",
		image: "/assets/photos/shopify-business-goals.png",
		imageAlt: "Custom Shopify development solutions built around your business goals",
		blocks: [
			{ type: "p", text: "In today's competitive eCommerce landscape, choosing Shopify is just the first step – the real difference comes from how well your store is built, optimized, and scaled." },
			{ type: "p", text: "At Icecube Digital, we go beyond standard Shopify development. We create custom, high-performance Shopify solutions tailored to your business model, audience, and growth goals." },
			{ type: "p", text: "Our approach combines:" },
			{ type: "ul", items: [
				"Strategic planning based on your business objectives",
				"Custom development tailored to your unique requirements",
				"Conversion-focused design for better user experience",
				"Scalable architecture that grows with your business",
			] },
			{ type: "p", text: "Whether you're launching a new store, migrating from another platform, or optimizing an existing one – we build Shopify experiences that are fast, flexible, and built to convert." },
			{ type: "p", text: "Unlock the full potential of Shopify with a team that builds for growth, not just launch." },
		],
	},

	topIconBox: {
		eyebrow: "Shopify Development Services",
		title: "Built For Growth",
		subtitles: [
			"We design and develop Shopify stores that are fast, scalable, and built to convert. Whether you're launching a new store or improving an existing one, our team focuses on performance, usability, and long-term growth.",
			"Our Shopify development services include:",
		],
		items: [
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Custom Shopify Development",
				body: "Tailored store builds designed around your brand, customer journey, and business goals.",
			},
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Shopify Store Setup & Launch",
				body: "End-to-end store setup including theme configuration, navigation, and essential integrations.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Shopify Migration Services",
				body: "Seamless migration from platforms like WooCommerce, Magento, or BigCommerce without data loss or SEO impact.",
			},
			{
				icon: "/assets/icons/logo-design.svg",
				title: "Theme Design & Customization",
				body: "Conversion-focused UI/UX with mobile-first, high-performance Shopify themes.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "App Integration & Custom Features",
				body: "Integration of third-party apps or custom-built functionality to extend your store's capabilities.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Performance Optimization",
				body: "Improving speed, Core Web Vitals, and overall user experience to increase conversions.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Ongoing Support & Maintenance",
				body: [
					"Our ongoing support services allow businesses to ",
					{ text: "hire Shopify developers", href: "/hire-shopify-developers-experts/" },
					" for continuous improvements and feature development.",
				],
			},
		],
	},

	checkList: {
		eyebrow: "Why Businesses",
		title: "Choose Shopify",
		benefitsLeft: [
			"Easy to manage without technical expertise",
			"Scalable infrastructure for growing stores",
			"Secure checkout with PCI compliance",
		],
		benefitsRight: [
			"Flexible integrations with apps and tools",
			"Mobile-optimized themes for better conversions",
		],
	},

	infoBox: {
		eyebrow: "Common Shopify Development",
		title: "Challenges And Solutions",
		subtitle:
			"Even though Shopify is a powerful platform, many businesses struggle to scale due to technical and strategic limitations. Our approach eliminates these bottlenecks with structured, performance-focused solutions.",
		items: [
			{
				title: "Advanced Customization Without Platform Limitations",
				body: "Shopify's native capabilities can restrict complex functionality and unique user experiences. We overcome this with custom theme development and tailored features—giving your store complete flexibility without compromising performance.",
			},
			{
				title: "Performance & Scalability Optimization",
				body: "As traffic and product catalogs grow, poorly optimized stores often slow down. We build with scalability in mind—optimizing code, infrastructure, and app usage to ensure consistent speed and performance at every stage of growth.",
			},
			{
				title: "Search Visibility Beyond Basic SEO",
				body: "While Shopify includes built-in SEO features, ranking for competitive keywords requires deeper optimization. We enhance site structure, content, and technical performance to improve visibility and attract high-intent traffic.",
			},
			{
				title: "Seamless Third-Party Integrations",
				body: "Integrating multiple apps can lead to conflicts and instability if not handled properly. We implement a clean integration strategy—ensuring all tools work together smoothly without affecting site performance.",
			},
			{
				title: "Secure & Reliable Store Infrastructure",
				body: "Protecting customer data and maintaining uptime is critical. We follow best practices in security, updates, and monitoring to keep your Shopify store safe, stable, and fully compliant.",
			},
			{
				title: "Conversion-Focused Checkout Optimization",
				body: "Cart abandonment is often caused by friction in the checkout process. We optimize user flows, simplify payment options, and implement recovery strategies to maximize completed purchases.",
			},
		],
	},

	processSteps: {
		eyebrow: "Our Shopify",
		title: "Development Process",
		columns: 2,
		steps: [
			{
				title: "Discovery & Planning",
				body: "Understanding your business, goals, and technical requirements.",
			},
			{
				title: "Design & Development",
				body: "Creating a high-performance, user-friendly Shopify store tailored to your brand.",
			},
			{
				title: "Testing & Launch",
				body: "Ensuring everything works seamlessly before going live.",
			},
			{
				title: "Ongoing Support",
				body: "Continuous improvements, updates, and performance monitoring.",
			},
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	leftIconBox: {
		eyebrow: "Why Choose Icecube Digital for",
		title: "Shopify Development",
		items: [
			{
				icon: "/assets/icons/user-team.svg",
				title: "Experienced Shopify Team",
				body: "Skilled developers with hands-on experience across multiple industries.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Focused on Performance & Conversions",
				body: "Every store is built to load fast and convert better.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Transparent Process",
				body: "Clear timelines, regular updates, and no hidden surprises.",
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Flexible Engagement Models",
				body: "Fixed cost, hourly, or dedicated team — based on your needs.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "Long-Term Support",
				body: "We stay involved post-launch to help you scale and improve.",
			},
		],
	},

	cta: {
		text: "Your Ecommerce Store Designed Just The Way You Want It! If You Can Dream It, We Can Build It.",
		ctaLabel: "Get A Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	tableBasic: {
		eyebrow: "Shopify or Shopify Plus:",
		title: "Which Is Right For You?",
		columns: ["Content", "Shopify", "Shopify Plus"],
		boldColumns: [0],
		colWidths: ["33.33%", "33.33%", "33.33%"],
		rows: [
			["Best for", "New & growing SMB stores", "High-volume / enterprise (typically $1M+ revenue)"],
			["Customization", "Themes, apps, Liquid", "Custom checkout, Shopify Functions, Scripts"],
			["Scale", "Standard infrastructure", "Handles thousands of orders/min, flash sales"],
			["Stores / markets", "Single store", "Multi-store, multi-region (Shopify Markets), B2B"],
			["Access", "Standard", "Expanded staff, automation (Flow), wholesale"],
		],
	},

	checkListSecondary: {
		eyebrow: "The Shopify Stack",
		title: "We Build In",
		benefitsLeft: [
			[{ bold: "Storefront:" }, " Liquid, Online Store 2.0 (sections everywhere, metafields/metaobjects), Dawn & custom themes, responsive/mobile-first."],
			[{ bold: "Headless:" }, " Hydrogen + Oxygen, Storefront API, custom React/Next.js front ends for app-like speed."],
			[{ bold: "Custom logic:" }, " Shopify Functions (custom discounts, shipping, payment rules), Checkout Extensibility, Shopify Scripts (Plus), custom apps via the Admin API."],
		],
		benefitsRight: [
			[{ bold: "Integrations:" }, " ERP, CRM, PIM, 3PL/inventory, payment gateways, Klaviyo & email/SMS, analytics."],
			[{ bold: "Migrations:" }, " WooCommerce, Magento/Adobe Commerce, BigCommerce → Shopify with URL/redirect, SEO, and data integrity preserved."],
			[{ bold: "Performance & trust:" }, " Core Web Vitals tuning, PCI-DSS-compliant checkout, accessibility (ADA/WCAG)."],
		],
	},

	plainTextSecondary: {
		eyebrow: "Is Shopify the Right Choice",
		title: "for Your Business?",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "Shopify powers millions of live stores across 175+ countries and is one of the most widely used e-commerce platforms in the world, with a fully hosted, PCI-DSS Level 1-compliant checkout, a large app ecosystem, and built-in multi-channel selling. Benefits: easy to manage without dev skills, scalable infrastructure, secure checkout, flexible app integrations, mobile-optimized themes, and built-in SEO and blogging." },
		],
	},

	faq: {
		eyebrow: "Shopify",
		title: "Development FAQs",
		items: [
			{
				question: "What does a Shopify development agency do beyond building a storefront?",
				answer: "It handles custom theme and app development, integrations, CRO, migrations, and post-launch optimization — auditing performance data and iterating on the store as a live revenue asset, not a one-time build.",
			},
			{
				question: "How much does Shopify development cost?",
				answer: "Basic builds start in the low four figures; custom and Shopify Plus builds scale with scope. We quote fixed-price, hourly, or dedicated-team within 24 hours.",
			},
			{
				question: "What's the difference between Shopify and Shopify Plus?",
				answer: "Shopify suits growing SMBs; Shopify Plus is for high-volume/enterprise needing custom checkout, Shopify Functions/Scripts, B2B, and multi-region (Shopify Markets). We build both and help you choose.",
			},
			{
				question: "Do you build headless Shopify stores with Hydrogen?",
				answer: "Yes — headless front ends with Hydrogen/Oxygen and the Storefront API for app-like speed, plus Online Store 2.0 and custom Liquid themes.",
			},
			{
				question: "Are you a Shopify Partner?",
				answer: "Yes — we’re a Shopify Partner agency (state Plus Partner if applicable); you can verify us in Shopify’s Partner Directory.",
			},
			{
				question: "Can you migrate my store to Shopify without losing SEO or data?",
				answer: "Yes — we preserve URLs/redirects, metadata, and product/customer/order data, and validate indexation post-launch so rankings hold or improve.",
			},
			{
				question: "Do you follow SEO best practices while building my website?",
				answer: "Shopify has strong SEO features. Our SEO experts & Shopify development team work together to optimize your website for best SEO at all levels.",
			},
			{
				question: "Is it difficult to build a custom theme on Shopify?",
				answer: "It can be difficult if you don’t know the platform well but with the help of a professional shopify development company, you can build a custom theme as per your brand needs.",
			},
			{
				question: "Do I need to hire a Shopify development company to start a store?",
				answer: "No, you Don’t need to hire a shopify development service provider company to set up a basic store. You can select a readymade theme from thousands of free templates available and set it up using tutorials and guides available for free. However, you may need to hire Shopify experts if you are looking to build a custom Shopify theme for your ecommerce store.",
			},
			{
				question: "How do I evaluate a Shopify agency's portfolio?",
				answer: "Look past visuals for before/after conversion and revenue metrics tied to specific changes — like the named case studies on this page (e.g., +110% revenue for Mia Shoes).",
			},
			{
				question: "How long does a Shopify build take, and how do we work together?",
				answer: "Most builds run 4–8 weeks; we work in defined stages (discovery → design → development → QA → launch → support) with a dedicated PM and weekly updates.",
			},
			{
				question: "How do I get progress updates on my Shopify project?",
				answer: "Our Shopify development team shares daily and weekly work reports on the projects we work on. We use different project management tools to share project updates with our valued customers. You can also schedule a weekly project review call with tech lead or project manager.",
			},
			{
				question: "Why should I hire Icecube Digital for my Shopify eCommerce project?",
				answer: "We are a certified Shopify development agency with 14+ years of experience in building groundbreaking eCommerce websites and portals. Customer satisfaction is the end goal of everything that we do. Don’t worry, You are in safe hands.",
			},
			{
				question: "Do you sign NDA for privacy of our eCommerce project?",
				answer: "Yes, We really take the privacy of data seriously. We would be more than happy to sign NDA and confidentiality agreement before you share your project details with us.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default ShopifyDevelopment;