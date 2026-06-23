const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const MagentoMaintenance = {
	slug: "magento-maintenance-services",
	pageTitle: "Magento Maintenance Services | Icecube Digital",
	metaDescription: "Keep your Magento store secure, fast, and up-to-date with Icecube Digital's expert Magento maintenance services. Proactive support, security patches, and 24/7 monitoring.",

	banner: {
		heading: "Magento Maintenance Services",
		paragraphs: [
			"At IceCube Digital, we extend our expertise beyond just Magento development – we are your dedicated partners in maintaining, securing, and optimizing your Magento online store. Our Magento maintenance services are tailored to ensure the seamless operation, security, and performance of your e-commerce platform, providing a reliable foundation for your online business.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Magento Store Audit",
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

	plainText: {
		eyebrow: "Ensuring Top-Notch Experience With Magento",
		title: "Maintenance Service",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "Our dedicated Magento website support service ensures seamless operation and optimum performance of your e-commerce platform. In this high-paced world, sustaining a successful online presence requires more than just a beautifully optimized and strategically built store. At IceCube Digital, our team will ensure that your Magento site remains secure, up-to-date, and fully functional all the time. With proactive maintenance, our team will detect and handle all the potential issues and risks before they impact your business." },
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialId: 24,
	},

	leftIconBox: {
		eyebrow: "Why Choose IceCube Digital For Magento",
		title: "Maintenance Service?",
		items: [
			{
				icon: "/assets/icons/processing.svg",
				title: "Proactive Approach to Maintenance",
				body: "Our team adopts a proactive approach to deliver Magento e-commerce support services, identifying and resolving potential issues before they impact your online store. With regular health checks and audits, we ensure that your Magento website operates at its peak performance, delivering a seamless shopping experience to your customers.",
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Certified Magento Experts",
				body: "IceCube Digital takes pride in its team of certified Magento experts who possess in-depth knowledge and experience in handling various Magento versions. From security patches to version upgrades, our experts are well-versed in maintaining the health and security of your Magento store.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "Tailored Magento Maintenance Plans",
				body: "Recognizing that each e-commerce business is unique, we offer tailored Magento maintenance plans to suit your specific needs. Whether you require routine updates, security enhancements, or performance optimization, our plans are designed to provide comprehensive support for your Magento store.",
			},
			{
				icon: "/assets/icons/check-circle.svg",
				title: "Round the Clock Support",
				body: "We offer round-the-clock support and monitoring to ensure minimum downtime and that your Magento-based e-commerce platform runs smoothly and efficiently. Our experts are available 24/7, meaning our team is always ready to address any technical glitch, security issues, or even a minor concern. We'll address your query with our expert's timely and robust solutions.",
			},
		],
	},

	topIconBox: {
		eyebrow: "Key Features of Our Magento",
		title: "Maintenance Services",
		subtitles: ["Maintenance services are essential for optimal performance and robust functioning of your e-commerce platform, whether developed on Magento 1 or 2. IceCube Digital has the required expertise and ample resources to meet your business needs and excel in surpassing your expectations. Here is how our Magento maintenance services are designed and tailored to provide a comprehensive and efficient solution for your e-commerce store."],
		items: [
			{
				icon: "/assets/icons/cloud.svg",
				title: "Automated Backup and Disaster Recovery",
				body: "Ensure the safety of your valuable data with our automated backup and disaster recovery services. We implement robust backup solutions to safeguard your Magento store's critical information, providing peace of mind in case of unforeseen events.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Continuous Performance Monitoring",
				body: "Our Magento maintenance and support team employs advanced tools to continuously monitor your Magento store's performance. It assists in identifying bottlenecks, optimizing processes, and enhancing the overall speed and responsiveness of your online store, ensuring optimal user experiences at all times.",
			},
			{
				icon: "/assets/icons/inventory.svg",
				title: "Database Optimization for Efficiency",
				body: "Our experts will optimize your Magento store's database for improved efficiency. The database optimization services enhance data retrieval speed, ensuring a seamless shopping experience for your customers while maintaining backend processes at peak performance.",
			},
			{
				icon: "/assets/icons/mobile.svg",
				title: "Mobile Responsiveness Testing",
				body: "In an era dominated by mobile users, we conduct thorough mobile responsiveness testing. It will ensure your Magento e-commerce store provides an exceptional user experience across various devices, boosting your online presence and reaching a broader audience.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Disaster Recovery Planning and Execution",
				body: "Prepare your business for the unexpected with our disaster recovery planning and execution services. We develop comprehensive strategies to minimize downtime and data loss in the event of unforeseen circumstances, providing a robust safety net for your Magento store and ensuring business continuity.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Dedicated QA Testing for Reliability",
				body: "Our dedicated quality assurance (QA) team conducts rigorous testing to ensure the reliability and functionality of your Magento store. From security checks to performance testing, our QA processes guarantee a seamless shopping experience for your customers, maintaining the highest standards of reliability and user satisfaction.",
			},
			{
				icon: "/assets/icons/comment.svg",
				title: "Absolute Transparency",
				body: "At IceCube Digital, our skilled team of Magento developers understands your difficulties and challenges comprehensively. Besides, we keep all the communication channels open and transparent to ensure that we provide end-to-end solutions for the problems and maintain the best performance of your e-commerce platform. Discussing the platform's problems will help our experts understand the errors accurately and provide a robust solution with additional features to make the platform's performance more seamless.",
			},
			{
				icon: "/assets/icons/voice.svg",
				title: "Communication All The Way Through",
				body: "When you hire IceCube Digital experts for Magento maintenance and support, you can be assured of getting prompt assistance whenever you require it. As a leading Magento e-commerce platform developer, we will provide you with every update regarding bugs troubleshooting or security upgrades. We'll keep you in the loop regarding everything through a communication medium that is perfect with your team.",
			},
			{
				icon: "/assets/icons/user.svg",
				title: "Personalized Consultations for Continuous Improvement",
				body: "Our Magento maintenance services extend beyond routine tasks. We offer personalized consultations to discuss your e-commerce goals and strategies. This collaborative approach ensures that our maintenance efforts align with your long-term business objectives, fostering continuous improvement and growth based on your unique vision.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Comprehensive Magento",
		title: "Maintenance Services",
		items: [
			{
				icon: "/assets/icons/check-circle.svg",
				title: "Magento Routine Upgrades and Audit",
				body: "Our Magento maintenance services begin with a thorough examination of your website's health. We conduct routine checks and audits to ensure that your Magento store adheres to industry standards and best practices, identifying and addressing any potential issues promptly.",
			},
			{
				icon: "/assets/icons/detection.svg",
				title: "Magento Bug Fixes and Troubleshooting",
				body: ["When your Magento-based e-commerce store faces any technical errors, our team of skilled experts and developers will be available to resolve the error with our bug-fixing service. Our ", { text: "Magento developers", href: "#" }, " have experience in identifying and resolving the reason for the bug and ensuring seamless performance of your store."],
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Magento Security and Security Patch-Up Installation",
				body: "Protecting your online store from potential threats is a top priority. Our team installs the latest security patches promptly, minimizing vulnerabilities and ensuring that your Magento website is shielded against cyber threats.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Magento Version Upgrades",
				body: ["Our experts will help you manage your Magento store's transition from ", { text: "Magento 1 to Magento 2", href: "#" }, ", the latest version of Magento. Our experts manage the entire upgrade process, including security patch installation, software updates, plugin issue resolution after migration, compatibility checks, and seamless functioning of your store, ensuring a smooth transition."],
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "Extension Build/Update",
				body: "As your business evolves, so do your requirements. Our Magento extension build/update services cater to the customization and timely updates of third-party extensions, ensuring compatibility and seamless integration with your Magento store and ensuring complete Magento 2 website maintenance.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Performance Tuning",
				body: "Improve your conversion rates with our performance tuning services, which focuses on improving site speed and usability for better customer experience. Our skilled team of Magento developers focuses on enhancing your website's speed and usability, conducting in-depth analyses through various site speed tools and implementing solutions to align your store with search engine recommendations.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Theme Upgradation",
				body: "Give your Magento store a fresh and sophisticated look with our theme upgradation services for your e-commerce platform built on Magento 1 or 2. After performing comprehensive theme analyzes, our team ensures compatibility and eliminating potential functional issues following an upgrade.",
			},
		],
	},

	cta: {
		text: "Don't Let Downtime Affect Your Business–Reach Out For Reliable Magento Maintenance Solutions.",
		ctaLabel: "Contact Us Today For a Free Consultation",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Magento",
		title: "Maintenance FAQs",
		items: [
			{
				question: "How often do I need Magento maintenance services?",
				answer: "The frequency of Magento maintenance depends on your website's complexity and traffic. Generally, quarterly or bi-annual maintenance is recommended to keep your online store performing at its best.",
			},
			{
				question: "Is emergency support available during weekends and holidays?",
				answer: "Yes, IceCube Digital offers round-the-clock emergency support, including weekends and holidays. Our team is always on standby to address critical issues that could affect your store's performance or security, ensuring minimal downtime for your business.",
			},
			{
				question: "Can I upgrade or downgrade my Magento support package based on changing requirements?",
				answer: "Absolutely. We understand that business needs evolve over time. Our Magento maintenance plans are flexible, allowing you to upgrade or downgrade your support package at any time to align with your current requirements and budget.",
			},
			{
				question: "What happens if my site encounters issues during maintenance?",
				answer: "Our team takes a careful, staged approach to maintenance to minimize the risk of issues. If any unexpected problems arise, we have rollback procedures in place to restore your site quickly. You'll be informed at every step, and we work swiftly to resolve any issues with minimal impact on your business.",
			},
			{
				question: "What are the advantages of opting for personalized consultations in Magento maintenance services?",
				answer: "Personalized consultations allow our experts to understand your unique business goals and tailor the maintenance strategy accordingly. This ensures that our efforts are aligned with your long-term objectives, helping to identify opportunities for improvement, plan for future upgrades, and continuously enhance your store's performance and user experience.",
			},
			{
				question: "Get Started with IceCube Digital's Magento Maintenance Services",
				answer: "Getting started is simple. Contact our team today for a free consultation and store audit. We'll assess your current Magento setup, identify areas for improvement, and recommend a maintenance plan that fits your needs and budget. Let us take care of your Magento store so you can focus on growing your business.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default MagentoMaintenance;
