const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const HireWordPressDevelopers = {
	slug: "hire-wordpress-developers-designers",
	pageTitle: "Hire WordPress Developers & Designers | Icecube Digital",
	metaDescription: "Hire expert WordPress developers and designers from Icecube Digital. 14+ years of experience building high-performance WordPress websites, WooCommerce stores, and custom plugins for businesses worldwide.",

	banner: {
		heading: "Hire WordPress Developers & Designers",
		paragraphs: [
			"Hire dedicated WordPress developers and designers from Icecube Digital to build, customize, migrate, and scale fast, secure, SEO-ready sites. Engage hourly, monthly, or fixed-price with an NDA from day one, with full IP ownership. Our team has shipped 500+ websites since 2008, with live results like +236% organic traffic and +191% revenue for WordPress/WooCommerce clients. Tell us your scope and get a developer profile and proposal within 24 business hours.",
		],
		checklistItems: [
			"Hire Dedicated WordPress Developers & Designers",
			"Hourly, Monthly & Fixed Cost Hiring",
			"Gutenberg & Headless WordPress",
			"NDA & IP Protection",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free WordPress Store Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [40941, 40927, 40956],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "What Does a WordPress",
		title: "Developer Do?",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "A WordPress developer builds, customizes, and maintains websites on WordPress, the CMS that powers over 40% of all websites. On a day-to-day basis, this role involves custom theme and Gutenberg block development, plugin development, creating WooCommerce stores, integrating third-party services and REST/GraphQL APIs, optimizing performance and Core Web Vitals, implementing security hardening, managing migrations, and building headless WordPress sites. A front-end developer focuses on design, templates, and responsiveness; a back-end developer handles PHP, the database, hooks, and integrations; a full-stack WordPress developer does both." },
		],
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "changiz-oskouiefar",
	},

	topIconBox: {
		eyebrow: "Reliable Team Of",
		title: "Wordpress Developers",
		columns: 4,
		items: [
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Hire Wordpress Expert",
				body: ["Our expert wordpress developers have been delivering robust and unmatched ", { text: "wordpress development services", href: "/wordpress-development-services/" }, " for more than 14 years. We follow a simple yet highly effective methodology for all the web development projects we take up."],
			},
			{
				icon: "/assets/icons/woocommerce-dev.svg",
				title: "Hire Woocommerce Developer",
				body: ["Our ", { text: "experienced Woocommerce developers", href: "/hire-woocommerce-developers-experts/" }, " have years of experience of custom development, implementation and support for Woocommerce based ecommerce websites for small and big businesses from around the world."],
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Hire Experienced WordPress Developers",
				body: "Build new WordPress websites, redesign existing sites, develop custom plugins, improve performance, and scale WooCommerce stores with dedicated WordPress developers.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "WordPress Maintenance",
				body: ["Starting from answering your simple queries about wordpress admin operations to updating code and solving security related issues, Our team of experts will do it for you under our ", { text: "wordpress maintenance package", href: "/wordpress-maintenance-service/" }, "."],
			},
		],
	},

	tableBasic: {
		eyebrow: "Flexible Ways to Hire",
		title: "WordPress Developers",
		subtitle:
			"Choose the model that fits your scope, budget, and timeline. Every engagement includes a signed NDA, full source code and IP ownership, a dedicated point of contact, time tracking, and weekly progress reports.",
		columns: ["Model", "Best for", "Commitment", "Includes"],
		boldColumns: [0],
		colWidths: ["25%", "25%", "25%", "25%"],
		rows: [
			["Hourly", "Fixes, audits, small features", "From 4 hrs", "Time-tracked, pay-as-you-go"],
			["Monthly (dedicated developer)", "Ongoing roadmaps", "60 hrs/mo, 3 hrs/day", "NDA + IP, PM, weekly reports"],
			["Dedicated team", "New builds, replatforms, WooCommerce", "Scalable squad", "Designer + devs + QA, agile sprints"],
			["Fixed-price (project)", "Defined scope", "Per milestone", "Cost, timeline, guaranteed deliverables"],
		],
		note: "WordPress developer rates generally range from $25-$150/hour depending on experience, project complexity, and engagement model. Dedicated monthly hiring is usually the most cost-effective option for long-term projects.",
	},

	processSteps: {
		eyebrow: "Hire A WordPress Developer",
		title: "In 3 Steps",
		steps: [
			{
				title: "Tell us what you need",
				body: "Share your scope and goals on a quick call; we confirm the skillset and engagement model.",
			},
			{
				title: "Interview & pick your developer",
				body: "Review 1-3 matched profiles, interview them, and sign the NDA before any work begins.",
			},
			{
				title: "Onboard in 24 hours",
				body: "Your developer starts in your time zone with a dedicated PM, shared board (Jira/Trello/Slack), and weekly demos.",
			},
		],
	},

	checkList: {
		eyebrow: "Build on the Modern",
		title: "WordPress Stack",
		subtitle: "We don’t just install themes; we build the way WordPress works in 2026:",
		benefitsLeft: [
			[{ bold: "Gutenberg & Full Site Editing:" }, " Custom, reusable blocks (built with React) so your team edits pages without breaking design."],
			[{ bold: "ACF & Elementor:" }, " Structured content and flexible page building for non-technical editors."],
			[{ bold: "Headless WordPress:" }, " Decoupled front ends in React, Next.js, or Vue via the REST API and WPGraphQL for app-like speed and security."],
		],
		benefitsRight: [
			[{ bold: "Core Web Vitals & speed:" }, " Caching (Redis/Varnish), image and query optimization, and CDN setup to pass Google’s page-experience signals."],
			[{ bold: "WooCommerce:" }, " Custom stores, payment gateways, subscriptions, and optimized checkout."],
			[{ bold: "Security & maintenance:" }, " SSL, hardening, malware scanning, and managed updates."],
		],
	},

	infoBox: {
		eyebrow: "Why Hire WordPress Developers from",
		title: "Icecube Digital?",
		items: [
			{
				title: "Proven outcomes, not promises",
				body: "Live results include +236% organic traffic and +191% revenue (Stompers Gloves) and +122% organic users (Jelani Travel).",
			},
			{
				title: "Top-rated",
				body: "5.0 on Clutch, 5.0 on Glassdoor, 4.9 on GoodFirms, 4.8 on Google.",
			},
			{
				title: "Senior, vetted engineers",
				body: "8+ years average WordPress experience; front-end, back-end, and WooCommerce specialists.",
			},
			{
				title: "Transparent engagement",
				body: "Hourly, monthly, dedicated-team, or fixed-price; NDA + full IP from day one; weekly reporting.",
			},
			{
				title: "Modern stack",
				body: "Gutenberg/FSE, ACF, Elementor, headless, and Core Web Vitals optimization.",
			},
			{
				title: "In business since 2008",
				body: "500+ websites delivered for clients across the US, UK, EU, Canada, Australia, and the Middle East.",
			},
		],
	},

	imageText: {
		eyebrow: "Hire WordPress Designers,",
		title: "Not Just Developers",
		image: "/assets/photos/wow-clients.jpg",
		imageAlt: "Hire WordPress Designers, Not Just Developers",
		paragraphs: [
			"Our designers and developers work as one team: UX wireframes, custom responsive design, brand-aligned themes, and conversion-focused layouts handed straight to developers who build them pixel-accurately in Gutenberg or a custom theme. Whether it’s a new build or a redesign of an existing site, you get design and development under one roof.",
		],
	},

	checkListSecondary: {
		eyebrow: "The WordPress Tech Stack",
		title: "Our Developers Use",
		benefitsLeft: [
			[{ bold: "Core:" }, " WordPress, PHP 8.x, MySQL/MariaDB, custom post types & taxonomies, WordPress hooks/filters, WP-CLI, Composer."],
			[{ bold: "Front end & headless:" }, " Gutenberg Block API, Full Site Editing, ACF, Elementor, HTML5/CSS3, JavaScript (ES6+), React, Next.js, Vue.js, REST API, WPGraphQL."],
			[{ bold: "eCommerce:" }, " WooCommerce, Subscriptions, Memberships, payment gateways."],
		],
		benefitsRight: [
			[{ bold: "Performance & security:" }, " Redis/Varnish/Memcached, lazy loading, query optimization, CDN (Cloudflare), SSL/TLS, 2FA, Wordfence/malware protection."],
			[{ bold: "DevOps & QA:" }, " Git/GitHub, CI/CD, Docker, staging→production with rollback, PHPUnit/Cypress testing."],
			[{ bold: "SEO:" }, " Yoast / Rank Math, schema, Core Web Vitals tuning."],
		],
	},

	faq: {
		eyebrow: "Hire WordPress",
		title: "Developers FAQs",
		items: [
			{
				question: "How much does it cost to hire a WordPress developer?",
				answer: "Rates generally run $25–$150/hour (up to $250 for senior US developers) by seniority, location, and scope; monthly dedicated and fixed-price models are more cost-efficient for ongoing work. We send an exact quote within 24 business hours.",
			},
			{
				question: "Can I hire a dedicated WordPress developer hourly, monthly, or per project?",
				answer: "Yes — hourly, monthly dedicated (30 hrs/mo), full dedicated team, or fixed-price per milestone. Scale up or down between sprints.",
			},
			{
				question: "How fast can a WordPress developer start?",
				answer: "Matched developer profiles within 24 hours; onboarding typically within 2-3 business days of NDA signing.",
			},
			{
				question: "Do you build headless WordPress and custom Gutenberg blocks?",
				answer: "Yes — headless front ends in React/Next.js/Vue via REST API and WPGraphQL, plus custom Gutenberg blocks and Full Site Editing.",
			},
			{
				question: "How long does it take to build a WordPress website?",
				answer: "A basic site usually takes 2–4 weeks; complex or custom builds 6–10 weeks or more, depending on design, features, and integrations.",
			},
			{
				question: "Will I lose SEO or data when migrating to WordPress?",
				answer: "No. We preserve URLs, redirects, metadata, and content during migration, and optimize Core Web Vitals so rankings improve rather than drop.",
			},
			{
				question: "Do you sign an NDA for privacy of our eCommerce project?",
				answer: "Yes, We really take privacy of data seriously. We would be more than happy to sign NDA and confidentiality agreement before you share your project details with us",
			},
			{
				question: "What's the difference between a WordPress developer and a designer?",
				answer: "A designer creates the look, UX, and brand experience; a developer builds it in code (themes, blocks, plugins, integrations). We provide both.",
			},
			{
				question: "Do you offer post-launch support and maintenance?",
				answer: "Yes — updates, security monitoring, backups, and fixes under optional monthly maintenance plans.",
			},
			{
				question: "Why should i hire wordpress developers from Icecube Digital?",
				answer: "We are a certified WordPress development agency with 14+ years experience in building groundbreaking websites and portals with WordPress platform. Customer satisfaction is the end goal of everything that we do. Don’t worry, You are in safe hands",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default HireWordPressDevelopers;
