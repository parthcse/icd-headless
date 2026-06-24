const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

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
		subtitle: "Take a look at our portfolio to see the diverse range of projects we've completed. From creative designs to powerful WordPress sites, we bring innovation to life. Each project reflects our commitment to excellence and client satisfaction, showcasing unique solutions tailored to individual business goals.",
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
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
		testimonialSlug: "christian-marcello",
	},

	topIconBox: {
		eyebrow: "Reliable Team Of",
		title: "Wordpress Developers",
		columns: 4,
		items: [
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Hire Wordpress Expert",
				body: "Our expert wordpress developers have been delivering robust and unmatched wordpress development services for more than 14 years. We follow a simple yet highly effective methodology for all the web development projects we take up.",
			},
			{
				icon: "/assets/icons/woocommerce-dev.svg",
				title: "Hire Woocommerce Developer",
				body: "Our experienced Woocommerce developers has years of experience of custom development, implementation and support for Woocommerce based ecommerce websites for small and big businesses from around the world.",
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Hire Dedicated WordPress Developer",
				body: "Be it building an awesome new website from scratch or making changes to your existing website to provide it with a total fresh look and feel, Our skilled wordpress developers do it with 100% zeal and passion.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "WordPress Maintenance",
				body: "Starting from answering your simple queries about wordpress admin operations to updating code and solving security related issues, Our team of experts will do it for you under our wordpress maintenance package.",
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
				question: "How long does it take to build a wordpress website?",
				answer: "It can take between a few weeks to a few months, depending on the level of complexity and customization required to achieve your business goals.",
			},
			{
				question: "How do I know the project progress?",
				answer: "We follow a transparent development process and provide daily updates on all ongoing work. You will have direct access to the developers working on your project and can track progress at every stage through regular reports and communication channels.",
			},
			{
				question: "Will you guide me on how to manage and use my wordpress website?",
				answer: "Absolutely. Once your website is ready, our team will walk you through the WordPress dashboard and provide guidance on how to manage content, update pages, and handle day-to-day operations. We ensure you feel confident managing your website independently.",
			},
			{
				question: "How do you ensure security of website?",
				answer: "We implement industry-standard security best practices throughout development, including SSL configuration, secure code review, regular vulnerability scans, and protection against common threats like brute force attacks and SQL injection. We also offer ongoing maintenance packages that include security monitoring.",
			},
			{
				question: "How can I build eCommerce website using wordpress?",
				answer: "WordPress combined with WooCommerce is one of the most powerful eCommerce platforms available. Our developers can build a fully custom WooCommerce store tailored to your business — from product setup and payment gateway integration to shipping rules, inventory management, and custom checkout flows.",
			},
			{
				question: "Why should i hire wordpress developers from Icecube Digital?",
				answer: "Icecube Digital has over 14 years of WordPress development experience serving businesses globally. Our team brings unparalleled quality, transparent communication, affordable pricing, and 24/7 technical support. We've delivered hundreds of successful projects and are recognized as a leading WordPress development agency.",
			},
			{
				question: "What is responsive wordpress website development?",
				answer: "Responsive WordPress development means building websites that automatically adapt their layout and design to fit any screen size — desktop, tablet, or mobile. All websites we build are fully responsive and mobile-optimized, ensuring a seamless user experience across all devices.",
			},
			{
				question: "Do you sign an NDA for privacy of our eCommerce project?",
				answer: "Yes, we take the confidentiality of your project very seriously. We are happy to sign a Non-Disclosure Agreement (NDA) before the start of any project to ensure your business ideas, data, and sensitive information remain fully protected.",
			},
			{
				question: "Who will be my point of contact during project tenure?",
				answer: "You will be assigned a dedicated project manager who will serve as your primary point of contact throughout the entire project. They will coordinate with the development team, provide regular updates, and ensure all your requirements are met on time.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default HireWordPressDevelopers;
