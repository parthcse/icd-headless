const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const CodeigniterDevelopmentServices = {
	slug: "codeigniter-development-services",
	pageTitle: "CodeIgniter Development Company | CodeIgniter Development Services",
	metaDescription: "A CodeIgniter development company that provides top-notch CodeIgniter development services. Hire CodeIgniter Experts to build powerful and robust website.",

	banner: {
		heading: "Codeigniter Development Company",
		paragraphs: [
			"Known for its simplicity and performance, Codeigniter applications are easier to build and maintain. This makes it one of the favorite frameworks of PHP developers. As a Codeigniter web development company, we build dynamic applications that enable clients to witness the transformation in their business. Our Codeigniter developers deliver high-quality web development solutions that ensure speed, feature-richness, and high performance. Our Codeigniter applications are built with result orientation that consists of multiple features.",
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
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [40909, 40903, 40882],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Custom Codeigniter",
		title: "Development Company",
		contentAlign: "center",
		paragraphs: [
			"Do you need a fully-functional and dynamic website and web application for your business? Codeigniter is the most advanced and powerful PHP framework that is mainly developed for businesses that need a simple toolkit to develop feature-rich web apps and websites.",
			[
				"Being a trusted name in the custom Codeigniter web development company, Icecube Digital is mainly known for ",
				{ text: "custom PHP development services", href: "/custom-php-development-services/" },
				" like customization services, web development, eCommerce Codeigniter website development services, migration services, and more. Having an experienced team of Codeigniter developers, we take utmost care of security with built-in protection against CSRF and XSS attacks.",
			],
			"As we have expertise working with different business verticals, we are here to bring you complete peace of mind while handling your project with care. Got a project to discuss?",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	leftIconBox: {
		eyebrow: "Key Advantages of the",
		title: "Codeigniter Framework",
		items: [
			{
				icon: "/assets/icons/detection.svg",
				title: "Capability to Handle Errors",
				body: "Codeigniter framework can handle different errors. If you are looking to develop websites with exceptional functionality and rich user experience, then Codeigniter is the answer to your question. With a simple user interface, our team of developers helps you find errors or bugs without any hassle to deliver a rich user experience to your website visitors. Let us know if you are looking for a professional Codeigniter team.",
			},
			{
				icon: "/assets/icons/cloud-check.svg",
				title: "Trouble-Free Migration",
				body: "Another key benefit Codeigniter offers is hassle-free migration from one server to another. Different companies worldwide rely on Codeigniter just because of smooth migration support services. It doesn’t matter where your old data was saved; it is always possible to shift to this platform with the help of a professional Codeigniter web development company. With an experienced team of Codeigniter developers, we can easily handle your migration requirements.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Flexibility",
				body: "Codeigniter is highly flexible and can be used for small websites or large high-traffic portals and other web application development projects required by large organizations. Irrespective of the website type and size, Codeigniter is the best and most modern framework for adaptive websites. Using advanced web technologies like HTML5, PHP7, CSS3, Bootstrap 4, and jQuery, our experts develop any type of web application and website.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "High-Performance",
				body: "Codeigniter helps to build advanced and high-performance web applications with easy-to-use interfaces. It is best suited for small and medium businesses that require a highly efficient and robust framework to handle growing business websites. It can be easily scaled up as well for high-traffic portals of large enterprises. It’s a powerful PHP-based MVC framework that helps our skilled developers reach their goals even faster.",
			},
		],
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "melissa-a-marti",
	},

	leftIconBoxSecondary: {
		eyebrow: "Our Codeigniter",
		title: "Development Expertise",
		items: [
			{
				icon: "/assets/icons/rocket.svg",
				title: "App Upgradation",
				body: "To make your web apps run smoothly and securely, we upgrade your applications with the latest versions. We will make utmost use of new features to deliver high-performance apps.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "Third-party Integration",
				body: "Do you want to expand the core functionality of your existing application? We are experts in seamless Codeigniter third-party integration, extending the functionality of your app and website.",
			},
			{
				icon: "/assets/icons/database.svg",
				title: "Custom Library",
				body: "Get in touch with our professional Codeigniter experts and create a custom library based on global needs. Simplify complex needs and functionality with a custom library.",
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "Payment Integration",
				body: "Codeigniter is the best framework that allows simple and secure payment integration, allowing your customers to get a secure payment experience.",
			},
		],
	},

	topIconBox: {
		eyebrow: "Varied Codeigniter Web Development",
		title: "Services We Offer",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/web.svg",
				title: "Codeigniter Web Development",
				body: "We have a skilled team of Codeigniter developers who will comprehend your requirements and help you to transform your business value into database-driven web apps and websites to meet your dynamic requirements.",
			},
			{
				icon: "/assets/icons/minicart.svg",
				title: "Codeigniter eCommerce Development",
				body: "If you are planning to develop an eCommerce website that delivers a rich user experience to your customers, then Codeigniter is the best option. Just discuss your eCommerce website needs with us and let our developers handle your project with utmost care.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Codeigniter Customization",
				body: "Do you already have a website or web application that needs customization? We at Icecube Digital create highly functional and feature-rich apps, offering a range of features like modules, custom templates, and other advanced functionalities.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Codeigniter Extension Development",
				body: "If you want to make your website or web applications more advanced and powerful, then our team develops custom extensions to boost its functionality. We can develop various extensions that meet the different requirements of your business.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Maintenance and Support",
				body: "Everything needs maintenance and support, as do your business website and web apps. We provide regular maintenance and support services, ensuring that it runs smoothly without hassle. Even after delivering your project successfully, we continue delivering maintenance and support services.",
			},
			{
				icon: "/assets/icons/cloud-upload.svg",
				title: "Upgrade and Migration Solutions",
				body: "Now, it is easy to migrate your already running website and application into incredible Codeigniter-based solutions. Whether you want to migrate from Codeigniter to any other framework or Codeigniter, we can handle it.",
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Icecube Digital as Your Codeigniter",
		title: "Web Development Company?",
		benefitsLeft: [
			"An Experienced and Skilled Team of Codeigniter Web Developers",
			"Believes in Transparency at Every Step With No Hidden Cost",
			"Top and Advanced Quality Solutions to Deliver Optimum Results",
		],
		benefitsRight: [
			"14+ Years of Experience in the Industry",
			"On-Time Delivery of Projects",
			"Single Point of Contact",
		],
	},

	cta: {
		text: "Are You Looking To Hire Codeigniter Web Developers?",
		ctaLabel: "Get a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Codeigniter Development",
		title: "FAQs",
		items: [
			{
				question: "How Much Does Codeigniter Website Development Cost?",
				answer: "The cost of the Codeigniter website development project depends on the requirements, features, and functionalities you want. To get the exact project cost, discuss your requirements with us today.",
			},
			{
				question: "How Much Time Does Developing Codeigniter Web Application Take?",
				answer: "As said, there is no fixed cost for developing the Codeigniter application; there is no fixed time to develop it. The exact time to develop a Codeigniter application depends on the needs, features, and functionalities. The exact timeline can be estimated once we understand your requirements.",
			},
			{
				question: "Why Should I Choose Icecube Digital for the Codeigniter Project?",
				answer: "Icecube Digital is a leading web development company with over 10 years of experience in the market. Well-versed with multiple skills and expertise, our developers are capable of handling your requirements with utmost care.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default CodeigniterDevelopmentServices;
