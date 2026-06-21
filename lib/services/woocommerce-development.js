const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WoocommerceDevelopment = {
	slug: "woocommerce-development-services",
	pageTitle: "WooCommerce Development Company | Icecube Digital",
	metaDescription: "Icecube Digital is a leading WooCommerce development company — custom store design, plugin and theme development, migrations, speed optimization, and SEO-friendly WooCommerce websites built to grow your eCommerce sales.",

	banner: {
		heading: "Woocommerce Development Company",
		paragraphs: [
			"Icecube Digital is the most reputable WooCommerce development company worldwide. Icecube Digital offers small and large businesses comprehensive website design services. Our team of skilled website designers and knowledgeable digital marketing experts employ the most recent technologies and tried-and-true methods to produce dynamic business websites and web applications that are user-friendly and increase client reach.",
			"To help you boost your eCommerce sales, our team of certified Woocommerce specialists meets all your design, development, and support needs. We adhere to a reliable project development procedure with open dialogue at all levels. We are a fantastic fit for businesses searching for feature-rich, engaging, and WooCommerce development services at a reasonable budget frequently.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free WooCommerce Store Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	// Figma "Our Portfolio" / case-study section mapped to the standard portfolio component (fetched by postIds).
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

	// common section: components/home/GetQuoteSection.js ("Let's Work Together")
	getQuote: true,

	plainText: {
		eyebrow: "Leverage Your Business With The Best Woocommerce",
		title: "Development Company",
		contentAlign: "center",
		paragraphs: [
			[
				"Setting up a website and then forgetting about it is not the best strategy due to the high expectations of the audience and the intense competition. You only have a little window to pique users' curiosity and establish a competitive advantage. It is essential to ensure your website offers a fantastic user experience if you do not want potential customers to leave, visit your competitor's sites, and boost their sales. Therefore, our WooCommerce experts have offered small and large organizations the best WooCommerce web development services since its inception in 2011. We produce extraordinary outcomes for your WooCommerce-based webshop project with our thorough comprehension of your business goals, years of experience, and efficient project management procedure. We help you market your online business effectively by utilizing our ",
				{ text: "eCommerce SEO services", href: "/ecommerce-seo-services/" },
				" to increase sales.",
			],
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Why Businesses Choose Icecube Digital for",
		title: "WooCommerce Development?",
		items: [
			{
				icon: "/assets/icons/check-circle.svg",
				title: "It's Free",
				body: "Having a free platform available while putting up your new eCommerce website is a huge advantage. You can scale up your firm as needed as it expands.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Highly Customizable",
				body: "While you may build up a basic eCommerce website with the WooCommerce plugin, you can adapt it to get any special functionality needed. WooCommerce is a cult favorite with its limitless customizability options.",
			},
			{
				icon: "/assets/icons/squre.svg",
				title: "Professional Yet Simple",
				body: "Our bespoke web design services result from a process collaboration. Our services provide your visitors with an immersive online experience with the help of our team of knowledgeable website designers.",
			},
			{
				icon: "/assets/icons/wordpress.svg",
				title: "Seamless WordPress Integration",
				body: "Since WooCommerce is a WordPress Plugin, it has the edge over other platforms. Our WooCommerce development services easily interact with WordPress to build reliable websites.",
			},
			{
				icon: "/assets/icons/pc.svg",
				title: "Extensive Theme Options",
				body: [
					"Our skilled team of ",
					{ text: "WooCommerce developers", href: "/hire-woocommerce-developers-experts/" },
					" can provide the ideal solution if you want to modify a pre-made theme or create a custom theme from scratch. We offer robust and expandable themes to boost your sales and aesthetics.",
				],
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "In-Built Payment Process",
				body: "With the built-in payment gateways, such as Stripe, Paypal, Credit Cards, Bank Transfers, Checks, and even Cash on Delivery, our custom WooCommerce development services support a variety of services, gateways and payment and shipping methods based on the demands of your business.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Excellent SEO Support",
				body: "Remember WordPress is synonymous with WooCommerce. This makes it an obvious choice for SEOs. Your page will rank highly with our effective SEO-friendly strategies.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Simplified Dashboard Interface",
				body: "With the help of automated tax computations, real-time shipping rates, and mobile apps for iOS and Android, achieve complete administrative control quickly.",
			},
			{
				icon: "/assets/icons/edit-board.svg",
				title: "Built-in Blogging",
				body: "Since WordPress was originally made for bloggers, the WordPress compatibility offered under our WooCommerce development services allows you to instantly post engaging content and blogs on your WooCommerce site.",
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Industry-Leading WooCommerce Development",
		title: "Services in the USA",
		contentAlign: "center",
		paragraphs: [
			"We've worked with brands across industries—food, telecom, fintech, manufacturing, automotive, and more. Our WooCommerce development agency delivers stores that are secure, scalable, and optimized for revenue growth.",
			"Using creative thinking and a strategic approach, our full-stack developers build high-quality WooCommerce applications designed to help your business reach a wider audience and maximize its digital presence.",
		],
	},

	achievements: achievementsSection,

	topIconBoxSecondary: {
		eyebrow: "Woocommerce",
		title: "Development Services",
		items: [
			{
				icon: "/assets/icons/edit-board.svg",
				title: "WooCommerce Website Design",
				body: "We don't just build simple websites. Our WooCommerce designers passionately do WooCommerce web design that interact with your customers and motivate them to buy your products. All our websites are responsive that works seamlessly on any device your customers use to surf your website.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "WooCommerce Development",
				body: "As an experienced WooCommerce development agency, we will build an eCommerce website that is fully capable to fulfil unique needs of your business and your end customers. We develop your website with guarantee that your website is best optimized for speed and 100% search engine friendly.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "WooCommerce Plugin Development",
				body: "WooCommerce has thousands of plugins available to fulfil almost any of your eCommerce business needs. Though if you need a custom WooCommece plugin developed for your idea, Our expert developers can build it for you without breaking your project budget.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Migration to WooCommerce",
				body: "Looking to migrate your Shopify or Magento eCommerce website to WooCommerce? We have an easy and effective migration process. Our WooCommerce specialists understand all pain points that merchants face while migrating to the platform.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "WooCommerce Custom Development",
				body: "One of the nice things of WooCommerce platform is that it can be easily customized to cater to any of your unique business needs. Hire expert WooCommerce developer from team IceCube Digital to develop custom eCommerce functionalities to sell more with your WooCommerce based web store.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "WooCommerce Speed Optimization",
				body: "Is your website not performing well? Are you facing conversion optimization issues on your website? Our WooCommerce Consultant will help to identify the performance issues and rectify them to achieve super-fast loading speed.",
			},
		],
	},

	checkList: {
		eyebrow: "Why To Work With Woocommerce Website",
		title: "Development Agency",
		benefitsLeft: [
			"In-house team of certified WooCommerce experts",
			"Transparent communication with daily updates",
			"200+ successful eCommerce stores built",
		],
		benefitsRight: [
			"12+ years of hands-on WooCommerce development experience",
			"Flexible pricing—hourly or fixed project",
			"24/7 technical support",
		],
	},

	infoBox: {
		eyebrow: "Expert WooCommerce Development for Your",
		title: "eCommerce Success",
		items: [
			{
				title: "Enticing Designs",
				body: "The design and navigation are responsible for the online purchasing experience. Being a leading WooCommerce development agency, we ensure the component is done well with our WooCommerce website development services.",
			},
			{
				title: "Proficient Developers",
				body: "Leading brands worldwide have hired our qualified WooCommerce developers to work on B2B and B2C projects. We have an edge due to our significant expertise in dealing with practically all industry verticals.",
			},
			{
				title: "SEO Friendly",
				body: "SEO is something to consider while building a website. Therefore, we can deliver WooCommerce development services that perform better and generate higher ROIs.",
			},
			{
				title: "Holistic Workflow",
				body: "At Icecube Digital, we operate according to a holistic workflow forcing us to consider every conceivable eventuality before starting a project. The comprehensive research of your organization and its eCommerce requirements ensures a high-quality WooCommerce site development.",
			},
			{
				title: "Interactive Prototypes and AI Technologies",
				body: "We adopt brand-new, cutting-edge eCommerce trends to help you keep up with developments worldwide. Our solutions include AI technologies and interactive strategies to meet evolving demands and trends of your company.",
			},
			{
				title: "Round-The-Clock Support",
				body: "We offer a support term during which our devoted developers manage any anomalies or urgent eCommerce issues. By doing this, you can be confident that your website will be safe from any unusual problems that might arise once the project completes.",
			},
			{
				title: "On-Time Delivery",
				body: "Our WooExperts give you the most precise time estimate before every project, and we ensure to deliver the project even earlier than the deadline.",
			},
			{
				title: "Exceptional Customer Service",
				body: "We ensure you never experience an unresponsive website. You can be sure that your WooCommerce store is always operational.",
			},
			{
				title: "Forward-Thinking Management",
				body: "An intimately familiar staff with managing eCommerce websites is necessary. Our team of seasoned professionals consistently rises to the challenge, which makes us a dependable WooCommerce firm.",
			},
		],
	},

	processSteps: {
		eyebrow: "Our WooCommerce",
		title: "Development Process",
		columns: 2,
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
		steps: [
			{
				title: "Discovery",
				body: "Our WooCommerce development process starts with discovery. We take the time to understand your business goals, who your target customers are, and the technical requirements unique to your store. This phase sets a clear direction for creating a strategy that meets your specific needs, establishing a strong foundation for a successful eCommerce site.",
			},
			{
				title: "Configuration",
				body: "Next is configuration. We set up your WooCommerce environment, integrating essential plugins, payment gateways, and shipping options. Our team ensures these configurations align with how you operate, creating a smooth and efficient base for development that fits seamlessly into your workflow.",
			},
			{
				title: "Mockups",
				body: "In the mockup phase, we create visual drafts of your store's layout. This preview offers a clear picture of the design and functionality, allowing adjustments to be made early, ensuring alignment with your brand.",
			},
			{
				title: "Development",
				body: "With the mockups approved, we move into development. As a WooCommerce website development company, our team codes each feature, integrates tools, and optimizes performance, building a fully operational store tailored to handle your business demands.",
			},
			{
				title: "Quality Assurance",
				body: "Before going live, our team performs quality checks to confirm the site's performance, responsiveness, and security. We resolve any issues promptly, making sure the user experience is smooth across all devices.",
			},
			{
				title: "Deployment",
				body: "In the final stage, we launch your WooCommerce store. We handle the technical details of deployment and offer post-launch support, ensuring your store runs smoothly from day one.",
			},
		],
	},

	infoBoxSecondary: {
		eyebrow: "WooCommerce Development:",
		title: "Challenges And Solutions",
		items: [
			{
				title: "Data Security & Protection",
				body: "Ensuring data security is critical for any WooCommerce store. Implementing SSL certificates, regular backups, and secure hosting solutions protects sensitive customer information and maintains trust in your store's integrity.",
			},
			{
				title: "Customer Support Enhancement",
				body: "Providing efficient customer support can increase satisfaction and loyalty. Adding live chat, automated responses, or customer support plugins to your WooCommerce setup enhances communication and helps resolve issues quickly.",
			},
			{
				title: "Payment Gateway Issues",
				body: "Payment gateway issues can disrupt sales. Testing gateways before launch and choosing reliable providers helps to ensure seamless transactions, improving the checkout experience and maintaining a smooth purchasing process.",
			},
			{
				title: "Plugin & Theme Compatibility",
				body: "Plugins and themes sometimes conflict, affecting site performance. Regular updates, testing, and using plugins compatible with WooCommerce store development services help reduce conflicts, keeping your site stable.",
			},
			{
				title: "Inventory Management",
				body: "Managing inventory effectively is essential for customer satisfaction. WooCommerce offers various tools for tracking stock, managing order statuses, and preventing overselling, ensuring accurate and reliable inventory control.",
			},
			{
				title: "Checkout Optimization",
				body: "Optimizing the checkout process reduces cart abandonment. Simplified checkout steps, trust badges, and clear shipping information contribute to a faster, smoother purchasing experience that can increase conversions.",
			},
		],
	},

	cta: {
		text: "Maximize Your Sales Potential With Our WooCommerce Development Services!",
		ctaLabel: "Contact Us Today For a Free Consultation",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	leftIconBox: {
		eyebrow: "Your Guide to WooCommerce Development",
		title: "Best Practices",
		columns: 1,
		items: [
			{
				icon: "/assets/icons/announcement.svg",
				title: "Introduction to WooCommerce",
				body: "WooCommerce is a powerful eCommerce platform for WordPress that offers flexibility and scalability for online businesses. Understanding its key features, extensions, and integrations helps you maximize its potential. This introductory stage covers its benefits, setup requirements, and customization possibilities, preparing you to create a store that aligns with your business goals.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Installation and Setup",
				body: "Installing WooCommerce is straightforward but setting it up effectively requires thoughtful planning. During setup, configure essential settings, add products, and establish store policies. Careful attention to shipping, tax options, and payment gateways ensures a solid foundation that's tailored to your specific operational needs.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Customizing WooCommerce Themes",
				body: "Customizing your WooCommerce theme allows you to create a distinct brand experience. From adjusting layouts to adding branded elements, your theme can be tailored to match your identity and appeal to your target audience. Proper customization helps create a cohesive, visually appealing shopping environment.",
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "Payment Gateway Integration",
				body: "A reliable payment gateway integration is crucial for smooth transactions. WooCommerce supports multiple gateways, allowing customers flexibility at checkout. Choosing a secure, user-friendly option enhances trust and streamlines the purchasing process, contributing to an improved overall shopping experience.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Security Best Practices",
				body: "Maintaining a secure WooCommerce store requires ongoing effort. Implementing SSL certificates, strong password policies, and regular backups can help protect customer data. Adopting security plugins and monitoring activities also ensures that potential threats are identified and managed quickly.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO and Performance Optimization",
				body: "Optimizing SEO and performance ensures your WooCommerce store is visible and runs efficiently. Proper keyword usage, fast-loading pages, and mobile responsiveness enhance search engine ranking and user experience, helping drive traffic and encourage customer engagement.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Maintenance and Updates",
				body: "Regular maintenance and updates keep your store secure and functional. By staying on top of WooCommerce core, theme, and plugin updates, you reduce potential security risks and enhance site performance. Scheduled maintenance also ensures a seamless experience for your customers.",
			},
		],
	},

	faq: {
		eyebrow: "WooCommerce",
		title: "Development FAQs",
		items: [
			{
				question: "How Much Does Woocommerce Development Cost?",
				answer: "We can assure you of an affordable way to complete the project for the lowest cost. Our comprehensive planning reduces the time and effort required for your project, ultimately saving you money.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Do You Sign a Non-Disclosure Agreement (NDA) to Maintain Privacy?",
				answer: "Yes. We're happy to sign an NDA before discussing your project in detail. You can use your own NDA or ours; once it's signed by both parties, we proceed while keeping all your business information, data, and ideas strictly confidential.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How Much Time Does It Take To Build A Woocommerce Website?",
				answer: "Timelines depend on scope. A straightforward store using a pre-built theme can be ready in 2–4 weeks, while a fully custom WooCommerce site with bespoke features and integrations typically takes 6–12 weeks or more. After reviewing your requirements, we provide a clear, milestone-based timeline.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How Do I Track The Woocommerce Development Progress Of The Project?",
				answer: "We keep you updated through regular check-ins and project management tools like Jira, Trello, or Asana, along with your preferred channels — email, Slack, or video calls. You'll have visibility into milestones and progress at every stage, with a dedicated point of contact for questions.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Do You Provide Post-Completion Support For The Woocommerce Projects After The Project Delivery?",
				answer: "Yes. We offer ongoing post-launch support and maintenance including bug fixes, updates, security monitoring, and feature enhancements. You can choose a support plan that fits your needs to keep your WooCommerce store secure, fast, and up to date.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Do You Optimize The Websites For SEO?",
				answer: "Absolutely. We build SEO-friendly WooCommerce stores with clean code, optimized site structure, fast load times, mobile responsiveness, and proper meta data and schema. We can also provide ongoing eCommerce SEO services to improve rankings, traffic, and conversions.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Is Woocommerce Suitable For A Large Store?",
				answer: "Yes. WooCommerce is highly scalable and, with the right hosting, architecture, and optimization, can handle large catalogs and high traffic. Our developers configure caching, databases, and performance enhancements to keep even large stores fast and reliable.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How To Boost Conversions For My Woocommerce Site?",
				answer: "We boost conversions by streamlining checkout, improving page speed and mobile experience, adding trust signals, optimizing product pages, and implementing tools like upsells, abandoned-cart recovery, and personalized recommendations — backed by analytics and ongoing testing.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Is It Possible To Sell Subscription-Based Products Or Services With Woocommerce?",
				answer: "Yes. Using WooCommerce Subscriptions and related extensions, we can set up recurring billing for subscription products and services, including free trials, sign-up fees, and flexible billing intervals, fully integrated with your payment gateways.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How Can I Integrate New Features Into The Woocommerce Website?",
				answer: "New features can be added through existing plugins, custom plugin development, or custom code, depending on your needs. Our developers assess the best approach, ensure compatibility with your theme and plugins, and test thoroughly before deploying any new functionality.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What Payment Types Do You Accept?",
				answer: "We accept payments via major methods including bank transfer, credit/debit cards, PayPal, and other standard options. Share your preference and we'll align on the most convenient payment method for your engagement.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Do You Offer A Payment Schedule?",
				answer: "Yes. We offer flexible, milestone-based payment schedules so payments are tied to project stages rather than paid all at once. We'll agree on a clear, transparent schedule upfront that works for your budget and the scope of work.",
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

export default WoocommerceDevelopment;
