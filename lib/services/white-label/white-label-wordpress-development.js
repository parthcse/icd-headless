const BTN_ARROW =
	"M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WhiteLabelWordPressDevelopment = {
	slug: "white-label-wordpress-development",
	pageTitle: "White Label WordPress Development Services | Icecube Digital",
	metaDescription:
		"Scale your agency with expert white label WordPress development. Dedicated team, NDA protected, fast turnaround. Trusted by 250+ agencies worldwide.",

	banner: {
		heading:
			"White Label WordPress Development for Agencies That Want to Scale Without Hiring",
		paragraphs: [
			"Resolve bandwidth issues, deliver projects faster, and increase your agency's profit margins with a dedicated white label WordPress team working behind your brand.",
			"Whether you're a growing digital agency or an established team managing multiple client projects, our white label WordPress development services are built to help you scale your agency without expanding your in-house team.",
		],
		checklistItems: [
			"Trusted by 250+ clients worldwide",
			"Team of 15+ WordPress experts",
			"No hiring. No training. No delays",
			"Start assigning your WordPress projects today",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Risk-Free White-Label Development Trial (5 Free Hours)",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	achievements: achievementsSection,

	caseStudy: {
		eyebrow: "",
		title: "Proven Results for Agencies Like Yours",
		subtitle: "See how agencies scaled faster and delivered better results with our white-label WordPress support.",
		postIds: [56510, 56508, 56582],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	checkList: {
		eyebrow: "Proven Results for",
		title: "WordPress Development",
		subtitle:
			"We've helped businesses increase their revenue on an average by 90% in their first year with us!",
		benefitsLeft: [
			"Increase your project capacity: Take on more client work without hiring or overloading your internal team.",
			"Scale your agency without overhead: Grow faster without the cost of recruiting, training, or managing developers.",
			"Improve delivery speed: Meet deadlines consistently with a dedicated WordPress team working behind your brand.",
		],
		benefitsRight: [
			"Boost your profit margins: Reduce operational costs and increase profitability on every project.",
			"Access a full team of WordPress experts: Designers, developers, and QA specialists — all ready when you need them.",
			"Focus on growth, not operations: Spend more time on sales, strategy, and client relationships while we handle execution.",
		],
	},

	imageText: {
		eyebrow: "How Can Outsourcing WordPress Work Improve",
		title: "Client Retention?",
		image: "/assets/photos/client-retention.png",
		imageAlt: "",
		paragraphs: [
			"Your agency thrives when you can focus on delivering exceptional results for your clients. However, handling ongoing WordPress work like updates, security, and site maintenance can be time-consuming and resource-intensive.",
			"Hiring in-house developers can strain your budget, and finding reliable freelancers is often a gamble. That's where we come in. With our white-label WordPress maintenance service, you get expert support without the overhead of managing it yourself.",
			"We operate behind the scenes, under your agency's name, ensuring your clients receive top-tier service while you focus on growing your business. From routine updates to complex maintenance tasks, we handle it all, allowing you to scale your agency with confidence and ease.",
		],
		checklistItems: [
			"Deliver faster turnaround for client requests",
			"Ensure consistent website performance and security",
			"Reduce dependency on unreliable freelancers",
			"Scale your agency without increasing overhead",
			"Improve client satisfaction and long-term retention",
		],
		outro:
			"We handle everything behind the scenes, so you can focus on client relationships and growing your agency.",
	},

	imageTextSecondary: {
		eyebrow: "Deliver High-Performing WooCommerce Stores",
		title: "Without In-House Development",
		paragraphs: [
			"Offer your clients fully optimized WooCommerce stores without managing development internally. From setup to customization and integrations, we handle everything behind the scenes.",
			"We ensure a smooth user experience, secure payment integrations, and scalable store performance, helping your clients grow while you focus on expanding your services.",
			"As your extended development partner, our team optimizes every WooCommerce store for performance, security, and scalability. From product setup and custom functionality to ongoing improvements, we handle the technical complexities so your agency can confidently deliver high-quality eCommerce solutions to clients.",
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "popup",
		image: "/assets/photos/services-development.png",
		imageAlt: "",
		imagePosition: "right",
		btnArrow: BTN_ARROW,
	},

	topIconBoxSecondary: {
		columns: 3,
		eyebrow: "White Label WordPress Development",
		title: "Services We Offer",
		subtitle:
			"We provide end-to-end WordPress development support to help agencies deliver high-quality websites without increasing internal workload.",
		items: [
			{
				icon: "/assets/icons/gear.svg",
				title: "Custom WordPress Website Development",
				body: [
					"We provide ",
					{
						text: "WordPress website development",
						href: "/wordpress-development-services/",
					},
					" by building fully customized WordPress websites tailored to your client's business goals, ensuring scalability, performance, and a seamless user experience.",
				],
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Theme Development & Customization",
				body: "Our team creates or customizes WordPress themes to match your client's brand identity while maintaining clean code and fast performance.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Plugin Development & Integration",
				body: "From custom plugin development to third-party integrations, we ensure your client's website has the functionality it needs without unnecessary bloat.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "WooCommerce Development",
				body: "We develop and optimize WooCommerce stores with smooth checkout experiences, scalable architecture, and conversion-focused design.",
			},
			{
				icon: "/assets/icons/timer.svg",
				title: "Website Speed Optimization",
				body: "We improve loading speed, Core Web Vitals, and overall performance to ensure better user experience and higher engagement.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Website Maintenance & Support",
				body: "Ongoing updates, security monitoring, and performance checks to keep your client websites running smoothly.",
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "Payment Gateway Integration",
				body: "We integrate secure and reliable payment gateways like Stripe and PayPal for seamless transaction experiences.",
			},
		],
	},

	infoBox: {
		columns: 3,
		eyebrow: "Why Agencies Choose Icecube Digital as Their",
		title: "White Label WordPress Partner",
		subtitle:
			"We work as an extension of your agency helping you deliver high-quality WordPress projects under your brand, without the cost and complexity of hiring in-house.",
		items: [
			{
				title: "Dedicated White Label Team",
				body: "Get access to experienced WordPress developers, designers, and QA specialists working exclusively behind your brand.",
			},
			{
				title: "100% White Label Execution",
				body: "We operate under your agency name with complete NDA protection, ensuring full confidentiality for every project.",
			},
			{
				title: "Fast Turnaround & Reliable Delivery",
				body: "Meet deadlines consistently with a structured workflow and a team that understands agency timelines.",
			},
			{
				title: "Scalable Support Without Hiring",
				body: "Easily scale your operations up or down based on project demand—without recruitment or overhead costs.",
			},
			{
				title: "Transparent Communication",
				body: "Stay updated with clear communication, regular updates, and smooth collaboration through your preferred tools.",
			},
			{
				title: "Quality-First Development Approach",
				body: "We follow clean coding standards, performance optimization, and rigorous QA to deliver reliable, high-performing websites.",
			},
			{
				title: "Flexible Pricing & Engagement Models",
				body: "Choose from hourly, monthly, or dedicated team models based on your agency's needs.",
			},
		],
	},

	tableCompareAdvanced: {
		eyebrow: "White Label WordPress",
		title: "Development Pricing",
		note: "Recurring Plans: Your dedicated dream team for everyday development support. Buckets of Hours: Perfect for one-off projects you need completed, fast.",
		plans: [
			{
				name: "Business",
				description: "6–8 Hours Daily",
				ctaLabel: "Get Started",
				ctaHref: "popup",
				badge: "30% cheaper than bucket of hours",
				featureGroupTitle: "What's included in all plans",
				features: [
					"Unlimited Tasks",
					"New Site Development",
					"Unlimited Sites",
					"WordPress",
					"PPC",
					"SEO",
				],
				isBucket: false,
			},
			{
				name: "Pro",
				description: "3–4 Hours Daily",
				ctaLabel: "Get Started",
				ctaHref: "popup",
				badge: "30% cheaper than bucket of hours",
				featureGroupTitle: null,
				features: [
					"Project Management Tool",
					"Live Chat / Instant Messaging",
					"US Time Zone",
					"Dedicated Project Manager",
					"24–48 Hours Turnaround",
					"14-Day Money Back Guarantee",
				],
				isBucket: false,
			},
			{
				name: "Starter",
				description: "1–2 Hours Daily",
				ctaLabel: "Get Started",
				ctaHref: "popup",
				badge: "30% cheaper than bucket of hours",
				featureGroupTitle: "Not decided yet?",
				altCtaLabel: "Book a call",
				altCtaHref: "popup",
				features: [],
				isBucket: false,
			},
			{
				name: "Bucket of hours",
				description:
					"Only need occasional help? Buy an hourly bucket — valid for a whole year",
				buckets: [
					{ label: "40 hours", ctaLabel: "Buy Now", ctaHref: "popup" },
					{ label: "80 hours", ctaLabel: "Buy Now", ctaHref: "popup" },
				],
				isBucket: true,
			},
		],
		btnArrow: BTN_ARROW,
	},

	cta: {
		text: "Make Your Business Global with Icecube Digital's White Label WordPress Development Services.",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "How Do Secure WordPress Payment Integrations",
		title: "Boost Client Trust?",
		subtitles: [
			"We integrate secure, scalable, and globally trusted payment gateways to ensure seamless transactions and build customer trust for your clients. Every integration is implemented with strict security standards, PCI compliance, and optimized checkout flows to maximize conversions and reduce drop-offs.",
		],
		items: [
			{
				icon: "/assets/icons/stripe-icon.svg",
				title: "Stripe Payment",
				body: "Stripe offers seamless credit card processing with a flexible API for advanced customization. We integrate Stripe to provide a smooth, secure payment experience that supports multiple currencies and payment methods, helping businesses cater to a global customer base.",
			},
			{
				icon: "/assets/icons/authorize-net-icon.svg",
				title: "Authorize.net",
				body: "Known for its robust security features, Authorize.net ensures secure and reliable payment processing. We implement Authorize.net to handle transactions efficiently, offering a trusted solution for businesses that prioritize fraud protection and reliable payment management.",
			},
			{
				icon: "/assets/icons/paypal-icon.svg",
				title: "PayPal",
				body: "PayPal is a popular, globally recognized gateway that simplifies online payments. We integrate PayPal into your site for secure, one-click payments, allowing customers to complete transactions easily without needing to enter card details directly.",
			},
			{
				icon: "/assets/icons/card-connect-icon.svg",
				title: "Card Connect",
				body: "Card Connect provides secure and scalable payment processing solutions. We integrate it into your site to streamline payment processing, ensuring PCI compliance and fraud protection, which helps your business maintain smooth operations with fewer security risks.",
			},
			{
				icon: "/assets/icons/virtual-merchant-icon.svg",
				title: "Virtual Merchant",
				body: "Virtual Merchant offers flexibility in payment processing, handling transactions from multiple devices. We integrate it to support a variety of payment methods, providing a versatile solution for businesses looking to offer convenience and security to their customers. If any issues arise, our WordPress support team ensures quick resolutions.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "How WordPress Page Builders Help Agencies",
		title: "Deliver High-Quality Websites?",
		subtitle:
			"We leverage industry-leading WordPress page builders to help agencies deliver high-quality websites faster, with greater flexibility and minimal development overhead.",
		items: [
			{
				icon: "/assets/icons/elementor-icon.svg",
				title: "Elementor",
				body: "Elementor allows for highly customizable designs with drag-and-drop simplicity. Our team uses its advanced features to craft visually appealing, fast-loading websites that can be easily updated. It's a favorite among clients for its flexibility and user-friendly interface.",
			},
			{
				icon: "/assets/icons/beaver-builder-icon.svg",
				title: "Beaver Builder",
				body: "Beaver Builder offers a powerful yet straightforward page-building experience. We use it to create responsive designs that load quickly across devices. Its clean code and reliable performance make it an ideal choice for scalable, high-quality websites.",
			},
			{
				icon: "/assets/icons/divi-icon.svg",
				title: "Divi Builder",
				body: "Known for its all-in-one design capabilities, Divi Builder enables rich, dynamic web pages. We utilize its wide range of layouts and design modules to build visually stunning websites that are easily customizable, giving you a unique edge in the market.",
			},
			{
				icon: "/assets/icons/wpbakery-icon.svg",
				title: "WPBakery Builder",
				body: "WPBakery's frontend and backend editing options provide versatility for developers and end-users alike. We harness its flexibility to create custom, highly responsive websites that meet both aesthetic and functional requirements, perfect for more complex designs.",
			},
			{
				icon: "/assets/icons/gutenberg-icon.svg",
				title: "Gutenberg",
				body: "Gutenberg offers a block-based editing experience, ideal for creating simple yet powerful layouts. Our team leverages Gutenberg's native integration with WordPress to build lightweight, fast-loading sites while ensuring easy content updates and management for your clients.",
			},
			{
				icon: "/assets/icons/siteorigin-icon.svg",
				title: "Site Origin Builder",
				body: "Site Origin Builder is known for its simplicity and reliability. As a white-label WordPress agency, we use this builder to design responsive websites with clean layouts. Its widget-based system provides flexibility, allowing us to tailor each site to specific business needs with minimal overhead.",
			},
			{
				icon: "/assets/icons/be-builder-icon.svg",
				title: "BE Builder",
				body: "BE Builder offers a highly visual approach to website creation. We leverage its intuitive design interface to quickly build engaging, responsive sites, ensuring that clients can easily manage and modify content while maintaining a professional look and feel.",
			},
			{
				icon: "/assets/icons/avada-builder-icon.svg",
				title: "Avada Builder",
				body: "Trusted by over 900,000 businesses, Avada Builder's powerful drag-and-drop interface, Fusion Elements library, and live front-end editing let our team craft feature-rich, conversion-focused websites with precision — delivering premium results for your clients every time.",
			},
		],
	},

	processSteps: {
		eyebrow: "What Is the Step-by-Step Process of White Label",
		title: "WordPress Development?",
		subtitle:
			"A successful white label WordPress project depends on a structured, transparent, and scalable process. Here's how we work as your extended development team:",
		steps: [
			{
				title: "Requirement Analysis & Brand Understanding",
				body: "We deeply understand your client's business goals, brand guidelines, and technical requirements.",
			},
			{
				title: "Strategy & Technical Planning",
				body: "Our design and development teams collaborate to create a scalable execution plan aligned with your delivery timelines.",
			},
			{
				title: "White Label Communication Alignment",
				body: "We align with your communication process and incorporate feedback seamlessly under your brand.",
			},
			{
				title: "Development & Implementation",
				body: "Our developers build high-performance WordPress solutions using clean, scalable code.",
			},
			{
				title: "QA & Performance Testing",
				body: "We conduct rigorous testing for speed, security, responsiveness, and functionality.",
			},
			{
				title: "Deployment & Launch Support",
				body: "We ensure smooth deployment with zero downtime and full technical support.",
			},
			{
				title: "Ongoing Support & Maintenance",
				body: "We provide continuous updates, fixes, and enhancements to keep your client websites performing at their best.",
			},
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "White Label WordPress",
		title: "Development FAQs",
		items: [
			{
				question: "What is white label WordPress development?",
				answer: "White label WordPress development allows us to build WordPress websites under your agency’s name. We handle the technical work while you focus on client relationships and growing your business.",
			},
			{
				question: "Do you work under our brand name?",
				answer: "Yes, all our services are 100% white label. We work as an extension of your team, under your brand, with no direct client interaction unless required.",
			},
			{
				question: "What services do you offer?",
				answer: "We offer full-service white label WordPress development, including custom theme development, plugin integration, website maintenance, speed optimization, and more—all tailored to your clients’ needs.",
			},
			{
				question: "Can you scale with our agency as we grow?",
				answer: "Absolutely. Whether you need occasional support or a dedicated team, we can scale resources up or down based on your project volume and business growth.",
			},
			{
				question: "How do you communicate and manage projects?",
				answer: "We integrate with your preferred tools such as Slack, Trello, Asana, or ClickUp. You receive regular updates, milestone tracking, and full visibility into project progress.",
			},
			{
				question: "Do you offer dedicated developers or shared resources?",
				answer: "We offer both dedicated and shared resource models depending on your needs, ensuring flexibility and cost-efficiency for your agency.",
			},
			{
				question: "How long does it take to build a website?",
				answer: "The time to build a website depends upon your requirements. A customized website may take 4-5 weeks, whereas a templated website may take 1-2 weeks. For more exact details, you can fill out the given form, and our experts would be happy to help you.",
			},
			{
				question: "How do you ensure quality and deadlines?",
				answer: "We follow rigorous quality assurance processes, including code reviews and testing, to ensure flawless results. Our team is deadline-driven, ensuring every project is delivered on time.",
			},
			{
				question: "Will we own the website?",
				answer: "Yes, absolutely. Once the project is delivered, your agency owns the website entirely, including the design, code, and intellectual property.",
			},
			{
				question: "Can you work on existing websites?",
				answer: "Yes, we can optimize, troubleshoot, and enhance existing websites to align with your clients’ needs.",
			},
			{
				question: "Do you provide SEO support?",
				answer: "Yes, at Icecube Digital, we understand that SEO is a crucial part of every website. We have SEO experts to help the white label development team with on-page SEO , site speed optimization, keyword-rich content management, and website maintenance.",
			},
			{
				question: "Do you sign NDA and ensure confidentiality?",
				answer: "Yes, we strictly follow NDA agreements and ensure complete confidentiality of your client data, projects, and business processes.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WhiteLabelWordPressDevelopment;
