const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/**
 * B2B trade portals / wholesale ordering for blinds manufacturers.
 *
 * Platform-agnostic sibling of the Shopify, WooCommerce and Magento blinds
 * pages — it compares all four rather than selling one. The three "CTA button:"
 * markers in the source document map to the banner button, the mid-page cta
 * block and the closing plainText button.
 *
 * Section order on the page = the order of the keys below (buildSectionOrder in
 * app/[slug]/page.js). Internal links use paths, not full https:// URLs — an
 * absolute URL is treated as third party and gets nofollow + a new tab.
 */
/** @type {import('../index').ServiceData} */
const B2bEcommerceBlindsTradePortal = {
	slug: "b2b-ecommerce-for-blinds-trade-portal",
	pageTitle: "B2B Ecommerce for Blinds: Trade Portals and Wholesale Ordering | Icecube Digital",
	metaDescription:
		"B2B ecommerce for blinds manufacturers and wholesalers: approved trade accounts, dealer pricing, bulk and repeat orders, quotes and payment terms.",

	banner: {
		heading: "B2B Ecommerce for Blinds: Trade Portals and Wholesale Ordering",
		paragraphs: [
			"Icecube Digital builds B2B ecommerce for blinds manufacturers, wholesalers and distributors that sell blinds and window treatments to approved trade buyers. Our blinds trade portal gives dealers, installers, interior designers and commercial buyers one online channel with approved accounts, dealer pricing, bulk and repeat orders, quotes and payment terms, connected to the systems you already use.",
			"Dealers order when they need to, and your team stops re-keying phone and email orders. We build wholesale blinds ecommerce on Shopify, Adobe Commerce, Magento Open Source or WooCommerce, chosen after discovery. With 14+ years of eCommerce development, we scope every project around your price lists and trade workflow.",
		],
		ctaLabel: "Discuss Your Trade Portal",
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
			"In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [56584, 56555, 56485],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	infoBox: {
		eyebrow: "Why Trade Orders Get Stuck on a",
		title: "Retail Blinds Store",
		columns: 2,
		contentAlign: "left",
		subtitle:
			"Trade buyers order differently from retail shoppers, and a store built for consumers rarely keeps up with them. These are the gaps we see most often in B2B ecommerce for window treatment manufacturers.",
		items: [
			{
				title: "Retail prices for trade buyers",
				body: "Approved buyers see retail prices, or trade prices sit in spreadsheets and emails that your sales team has to check by hand.",
			},
			{
				title: "Orders that need re-keying",
				body: [
					"Orders arrive by phone, email or PDF and get retyped, even when ",
					{ text: "blinds and curtains website development", href: "/blinds-website-design-development/" },
					" has already given you a working retail store.",
				],
			},
			{
				title: "Manual reorders",
				body: "Dealers reorder the same standard items and components by hand, one message at a time.",
			},
			{
				title: "Incomplete made-to-measure orders",
				body: "Trade orders miss mount, control or size details and come back as queries that hold up production.",
			},
			{
				title: "Account admin for every dealer",
				body: "Each new dealer adds setup, price list and approval work for your sales team.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Trade Portal Features for Blinds",
		title: "Manufacturers and Wholesalers",
		subtitle: "Features are chosen per business, and not every portal needs all of them. Each is marked native, extension or custom.",
		items: [
			{
				icon: "/assets/icons/user-round.svg",
				title: "Trade Account Registration and Approval",
				body: "Trade buyers submit an application providing their business information, along with documentation providing proof of their reseller status or tax exemption. Reference is made to trade price only after the account is validated by a member of your staff. Approved trade buyers fall into distinct categories (for instance, dealer or designer). For our automotive client Club Assist, we set up invitation-code registration on WooCommerce that assigns the right account type automatically.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Dealer Pricing, Tiers and Trade-Only Catalogs",
				body: "Every pricing scheme may have its own price table along with volume price breaks. In case of customized products, trade price is considered as the increment over the price grid rather than as a separate product in its own right. The same catalog can be used for all buyers. Trade-only products, login-to-view pricing and tax-exempt accounts are all possible, and prices can show with or without tax. We did this for our client Dortech Direct, a UK building materials supplier, on their Magento 2 store. Price lists are built in Shopify, and group pricing along with tier pricing are native to Magento Open Source, while the price based on dimensions involves either custom coding or extensions for implementation. For Blinds by Post and Motorized Blinds, we created a retail and wholesale pricing solution using customized formulas.",
			},
			{
				icon: "/assets/icons/minicart.svg",
				title: "Bulk Orders, Reorders and Saved Jobs",
				body: "Quick order by SKU lets dealers add components, accessories and stock items in one step, and order history supports reorders without a sales call. Jobs with room labels or sidemarks keep a multi-window order organized from basket to production. Where a business uses minimum order quantities or case-pack rules for stock items, the portal can enforce them at checkout. Quick order lists and Buy Again are native on Shopify, Quick Order is native in Adobe Commerce B2B, and WooCommerce relies on extensions or custom plugins.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Quotes, Purchase Orders and Payment Terms",
				body: "Commercial and multi-room jobs can start as a quote request, with the negotiated price converted into an order once approved. Buyers add purchase order numbers at checkout, and larger accounts can route orders through an approver. Net terms, payment on account and credit limits are available where the platform or an extension supports them. Shopify offers net terms from 7 to 90 days, PO numbers and draft-order quotes natively, and Adobe Commerce B2B adds negotiable quotes and payment on account.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Made-to-Measure Ordering for Trade Customers",
				body: [
					"The same size constraints, option rules and measurement validation apply to trade orders as retail, so orders will make it to production buildable. As they choose options, dealers see their own price for the customized product. None of the above systems prices a blind from width and drops out of the box, so this part needs an app, extension or custom work. Our ",
					{ text: "blinds product configurator and price calculator development", href: "/blinds-product-configurator-price-calculator-development-services/" },
					" service covers the configurator itself.",
				],
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Dealer Account Dashboards: Orders, Invoices and Documents",
				body: "Dealers can check order status, shipment tracking and invoices in their account, download price lists, spec sheets and marketing assets, and request samples. Roles let a dealer's staff place orders while the owner approves them. Shopify offers ordering-only and location admin roles natively, and Adobe Commerce B2B adds company roles with permissions.",
			},
		],
	},

	cta: {
		text: "Want to see how your dealer pricing and order flow would work online? We will walk through both with you.",
		ctaLabel: "Book a Trade Portal Consultation",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	imageText: {
		eyebrow: "Connecting Your Trade Portal to ERP,",
		title: "Accounting and Production",
		image: "/assets/photos/Inventory-ERP-CRM-PIM-Integration.png",
		imageAlt: "Trade portal orders flowing into ERP, accounting and production systems",
		blocks: [
			{ text: [
				"A trade portal must conserve the systems you're currently using rather than creating a new location to place orders. Customer, pricing, and stock information must be recorded only once in your ERP and linked to the channel, or vice versa, depending on each system. Orders must be produced with all required specifications by following the process referred to in our guide to ",
				{ text: "blinds ecommerce development", href: "/blog/blinds-ecommerce-development/" },
				". This happens while invoices and payments get sent into your accounting software.",
			] },
			{ text: "We have built similar integrations for our clients. For Blinds by Post, we set up price grids that update from Google Sheets through the Sheets API and the WooCommerce REST API. For Club Assist, we built vendor order notifications and a custom order export." },
			{ text: "APIs are available for Shopify (Admin GraphQL B2B entities), Adobe Commerce (REST and GraphQL) and WooCommerce (REST API and webhooks), and we assess each system's API in a project discovery. If there is no API available, files or emails can be sent via a different option." },
		],
	},

	leftIconBoxSecondary: {
		eyebrow: "Choosing a Platform for Wholesale",
		title: "Blinds Ecommerce",
		subtitle:
			"The platform follows your trade model, not the other way round. We start with the number of trade accounts and buyers per account, how prices differ by account, the share of made-to-measure orders, order size, the systems to connect and whether trade runs in one store or a separate one.",
		items: [
			{
				icon: "/assets/icons/shopping.svg",
				title: "Shopify B2B",
				body: "Since April 2026, B2B is available on Basic, Grow, Advanced and Plus plans, with companies, catalogs, price lists, payment terms and quick order. It suits mostly standard B2B needs and moderate account complexity.",
			},
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Adobe Commerce B2B",
				body: "A separately licensed extension that adds company accounts, shared catalogs, negotiable quotes, requisition lists and purchase order approvals. It suits large dealer networks, several brands or regions.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "Magento Open Source",
				body: "Customer groups, tier pricing and catalog price rules are native, while company accounts, quotes, and quick order are custom modules or extensions. It suits simpler trade programs without an Adobe license.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "WooCommerce",
				body: "Core has no documented B2B features, so trade functions come from extensions or custom plugins, as in the custom plugins we built for our clients Club Assist and Blinds by Post. It suits WordPress businesses that want control and owned code.",
			},
		],
		footerNote: [
			"We recommend a platform after discovery. Our guide to the ",
			{ text: "best ecommerce platform for blinds", href: "/best-ecommerce-platform-for-blinds/" },
			" covers the full comparison.",
		],
	},

	processSteps: {
		eyebrow: "How We Build a Blinds",
		title: "Trade Portal",
		columns: 2,
		subtitle: "Every project follows five steps, adjusted to your trade model and the systems you run.",
		steps: [
			{
				title: "Discovery",
				body: "We review your dealer types, price structures, current order channels and the systems the portal must connect to.",
			},
			{
				title: "Platform and Approach",
				body: "We choose the platform and decide, feature by feature, what is native, what needs an extension, and what is custom.",
			},
			{
				title: "Build",
				body: "We set up accounts, pricing, ordering workflows and integrations.",
			},
			{
				title: "Data and Testing",
				body: "We import accounts and price lists, test dealer prices against your current price sheets, and run trial orders with selected dealers.",
			},
			{
				title: "Launch and Support",
				body: "We onboard your dealers at launch and stay on for support afterward.",
			},
		],
	},

	information: {
		eyebrow: "Trade and Wholesale Ecommerce Work",
		title: "We Have Delivered",
		cards: [
			{
				blocks: [
					{ text: "These projects show the building blocks of a trade portal, and we state each client's industry so you can judge how closely it matches yours." },
					{ type: "ul", items: [
						[
							{ bold: "Blinds by Post and Motorised Blinds (UK made-to-measure blinds):" },
							" Retail and wholesale pricing by customer type on WooCommerce after a move from PrestaShop, with price grids synced from Google Sheets. Read the ",
							{ text: "Blinds by Post case study", href: "/case-studies/blinds-by-post/" },
							" for the build details.",
						],
						[
							{ bold: "Club Assist (automotive, not a blinds client):" },
							" WordPress and WooCommerce with role-based products and pricing, invitation-code registration, vendor notifications and a custom order export.",
						],
						[
							{ bold: "Dortech Direct (UK building materials, not a blinds client):" },
							" A Magento 2 store that sells to traders and consumers and shows prices with or without VAT.",
						],
					] },
					{ text: "If your trade workflow looks different from these, we will walk through it with you." },
				],
			},
		],
	},

	ctaSecondary: {
		text: "Talk to us about your trade portal.",
		subtitle:
			"Send us your dealer numbers, how trade pricing works today, your current platform and the systems the portal must connect to. We will set up a consultation and follow up with a scoped proposal for your B2B ecommerce for blinds project, with teams in the US, UK, Australia and India. Contact us to get started.",
		ctaLabel: "Request a free quote",
		ctaHref: "/contact-us/",
		btnArrow: BTN_ARROW,
	},

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "terje",
	},

	faq: {
		eyebrow: "B2B Ecommerce for Blinds",
		title: "FAQs",
		items: [
			{
				question: "Can we keep retail and trade customers on the same website?",
				answer: "Yes, all four platforms support it. On Shopify, a blended store cannot be gated to B2B only, so a separate trade store is an option. The right setup depends on how much your pricing and catalogs differ between retail and trade.",
			},
			{
				question: "Is it possible to move existing trade accounts, price lists and order history to a new portal?",
				answer: "Usually, by import. Accounts, price lists and history are mapped and tested before launch, and dealers may need to reset their passwords. We scope the details in discovery.",
			},
			{
				question: "How do we stop retail visitors from seeing trade prices?",
				answer: "Login-to-view pricing, trade-only catalogs and approval before access keep trade prices private. Where the two catalogs differ a lot, a gated trade store is another option.",
			},
			{
				question: "Will the portal work with the quoting software our dealers already use?",
				answer: "That depends on the import settings of the software or the API of the software. We review each tool as we find them and make no assurances before that review.",
			},
			{
				question: "Are fabric samples and spec sheets available to dealers through the portal?",
				answer: "They can. We build sample requests and documentation libraries for each account, apart from full-scale made-to-measure orders.",
			},
			{
				question: "What does a B2B blinds portal cost to build?",
				answer: "Cost depends on the platform and plan or license, account and pricing complexity, made-to-measure rules, integrations and data migration.",
			},
			{
				question: "Should we use blinds ordering software or a custom ecommerce portal?",
				answer: "Ordering software is quick to start and priced by subscription. Your ecommerce portal is owned and branded, stands next to your retail store and links with the systems you already use. Which one suits better depends on your demands.",
			},
		],
	},

	achievements: achievementsSection,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default B2bEcommerceBlindsTradePortal;
