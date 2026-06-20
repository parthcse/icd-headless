const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

// Common sections shared across all service pages — edit these files to update every page at once.
import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WordPressDevelopment = {
	slug: "wordpress-development-services",
	pageTitle: "WordPress Development Company For Scalable Growth | Icecube Digital",
	metaDescription: "Icecube Digital is a trusted WordPress development company in USA. We deliver custom, scalable WordPress websites built for high conversions, SEO visibility, and long-term growth.",

	banner: {
		heading: "WordPress Development Company For Scalable Growth",
		paragraphs: [
			"A template-based website designed by a standard WordPress web development company can be a good entry point for your online presence. But these rigid builds only focus on design and not outcomes. The result is poor engagement, low traffic, confused navigation, weak conversions, and difficulty in scaling.",
			"As an experienced WordPress development company in USA, Icecube Digital offers customized WordPress solutions for modern businesses. Our experience in WordPress development is an advantage for US-based businesses that want to achieve high conversions, SEO visibility, and long-term scalability.",
		],
		checklistItems: [
			"WordPress development services built for global business growth",
			"AI-driven experiences that increase engagement and conversions",
			"Scalable architecture designed for long-term performance",
			"Fast, responsive websites optimized across all devices",
			"Ongoing expert support to improve and scale your website",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free WordPress Store Audit",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/milestone-section.js
	milestone: milestoneSection,

	// common section: ./common/achievements-section.js
	achievements: achievementsSection,

	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle:
			"Take a look at our portfolio to see the diverse range of projects we've completed. From creative designs to powerful WordPress sites, we bring innovation to life. Each project reflects our commitment to excellence and client satisfaction, showcasing unique solutions tailored to individual business goals.",
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: components/home/GetQuoteSection.js ("Let's Work Together / Get a Free Quote")
	getQuote: true,

	// Section 6 — plainText: "Partnering For Success"
	plainText: {
		eyebrow: "Partnering For Success: Our Mission To",
		title: "Help You Achieve Your Goals",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "Your WordPress website is your business. If it's good, everything is good. If it's problematic, everything is a problem. At Icecube Digital, we ensure that the deal is closed on good terms. How? By crafting exceptional WordPress websites that not only look stunning but also deliver on performance and functionality." },
			{ type: "p", text: "Being a trusted WordPress website development partner, we quickly learn about your goals, target audience and work to deliver the WordPress solution ASAP. Through a collaborative approach, we work closely with you to design & develop a WordPress website that matches your brand identity." },
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// Section 7 — partner: "Common WordPress Development Challenges" (3 boxes no icon)
	infoBox: {
		eyebrow: "Common WordPress",
		title: "Development Challenges",
		subtitle:
			"WordPress is a flexible and powerful tool for building high-performing websites. But without the right technical expertise, a website might be difficult to scale, manage, and achieve expected results.",
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				title: "Poor Site Speed from Unoptimized Themes/Plugins",
				body: "Websites designed using pre-built themes often include unnecessary features and blocks of code. This might result in poor website loading speeds, increased bounce rates, and a drop in search engine rankings. Addressing this problem requires a more performance-focused approach.",
			},
			{
				title: "Security Vulnerabilities from Outdated Code",
				body: "A WordPress website designed using outdated plugins or poorly maintained code can lead to increased security vulnerabilities. Even minor security attacks can disrupt operations and cause a data breach. Following a well-designed approach for security management can reduce risk and enhance security.",
			},
			{
				title: "Mobile Experience Gaps",
				body: "Several WordPress business websites are not mobile-optimized. Resulting in layout shifts, difficult navigation, and thus poor user experience. Bridging the mobile experience gap requires integrating responsive behavior in the websites.",
			},
			{
				title: "Difficult CMS for Non-Technical Staff",
				body: "Managing a poorly structured content management system can be frustrating for non-technical teams. Even a simple updation can cause delays and result in outdated information. Modern websites need an intuitive and structured CMS.",
			},
			{
				title: "Poor Scalability as Traffic Grows",
				body: "Typical WordPress websites often struggle in high volumes of traffic as they are not designed with a scalable approach. Their slow performance and instability can often impact ROI. An expert WordPress development company plans to achieve scalability during the development phases.",
			},
			{
				title: "Failed Third-Party Integrations",
				body: "Unmonitored integrations of WordPress websites with third-party tools, CRM systems, APIs, and marketing tools can result in inaccurate data and disrupted workflows. A reliable integration strategy can ensure data accuracy and improved workflows.",
			},
		],
	},

	// Section 8 — clientTrust: "Our WordPress Development Services" (3 boxes top icon)
	topIconBox: {
		eyebrow: "Our WordPress",
		title: "Development Services",
		subtitles: ["Icecube Digital is a custom WordPress development company that does not rely on template solutions or shortcut strategies. Every project is designed with a goal that integrates your business goals, requirements, and a strategy to transform your website into an actual growth asset."],
		items: [
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Custom WordPress Website Development",
				body: "We offer services in building customized websites that perfectly align with your business goals and branding. Our strategy for custom WordPress development is built around the goal of designing a flexible, engaging, scalable, and a performance-optimized website that results in high conversions and increased user engagement.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "WordPress Theme Development",
				body: "A ready-made template design might not be able to align with your branding and requirements. We provide custom theme development for businesses that can lead to fast website loading and seamless user experience while also enhancing your branding.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "WordPress Plugin Development",
				body: "Custom WordPress plugins can boost the functionality of your website according to your business needs. Our WordPress web development approach reduces reliance on third-party tools, improving performance, security, and long-term scalability.",
			},
			{
				icon: "/assets/icons/woocommerce.svg",
				title: "WooCommerce Development",
				body: ["We help you design ", { text: "eCommerce website solutions", href: "#" }, " that are optimized for end-to-end services, right from product management to checkout."],
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "WordPress Migration & Redesign",
				body: "We provide services to migrate your existing website to a customized WordPress design or revamp your old website to an intuitive and lead-converting website.",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "Headless WordPress Development",
				body: "For businesses that need flexibility, we offer headless architecture. This enables businesses to achieve an improved front-end performance, enhanced integrations, and a dynamic user experience.",
			},
			{
				icon: "/assets/icons/check-circle.svg",
				title: "WordPress Maintenance & Support",
				body: ["Continuous website maintenance is a part of our services. We take care of updates and offer performance monitoring and proactive ", { text: "WordPress maintenance services", href: "#" }, " so that your website remains reliable and secure."],
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "WordPress AI Integration Development",
				body: ["To enhance user experience, boost customer engagement and automation, we provide ", { text: "AI integration services", href: "#" }, " that can drive conversions."],
			},
		],
	},

	// Section 9 — developmentStep: "Our WordPress Development Process"
	processSteps: {
		eyebrow: "Our WordPress",
		title: "Development Process",
		subtitle:
			"Partnering with an experienced WordPress development agency should offer benefits in terms of clear visibility and a well-defined and structured process. Our WordPress development process is designed to deliver measurable results at every step.",
		steps: [
			{
				title: "Discovery & Business Requirements",
				body: "We understand your business goals, target customers and technical requirements. At this stage you get a defined and clear roadmap that is aligned with your business goals.",
			},
			{
				title: "UX/UI Design & Prototyping",
				body: "We create UI/UX designs that enhance usability and aim to achieve high-conversion rates. You get a prototype design before the development begins.",
			},
			{
				title: "Custom WordPress Development",
				body: "A customized website with clean and structured code is designed. This helps in offering long-term flexibility to your website.",
			},
			{
				title: "Content Integration & QA Testing",
				body: "Tailored content is integrated into your website and rigorously tested for responsiveness and functionality.",
			},
			{
				title: "Launch & Performance Review",
				body: "Once ready, your custom website is launched and is monitored continuously across different performance metrics and core web vitals.",
			},
			{
				title: "Ongoing Support & Optimization",
				body: "We continue to optimize and monitor your website even after its successful launch. Regular support, maintenance, and updates are performed to ensure your website also evolves as your business grows.",
			},
		],
	},

	// Section 10 — partnerSecondary: "Benefits of Working With Icecube Digital" (3 boxes no icon)
	infoBoxSecondary: {
		eyebrow: "Benefits of Working",
		title: "With Icecube Digital",
		subtitle:
			"When you choose WordPress development services USA businesses rely on for growth, your company gains measurable, long-term advantages. Partnering with us can help you in achieving enhanced web performance, increased revenue, and improved overall business results.",
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				title: "Customized Website Designs and Branding",
				body: "Your custom website is tailored to your brand requirements and USPs. Thus, helping you in creating a unique online presence that is a clear differentiating factor between you and your competitors.",
			},
			{
				title: "Improved Website Load Speeds & Enhanced Core Web Vitals",
				body: "A slow website not only frustrates users but also affects conversion rates. With a core focus on improving Core Web Vitals, we optimize the website at multiple levels, including image handling, code structure, caching, and script loading, to ensure that the website loads quickly across devices.",
			},
			{
				title: "Scalable Code That Drives Growth",
				body: "With the aim that your website should not struggle as your business grows, we build WordPress websites using modular theme structures, lightweight code, and well-managed plugin integrations, so adding a new feature will not slow things down.",
			},
			{
				title: "Regularly Monitored and a Secure WordPress Site",
				body: "With regular website updation for WordPress themes and Plugins, your website remains secured from vulnerabilities. Moreover, with strong security protocols, like SSL, malware protection, and encryption, the WordPress website is secured and accessible at all times.",
			},
			{
				title: "Increased Search Rankings",
				body: "You get an SEO-ready website from day one. This means you rank higher on the SERPs and gain improved visibility and organic traffic.",
			},
			{
				title: "Continuous Expert Support and Long-Term Partnership",
				body: "You get expert support for troubleshooting, performance monitoring, and updating features. Further, as your business evolves, our long-term partnership enables you to achieve faster and strategic implementations with changing business requirements.",
			},
		],
	},

	// Section 11 — clientTrustSecondary: "Our WordPress AI Development Services" (3 boxes top icon)
	topIconBoxSecondary: {
		eyebrow: "Our WordPress",
		title: "AI Development Services",
		subtitles: ["We are a web development company that evolves with trends. Search and discovery are no longer limited to traditional rankings — AI crawlers and features, like AI Overviews, are shaping how the content is surfaced. We have transformed into a WordPress AI development company that integrates AI into the development process to change how websites are built, structured, and experienced."],
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "AI-Optimized Site Architecture for Modern Search",
				body: "We use AI tools to analyze search patterns, content gaps, and user flow before structuring the website. It broadens our experts' approach to map keyword clusters, internal linking, and page hierarchy in a way that aligns with how search engines interpret content nowadays.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Structured Data & Schema for AI Crawlers",
				body: "Our SEO team works on implementing and refining the structured data using SEO frameworks that support schema generation and validation. With AI-powered plugins, we mark up key content elements, so AI crawlers can clearly understand context, relationships, and meaning, boosting visibility in AI search results.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Intelligent Chatbot & Automation Integration",
				body: "Our custom WP AI development services include integration of AI-driven chatbot tools to handle real-time conversations to improve user experience and deliver consistent support. We also set up automated workflows that trigger responses, route queries, and qualify leads, ensuring faster engagement.",
			},
			{
				icon: "/assets/icons/generation.svg",
				title: "AI-Powered Content Personalization",
				body: "We integrated personalization plugins and tools to dynamically adjust content, messaging, and offers based on user behavior, segment, or location. This approach ensures the visitor sees what's relevant to them, increasing engagement and improving the chances of conversion.",
			},
			{
				icon: "/assets/icons/predictive.svg",
				title: "Predictive Analytics & Conversion Optimization",
				body: "WP AI development agencies ensure businesses utilize the AI tools to their maximum potential, and predictive analytics is one way to do that. We integrate AI-backed analytics tools that track how users interact with the website and predict the friction points. This helps in creating better lead journeys.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Why Choose Icecube Digital as Your WordPress",
		title: "Development Agency?",
		subtitle:
			"Icecube Digital is a focused WordPress Development Agency that has a rich expertise in delivering custom WordPress solutions and not generic solutions. Our development team works closely with our clients across the USA to understand their requirements and provide measurable results.",
		items: [
			{
				icon: "/assets/icons/user.svg",
				title: "USA-Based Team",
				body: "With a rich understanding of compliance, regulatory, and US customer expectations, we tailor our services to unique American business needs.",
			},
			{
				icon: "/assets/icons/inventory.svg",
				title: "Over 14 Years of Experience",
				body: "With more than 14 years of experience in developing custom websites, we bring complete knowledge and practical insights to design modern conversion-focused websites.",
			},
			{
				icon: "/assets/icons/wordpress.svg",
				title: "WordPress Specialization",
				body: "We specialize in WordPress development, covering custom themes, plugin integrations, headless architecture, and performance optimization. With our extensive experience working within WordPress, we select and implement features that align with your goals.",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "Best Practices",
				body: "We follow WordPress coding best practices to build custom themes and responsive layouts, and we test everything across devices and browsers before it goes live. Every update is first reviewed in the staging environment, so nothing breaks unexpectedly.",
			},
			{
				icon: "/assets/icons/predictive.svg",
				title: "Transparent Reporting",
				body: "We provide proper updates across milestones, including development progress, performance benchmarks, and post-launch metrics. You will always have visibility into what is being built and how it is performing.",
			},
			{
				icon: "/assets/icons/lock-open.svg",
				title: "No Lock-in Contracts",
				body: "We do not lock you into any rigid contract. We always start with a pilot project where you analyze our working style and the output quality. You can choose a suitable engagement model as per your comfort, and scale it whenever you need.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Client Retention Rate",
				body: "Reflecting the trust we have built through consistent, high-quality deliveries over more than a decade.",
			},
		],
	},

	tableBasic: {
		eyebrow: "WordPress",
		title: "Development Pricing",
		columns: ["Project Type", "Best For", "Key Features", "Estimated Investment"],
		colWidths: ["25%", "25%", "25%", "25%"],
		boldColumns: [0, 3],
		rows: [
			["Starter Website", "Small businesses, startups", "Pre-built theme, basic customization, essential pages", "$1,000 – $5,000"],
			["Growth Website", "Growing businesses", "Custom design, SEO-ready structure, integrations", "$5,000 – $15,000"],
			["Advanced / Custom Solution", "Enterprises, high-scale projects", "Fully custom development, AI features, scalability", "$15,000+"],
		],
	},

	// Section 14 — cta
	cta: {
		text: "From Design To Development, We've Got You Covered — Hire a WordPress Development Agency Today!",
		ctaLabel: "Contact Us Today For a Free Consultation",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// Section 15 — partnerTertiary: "What Influences Your WordPress Development Investment?" (3 boxes no icon)
	infoBoxTertiary: {
		eyebrow: "What Influences Your WordPress",
		title: "Development Investment?",
		subtitle:
			"When you choose WordPress development services USA businesses rely on for growth, your company gains measurable, long-term advantages. Partnering with us can help you in achieving enhanced web performance, increased revenue, and improved overall business results.",
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				title: "Project Scope & Number of Pages",
				body: "Multiple-page websites require a properly designed website development plan that designs and integrates each page to boost the overall performance. This can also influence your project investment.",
			},
			{
				title: "Custom Feature Integration",
				body: "Advanced custom feature integration can increase the complexity of the development process.",
			},
			{
				title: "Design Complexity & Brand Integration",
				body: "Integrating customized designs and branded capabilities requires a rich experience in custom website designing.",
			},
			{
				title: "Third-Party Integrations (CRM, ERP, APIs)",
				body: "Integrating third-party apps and integrations like ERP, CRM, and APIs demands technical expertise.",
			},
			{
				title: "Ongoing Maintenance & Support Plan",
				body: "For consistent monitoring, regular website updation, and efficient optimization partnering with a company that offers long-term support is essential.",
			},
		],
	},

	// Section 16 — whyChoose: "Technologies We Use"
	checkList: {
		eyebrow: "Technologies",
		title: "We Use",
		subtitle:
			"We use modern, proven WordPress technologies to build secure, scalable, and high-performing websites that adapt to evolving business needs. Every technology we use is carefully selected to ensure performance, security, and long-term scalability.",
		benefitsLeft: [
			"CMS & Framework: WordPress Core, Headless WordPress",
			"Performance & Security: Cloudflare, WP Rocket, Redis, Wordfence",
			"AI & Automation: Intelligent chatbots, personalization engines, analytics & conversion optimization tools",
		],
		benefitsRight: [
			"Page Builders & Editors: Elementor, Gutenberg, Advanced Custom Fields",
			"eCommerce: WooCommerce, Stripe, PayPal integrations",
			"24/7 Support: Dedicated support team available around the clock for your website",
		],
	},

	// Section 17 — faq: "WordPress Development FAQs"
	faq: {
		eyebrow: "WordPress Development",
		title: "FAQs",
		items: [
			{
				question: "What does a WordPress development company do?",
				answer: "A WordPress development company handles everything required to build, optimize, deploy, and manage a website on the WordPress platform. The expert team works on UI/UX research, wireframe designing, theme development, plugin integration, testing, performance optimization, configuring the security setup, and maintaining the website.",
			},
			{
				question: "How much does custom WordPress development cost?",
				answer: "The cost of custom WordPress development varies based on the scope of work, number of pages, custom features, design complexity, and third-party integrations required. A starter website typically ranges from $1,000–$5,000, a growth website from $5,000–$15,000, and a fully custom enterprise solution starts from $15,000+. Contact us for a free consultation and tailored quote.",
			},
			{
				question: "How long does a WordPress project take?",
				answer: "The timeline depends on the complexity and scope of your project. A basic WordPress website can be completed in 2–4 weeks, while a fully custom solution with advanced integrations may take 2–4 months. Our team provides a clear project roadmap and timeline during the discovery phase.",
			},
			{
				question: "What is the difference between WordPress.com and WordPress.org?",
				answer: "WordPress.com is a hosted platform with limited customization options, while WordPress.org is the self-hosted, open-source version that offers full control over your website's design, functionality, and code. We develop on WordPress.org to deliver truly custom, scalable solutions for our clients.",
			},
			{
				question: "Can you migrate my existing site to WordPress?",
				answer: "Yes, we provide comprehensive WordPress migration services. Whether you are migrating from another CMS, a page builder platform, or an older WordPress version, our team handles the complete migration including content, SEO data, redirects, and design with minimal downtime.",
			},
			{
				question: "Do you offer WordPress maintenance after launch?",
				answer: "Absolutely. We offer ongoing WordPress maintenance and support packages that include security updates, plugin and theme updates, performance monitoring, backups, and bug fixes. Our goal is to ensure your website remains secure, fast, and up to date long after launch.",
			},
			{
				question: "What industries do you build WordPress sites for?",
				answer: "We have built WordPress websites for a wide range of industries including eCommerce, healthcare, education, real estate, hospitality, finance, and professional services. Our team adapts each project to the unique requirements and compliance standards of your industry.",
			},
			{
				question: "How does AI integrate into WordPress development?",
				answer: "We integrate AI into WordPress development through smart site architecture, structured data and schema markup for AI crawlers, intelligent chatbot and automation integration, AI-powered content personalization, and predictive analytics tools that improve user experience and conversion rates.",
			},
			{
				question: "Do you offer custom WordPress development or use templates?",
				answer: "We specialize in custom WordPress development and do not rely on template-based solutions. Every website we build is designed from scratch based on your brand identity, business goals, and target audience — giving you a unique, high-performing website that templates cannot deliver.",
			},
			{
				question: "Will my WordPress website be fast and mobile-friendly?",
				answer: "Yes. Performance and mobile responsiveness are core to our development process. We optimize Core Web Vitals, implement caching strategies, compress assets, and use responsive design frameworks to ensure your WordPress website loads fast and looks great on all devices.",
			},
			{
				question: "What happens after my website goes live?",
				answer: "After your WordPress website goes live, we continue to provide ongoing support and maintenance. This includes monitoring performance, applying security updates, fixing bugs, and implementing new features as your business grows. Our team remains a long-term partner to ensure your website stays secure, fast, and aligned with your evolving goals.",
			},
		],
	},

	// common section: ./common/our-clients-section.js
	ourClients: ourClientsSection,

	// common section: components/home/WeServeSection.js ("Countries We Serve")
	weServe: true,

	// common section: ./common/ceo-cta-section.js ("CEO CTA section")
	ceoCta: ceoCtaSection,
};

export default WordPressDevelopment;
