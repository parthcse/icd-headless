const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WordPressMaintenance = {
	slug: "wordpress-maintenance-service",
	pageTitle: "WordPress Maintenance Service | Icecube Digital",
	metaDescription: "Keep your WordPress website secure, fast, and always up-to-date with Icecube Digital's expert WordPress maintenance services. 24/7 support, security monitoring, plugin updates, and more.",

	banner: {
		heading: "Professional WordPress Maintenance Service Provider",
		paragraphs: [
			"We, at Icecube Digital, are sure that you are not aware of the fact that WordPress is used by 43.2% of all the websites on the internet. Quite a big number, right? If your business website also runs on WordPress, you need a regular WordPress maintenance service.",
			"Regular maintenance service for your WordPress-based website ensures that it runs smoothly without glitches and delivers a rich user experience. Let our experts connect to you to get professional and top-notch quality maintenance service for your WordPress-based site.",
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
			"In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	leftIconBox: {
		eyebrow: "Top Benefits Of Hiring WordPress",
		title: "Maintenance Company",
		subtitles: [
			"Do you want to provide your customers with a secure and hassle-free experience? Do you want someone experienced who can take care of your WordPress website headaches? A regular WordPress website maintenance service can drastically reduce the time you spend on maintaining and crucial technical issues such as spam, hacks and errors. Timely maintenance and updates prevent your business website from being hacked and keep your customers' data safe with you.",
		],
		items: [
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Enhance Overall Website Security",
				body: "It is the priority of any business to keep its sensitive data safe and secure. For WordPress websites, mainly in healthcare, banking, finance, and eCommerce, it is even more important to get regular maintenance and support services like upgrading themes & plugins, versions, and core. Ensure you access our professional WordPress maintenance service and stay relaxed with complete security.",
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Run Your Website Faster, and Smoother",
				body: "Regular updates and maintenance of your WordPress website makes sure that your site remains up-to-date and works seamlessly. With regular website maintenance, find out and repair broken links, maintain SEO optimization, and ensure compatibility of plugins & themes. Considering all these aspects of your website will improve overall performance and visitors will spend more time on your website.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Improved SEO & Better Conversions",
				body: ["WordPress website maintenance services help you optimize your WordPress website's speed. As you know that Google considers page speed as the most important factor in ranking your website so regular maintenance will boost the overall speed of your site. Improving SEO and getting better conversions is the result of content, code, scripts, and database optimization. So, let our ", { text: "WordPress development services", href: "/wordpress-development-services" }, " and expert developers follow the proper optimization process to improve SEO and conversion rate."],
			},
			{
				icon: "/assets/icons/database.svg",
				title: "Regular and Accessible Backups",
				body: "We all know that backups are essential if your system undergoes many changes. Creating a regular and accessible backup of your WordPress website is considered a clone of your website that can be restored any time you want in case your latest changes backfire. We, at Icecube Digital, schedule backups of everything that is related to your website, resulting in preventing data from being lost.",
			},
		],
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialId: 24,
	},

	topIconBoxSecondary: {
		eyebrow: "What Do We Cover In WordPress",
		title: "Maintenance Plans",
		subtitles: [
			"Our WordPress developers are experienced in creating top-tier, secure, and scalable WordPress enterprise applications, whether an organization portal or a corporate website. Each website is built to align perfectly with your business goals. Let's take a closer look at each of the result-driven solutions provided by our WordPress VIP Designers and Developers.",
		],
		items: [
			{
				icon: "/assets/icons/rocket.svg",
				title: "Speed Optimization",
				body: "Icecube Digital has 14+ years of experience in delivering quality speed optimization service for your WordPress websites. No matter what type and size of WP site you have, don't get bothered by slow load time or Google's penalizes for poor technical performance. We ensure that your website loads in just a few seconds and improve your Core Web Vitals.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Security Fixup",
				body: "Our team of WordPress developers knows that protecting your website from hackers, monitoring overall health, and fixing bugs is a must to protect your website against hackers. Here, we consistently update ourselves on the latest security development and implements them on the website within all the plans.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Unlimited 24/7 Website Updates",
				body: "Our WordPress developers are here to keep your WordPress website updated with special expertise in WordPress maintenance services. Whether you want to back up your website, maintaining themes & plugins updated, or optimizing your database, we have got you covered. We provide a comprehensive range of WordPress maintenance and support services.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Plugins, Themes & Files Updates",
				body: "When it comes to updating your website plugins, themes, and files, we will not take a single chance. We will ensure that all the installed plugins, themes, and files are being updated as soon as new versions are released. Updating themes, plugins, and files is essential to secure your website against harmful Malware or hackers.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "24/7 Emergency Support",
				body: "What if your site faces any problem in the middle of the night? What if you are on vacation and your website gets hacked? Don't worry; you got our backs. Yes, our WordPress designers, developers, and consultants are here to offer 24/7 support and fix anything that comes in. Our team will be here to help and support you through email, call, and chat at your convenience.",
			},
			{
				icon: "/assets/icons/cloud.svg",
				title: "Core Files & Database Backup",
				body: "With hands-on experience in delivering a range of the best WordPress maintenance services, our team of WordPress developers will take regular backups of your core files and database to avoid any hindrance. Regular backups of files and databases are important in any case; if there is any rollback, you get the latest version of your files and data.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Uptime Monitoring",
				body: "What if your website gets inaccessible to your users, and you don't have any idea about this problem? Quite scary, isn't it? Well, let our WordPress developer team handles your website with utmost care. Through hosting, our team will control your website's up-time and update you on an immediate basis.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Mobile Responsive Testing",
				body: "Our team of Quality Analysts will check your website at each stage, whether it is about testing the website version or mobile responsive. We have an experienced team of quality analysts who will ensure that your WordPress website is responsive and running smoothly on the smartphone.",
			},
			{
				icon: "/assets/icons/detection.svg",
				title: "Malware Scan/Removal",
				body: "Running your website smoothly and without any glitches is the most thing in your business. To make this possible, our WordPress developers scan malware and identify breaches to prevent imminent attacks. In fact, our team keeps scanning your site for any malware to clean and remove it in just a minute.",
			},
		],
	},

	tableCompare: {
		eyebrow: "Our Maintenance And",
		title: "Support Plans",
		plans: [
			{
				name: "Pay-as-you-go Support Package",
				body: "We understand that paying a monthly fixed cost doesn't meet all business needs. This is why we provide a pay-as-you-go support package mainly designed for those website maintenance businesses who do not wish to commit to a monthly contract. With this package, you just need to simply pay for what you need and when you need it. For low-maintenance website needs, it is the perfect package that allows you to save money.",
				checklistItems: [
					"Hourly Rate",
					"A Dedicated Project Manager",
					"Around 24 hr Response Time",
				],
				ctaLabel: "Get a Free Quote",
				ctaHref: "#",
			},
			{
				name: "Monthly Support Package",
				body: "The monthly support package is mainly designed for businesses that have big websites and need constant support and update services. We will ensure that your website is always up to date with fresh content, products, services, and prices. Monthly support package offers:",
				checklistItems: [
					"Entire Project Management",
					"24/7 Website Monitoring",
					"Telephone Support",
					"Priority Response",
				],
				ctaLabel: "Get a Free Quote",
				ctaHref: "#",
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Us As Your WordPress",
		title: "Maintenance Company?",
		subtitle: "Icecube Digital is a leading WordPress maintenance agency, serving international clients worldwide. So far, our company has served over 500 happy clients, increasing their overall experience. Here, we will ensure to meet your WordPress technical needs, so here's why choosing us as your WordPress maintenance partner will prove the best decision.",
		benefitsLeft: [
			"14+ Years of Experience in the Industry",
			"24/7 Support From Technical Experts",
			"100% Transparency Throughout The Project",
		],
		benefitsRight: [
			"A Team of Professional and Skilled WordPress Developers",
			"Regular Project Updates",
			"Flexible Engagement Models",
		],
	},

	cta: {
		text: "Looking For Best WordPress Maintenance Package?",
		subtitle: "Icecube Digital delivers almost all types of website maintenance and support services to give a competitive edge to your competitors!",
		ctaLabel: "Discuss Your Needs Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "WordPress",
		title: "Maintenance FAQs",
		items: [
			{
				question: "What Is WordPress Maintenance?",
				answer: "WordPress maintenance is a set of steps that you need to undertake in order to keep your WordPress website optimized, secure, and running like a well-oiled machine. We offer well-organized WordPress maintenance plans for small to large-size businesses, covering core updates, plugin and theme management, security monitoring, performance optimization, and regular backups.",
			},
			{
				question: "What Is Usually Covered In Your WordPress Maintenance Contract?",
				answer: "Our WordPress maintenance contract covers core, plugin, and theme updates; security monitoring and malware scanning; regular backups; uptime monitoring; performance optimization; bug fixes; mobile responsiveness testing; and 24/7 emergency support. The exact scope depends on the plan you choose — pay-as-you-go or monthly.",
			},
			{
				question: "How Long Does It Take To Get The Changes Done After I Submit A Maintenance/Support Request?",
				answer: "For monthly maintenance plan clients, standard requests are addressed within 24–48 hours. For urgent or emergency issues, our team responds within a few hours. Pay-as-you-go clients receive a response time estimate with each ticket, typically within 24 hours.",
			},
			{
				question: "What If An Update Breaks Our Business Website?",
				answer: "Before applying any major updates, we always take a full backup of your website. If an update causes unexpected issues, we immediately roll back to the previous stable version to restore functionality. We then investigate the conflict, test fixes in a staging environment, and only push the resolution to your live site after thorough validation.",
			},
			{
				question: "Why Should I Hire IceCube Digital For My WordPress Website Maintenance?",
				answer: "Icecube Digital brings 14+ years of WordPress expertise, a dedicated team of certified developers, and a track record of 500+ successfully maintained websites. We offer transparent reporting, flexible plans, 24/7 support, and a proactive approach that catches and resolves issues before they impact your business — making us a reliable long-term partner for your WordPress website.",
			},
			{
				question: "Why is regular WordPress Maintenance important?",
				answer: "Regular WordPress maintenance keeps your website secure against vulnerabilities, improves page speed and performance, ensures plugin and theme compatibility, and prevents data loss. Without regular upkeep, outdated software becomes a target for hackers, and a neglected site can suffer downtime, broken functionality, and declining search rankings.",
			},
			{
				question: "How often should a WordPress website be updated?",
				answer: "WordPress core, plugins, and themes should be reviewed and updated at least once a month. Security patches should be applied as soon as they are released. With our maintenance plans, we handle all updates on a scheduled basis so your site is always running the latest, most secure versions.",
			},
			{
				question: "Will my website experience downtime during maintenance?",
				answer: "For most routine updates and maintenance tasks, there is no visible downtime. For more substantial work, we perform maintenance during off-peak hours and use staging environments to test changes before applying them to your live site. If any downtime is needed, we coordinate with you in advance.",
			},
			{
				question: "Can I handle WordPress Maintenance on my own?",
				answer: "Basic maintenance tasks like updating plugins or creating manual backups can be done by site owners. However, professional maintenance requires expertise in security hardening, performance optimization, database management, and conflict resolution. Without technical knowledge, DIY maintenance can inadvertently break your site or leave security gaps — which is why partnering with experts like Icecube Digital is the safer choice.",
			},
			{
				question: "How does your WordPress Maintenance Service improve site security?",
				answer: "We implement a multi-layered security approach: regular software updates to patch known vulnerabilities, malware scanning and removal, firewall configuration, login protection, activity log monitoring, and SSL certificate management. We also conduct security audits to identify and resolve weaknesses before attackers can exploit them.",
			},
			{
				question: "What if my website has already been hacked?",
				answer: "If your WordPress site has been compromised, our team acts immediately. We isolate the affected site, remove malware, restore from a clean backup, identify and close the vulnerability that was exploited, and implement hardened security measures to prevent future attacks. We also submit a reconsideration request to Google if your site was blacklisted.",
			},
			{
				question: "What kind of support do I get with your WordPress Maintenance Service?",
				answer: "All maintenance plans include email and ticket-based support. Monthly plan clients also receive phone support, priority response times, dedicated project management, and regular performance reports. For critical issues, our 24/7 emergency support line ensures you can always reach us when it matters most.",
			},
			{
				question: "How can I sign up for your WordPress Maintenance Services?",
				answer: "Getting started is simple — reach out to us via the contact form on this page, send us an email, or give us a call. Our team will assess your current WordPress setup, recommend the most suitable maintenance plan, and get you onboarded quickly so your site is protected from day one.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WordPressMaintenance;
