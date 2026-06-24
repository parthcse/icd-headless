const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const HireShopifyPlusDevelopers = {
	slug: "hire-shopify-plus-developers",
	pageTitle: "Hire Shopify Plus Developers | Icecube Digital",
	metaDescription: "Hire certified Shopify Plus developers from Icecube Digital — custom store setup, theme and app development, migrations, enterprise integrations, and 24/7 support, with flexible dedicated, hourly, and project-based engagement models.",

	banner: {
		heading: "Hire Shopify Plus Developer",
		paragraphs: [
			"Are you planning to launch your online store that can help you to manage complex processes but not have expertise in Shopify? You can hire expert Shopify Plus developers from Icecube Digital to build a future-ready platform with a smooth user experience. Our Shopify Plus experts are committed to providing scalable solutions that help you to grow and expand smoothly. Get your ideas converted into a digital platform with our expertise.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Shopify Store Audit",
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
		eyebrow: "Experienced Shopify Plus Developers",
		title: "You Can Rely On",
		contentAlign: "center",
		paragraphs: [
			"With more than a decade of experience, Icecube Digital helps businesses in building scalable and high-performing eCommerce solutions. Our Shopify Plus team has experience in working with complex Shopify Plus stores, managing inventory, high traffic volumes, and global market needs.",
			"From custom Shopify Plus theme development to third-party integrations and advanced automation, we assist businesses with user-centric storefronts by following best practices of Shopify Plus. This helps in optimizing store performance, ensuring mobile responsiveness, and smooth checkout. As a leading Shopify Plus company, we help e-commerce businesses to reduce manual processes, manage high volumes of traffic, and improve overall effectiveness.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	topIconBox: {
		eyebrow: "Hire Shopify Plus Developers for Custom",
		title: "eCommerce Solutions",
		subtitles: [
			[
				"Bring your business to the online market in full-fledged with ",
				{ text: "custom Shopify development", href: "/shopify-development-services/" },
				" services from Icecube Digital. Our certified Shopify experts are not just developers; they will be your partners who seamlessly integrate with your team and get invested in your eCommerce success.",
			],
			"We go beyond than bare minimum and indulge in the designing and development process to create a Shopify store that meets your vision. We add our inputs and coordinate with your thoughts to create a visually appealing, functional, secure, and optimized store that helps achieve your long-term goals. Here are the services that we offer:",
		],
		items: [
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Shopify e-commerce Store Setup",
				body: "Our Shopify Plus engineers assist businesses in streamlining the design and setup of e-commerce stores. From theme selection to customizations and integrations, we ensure an optimized solution with multi-platform compatibility, automated operations to improve conversions.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Shopify Plus Theme Development",
				body: "With expertise in diverse industries, our Shopify Plus experts build custom themes using Liquid templating and the script editor to fulfill specific business needs. You can hire Shopify Plus programmers to get responsive, interactive, and user-friendly Shopify Plus themes that boost user experience.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "Shopify App Development",
				body: "Get comprehensive Shopify Plus app development services to build scalable, secure and multi-platform solutions to manage complex workflows. Our experts utilize Shopify App Bridge, Node.js, and Shopify Flow to implement automated workflow and advanced features for uninterrupted workflow.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Migration to Shopify",
				body: "We provide advanced Shopify Plus migration services from Magento, WooCommerce, BigCommerce, or custom platforms with secured data backups and minimal downtime. From post migration optimization to redesign and inventory migration, our experts monitor custom fields and redirection to enable a smooth data migration process.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Shopify Plus Enterprise Services",
				body: "Hire a certified Shopify Plus developer to get enterprise-grade e-commerce platforms with custom checkouts, secure ERP/CRM integrations, and multi-store management into a single solution. We deploy Launchpad for flash sales and Flow for no-code automations with high-tech security.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Shopify Maintenance and Support",
				body: "Hire expert Shopify Plus developers to get constant support and maintenance services that help in ensuring ongoing enhancements. We provide ongoing performance monitoring, bug fixes, feature updates, security audit and store enhancements to ensure secure, fast, and optimized solutions.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Custom Shopify Template Development",
				body: "Hire Shopify Plus developers to access templates with an intuitive UI/UX and simplify inventory management processes. We design custom themes to meet the needs of our clients across various industries, reducing their dependency on third-party apps.",
			},
			{
				icon: "/assets/icons/detection.svg",
				title: "Shopify Troubleshooting",
				body: "Your store can run into trouble at any time. That's why hiring Shopify web developers is the best option, as our experts are available 24×7 to resolve your issues. From fixing broken themes or custom code issues to resolving third-party app conflicts with themes or core Shopify features, we take every issue as seriously. Our tiered support system with L1, L2, and L3 support levels ensures that the right expertise is involved to resolve the store's issues.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Shopify SEO Optimization",
				body: "With the increasing competition, attention to detail is required to create an apt SEO strategy that not only works but delivers excellent results. We conduct keyword research that matches user intent such that valuable traffic drives to your store. We assist with on-page optimization and technical SEO fixes to ensure that your store performs as per the search engine algorithm. Our experts do everything in their power to empower you to reach a wide audience, increase your traffic, and, ultimately, drive sustained growth in the online marketplace.",
			},
		],
	},

	tableBasic: {
		eyebrow: "Technical Excellence of Our",
		title: "Shopify Plus Specialists",
		subtitle: "Our experienced Shopify Plus developers have expertise in diverse tools and technologies to provide custom and integrated solutions.",
		contentAlign: "left",
		columns: ["Category", "Tools & Technologies"],
		rows: [
			["Frameworks", "Shopify Liquid, React, API Integration, Shopify Flow"],
			["Payment Gateways", "PayPal, Stripe, Shopify Payments, Amazon Pay"],
			["Shipping Apps", "Shippo, ShipRocket, ShipStation, ShippingEasy"],
			["Third-Party Integrations", "Salesforce, HubSpot, Zoho, Shopify POS"],
			["Development Tools", "App Bridge, Ngrok, Shopify CLI, Polaris"],
			["Database", "MySQL, Docker, MongoDB, PostgreSQL"],
			["Shopify-Specific Tools", "Shopify Admin API, Shopify Storefront API, Shopify Plus API, Shopify CLI, Liquid"],
			["Frontend Development", "HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js, Tailwind CSS, Bootstrap"],
			["Backend Development", "Node.js, Ruby on Rails"],
			["Version Control & Deployment", "Git, GitHub, CI/CD Tools, GitHub Actions"],
			["Headless Commerce", "GraphQL, Next.js"],
			["Development Environment", "Visual Studio Code (VS Code), Docker"],
			["Cloud Services", "AWS, Google Cloud Platform (GCP)"],
		],
	},

	cta: {
		text: "Are You Looking For Experienced Shopify Plus Developers To Transform Your Digital Presence?",
		ctaLabel: "Contact Our Team",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	tablePackages: {
		eyebrow: "Engagement Models to Hire Shopify",
		title: "Plus Developers",
		subtitle: "We provide flexible hiring models that help e-commerce businesses to onboard Shopify Plus programmers based on their project needs without compromising on quality. Every model is designed to build user-friendly stores with necessary integrations.",
		ctaLabel: "Schedule a Free Consultation Now",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
		plans: [
			{
				name: "Dedicated & Managed Teams",
				features: [
					"Assigned Project & Account Manager",
					"Timely Project Delivery",
					"Offshore Team Control",
					"No In-House Tech Needed",
					"NDA and SLAs",
					"24/7 Support",
				],
			},
			{
				name: "Custom Model",
				features: [
					"Hourly rate or monthly support model",
					"Fixed hours per technology",
					"Ideal for service-based support",
					"NDA protected",
					"Time-to-time Upgradation",
					"24/7 Support",
				],
			},
			{
				name: "Project Based Hiring",
				features: [
					"Clear Goals, No Surprises",
					"Fixed Timeline",
					"Transparent pricing",
					"Skilled Shopify Plus Developers",
					"Dedicated Resources",
					"NDA and SLAs",
					"24/7 Support",
				],
			},
		],
	},

	leftIconBox: {
		eyebrow: "Why Hire Shopify Plus Developers From",
		title: "Icecube Digital?",
		subtitle: "Choosing Icecube Digital means working with a dedicated team of expert Shopify developers who understand the intricacies of building a powerful, custom eCommerce store. We focus on delivering tailored solutions that drive growth, optimize user experience, and ensure your business stays ahead with future-proof technology. Trust Icecube Digital for seamless support and scalable results:",
		items: [
			{
				icon: "/assets/icons/user.svg",
				title: "Certified Expertise",
				body: "Being an experienced Shopify Plus development agency, Icecube Digital has a team of certified developers who have experience in handling complex integrations and industry-specific customizations and follow best practices. Our team helps minimize errors and smooth workflow by simplifying the processes.",
			},
			{
				icon: "/assets/icons/lock.svg",
				title: "End-To-End Services",
				body: "We offer comprehensive services from theme development to custom store development and ongoing support using Shopify CLI and Hydrogen for headless commerce. Clients can avoid fragmented management and multiplatform data compiling by our expertise in automation via Shopify Flow.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Cost Efficiency",
				body: "We provide a flexible pricing model that helps you to save long-term operational costs and ensure an optimized development cycle. Our pricing model and continuous support help prevent downtime and improve loading speed to enable an uninterrupted shopping experience for users across the world.",
			},
			{
				icon: "/assets/icons/timer.svg",
				title: "Faster Time-To-Market",
				body: "Our dedicated Shopify Plus programmers help you to launch your store quickly with necessary customizations, advanced features, and integrations. We handle parallel workflows and implement automations using pre-vetted frameworks to cut deployment time and deliver solutions within the timeline.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Enhanced Security and Compliance",
				body: "With expertise in the field, we implement enterprise-grade security with PCI DSS compliance, webhook validations, and advanced rate limiting to safeguard transactions. Our experts also conduct regular audits of your Shopify Plus platform to reduce data breaches and ensure smooth performance.",
			},
			{
				icon: "/assets/icons/www.svg",
				title: "Global Expansion Support",
				body: "Our Shopify Plus experts configure multiple currencies and multilingual stores with custom domains and localized checkouts to simplify entry into new markets. We establish real-time data sync and implement necessary compliance to ensure smooth operations without disrupting core workflow.",
			},
		],
	},

	processSteps: {
		eyebrow: "Hire a Dedicated Shopify Plus in",
		title: "A Few Steps",
		columns: 2,
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
		steps: [
			{
				title: "Define Project Needs",
				body: "Finalize project requirements like custom theme builds, API integrations, or migration scope, including timelines, budget, and required Plus features. We then discuss with your team, refine your needs, and suggest experienced programmers with experience in your industry.",
			},
			{
				title: "Shortlist and Review Experts",
				body: "Interview and shortlist our expert Shopify Plus developers based on their skills, such as Liquid, GraphQL, and enterprise migrations, your project requirements, and budget. This will help you in onboarding best candidates that can match your project.",
			},
			{
				title: "Onboard The Team",
				body: "You can onboard the selected developers and align them with your workflow to ensure smooth project deliveries. Our developers follow agile development practices and communicate regularly with an aim to boost satisfaction.",
			},
			{
				title: "Manage and Scale",
				body: "You can monitor the progress, seek updates, and adjust the team to meet the project requirements. We offer round-the-clock support, code quality assurance, and performance optimization to make sure your Shopify Plus store expands smoothly.",
			},
		],
	},

	faq: {
		eyebrow: "Hire Shopify Plus Experts",
		title: "FAQs",
		items: [
			{
				question: "How do I hire a Shopify Plus developer?",
				answer: "You can hire Shopify Plus developer from us by defining your project needs, shortlisting developer profiles, finalizing the engagement model, and onboarding your Shopify Plus specialist.",
			},
			{
				question: "What is the cost of Shopify Plus developers?",
				answer: "The cost of hiring Shopify Plus developers depends on factors like the engagement model (dedicated team, hourly, or project-based), the complexity and scope of your project, required integrations, and the developers' experience level. We offer flexible, transparent pricing tailored to your needs — contact us for a custom quote based on your specific requirements.",
			},
			{
				question: "What services do your Shopify Plus developers offer?",
				answer: "Our Shopify Plus developers offer end-to-end services including custom store setup, Shopify Plus theme development, app development, platform migration, enterprise solutions, third-party and ERP/CRM integrations, checkout customization, SEO optimization, troubleshooting, and ongoing maintenance and support.",
			},
			{
				question: "Can I hire Shopify Plus developers hourly or per project?",
				answer: "Yes. We offer flexible engagement models — hire developers on an hourly or monthly basis through our Custom Model, build a dedicated and managed team, or engage us on a fixed-scope, project-based contract. We help you choose the model that best fits your project requirements, timeline, and budget.",
			},
			{
				question: "How will I communicate with my Shopify Plus developer?",
				answer: "You'll have direct, regular communication with your developer or team through your preferred channels — email, Slack, Skype, video calls, or project management tools like Jira and Trello. We follow agile practices with regular updates, and dedicated engagements include a project manager to keep everything aligned and on track.",
			},
			{
				question: "Why choose an experienced service provider for Shopify Plus development?",
				answer: "An experienced Shopify Plus provider brings proven expertise in complex integrations, enterprise-grade security, performance optimization, and industry best practices. This minimizes errors, reduces development time, and ensures a scalable, future-proof store. With certified developers and a track record of successful projects, Icecube Digital delivers reliable results that help your business grow.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default HireShopifyPlusDevelopers;
