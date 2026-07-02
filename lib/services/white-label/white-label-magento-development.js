const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WhiteLabelMagentoDevelopment = {
	slug: "white-label-magento-development",
	pageTitle: "White Label Magento Development Services | Icecube Digital",
	metaDescription: "Expert white label Magento development for agencies. Icecube Digital delivers Magento store design, development, extensions, migration, optimization, and support under your brand — with flexible monthly, quarterly, and yearly pricing plans.",

	banner: {
		heading: "Expert White Label Magento Development Services",
		paragraphs: [
			"Do you want to deliver smarter and more engaging eCommerce experiences but have limited resources? As the pioneer in White Label Magento Development, IceCube Digital has the expertise and resources to help you deliver the best eCommerce solutions. We help you to grow your eCommerce business with the advanced features of the Magento platform.",
			"Our team of professionals has excelled in technical competencies to render industry-specific solutions including extensions, third-party invitations as well as custom themes to uplift your Magento game. We strive to travel that extra mile with a result-driven attitude that will help you articulate your business goals optimally.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Risk-Free White-Label Development Trial (5 Free Hours)",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	caseStudy: {
		eyebrow: "White Label Magento Development",
		title: "Success Stories",
		subtitle: [
			"We are proud to have earned the trust and relationships of leading clients who rely on us for their challenging and critical software needs. Our continuous drive for innovation and customer satisfaction keeps us motivated to develop better solutions for your business. Get ready to join our esteemed clientele and experience the excellence that sets us apart in the white-label space.",
			"Here’s a glimpse of our vast portfolio, showcasing our craftsmanship across thousands of Magento websites and apps.",
		],
		postIds: [56510, 56508, 56582],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	imageText: {
		eyebrow: "Top Reasons to Choose White Label",
		title: "Magento Services",
		image: "/assets/photos/white-label-magento-top-reasons.png",
		imageAlt: "",
		imagePosition: "left",
		paragraphs: [
			"Do you know that 65% of shopping occasions begin online? Modern-day consumers prefer to browse the internet to search for any service or product. Thus, having a digital store has become a necessity rather than a retail store to thrive in this era. Magento, the most popular eCommerce system, allows you to sell products easily online.",
			[
				"Are you a consultant or eCommerce manager with a limited capacity in White Label Magento Development Services? In that case, Icecube Digital is here to help you with our comprehensive, customized ",
				{ text: "Magento development solutions", href: "/magento-development-services/" },
				".",
			],
			"If you plan to build a custom Magento store, Icecube Digital can help with our professional team of Magento experts. We craft and deliver Magento web development services, keeping your unique business goals in mind without wasting your time and budget.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: {
		...achievementsSection,
		eyebrow: "Our Top Ratings and Recognitions Across",
		title: "Leading Platforms",
	},

	topIconBoxSecondary: {
		eyebrow: "Explore Our Best White Label Magento",
		title: "Development Services",
		items: [
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Magento Store Design",
				body: "A successful Magento business begins with a captive site design that will not only tell the brand's story but also seamlessly sell the products. Why should you settle for average when you can have the best under budget? With Icecube Digital, you can have the best custom White Label Magento Design for your digital store.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Magento Store Development",
				body: "Your Magento eCommerce stores should match the ever-evolving customer demands and technology trends. We provide customized Magento store development services to meet your dynamic needs, ensuring a delightful experience.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Magento Extension Development",
				body: "Magento has been developing new updates to help you create bespoke extensions to meet your client's needs. At Icecube, we have years of expertise in developing and executing custom Magento extensions, allowing the website or third-party application to interact with your Magento store efficiently. Whether you want to create an extension for your eCommerce store or provide SaaS services, we are here to help.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Magento Performance Optimization",
				body: "Is your Magento store running slow? Your Magento stores must handle heavy traffic and user requests seamlessly as they begin to scale. We have an expert team of Magento developers to implement performance optimization services to ensure high loading speed and conversion rate.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Magento Migration",
				body: [
					"Magento is the best platform when it comes to performance, flexibility, and user experience. Whether you are seeking a way to migrate data from ",
					{ text: "Magento 1 to Magento 2", href: "/magento-2-upgrade-and-migration-services/" },
					" or want to update to Magento 2, our dedicated team has years of hands-on experience in migrating simple to complex tasks effortlessly and efficiently without any hassles.",
				],
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Magento Maintenance and Support",
				body: "Running a Magento eCommerce website can come with unexpected challenges. Therefore, our work doesn't end with the design and execution. Our Magento support packages will help you with ongoing assistance, ensuring your client's website always stays updated, secure, and in ideal condition all the time. You can also reach out to our ad-hoc technical support to get timely solutions.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "What Makes Us the Most Trusted White Label",
		title: "Magento Agency?",
		items: [
			{
				icon: "/assets/icons/award-badge.svg",
				title: "14+ Years of Experience",
				body: "At Icecube Digital, we are known as domain experts with 14+ years of rich experience and possess the skill and ability to build powerful Magento stores. We align our service in the Magento eCommerce development with your business goals to deliver value and help you achieve exceeding entrepreneurial success.",
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Certified Magento Developers",
				body: "Engage and collaborate with top-tier certified Magento developers for white-label Magento website development. Our team of proficient developers has expertise in custom Magento development. Once you have partnered with us, you can focus on your clients and core businesses while we tackle all your Magento requirements.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Tailored Solutions for Agencies",
				body: "At Icecube, we offer a spectrum of solutions to your clients, from design to SEO, under your banner. You can boost your sales through our comprehensive online strategy. Our expert team will create customized, visually stunning, and user-friendly websites for you, ensuring a standout online presence.",
			},
			{
				icon: "/assets/icons/check-circle.svg",
				title: "Proven Track Record",
				body: "Experience assured quality in the white-label Magento development delivery. We help you consistently meet their deadlines and budget constraints, ensuring your project's success. We have taken on various projects for clients across the world, from web pages to custom applications.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Seamless Communication",
				body: "We keep no secrets from you. A dedicated project manager will be available for seamless communication with your team throughout the business day. You can ask your questions or make requests whenever you have to. We make it easy for you to learn all about the progress of your white-label Magento development project at every stage.",
			},
		],
	},

	tablePricingPlansTabs: {
		eyebrow: "Our White Label Magento",
		title: "Pricing Plans",
		subtitle: "Experience our top-tier Magento white-label services without worrying about the budget. Choose your Path (Plan) to Success!",
		tabs: [
			{ id: "monthly", label: "Monthly" },
			{ id: "quarterly", label: "Quarterly", note: "10% Discount" },
			{ id: "yearly", label: "Yearly", note: "15% Discount" },
		],
		plans: [
			{ name: "Starter" },
			{ name: "Standard" },
			{ name: "PRO" },
			{ name: "Advanced", popular: true },
		],
		pricing: {
			monthly: [
				{ amount: "$500" },
				{ amount: "$1000" },
				{ amount: "$2000" },
				{ amount: "$4000" },
			],
			quarterly: [
				{ amount: "$450", original: "$500/mo" },
				{ amount: "$900", original: "$1000/mo" },
				{ amount: "$1800", original: "$2000/mo" },
				{ amount: "$3600", original: "$4000/mo" },
			],
			yearly: [
				{ amount: "$425", original: "$500/mo" },
				{ amount: "$850", original: "$1000/mo" },
				{ amount: "$1700", original: "$2000/mo" },
				{ amount: "$3400", original: "$4000/mo" },
			],
		},
		rows: [
			{ label: "Hours Per Month", values: ["20", "40", "80", "160"] },
			{ label: "Unlimited Magento Maintenance / Support / Care Tasks", values: [true, true, true, true] },
			{ label: "Unlimited Full Magento Website Projects", values: [false, false, true, true] },
			{ label: "Magento Apps Integration", values: [true, true, true, true] },
			{ label: "Landing Page", values: [true, true, true, true] },
			{ label: "Email Support", values: [true, true, true, true] },
			{ label: "Real-time Communication", values: [false, false, true, true] },
			{ label: "Progress Call", values: ["Once a month", "Once a month", "Bi-Weekly", "Weekly"] },
			{ label: "Monthly Report", values: [true, true, true, true] },
			{ label: "Project Management Tool", values: [false, false, true, true] },
			{ label: "Dedicated Account / Project Manager", values: [true, true, true, true] },
			{ label: "Monthly Live Sales Training Session", values: [false, false, true, true] },
			{ label: "Quarterly Business Review", values: [false, false, true, true] },
		],
		ctaLabel: "Sign Up Now",
		ctaHref: "#",
	},

	cta: {
		text: "Looking for Custom Pricing?",
		ctaLabel: "Get In Touch",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	infoBox: {
		eyebrow: "Top Benefits of Using the Best White Label Magento",
		title: "Development Services",
		items: [
			{ title: "Scalability & Flexibility", body: "Magento can handle millions of user requests and manage thousands of products/ services simultaneously. Therefore, you can be assured of experiencing seamless performance, as the platform is easy to scale for growing requests. Moreover, the platform is highly flexible, allowing you to customize the site's backend according to changing business and user demands." },
			{ title: "Extensive Features", body: "Magento can be extended for its function with its extensive features, whether you need to enhance user experience, improve the checkout process, or optimize email marketing. Whatever your goal, the platform has the perfect extension feature for you, which can be customized to meet your unique needs." },
			{ title: "SEO-Ready Platform", body: "Magento has all the essential and advanced built-in SEO features. The platform features customizable titles, anchor text for anchor links, canonical URLs, rich snippets, XML sitemap, and page builder, and quick integration with Google marketing, and tracking tools to give your business an edge over other eCommerce platforms." },
			{ title: "Mobile Commerce Mastery", body: "Magento offers tools to build a unique mobile app for digital stores. Moreover, the platform has an in-built mobile-friendly design to help you deliver an optimal experience for mobile users. It also helps you with high-end reporting features to get you insights into customers, orders, and products. With insights, you will get metrics and data to achieve immeasurable results." },
			{ title: "Large Community and Ecosystem", body: "The Magento platform is supported by a vast, proficient development community. This helps developers tap into a wide userbase. We help you understand how Magento works and the benefits it can add to your digital presence." },
			{ title: "Third-Party Integrations", body: "Integrating third-party services and features is effortless with Magento. Easy API integration for the platform makes it easier for digital store owners to add extensive or advanced features to support their business growth and make it simple for users to navigate throughout their site." },
		],
	},

	processSteps: {
		eyebrow: "5 Proven Steps Our Magento White Label Experts",
		title: "Use To Deliver Outstanding Results",
		columns: 2,
		subtitle: "We follow a clear, structured process that keeps projects moving without confusion, delays, or unnecessary revisions.",
		steps: [
			{ title: "Consultation and Requirement Analysis", body: "We listen to you and your brand. We will attentively listen to your concerns, requirements, objectives, and challenges. Our experts will capture every minute detail of your project requirements." },
			{ title: "Custom Magento Development", body: "We look in-depth to locate the right Magento development expertise matching the skillset you are looking for within our talent pool. They will help you develop custom Magento development services to ensure a successful project." },
			{ title: "Quality Assurance and Testing", body: "We conduct rigorous testing and quality assurance steps to ensure the site's seamless function and optimal performance. Our experts are always on hand to reactively address any potential issues that may arise before the launch." },
			{ title: "Project Launch", body: "We are committed to on-time project delivery and assure you that our white-label services will meet your deadline and exceed your expectations." },
			{ title: "Ongoing Support and Maintenance", body: "Our job doesn't end with the final launch. We seek your client feedback and approval at every milestone, ensuring alignment and expectation throughout the project with seamless support and maintenance services." },
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	infoBoxSecondary: {
		eyebrow: "Why Top Brands Partner With Us for Magento",
		title: "White Label Development",
		items: [
			{ title: "Superior Performance", body: "As the leading White-label Magento development agency, we boast a team of seasoned professionals who ensure superior website performance. We understand the intricacies of meeting each client's requirements and help you create customized solutions that actually drive better sales." },
			{ title: "Transparent and Honest Communication", body: "At Icecube Digital, clear and honest communication is key to a successful partnership. We always keep our clients informed about the campaign's progress, providing detailed reports and in-depth updates on a regular basis." },
			{ title: "Affordable Rates with On-Demand Services", body: "At Icecube Digital, we enhance our expertise to bring you competent solutions at the best costs based on your needs. Whether you need full-time assistance or project-based services, you can choose a competitive and reasonable plan." },
			{ title: "Minimal Maintenance", body: "As the leading white-label agency, we allow you to increase or decrease the services offered with minimal maintenance, depending on your needs. If your business is growing, we help you expand your offering. If you need to reduce your capacity, you can adjust the time without hiring or firing, providing the ultimate flexibility and efficiency." },
			{ title: "Expert Developers", body: "Your agency can rely on our skilled Magento developers without needing to hire a full-time team. We ensure to create high-quality solutions and features so that your company can focus on other areas and stay updated with your client's needs. The flexibility to scale expertise as needed will help you build long-lasting business relations with your clients." },
			{ title: "Timely Delivery with No Compromise", body: "With our white-label Magento development services, you can easily pass over the projects of diverse clients at hand rather than spending time locating the solutions. We assure timely delivery with no compromise, giving you the tag up above your competitors and ensuring complete client satisfaction." },
		],
	},

	ctaSecondary: {
		text: "Still Exploring Options and Not Sure of Your Needs? Book a Call With Us Now!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "White Label Magento",
		title: "Development FAQs",
		items: [
			{
				question: "What is White Label Magento Development?",
				answer: "White-label Magento development is a service that allows a business to expand its services or offerings without hiring or training in-house developers. The agency can hire another one to get their service on Magento development, customization, and support under the client’s brand.",
			},
			{
				question: "What is the process of White Label Magento Development?",
				answer: "At IceCube Digital, we offer complete omnichannel support through our white-label Magento development services. We unlock your client’s fullest potential through POS integration, third-party marketplace integration, eCommerce store integration, and B2B portals, and we also support a proactive approach.",
			},
			{
				question: "Why should my agency consider White Label Magento Development?",
				answer: "You may have unique ideas for building your website, but you may not have the expertise and resources in Magento development to bring them to life. In such situations, considering label Magento development can be a wise decision, as you will have full freedom.",
			},
			{
				question: "How do you guarantee quality and meet deadlines?",
				answer: "As an established white-label agency, IceCube Digital thrives on exceeding our clients’ expectations. We stay updated with the latest knowledge to help you create a strong presence for your clients. Moreover, we will regularly update you on the development process so that you can stay assured that your project will be delivered on time.",
			},
			{
				question: "What are your pricing options for White Label Magento Development?",
				answer: "At Icecube, our white-label Magento development team follows a flexible pricing model, allowing you to choose the best. Once we understand your project, we will furnish you with comprehensive solutions and precise time and cost estimates for each task. If any additional requirements surface during or after development, you will be given a separate fee based on the necessary house on the extra service.",
			},
			{
				question: "How can I monitor the progress of my projects?",
				answer: "We ensure a transparent and comprehensive report on every progress made with your client’s Magento development projects. You can use the intuitive dashboard to integrate data from multiple channels to get a unified view of performance. You can also connect with our dedicated project manager to know the progress of the project, whenever and wherever you need.",
			},
			{
				question: "Can you develop custom Magento solutions?",
				answer: "Absolutely! We can build custom Magento solutions based on your client’s unique needs using the preferred theme as a base for optimization and faster development. Our approach ensures a unique, professional, and fully tailored store without using generic pre-built templates.",
			},
			{
				question: "What types of projects can be handled with White Label Magento Development?",
				answer: "Store design, theme development, extensions development, migrations, speed optimization and SEO enhancements.",
			},
			{
				question: "Do you provide ongoing support and maintenance after project delivery?",
				answer: "Yes, and updates, troubleshooting and monitoring of the performance are included to ensure that the store remains safe and optimized.",
			},
			{
				question: "Can you integrate third-party tools and extensions into Magento stores?",
				answer: "Yes, to increase functionality and user experience of payment gateways, CRMs, marketing tools, and analytics.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WhiteLabelMagentoDevelopment;
