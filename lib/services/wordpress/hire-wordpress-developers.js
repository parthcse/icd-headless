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
		heading: "Hire Wordpress Developers",
		paragraphs: [
			"Our expert WordPress Developers have been building ground breaking wordpress websites and portals for years. Starting from simple CMS websites to complex woocommerce stores and custom plugin development, We do it all with zeal and passion.",
			"You will work directly with developers building your project. We follow a unique development process — You will have full transparency with daily updates on the work progress being done at every stage of the project.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
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
		eyebrow: "Wordpress Certified Developers For Businesses",
		title: "Pushing The Limits",
		contentAlign: "center",
		paragraphs: [
			[
				"Over the years, Our wordpress certified developers have helped 100's of businesses to grow globally with our high performance wordpress websites. We utilise the world's most popular CMS to build awesome user friendly websites. Our wordpress experts for hire will work closely with your team to make your project successful at all levels. Our team has years of experience to assist you on any challenge you may encounter during your website development project. We do not just focus on delivering ground breaking web development solutions, We help to maintain your website and make sure that it generates sales for you. Our goal is to always deliver value to your business through our quality ",
				{ text: "wordpress development services", href: "/wordpress-development-services/" },
				".",
			],
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
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
				body: ["Our ", { text: "experienced Woocommerce developers", href: "/hire-woocommerce-developers-experts/" }, " has years of experience of custom development, implementation and support for Woocommerce based ecommerce websites for small and big businesses from around the world."],
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Hire Dedicated WordPress Developer",
				body: "Be it building an awesome new website from scratch or making changes to your existing website to provide it with a total fresh look and feel, Our skilled wordpress developers do it with 100% zeal and passion.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "WordPress Maintenance",
				body: ["Starting from answering your simple queries about wordpress admin operations to updating code and solving security related issues, Our team of experts will do it for you under our ", { text: "wordpress maintenance package", href: "/wordpress-maintenance-service/" }, "."],
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Why To Hire Wordpress",
		title: "Programmers From Us",
		items: [
			{
				icon: "/assets/icons/like.svg",
				title: "Unparallel Quality",
				body: "Being a leader in providing high performance wordpress development services, Icecube Digital delivers quality rich solutions",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Affordable Pricing",
				body: "We understand what it takes to run a business so we won't break your budget. We provide quality wordpress solutions at affordable price",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "24/7 Technical Support",
				body: "Our Experienced support team is available 24/7 to assist our customers with all their WordPress development problems",
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Professional Wordpress",
		title: "Developers For Hire",
		contentAlign: "center",
		paragraphs: [
			"We don't just develop beautiful wordpress websites; Our WordPress experts also provide our customers with consultation and advice on best business practices within our industry. Our websites are not just designed with users in mind — each project is responsive and SEO-friendly to assist with your search engine rankings. Our wordpress programmers and professional seo experts collaborate to deliver a user friendly and SEO optimized website for your business",
		],
	},

	imageText: {
		eyebrow: "Wordpress Experts -",
		title: "Your Reliable Partner",
		image: "/assets/photos/reliable-partner.jpg",
		imageAlt: "WordPress Experts - Your Reliable Partner",
		paragraphs: [
			[
				"Since its inception in 2008, Icecube Digital has been providing its valuable customers with scalable and robust wordpress development solutions at affordable cost. Today, Icecube Digital is recognized as the best WordPress development agency you can rely on for any of your WordPress design or development needs. ",
				{ text: "Hire wooCommerce experts", href: "https://www.icecubedigital.com/hire-woocommerce-developers-experts/" },
				" from our experienced team to build custom wooCommerce theme and plugin as per your unique business needs. Our team of WordPress Experts break down large blocks of project requirements into small chunks of modules to develop a project. We follow a step by step procedure to create a masterpiece to provide our valuable customers with the best return on their investment.",
			],
		],
	},

	imageTextSecondary: {
		eyebrow: "Hire Wordpress Designer",
		title: "To Wow Your Clients",
		image: "/assets/photos/wow-clients.jpg",
		imageAlt: "Hire WordPress Designer To Wow Your Clients",
		imagePosition: "right",
		paragraphs: [
			"We work to build trust rather just building wordpress websites. We follow a very effective and result driven approach for the success of every website design and development projects we work on. Our Certified web designers build creative website designs with the goal to provide your end users with the best digital experience while they visit your business website.",
			"Whether you are looking to build a new website from scratch or redesign your existing website in order to generate more sales, our experienced wordpress designers and developers will work together to build solution customized around your unique business needs.",
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
