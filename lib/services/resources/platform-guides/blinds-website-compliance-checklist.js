const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../../common-section/milestone-section";
import achievementsSection from "../../common-section/achievements-section";
import ourClientsSection from "../../common-section/our-clients-section";
import ceoCtaSection from "../../common-section/ceo-cta-section";

/** @type {import('../../index').ServiceData} */
const BlindsWebsiteComplianceChecklist = {
	slug: "blinds-website-compliance-checklist",
	pageTitle: "Blinds Website Compliance Checklist: Safety, Pricing & Trust",
	metaDescription:
		"Blinds website compliance checklist for US stores: cord safety, pricing, returns, reviews, accessibility, privacy and checkout, sorted by rule type.",

	banner: {
		heading: "Blinds Website Compliance & Trust Checklist for US Window Covering Stores",
		paragraphs: [
			"Buying made-to-measure blinds online requires customers to trust a store with their measurements, payment and custom order. Clear pricing, accurate product safety information, accessible return policies and secure checkout help build that trust while reducing compliance risks.",
			[
				"This ",
				{ bold: "blinds website compliance" },
				" guide covers product safety, pricing, custom-order terms, reviews, accessibility, privacy and payment security for US window covering stores. It includes a practical checklist to help businesses identify legal requirements, conditional obligations and best practices. These considerations also play an important role in ",
				{ text: "custom blinds website design", href: "/blinds-website-design-development/" },
				", helping businesses build more trustworthy and user-friendly online stores.",
			],
			"This guide is general information, not legal advice. Your obligations depend on your products, size, business model and the states you sell into, and completing the checklist doesn't guarantee compliance. Have a qualified US attorney review anything that affects your business.",
		],
		ctaLabel: "Send me a proposal",
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
		eyebrow: "How This Guide Separates Requirements From",
		title: "Best Practices",
		columns: 2,
		contentAlign: "left",
		subtitle: "Every check in this guide carries one of four labels:",
		items: [
			{
				title: "Legal requirement",
				body: "A rule that applies to the activity described, such as how you collect reviews or state shipping times.",
			},
			{
				title: "Conditional",
				body: "Applies only in some situations, such as above a revenue threshold, in a particular state, for a certain product or once you choose to offer something like a written warranty.",
			},
			{
				title: "Technical standard",
				body: "A published standard used as a benchmark, such as WCAG for accessibility or PCI DSS for card payments, even where no law names it for your business.",
			},
			{
				title: "Best practice",
				body: "Not required, but removes a known cause of complaints, remakes or lost sales.",
			},
		],
	},

	information: {
		eyebrow: "Window Covering Cord Safety and",
		title: "Product Information",
		cards: [
			{
				title: "Current CPSC Requirements for Stock and Custom Window Coverings",
				blocks: [
					{ parts: [
						"Since December 28, 2022, window coverings that don't meet specific sections of the voluntary standard ANSI/WCMA A100.1-2018 are treated as a substantial product hazard under section 15(j) of the Consumer Product Safety Act. The ",
						{ text: "CPSC's window coverings guidance", href: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Window-Coverings-15j" },
						" splits products into two groups:",
					] },
					{ type: "ul", items: [
						{ title: "Stock window coverings", text: "are substantially made before a customer orders them. They must have no accessible operating cords longer than 8 inches, inner cords that can't form a hazardous loop and a permanent manufacturer label." },
						{ title: "Custom window coverings,", text: "which include most made-to-measure blinds, must currently meet the inner cord and labeling requirements." },
					] },
					{ text: "A separate federal standard for operating cords on custom products (16 CFR 1260) was vacated by a federal appeals court in 2023 and is not in effect." },
				],
			},
			{
				title: "The 2026 CPSC Proposal: Not Yet in Effect",
				blocks: [
					{ parts: [
						"On September 24, 2026, the CPSC published a ",
						{ text: "proposed rule in the Federal Register", href: "https://www.federalregister.gov/documents/2026/09/24/2026-19579/substantial-product-hazard-list-amendments-to-requirements-for-window-covering-cords" },
						" that would update this list to the 2022 edition of ANSI/WCMA A100.1. For custom products, it would cover features such as accessible operating cords longer than 8 inches, exposed continuous loops on custom horizontal blinds, single retractable cord lifts with a stroke over 36 inches and cord loop lifts on roll-up shades.",
					] },
					{ text: "This is a proposal, not a final rule. Comments are open until November 23, 2026, and as proposed, the changes would take effect 30 days after a final rule is published. Until then, the 2018-based requirements above are the ones that apply. Many manufacturers already build to the 2022 standard, whose industry compliance date was June 1, 2024, so ask suppliers which edition each product meets." },
				],
			},
			{
				title: "Describing Lift Systems and Safety Features Accurately",
				blocks: [
					{ text: "Any safety statement must match the exact configuration being sold, the requirements that apply to it and evidence your supplier can provide." },
					{ type: "ul", items: [
						"Name the lift system the way the manufacturer does: cordless, motorized, wand, continuous loop with tension device or retractable cord.",
						"Describe safety features specifically, such as “cordless lift with no accessible cords,” instead of broad claims like “child safe” that the product's design and documentation may not support.",
						["Use the WCMA's ", { bold: "Best for Kids" }, " label only on products certified under the Best for Kids program."],
						"If a size, fabric or option changes the lift system, make sure the description and any safety claim change with it.",
					] },
				],
			},
			{
				title: "Motorized Blinds, Coin Batteries and California Warnings",
				blocks: [
					{ parts: [
						"Motorized blinds often ship with coin battery remotes. Under Reese's Law, consumer products containing button cell or coin batteries must meet ANSI/UL 4200A-2023, as set out in ",
						{ text: "16 CFR part 1263", href: "https://www.ecfr.gov/current/title-16/chapter-II/subchapter-B/part-1263" },
						". Compliance sits mainly with the manufacturer or importer, but retailers should ask for the General Certificate of Conformity before listing these products.",
					] },
					{ text: "California's Proposition 65 is conditional. It generally applies to businesses with 10 or more employees when a product exposes California consumers to a listed chemical. Ask suppliers whether any product needs a warning. For online sales, the Proposition 65 warnings site explains that the warning also has to be shown to the buyer before purchase." },
				],
			},
		],
	},

	imageTextBlocks: [
		{
			eyebrow: "Pricing, Sales and Option",
			title: "Surcharges",
			contentTitle: "Sale Prices and Reference Prices",
			image: "/assets/photos/dynamic_pricing.jpg",
			imageAlt: "Sale and reference pricing on a made-to-measure blinds product page",
			blocks: [
				{ text: [
					"Permanent sitewide sales are common in this industry and carry real risk. The FTC's ",
					{ text: "Guides Against Deceptive Pricing", href: "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-233" },
					" explain that a former price should be one the product was openly and actively offered at, in good faith, for a reasonably substantial period. A “was” price set mainly to make a discount look bigger can be misleading, and misleading pricing can violate the FTC Act and state consumer protection laws. Some states also have their own reference price rules. Keep records showing how each “regular” and “compare at” price was set and when it was charged.",
				] },
			],
		},
		{
			contentTitle: "Mandatory Fees and Option Surcharges",
			image: "/assets/photos/Custom-Blind-Builder-Dynamic-Price-Calculator-1.png",
			imageAlt: "Option surcharges shown before checkout in a blinds price calculator",
			imagePosition: "right",
			blocks: [
				{ text: "California's Honest Pricing Law (SB 478), in effect since July 1, 2024, requires advertised prices to include all mandatory fees. Government taxes, reasonable shipping costs and optional add-ons can be shown separately. The FTC's own fees rule, effective May 12, 2025, covers only live-event tickets and short-term lodging." },
				{ text: [
					"For made-to-measure blinds, show option costs before they're selected, make sure “from” prices match a size and fabric that can actually be ordered, and show oversize shipping before the payment step. The setup behind a reliable ",
					{ text: "made to measure pricing calculator", href: "/blinds-price-calculator-configurator-guide/" },
					" handles most of this.",
				] },
			],
		},
	],

	informationSecondary: {
		eyebrow: "Custom-Order Terms,",
		title: "Measuring and Returns",
		cards: [
			{
				title: "Return and Remake Policies for Made-to-Measure Blinds",
				blocks: [
					{ text: "No single federal law sets return policies for online stores, but some states regulate how restrictive policies are disclosed. California's Civil Code section 1723, for example, requires retailers to post their refund policy when it doesn't offer a full refund or exchange within seven days, and the Department of Consumer Affairs guide lists exceptions that include customized goods received as ordered. Whatever your state, a restrictive policy should be visible where the order is placed, not only in the footer." },
					{ parts: ["A ", { bold: "custom blinds return policy" }, " should answer:"] },
					{ type: "ul", items: [
						"Whether made-to-measure items can be returned for a change of mind",
						"Who pays for a remake after a customer measuring error, a factory error or damage in transit",
						"How quickly problems must be reported, and what photos or details are needed",
						"Whether samples, stock items and accessories follow different terms",
						"How refunds are paid and how long they take",
					] },
				],
			},
			{
				title: "Fit Guarantees and Order Confirmations",
				blocks: [
					{ parts: [
						"A fit guarantee builds confidence only when its headline matches its conditions. Show a one-line summary beside the size fields with a link to the full terms, including what's covered, how many remakes and any fee. Reducing measuring errors in the first place is covered in the ",
						{ text: "blinds measuring guide UX", href: "/blinds-measuring-guide-ux/" },
						", so it isn't repeated here.",
					] },
					{ text: "The order confirmation should repeat every specification: product, fabric, mount type, width and height, control side, lift system, motor and accessories, prices, lead time and a link to the return policy." },
				],
			},
		],
	},

	imageText: {
		eyebrow: "Lead Times, Shipping",
		title: "Delays and Refunds",
		image: "/assets/photos/Custom-Shipping-Dates-Production-Lead-Time-Management.png",
		imageAlt: "Production lead time and shipping dates shown on a made-to-measure blinds order",
		blocks: [
			{ text: "The FTC's Mail, Internet, or Telephone Order Merchandise Rule requires a reasonable basis for any shipping time you state. If you don't state one, you're expected to ship within 30 days of a properly completed order, or 50 days if the customer applies for credit from you to pay." },
			{ text: "If you can't ship on time, the rule requires you to notify the customer and offer the choice to agree to the delay or cancel for a prompt refund. The details depend on the length of the delay. A short delay can be treated as accepted if the customer doesn't reply, but longer or repeated delays need the customer's agreement. Refunds for cash, check or third-party card payments are due within seven working days of cancellation." },
			{ text: [
				"For custom blinds, base lead times on real production data, keep them consistent from product page to confirmation email and separate production time from transit time. Shipping rules and lead time display are covered in more detail in the guide to launching a ",
				{ text: "blinds online store", href: "/blog/blinds-ecommerce-development/" },
				".",
			] },
		],
	},

	topIconBox: {
		eyebrow: "Product Claims, Warranties and",
		title: "Dealer Branding",
		items: [
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Energy Savings, Safety and Made in USA Claims",
				body: "Objective claims need support before they're published, including claims repeated from a supplier. Energy claims such as “cuts heating bills by 25%” need reliable evidence that matches the product and conditions described. Without it, describe the feature instead, such as “honeycomb cells trap a layer of air at the window.”",
				bodyAfter:
					"“Made in USA” has a specific meaning. The FTC's Made in USA guidance says an unqualified claim requires that “all or virtually all” of the product is made in the United States. Blinds fabricated in the US from imported fabric or components may need a qualified claim, such as “Assembled in USA,” if the US work is substantial.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Warranty Terms",
				body: "You don't have to offer a written warranty, but once you do on a consumer product, the Magnuson-Moss Warranty Act applies. The FTC's warranty guide explains that terms for products over $15 must be available before purchase, and warranties on products over $10 must be labeled “full” or “limited.” If you advertise a “lifetime” warranty, say whose lifetime or which period it covers.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Brand Names and Photos for Authorized Dealers",
				body: [
					"For authorized dealers, dealer agreements often control how brand names, logos, photos and advertised prices appear online, and some include minimum advertised price policies. Check the agreement before building brand pages, and make clear that you are an independent dealer, not the manufacturer. Installer and showroom sites handle brand pages differently from online stores, as covered in ",
					{ text: "window treatment website design for installers and dealers", href: "/window-treatment-website-design/" },
					".",
				],
			},
		],
	},

	imageTextSecondary: {
		eyebrow: "Customer Reviews and",
		title: "Trust Signals",
		image: "/assets/photos/Influencer-UGC-Social-Commerce.jpg",
		imageAlt: "Customer reviews and rating badges on a blinds store",
		imagePosition: "right",
		blocks: [
			{ text: [
				"Reviews are among the strongest ",
				{ bold: "blinds website trust signals" },
				" for a product people can't touch before buying. The FTC's Consumer Reviews and Testimonials Rule took effect on October 21, 2024. Its questions and answers page explains that the rule prohibits:",
			] },
			{ type: "ul", items: [
				"Fake reviews, including from people who didn't use the product",
				"Incentives that require a review to be positive or negative",
				"Undisclosed reviews from employees, owners or their relatives",
				"Threats or false accusations used to suppress or remove negative reviews",
				"Presenting a review site you control as independent",
			] },
			{ text: "Sorting reviews by rating is allowed, and so is removing reviews that aren't about your products, provided the same policy applies to positive and negative reviews. The FTC also notes that asking only customers you expect to be happy can be deceptive under the FTC Act. Ask every customer, ideally after installation, and display only badges and ratings you currently hold." },
		],
	},

	informationTertiary: {
		eyebrow: "Accessibility for Configurators and",
		title: "Forms",
		cards: [
			{
				blocks: [
					{ parts: [
						"The Department of Justice's ",
						{ text: "ADA web guidance", href: "https://www.ada.gov/resources/web-guidance/" },
						" says businesses open to the public must make the goods and services they offer online accessible to people with disabilities. It doesn't set a technical standard for private businesses and describes WCAG and the Section 508 standards as helpful guidance. The DOJ's 2024 rule with specific WCAG requirements applies to state and local governments, not private retailers.",
					] },
					{ text: "That makes WCAG 2.2 at level AA a sensible technical target, but meeting it doesn't guarantee legal compliance or remove all risk, and obligations can differ by business. For blinds stores, the configurator is where most barriers appear:" },
					{ type: "ul", items: [
						"Color swatches need text names, and the selected swatch should be marked by more than color.",
						"Every size field and option needs a visible label, and the whole flow should work by keyboard.",
						"Error messages should appear next to the field and be announced to screen readers.",
						"Small swatches and buttons should meet WCAG 2.2's 24 by 24 CSS pixel minimum target size.",
						"Measuring and installation videos need captions.",
					] },
					{ text: "Automated scanners catch only part of this, so test by hand as well." },
				],
			},
		],
	},

	cta: {
		text: "Want these checks built into your store rather than bolted on later?",
		ctaLabel: "Contact Us Now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	imageTextTertiary: {
		eyebrow: "Privacy, Tracking and",
		title: "Marketing Consent",
		image: "/assets/photos/analytics_personalization.jpg",
		imageAlt: "Tracking, consent and privacy settings on a blinds ecommerce site",
		blocks: [
			{ text: [
				"Which privacy laws apply depends on the business, what it collects and where its customers live. California's privacy law is one example. According to the ",
				{ text: "California Privacy Protection Agency", href: "https://cppa.ca.gov/faq.html" },
				", it applies to for-profit businesses that do business in California and meet at least one threshold: gross annual revenue of $26.625 million or more for the preceding calendar year (the figure effective January 1, 2025, which is adjusted periodically), buying, selling or sharing the personal information of 100,000 or more California residents or households, or earning 50% or more of annual revenue from selling or sharing personal information. Covered businesses must honor opt-out preference signals such as Global Privacy Control. Other states have their own privacy laws and thresholds.",
			] },
			{ text: "Whatever applies to you, your privacy policy should describe what the site actually collects and shares, including window photos, booking details, ad pixel data and order details sent to manufacturers. Ad platforms and payment providers may set their own policy requirements in their terms, so check the ones you use." },
			{ text: [
				"Email and text marketing have separate rules. Under the FTC's CAN-SPAM guide, marketing emails need accurate sender details, honest subject lines, a postal address and a working opt-out honored within 10 business days. Follow-up sequences such as those used in a ",
				{ text: "free sample ordering system for blinds", href: "/blog/blinds-sample-ordering-system/" },
				" count as marketing. Text message marketing falls under the Telephone Consumer Protection Act, and consent requirements depend on how messages are sent, so confirm your SMS setup with your provider and attorney.",
			] },
		],
	},

	plainTextTertiary: {
		eyebrow: "Checkout and",
		title: "Payment Security",
		blocks: [
			{ text: "Card payments are governed by the Payment Card Industry Data Security Standard (PCI DSS), a set of requirements enforced through card brand and acquirer contracts rather than a government law. Your obligations depend on how payments are set up. Hosted payment pages and embedded payment fields from providers such as Stripe, PayPal or Shopify Payments can reduce how much of PCI DSS applies to your own site, but they don't remove all responsibility, and other setups are allowed." },
			{ parts: [
				"PCI DSS v4.0.1 requirements for those scripts took effect on March 31, 2025, and the ",
				{ text: "PCI Security Standards Council's SAQ A update", href: "https://blog.pcisecuritystandards.org/important-updates-announced-for-merchants-validating-to-self-assessment-questionnaire-a" },
				" explains what merchants using the simplest self-assessment must confirm instead. Ask your payment provider and acquirer which requirements apply to you. Card details should never be collected by email or plain web forms.",
			] },
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	tableBasic: {
		eyebrow: "Blinds Website Compliance & Trust Checklist:",
		title: "Product Safety and Information",
		subtitle: "Each item below is something your team can check on the live site or in your records.",
		columns: ["Check", "Type"],
		boldColumns: [1],
		colWidths: ["72%", "28%"],
		rows: [
			["Each product meets the current CPSC window covering requirements, confirmed in writing by the supplier along with the ANSI/WCMA edition it follows", "Legal requirement"],
			["Lift system on each product page matches the manufacturer's spec sheet, cart and order confirmation", "Best practice"],
			["Every safety claim and Best for Kids label matches a certified or documented product configuration", "Legal requirement"],
			["A reminder is set to review product pages when the CPSC's 2026 proposal is finalized", "Best practice"],
			["Certificates on file for motorized products and remotes with coin batteries", "Conditional"],
			["Supplier has confirmed whether any product needs a Proposition 65 warning", "Conditional"],
		],
	},

	tableBasicSecondary: {
		eyebrow: "Checklist:",
		title: "Pricing and Orders",
		columns: ["Check", "Type"],
		boldColumns: [1],
		colWidths: ["72%", "28%"],
		rows: [
			["Price records show every “was” or “compare at” price was genuinely charged", "Legal requirement"],
			["A test order to a California address shows all mandatory fees in the first price shown", "Conditional"],
			["“From” prices match an orderable size and fabric", "Best practice"],
			["Option surcharges and oversize shipping appear before the payment step", "Best practice"],
			["Order confirmation repeats every specification, price, lead time and policy link", "Best practice"],
		],
	},

	tableBasicTertiary: {
		eyebrow: "Checklist: Policies,",
		title: "Shipping and Warranties",
		columns: ["Check", "Type"],
		boldColumns: [1],
		colWidths: ["72%", "28%"],
		rows: [
			["Return and remake terms appear on product pages and at checkout", "Conditional by state"],
			["Policy covers measuring errors, factory errors, transit damage and reporting deadlines", "Best practice"],
			["Fit guarantee headline matches its full terms", "Legal requirement"],
			["Stated shipping times have a reasonable basis in recent production data", "Legal requirement"],
			["A delay notice and refund process is ready for late orders", "Legal requirement"],
			["Written warranty terms are available before purchase and labeled full or limited", "Conditional"],
		],
	},

	tableBasicQuaternary: {
		eyebrow: "Checklist: Claims and",
		title: "Reviews",
		columns: ["Check", "Type"],
		boldColumns: [1],
		colWidths: ["72%", "28%"],
		rows: [
			["Each energy, safety or Made in USA claim has a documented source", "Legal requirement"],
			["Brand pages follow your dealer agreement", "Conditional"],
			["No fake, sentiment-conditioned or undisclosed employee reviews", "Legal requirement"],
			["Review requests go to all customers", "Best practice"],
			["Every badge on the site is current and linked to its source", "Best practice"],
		],
	},

	tableBasicQuinary: {
		eyebrow: "Checklist: Accessibility,",
		title: "Privacy and Checkout",
		columns: ["Check", "Type"],
		boldColumns: [1],
		colWidths: ["72%", "28%"],
		rows: [
			["Configurator completed using only a keyboard and with a screen reader", "Technical standard"],
			["Swatches have text names and videos have captions", "Technical standard"],
			["An accessibility contact is published", "Best practice"],
			["Privacy policy compared against your tag manager list and forms", "Conditional"],
			["Opt-out link and Global Privacy Control tested, if the CCPA applies", "Conditional"],
			["Each marketing email has a postal address and working unsubscribe", "Legal requirement"],
			["PCI DSS requirements confirmed with your payment provider or acquirer", "Technical standard"],
			["Third-party scripts on payment pages listed and reviewed", "Technical standard"],
		],
	},

	leftIconBox: {
		eyebrow: "What Sets IceCube",
		title: "Digital Apart?",
		subtitle:
			"IceCube Digital builds made-to-measure stores for blinds, shades and curtains businesses on Shopify, WooCommerce and Magento. We don't provide legal advice, but we build the pages and order flows your attorney and suppliers approve.",
		items: [
			{
				icon: "/assets/icons/sliders.svg",
				title: "Configurators Built Around Product Rules",
				body: [
					{ text: "Visor's Magento 2 configurator", href: "/case-studies/visor/" },
					" guides shoppers through each choice to a final price. Rule-based option logic like this helps keep product details consistent from selection to order.",
				],
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Pricing Shown Before Checkout",
				body: "Option costs and totals update as customers configure their blinds.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Policies Inside the Order Flow",
				body: "Return terms, guarantees and lead times can appear beside the size fields and in confirmation emails.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Self-Measure Stores in Production",
				body: [
					{ text: "Blinds By Post", href: "/case-studies/blinds-by-post/" },
					" customers measure, order and receive their blinds online.",
				],
			},
		],
	},

	plainTextQuaternary: {
		title: "Conclusion",
		blocks: [
			{ text: "Most of what makes a blinds website trustworthy also reduces compliance risk: accurate product descriptions, prices that don't change unexpectedly, terms customers can find and a checkout that protects their data. Start with the checklist items labeled as legal requirements, review the conditional ones with your attorney and add best practices as you go. The CPSC's window covering proposal is likely to change product requirements once finalized, so plan to review product pages again at that point. To put these checks into practice on your store, contact IceCube Digital." },
		],
		ctaLabel: "Request a free quote",
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
		title: "Compliance FAQs",
		items: [
			{
				question: "Does a blinds retailer need its own CPSC testing if the manufacturer already tested the products?",
				answer: "Usually not for the cord requirements, which fall mainly on manufacturers and importers. If you import blinds or sell under your own brand, you may be the importer of record and take on those duties. Either way, keep written supplier confirmation for each product line.",
			},
			{
				question: "What should a blinds store do when a product it sells is recalled?",
				answer: "Remove the product from sale straight away, including any configurator options that can produce it. Contact affected customers from your order records, follow the recall instructions from the manufacturer and the CPSC, and add a notice where customers searching for the product will find it.",
			},
			{
				question: "When is a restocking fee on custom blinds acceptable?",
				answer: "A restocking fee is generally acceptable when it's disclosed clearly before the order and applied as stated. State consumer protection laws can affect how fees must be disclosed, so check the states you sell into, and keep the fee visible on the product page and at checkout.",
			},
			{
				question: "Which pages need updating if the CPSC finalizes the 2022 cord standard?",
				answer: "Product pages for continuous loop, retractable cord and cord loop roll-up products, category filters for corded and cordless options, configurator rules that allow restricted lift systems, and any buying guides describing operating systems. Ask suppliers early which products they plan to change.",
			},
			{
				question: "Do trade and wholesale portals need the same consumer disclosures?",
				answer: "Many consumer protection rules, including California's Honest Pricing Law, focus on sales for personal or household use, so sales to businesses may be treated differently. Card security, privacy and accurate product claims still matter, and pages homeowners can reach must meet the consumer rules.",
			},
			{
				question: "How often should a blinds website be reviewed for compliance?",
				answer: "Plan a full review once a year, plus a focused check when you add a product line, change platforms, launch a major promotion or change suppliers. Keep supplier documents with the completed checklist so each review builds on the last.",
			},
		],
	},

	achievements: achievementsSection,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default BlindsWebsiteComplianceChecklist;
