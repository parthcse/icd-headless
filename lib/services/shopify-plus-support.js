const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const ShopifyPlusSupport = {
	slug: "shopify-plus-support-and-maintenance-services",
	pageTitle: "Shopify Plus Support and Maintenance Services | Icecube Digital",
	metaDescription: "Keep your Shopify Plus store fast, secure, and reliable with Icecube Digital's support and maintenance services — performance optimization, checkout and script support, app integrations, security monitoring, automation, and 24/7 ongoing support.",

	banner: {
		heading: "Shopify Plus Support And Maintenance Services",
		paragraphs: [
			"Maintain the performance of your store for optimum effectiveness",
			"Launching your enterprise-grade Shopify store helps your customers to engage and buy products at their convenience. Everything works smoothly until technical issues arise, including upgrades in Shopify policies, which largely affect your conversion rates, slow loading times, and reduced sales.",
			"At Icecube Digital, our Shopify Plus specialists offer constant support and maintenance to maintain the continuous working process. With frequent updates, bug fixes, and optimization, we ensure that your Shopify store operates safely and free of failure.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Shopify Store Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	// Figma "Our Portfolio" / case-study section mapped to the standard portfolio component (fetched by postIds).
	portfolio: {
		eyebrow: "How Our Shopify Plus Maintenance Services Support",
		title: "Long-Term Growth",
		subtitle: [
			"Real Results, Real Businesses, Real Growth",
			"Our Shopify Plus development transformed the store into a fast, secure, and reliable platform. By combining optimized design with ongoing Shopify Plus Maintenance services, we fixed checkout errors, improved page speed, and ensured seamless app integrations. The result was higher conversions, zero downtime, and a consistently smooth shopping experience.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: components/home/GetQuoteSection.js ("Let's Work Together")
	getQuote: true,

	plainText: {
		eyebrow: "Why Your Shopify Store Needs",
		title: "Ongoing Maintenance",
		contentAlign: "center",
		paragraphs: [
			"Over time, Shopify stores slow down due to unoptimized images, increasing data loads, growing security requirements, and changes in Shopify Plus features that result in reduced performance and loading times. Shopify's quarterly updates can significantly impact integrations and custom scripts if they are not tested and updated in advance.",
			"With Icecube Digital, you ensure regular scans, updates, and backups to prevent downtime and ensure a compliant Shopify store. With increased traffic and complexity, unmaintained stores become inefficient in inventory syncs, checkout flow, and multi-store management. Ongoing maintenance ensures a future-ready platform and makes it adaptable to advanced flow automations without affecting operations.",
		],
		ctaLabel: "Request a Demo",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/achievements-section.js (default "Our Achievements" heading)
	achievements: achievementsSection,

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		// Placeholder: reusing an existing testimonialId until the WP id for
		// Omid (Owner of Food Packaging Direct) is available.
		testimonialId: 24,
	},

	topIconBox: {
		eyebrow: "Shopify Plus Support and",
		title: "Maintenance Services",
		subtitle: "Our committed Shopify Plus experts will assist you with updates to the platform, custom scripts, scaling, and Shopify Plus features to make sure that your store operates smoothly.",
		items: [
			{
				icon: "/assets/icons/speed.svg",
				title: "Shopify Performance Optimization & Speed Enhancement",
				body: "As an expert Shopify Plus Partner agency, we analyze Core Web Vitals, compress images, minify code, remove bottlenecks, and utilize Shopify's latest tools to optimize performance and improve page load times This helps you to reduce bounce rates and enhance conversion ratios.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Shopify Plus Checkout & Script Support",
				body: "Shopify Plus provides advanced control over checkout through scripts and customization, but this also increases complexity .We simplify checkout customization by resolving cart abandonment issues, implementing dynamic checkout scripts, integrating advanced payment gateways, and ensuring secure transactions",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "App, API & Third-Party Integration Support",
				body: "We offer integration services to CRMs, ERPs, WMSs, accounting, marketing platforms, and marketplaces so that our customers can run on Shopify Plus. We also perform API customizations, app installations, and third-party application integration to achieve smooth operations without interference with workflow.",
			},
			{
				icon: "/assets/icons/database.svg",
				title: "Shopify Plus Security Monitoring and Backup",
				body: "Security and data protection are always at the core of any Shopify store. Our Shopify Plus security services involve conducting vulnerability scans, enforcing SSL, and implementing access controls to detect threats early and automating data backups for quick restoration with minimal downtime.",
			},
			{
				icon: "/assets/icons/circle-part.svg",
				title: "Store Audit and Maintenance",
				body: "We conduct a systematic audit of your Shopify store on SEO, speed, security, apps, and UX to ensure optimized performance. Our Shopify Plus experts implement required fixes, updates, and optimizations to enable long-term reliability.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Shopify Plus Automation & Workflow Support",
				body: "With Icecube Digital, our team helps simplify complex processes using Shopify Plus automation expertise. We develop custom workflows using Flow, Script Editor, and apps for inventory management, order routing, and reporting, ensuring time savings.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "On Going Shopify Support",
				body: "Get 24/7 Shopify Plus support from Icecube Digital to maintain a streamlined operational workflow.Our Shopify Plus support specialists help you with routine queries, quick fixes, content updates, and app configurations to ensure optimized performance handle high volumes of traffic and complex processes.",
			},
		],
	},

	infoBox: {
		eyebrow: "Key Benefits of Our Shopify Plus Support and",
		title: "Maintenance Services",
		items: [
			{
				title: "Faster Loading Speed",
				body: "Our team refines theme code, apps, scripts, and third-party integrations to enhance loading speed, ensuring smooth user experience and boosted conversion rates.",
			},
			{
				title: "Zero Downtime",
				body: "We ensure proactive monitoring and timely upgrades enable your store to handle traffic efficiently and streamline workflow for a smooth user experience.",
			},
			{
				title: "Secure and Compliant Store Ecosystem",
				body: "We implement best practices for security, app permissions, and Shopify Plus compliances. This assists in reducing uncertainties and protecting customer data.",
			},
			{
				title: "Scalable Growth Support",
				body: "We help you to focus on business growth by handling complex processes like multi-currency, wholesale, and custom scripts without technical hurdles.",
			},
			{
				title: "Custom Automation Efficiency",
				body: "With our expertise in automating and tailoring workflow based on business structure, you can reduce manual processes, streamline complex processes, and enable data-driven decisions.",
			},
			{
				title: "Reduced In-house Workload",
				body: "Our dedicated Shopify Plus experts handle upgrades, bug fixes, and necessary optimizations allowing you to focus on growth opportunities.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Why Choose Us as Your Shopify Plus Support and",
		title: "Maintenance Service Provider",
		subtitle: "Icecube Digital is the top-rated Shopify Plus support and maintenance company focusing on enhancing the performance and customer experience.",
		items: [
			{
				icon: "/assets/icons/result.svg",
				title: "Proven Track Record",
				body: "Empowered 100+ Shopify stores globally across various business segments with 98% uptime.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Full-Stack Expertise",
				body: "Headless Hydrogen, ERP integrations, and PCI/GDPR compliance with Winter '25 updates",
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "AI-enabled Support & Maintenance",
				body: "Expertise in AI tools for proactive issue detection and implementing solutions in real-time.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Tailored Plans",
				body: "Custom plans that fulfill specific business needs and provide a smooth user experience.",
			},
			{
				icon: "/assets/icons/no-lock-in.svg",
				title: "Risk-Free Onboarding",
				body: "Get transparency, real-time tracking and no lock-in with free store audit",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Custom Solutions",
				body: "Tailored Shopify Plus support and maintenance services to optimize performance",
			},
			{
				icon: "/assets/icons/comment-list.svg",
				title: "Transparent Communication & Reporting",
				body: "Monthly performance dashboards and reports on tech fixes that align with your goals.",
			},
		],
	},

	processSteps: {
		eyebrow: "Process of Our Shopify Plus Support and",
		title: "Maintenance Services",
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
		steps: [
			{
				title: "Audit & Onboarding",
				body: "We conduct store audits to determine issues and create custom SLAs with specific plans.",
			},
			{
				title: "Proactive Monitoring",
				body: "Real-time store tracking, weekly health checks, and determining threats to prevent downtime.",
			},
			{
				title: "Resolution & Optimization",
				body: "Our experts resolve bugs, manage integrations, and conduct in-depth analysis to improve overall store performance and conversions.",
			},
			{
				title: "Reporting & Refinement",
				body: "Monthly dashboards with performance reviews and bug fixes to ensure enhanced scalability as your business grows",
			},
		],
	},

	cta: {
		text: "Optimize Store Performance and Enhance The User Experience With Our End-To-End Shopify Plus Support and Maintenance Services.",
		ctaLabel: "Contact Our Shopify Plus Experts Now",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	tablePricingPlans: {
		eyebrow: "Shopify Plus",
		title: "Maintenance Packages",
		btnArrow: BTN_ARROW,
		features: [
			"Monthly Retainer",
			"Support",
			"Bug Fixes",
			"Theme Updates",
			"App Integrations",
			"Speed Optimization",
			"SEO Improvements",
			"Backup & Security",
			"Performance Reports",
			"Custom Development",
			"Development Cost",
			"Account Manager",
		],
		plans: [
			{
				name: "Standard",
				price: "499",
				period: "month",
				ctaLabel: "Buy Now",
				ctaHref: "#",
				values: [
					"20 Hours",
					"Email Support",
					"Basic Fixes",
					"Quarterly",
					"Limited",
					"Basic",
					"Basic",
					"Weekly Backups",
					"Monthly",
					"3 Hour",
					"20% off",
					"Not Included",
				],
			},
			{
				name: "Premium",
				price: "999",
				period: "month",
				ctaLabel: "Buy Now",
				ctaHref: "#",
				values: [
					"40 Hours",
					"Priority Email & Chat Support",
					"Advanced Fixes",
					"Monthly",
					"Up to 5 Apps",
					"Advanced",
					"Advanced",
					"Daily Backups",
					"Bi-Weekly",
					"Up to 10 Hours",
					"30% off",
					"Personal Account Manager",
				],
			},
			{
				name: "Platinum",
				price: "2499",
				period: "month",
				ctaLabel: "Buy Now",
				ctaHref: "#",
				values: [
					"100 Hours",
					"24/7 Priority Support (Email, Chat & Call)",
					"Unlimited Fixes",
					"On Demand",
					"Unlimited",
					"Full Optimization",
					"Comprehensive",
					"Real-Time Backups",
					"Weekly",
					"Up to 20 Hour",
					"40% off",
					"Dedicated Account Manager",
				],
			},
		],
	},

	leftIconBoxSecondary: {
		eyebrow: "How To Hire",
		title: "Shopify Plus Experts",
		subtitle: [
			[
				"As the leading ",
				{ text: "Shopify e-commerce development company", href: "/shopify-development-services/" },
				", we have an easy and smooth process to connect and hire with our experts. Here's how you can share your requirements:",
			],
		],
		items: [
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Share Your Needs and Connect",
				body: "Define goals and list certifications, SLAs, and budget. Then schedule a consultation to determine the best fit.",
			},
			{
				icon: "/assets/icons/checklist.svg",
				title: "Verify Portfolio and Expertise",
				body: "Verify the portfolio and knowledge in the field to determine the expertise in optimizing store performance.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Select Support Plans",
				body: "We provide flexible and custom support plans with single point of contact to meet specific needs",
			},
			{
				icon: "/assets/icons/edit-board.svg",
				title: "NDA & Onboarding",
				body: "Our team helps you to define SLA, exit clauses, onboarding plans, and timelines to establish transparency.",
			},
		],
	},

	faq: {
		eyebrow: "Shopify Plus Maintenance",
		title: "FAQs",
		items: [
			{
				question: "Which services are covered by Shopify Plus support and maintenance?",
				answer: "Support and maintenance include updates, bug fixes, performance optimization, integration of all the apps, security monitoring, and continuous technical support of your Shopify Plus store.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How often should my Shopify Plus store be maintained?",
				answer: "Maintenance should be ongoing. We recommend continuous monitoring with regular weekly or monthly health checks, plus immediate attention around Shopify's quarterly updates. Proactive, scheduled maintenance prevents downtime, security issues, and performance drops far more effectively than occasional one-off fixes.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Will you streamline my Shopify Plus store?",
				answer: "Yes. We optimize theme code, apps, scripts, and integrations to improve speed and stability, and we automate repetitive workflows using Shopify Flow and the Script Editor. The result is a faster, leaner, more efficient store that's easier to manage and scales smoothly with your business.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Are you able to maintain the updates of apps and plugins?",
				answer: "Absolutely. We manage updates for your apps, themes, and integrations, testing each one to ensure compatibility — especially around Shopify's quarterly releases. This prevents broken functionality, security gaps, and conflicts, keeping your store running reliably.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Do you provide security monitoring of Shopify Plus stores?",
				answer: "Yes. Our security services include vulnerability scans, SSL enforcement, access controls, and proactive threat detection, along with automated backups for quick restoration. We help protect customer data and keep your store compliant with PCI and GDPR requirements.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can you assist with Shopify Plus theme customizations?",
				answer: "Yes. Our experts handle theme customizations of all kinds — from layout and design tweaks to custom sections, Liquid development, and checkout customization using Shopify Plus scripts — ensuring your store stays on-brand, functional, and conversion-focused.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Do you provide maintenance including SEO and analytics?",
				answer: "Yes. Our maintenance covers technical SEO fixes, structured data, and performance improvements that support rankings, along with analytics setup and monthly reporting. We track organic traffic, conversions, and Core Web Vitals so your store keeps improving over time.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What is the difference between the agency support and Shopify Plus support?",
				answer: "Shopify Plus support is the platform-level assistance Shopify provides for account and infrastructure issues. Agency support, like ours, is hands-on technical and strategic help — we handle development, bug fixes, customizations, integrations, optimization, and ongoing maintenance that Shopify's own support does not cover.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can your Shopify Plus support service scale with the expansion of our business?",
				answer: "Absolutely. Our plans are flexible and built to grow with you — whether you're adding stores, expanding into new markets with multi-currency and multi-language, increasing traffic, or introducing complex workflows. We scale resources, automation, and support coverage to match your needs at every stage.",
			},
		],
	},

	// common section: ./common/our-clients-section.js
	ourClients: ourClientsSection,

	// common section: components/home/WeServeSection.js ("Countries We Serve")
	weServe: true,

	// common section: ./common/ceo-cta-section.js
	ceoCta: ceoCtaSection,
};

export default ShopifyPlusSupport;
