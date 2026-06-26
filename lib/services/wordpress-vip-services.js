const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WordPressVipServices = {
	slug: "wordpress-vip",
	pageTitle: "WordPress VIP Agency | WordPress VIP Services | Icecube Digital",
	metaDescription: "Icecube Digital is your trusted WordPress VIP agency. We deliver enterprise-grade WordPress VIP development, migration, performance optimization, and 24/7 support for brands that demand the best.",

	banner: {
		heading: "WordPress VIP Agency",
		paragraphs: [
			"Does your website tremble with the increase in load? Is your website ready to stand steady while handling millions of visitors? If not, then you should start considering the integration of WordPress VIP service into your existing business. If the platform crashes at the very moment when it is supposed to taste success, then it can't be expected for the customers to revisit it.",
			"WordPress VIP is a service built for the biggest brands or aspiring ones to operate over the web seamlessly without worrying about the performance and security of the website.",
			"Be with us and we will delve deep into the offerings of VIP WordPress service by our team of WordPress VIP developers.",
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

	topIconBoxSecondary: {
		eyebrow: "Services We Offer as a WordPress",
		title: "VIP Partner Agency",
		subtitle: "Your business website is the powerhouse of your brand's existence. Standard WordPress can be a limiting aspect of high traffic in your business. This is exactly where we as a WordPress VIP partner come in. Here is a list of services we offer as a WordPress Development Company:",
		items: [
			{
				icon: "/assets/icons/web.svg",
				title: "Custom WordPress Website Development",
				body: "We will begin by collaborating with you to identify your product's unique social media objectives. Identifying goals can help us in directing to the correct strategy route.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "WooCommerce Integration",
				body: "Convert your digital website into a sales powerhouse by integrating WooCommerce. It's an effortless online commerce store for your product.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "WordPress Theme Development",
				body: "A stellar brand-aligned theme makes your website catchy. The user experience significantly improves with themes within the VIP framework.",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "API Integration",
				body: "Connect all the essential applications and services with your website. This step can streamline your workflow and maximize efficiency.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Easy Migration",
				body: "Our WordPress VIP development is planned so that migration of your existing standard WordPress site to WordPress VIP becomes effortless. The transition will take place with minimal downtime and WordPress VIP experts.",
			},
			{
				icon: "/assets/icons/pc.svg",
				title: "Headless Architectures",
				body: "A decoupled architecture provides the highest flexibility while boosting the user experience.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Website Maintenance",
				body: "We ensure the business doesn't come to a halt with maintenance. We perform website maintenance without hampering security and optimization.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Performance Optimization",
				body: "We fine-tune the website for peak performance to deliver negligible loading time.",
			},
		],
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	topIconBox: {
		eyebrow: "Why Choose",
		title: "WordPress VIP?",
		subtitles: ["If you are aiming for high-growth businesses, then standard WordPress might have some limitations. With the spike in traffic, the performance and security might tremble. WordPress VIP has the answers to overcome these issues."],
		items: [
			{
				icon: "/assets/icons/grid.svg",
				title: "Flexible To Match Your Architecture",
				body: "It doesn't matter whether you have traditional architecture or a headless approach, WordPress VIP is compatible with any existing structure.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Proven Track Record",
				body: "WordPress VIP is powering some of the most visited websites across the world.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Trusted by Industry Leaders",
				body: "Many leading brands across the world are putting their stake in WordPress VIP for their operations. Here are some of the websites built on WordPress VIP: Capgemini, CNN, Meta, The White House, etc.",
			},
			{
				icon: "/assets/icons/note-blank.svg",
				title: "Superior Content Management",
				body: "The content management system is very user-friendly and intuitive. The system is designed for efficient content creation and publishing.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Compliance and Governance",
				body: "It complies with strict industry regulations and governance while providing highly secured services.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Comprehensive Support",
				body: "You have access to expert guidance and troubleshooting on facing any issue 24/7.",
			},
		],
		footerNote: "These are some of the aspects that make WordPress VIP a compelling choice for brands that aspire to grow big. If you still have any doubts you can consider reaching out to us or hiring WordPress developers.",
	},

	infoBox: {
		eyebrow: "Features of the WordPress",
		title: "VIP Platform",
		subtitle: ["To unlock the full potential of your website a solid base is a necessity. WordPress VIP provides a huge set of features for security, scalability, and good performance. Let's look at some of the features of WordPress VIP that make it unmatchable."],
		items: [
			{
				title: "Enterprise-Grade Integrations and Plugins",
				body: "You can connect your website to essential business tools with a library of high-performance plugins.",
			},
			{
				title: "Built For Speed",
				body: "You can thank WordPress VIP for the lightning-fast loading and high performance even under a huge volume of traffic.",
			},
			{
				title: "Various Monthly Plans",
				body: "WordPress VIP offers a wide range of flexible monthly plans that you can pursue according to your budget.",
			},
			{
				title: "Automated Backups",
				body: "You can focus on your business building as the data is automatically getting stored and backed up at regular intervals.",
			},
			{
				title: "Content Delivery Network (CDN)",
				body: "You can reach out to the global audience to deliver your content at lightning speed.",
			},
			{
				title: "Downtime Monitoring",
				body: "Your website will be always up and running, reducing the downtime amount with proactive monitoring.",
			},
			{
				title: "High Security",
				body: "DDoS (Disturbed Denial of Service) mitigation, periodic vulnerability scanning, and expert security monitoring are the three security pillars of WordPress VIP. This ensures the website is strong enough to prevent any cyber attack.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Why Choose Us As Your",
		title: "WordPress VIP Agency?",
		subtitle: "We understand that WordPress VIP comes up with a lot of complexities if not used with a plan. That's something you don't have to worry about. Our services bridge the gap between your unique vision and the VIP website that will fulfill the vision. Here are some of the reasons why our services are perfect for you:",
		items: [
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Security Promised",
				body: "Our cyber security team is always on top of external threats and implements the safety measures to keep your WordPress VIP website safe.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Scalability & Enhanced Performance",
				body: "Just building your website is not our ultimate goal, we future-proof it. We aim to achieve seamless scaling of websites with time.",
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Reliable Solutions",
				body: "Our team believes in crafting customized website solutions specific to the need.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Complete Customization",
				body: "Creation of a fully customized website by leveraging the superpower of WordPress VIP.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "24/7 Support",
				body: "The issues in the website don't wait for the closing of business hours. The reason why we provide round-the-clock helping hand support.",
			},
			{
				icon: "/assets/icons/lock.svg",
				title: "Compliance",
				body: "Compliance regulations are very critical throughout the globe. We prefer staying on top of the industry regulations to ensure the website complies with all the requirements.",
			},
		],
	},

	cta: {
		text: "Power Your Business With Customized WordPress VIP Services — Contact Us To Learn How We Can Help!",
		ctaLabel: "Contact Us Today For a Free Consultation",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "WordPress",
		title: "VIP FAQs",
		items: [
			{
				question: "Can I convert my standard WordPress website into WordPress VIP?",
				answer: "Possible! Yes, you can convert your standard WordPress website into a WordPress VIP website. The migration methods could contain some technical considerations, and our expert team could perform the transition seamlessly. Here’s the breakdown of how we will be performing the migration: The size of your website will only determine the method we will be using to migrate. We ensure to work closely for a smooth process just like we did for many other businesses before. Our expert team will brief you about our process in a detailed manner before the start of the migration.",
				answerList: [
					"Small and simple website: We will be handling the transition manually. During the migration, we would be ensuring all the functionality and content is transferred without any fail.",
					"Large website: For this the manual process might lead us to miss out on content during the transfer. We would prefer to use the WordPress VIP Command Line Interface (CLI) tool for accurate transition.",
				],
			},
			{
				question: "Is WordPress VIP a compatible choice for an e-commerce website?",
				answer: "WordPress VIP is a wonderful choice for your e-commerce website. It comes up with a list of advantages over standard WordPress. Also, a bonus point with WordPress VIP is that popular e-commerce plugins like WooCommerce can be easily integrated. We have extensive experience in building and maintaining successful retail websites on WordPress VIP.",
				answerList: [
					"Scalability: As your business grows and attracts more visitors, WordPress VIP ensures the website is ready to take the load. With an increase in traffic, your business will not be compromising with speed and stability.",
					"Wide range of security: There are inbuilt features like DDoS protection and regular vulnerability checks, which ensure the website is secure from any kind of cyber attacks on your valuable customer data.",
					"Seamless Integration: There are many e-commerce tools that you would like to integrate with your website once the business paces up. WordPress VIP will help you integrate essential e-commerce tools and payment gateways hassle-free.",
					"High performance: Websites with delayed loading time will lose many potential customers even after ranking high on the Search Engine. WordPress VIP makes sure your business doesn’t destabilize because of infrastructure failure. A smooth and quick shopping experience is what makes the consumer revisit.",
				],
			},
			{
				question: "Can WordPress VIP be hosted on AWS (Amazon Web Services) or Azure?",
				answer: "WordPress VIP may use some specific cloud services offered by AWS or Azure for certain functionalities, but the core website infrastructure belongs to WordPress VIP’s private cloud only. So, the answer to this query is a clear no. WordPress VIP cannot be hosted on Azure or AWS (Amazon Web Services). The private cloud infrastructure is specifically designed and managed by the WordPress VIP team.",
			},
			{
				question: "What type of personal information does WordPress VIP content analytics capture?",
				answer: "WordPress VIP content analytics is a great tool and it primarily focuses on anonymous web data usage. It provides data insights into audience behavior and performance of the content. So, it typically doesn’t capture the personal information of an individual, rather it focuses on noting the virtual behavior. Here’s the type of information that WordPress VIP content analytics captures: Additionally, it’s crucial to note that WordPress VIP may be integrated with third-party analytical tools that will collect more precise data depending on the specific configuration. These third-party tools often have their privacy regulation outlining how they handle user data. It is very important to be aware of the country’s privacy norms and whether are they aligned with these third-party tools. Our expert team can help you understand the data collection practices of WordPress VIP content analytics or any other third-party tools you choose to integrate. You can feel free to schedule a direct call with us to get more insight on this crucial business tool.",
				answerList: [
					"IP address: It is used for dummy user or bot detection. This tool is used to understand the geographical trends of the audience. Even though IP addresses alone are not considered personally identifiable information (PII) under most data privacy acts.",
					"User-agent: It can identify the type of browser and device used to access the website (e.g., mobile phone, desktop, Internet Explorer browser).",
					"Anonymous identifier: This tracks the user behavior across engagement without revealing the person. Later on, this data can be very beneficial while making business decisions.",
					"Browsing history: As a business owner, you might be interested in knowing what the audience is looking for in the website. You can analyze how the users are navigating your website and what content resonates with them the most.",
				],
			},
			{
				question: "Can you briefly talk about the deployment process in WordPress VIP?",
				answer: "The process of deployment in WordPress VIP is designed for security and efficiency. Here is a list of aspects in a single deployment cycle: The steps may vary depending on the project size and requirements. Our team can guide you through each phase of the deployment cycle on WordPress VIP.",
				answerList: [
					"Version control: Code changes typically take place within a version control system like Github.",
					"Staging environment: It is very important before pushing the code into production we must test it through a staging environment. Codes are tested and refined in the staging environment that reflects your production website.",
					"Code review: Once testing is done, the code undergoes the process of review to ensure quality and alignment with best code practices.",
					"Deployment: Once the code approval phase is done, then the code is pushed to the production environment on the WordPress VIP infrastructure.",
				],
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WordPressVipServices;
