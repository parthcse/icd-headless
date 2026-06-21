const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WhiteLabelWordPressMaintenance = {
	slug: "white-label-wordpress-maintenance-services",
	pageTitle: "White Label WordPress Maintenance & Support Services | Icecube Digital",
	metaDescription: "Icecube Digital's white label WordPress maintenance and support services — 24/7 updates, security monitoring, backups, performance optimization, technical SEO, emergency support, and white-labeled reports — delivered under your agency's brand.",

	banner: {
		heading: "White Label WordPress Maintenance and Support Services",
		paragraphs: [
			"Your white-label WordPress sites need regular monthly maintenance and content updates to remain secure and efficient. Our white-label WordPress maintenance services are designed to help you manage these responsibilities easily and without any hassle. We provide white-label WordPress maintenance, support, and care services to your clients at a revolutionary price.",
			"Our team of WordPress experts is available 24/7 to help agencies with their white-label WordPress maintenance and support needs. As a leading white-label wordpress maintenance company, we offer agencies and B2B businesses ongoing white-label WordPress support and maintenance so they can benefit from limitless support under their brand.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Risk-Free White-Label Development Trial (5 Free Hours)",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	// Figma "Client Success Stories" / case-study section mapped to the standard portfolio component (fetched by postIds).
	portfolio: {
		eyebrow: "White Label WP Maintenance Services With",
		title: "Real Results",
		subtitle: [
			"Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements. In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI on marketing efforts with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		// TODO: replace with the real WordPress portfolio post IDs (The Red Shirt Guys, etc.)
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Case Studies",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: components/home/GetQuoteSection.js ("Let's Work Together")
	getQuote: true,

	plainText: {
		eyebrow: "Why Partner with a White Label WordPress",
		title: "Maintenance Company?",
		contentAlign: "center",
		paragraphs: [
			"As a digital agency manager, your brand's reputation is dependent on the reliability and consistent performance of the websites you create for your clients. The foundation of such consistency may be white-label WordPress support and maintenance services.",
			[
				"Partnering with a committed white label ",
				{ text: "wordpress development company in the USA", href: "/wordpress-development-services/" },
				" allows you to offer premium maintenance services using your brand, increasing customer satisfaction and trust without having to deal with the stress of managing the task yourself. The significant advantage includes up-to-date website functionality, security, and performance, which reflect positively on your agency's dedication to excellence.",
			],
			"Agencies choose a wordpress maintenance partner to provide technical support and regular maintenance for their thousands of websites. Our staff goes above and above to provide our clients with consistent revenue and profits with our WordPress white-label services, so you don't have to make any effort.",
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
		// Christian Marcello (COO at Werks Company, LLC) is available.
		testimonialId: 24,
	},

	topIconBox: {
		eyebrow: "Our AI-Optimized White Label WordPress",
		title: "Maintenance Solutions",
		subtitle: "Seeking skilled experts for stress-free WordPress support and maintenance? You have got it! Our team of professional wordpress white label maintenance service experts provides end-to-end, 24/7 white label WordPress maintenance services, including security solutions, plugin updates, and troubleshooting. Let us handle the hassle-free maintenance of your client's websites, where we offer all of your needs under one roof:",
		items: [
			{
				icon: "/assets/icons/processing.svg",
				title: "WordPress Core, Theme, and Plugin Updates",
				body: "Our team of experts safely manages all WordPress, theme, and plugin updates to keep your website safe and functional at all times. Your organization may now take on more projects than ever before due to these services."
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Security Monitoring & Malware Removal",
				body: "We set up a firewall to increase the security of your website and monitor for malware 24/7. We do vulnerability scanning, repair hacked websites, and remove malware once it is found. Our staff stays ahead of the most recent advancements in security and applies them to your website."
			},
			{
				icon: "/assets/icons/cloud-upload.svg",
				title: "Website Backups & Restore",
				body: "Backups are available even if your website is down. We provide everything from website transfer and local/cloud backups to uptime monitoring and backup restoration. Additionally, core file and database backups are customized to meet the demands of your clients."
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Performance Optimization",
				body: "Manage, monitor, and set up WordPress websites for your clients to maximize server-side speed and performance. We handle the cache and CDN configuration, as well as the full site cleanup. Also, we enhance the database on your website and provide a monthly report on our activities."
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Technical SEO Fixes",
				body: "Fix technical SEO issues to make sure all websites are running properly. We also set up and monitor tracking codes, as well as add titles and meta descriptions. Our wordpress maintenance white label experts also help you stay on top of the SEO game."
			},
			{
				icon: "/assets/icons/database.svg",
				title: "Database Cleanup & Spam Filtering",
				body: "Our WordPress maintenance services cover spam comment screening and removal, as well as the identification and removal of unused posts, plugins, and themes. To put it simply, we make every effort to maintain websites that are ready for sales conversions."
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Emergency Support & Troubleshooting",
				body: "Don't let small issues take down your clients' websites. Let our white-label WordPress maintenance team handle troubleshooting so you can focus on expanding your agency business. We identify and fix problems before they become major ones."
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "GIT Version Control & Automated Deployments",
				body: "Integrate the power of WordPress and Git. Our white-label WordPress experts guarantee smooth Git version control for all of your client's WordPress websites. Maintain track of all the changes you make and move them back if needed."
			},
			{
				icon: "/assets/icons/email.svg",
				title: "SMTP Setup & Form Testing",
				body: "Our team of WordPress website maintenance and support will ensure the functionality and compatibility of SMTP plugins. As your go-to white-label partner, we also test WordPress forms and offer recommendations and implementations for UI-UX enhancements."
			},
		],
	},

	infoBox: {
		eyebrow: "Smart Automation for WordPress Support and",
		title: "Maintenance Solutions",
		subtitle: "We offer WordPress support and maintenance for any website. We manage everything, from simple portfolio websites to fully functional ecommerce platforms. We support the following WordPress websites:",
		items: [
			{
				title: "CMS websites",
				body: "CMS websites is essential for managing your site's content. WordPress professional maintenance and support services allow businesses to handle their CMS (Dynamic) websites without the need for technical expertise. This is achieved through CMS website design, development, support, and maintenance services."
			},
			{
				title: "WooCommerce stores",
				body: [
					"Ensure your online business is constantly up and running smoothly. Our team has years of experience with e-commerce platforms, including WooCommerce. Our ",
					{ text: "woocommerce development services", href: "/woocommerce-development-services/" },
					" provide WordPress technical support to ensure the secure and effective operation of your online store.",
				]
			},
			{
				title: "Membership & LMS sites",
				body: [
					"WordPress membership and LMS sites may help universities and other educational institutions manage online courses, control access to resources, and automate student registration. Using third-party tools and ",
					{ text: "WP SEO services", href: "/wordpress-seo-service/" },
					", we create and arrange the course material and update and manage the integration over time.",
				]
			},
			{
				title: "ADA-compliant sites",
				body: "Your website must be ADA-compliant to ensure your online presence is accessible to everyone. WordPress professionals test the accessibility of your website and identify areas of improvement. It is achieved with the use of web accessibility assessment tools, manual audits, and frequent accessibility feature updates and monitoring."
			},
			{
				// NOTE: title is verbatim from Figma — appears to be a copy-paste error (body describes WordPress Multisite networks).
				title: "WooCommerce stores",
				body: "With WordPress Multisite maintenance services, you can manage several sites from a single dashboard, providing an attractive solution. WordPress support services use best practices when maintaining a WordPress Multisite network to ensure your websites run smoothly, have strong security, and perform well."
			},
			{
				title: "API-integrated platforms",
				body: "Integrating third-party APIs into WordPress improves the user experience and functionality of your website by building a connection with other services or data. CRM integration maintenance will automate processes, link to payment gateways and inventory systems, and add external data to content to enrich it."
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Why Is White Label WordPress Maintenance a",
		title: "Game-Changer For Digital Agencies?",
		contentAlign: "center",
		paragraphs: [
			"Effective WordPress maintenance protects your agency's websites, improves their performance, and preserves your clients' trust. The importance of wordpress white label maintenance service resides in its invisibility to your clients. Regular maintenance of your website can be a game changer when you manage multiple aspects of your client's digital presence, such as SEO, content management, and website design. Your clients enjoy a consistent experience and professional service while you profit from the extended offering you may provide without increasing your in-house effort.",
			"Are you prepared to expand the WordPress abilities of your agency? Contact us today to schedule a free consultation. This is your chance to investigate how our white-label WordPress support and maintenance services may complement the goals of your agency and improve workflow.",
		],
	},

	processSteps: {
		eyebrow: "How Our White Label WordPress Support",
		title: "Process Works",
		steps: [
			{
				title: "Book a free consultation",
				body: "The first step for the white-label agency is to understand the particular demands and requirements of the client's project or website."
			},
			{
				title: "Share website access",
				body: "A confirmation email detailing the frequency, extent, and pricing of the white-label WordPress maintenance services will be sent to you by our team."
			},
			{
				title: "Choose your custom plan",
				body: "Select the appropriate maintenance plan for your WordPress website by logging in online."
			},
			{
				title: "Launch the maintenance",
				body: "The finished website goes live under the agency's brand. Additionally, we will take care of regular maintenance tasks such as upgrades, security audits, performance tracking, and optimization."
			},
			{
				title: "Receive white-labeled weekly reports",
				body: "Every week, you receive customizable, white-labeled reports that summarize website updates."
			},
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	topIconBoxSecondary: {
		eyebrow: "Why Choose Us as Your White Label WordPress",
		title: "Maintenance Agency",
		subtitle: "Looking for the most trusted white-label website maintenance provider for your clients? We offer more than simply website maintenance. Depending on your client's requirements, we can manage, maintain, and update websites. No matter how small or large your WordPress projects or tasks are, you can rely on us as a white-label agency.",
		items: [
			{
				icon: "/assets/icons/award-badge.svg",
				title: "15+ Years of WordPress Expertise",
				body: "We can handle both small and large projects with equal skill because we have over 15 years of WordPress experience."
			},
			{
				icon: "/assets/icons/companies.svg",
				title: "1000+ Websites Managed",
				body: "We are a worldwide renowned top white-label WordPress agency that over 1,000 brands, including Alibaba, trust."
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Dedicated Account Manager",
				body: "As a single point of contact, our dedicated account manager helps maintain seamless communication, build customer trust, and offer specialized support."
			},
			{
				icon: "/assets/icons/logo-design.svg",
				title: "100% White-Label Branding",
				body: "Receive 100% white-label branding that allows your customers to submit their website with their branding and logo."
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Proven Systems & Processes",
				body: "We use proven systems and solutions to help businesses improve their professional image and streamline their processes."
			},
			{
				icon: "/assets/icons/hand-support.svg",
				title: "24/7 Support Availability",
				body: "Receive 24/7 expert WordPress support and maintenance that benefits you and your clients at a very low cost."
			},
		],
	},

	// Figma "Pricing" → ServicesTablePricingPlans.js (same package table as shopify-plus-support).
	tablePricingPlans: {
		eyebrow: "Flexible White Label WordPress Maintenance",
		title: "Plans For Agencies",
		subtitle: "The white-label wordpress maintenance plans are supplementary to the support plan. Additionally, we handle regular updates and maintenance of their websites with the maintenance service. However, contact us for an estimate if you would want to buy maintenance plans individually.",
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

	cta: {
		text: "Boost Your Agency's Efficiency With Our White Label WordPress Maintenance Services!",
		ctaLabel: "Partner With Us Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "White Label WordPress",
		title: "Maintenance FAQs",
		items: [
			{
				question: "Is white-label WordPress maintenance secure for my clients?",
				answer: "Yes, your clients can benefit greatly from white-label WordPress maintenance services. Comprehensive security measures, such as routine security scans, malware detection, as well as proactive security updates, are provided by numerous reputable white-label providers.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can I resell white-label WordPress support services under my brand?",
				answer: "Yes. Everything is delivered 100% under your brand — including reports and communication — so you can resell our WordPress maintenance and support as your agency's own service while we stay invisible.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How is white-label WordPress maintenance different from regular support?",
				answer: "Regular support may expose the provider to your client, whereas white-label maintenance is delivered entirely under your brand. We handle the technical work behind the scenes so your clients only ever see your agency.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can I customize white-label WordPress maintenance services for my clients?",
				answer: "Yes. We tailor plans and scope to each client's needs — from updates and security to performance, SEO fixes, and custom development — so the service fits exactly what you and your clients require.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Are WooCommerce stores supported under white-label WordPress maintenance?",
				answer: "Yes. We have extensive WooCommerce experience and provide technical support, updates, security, and performance optimization to keep your clients' online stores running smoothly and securely.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can I switch my current maintenance clients to a white-label partner?",
				answer: "Absolutely. We handle smooth onboarding and migration of your existing maintenance clients, integrating their sites into our white-label workflow without disruption to your service.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What WordPress Maintenance Activities do you perform?",
				answer: "We perform core/theme/plugin updates, security monitoring and malware removal, backups and restore, performance optimization, technical SEO fixes, database cleanup, emergency troubleshooting, Git version control, and SMTP/form testing.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What WordPress Security & Hosting Activities do you perform?",
				answer: "We set up firewalls, run 24/7 malware monitoring and vulnerability scans, repair hacked sites, manage SSL and secure configurations, and handle backups, uptime monitoring, and hosting-related maintenance.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can I Customize My WordPress Maintenance Plans?",
				answer: "Yes. Beyond our Standard, Premium, and Platinum plans, we offer custom plans scaled to your client's hours, services, and priorities. Contact us for a tailored estimate.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Do Your WordPress Maintenance Plans Include Security Monitoring?",
				answer: "Yes. All plans include security monitoring, with more advanced protection, malware removal, and backup frequency on higher tiers to keep your clients' sites secure.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can You Handle Plugin and Theme Updates with Your WordPress Maintenance Plans?",
				answer: "Yes. We safely manage WordPress core, theme, and plugin updates — testing for compatibility and stability — so your clients' sites stay current, secure, and fully functional.",
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

export default WhiteLabelWordPressMaintenance;
