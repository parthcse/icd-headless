const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

// Common sections shared across all service pages — edit these files to update every page at once.
import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const ShopifyDevelopment = {
	slug: "shopify-development-services",
	pageTitle: "Shopify Development Company | Shopify Experts | Icecube Digital",
	metaDescription:
		"Icecube Digital is a Shopify development company delivering high-performing, conversion-focused Shopify stores — custom development, theme design, migration, app integration, and performance optimization that scale your eCommerce revenue.",

	banner: {
		heading: "Shopify Development Company",
		paragraphs: [
			"We deliver high-performing Shopify eCommerce development services designed to increase conversions, improve site speed, and scale your online store. Our in-house Shopify experts combine strategy, design, and development to build stores that don't just look good but drive measurable revenue.",
		],
		checklistItems: [
			"400+ Shopify & eCommerce projects delivered",
			"14+ years of development experience",
			"Conversion-focused & performance-driven approach",
			"Avg. 40% conversion uplift for optimized stores",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Shopify Store Audit",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/milestone-section.js
	milestone: milestoneSection,

	// common section: ./common/achievements-section.js
	achievements: achievementsSection,

	// Figma "Case Studies" section, rendered via the standard Portfolio section
	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"See how we help eCommerce brands build, optimize, and scale high-performing Shopify stores. Our work focuses on improving conversions, increasing revenue, and delivering seamless user experiences across every touchpoint.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: components/home/GetQuoteSection.js ("Let's Work Together / Get a Free Quote")
	getQuote: true,

	plainText: {
		eyebrow: "AI-Driven Shopify Development for",
		title: "Scalable Growth",
		contentAlign: "center",
		paragraphs: [
			"At Icecube Digital, we build high-performance Shopify stores designed to grow your revenue, not just your presence.",
			"Our team combines data-driven insights, conversion-focused design and scalable development to create stores that are fast, user-friendly, and built to convert.",
			[
				"From custom development to performance optimization, every solution is aligned with your business goals, helping you increase conversions, improve user experience, and scale with confidence. To maximize growth, our Shopify stores can also integrate advanced marketing strategies through our ",
				{ text: "digital marketing service", href: "/digital-marketing-service/" },
				".",
			],
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	imageText: {
		eyebrow: "Custom Shopify Development Solutions Built Around",
		title: "Your Business Goals",
		// TODO: add the real Shopify section image at this path (Figma export image 52)
		image: "/assets/photos/shopify-business-goals.png",
		imageAlt: "Custom Shopify development solutions built around your business goals",
		blocks: [
			{ type: "p", text: "In today's competitive eCommerce landscape, choosing Shopify is just the first step – the real difference comes from how well your store is built, optimized, and scaled." },
			{ type: "p", text: "At Icecube Digital, we go beyond standard Shopify development. We create custom, high-performance Shopify solutions tailored to your business model, audience, and growth goals." },
			{ type: "p", text: "Our approach combines:" },
			{ type: "ul", items: [
				"Strategic planning based on your business objectives",
				"Custom development tailored to your unique requirements",
				"Conversion-focused design for better user experience",
				"Scalable architecture that grows with your business",
			] },
			{ type: "p", text: "Whether you're launching a new store, migrating from another platform, or optimizing an existing one – we build Shopify experiences that are fast, flexible, and built to convert." },
			{ type: "p", text: "Unlock the full potential of Shopify with a team that builds for growth, not just launch." },
		],
	},

	topIconBox: {
		eyebrow: "Shopify Development Services",
		title: "Built For Growth",
		subtitles: [
			"We design and develop Shopify stores that are fast, scalable, and built to convert. Whether you're launching a new store or improving an existing one, our team focuses on performance, usability, and long-term growth.",
			"Our Shopify development services include:",
		],
		items: [
			{
				icon: "/assets/icons/html-code.svg",
				title: "Custom Shopify Development",
				body: "Tailored store builds designed around your brand, customer journey, and business goals.",
			},
			{
				icon: "/assets/icons/rocket.svg",
				title: "Shopify Store Setup & Launch",
				body: "End-to-end store setup including theme configuration, navigation, and essential integrations.",
			},
			{
				icon: "/assets/icons/seamless-delivery.svg",
				title: "Shopify Migration Services",
				body: "Seamless migration from platforms like WooCommerce, Magento, or BigCommerce without data loss or SEO impact.",
			},
			{
				icon: "/assets/icons/logo-design.svg",
				title: "Theme Design & Customization",
				body: "Conversion-focused UI/UX with mobile-first, high-performance Shopify themes.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "App Integration & Custom Features",
				body: "Integration of third-party apps or custom-built functionality to extend your store's capabilities.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Performance Optimization",
				body: "Improving speed, Core Web Vitals, and overall user experience to increase conversions.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Ongoing Support & Maintenance",
				body: [
					"Our ongoing support services allow businesses to ",
					{ text: "hire Shopify developers", href: "/hire-shopify-developers-experts/" },
					" for continuous improvements and feature development.",
				],
			},
		],
	},

	checkList: {
		eyebrow: "Why Businesses",
		title: "Choose Shopify",
		benefitsLeft: [
			"Easy to manage without technical expertise",
			"Scalable infrastructure for growing stores",
			"Secure checkout with PCI compliance",
		],
		benefitsRight: [
			"Flexible integrations with apps and tools",
			"Mobile-optimized themes for better conversions",
		],
	},

	infoBox: {
		eyebrow: "Common Shopify Development",
		title: "Challenges And Solutions",
		subtitle:
			"Even though Shopify is a powerful platform, many businesses struggle to scale due to technical and strategic limitations. Our approach eliminates these bottlenecks with structured, performance-focused solutions.",
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				title: "Advanced Customization Without Platform Limitations",
				body: "Shopify's native capabilities can restrict complex functionality and unique user experiences. We overcome this with custom theme development and tailored features—giving your store complete flexibility without compromising performance.",
			},
			{
				title: "Performance & Scalability Optimization",
				body: "As traffic and product catalogs grow, poorly optimized stores often slow down. We build with scalability in mind—optimizing code, infrastructure, and app usage to ensure consistent speed and performance at every stage of growth.",
			},
			{
				title: "Search Visibility Beyond Basic SEO",
				body: "While Shopify includes built-in SEO features, ranking for competitive keywords requires deeper optimization. We enhance site structure, content, and technical performance to improve visibility and attract high-intent traffic.",
			},
			{
				title: "Seamless Third-Party Integrations",
				body: "Integrating multiple apps can lead to conflicts and instability if not handled properly. We implement a clean integration strategy—ensuring all tools work together smoothly without affecting site performance.",
			},
			{
				title: "Secure & Reliable Store Infrastructure",
				body: "Protecting customer data and maintaining uptime is critical. We follow best practices in security, updates, and monitoring to keep your Shopify store safe, stable, and fully compliant.",
			},
			{
				title: "Conversion-Focused Checkout Optimization",
				body: "Cart abandonment is often caused by friction in the checkout process. We optimize user flows, simplify payment options, and implement recovery strategies to maximize completed purchases.",
			},
		],
	},

	processSteps: {
		eyebrow: "Our Shopify",
		title: "Development Process",
		steps: [
			{
				title: "Discovery & Planning",
				body: "Understanding your business, goals, and technical requirements.",
			},
			{
				title: "Design & Development",
				body: "Creating a high-performance, user-friendly Shopify store tailored to your brand.",
			},
			{
				title: "Testing & Launch",
				body: "Ensuring everything works seamlessly before going live.",
			},
			{
				title: "Ongoing Support",
				body: "Continuous improvements, updates, and performance monitoring.",
			},
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// leftIconBox — "Why Choose Icecube Digital for Shopify Development" (icon-left boxes, 2-col)
	leftIconBox: {
		eyebrow: "Why Choose Icecube Digital for",
		title: "Shopify Development",
		items: [
			{
				icon: "/assets/icons/user-team.svg",
				title: "Experienced Shopify Team",
				body: "Skilled developers with hands-on experience across multiple industries.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Focused on Performance & Conversions",
				body: "Every store is built to load fast and convert better.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Transparent Process",
				body: "Clear timelines, regular updates, and no hidden surprises.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Flexible Engagement Models",
				body: "Fixed cost, hourly, or dedicated team — based on your needs.",
			},
			{
				icon: "/assets/icons/hand.svg",
				title: "Long-Term Support",
				body: "We stay involved post-launch to help you scale and improve.",
			},
		],
	},

	cta: {
		text: "Your Ecommerce Store Designed Just The Way You Want It! If You Can Dream It, We Can Build It.",
		ctaLabel: "Get A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// information — long-form "Additional Information" content cards
	information: {
		eyebrow: "Additional",
		title: "Information",
		cards: [
			{
				title: "What Shopify Basics Do I Need to Know to Run a Successful Store?",
				blocks: [
					{ type: "p", text: "To get started, grasp the essentials of Shopify, including product listing, managing orders, and tracking sales. Knowing these basics empowers you to make informed decisions and navigate Shopify effectively." },
					{ type: "ul", items: [
						"Choosing the Right Shopify Plan — Each Shopify plan offers different features and transaction fees. Evaluate your business needs, budget, and growth goals to choose the plan that provides the best value for your online store.",
						"Selecting and Customizing Your Theme — Shopify offers numerous themes with varied customization options. Selecting the right theme and adjusting design elements ensures your store aligns with your brand identity and provides a great user experience.",
						"Setting Up Product Pages — Product pages play a critical role in conversions. Use high-quality images, write compelling descriptions, and set up categories to make products easy to find and appealing to customers.",
						"Payment Gateways and Shipping Setup — Setting up payment gateways and shipping options is essential for a smooth checkout experience. Shopify supports multiple gateways so you can accept payments from customers around the world.",
					] },
				],
			},
			{
				title: "How Does Shopify AI Transform eCommerce Efficiency?",
				blocks: [
					{ type: "p", text: "Website development used to be a tedious process, and now, with evolving technologies, it has become more streamlined and easier. Jumping on the trend, Shopify has introduced its game-changing generative AI tools that are revolutionizing eCommerce." },
					{ type: "p", text: "Generative AI automates the process of content generation — text, images, audio, and more. Shopify's AI tools assist developers and merchants in automating content creation, personalization, and store management." },
					{ type: "p", text: "Shopify has integrated its Gen AI capabilities through two tools: Shopify Magic and Shopify Sidekick." },
				],
			},
			{
				title: "How Does Shopify Magic Simplify Content Creation and Store Management?",
				blocks: [
					{ type: "p", text: "Shopify Magic is a Gen AI tool that automates and streamlines the generation, editing, and translation of content across your store." },
					{ type: "p", text: "From summarizing product reviews to generating product descriptions, FAQ answers, blog posts, email subject lines, and campaign content, Magic becomes your assistant in brainstorming and providing a first draft. It can even transform image backgrounds, so you don't need to invest in professional editing apps or experts." },
					{ type: "p", text: "Key benefits:" },
					{ type: "ul", items: [
						"Automatic text generation speeds up the writing process.",
						"Available for free regardless of your subscription plan (access to specific features varies).",
						"Integrated with Themes, so AI can help create a personalized theme for your store.",
						"Saves time, boosts productivity, improves content quality and user experience, and scales with your business.",
						"Built upon Shopify's proprietary data and leading LLMs — no merchant store-level data is used to power Magic for other merchants.",
						"Robust security architecture ensures data privacy and security.",
					] },
				],
			},
			{
				title: "Shopify Sidekick: Your AI Assistant for Smarter Store Operations",
				blocks: [
					{ type: "p", text: "While Magic assists with enhancing your website, Sidekick improves overall productivity by streamlining tasks. It is an AI-powered, chatbot-style assistant that lets store owners interact with their store conversationally." },
					{ type: "p", text: "Built on Shopify Magic, Sidekick acts on your instructions — whether you need inventory information, order-processing help, reports and insights, or automation. It is trained to know all of Shopify and operates within the context of each merchant's store, guiding you through the dashboard to make faster decisions." },
					{ type: "p", text: "Key benefits:" },
					{ type: "ul", items: [
						"Provides step-by-step guidance to perform tasks in Shopify.",
						"Delivers tailored answers to your queries instead of searching the knowledge base, saving time.",
						"Supports screen sharing and real-time conversation for instant, on-screen issue resolution.",
						"Generates ready-to-use content for store content, emails, and blog posts.",
						"Supports explainable AI — it can explain why a generated option is appropriate.",
						"Can create Shopify SQL queries from the Sales and Visits tables and display report visualizations.",
					] },
				],
			},
			{
				title: "How Can AI Tools Help Shopify Store Owners Increase Sales and Conversions?",
				blocks: [
					{ type: "p", text: "Create High-Quality Product Images with AI — AI tools can automatically generate or upscale product images, making your store look professional without expensive photoshoots. AI-driven retouching can reduce editing time by up to 70%, giving you unique, realistic product images that boost your catalog." },
					{ type: "p", text: "Edit and Enhance Product Photos Using AI — With AI-powered editing tools, you can remove backgrounds, adjust lighting, and retouch images in seconds, ensuring your products always look their best and leading to higher click-through and conversion rates." },
				],
			},
			{
				title: "What Are the Key Differences Between Shopify With AI and Without AI?",
				blocks: [
					{ type: "p", text: "AI dramatically changes how you set up and run a Shopify store. Here's how Shopify with AI compares to Shopify without AI:" },
					{ type: "ul", items: [
						"Store setup — With AI: personalized theme setup with auto-written code for custom theme blocks. Without AI: manual theme selection and customization.",
						"Content generation — With AI: automated with Gen AI tools and SEO optimization. Without AI: manually written and optimized, which is time-consuming.",
						"Customer experience — With AI: AI chatbots provide instant, 24/7 replies and escalate complex queries to a human agent. Without AI: limited to live agents and scheduled chatbots.",
						"Inventory & marketing — With AI: AI-driven targeting, copy generation, and campaign optimization. Without AI: manual tracking, targeting, and campaign management.",
					] },
				],
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Let's Build a Shopify Store That",
		title: "Actually Performs",
		contentAlign: "center",
		paragraphs: [
			"Whether you're launching a new store or improving an existing one, we focus on what matters – speed, usability, and conversions.",
			"Our Shopify experts work closely with your team to understand your business, identify growth opportunities, and build a store that's designed to scale.",
			"No guesswork. No unnecessary complexity. Just a Shopify store built to perform.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Shopify",
		title: "Development FAQs",
		items: [
			{
				question: "What is Shopify?",
				answer: "Shopify is a cloud-based ecommerce platform to build, customize and manage an online store. It is a hosted platform, which means you don't need to worry about maintaining and upgrading a web server for your eCommerce store. Shopify offers great features and flexibility to organize your products, customize your website theme, accept credit card and other payments, and track and process online orders from any part of the world.",
			},
			{
				question: "How much does Shopify cost?",
				answer: "Shopify offers several plans — Basic, Shopify, and Advanced — billed monthly, plus Shopify Plus for high-volume and enterprise stores. Pricing varies by plan and currency, and transaction fees depend on whether you use Shopify Payments. Our team helps you choose the plan that best fits your business size, feature needs, and growth goals.",
			},
			{
				question: "How can I set up a blog on my Shopify website?",
				answer: "Shopify includes a built-in blogging engine. You can create and manage posts from your Shopify admin under Online Store → Blog Posts, organize them with tags and categories, and optimize each post for SEO. We can also design a custom blog layout that matches your store's branding and helps drive organic traffic.",
			},
			{
				question: "Do I need to buy a hosting plan to use Shopify?",
				answer: "No. Shopify is a fully hosted platform, so hosting, security, and server maintenance are all included in your subscription. You don't need to purchase or manage separate hosting — Shopify handles uptime, SSL, and scalability for you.",
			},
			{
				question: "Do you follow SEO best practices while building my website?",
				answer: "Yes. We build every Shopify store on a clean, SEO-friendly foundation — optimized site structure, fast load times, mobile responsiveness, proper heading and meta tags, structured data, and clean URLs — so your store is ready to rank and attract organic traffic from day one.",
			},
			{
				question: "Is it difficult to build a custom theme on Shopify?",
				answer: "Custom theme development requires expertise in Shopify's Liquid templating language, HTML, CSS, and JavaScript. While it's complex to do well, our experienced Shopify developers build fully custom, high-performance themes tailored to your brand — so you get a unique store without the technical headache.",
			},
			{
				question: "What do I need to start selling using Shopify?",
				answer: "To start selling you need a Shopify account, your products (with images, descriptions, and pricing), a payment gateway, and shipping settings configured. We handle the complete setup — store configuration, theme, product pages, payments, and shipping — so you're ready to launch and start taking orders.",
			},
			{
				question: "Do I need to hire a Shopify development company to start a store?",
				answer: "Not necessarily for a basic store, but a Shopify development company makes a major difference when you want a custom design, advanced functionality, integrations, performance optimization, or a store built to scale. Partnering with experts saves time, avoids costly mistakes, and delivers a store designed to convert.",
			},
			{
				question: "How do I get progress updates on my Shopify project?",
				answer: "We keep you informed throughout the project with regular updates via your preferred channel — email, calls, or project management tools — along with clear milestones and timelines. You'll always know what stage your project is at and what's coming next.",
			},
			{
				question: "Why should I hire Icecube Digital for my Shopify eCommerce project?",
				answer: "With 14+ years of experience and 400+ eCommerce projects delivered, Icecube Digital combines strategy, design, and development to build Shopify stores that load fast and convert better. You get an experienced team, a transparent process, flexible engagement models, and long-term support — all focused on measurable business results.",
			},
			{
				question: "Do you sign an NDA for the privacy of our eCommerce project?",
				answer: "Yes. We're happy to sign a Non-Disclosure Agreement before starting your project. Protecting your business information, ideas, and data is a priority, and an NDA ensures everything you share with us stays completely confidential.",
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

export default ShopifyDevelopment;