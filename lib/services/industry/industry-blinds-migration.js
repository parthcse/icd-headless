const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/**
 * Blinds & curtains website migration service page.
 *
 * The source document gives each section a single H2 rather than the usual
 * eyebrow/title split, so the splits below are ours. Its [TEMPLATE: …] markers
 * set where the shared blocks go: the quote form, stats row, case studies and
 * get-a-quote form after the banner, the "Contact Us Now!" band after the
 * import-tool section, and the testimonial before the FAQs.
 *
 * Case study IDs are the two projects the copy actually names — Blinds by Post
 * (PrestaShop → WooCommerce) and Baby Kingdom (Magento 2 → Shopify Plus) — plus
 * Visor, rather than the generic blinds trio the other blinds pages carry.
 *
 * Section order on the page = the order of the keys below (buildSectionOrder in
 * app/[slug]/page.js). Internal links use paths, not full https:// URLs — an
 * absolute URL is treated as third party by lib/link-attrs.js and gets nofollow
 * plus a new tab.
 */
/** @type {import('../index').ServiceData} */
const IndustryBlindsMigration = {
	slug: "blinds-curtains-website-migration-services",
	pageTitle: "Blinds & Curtains Website Migration Services | Icecube Digital",
	metaDescription:
		"Migrate your blinds or curtains store to Shopify, WooCommerce or Magento. We rebuild price grids and option rules, move order history and protect rankings.",

	banner: {
		heading: "Blinds & Curtains Website Migration Services",
		paragraphs: [
			"Blinds website migration at Icecube Digital moves an existing made-to-measure store to a new platform without losing what makes it work. We carry over price grids and option rules, order history with measurements, fabric and sample products, and the category and product pages that earn your search rankings.",
			[
				"This service is for online blinds and shades retailers, manufacturers selling directly, curtain and drapery brands, and showroom businesses with an online store. We move stores to Shopify, WooCommerce, or Magento. Every move starts with an audit of your data, pricing, and URLs. If you need a new store instead, see our ",
				{ bold: "blinds and curtains website design and development service" },
				".",
			],
		],
		ctaLabel: "Send us a proposal",
		ctaHref: "popup",
		phoneLabel: "Or Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	caseStudy: {
		eyebrow: "Our",
		title: "Case Studies",
		subtitle: [
			"Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [56485, 61213, 56584],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	leftIconBox: {
		eyebrow: "When Moving Your Blinds Store to a New",
		title: "Platform Makes Sense",
		subtitle:
			"Migration of a blinds store is a success if the platform is hindering business rather than the old look of the site.",
		items: [
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Your Platform Version Is Losing Support",
				body: "Old solutions don’t get security updates or new extensions anymore. Every month you run an unsupported version elevates risk, and it’s better to plan the move rather than hurrying when something goes wrong.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Every Price List Change Needs a Developer",
				body: "Multiple plugins handle pricing, product options, and quotes, often with overlapping functions. Changing one plugin can disrupt another, making it difficult to know whether the final price shown to customers is accurate.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Trade Accounts, Speed or Multi-Store Needs Have Outgrown the Store",
				body: [
					"When trade customers rely on manual quotes to get their prices, or slow pages affect the shopping experience, the current setup may no longer be sufficient. If your platform still fits and only the look is the problem, a ",
					{ text: "blinds website redesign", href: "/blog/blinds-website-redesign/" },
					" may be the better project.",
				],
			},
		],
	},

	imageText: {
		eyebrow: "Why Blinds and Curtains Migrations Need More",
		title: "Than an Import Tool",
		image: "/assets/photos/Product-Option-Variant-Management.png",
		imageAlt: "Product options and variants tied to price tables, the logic a migration has to rebuild",
		imagePosition: "right",
		paragraphs: [
			"The standard export of a product contains details such as names, prices and images. However, there should also be an export of all the logic behind the prices during a blinds ecommerce migration.",
			"Price grids and fabric price bands do not import natively between Shopify, WooCommerce and Magento. They live in apps, extensions or custom code, so they are rebuilt. Option rules, the valid combinations of controls, mounts and linings, are recreated rather than copied.",
			"Option rules comprising the right combinations of controls, mounts and linings should be recreated instead of simply transferred.",
			"The measurements and options are represented as part of the past orders and should be reconstructed in the fields of the new system. Usually, the fabric samples are exported as separate goods with enough delivery rules.",
			"Category, product and fabric pages carry your rankings, so every URL change needs a plan. Generic cart-to-cart migration tools often cannot handle this level of option complexity.",
		],
	},

	cta: {
		text: "Tell us how your store prices a blind, and we will show you what moves and what gets rebuilt.",
		ctaLabel: "Contact Us Now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	leftIconBoxSecondary: {
		eyebrow: "What We Migrate for Blinds and",
		title: "Curtains Stores",
		subtitle:
			"A blinds and curtains website migration covers far more than products. Here is what moves, and what we rebuild.",
		items: [
			{
				icon: "/assets/icons/layers.svg",
				title: "Products, Fabrics and Option Sets",
				body: "We move product types, fabric collections, colours, attributes and images, along with swatch and sample products. Duplicates and unused options are cleaned up before the move. Option sets are mapped so each product keeps the controls, mounts and linings customers can choose today.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Price Grids and Pricing Rules",
				body: [
					"Width and height grids, fabric bands, surcharges, size limits and trade price levels are rebuilt in the pricing route chosen for the new store. We check the results against your supplier price lists. If you need a calculator or configurator, see our ",
					{ text: "blinds price calculator development", href: "/blinds-price-calculator-configurator-guide/" },
					" service.",
				],
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Customers, Order History and Trade Accounts",
				body: "Customer records, order history with measurements and options, and trade customer groups can move to the new store. Order history helps with reorders and remakes. Which record types transfer depends on the source and destination platforms, and we confirm this during the audit.",
			},
			{
				icon: "/assets/icons/images-place.svg",
				title: "Content, Media and Measuring Guides",
				body: "Pages, measuring and installation guides, blog posts and media files move with their alt text, titles and meta descriptions. These guides help buyers order the right size, so they keep their place in the new store.",
			},
		],
	},

	imageTextSecondary: {
		eyebrow: "Protecting Search Rankings During a Blinds",
		title: "Website Migration",
		image: "/assets/photos/blinds-migration-rankings-protection.svg",
		imageAlt: "The four SEO stages of a blinds migration: URL inventory, 301 redirect map, metadata and schema transfer, and post-launch checks",
		paragraphs: [
			"Before the build, we create a URL inventory from a site crawl, Search Console and analytics. It shows which pages earn traffic and need the most care. Every URL gets a decision: keep, redirect or retire.",
			"The next step involves developing a 301 redirect map for categories, products, fabrics and guides. Rules for filtering and URL parameters, as well as canonical tags, are placed in appropriate places.",
			[
				"With our ",
				{ text: "Blinds SEO services", href: "/blinds-seo-services/" },
				", titles, meta descriptions, headings and structured data are copied to a new site. The XML sitemap is submitted, and GA4 ensures that sample requests, quotes and orders are tracked.",
			],
			"After going live, we keep an eye on crawl errors and 404 pages through Search Console, meaning that problems can be identified and solved quickly.",
			"Ranking changes can occur during migrations and positions cannot be guaranteed; however, this plan minimises the risk.",
		],
	},

	topIconBox: {
		eyebrow: "Shopify, WooCommerce or Magento: Where Your",
		title: "Blinds Store Moves",
		columns: 3,
		subtitles: [
			[
				"We choose the destination after the audit, not upfront. It depends on your catalogue, pricing method and systems. Each option below can handle made-to-measure pricing when set up correctly. Our ",
				{ text: "best ecommerce platform for blinds", href: "/best-ecommerce-platform-for-blinds/" },
				" guide compares the options.",
			],
		],
		items: [
			{
				icon: "/assets/icons/shopify.svg",
				title: "Shopify and Shopify Plus",
				body: "Managed hosting with a pricing app or custom pricing app, for stores that want less server upkeep. Plus is built for larger order volumes. See Shopify development for blinds stores.",
			},
			{
				icon: "/assets/icons/woocommerce.svg",
				title: "WooCommerce",
				body: "Suits content-led businesses that want WordPress and full control of pricing code. See WooCommerce development for blinds and curtains stores.",
			},
			{
				icon: "/assets/icons/magento.svg",
				title: "Magento 2",
				body: [
					"Suits large fabric catalogues, multi-store setups and complex trade pricing. See ",
					{ text: "Magento 2 development", href: "/magento-2-development-services/" },
					".",
				],
			},
		],
	},

	imageTextTertiary: {
		eyebrow: "Reconnecting Production, Pricing and Business Systems",
		title: "After the Move",
		image: "/assets/photos/blinds-migration-systems-reconnected.svg",
		imageAlt: "The new store reconnected to the production feed, ERP, inventory, CRM, shipping and payments, with price lists still kept on a spreadsheet",
		imagePosition: "right",
		paragraphs: [
			"We will recreate your production sheet or order, regardless of whether it is an email or API or EDI feed approved by your vendor.",
			"ERP, inventory, CRM, shipping, and payment connections will be redirected and tested. What we can connect depends on the API provided by each respective system.",
			"If you update your price lists using a spreadsheet, we can continue that practice as it is convenient.",
			"The goal is simple: orders go to production in all sizes and variants while your staff continues doing jobs as usual.",
		],
	},

	information: {
		eyebrow: "Blinds Migration Experience",
		title: "You Can Check",
		cards: [
			{
				blocks: [
					{ text: "Icecube Digital has 14 years in business. Two projects show how we handle large and complex moves." },
					{
						parts: [
							"Blinds by Post is a UK online blinds retailer. We moved its store from PrestaShop to WooCommerce. The catalogue consists of about 600,000 products, and the different options for those products are related to the price tables. Third-party migration tools could not handle these options, so we built a custom import plugin. Price grids are updated using Google Sheets. Read the ",
							{ text: "Blinds by Post migration case study", href: "/case-studies/blinds-by-post/" },
							" for the full project.",
						],
					},
					{ text: "In addition to window coverings, we also helped Baby Kingdom move from Magento 2 to Shopify Plus. We migrated products, product attributes, customers and orders, while maintaining the current SEO ranking, redirects and metadata. This demonstrates our capabilities to perform cross-industry migrations." },
				],
			},
		],
	},

	processSteps: {
		eyebrow: "How a Blinds Store",
		title: "Migration Runs",
		columns: 2,
		steps: [
			{
				title: "Audit and Data Mapping",
				body: "We review platforms, data, URLs and integrations. The audit shows what moves as is and what must be rebuilt.",
			},
			{
				title: "Platform and Pricing Route",
				body: "We confirm the destination platform. Pricing then runs through an app, an extension or custom code, depending on your grids and rules.",
			},
			{
				title: "Build on a Staging Store",
				body: "We build the theme, pricing logic, option rules, samples and integrations on a staging store while your live store keeps selling.",
			},
			{
				title: "Data Cleanup and Import",
				body: "We remove duplicates, then import products, customers and orders. Each batch is reviewed before the next begins.",
			},
			{
				title: "Testing Prices, Orders and Redirects",
				body: "Every size band and option is checked against your supplier price lists. We also test redirects and checkout.",
			},
			{
				title: "Launch, Monitoring and Support",
				body: "We handle go-live, then watch Search Console and incoming orders. Fixes continue after launch, and support covers price-list updates as supplier lists change.",
			},
		],
	},

	plainText: {
		eyebrow: "What Affects the Cost and Timeline of a",
		title: "Blinds Migration",
		paragraphs: [
			"Several factors set the scope: catalogue and fabric volume, the number of price grids and pricing methods, how easily the source platform exports data, and the depth of order history. Integrations, the number of URLs to redirect, and whether you move as is or redesign during the move also matter. We review each one in the audit.",
			[
				"We set the timeline after the audit. For general pricing guidance, see our ",
				{ text: "blinds website cost", href: "/how-much-does-a-blinds-website-cost/" },
				" guide.",
			],
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	checkList: {
		eyebrow: "Tell Us About the Store You",
		title: "Want to Move",
		subtitle: "Share these details, and we will prepare your proposal:",
		columns: 2,
		benefits: [
			"Current platform and store URL",
			"Preferred destination, or “not sure”",
			"Rough product and fabric counts",
			"How prices are calculated",
			"Connected systems",
			"Target launch window",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "terje",
	},

	faq: {
		eyebrow: "Blinds Website",
		title: "Migration FAQs",
		items: [
			{
				question: "Will our store need to go offline during the migration?",
				answer: "We design and validate the new e-commerce site using our staging environment while your existing site continues to operate. Switching occurs during a short cutover period during which all live orders and customer data are synchronised. We cannot guarantee complete and total downtime.",
			},
			{
				question: "What happens to orders already in production when we switch?",
				answer: "We will reach this agreement during the audit. Existing orders will either be executed in the old system or be imported into the new system with complete order history.",
			},
			{
				question: "Do customer accounts and passwords move to the new platform?",
				answer: "Customer records, addresses and order history can be migrated. It is usually the case that passwords cannot be migrated as they are stored in many different encrypted databases. The new system will send emails for password reset or activation to the users.",
			},
			{
				question: "Can you migrate from a custom-built site or blinds quoting software?",
				answer: "Yes. Migration can happen if data can be exported via CSV, through the database or via API. First, the audit checks whether migration is possible. Pricing logic that had been created in the code will be reconstructed instead of just copied and tested against pricing in your price lists.",
			},
			{
				question: "How are product reviews handled when we change platforms?",
				answer: "It depends on your review tool. Many tools export and re-import reviews, and review markup is rebuilt on the new store. Where a tool cannot export, we agree on the options in the audit.",
			},
		],
	},

	achievements: achievementsSection,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default IndustryBlindsMigration;
