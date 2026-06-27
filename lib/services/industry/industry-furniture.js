const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ceoCtaSection from "../common-section/ceo-cta-section";
import ourClientsSection from "../common-section/our-clients-section";

/** @type {import('./index').ServiceData} */
const FurnitureWebsiteDesignDevelopment = {
	slug: "furniture-website-design-development",
	pageTitle: "Furniture Website Design Company | Furniture Store Web Development",
	metaDescription: "Best furniture web design company that will put your business ahead of the competition. Grow your sales with our custom furniture website development solutions.",

	banner: {
		heading: "Furniture Website Design Services",
		paragraphs: [
			"Icecube Digital has been a popular name when it comes to furniture website design solutions. Our team has worked on many furniture design projects and delivered customized solutions incorporating modern design fundamentals with eCommerce features. We represent the furniture in the most attractive ways that help their customers visualize what they are buying and help them make appropriate decisions. Not only design elements but we also take care of optimizing the portal in the right way to aid the client's brand reach higher in the search results.",
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

	plainText: {
		eyebrow: "Design Meets Digital Scale — Furniture",
		title: "Done Smarter",
		contentAlign: "center",
		paragraphs: [
			"For furniture brands, manufacturers, and retailers, success lies in merging rich visuals, complex logistics, and engaging brand storytelling. IceCube Digital delivers scalable eCommerce systems, visualization tools, and digital marketing strategies that empower your business to grow efficiently and beautifully online.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	imageTextSecondary: {
		eyebrow: "Built for the Modern",
		title: "Furniture Business",
		subtitle: "Our furniture eCommerce solutions blend design, performance, and marketing. They integrate configuration, pricing intelligence, AR visualization, multi-channel fulfillment, and automated marketing to build a connected and profitable digital ecosystem.",
		contentTitle: "Furniture Configurator & Customization Engine",
		image: "/assets/photos/furniture_config.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Enable customers to personalize furniture pieces to fit their space and taste." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Custom dimensions (width, depth, height)",
				"Material / finish / upholstery / hardware selection",
				"Real-time 3D or 360° preview with live price updates",
				"Save, share, or request quotes",
				"Constraint validation for structure and design",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Increases engagement, reduces returns, and raises average order value."] },
		],
	},

	imageTextTertiary: {
		contentTitle: "Augmented Reality (AR) & Room Visualization",
		image: "/assets/photos/augmented_realit.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Let shoppers visualize furniture directly in their rooms before purchase." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Web and mobile AR support for product placement",
				"3D spinning, lighting control, zoom, and shadowing",
				"Room planner tool for full set visualization",
				"Scenario rendering (e.g., living room sets, office layouts)",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Boosts buyer confidence and decreases return rates."] },
		],
	},

	imageTextQuaternary: {
		contentTitle: "Dynamic Pricing & Material Cost Integration",
		image: "/assets/photos/dynamic_pricing.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Automate pricing by linking live material cost data and regional adjustments." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Connect to wood, metal, or fabric rate APIs",
				"Price formula engine (base + materials + margin)",
				"Automatic region/currency adjustments",
				"Preview and approve pricing updates before publishing",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Ensures margin consistency and transparency while reducing manual input."] },
		],
	},

	imageText5: {
		contentTitle: "Search, Filtering & Visual Discovery",
		image: "/assets/photos/search_filtering.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Help customers find the right piece amidst large catalogs." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Faceted filters: style, size, material, room, brand",
				"Visual “see similar” or “you may like” based on image-based matching",
				"Room-based suggestions (e.g. “fits your living space”)",
				"AI-powered auto-suggest & voice search",
			] },
			{ type: "text", text: "Enhance discovery and reduce bounce rates in catalogs with hundreds or thousands of SKUs." },
		],
	},

	imageText6: {
		contentTitle: "Comprehensive Product & Variant Management",
		image: "/assets/photos/product_variant.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Manage complex SKUs and product variants with accuracy and speed." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Template-based variant creation for sizes, finishes, and fabrics",
				"Bulk upload/edit tools for large catalogs",
				"High-resolution swatches and gallery management",
				"Conditional logic linking compatible components",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Maintains catalog consistency and reduces human errors."] },
		],
	},

	imageText7: {
		contentTitle: "Responsive UI / Mobile-First Design & Progressive Web App (PWA)",
		image: "/assets/photos/responsive_ui.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Ensure that browsing, configuring, and buying furniture on mobile is seamless." },
			{ type: "text", text: "Key Features:", strong: true },
			{ type: "ul", items: [
				"Speed-optimized image loading (lazy load, Squoosh, webP)",
				"Touch-friendly sliders, swipe gestures, mobile dialogs",
				"Offline caching / PWA fallback",
				"Fast checkouts, saved profiles, fingerprint login",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Capture mobile-first buyers with a luxury experience — especially important in furniture shopping."] },
		],
	},

	imageText8: {
		contentTitle: "Inventory, Order & Fulfillment Orchestration",
		image: "/assets/photos/order_fulfillment.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Optimize large-scale inventory and delivery logistics for furniture sales." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Multi-location warehouse and store stock synchronization",
				"Support for pre-order, backorder, and made-to-order models",
				"ERP/WMS/shipping API integration",
				"Freight calculation by dimensions or zones",
				"Split and staged delivery management",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Eliminates overselling and speeds up order fulfillment."] },
		],
	},

	imageText9: {
		contentTitle: "Omnichannel Experience & Showroom Integration",
		image: "/assets/photos/omnichannel_experience.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Connect your online and in-store presence seamlessly." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"In-store kiosks/tablets for full catalog browsing",
				"Unified cart, wishlist, and user profile",
				"Reserve online, pick up in-store options",
				"QR/NFC integration linking physical items to digital pages",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Creates a consistent customer experience across every channel."] },
		],
	},

	imageText10: {
		contentTitle: "Advanced Search & Visual Discovery",
		image: "/assets/photos/advanced_search.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Help customers find the perfect product faster with intelligent discovery tools." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Faceted filters by style, size, material, brand, and price",
				"Visual ‘find similar’ product search",
				"AI-driven recommendations and auto-suggestions",
				"Voice search compatibility",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Improves discoverability, engagement, and conversion rates."] },
		],
	},

	imageText11: {
		contentTitle: "Integration with ERP, CRM & PIM Systems",
		image: "/assets/photos/CRM_PIM.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Connect all your systems for seamless operations." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Two-way synchronization for inventory, orders, and customer data",
				"API connectors for NetSuite, SAP, Zoho, and other systems",
				"Centralized PIM for consistent product data",
				"Unified customer insights for sales and marketing",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Increases efficiency, reduces manual work, and enhances scalability."] },
		],
	},

	imageText12: {
		contentTitle: "Digital Marketing & Automation",
		image: "/assets/photos/digital_marketing.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Enhance visibility, conversion, and retention through automation and insights." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Abandoned cart and browse recovery automation",
				"Segmentation by style, room, or customer interest",
				"Personalized content and product recommendations",
				"A/B testing and SEO optimization",
				"Cross-channel marketing campaigns (email, SMS, social)",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Improves ROI and customer lifetime value through data-driven campaigns."] },
		],
	},

	imageText13: {
		contentTitle: "Analytics, Personalization & Marketing Automation",
		image: "/assets/photos/analytics_personalization.jpg",
		imageAlt: "",
		blocks: [
			{ type: "text", text: "Drive conversions and retention through data-driven strategies." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Behavior-based product recommendations",
				"Predictive analytics (e.g. “likely to buy next”)",
				"Dynamic home pages based on visitor profile",
				"Email triggers: abandon cart, browse abandonment, cross-sell / upsell",
				"A/B testing modules",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Turn data into revenue growth, not just insights."] },
		],
	},

	imageText14: {
		contentTitle: "Post-Sale Service, Warranty & Returns Management",
		image: "/assets/photos/post_sale_service.jpg",
		imageAlt: "",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Deliver exceptional after-sales support to build long-term customer relationships." },
			{ type: "text", text: "Key Capabilities:", strong: true },
			{ type: "ul", items: [
				"Automated returns and repair workflows",
				"Warranty registration and claim tracking",
				"Customer self-service portals for delivery and service updates",
				"Repair and refurbishment management",
			] },
			{ type: "text", text: [{ bold: "Business Benefit:" }, " Enhances customer satisfaction and loyalty through efficient service handling."] },
		],
	},

	getQuote: true,

	plainTextSecondary: {
		eyebrow: "Innovative Furniture Website Development for a",
		title: "Competitive Edge",
		contentAlign: "center",
		paragraphs: [
			"Looking to sell your bespoke furniture online and reach out to a wider audience? You need to start with a website that showcases your brand and offerings right.",
			"Our custom furniture web design and development expert team work with you to create the perfect furniture store website for your business that reflects the essence of your brand and hooks in your target customers.",
			"We understand that selling huge pieces of furniture online, requires that extra edge to earn the trust of your customers and to close the deal. This is why, our stunning furniture website designs are focused on providing your customers with the best online shopping experience.",
			"Eye-catching photos, an easy-to-use design, seamless navigation, integrated customer support, social proof, secure payment gateways, unique themes – are just a few of the highlights of our furniture eCommerce website development service here at IceCube Digital.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	leftIconBox: {
		eyebrow: "Furniture Website",
		title: "Design Services",
		subtitle: "We are committed to provide our clients with the highest quality furniture website developer services on the market. From helping you choose a domain name to developing custom features, we have all the skills and experience you need to make your dream website a reality. Here are different services under furniture website development:",
		items: [
			{
				icon: "/assets/icons/brush.svg",
				title: "Custom Furniture Website Design",
				body: "We help your furniture business be found online with the help of modern, responsive furniture website design that contains an extensive catalogue of all your products. Having an optimized website is essential if you want to be found in local search results, thereby directing your target audience right to your physical store."
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Create Furniture eCommerce Website",
				body: [
					"If you're looking to start selling your products online, then we help you set up an online store for your furniture business. As a top-notch ",
					{ text: "eCommerce design agency", href: "/ecommerce-website-design-services/" },
					", we provide your furniture ecommerce store with the best of functionalities that increase conversions and improve your product sales.",
				]
			},
			{
				icon: "/assets/icons/transport.svg",
				title: "Migration",
				body: "If your existing platform is aging and needs to be updated or revamped, we can help you migrate and scale as your business grows or keep the technology you use up to date. We handle both technology and business function transformations while ensuring seamless transition without data loss. Additionally, platform changes often add a layer of security to existing trading systems."
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Maintenance and Support",
				body: "We provide ongoing maintenance and technical support so you can be confident that your site is working optimally at all times. Whether technical glitches or routine updates, our support and maintenance team ensures your website functions seamlessly and smoothly."
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Performance Optimization",
				body: "Performance optimization is crucial in online store development for furniture businesses to deliver a seamless and enjoyable user experience. By leveraging industry best tips, like image optimization, browser caching, minification of code, responsive design, content optimization, and assessing server performance, our experts will help in designing an optimized website that will have a positive impact on search engine rankings, conversion rate, and overall success of your business."
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Payment Gateway Integration",
				body: "Building trust with customers is essential in online marketing, and it starts with secure and safe payment features. Our development team will incorporate secure payment gateways to protect confidential information and give customers peace of mind on the website. We can myriad convenient payment facilities, such as credit cards, PayPal, or digital wallets, that can improve the checkout process and reduce cart abandonment."
			},
		],
	},

	leftIconBoxSecondary: {
		eyebrow: "Boost Sales and Customer Reach with a Custom",
		title: "E-Commerce Solution",
		subtitle: "With the best furniture website designer working on your website on e-commerce, you'll have access to a captivating, user-friendly, and secure website. Besides, the entire world is on the Internet, and it is time for your business to be on the Internet and become visible to your intended target audience. Here are some benefits of having an online store:",
		items: [
			{
				icon: "/assets/icons/www.svg",
				title: "Expand Customer Reach",
				body: "The Internet provides a global platform for furniture stores to reach customers outside their local area or even nationwide. It greatly expands your potential customer base and helps you reach your target audience living beyond national borders."
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Meet Customer Expectations",
				body: "Online stores can use customer data to provide personalized offers and targeted advertising to improve the shopping experience and increase the likelihood of a purchase."
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "More Sales",
				body: "Online stores often have lower overhead costs than brick-and-mortar stores. Cost savings are possible as there is no need to maintain a physical store or hire as many employees."
			},
			{
				icon: "/assets/icons/timer.svg",
				title: "Open 24/7",
				body: "The online store is open 24/7, allowing customers to shop conveniently. This flexibility accommodates different schedules and time zones."
			},
		],
	},

	topIconBox: {
		eyebrow: "Top E-Commerce Platforms for",
		title: "Furniture Retailers",
		subtitle: "With the digital world's expansion, ample e-commerce platforms provide undefined facilities and features to facilitate furniture store website design and establishment. Out of all the available options, how do you recognize which is best suited for your business? Let's compare all the available options in the market.",
		items: [
			{
				icon: "/assets/icons/shopify.svg",
				title: "Shopify",
				body: "Shopify is one of the most popular e-commerce platforms this year, and it's no wonder why. Shopify is designed for people, not monetization. It is an excellent option if you have small to medium-sized furniture storage."
			},
			{
				icon: "/assets/icons/magento.svg",
				title: "Magento",
				body: "Selling furniture online can be the best experience of your life with an e-commerce marketplace near you. Magento seems to be the platform for this purpose. When looking for the best furniture e-commerce for small and medium businesses, Magento often comes to mind."
			},
			{
				icon: "/assets/icons/opencart.svg",
				title: "OpenCart",
				body: "OpenCart is a good choice for furniture e-commerce websites. It offers features like product management, order processing, and various extensions. Businesses can tailor it to your specific needs for a seamless furniture shopping experience."
			},
			{
				icon: "/assets/icons/woocommerce.svg",
				title: "Woocommerce",
				body: "WooCommerce accounts for over 30% of all online stores, giving many retailers a long list of reasons to choose this site. WooCommerce offers a list of free themes and several prepaid integrations, themes, and extensions. WooCommerce is an excellent option for those running small businesses or on a tight budget."
			},
			{
				icon: "/assets/icons/drupal.svg",
				title: "Drupal Commerce",
				body: [
					"Creating a furniture website with Drupal Commerce requires several steps. First, install the Drupal and Commerce modules. Then, configure your store, adds products, and customize the appearance using themes. Creating an online store for your furniture business can be difficult; hire a professional ",
					{ bold: "furniture website designer" },
					", you can rest assured that you'll have the best website store for you.",
				]
			},
		],
	},

	imageText15: {
		contentTitle: "Take Your Furniture Business Online With Professional Furniture Website Design Company",
		image: "/assets/photos/adult-dust-furniture.jpg",
		imageAlt: "",
		paragraphs: [
			"Whether you're a new company or an established brick and mortar furniture business – here at IceCube Digital, we design and help you manage your eCommerce store with easy to use furniture ecommerce website development solutions. Give your customers the power to renovate and upgrade their homes and offices right from their computers, while you boost your sales from a new sales channel that increases your ROI.",
		],
	},

	processSteps: {
		eyebrow: "What To Expect From Our Furniture Store",
		title: "Ecommerce Websites?",
		subtitle: "Our furniture eCommerce stores design provide you with all the features you want, with none of the hassles.",
		steps: [
			{
				title: "High-definition Photographs and Videos",
				body: "Today's digital savvy consumer wants to know more about your product before clicking on Buy. We satisfy their curiosity with high-definition product photography and videos, so that your target audience appreciates the exquisite workmanship of your products."
			},
			{
				title: "AR Integration",
				body: "If needed, we can also add advanced features like AR (Augmented Reality) so that customers can virtually see how the products look in their rooms before making a decision. As a top furniture website development company, we use this technology to provide your customers with an enhanced shopping experience."
			},
			{
				title: "Clean, Easy Navigation",
				body: "When it comes to eCommerce stores, “Less is More” is true. We ensure that your online furniture store design has a clean, intuitive user interface that makes it easy for customers to find their preferred product with minimal clicks."
			},
			{
				title: "Professional Designs",
				body: [
					"Our team of graphic and ",
					{ text: "eCommerce web designers", href: "/hire-ecommerce-designers-developers/" },
					" provides your online store with an elegant and classy appearance that matches your products. We strive to ensure that your furniture eCommerce store doesn't appear bland, but highlights the very essence of your brand.",
				]
			},
			{
				title: "Business Tools",
				body: "An eCommerce store is not a “Done once and forgotten” project. It has to be updated continuously to add new products, define new categories, update prices and quantity and more. We provide you with powerful business tools that help you keep track of orders and update your inventory with ease."
			},
			{
				title: "Advanced Functionality",
				body: "Whether you need an online chat tool or require your eCommerce store to be connected with your third party inventory management system, or any other custom functionality, our furniture web development team has got you covered. Moreover, we also ensure that your store is frequently updated to keep up with the changes.",
				bodyAfter: [
					{ text: "Get in Touch", href: "/contact-us/" },
					" with our expert furniture web designer team to find out what we can do for your business!",
				]
			},
		],
		ctaHref: "#",
	},

	infoBox: {
		eyebrow: "Overcoming Common Hurdles with Furniture Web",
		title: "Design Services",
		subtitle: "Developing a furniture website comes with its own set of unique challenges, from managing vast product catalogs to providing a smooth user experience. Below are key obstacles and practical solutions to ensure your online furniture store operates efficiently and delivers a seamless shopping experience.",
		items: [
			{
				title: "Handling Large and Complex Product Catalogs",
				body: "Furniture retailers often deal with extensive product catalogs that require detailed descriptions and variations. A well-organized database structure, combined with intuitive filters and search functionality, can simplify product management and help customers find what they need quickly."
			},
			{
				title: "Optimizing Product Images and Videos",
				body: "High-quality images and videos are essential for showcasing furniture online but can affect loading times. Optimizing media files for web use, using next-gen formats like WebP, and implementing lazy loading techniques ensure fast load times without compromising on image quality."
			},
			{
				title: "Seamless User Experience on Mobile Devices",
				body: "With a growing number of users shopping via mobile devices, responsive design is critical. Implement mobile-first strategies to ensure that your site adjusts seamlessly across different screen sizes, offering intuitive navigation and a smooth checkout process on any device."
			},
			{
				title: "Managing Customization Options",
				body: "Many furniture products offer customization features, like selecting materials or finishes. A well-designed customization tool that integrates smoothly with the product page can make it easy for customers to personalize their purchases without confusion or frustration."
			},
			{
				title: "Integrating Inventory Management",
				body: "Managing inventory across multiple platforms is crucial for keeping stock levels accurate. Integration of your website with real-time inventory management systems helps track stock in real-time, reducing the chance of overselling and ensuring smooth order fulfillment."
			},
			{
				title: "Handling High Shipping Costs and Logistics Management",
				body: "Shipping furniture can be expensive due to its size and weight. Offering real-time shipping rates at checkout, using local warehousing options, or incorporating split-shipping methods can help reduce costs for customers and streamline logistics management for your business."
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Us As Your Furniture",
		title: "Website Developers?",
		subtitle: "",
		benefitsLeft: [
			"Team of certified eCommerce website developers",
			"200+ eCommerce projects completed successfully",
			"Free project consultation by our eCommerce experts",
			"Best eCommerce user experience experts",
		],
		benefitsRight: [
			"Unparalleled quality with the best performance",
			"Easy and effective communication process",
			"24/7 technical support",
			"14+ years of ecommerce web development experience",
		],
	},

	infoBoxSecondary: {
		eyebrow: "Tackling Retail Challenges with a Furniture Store",
		title: "Web Development Company",
		columns: 2,
		subtitle: "Running a successful furniture store online comes with its own set of hurdles, from attracting visitors to boosting sales and retaining customers. A professional furniture web design company can offer tailored solutions to these challenges, helping your business thrive in the competitive online market.",
		items: [
			{
				title: "Our Website Isn't Attracting Visitors",
				body: [
					"A lack of website traffic often results from poor search engine visibility. ",
					{ text: "Optimizing your site for SEO", href: "/seo-search-engine-optimization/" },
					", improving site speed, and producing engaging content like blog posts or lookbooks can draw organic traffic. Consider using targeted online advertising campaigns to boost visibility further.",
				]
			},
			{
				title: "Our Product Sales Are Lower Than Expected",
				body: "Low sales can stem from unclear product descriptions, poor-quality images, or a complicated checkout process. Enhancing product pages with clear information, professional images, and easy navigation can make a big difference. Simplifying the checkout process and offering multiple payment options also encourages conversions."
			},
			{
				title: "We Are Struggling to Attract New Customers",
				body: "Expanding your reach requires more than just having an online presence. Utilize social media marketing, influencer collaborations, and email campaigns to target new audiences. Offering first-time buyer discounts or referral incentives can also be an effective way to bring in new customers."
			},
			{
				title: "We're Not Retaining Customers",
				body: "Customer retention often hinges on delivering a memorable shopping experience. Build loyalty through personalized offers, excellent customer service, and easy return policies. Creating a loyalty program or sending follow-up emails post-purchase can keep customers engaged and coming back for more."
			},
		],
	},

	cta: {
		text: "Make Your Business Global with Icecube Digital's Furniture Web Design & Development Services.",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Furniture Web Design",
		title: "FAQs",
		items: [
			{
				question: "How does your design process work?",
				answer: "Based on your initial ideas and references, our furniture website design team comes up with wire frames and mock ups for page designs. With your feedback on initial mock ups, we work on the revisions. We offer unlimited revisions and we won't be happy unless you are satisfied with the design.",
			},
			{
				question: "Do you use pre-made templates?",
				answer: "No, we build custom designs from scratch to meet the exact business needs of our valued clients. A lot of companies use pre made templates or themes to cut costs. We strongly recommend our customers to go with a custom design that will stand out your business from the rest.",
			},
			{
				question: "Do you offer warranty on Furniture websites you build?",
				answer: "Yes, we provide free one month bug fixing support. After that, you can opt for our monthly or yearly website maintenance package to keep your website up to date.",
			},
			{
				question: "Who will arrange content for my site?",
				answer: "You can provide content from your end if you can manage or opt for our content writing service package that we offer. We can assist you to create SEO & user friendly content for your web pages that will help you outrank top competitors online.",
			},
			{
				question: "I already have a website, can you update it?",
				answer: "If you have a website that is old-fashioned and not generating revenue, our furniture design specialists consult with you to determine your vision and redesign your site as per current design trends.",
			},
			{
				question: "What are your payment terms?",
				answer: "Project payments are divided in phases as per the project scope. You will need to release part of the payment as we finish the set milestones. For SEO & website maintenance services, it will be monthly or yearly based on package selected.",
			},
			{
				question: "How much does a furniture website cost?",
				answer: "The cost of building a website really depends on the complexity and time it takes to build a complete website. It takes longer to build a webshop with custom features than a simple order processing website. We offer industry specific solutions to keep the cost as minimum as possible.",
			},
			{
				question: "Can I update website myself after it's completed and live?",
				answer: "Our sites are built to give you full control and flexibility. Our furniture website development team will provide you a guide on how you can update those items on your own. If you ever want us to do technical updates, we will happily do it for you on hourly or fixed cost basis.",
			},
			{
				question: "Will my website work well on different size of devices?",
				answer: "Every website we build is mobile friendly. Majority of people are accessing the web using small screen devices these days so it's important that your website provides the best user experience on mobile phones and tablets. Our furniture website design team uses mobile first strategy while designing furniture websites.",
			},
			{
				question: "Can I see my website during development phase?",
				answer: "Yes. We will keep you in the center throughout the development phase to ensure your satisfaction. Once you approve the design layout, we will send a private link to check the construction. This way, any other changes required from your end will be made at the same time.",
			},
			{
				question: "What important features my furniture website should have?",
				answer: "Here are key features that your furniture website should have:",
				answerList: [
					"User friendly navigation, Both for desktop and mobile devices",
					"High quality visuals",
					"Responsive designs",
					"detailed product descriptions",
					"Product personalization",
					"Convenient payment and shipping options",
					"Product review and ratings",
					"secure checkout process",
				],
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default FurnitureWebsiteDesignDevelopment;
