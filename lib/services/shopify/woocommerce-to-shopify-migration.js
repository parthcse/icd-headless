const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const WoocommerceToShopifyMigrationServices = {
	slug: "woocommerce-to-shopify-migration-services",
	pageTitle: "WooCommerce to Shopify Migration Services | Smooth & Secure Transfer",
	metaDescription:
		"Looking for WooCommerce to Shopify migration services? Our expert agency helps transfer and convert WooCommerce to Shopify with ease. Trusted migration company.",

	banner: {
		heading: "WooCommerce to Shopify Migration Services",
		paragraphs: [
			"Icecube Digital is your go-to service partner if your WooCommerce store is holding you back from expanding and scaling. WooCommerce is an open-source eCommerce plugin for WordPress websites. While it offers complete flexibility and control, many businesses hit a wall with WooCommerce at some point because it demands a high level of technical maintenance.",
			"That’s when Shopify becomes a solid alternative because it is a fully hosted, all-in-one eCommerce platform. Shopify takes care of the technicalities, and Icecube Digital takes care of the complexities associated with the transfer from WooCommerce to Shopify. From product data and customer records to SEO listings, we ensure that nothing gets lost in migration. Rely on us for a 100% safe migration when it comes to moving from WooCommerce to Shopify.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	caseStudy: {
		eyebrow: "Our",
		title: "Case Studies",
		subtitle:
			"Here are some case studies that support our claims of successful migration of eCommerce stores from WooCommerce to Shopify. We utilize our problem-solving approach, where we tailor our strategy to solve your unique challenges. Learn how our meticulously executed transition helped the enterprises.",
		postIds: [56487, 57986, 56518],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Why Migrate from",
		title: "WooCommerce to Shopify?",
		contentAlign: "center",
		paragraphs: [
			"Migration from WooCommerce to Shopify is a necessary step in a business’s digital transformation journey when growth, automation, and ease of use become top priorities. With WooCommerce, it is just like owning a house.",
			"You can have the complete freedom to set up your eCommerce store, but you need to do it all by yourself. This includes hosting setup, server management, performance optimization, plugin management, security updates, and ongoing maintenance. Plus, you need to integrate a handful of plugins from thousands in the library for your store to create a high-converting site.",
			"If your eCommerce platform grows, the complexity to manage increases, and your reliance on developers as well. Hence, to reduce the technical overhead, businesses migrate from WordPress to Shopify, which is like moving to a rented home. Yes, there are some restrictions since you will be operating within the boundaries of what Shopify permits. Still, in turn, you get a fully maintained, secure, and scalable environment to set up a store.",
			"Shopify eliminates third-party hosting providers or manual server configurations. Shopify ensures automatic software updates, SSL certificate management, and PCI-DSS compliant payment processing, significantly reducing security risks. Built on a globally distributed cloud architecture, Shopify also offers CDN integration, fast page load times, and high availability, making performance optimization seamless and reliable.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "george-fandos",
	},

	topIconBox: {
		eyebrow: "What our WooCommerce to Shopify Migration",
		title: "Services Include",
		subtitle:
			"At Icecube Digital, we have years of experience with eCommerce platforms, and we are well familiar with the intricacies of each platform. We curate every migration strategy thoughtfully to ensure zero data loss and minimal disruptions to your operations. As a leading WooCommerce to Shopify migration agency, our services are designed to make your transition seamless, secure, and future-ready. Here’s how we do it:",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/database.svg",
				title: "Data Migration",
				body: "We securely migrate all the critical store data from WooCommerce to Shopify, including product data, user reviews, categories, orders, coupons, and customers. We map the data fields to carefully align with Shopify’s schema and ensure product variants, SKUs, metafields, and images are preserved correctly.",
			},
			{
				icon: "/assets/icons/logo-design.svg",
				title: "Theme & Design Transfer",
				body: [
					"WooCommerce themes aren’t compatible with Shopify’s Liquid framework. So, as a part of our ",
					{ text: "Shopify eCommerce development services", href: "/shopify-development-services/" },
					", we rebuild your design with a Shopify-compatible theme. We replicate the layout, customize Shopify’s theme sections, and ensure mobile responsiveness. Also, if some improvements are required, we will accommodate them as well.",
				],
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO & Redirect Setup",
				body: "During WooCommerce to Shopify migration services, there is a risk of existing SEO rankings plummeting. However, with us, you don’t need to worry. We export all the indexed URLs from WooCommerce, set up 301 redirects to Shopify, migrate SEO metadata, and submit updated sitemaps to Google. This will protect and preserve your SEO rankings.",
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "App & Payment Gateway Setup",
				body: "We will identify all the plugins integrated with your WooCommerce and find their counterparts in Shopify. If no app exists in Shopify, then our developers will custom-code features or build middleware through Shopify APIs. We will configure Shopify Payments or third-party gateways and test them in sandbox environments end-to-end for seamless flow.",
			},
			{
				icon: "/assets/icons/rocket.svg",
				title: "Performance Testing & Launch",
				body: "Before we go live with the new Shopify store, we conduct rigorous testing in a private staging environment. From checking the discount codes, shipping rules, and checkout flow to testing cross-browser and mobile device compatibility, we ensure every key user interaction is thoroughly validated.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Rebuilding Custom Features",
				body: [
					"Your WooCommerce store might have extended functions that are built using PHP or plugins. As a prominent ",
					{ text: "WooCommerce development agency", href: "/woocommerce-development-services/" },
					" in the USA, we analyze those features, their architecture, and rebuild them using Shopify’s Liquid, custom apps, or third-party APIs. We ensure that your WooCommerce store is completely migrated with all the functionalities.",
				],
			},
		],
	},

	infoBox: {
		eyebrow: "What Data Can Be Migrated from",
		title: "WooCommerce to Shopify",
		subtitle:
			"Not every data can be migrated from WooCommerce to Shopify. However, as a WooCommerce to Shopify migration company, we create a strategy to seamlessly migrate the following existing data without any data loss or disrupting the existing business process:",
		items: [
			{
				title: "Product Data",
				body: "Product titles, descriptions, SKUs, inventory quantities, pricing, variants, attributes and specifications, product status, and visibility and availability status.",
			},
			{
				title: "Customer Data",
				body: "Customer names, email addresses, billing and shipping addresses, phone numbers, account status (active or inactive), account creation date, customer group and tags, and loyalty points (if applicable).",
			},
			{
				title: "Order History",
				body: "Order IDs and numbers, order status (pending, completed, refunded, etc.), product details within each order, payment and shipping methods used, billing and shipping info, order timestamps and transaction history.",
			},
			{
				title: "Coupons and discount codes",
				body: "Coupon codes, discount types (percentage, fixed amount, free shipping), usage limits and expiration dates, minimum/maximum spend conditions, and customer eligibility rules.",
			},
			{
				title: "CMS pages & blog posts",
				body: "About us, contact, FAQ, privacy policy, terms & conditions, page titles, content blocks, and images, internal links and anchors, blog posts with content, categories, and images, and publication dates and authorship data.",
			},
			{
				title: "Product categories and tags",
				body: "Product categories (with hierarchy), category descriptions and images, product tags and filtering options, URL slugs, and meta titles for categories.",
			},
			{
				title: "Product Reviews & Ratings",
				body: "Review content and star ratings, user name and email (if public), review dates and visibility status, association with specific product IDs, and verified purchase indicators (if tracked).",
			},
			{
				title: "SEO Assets",
				body: "Page titles (meta titles), meta descriptions, image alt text, canonical URLs, and structured data/schema markup (where applicable).",
			},
			{
				title: "Blog Posts & SEO Metadata",
				body: "Blog titles and body content, featured images, author and publish date, meta title and meta description for each post and categories, and SEO-friendly URLs and redirect mappings.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Top Benefits of Shopify Over",
		title: "WooCommerce",
		subtitles: [
			[
				"As a ",
				{ text: "Shopify maintenance service provider", href: "/shopify-maintenance-services/" },
				", both platforms have their pros and cons. While WooCommerce is suitable for businesses that require full control over their eCommerce stack, Shopify is a streamlined, scalable, and low-maintenance solution. Here’s why Shopify can be opted by businesses and teams looking for an eCommerce platform that want to launch their store quickly without having to manage technical overhead.",
			],
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/cloud.svg",
				title: "No Hosting Hassles",
				body: "Shopify supports a fully-hosted environment, so it eliminates the need to set up or maintain a hosting environment manually.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Super Fast & Scalable",
				body: "The average page loading time is 309 milliseconds, and that of WooCommerce is 776 milliseconds. Shopify uses a globally distributed CDN, load-balanced architecture, and auto scaling feature, which can handle traffic spikes and large product catalogs seamlessly.",
			},
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Massive App Ecosystem",
				body: "Shopify has over 12,320 apps listed on its app ecosystem. It provides a range of different methods to customize your store easily and deliver frictionless user experience.",
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Perfect for Non-Techies",
				body: "Shopify’s admin panel is designed with abstracted complexity. With features like drag-and-drop layout editors, theme panel settings, and no-code app installation, non-tech users can configure their store without coding.",
			},
			{
				icon: "/assets/icons/mobile.svg",
				title: "Mobile-First Themes",
				body: "Shopify has more than 200 themes, which are beautiful, appealing, and are mobile responsive by default. WooCommerce requires additional testing for mobile responsiveness.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Built-in Payment Gateway",
				body: "Shopify Payments is built into the platform with zero setup beyond KYC compliance. It supports 100+ payment integrations, including Apple Pay, Google Pay, and BNPL (Buy Now Pay Later).",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Affordable Maintenance",
				body: "There is no need to manage plugin updates, server patches, security patches, or CMS upgrades. Shopify maintains the platform, so all the features and the platform get auto-updated.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Optimized for Sales",
				body: "Shopify includes conversion-focused features, like integrated abandoned cart recovery, one-page checkout, pre-built sales funnel, and multi-channel sales support. WooCommerce can also support these, but by assembling multiple plugins.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "24/7 Customer Support",
				body: "Shopify offers 24/7 customer support via live chat, email, and phone for both technical and non-technical issues. With WooCommerce, the resolution often depends on developers or third-party providers.",
			},
		],
	},

	infoBoxSecondary: {
		eyebrow: "Challenges Faced When Migrating",
		title: "WooCommerce to Shopify",
		subtitle:
			"Migration from WooCommerce to Shopify isn’t just a copy-paste operation. It is a multi-layered process that involves transforming a website from one platform’s architecture to another platform. From data structure mismatches and plugin dependencies to preserving SEO performance and replicating custom functionality, several technical hurdles can arise along the way. Here are some common issues that come up, but as an expert WooCommerce to Shopify migration agency, we have got everything handled.",
		items: [
			{
				title: "Risk of Data Loss",
				body: "During migration, improper mapping of database fields or incompatible data formats can result in partial or missing data. Shopify’s data model differs from WooCommerce’s relational WordPress-based schema, so ensuring 1:1 integrity across orders, SKUs, customers, and metafields requires meticulous validation.",
			},
			{
				title: "Risk of Store Downtime",
				body: "Improperly configured DNS updates or coordinated cut-over tasks can cause the store to experience some downtime. That’s why, as a Shopify eCommerce development service provider, we use a staging environment and dry-run testing to minimize the risk.",
			},
			{
				title: "Customer Passwords Can’t Be Moved",
				body: "Data structure and password encryption techniques vary from platform to platform. Hence, passwords are one of the data that cannot be migrated. This could cause inconvenience to customers. Customer records can be migrated with the help of the Bulk Account Inviter feature in the Plus plan.",
			},
			{
				title: "SEO and Traffic Drop",
				body: "Migration to a new platform can disrupt the existing URL structures, meta tags, and internal linking, which can affect the entire traffic if not handled properly. Setting up 301 redirects becomes necessary because Shopify uses a different permalink format (e.g., /products/product-name) and WooCommerce supports custom slugs.",
			},
			{
				title: "Design and Theme Issues",
				body: "WooCommerce is a plugin of WordPress, and the themes are built on PHP and WordPress hooks, which are totally incompatible with Shopify’s Liquid templating engine. Hence, each website’s layout and design elements need to be rebuilt from scratch, or it needs to be adapted to a Shopify-compatible theme. Both of the methods are time-consuming.",
			},
			{
				title: "Rebuilding Custom Features",
				body: "The best part about WooCommerce is its flexibility, but it becomes a major hurdle during migration. With PHP, custom plugins, and hooks, custom features can be integrated, like dynamic pricing, custom checkout logic and product configurators. However, their equivalent might not be supported by Shopify.",
			},
			{
				title: "Complicated Products Are Tricky",
				body: "WooCommerce stores can support complicated product configurations like product bundles, composite products, or conditional logic. However, Shopify introduces structural limits, and the platform might not natively support some complex configurations or logic.",
			},
			{
				title: "App & Payment Setup",
				body: "Just like store functionalities, some WooCommerce plugins aren’t available directly in Shopify’s App Ecosystem. Also, payment gateways need to be re-integrated using Shopify’s supported options. So, some of the workflows need to be rebuilt, like subscriptions, reward systems, or multi-currency logic.",
			},
			{
				title: "GDPR and Data Security",
				body: "Handling user data during migration brings GDPR and data protection into focus. While the store’s security is already configured by Shopify, the most important thing to keep in mind is migrating customer data securely. As your migration partner, we ensure that customer data is transferred, stored, and processed in accordance with regulations.",
			},
		],
	},

	cta: {
		text: "Hire a Trusted WooCommerce to Shopify Migration Company and Scale Your Business Faster.",
		ctaLabel: "Contact Us Today for a Free Quote!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "WooCommerce to Shopify",
		title: "Migration Checklist",
		columns: 2,
		steps: [
			{
				title: "Audit Your WooCommerce Store",
				body: [
					"As an experienced ",
					{ text: "SEO service provider", href: "/seo-search-engine-optimization/" },
					" in the USA, we conduct a thorough audit of your website to understand the existing gaps and issues.",
				],
			},
			{
				title: "Backup Your WooCommerce Store",
				body: "To be safe, in case the WooCommerce to Shopify migration goes south, we create a full backup of your WooCommerce store before making any changes.",
			},
			{
				title: "Inventory and Product Cleanup",
				body: "We clean and normalize the product data by removing discontinued or duplicate SKUs, standardize the variant naming conventions, and check for missing product images or broken image URLs.",
			},
			{
				title: "Analyze Store Design and Functionality",
				body: "Our team of web designers and developers break down your existing store’s theme and functionality to determine what can be replicated using Shopify’s Liquid templating and what needs to be developed from scratch.",
			},
			{
				title: "Choose a Shopify Plan and Apps",
				body: "We are your consultants, so if you don’t have a plan, we will create one for you. From guiding you in choosing Shopify or Shopify Plus to selecting the best hosting plan and apps that could enhance your store’s functionality, we are with you at every step of this migration.",
			},
			{
				title: "Plan URL Redirects and SEO Strategy",
				body: "Your high SEO ranking is the result of years of work and dedication; hence, we preserve the SEO value by creating a solid SEO migration strategy. It includes URL structure export, 301 redirect scripts, SEO data migration, and URL mapping.",
			},
			{
				title: "Set Up Payment and Shipping Options",
				body: "As a WooCommerce development agency in the USA, we compare your WooCommerce store’s settings and replicate conditional logic or custom shipping classes using Shopify’s built-in options or Shopify Functions (Plus only).",
			},
			{
				title: "Prepare Content and Marketing Data",
				body: "All the content published on your website, including CMS pages, blog posts, product and collection pages, legal pages, and everything else, is prepared for a smooth transfer.",
			},
			{
				title: "Communicate Migration Plan Internally",
				body: "Before beginning with the migration, we discuss the entire plan with the stakeholders and teams across departments to ensure everyone’s on the same page.",
			},
			{
				title: "Set a Migration Timeline and Test Environment",
				body: "We define a phased migration plan, where we will establish clear deadlines for theme development, data transfer, QA, and go-live, including the buffer period. For testing, our experts will create a real-life production environment to check the store’s actual capability.",
			},
		],
	},

	processStepsSecondary: {
		eyebrow: "Our Proven WooCommerce to Shopify",
		title: "Migration Process",
		columns: 2,
		steps: [
			{
				title: "Store Audit & Planning",
				body: "A thorough audit forms the foundation of a successful WooCommerce to Shopify migration. We understand every workflow, feature, and component of your existing website and map out a detailed migration plan.",
			},
			{
				title: "Backup & Data Extraction",
				body: "Before anything moves, our experts create a full backup of your WooCommerce store to safeguard against any unforeseen issues. Using secure methods, we extract your critical data, products, customers, orders, reviews, coupons, tax settings, and more.",
			},
			{
				title: "Migration Execution",
				body: "We migrate your data to Shopify using a combination of automated tools and manual refinement. Our team uses Shopify apps that can assist in migrating from your existing store to Shopify with a single click. However, as per the complexity, we decide on the migration strategy.",
			},
			{
				title: "SEO Preservation & URL Mapping",
				body: "Migrating to a new platform doesn’t mean your existing SEO value takes a hit, and you need to start from scratch. We preserve your existing SEO structure by recreating meta tags, setting up 301 redirects, alt texts, canonical links, and schema where applicable.",
			},
			{
				title: "Theme Implementation",
				body: "Whether you want to carry forward the existing branding or our plan to redesign, we support all your endeavors. As per your vision, we will guide you through the complexities and prepare the best theme that syncs with your brand motives.",
			},
			{
				title: "QA Testing",
				body: "Before going live, we perform extensive QA testing in a staging environment. We validate all the functionalities and workflows with our AI-powered testing tools. This approach helps in covering extensive test cases, including the edge cases, in a short period.",
			},
			{
				title: "Final Launch & Support",
				body: "Once everything’s verified, we execute the final cut-over, like syncing any last-minute data changes, pointing the domain to Shopify, activating redirects, and running a final checklist. Post-launch, we provide hands-on support to address customer queries, troubleshoot edge cases, and monitor analytics.",
			},
		],
		ctaLabel: "Schedule a Meeting Today!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	leftIconBox: {
		eyebrow: "Why Choose Icecube Digital as Your WooCommerce to Shopify",
		title: "Migration Partner?",
		items: [
			{
				icon: "/assets/icons/user-team.svg",
				title: "Expert in WooCommerce & Shopify",
				body: "Our team knows both platforms inside and out, understanding the nuances that make or break a successful migration project.",
			},
			{
				icon: "/assets/icons/award-badge.svg",
				title: "16+ Years of eCommerce Experience",
				body: "We’ve seen every possible migration scenario and know how to handle unexpected challenges that would stump less experienced agencies.",
			},
			{
				icon: "/assets/icons/like.svg",
				title: "99.9% Client Satisfaction Rate",
				body: "Our track record speaks for itself – clients consistently rate our migration services as exceptional and recommend us to other businesses.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "250+ Projects Successfully Completed",
				body: "Every migration teaches us something new, and that accumulated knowledge benefits every client who works with our experienced team.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "No Downtime – Sell While Migrating",
				body: "There is no downtime when you partner with Icecube Digital for migration. We strategically minimize your downtime, guaranteeing the continuous availability of your site, allowing you to sell even during the transformation. You can proceed with your business activities without any disruptions.",
			},
			{
				icon: "/assets/icons/lock.svg",
				title: "Completely Risk-Free Migration",
				body: "We guarantee your data safety with multiple backups and a rollback plan, so you never have to worry about losing anything important.",
			},
		],
	},

	faq: {
		eyebrow: "WooCommerce to Shopify",
		title: "Migration FAQs",
		items: [
			{
				question: "How long does it take to migrate from WooCommerce to Shopify?",
				answer: "The timeframe to migrate your store from WooCommerce to Shopify varies based on the complexity of the project. For instance, if you have a simple store with less data and customization, then you can complete the migration within 4-6 weeks. However, if you have a complex store with a large data volume, then it will take around three to six months.",
			},
			{
				question: "Will I lose my SEO rankings after the migration?",
				answer: "No, when done correctly, migration from WooCommerce to Shopify will not harm your SEO rankings. To achieve better results, we focus on maintaining URL structures, setting up 301 redirects, and preserving on-page SEO elements like meta and product descriptions.",
			},
			{
				question: "Can you migrate my reviews and order history?",
				answer: "Absolutely! You can migrate your reviews and order history from WooCommerce to Shopify using third-party apps or a custom solution, or stores with custom order attributes.",
			},
			{
				question: "What is the best way to transfer a WooCommerce store to Shopify?",
				answer: "It is always best to hire an expert WooCommerce to Shopify migration company to manage and complete your migration without any hassles. However, you can also opt for manual data copy and paste, a store migration app, or seek CSV import as per your convenience.",
			},
			{
				question: "Will my Google rankings be affected during the WooCommerce to Shopify migration?",
				answer: "A bad migration from WooCommerce to Shopify can lead to broken URLs, backlinks, and even a dramatic traffic drop. However, if planned and executed properly, the migration can actually boost your Google rankings, increase your page speed and user experience, resulting in higher conversion rates and sales.",
			},
			{
				question: "How to move product data from WooCommerce to Shopify safely?",
				answer: "First, you need to decide on the method to migrate your WooCommerce product data to Shopify. Now, export your product data from WooCommerce and edit the data. You can now import your product data to Shopify, following up with verifying and organizing the data.",
			},
			{
				question: "How much does it cost to migrate WooCommerce to Shopify?",
				answer: "The cost to migrate from WooCommerce to Shopify depends on the complexity of your project, third-party integrations, custom development, and SEO requirements. On average, the basic cost for migration is around $5000. You can consult your project requirements with our experts to determine the exact cost.",
			},
			{
				question: "What happens to my WooCommerce plugins when moving to Shopify?",
				answer: "You cannot transfer your WooCommerce plugins when migrating your store to Shopify. It is because the WooCommerce plugin’s language is not compatible with the Shopify platform. However, fret not, Shopify has plenty of features to get the job done in the right way.",
			},
			{
				question: "How to back up a WooCommerce store before migrating to Shopify?",
				answer: "To back up your data, go to the WooCommerce store back-end and move to Tools > Export. Now, you can export your site content, including your posts, pages, comments, and custom fields, to XML files.",
			},
			{
				question: "What are the common SEO mistakes during WooCommerce to Shopify migration?",
				answer: "The most common mistakes during eCommerce platform migration to Shopify are failing to implement SEO redirects. If your old URLs are not redirected to the Shopify counterparts, then you are risking your business on losing traffic and search engine rankings.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WoocommerceToShopifyMigrationServices;
