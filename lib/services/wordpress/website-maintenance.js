const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const WebsiteMaintenanceService = {
	slug: "website-maintenance-service",
	pageTitle: "eCommerce Website Maintenance Services | Magento, WordPress & Shopify",
	metaDescription: "Icecube Digital provides complete eCommerce website maintenance services including Magento, WordPress, and Shopify. Learn more about maintenance packages.",

	banner: {
		heading: "Website Maintenance Service To Deliver Delight Experience",
		paragraphs: [
			"Do you know that your business website needs regular maintenance and updates to make it work productively? Around 70% of your regular customers know about your company through your website, so keeping it safe and smooth is the need of the hour.",
			"Considering your needs for website maintenance, we at Icecube Digital are serving complete website maintenance services, helping thousands of businesses across the world improve overall performance and security.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
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
		postIds: [40954, 40968, 40927],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	leftIconBox: {
		eyebrow: "Why Is Website Maintenance Very Important",
		title: "For Your Business?",
		subtitle: [
			"Don’t you want to provide a secure experience to your customers? Don’t you want to make them feel that their data is in safe hands? Then, a regular website maintenance service is a must to provide the most reliable security solution. Timely maintenance and updates prevent your business website from being hacked and keep your customers’ data safe with you.",
		],
		items: [
			{
				icon: "/assets/icons/speed.svg",
				title: "Lightning Speed",
				body: "Who doesn’t prefer to have a lightning-speed website that runs quickly and smoothly? Almost all businesses worldwide prefer having a business website that opens in a flash. But how is it possible? Through website maintenance plans, make your website open quickly to improve your customers’ overall performance and online presence.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Keep Your Products/Services Updated",
				body: "With growing products & services and changing prices, it is a must for you to get website maintenance and support services for updating products, modifying existing prices, and content. With maintenance packages, keep your company’s website updated and deliver the newest products, services, and prices to maintain the users’ shopping experience.",
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Enhance Overall Visitors’ Experience",
				body: "Do you know that your website is the face of your brand? It will be the first impression your website visitors will have of your business; therefore, it is a must that your visitors and your customers get a never forgetting experience. Your website must meet your viewer’s expectations. So, regularly examine and update your website to stay ahead in this competitive online market.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "24/7 Tracking",
				body: "In any case, if your website gets down for a few minutes, then your business sales get affected hugely. Whether it is for a few minutes or hours, you will lose lots of customers who will never come back to your site. To prevent such issues, consulting a professional website maintenance company is a must to monitor your website 24/7. Such maintenance and support services bring your website in the best working condition in just a few minutes.",
			},
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "laura-degraff",
	},

	topIconBox: {
		eyebrow: "Key Website Maintenance",
		title: "Service We Offer",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/shopping.svg",
				title: "eCommerce Website Maintenance Services",
				body: "No matter how big or small your eCommerce website is, we, at Icecube Digital, are dedicated to delivering the best quality eCommerce website maintenance services that give your customers a delightful shopping experience. We make sure to perform daily monitoring of your website to prevent downtime and security issues.",
			},
			{
				icon: "/assets/icons/magento.svg",
				title: "Magento Maintenance Service",
				body: [
					"Irrespective of the size and type of your Magento website, we deliver a highly optimized Magento website maintenance and support service at Icecube Digital. To keep your online store updated, our team of ",
					{ text: "Magento developers", href: "/hire-magento-2-developers-programmers/" },
					" ensures that your website doesn’t have any issues or bugs. With constant monitoring and customer support, we bring more value to your business.",
				],
			},
			{
				icon: "/assets/icons/wordpress.svg",
				title: "WordPress Maintenance Service",
				body: [
					"Our WordPress developers are here to keep your WordPress website updated with special expertise in ",
					{ text: "WordPress maintenance services", href: "/wordpress-maintenance-service/" },
					". Whether you want to back up your website, maintaining themes & plugins updated, or optimizing your database, we have got you covered. We provide a comprehensive range of WordPress maintenance and support services.",
				],
			},
			{
				icon: "/assets/icons/shopify.svg",
				title: "Shopify Maintenance Service",
				body: "Do you want your Shopify store to run smoothly and effectively? Icecube Digital is well-known for providing all types of maintenance services, including monitoring for downtime, scanning for security malware, updates to 3rd party themes, review checkout process, and more. So, what are you waiting for? Just your needs TODAY!",
			},
			{
				icon: "/assets/icons/woocommerce.svg",
				title: "WooCommerce Maintenance Service",
				body: "No need to bother about your website’s health, security, and performance as we, at Icecube Digital, understand your needs and deliver the best quality maintenance services. WooCommerce maintenance service takes care of your website’s update, monitoring, and reporting. Get an improved website speed and overall rich performance with us.",
			},
		],
	},

	checkList: {
		eyebrow: "What You Get In Website Maintenance",
		title: "Service Packages",
		subtitle: "When your company or business website accesses our website maintenance service packages, it gets access to many services. We help all types of businesses in order to keep their website consistent for updating products, services, and prices. What our website maintenance service packages include:",
		benefitsLeft: [
			"Ensure website safety and security",
			"Review overall server performance",
			"Google analytics integration",
			"Crawling and indexing errors",
			"Domain hosting and management support",
			"Up-gradation of your CMS and plugins",
			"DNS management assistance",
		],
		benefitsRight: [
			"Website speed optimization",
			"SSL installation",
			"Database optimization",
			"Troubleshooting DB error",
			"Implementing A/B testing",
			"Monthly & quarterly website performance report",
			"Overall website improvement",
		],
	},

	tableCompare: {
		eyebrow: "Our Maintenance And",
		title: "Support Plans",
		plans: [
			{
				name: "Pay-as-you-go Support Package",
				body: "We understand that paying a monthly fixed cost doesn’t meet all business needs. This is why we provide a pay-as-you-go support package mainly designed for those website maintenance businesses who do not wish to commit to a monthly contract. With this package, you just need to simply pay for what you need and when you need it. For low-maintenance website needs, it is the perfect package that allows you to save money.",
				checklistItems: [
					"Hourly Rate",
					"A Dedicated Project Manager",
					"Around 24 hr Response Time",
				],
				ctaLabel: "Get a Free Quote",
				ctaHref: "popup",
			},
			{
				name: "Monthly Support Package",
				body: "The monthly support package is mainly designed for businesses that have big websites and need constant support and update services. We will ensure that your website is always up to date with fresh content, products, services, and prices. Monthly support package offers:",
				checklistItems: [
					"Around 24 hr Response Time",
					"24/7 Website Monitoring",
					"Telephone Support",
					"Priority Response",
				],
				ctaLabel: "Get a Free Quote",
				ctaHref: "popup",
			},
		],
	},

	imageText: {
		eyebrow: "Why Work With Icecube Digital For Website",
		title: "Maintenance Service?",
		image: "/assets/photos/wms-why-work-with.png",
		imageAlt: "Why work with Icecube Digital for website maintenance service",
		paragraphs: [
			"Let our website maintenance experts at Icecube Digital review your website performance, backups, security settings, user experience and solve all your queries, making your website run faster and smoother. Here are the reasons to work with Icecube Digital for the website maintenance and support services:",
		],
		checklistItems: [
			"Your Trusted Partner For Website Maintenance Services",
			"14+ Years of Experience in Website Maintenance & Support Services",
			"Client-Centric Approach",
			"Reliable Exclusive website maintenance and Support Service",
			"Served 500+ Clients Worldwide",
			"100% Transparency Throughout The Project",
		],
	},

	cta: {
		text: "Does Your Business Website Need Any Other Maintenance Service?",
		subtitle: "Icecube Digital delivers almost all types of website maintenance and support services to give a competitive edge to your competitors!",
		ctaLabel: "Discuss your needs today!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Website",
		title: "Maintenance FAQs",
		items: [
			{
				question: "What is a website maintenance service?",
				answer: "Website management service is the professional touch to ensure the website is up-to-date and the security is intact. Most of the website maintenance packages are monthly or hourly basis plans, however, you can ask for 24 X 7 plan for the maintenance.",
			},
			{
				question: "Why is website maintenance required?",
				answer: "Website maintenance is a crucial ongoing task for the website. Here are a few reasons why it is required.",
				answerList: [
					[{ bold: "Smooth running:" }, " Maintenance ensures the smooth running of the website, and also contains the updated information about the product."],
					[{ bold: "Redirecting:" }, " One of the critical roles that it delivers is ensuring that redirection is taking place. It ensures the link is taking you to the correct web page."],
					[{ bold: "Security:" }, " The protection of the website is the highest priority task that it takes care of. With the evolution of cyber threats, the periodic maintenance of a website ensures the website has very low vulnerabilities left."],
				],
			},
			{
				question: "How much does website maintenance cost?",
				answer: "There is no specific answer to this question as the cost estimation completely varies depending on various business factors. Provider’s location, site needs, and technology used are some of the factors that will drive the cost. Usually, the maintenance services start from $35 / month and can go up to $5000 / month.",
			},
			{
				question: "How much time is required for website maintenance?",
				answer: "Website maintenance is a never-ending task. With the continuous evolution of the web, new standards are adopted and vulnerabilities are exposed.",
			},
			{
				question: "How will the communication take place while working?",
				answer: "For website maintenance services with us, you will get an account manager as your Point of Contact(POC) who will convey all the requirements and solutions to you and our team.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuoteSecondary: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WebsiteMaintenanceService;
