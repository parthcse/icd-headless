const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const AutomotiveWebsiteDesign = {
	slug: "automotive-website-design",
	pageTitle: "Automotive Website Design Agency | Auto Parts Website Builder",
	metaDescription: "Best automotive website design agency that will stand out your business from the rest. Contact our auto parts website builder to create a high-performance website.",

	banner: {
		heading: "Automotive Web Design Agency",
		paragraphs: [
			"We are a leader in the area of data driven automotive ecommerce website design, development and digital marketing services. With our commitment to excellence, cutting edge technologies and passion for delivering great results, We drive success for automotive businesses through strategic online presence and impactful digital marketing solutions.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
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

	checkList: {
		eyebrow: "Driving Digital Transformation for",
		title: "Automotive Brands",
		subtitle: [
			"The automotive industry is rapidly shifting toward digital-first experiences. From B2C aftermarket stores to B2B part distributors and OEM networks, success depends on intelligent catalog management, compatibility accuracy, logistics visibility, and customer trust. IceCube Digital builds scalable automotive eCommerce ecosystems that help you sell smarter, faster, and globally.",
			[{ bold: "Automotive eCommerce Challenges We Solve" }],
		],
		benefitsLeft: [
			"Managing large, complex catalogs with vehicle fitment data",
			"Handling compatibility and cross-reference logic across brands",
			"Connecting B2B and B2C sales workflows under one system",
			"Managing inventory across warehouses and suppliers",
		],
		benefitsRight: [
			"Reducing returns and misfit orders",
			"Building digital aftermarket loyalty through service and subscription models",
			"Marketing automation for vehicle-specific outreach",
		],
	},

	imageText: {
		contentTitle: "Vehicle Fitment, Lookup & Compatibility Engine (YMM – Year, Make Model)",
		image: "/assets/photos/vehicle_fitment-engine.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Let buyers instantly find the exact part they need." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Vehicle selector: Year → Make → Model → Trim → Engine",
				"VIN (Vehicle Identification Number) based part matching",
				"Dynamic filtering for compatible parts and accessories",
				"Cross-reference tables for OEM and aftermarket parts",
				"Smart recommendations for related consumables",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Reduces returns and builds trust through fitment accuracy."] },
		],
	},

	imageTextSecondary: {
		contentTitle: "Product Configurator & Accessory Bundles",
		image: "/assets/photos/product-confic-vehicle.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Enable easy customization and bundled shopping experiences." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Assemble kits or upgrade bundles (e.g. filter + oil + tool set)",
				"Dynamic pricing as components are added",
				"Auto-suggest compatible add-ons",
				"‘Save bundle’ and ‘Reorder same kit’ options",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Simplifies buying and boosts average order value."] },
		],
	},

	imageTextTertiary: {
		contentTitle: "Parts & Consumables Subscription Services",
		image: "/assets/photos/subscription-service-vehicle.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Keep customers coming back automatically." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Subscriptions for consumables (filters, oil, wipers, batteries, bulbs)",
				"Flexible renewal cycles (30 / 60 / 90 days, or mileage-based)",
				"Automated reminders via email/SMS before dispatch",
				"Pause, resume, or modify subscription anytime",
				"Loyalty discounts for recurring customers",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Builds recurring revenue and brand loyalty through convenience."] },
		],
	},

	imageTextQuaternary: {
		contentTitle: "Dynamic Pricing & Stock Synchronization",
		image: "/assets/photos/dynamic-pricing-vehicle.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Manage real-time pricing, supply feeds, and regional rates." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Automated price adjustments based on supplier feeds",
				"Margin-protection logic and MAP compliance",
				"Multi-currency and region-based pricing control",
				"Integration with supplier APIs for live cost and inventory",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Keeps pricing competitive while maintaining profitability."] },
		],
	},

	imageText5: {
		contentTitle: "Advanced Catalog & Variant Management",
		image: "/assets/photos/advanced_catalog.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Control massive SKU libraries efficiently." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Hierarchical catalog (vehicle class → category → subcategory → part)",
				"Bulk data import/export via API, XML, or CSV",
				"Fitment tagging for brand, series, model compatibility",
				"Support for OEM and aftermarket product variations",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Improves catalog accuracy and reduces manual effort."] },
		],
	},

	imageText6: {
		contentTitle: "Inventory & Fulfillment Orchestration",
		image: "/assets/photos/inventory_fulfillmentInventory.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Manage logistics seamlessly across multiple warehouses." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Real-time multi-location stock visibility",
				"Integration with ERP, WMS, and courier systems",
				"Drop-shipping, backordering, and warehouse routing logic",
				"Dimensional shipping rates (weight/volume-based)",
				"Order splitting and consolidation",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Reduces delivery delays and optimizes fulfillment costs."] },
		],
	},

	imageText7: {
		contentTitle: "B2B / Dealer / Distributor Portals",
		image: "/assets/photos/b2b-commerce-vehicle.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Cater to trade customers with specialized pricing and workflows." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Dealer-specific pricing, credit terms, and purchase limits",
				"Bulk ordering and CSV import tools",
				"Quote requests (RFQ) and order approval workflows",
				"Integration with ERP for invoicing and tax automation",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Simplifies wholesale operations and improves distributor engagement."] },
		],
	},

	imageText8: {
		contentTitle: "Warranty, Service & Returns Management",
		image: "/assets/photos/warranty-return-service.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Deliver strong post-sale support for high-value parts." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Digital warranty registration tied to VIN or serial number",
				"Service scheduling & maintenance reminders",
				"Repair request (RMA) workflows and service center integration",
				"Customer portal for warranty, order, and service tracking",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Strengthens after-sales service and customer retention."] },
		],
	},

	imageText9: {
		contentTitle: "Search, Filtering & Visual Part Discovery",
		image: "/assets/photos/search-filtring-vehicle.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Help customers find exactly what they need — fast." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Faceted filters (vehicle, brand, fitment, type)",
				"VIN-based and image-based part lookup",
				"Predictive AI search with typo correction",
				"‘Customers also bought’ and related product engines",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Reduces bounce rates and improves conversions."] },
		],
	},

	imageText10: {
		contentTitle: "Omnichannel Experience & Dealer Integration",
		image: "/assets/photos/omnichannel-experience-vehicle.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Seamlessly connect your online store, app, and physical locations." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Shared cart and order sync across channels",
				"Buy online, pick up in-store (BOPIS)",
				"QR / barcode scan for quick reordering",
				"Customer loyalty & referral systems",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Creates consistent experiences for every touchpoint."] },
		],
	},

	imageText11: {
		contentTitle: "Digital Marketing, Automation & SEO for Automotive",
		image: "/assets/photos/digital_marketing-vehicle.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Drive traffic, engagement, and repeat sales through smart automation." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Email/SMS workflows for service reminders and consumables",
				"Abandoned cart & post-purchase campaigns",
				"Vehicle-specific recommendations based on VIN or purchase history",
				"SEO optimization for parts catalogs and guides (structured data, schema)",
				"Paid media and retargeting automation",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Enhances visibility, re-engagement, and customer retention."] },
		],
	},

	imageText12: {
		contentTitle: "Analytics, Recommendations & Predictive Maintenance Insights",
		image: "/assets/photos/analytics-recommendations-vehicle.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Leverage data to optimize restocking and marketing." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Predict demand for parts based on season or mileage",
				"Identify top-performing SKUs and supplier reliability",
				"Personalized suggestions for repeat purchases",
				"Trend dashboards (vehicle type, brand, region)",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Improves demand planning and marketing ROI."] },
		],
	},

	imageText13: {
		contentTitle: "Integration with ERP, PIM, CRM & Supplier Networks",
		image: "/assets/photos/supplier-networks.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Connect everything — from data to delivery." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Two-way integration with SAP, NetSuite, Zoho, or Odoo",
				"Real-time sync of inventory, orders, pricing, and suppliers",
				"Centralized PIM for product data governance",
				"Unified customer and vehicle profile management",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Reduces manual operations and ensures scalability."] },
		],
	},

	getQuote: true,

	plainText: {
		eyebrow: "Professional Web Design for",
		title: "Automotive Businesses",
		contentAlign: "center",
		paragraphs: [
			"Whether you're a local auto repair shop, an automotive dealer or a leading manufacturer of auto parts, you need the right online image to pull in today's tech-savvy customers. And, it all starts with automotive web design and development.",
			[
				"From ",
				{ text: "eCommerce store development", href: "/magento-development-services/" },
				" to search engine optimization, well-crafted social media strategy to pay-per-click marketing, we've got all the tools that you need to be found online. With Icecube Digital, the best automotive website design agency, your website will not only look great – but will also drive your business to success.",
			],
		],
		ctaLabel: "Request a free quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "brian-rundell",
	},

	topIconBox: {
		eyebrow: "What",
		title: "We Offer",
		columns: 4,
		subtitle: "Icecube Digital specializes in assisting auto-related businesses and dealerships with their online success through the provision of premium automotive web design services. Owing to performance optimization and website migration, we have more than a decade of experience developing high-converting digital solutions for the automotive industry.",
		items: [
			{
				icon: "/assets/icons/transport.svg",
				title: "Migration",
				body: "Our experts migrate existing websites to new platforms in a seamless fashion, incorporating design enhancements while ensuring that no traffic or rankings are lost. Our technical migration procedure is both complex and seamless, ensuring minimal downtime."
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Maintenance and Support",
				body: "Continuous maintenance and support are provided to guarantee optimal functionality and availability of your website at all times. Our automotive website developers proactively monitor sites, give updates, deploy security patches, repair bugs, and prevent problems before they impact your company."
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Performance Optimization",
				body: "We will optimize automotive websites with the most recent site performance technologies to ensure quick launch times, high search engine visibility, and an enhanced user experience. As a result, conversion rates increase, and repeat rates decrease."
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Payment Gateway Integration",
				body: "We incorporate reputable payment gateways into your website to provide your consumers with secure, PCI-compliant online payment processing options. It enables effortless and expeditious transactions throughout the entire year."
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Benefits of Having an Automotive Website",
		title: "with eCommerce",
		columns: 2,
		items: [
			{
				icon: "/assets/icons/www.svg",
				title: "Expand Customer Reach",
				body: "We prioritize conversions as one of the best automotive design agencies. An effectively designed automotive eCommerce website enables dealerships to significantly broaden their customer base beyond the confines of the local area. In addition to multi-level pricing options, detailed product descriptions, image galleries, custom vehicle configurators, and side-by-side comparisons, our websites provide additional functionality to exhibit both in-stock and specially ordered products effectively."
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Cut Costs and Streamline Operations",
				body: "The optimization of administrative and sales processes through automation enables automobile dealership employees to allocate their efforts towards higher-value endeavors such as cultivating relationships and finalizing transactions. In order to reduce administrative expenses, our eCommerce-enabled websites manage initial product research, pricing, financing applications, test drive requests, and other transactional workflows with ease."
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Improve the Customer Experience",
				body: "End-to-end eCommerce solutions provide substantial advantages for the consumer experience. Increasing customer contentment by permitting them to manage initial research, pricing, financing, and new/used vehicle configuration details at their convenience. Our automotive ecommerce website solutions centralize previously disjointed processes onto a single platform, giving customers more control over buying and servicing journeys."
			},
			{
				icon: "/assets/icons/timer.svg",
				title: "Open 24/7",
				body: "Our team of premier automotive website developers can provide your dealership with an eCommerce website that enables you to generate sales around the clock every day of the week. As opposed to restricting operations to conventional physical store hours, online consumers have continuous access to your inventory."
			},
		],
	},

	leftIconBox: {
		eyebrow: "Which eCommerce platform is best for",
		title: "Automotive Websites?",
		subtitle: "An eCommerce platform is essential for companies looking to develop online sales and services. It is essential to choose a platform that has a user-friendly interface, provides SEO capabilities, allows customization, supports multiple payment gateways, and offers comprehensive customer support. Here are some of the best platforms for your automotive eCommerce website.",
		items: [
			{
				icon: "/assets/icons/shopify.svg",
				title: "Shopify",
				body: "Shopify is a versatile eCommerce platform that provides a wide spectrum of customizable templates and themes to create a website for any industry, including automotive. Shopify's ecosystem allows integration with specific automotive apps for managing inventory, tracking orders, and handling product variations."
			},
			{
				icon: "/assets/icons/magento.svg",
				title: "Magento",
				body: "Magento is an open source eCommerce website-building platform that offers a high level of customization. It provides a range of suitable themes for automotive businesses and offers functionalities like product filtering, inventory management, and mobile responsiveness. As a leading automotive web design company, it is the best option for businesses that have high traffic and transactions."
			},
			{
				icon: "/assets/icons/wix.svg",
				title: "Wix",
				body: "Wix is one of the automotive eCommerce website builders that allows businesses to create professional-looking websites without requiring much technical knowledge. It provides an intuitive drag-and-drop editor and a wide range of customizable templates with SEO capabilities and mobile responsiveness. However, it comes with advertisements on free plans, limitations on scalability and template options, and limited eCommerce options."
			},
			{
				icon: "/assets/icons/woocommerce.svg",
				title: "WooCommerce",
				body: "WooCommerce is a WordPress plugin that will transform your regular website into a fully functional eCommerce store. If your automotive website is using WordPress as the content management system, then WooCommerce is the best choice. It provides a user-friendly interface and provides seamless integration with WordPress for easy content management with eCommerce functionality."
			},
		],
	},

	topIconBoxTertiary: {
		eyebrow: "Why Choose Automotive Dealer Website Design",
		title: "Services From Us?",
		columns: 2,
		items: [
			{
				icon: "/assets/icons/sliders.svg",
				title: "Custom Solutions",
				body: [
					"Whether you just sell a handful of products or thousands of auto parts online, we offer you to leverage customized automotive ",
					{ text: "eCommerce development services", href: "/ecommerce-website-development-services/" },
					", which fits your brand perfectly. Since we know the ins-and-outs of your industry, we build efficient eCommerce sites that convert casual browsers into buyers.",
				]
			},
			{
				icon: "/assets/icons/images-place.svg",
				title: "Aesthetically Superior Sites",
				body: "We know that when it comes to online selling, your product images do most of the talking. This is why we focus on creating beautiful photo galleries that pull in the eyeballs. What more! We also provide you with content management tools so that you can easily manage your online inventory."
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Fully Responsive",
				body: "With the hundreds of mobile devices of varying resolutions and screen sizes, providing a seamless user experience across devices is your topmost priority. Our automotive web designs are completely responsive, providing your target customers with an unparalleled user experience; irrespective of the device they're on."
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Competitive Pricing",
				body: "We believe that cost-effective solutions can always be delivered without compromising on the quality. And, we are well aware of the needs of small scale enterprises. This is why; we offer affordable pricing while delivering the best possible solutions that meet your specific requirements."
			},
		],
	},

	topIconBoxQuaternary: {
		eyebrow: "Our Automotive",
		title: "Ecommerce Solutions",
		items: [
			{
				icon: "/assets/icons/brush.svg",
				title: "Website Design and Development",
				body: [
					"When it comes to auto parts dealer website design, we create modern and contemporary automotive website design that offers a user-friendly interface and lead to high conversion rates. Through careful planning and research, with ",
					{ text: "automotive SEO", href: "/automotive-seo-company/" },
					" and SEM in mind, our sites will help you pull in qualified leads and boost your sales.",
				]
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Insight and Metrics",
				body: "Already have an existing auto parts eCommerce website, but not getting ROI from it? No worries, our expert team of data analytics use advanced tools and techniques to figure out what's wrong with your existing site and optimize it to help you grow your business."
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Search Engine Optimization",
				body: [
					"Building a website is just the first step. You need to be visible online if you want to pull in your target customers. We offer end-to-end ",
					{ text: "professional seo services", href: "/seo-search-engine-optimization/" },
					" for the automotive industry to boost your web page rankings and be found on search engines. All our automotive eCommerce solutions are seo-friendly right from the title tags to schema markup.",
				]
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Digital Marketing",
				body: "Boost your online visibility and increase ROI with carefully-planned digital marketing campaigns that match your brand's persona. We use a wide variety of online marketing techniques like social media campaigns, pay-per-click marketing, search engine marketing, content marketing and more, to establish your automotive brand identity online."
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Ecommerce Stores",
				body: "Selling a product online isn't easy. And, automotive parts and accessories are doubly tricky, due to the wide array of parts and models. We develop an intuitive and user-friendly auto parts eCommerce store for you, to help you reach out to new customers and markets. Whether you require Magento, Shopify, WooCommerce or any other eCommerce platform, we've got you covered."
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Advanced Functionalities and Integrations",
				body: "Enhance the functionality of your car parts website design by offering advanced features like make-year-model search for auto parts, customer service bookings, feedback, content management portal, database integrations and more. Get in touch with our auto parts website design team to find the right features to add to your site and make it stand apart from the rest."
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Partnering With a Trusted Automotive",
		title: "Web Design Company",
		contentAlign: "center",
		paragraphs: [
			"Our skilled team specializes in building powerful, user-friendly automotive websites that drive results. Leveraging the latest design trends and development technologies, we create customized solutions that enhance customer experience and boost sales for automotive businesses.",
			"Don't leave your growth to chance. Work with IceCube Digital, a professional automotive web development agency, and accelerate your business success with a website built to perform.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	cta: {
		text: "Drive customer engagement with a website that sells your automotive products 24/7!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Automotive Website Design",
		title: "FAQs",
		items: [
			{
				question: "How does your automotive website design process work?",
				answer: "Based on your business requirements, initial ideas and references, our website design team comes up with wire frames and mock ups for page designs. With your feedback on initial mock ups, we work on the revisions. We offer unlimited revisions and we won't be happy unless you are satisfied with the design.",
			},
			{
				question: "I already have a Auto parts website, can you update it?",
				answer: "If you have a website which is out of date and not generating sales, we can help to redesign it as per current industry website design trends. The price and timeline for such a project can be decided after thorough review of your existing website.",
			},
			{
				question: "How much does a auto dealer website design cost?",
				answer: "The cost of building an automotive dealer website really depends on the time it takes for design and development of the website. It takes longer to build a website with custom features than a simple CMS website. We offer Automotive industry specific website development solutions to keep the cost as minimum as possible.",
			},
			{
				question: "What is responsive website development?",
				answer: "Responsive website development is an approach to build website pages that adapts to work well across different screen size of devices such as desktops, tablets and mobile devices etc. All the websites that we build are responsive in nature to provide your users with best user experience.",
			},
			{
				question: "What is your response time on a support request?",
				answer: "We reply and serve all the support requests quickly, typically within a couple of hours during working time. We also offer live chat support and telephone support so that you can easily reach our tech team in case of any emergency.",
			},
			{
				question: "Do you optimize our automotive website for SEO?",
				answer: "Yes, our web design and SEO specialists work hand in hand to create an automotive website that is both user-friendly and search engine optimized. We focus on all key automotive industry SEO elements to ensure your site ranks well and attracts the right customers.",
			},
			{
				question: "What essential features do you offer for automotive websites?",
				answer: "We build automotive websites with all the essential features your business needs:",
				answerList: [
					"Responsive UI/UX design",
					"Easy and intuitive navigation",
					"Advanced make/year/model search functionality",
					"Use high-quality images",
					"Customer reviews/social proofs",
					"Automation features",
					"Third party system integration",
					"Easy checkout process",
					"Payment gateway and shipping method integration",
					"Proper CTAs",
				],
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default AutomotiveWebsiteDesign;
