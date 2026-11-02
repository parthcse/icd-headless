const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const ShopifyDevelopment = {
	slug: "shopify-development-services",
	pageTitle: "Shopify Development Company | Shopify Experts | Icecube Digital",
	metaDescription:
		"Icecube Digital is a Shopify development company delivering high-performing, conversion-focused Shopify stores — custom development, theme design, migration, app integration, and performance optimization that scale your eCommerce revenue.",

	banner: {
		heading: "Shopify Development Services",
		paragraphs: [
			"We provide expert Shopify development services, tailored for both emerging and established eCommerce brands. Icecube Digital's in-house team of Shopify developers builds high-performance eCommerce sites focused on seamless user experiences that drive engagement. Projects are delivered on schedule and within budget, leveraging our skills in design, development, and marketing to address complex requirements and deliver effective solutions for our clients.",
		],
		checklistItems: [
			"400+ Shopify & eCommerce projects delivered",
			"14+ years of development experience",
			"Conversion-focused & performance-driven approach",
			"Up to 40% conversion uplift for optimized stores",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Shopify Store Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	achievements: achievementsSection,

	imageText: {
		eyebrow: "AI-Powered Shopify Development for Scalable",
		title: "eCommerce Growth",
		image: "/assets/photos/shopify-ai-powered-development.svg",
		imageAlt: "AI-powered Shopify development from initial setup through customization to scale",
		paragraphs: [
			"At Icecube Digital, we prioritize aligning our Shopify development services with your business goals. Our team collaborates closely with you to create a tailored strategy, delivering solutions that drive measurable growth and support your store's scalability. From initial setup to advanced customizations and performance optimization, we provide complete support to keep your store competitive.",
			"Our developers focus on maximizing site speed, enhancing user experience, and increasing conversion rates through proven practices and data-driven insights. Beyond development, our expertise extends to SEO and UX/UI design, ensuring a comprehensive approach to improve your store's performance. By partnering with us, you gain a reliable team dedicated to driving your Shopify store's growth and long-term success.",
		],
	},

	portfolio: {
		eyebrow: "Shopify Development",
		title: "Case Studies",
		subtitle: "See how we help eCommerce brands build, optimize, and scale high-performing Shopify stores. Our work focuses on improving conversions, increasing revenue, and delivering seamless user experiences across every touchpoint.",
		postIds: [40919, 40962, 40884],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "What Does a Shopify Development",
		title: "Company Do?",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "A Shopify development company designs, builds, customizes, and optimizes online stores on Shopify and Shopify Plus. That includes custom theme development (Liquid and Online Store 2.0), app and API integrations, headless builds with Hydrogen, conversion-focused UX, performance and Core Web Vitals optimization, platform migrations (from WooCommerce, Magento, BigCommerce), and ongoing support. A successful agency treats your store as a revenue asset tying every design and code decision to measurable conversion and revenue outcomes, not just launch." },
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	imageTextSecondary: {
		eyebrow: "Custom Shopify Development Solutions Tailored to",
		title: "Your Business Goals",
		image: "/assets/photos/shopify-business-goals.png",
		imageAlt: "Custom Shopify development solutions tailored to your business goals",
		imagePosition: "right",
		paragraphs: [
			"In the big, wide world of ecommerce, you need the right tools and the right partners to stand out in the cluttered marketplace of today. This is where Shopify comes into the picture. Powering over 600,000 online stores, It is the preferred platform for brands of all sizes – from small mom-and-pop establishments to big Fortune 500 brands. Simple yet powerful, easy to manage – It has emerged as one of the most sought-after ecommerce platforms.",
			"Once you have chosen Shopify as the platform for your ecommerce store, the next step is to find the right Shopify website development partner. This is where we come in. Here at Icecube Digital, we blend our technical expertise in it with our vast experience in ecommerce to design, develop and optimize cutting-edge Shopify powered ecommerce stores.",
		],
	},

	topIconBox: {
		eyebrow: "Budget-Friendly Shopify Development",
		title: "with Premium Performance",
		subtitles: [
			"Icecube Digital specializes in personalized Shopify development services tailored to develop your eCommerce store without a mess, keep it user-friendly, and help it convert high-end customers on a budget. We have experts relentlessly delivering effective, user-friendly solutions appropriate to your business vision, ensuring customer experience from beginning to end.",
		],
		items: [
			{
				icon: "/assets/icons/shopify.svg",
				title: "Shopify eCommerce Development",
				body: "From installation and configuration to integration and deployment, we offer a wide array of Shopify eCommerce development services to help your business meet its eCommerce objectives efficiently and quickly.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Custom Shopify Development",
				body: "We know that no two online stores, even when they sell the same products are similar. Whatever be your specific requirement, you can count on our team to provide you with the right Shopify website design that meets your specific objective.",
			},
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Set up Shopify Store",
				body: "We create and launch a completely responsive conversion-optimized Shopify store, with a touch of your brand identity, and work across all devices.",
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Shopify Integration",
				body: "Extend the functionalities of your existing store and provide your customers with an unparalleled eCommerce experience. Whether you're looking to upgrade your shopping cart APIs, integrate payment gateways, or any other third-party applications, we handle it all.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Shopify Migration",
				body: [
					"Our team of ",
					{ text: "Shopify expert developers", href: "/hire-shopify-developers-experts/" },
					" can migrate your existing eCommerce store from any platform to Shopify seamlessly. No having to worry about incompatibilities, dead links, broken navigation, we provide you with a better store experience when you switch to Shopify.",
				],
			},
			{
				icon: "/assets/icons/logo-design.svg",
				title: "Shopify Theme Design and Development",
				body: "Give your online store a makeover with our highly responsive and interactive themes. Our UX/UI designers are experts in creating the best eCommerce website design that works seamlessly across platforms, devices, and browsers.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "Shopify App Development",
				body: "Provide your customers with an enhanced shopping experience by creating a mobile app for your eCommerce store. We build highly responsive and robust apps, using the powerful Ruby on Rails framework.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Shopify SEO",
				body: "The Shopify platform has plenty of rich SEO features, which help your online store occupy a prime position on popular search engines like Google, Bing and more. We leverage the right SEO techniques to help you earn maximum ROI.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Shopify Apps Integration & Configuration",
				body: "We integrate and configure those must-have apps on Shopify that can boost your marketing, customer support, shipping workflow, and also your analytics insight.",
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "Payment and Shipping Zones Set-Up",
				body: "We make global sales much easier with the secure payment gateways and accurate shipping zones we set up for your business model and audience locations.",
			},
			{
				icon: "/assets/icons/inventory.svg",
				title: "Product & Inventory Set-Up",
				body: "It involves bulk uploads for products and configuration of inventory by us to manage back-end activities such as updating catalogues with ease.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Shopify Maintenance and Support",
				body: "Forget all your chaos revolving around your store and run it at high efficiency through our diverse and reliable maintenance plans, timely updates, and devoted technical support.",
			},
		],
	},

	imageTextTertiary: {
		eyebrow: "What Proven Shopify Strategies Can Help To",
		title: "Grow Your Online Store Efficiently?",
		image: "/assets/photos/shopify-growth-strategies.svg",
		imageAlt: "Proven Shopify growth strategies: define, build and convert, repeated as a loop",
		paragraphs: [
			"Your success is our priority. At Icecube Digital, we're driven by a commitment to understand your goals and translate them into effective Shopify solutions. Whether you're just starting or expanding an established brand, we take a strategic approach tailored to meet your specific objectives. We dive into what defines your business, identify growth opportunities, and craft a development plan that's targeted and results-focused.",
			"Our team brings extensive experience in Shopify development, handling everything from setup and custom functionality to complex integrations that improve site performance and streamline workflows. Each feature is crafted with care, ensuring it contributes to a smooth, engaging customer journey that drives repeat visits.",
			"Beyond technical buildouts, we pay close attention to UX/UI design, site speed, and conversion strategies, creating an eCommerce experience that's memorable and effective. Our approach is proactive and responsive, keeping your store running smoothly and equipped to compete in a fast-paced market.",
			"Work with us to create a Shopify store built around your business goals. With each step, we focus on your growth, delivering a Shopify solution that's practical, user-focused, and prepared for long-term success.",
		],
	},

	leftIconBox: {
		eyebrow: "Why Shopify Is the Smartest Choice for Scalable",
		title: "eCommerce Growth?",
		subtitle:
			"Shopify is a reliable and user-friendly platform for setting up and managing an online store. Be it that you are a beginner in the eCommerce business or a merchant looking to scale your existing business, Shopify stands by you with an adaptable, secure, and feature-enriched environment in every growth stage.",
		items: [
			{
				icon: "/assets/icons/mobile.svg",
				title: "Manage Your Store On-the-Go",
				body: "With Shopify's mobile app, you can monitor orders, update inventory, and communicate with customers directly from your smartphone, giving you control over your store from anywhere.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Mobile-Optimized Themes",
				body: "Shopify's mobile-responsive themes ensure a seamless shopping experience on any device, helping you reach more customers and improve engagement across mobile and desktop platforms.",
			},
			{
				icon: "/assets/icons/transport.svg",
				title: "Efficient Shipping Solutions",
				body: "Shopify integrates with major carriers, providing real-time shipping rates, label printing, and order tracking, which streamlines fulfillment and enhances the delivery experience for your customers.",
			},
			{
				icon: "/assets/icons/layers.svg",
				title: "Unlimited Products & Scalability",
				body: "Shopify supports unlimited products, allowing your store to grow without restrictions. Its scalable infrastructure ensures smooth performance as your business expands.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Multiple Payment Options",
				body: "Shopify offers a variety of payment gateways, giving customers flexible payment choices, including credit cards, digital wallets, and alternative methods that enhance the checkout experience.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Secure, PCI Level 1 Compliant Checkout",
				body: "Shopify's checkout is PCI Level 1 compliant, ensuring secure transactions for your customers and protecting their sensitive payment information with top-notch security standards.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Built-In Blogging for Content Marketing",
				body: "Shopify's built-in blogging tools make it easy to publish content, helping you attract organic traffic, engage with customers, and improve your store's visibility online.",
			},
			{
				icon: "/assets/icons/brand-tag.svg",
				title: "Simplified Coupon and Gift Card Management",
				body: "Easily create and manage discount codes and gift cards on Shopify, allowing you to run promotions and reward loyal customers without hassle.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "24/7 Support and Extensive App Store",
				body: "Shopify provides 24/7 customer support to assist you in resolving problems at any time, making store operations seamless.",
			},
		],
	},

	infoBox: {
		eyebrow: "Common Shopify Development Challenges and",
		title: "Solutions",
		items: [
			{
				title: "Customization Limitations",
				body: "While Shopify offers flexibility, its native options can restrict deep customization. Partnering with a Shopify ecommerce development company can help unlock advanced solutions tailored to your specific needs.",
			},
			{
				title: "Scalability Issues",
				body: "As stores grow, some businesses encounter performance slowdowns. Choosing the right setup and infrastructure solutions early on can prevent scalability challenges and keep your store running smoothly as demand increases.",
			},
			{
				title: "SEO Optimization",
				body: "Shopify has basic SEO features, but optimizing for competitive keywords requires expertise. Focusing on content, site structure, and speed can enhance your search engine ranking.",
			},
			{
				title: "Integration with Third-Party Tools",
				body: "Integrating apps and tools with Shopify can be complex. Selecting reliable plugins and having a clear plan for API integrations can streamline workflows and improve functionality.",
			},
			{
				title: "Security Concerns",
				body: "Protecting customer data is crucial. Shopify provides robust security features, but regular updates and monitoring are essential to prevent vulnerabilities.",
			},
			{
				title: "Cart Abandonment",
				body: "Cart abandonment is a common issue. Tactics like abandoned cart emails, optimized checkout flow, and simple payment options can help recover lost sales.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Shopify Features That Help Ecommerce Stores Grow Faster",
		title: "in the AI Era",
		subtitles: [
			"Being one of the strongest platforms in eCommerce today, Shopify carries features that literally make it unique. The tools are very powerful, with an easy-to-use interface, and provide scalable business solutions to companies that wish to build online stores and expand their trade.",
		],
		items: [
			{
				icon: "/assets/icons/brush.svg",
				title: "Customized Design",
				body: "Shopify provides front-end and theme customization with its proprietary templating language, Liquid.",
			},
			{
				icon: "/assets/icons/lock.svg",
				title: "Top-notch security",
				body: "Every Shopify store supports a built-in SSL certification. Besides, Shopify uses Google Cloud's cloud infrastructure with DDoS protection, data encryption, and daily backups.",
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Low Cost",
				body: "Shopify supports tiered monthly pricing with three plans: Basic, Shopify, and Advanced. Maintenance, server hosting, and software updates are handled entirely by Shopify, which reduces the operational overhead.",
			},
			{
				icon: "/assets/icons/logo-design.svg",
				title: "Modern Themes",
				body: "Shopify offers over 100 professionally designed themes, including free and paid options in the Shopify Theme Store. Themes can be customized using the Theme Editor, or developers can modify them using Liquid templates and assets.",
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "Payment Options",
				body: "Shopify Payments supports major credit cards, digital payment options, and even Buy Now Pay Later (BNPL) options. Shopify also integrates with 100+ payment gateways globally. The PCI DSS Level 1 compliance ensures secure payment processing.",
			},
			{
				icon: "/assets/icons/edit-board.svg",
				title: "Easy Editing",
				body: "Shopify's drag-and-drop builder and visual theme editor make it easy for non-technical users to build pages, add products, and manage content. Shopify's built-in CMS makes it easy for users to manage their products, webpages, blog posts, navigation, and media.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Smart Dashboard",
				body: "With just one intelligent dashboard, you can manage all your orders, products, customer data, reports, and get 360-degree visibility. It supports automated notifications, order fulfillment workflows, SKU and barcode management, and integration with shipping carriers.",
			},
			{
				icon: "/assets/icons/social-share.svg",
				title: "Social Integration",
				body: "The platform allows you to integrate your Shopify store to Facebook, Instagram, TikTok, Pinterest, and other social platforms through the Sales Channel feature. Sellers can sync the products to their social shop, run ads, and track performance, all through Shopify.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Built-in CMS",
				body: "Shopify's built-in CMS capabilities include dynamic sections and blocks, product tagging, metafield management, and content scheduling. The pages, blogs, and navigation workflows can be updated in real-time with the Admin Panel or through the API for headless CMS setups.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "App Ecosystem",
				body: "The Shopify App Store has 8,000+ apps, covering areas like marketing automation, SEO, analytics, dropshipping, loyalty programs, and shipping logistics. Using Shopify API, REST, and GraphQL, the functionalities can be integrated into Shopify.",
			},
			{
				icon: "/assets/icons/cloud-check.svg",
				title: "Reliable Infrastructure",
				body: "Shopify's infrastructure is optimized for eCommerce, offering 99.9%+ uptime, fast load speeds via CDN-backed delivery, and performance monitoring. The security certifications, robust disaster recovery, and scalable architecture ensure that your store remains safe and secure.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Support at 24/7",
				body: "Shopify provides round-the-clock support through live chat, email, or phone, so you will get prompt resolution of any issues. Furthermore, it also has a vast Help Center, developer documentation, community forums, and an active ecosystem of Shopify Experts.",
			},
		],
	},

	processSteps: {
		eyebrow: "Our Shopify Web Development",
		title: "Process",
		columns: 2,
		subtitle:
			"At Icecube Digital, we feel every Shopify store goes into assembling a large house, and it begins with having a strategic, well-laid-out development process. From scratch or revamping an already-existing site, we go by a results-driven model, which has produced high-performance, scalable e-commerce stores, all tailor-made for your unique goals.",
		steps: [
			{
				title: "Understanding Your Requirements",
				body: "This is where we take a really good dive into your business. The team learns all about the products, the industry, your customer personas & long-term aspirations. During this, we set a crystal clear vision of what your project should be and align our development methodology with your brand's vision. We build resonating stores designed for your audience that drives measurable growth.",
			},
			{
				title: "Creating a Roadmap",
				body: "We develop a clear, actionable roadmap, which includes deliverables, timelines, the important features, key integrations, and much more. So at any point during the whole course of the project, you will always know exactly what is happening. There are no surprises, and the whole smooth sailing project development is ensured. It is all well managed and well structured to meet your expectations.",
			},
			{
				title: "Design and Development",
				body: "Highly skilled designers develop an interface for users that balances beauty with usability and conversion potential. Aesthetics of the design will be customized according to your brand; however, functionality will never be sacrificed. Our developers then take the designs and implement them into a clean and SEO-optimized mobile-responsive Shopify store. Our coding best practices and the use of a scalable architecture ensure that no matter how fast your business grows, your store grows with it.",
			},
			{
				title: "Testing and Quality Assurance",
				body: "Prior to setting your site live, we ensure that every quality assurance possibility has been investigated. Our QA teams test every feature across browsers, devices, and screen sizes to ensure seamless browsing experience to all users. We validate everything, including functionality, performance, design accuracy, and usability, with the highest level of accuracy until we're satisfied that all errors are eliminated and a final product in its working condition is ready for launch.",
			},
			{
				title: "Deployment and Launch",
				body: "As soon as the final approval has been given and all tests are passed, we can commence with the deployment process. We safely and seamlessly execute all the technicalities needed to set up your Shopify store. While our deployment process takes care of performance monitoring, final SEO checks, and validation of the live environment, we ensure that your eCommerce site is good to attract and convert visitors from day one.",
			},
			{
				title: "Ongoing Support",
				body: "Our relationship doesn't end at launch. We provide continued support to ensure that your Shopify store is always operating at its very best level. From platform upgrades and security patches to feature enhancements and marketing integration, we will always be here to help your business adapt and grow. As your reliable Shopify development partner, we are always working behind the scenes to ensure that your store remains fast, functional, and future-proof.",
			},
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	leftIconBoxSecondary: {
		eyebrow: "Why Choose Icecube Digital as Your AI-Driven Shopify",
		title: "Development Agency?",
		subtitle:
			"As an experienced Shopify development agency, we have worked with different clients to deploy Shopify stores that have provided great results. Besides our experience working for brands in different industries, here are some reasons why you can trust Icecube Digital for Shopify development:",
		items: [
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Certified Shopify Experts",
				body: "The specialists in our company have certifications and comprehensive knowledge of the Shopify ecosystem.",
			},
			{
				icon: "/assets/icons/user-time.svg",
				title: "14+ Years of Experience",
				body: "We have served more than 200 enterprises to boost their online presence through our tailored eCommerce solutions.",
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Smooth Workflow & Timely Updates",
				body: "Our agile process ensures efficiency and clear communication, providing timely progress reports to keep you fully informed throughout the project.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "Client-Centric Approach",
				body: "All our decisions stem from what your business needs. We listen, customize, and deliver accordingly.",
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Affordable Pricing",
				body: "Premium custom Shopify development solutions in the USA without any agency price markup.",
			},
			{
				icon: "/assets/icons/ai-spark.svg",
				title: "AI-Powered Ecommerce Solutions",
				body: "We utilize AI tools to optimize recommendations, automate workflows, personalize experiences, and enhance marketing, ultimately helping your store grow faster.",
			},
		],
	},

	cta: {
		text: "Your Ecommerce Store Designed Just The Way You Want It! If You Can Dream It, We Can Build It.",
		ctaLabel: "Get A Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	infoBoxSecondary: {
		eyebrow: "What Shopify Basics Do I Need to Know to Run a",
		title: "Successful Store?",
		subtitle:
			"To get started, grasp the essentials of Shopify, including product listing, managing orders, and tracking sales. Knowing these basics empowers you to make informed decisions and navigate Shopify effectively.",
		items: [
			{
				title: "Choosing the Right Shopify Plan",
				body: "Each Shopify plan offers different features and transaction fees. Evaluate your business needs, budget, and growth goals to choose the plan that provides the best value for your online store.",
			},
			{
				title: "Selecting and Customizing Your Theme",
				body: "Shopify offers numerous themes with varied customization options. Selecting the right theme and adjusting design elements ensures your store aligns with your brand identity and provides a great user experience.",
			},
			{
				title: "Setting Up Product Pages",
				body: "Product pages play a critical role in conversions. Use high-quality images, write compelling descriptions, and set up categories to make products easy to find and appealing to customers.",
			},
			{
				title: "Payment Gateways and Shipping Setup",
				body: "Setting up payment gateways and shipping options is essential for a smooth checkout experience. Shopify supports multiple gateways, making it easier for customers to pay in their preferred way.",
			},
			{
				title: "SEO Optimization",
				body: "Optimizing your store for search engines boosts visibility. Use Shopify's SEO tools to manage meta tags, alt text, and URLs, ensuring your store ranks well for relevant keywords.",
			},
			{
				title: "Mobile Optimization",
				body: "With mobile shopping on the rise, it's crucial that your store functions seamlessly on mobile devices. Mobile-optimized designs improve user experience and increase engagement from mobile shoppers.",
			},
			{
				title: "Testing, Launching, and Maintenance",
				body: "Thorough testing ensures a smooth launch. After launching, consistent maintenance and updates keep your store functional and user-friendly. Shopify website development services include ongoing support to address any technical issues.",
			},
		],
	},

	imageTextQuaternary: {
		eyebrow: "How Does Shopify AI Transform eCommerce",
		title: "Efficiency?",
		image: "/assets/photos/shopify-ai-efficiency.svg",
		imageAlt: "Shopify generative AI tools: Shopify Magic and Shopify Sidekick",
		paragraphs: [
			"Website development used to be a tedious process, and now, with the evolving technologies, it has become more streamlined and easier. Jumping on with the trends, Shopify has introduced its game-changing Gen AI tools that are revolutionizing the creation and management of an eCommerce store.",
			"Generative AI automates the process of content generation, like text, images, audio, and other types of content. Shopify AI tools are based on Gen AI, and they assist citizen developers or developers in automating content creation, personalizing customer experiences, making support accessible all the time, and enhancing visuals.",
			"Shopify has integrated the Gen AI capabilities through two tools: Shopify Magic and Shopify Sidekick.",
		],
	},

	information: {
		eyebrow: "How Does Shopify Magic Simplify Content Creation and Store",
		title: "Management?",
		cards: [
			{
				blocks: [
					{ text: "Shopify Magic is a Gen AI tool that automates and streamlines the process of generation, editing, and translation of content across your store." },
					{ text: "From summarizing product reviews to generating product descriptions, answers to frequently asked questions, blog posts, email subject lines, and content for campaigns, Magic becomes your assistant in brainstorming and providing a first draft for different content types." },
					{ text: "Besides, it can even transform the image backgrounds, so you don't need to invest in professional editing apps, hire an editing expert, or spend hours explaining your requirements to editors. Magic makes it easier as it will work based on your prompts and instructions." },
				],
			},
		],
		ctaLabel: "Request a Demo!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	tableBasicSecondary: {
		eyebrow: "Shopify Magic",
		title: "Features & Benefits",
		columns: ["Features", "Benefits"],
		colWidths: ["50%", "50%"],
		boldColumns: [],
		contentAlign: "left",
		rows: [
			[
				"The automatic text generation speeds up the writing process.",
				"Shopify Magic features are available for free, regardless of your subscription plan. However, the access and availability of specific features will vary.",
			],
			[
				"Shopify Magic is integrated with Themes, so AI can be used to create a personalized theme for your store.",
				"It saves time, boost productivity, improves content quality, improves user experience, and scales with your business.",
			],
			[
				"It is integrated with the theme editor to generate Liquid code for custom theme blocks.",
				"The Gen AI tools are built upon Shopify's proprietary data and leading LLMs. No merchant store-level data is used to power Shopify Magic for other merchants.",
			],
			[
				"It can help in creating customer personas when you create a customer segment.",
				"The robust security architecture ensure data privacy and security.",
			],
			[
				"App review summaries are powered by Shopify Magic which helps in choosing the best apps for your store easily.",
				"-",
			],
		],
	},

	informationSecondary: {
		eyebrow: "Shopify Sidekick: Your AI Assistant for Smarter",
		title: "Store Operations",
		cards: [
			{
				blocks: [
					{ text: "While Magic assists with enhancing your website, Sidekick improves overall productivity by streamlining tasks. It is an AI-powered chatbot-style assistant that helps store owners conversationally interact with their store." },
					{ text: "Built on Shopify Magic, it is like your personal virtual sidekick or assistant that acts on your instructions. Whether you need information about the inventory, require assistance in order processing, getting reports and insights, or automating the tasks, Sidekick will intelligently answer your questions in everyday language and provide all the information you require instantly, accurately, and in context." },
					{ text: "Sidekick is trained to know all of Shopify, and is designed to operate within the context of each merchant's store. It can guide you through the Shopify dashboard, helping you make faster decisions and stay in control of your store operations without switching between tools." },
				],
			},
		],
		ctaLabel: "Request a Demo!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	tableBasicTertiary: {
		eyebrow: "Shopify Sidekick",
		title: "Features & Benefits",
		columns: ["Features", "Benefits"],
		colWidths: ["50%", "50%"],
		boldColumns: [],
		contentAlign: "left",
		rows: [
			[
				"Sidekick provides step-by-step guidance to perform a specific task in Shopify.",
				"Instead of searching through the knowledge base, Sidekick provides tailored answers to your queries, saving your time.",
			],
			[
				"Users can initiate a call with Sidekick, share the screen, explain the problem, and Sidekick will tell the next steps.",
				"The real-time conversation and on-screen guidance make issue resolution easier and instant.",
			],
			[
				"It can generate ready-to-use content copy for a variety of applications, like editing store content, emails, and blog posts.",
				"It supports explainable AI, as it can explain why the generated option is appropriate.",
			],
			[
				"Sidekick can help in creating metaobject and metafield entries, speeding up the process.",
				"From adding a new influencer to the store or updating an inseam metafield for a product, streamlines every process.",
			],
			[
				"It can create Shopify SQL queries using the Sales and Visits table and display a report visualization.",
				"-",
			],
		],
	},

	infoBoxTertiary: {
		columns: 2,
		contentAlign: "left",
		eyebrow: "How Can AI Tools Help Shopify Store Owners",
		title: "Increase Sales & Conversions?",
		items: [
			{
				title: "Create High-Quality Product Images with AI",
				body: "AI tools can automatically generate or upscale product images, making your store look professional without the need for expensive photoshoots. AI-driven retouching tools can reduce the editing time up to 70%. You can have a unique, realistic product images that could boost your catalog. Here's how you can use it:",
				bodyList: [
					"Create immersive and interactive 3D product previews",
					"Generate images for product categories that lack high-quality images",
					"Infuse lifestyle context into images to build up context",
				],
			},
			{
				title: "Edit and Enhance Product Photos Using AI",
				body: "With AI-powered editing tools, you can easily remove backgrounds, adjust lighting, and retouch images in seconds. This ensures your products always look their best, leading to higher click-through and conversion rates.",
				bodyList: [
					"Remove background consistently across the catalog images",
					"Adjust the colors and lighting and sharpen the image resolution",
					"Intelligently crop and resize the images batch and fix the subtle flaws",
				],
			},
			{
				title: "Personalize Customer Experiences with AI",
				body: "AI enables dynamic personalization by analyzing customer behavior and preferences. You can offer tailored product recommendations, personalized emails, and relevant offers, boosting engagement and increasing repeat purchases.",
				bodyList: [
					"Create persona descriptions to describe different customer segments",
					"Craft customized email sequences and campaigns as per customer journey",
					"Display product recommendations based on their past purchases and search history",
				],
			},
			{
				title: "Optimize Inventory and Supply Chain with AI",
				body: "AI-driven analytics help forecast demand, track stock levels, and automate restocking processes. This reduces overstocking and stockouts, ensuring you meet customer demand efficiently while cutting unnecessary costs.",
				bodyList: [
					"Utilize predictive analytics to get precise forecasts about product demand",
					"Identify the seasonal shifts in demand and trends of future",
					"Optimize delivery routes for reduced logistics costs and timely delivery",
				],
			},
			{
				title: "Generate Engaging Product Descriptions with AI",
				body: "Use AI to instantly generate compelling, SEO-optimized product descriptions. This saves time, ensures consistency, and helps improve search visibility and customer understanding of your products.",
				bodyList: [
					"Speed up the process of generating SEO-optimized headlines and meta descriptions",
					"Produce consistent and on-brand descriptions across the catalog",
					"Create localized page content for different languages and increase your reach",
				],
			},
			{
				title: "Leverage Conversational AI for Customer Support",
				body: "Implement AI chatbots to provide 24/7 support, answer common questions, assist with orders, and guide customers through the buying process. This not only improves customer satisfaction but also frees up your time to focus on growth.",
				bodyList: [
					"Provide instant, 24/7 answers to commonly asked queries",
					"Reduce the workload on the customer support executives as only complicated queries are directed to them",
					"Remind customers about cart abandonment with personalized reminders",
				],
			},
		],
	},

	tableBasicQuaternary: {
		eyebrow: "What Are the Key Differences Between Shopify With",
		title: "AI and Without AI?",
		columns: ["Features", "Shopify with AI", "Shopify Without AI"],
		colWidths: ["24%", "38%", "38%"],
		boldColumns: [0],
		contentAlign: "left",
		rows: [
			[
				"Store setup",
				"AI-powered personalized theme set-up with auto-written code for custom theme blocks",
				"Manual theme selection and customization",
			],
			[
				"Content Generation",
				"Automated with Gen AI tools with SEO optimization",
				"Manually written and optimized for search engines; time-consuming",
			],
			[
				"Customer Experience",
				"AI chatbots provide instant, 24/7 replies to queries, and direct the conversation to customer executive for something out of their scope.",
				"Limited to live agents and scheduled chatbots",
			],
			[
				"Marketing & Campaigns",
				"AI-driven targeting, copy generation, and campaign optimization",
				"Manual setup and audience targeting",
			],
			[
				"Order Processing",
				"Smart automated workflows for routine tasks, like confirmation and updates",
				"Requires manual input and workflow setup",
			],
			[
				"Analytics and Reporting",
				"AI-powered insights, visualized reports, and personalized recommendations",
				"static dashboard with limited insights",
			],
		],
	},

	tableBasic: {
		eyebrow: "Shopify or Shopify Plus: Which Is",
		title: "Right For You?",
		columns: ["Content", "Shopify", "Shopify Plus"],
		boldColumns: [0],
		colWidths: ["33.33%", "33.33%", "33.33%"],
		rows: [
			["Best for", "New & growing SMB stores", "High-volume / enterprise (typically $1M+ revenue)"],
			["Customization", "Themes, apps, Liquid", "Custom checkout, Shopify Functions, Scripts"],
			["Scale", "Standard infrastructure", "Handles thousands of orders/min, flash sales"],
			["Stores / markets", "Single store", "Multi-store, multi-region (Shopify Markets), B2B"],
			["Access", "Standard", "Expanded staff, automation (Flow), wholesale"],
		],
	},

	checkList: {
		eyebrow: "The Shopify Stack",
		title: "We Build In",
		benefitsLeft: [
			[{ bold: "Storefront:" }, " Liquid, Online Store 2.0 (sections everywhere, metafields/metaobjects), Dawn & custom themes, responsive/mobile-first."],
			[{ bold: "Headless:" }, " Hydrogen + Oxygen, Storefront API, custom React/Next.js front ends for app-like speed."],
			[{ bold: "Custom logic:" }, " Shopify Functions (custom discounts, shipping, payment rules), Checkout Extensibility, Shopify Scripts (Plus), custom apps via the Admin API."],
		],
		benefitsRight: [
			[{ bold: "Integrations:" }, " ERP, CRM, PIM, 3PL/inventory, payment gateways, Klaviyo & email/SMS, analytics."],
			[{ bold: "Migrations:" }, " WooCommerce, Magento/Adobe Commerce, BigCommerce → Shopify with URL/redirect, SEO, and data integrity preserved."],
			[{ bold: "Performance & trust:" }, " Core Web Vitals tuning, PCI-DSS-compliant checkout, accessibility (ADA/WCAG)."],
		],
	},

	imageTextBlocks: [
		{
			eyebrow: "Is Shopify the Right Choice for",
			title: "Your Business?",
			image: "/assets/photos/shopify-right-choice.svg",
			imageAlt: "Shopify at a glance: millions of stores in 175+ countries, PCI-DSS Level 1 checkout, and selling across online, social, marketplace and in-person channels",
			paragraphs: [
				"Shopify powers millions of live stores across 175+ countries and is one of the most widely used e-commerce platforms in the world, with a fully hosted, PCI-DSS Level 1-compliant checkout, a large app ecosystem, and built-in multi-channel selling.",
			],
			checklistItems: [
				"Easy to manage without dev skills",
				"Scalable infrastructure",
				"Secure checkout",
				"Flexible app integrations",
				"Mobile-optimized themes",
				"Built-in SEO and blogging",
			],
			ctaLabel: "Request a Free Quote",
			ctaHref: "popup",
			btnArrow: BTN_ARROW,
		},
	],

	plainTextSecondary: {
		eyebrow: "Get Started with Icecube Digital",
		title: "Today",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "If you want to take your online store to the next level with customized features, strong integrations, and a reliable performance, Icecube Digital is the one-stop shop Shopify development firm that delivers real results. Our talented team is at your service, whether you want total eCommerce solutions." },
			{ type: "p", text: "Engaging the services of a professional Shopify web development company guarantees a technically sound, secure, and future-ready store. A US-based Shopify development company like Icecube Digital is within the local market and ensures compliance while providing timely communication throughout the project." },
		],
		ctaLabel: "Get A Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Shopify",
		title: "Development FAQs",
		items: [
			{
				question: "What is Shopify?",
				answer: "Shopify is a cloud-based ecommerce platform to build, customize and manage an online store. It is a hosted platform that means you don't need to worry about maintaining and upgrading a web server for your eCommerce store. Shopify offers great features and flexibility to organize your products, customize your website theme, accept credit card and other payments, track and process online orders from any part of the world.",
			},
			{
				question: "How much does Shopify cost?",
				answer: "There are different Shopify plans to choose from based on your business needs. It will also depend on features and customization required on your eCommerce store. Monthly Subscription starts from $29.",
			},
			{
				question: "How can I set up blog on my shopify website?",
				answer: "Shopify has an inbuilt blog that you can use. It's free, quick & easy to set up with all basic blogging features such as inserting image or video, setting up SEO title and meta descriptions, comments tags etc.",
			},
			{
				question: "Do I need to buy hosting plan to use Shopify?",
				answer: "Shopify is a self hosted platform. Hosting is included with all the Shopify plans so you don't need to buy external hosting.",
			},
			{
				question: "Do you follow SEO best practices while building my website?",
				answer: "Shopify has strong SEO features. Our SEO experts & Shopify development team work together to optimize your website for best SEO at all levels.",
			},
			{
				question: "Is it difficult to build a custom theme on Shopify?",
				answer: "It can be difficult if you don't know the platform well but with the help of a professional shopify development company, you can build a custom theme as per your brand needs.",
			},
			{
				question: "What do I need to start selling using Shopify?",
				answer: "You need to have a paid Shopify subscription to showcase your products and integrate a payment gateway such as paypal to start accepting orders online using your Shopify store.",
			},
			{
				question: "Do I need to hire a Shopify development company to start a store?",
				answer: "No, you Don't need to hire a shopify development service provider company to set up a basic store. You can select a readymade theme from thousands of free templates available and set it up using tutorials and guides available for free. However, you may need to hire Shopify experts if you are looking to build a custom Shopify theme for your ecommerce store.",
			},
			{
				question: "How do I get progress updates on my Shopify project?",
				answer: "Our Shopify development team shares daily and weekly work reports on the projects we work on. We use different project management tools to share project updates with our valued customers. You can also schedule a weekly project review call with tech lead or project manager.",
			},
			{
				question: "Why should I hire Icecube Digital for my Shopify eCommerce project?",
				answer: "We are a certified Shopify development agency with 14+ years of experience in building groundbreaking eCommerce websites and portals. Customer satisfaction is the end goal of everything that we do. Don't worry, You are in safe hands.",
			},
			{
				question: "Do you sign NDA for privacy of our eCommerce project?",
				answer: "Yes, We really take the privacy of data seriously. We would be more than happy to sign NDA and confidentiality agreement before you share your project details with us.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default ShopifyDevelopment;
