const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../../common-section/milestone-section";
import achievementsSection from "../../common-section/achievements-section";
import ourClientsSection from "../../common-section/our-clients-section";
import ceoCtaSection from "../../common-section/ceo-cta-section";

/**
 * Resources → made-to-measure curtains guide (same page structure as the other
 * guides in this folder).
 *
 * Primary keyword: sell curtains online. H1 phrase: sell made-to-measure curtains online.
 * Supporting: made to measure curtains ecommerce, curtain configurator, custom curtains,
 * custom drapes, curtain fullness, curtain heading types, curtain linings.
 *
 * Section order on the page = the order of the keys below (buildSectionOrder in
 * app/[slug]/page.js). Internal links use paths, not full https:// URLs —
 * renderParts opens absolute URLs in a new tab, which is meant for external sites.
 */
/** @type {import('../../index').ServiceData} */
const HowToSellMadeToMeasureCurtainsOnline = {
	slug: "how-to-sell-made-to-measure-curtains-online",
	pageTitle: "How to Sell Made-to-Measure Curtains Online | Icecube Digital",
	metaDescription:
		"A practical guide for curtain businesses on pricing, measuring, store features and workroom-ready orders when you sell made-to-measure curtains online.",

	banner: {
		heading: "How to Sell Made-to-Measure Curtains Online",
		paragraphs: [
			[
				"If you want to ",
				{ bold: "sell curtains online" },
				" that are made to each customer's measurements, your website has to do much more than a standard online shop. It needs to work out how much fabric each order uses, add the right making-up costs, guide customers through measuring and pass every detail to your workroom without errors. When the website handles this well, customers can order with confidence and your team spends less time on quotes, phone calls and corrections.",
			],
			[
				"This guide explains how made-to-measure curtains are priced online, what customers need to get right when ordering, which store features matter most and how to launch curtains on your website step by step. Icecube Digital builds ecommerce websites for blinds and curtains businesses, and this guide reflects what those projects involve. If you're planning a new store or adding curtains to an existing one, working with a team experienced in ",
				{ text: "blinds and curtains website design and development", href: "/blinds-website-design-development/" },
				" makes the setup much simpler.",
			],
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

	plainText: {
		eyebrow: "What Makes Selling Made-to-Measure Curtains",
		title: "Online Different?",
		blocks: [
			{ parts: [
				"Made-to-measure curtains are priced by the amount of fabric each pair uses, not by a fixed size, and that amount changes with the width, drop, fullness, heading style and fabric pattern. To ",
				{ bold: "sell made-to-measure curtains online" },
				", your website has to calculate all of this accurately, explain the choices clearly and send the order to your workroom in a format it can use.",
			] },
			{ text: "This is very different from selling ready-made curtains, where each size has one fixed price. It's also different from selling blinds. A blind is usually priced from a width and height chart. A curtain is priced from fabric quantity plus labor, and two curtains of the same size can have very different prices depending on the options chosen." },
		],
		ctaLabel: "Get a Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	leftIconBox: {
		eyebrow: "How Made-to-Measure Curtains Are",
		title: "Priced Online",
		subtitle: [
			[
				"Curtain pricing has more moving parts than most made-to-measure products. For a wider look at how pricing tools work across blinds and curtains, this guide to choosing a ",
				{ text: "made to measure pricing calculator", href: "/blinds-price-calculator-configurator-guide/" },
				" covers the main methods. The sections below focus on what is specific to curtains.",
			],
		],
		items: [
			{
				icon: "/assets/icons/vector-path.svg",
				title: "Curtain Fullness and Fabric Pricing",
				body: "Fullness is the amount of extra fabric gathered across the track or pole so the curtain hangs in soft folds instead of lying flat. A curtain with more fullness uses more fabric and costs more. Your website needs to apply the correct fullness for each heading style and include it in the price, so the customer sees the real cost before checkout.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Fabric Usage and Pattern Repeat",
				body: "Fabric is sold in rolls of a set width, so the website first works out how many widths of fabric are needed to cover the track at the chosen fullness. It then adds allowances for hems and the heading to get the cut length of each width. Patterned fabrics need extra fabric so the design lines up across every width, which means the cut length is rounded up to the next full pattern repeat. A good calculator handles all of this automatically.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Curtain Heading Types and Making-Up Costs",
				body: "The heading is the top of the curtain and decides how it hangs and attaches to the track or pole. Common styles include pinch pleat, pencil pleat, grommet (also called eyelet), wave and rod pocket. Each style takes a different amount of work, so most workrooms charge a making-up cost per fabric width that changes by heading. Your pricing should reflect this.",
			},
			{
				icon: "/assets/icons/brush.svg",
				title: "Curtain Linings: Blackout, Thermal, and Interlining",
				body: "Linings change how a curtain looks, feels, and performs. Blackout linings block light, thermal linings help keep rooms warmer or cooler, and interlining adds a soft, padded layer for a fuller finish. Each lining adds fabric and labor costs, and heavier linings may also call for a stronger track. The price should update as soon as a customer selects a lining.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Minimums, Surcharges, and Extra-Wide Curtains",
				body: "Most workrooms set a minimum charge per order and limits on width and drop. Very wide or very long curtains may need extra handling, joins, or special packaging. Build these rules into the website so customers can't order something your workroom can't make, and so any surcharge is clear before they pay.",
			},
		],
	},


	topIconBoxSecondary: {
		eyebrow: "Features Every Made-to-Measure",
		title: "Curtain Store Needs",
		subtitles: [
			"These are the features that help customers order confidently and help your team process orders without extra work.",
		],
		items: [
			{
				icon: "/assets/icons/app-square.svg",
				title: "Curtain Configurator With Live Pricing",
				body: [
					"A ",
					{ bold: "curtain configurator" },
					" guides customers through fabric, size, heading, lining and accessories in a clear order, updating the price at every step. This replaces quote requests with instant prices and gives your workroom complete order details. Icecube Digital offers ",
					{ text: "curtain and blinds configurator development", href: "/blinds-product-configurator-price-calculator-development-services/" },
					" for stores that need pricing rules built around their own range.",
				],
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Built-In Measuring Guides",
				body: "Short measuring instructions, diagrams or videos placed right beside the size fields reduce errors and remakes. Customers shouldn't have to leave the product page to find out how to measure.",
			},
			{
				icon: "/assets/icons/minicart.svg",
				title: "Fabric Swatch Ordering",
				body: "Let customers order swatches from any product page through a simple sample cart. Collect an email address with each request so your team can follow up once the swatches arrive.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Tracks, Poles, and Accessory Bundles",
				body: "Many customers need new hardware with their curtains. Offering tracks, poles, rings, hooks, and tiebacks on the same page makes ordering easier and increases the order value.",
			},
			{
				icon: "/assets/icons/images-place.svg",
				title: "Fabric Photography and Room Visuals",
				body: "Clear close-ups that show true color and texture, along with photos of finished curtains in real rooms, help customers choose with confidence and reduce returns.",
			},
			{
				icon: "/assets/icons/transport.svg",
				title: "Clear Lead Time and Delivery Messaging",
				body: "Made-to-measure curtains take time to produce. Show the expected lead time on the product page, in the cart and in the order confirmation, so customers know what to expect.",
			},
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Matching Blinds, Cushions and Soft Furnishings",
				body: "Customers often want coordinated pieces in the same fabric. Showing matching blinds, cushions or valances helps them complete the room in one order.",
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Trade and Interior Designer Accounts",
				body: "Designers and trade buyers often need their own pricing and faster ordering. A separate trade login lets you serve them alongside retail customers on the same store.",
			},
		],
	},

	tableBasic: {
		eyebrow: "Made-to-Measure Curtains vs Blinds Online:",
		title: "What's Different?",
		subtitle: [
			"If you already sell blinds online, adding curtains means planning for a few important differences.",
		],
		boldColumns: [0],
		colWidths: ["28%", "36%", "36%"],
		columns: ["", "Made-to-Measure Curtains", "Made-to-Measure Blinds"],
		rows: [
			["How price is calculated", "Fabric used plus making-up costs", "Usually a width and drop price chart"],
			["Key measurements", "Track or pole width and finished drop", "Window width and height, inside or outside mount"],
			["Main options", "Fullness, heading, lining, pattern", "Fabric, control type, mount, motorization"],
			["Fabric use", "Changes with fullness and pattern repeat", "Mostly fixed by size"],
			["Hardware", "Tracks and poles often sold separately", "Brackets and headrail usually included"],
			["Workroom details", "Number of widths, cut lengths, heading, lining", "Width, drop, deductions, controls"],
		],
	},

	infoBox: {
		eyebrow: "Common Mistakes to Avoid When Selling Made-to-Measure",
		title: "Curtains Online",
		subtitle: "These mistakes are easy to avoid when they're planned for early.",
		items: [
			{
				title: "Pricing Curtains the Same Way as Blinds",
				body: "A width and height chart doesn't reflect how curtains are made. Without fabric and fullness calculations, some orders will be undercharged and others will look too expensive.",
			},
			{
				title: "Ignoring Pattern Repeat in Fabric Calculations",
				body: "If pattern repeat isn't included, the workroom may not have enough fabric to match the design across widths. That leads to delays, extra fabric costs or disappointed customers.",
			},
			{
				title: "Measuring From the Window Instead of the Track",
				body: "When the website asks for window measurements without clear guidance, customers often order curtains that are too narrow. Always ask for the track or pole length and explain why.",
			},
			{
				title: "Hiding Lining and Heading Costs Until Checkout",
				body: "Customers lose trust when the price jumps at the last step. Show the cost of each option as it's selected.",
			},
			{
				title: "Fabric Photos That Don't Show True Color or Texture",
				body: "Poor photos lead to returns and remakes. Invest in accurate fabric images and encourage swatch orders for higher-priced fabrics.",
			},
			{
				title: "Orders Your Workroom Can't Use",
				body: [
					"An order is only useful if your workroom can make it without calling the customer. Every order should include widths, cut lengths, heading, lining and fullness in a clear format. ",
					{ text: "WooCommerce development for curtain and blinds stores", href: "/woocommerce-development-services/" },
					" can set up order details and production sheets that match exactly how your workroom operates.",
				],
			},
		],
	},

	processSteps: {
		eyebrow: "How to Launch Made-to-Measure Curtains on",
		title: "Your Online Store",
		columns: 2,
		subtitle: "Follow these steps to add made-to-measure curtains to a new or existing store.",
		steps: [
			{
				title: "Map Your Curtain Range and Fabric Books",
				body: "List every curtain style, fabric and option you plan to offer, along with the fabric details your calculator will need, such as roll width and pattern repeat.",
			},
			{
				title: "Agree Pricing Rules With Your Workroom",
				body: "Confirm how fabric, making-up costs, linings, minimums and surcharges are calculated, so the website prices orders exactly the way your workroom does.",
			},
			{
				title: "Choose the Right Calculator Setup",
				body: [
					"Some stores can start with a ready-made calculator app, while others need custom pricing rules. ",
					{ text: "Shopify development for made-to-measure curtain stores", href: "/shopify-development-services/" },
					" can cover either route, depending on how complex your range is.",
				],
			},
			{
				title: "Build Measuring Guides and Swatch Ordering",
				body: "Create clear measuring instructions for tracks, poles and drops, and set up a sample cart so customers can order swatches easily.",
			},
			{
				title: "Photograph Fabrics and Finished Curtains",
				body: "Prepare accurate fabric close-ups and room photos for each style. Good visuals do much of the work a showroom would normally do.",
			},
			{
				title: "Test Orders Against Workroom Cut Sheets",
				body: "Place test orders across different sizes, headings and linings, and check that the prices and production details match what your workroom expects.",
			},
		],
	},

	cta: {
		text: "Ready to add made-to-measure curtains to your online store? Let's discuss your range, pricing and workroom process.",
		ctaLabel: "Contact Us Now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBoxTertiary: {
		eyebrow: "What Sets Icecube",
		title: "Digital Apart?",
		subtitles: [
			"Icecube Digital builds ecommerce websites for made-to-measure products, with a focus on accurate pricing, clear ordering and long-term growth.",
		],
		items: [
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "Experience With Made-to-Measure Products",
				body: "We have built ecommerce stores for blinds and window treatment brands, so we understand made-to-measure pricing, options and production details.",
			},
			{
				icon: "/assets/icons/edit-board.svg",
				title: "Pricing Built Around Your Workroom",
				body: "We set up fabric, fullness and making-up rules to match how your workroom actually prices and produces each order.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Shopify, WooCommerce and Magento Expertise",
				body: "We work across all three platforms and recommend the setup that fits your range, budget and team.",
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Clear Order Details for Production",
				body: "Every order is set up to reach your workroom with the information it needs to start work.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Development and SEO From One Team",
				body: "The same team that builds your store makes sure your product and category pages are set up to rank.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Support After Launch",
				body: "We help with new fabrics, price updates, new features and ongoing maintenance once your store is live.",
			},
		],
	},

	plainTextSecondary: {
		title: "Conclusion",
		blocks: [
			{ parts: [
				"Selling made-to-measure curtains online works best when your website reflects how curtains are actually made. That means pricing by fabric and fullness, guiding customers through measuring and heading choices, showing every cost upfront and sending complete details to your workroom. When these pieces are in place, you can ",
				{ bold: "sell curtains online" },
				" with fewer quote requests, fewer errors and more confident customers.",
			] },
			{ parts: [
				"Before you start, it helps to understand what drives your ",
				{ text: "curtain website cost", href: "/how-much-does-a-blinds-website-cost/" },
				", from calculators and integrations to ongoing support. If you're ready to plan your store, contact Icecube Digital to discuss your curtain range and requirements.",
			] },
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	faq: {
		eyebrow: "Made-to-Measure Curtains",
		title: "Ecommerce FAQs",
		items: [
			{
				question: "What fullness ratio should I offer for made-to-measure curtains?",
				answer: "Most stores offer a standard fullness for each heading style and, in some cases, a fuller option at a higher price. Many workrooms use around 2 to 2.5 times the track width for pleated styles. Agree the exact ratios with your workroom so the website matches production.",
			},
			{
				question: "Can customers supply their own fabric?",
				answer: "Yes, some stores accept customer's own material, often called COM. You'll need separate pricing for making-up only, clear fabric requirements and a process for receiving and checking the fabric before work begins.",
			},
			{
				question: "Should I sell ready-made curtains alongside made-to-measure?",
				answer: "It can work well. Ready-made curtains suit customers with standard windows and smaller budgets, while made-to-measure serves those who want a precise fit and more choice. Keep the two clearly separated so customers understand the difference.",
			},
			{
				question: "Can I sell motorized curtain tracks online?",
				answer: "Yes. Motorized tracks are usually priced by track length, with options for the motor, power source and remote or smart home control. Clear product details and compatibility information help customers choose the right setup.",
			},
			{
				question: "How should I handle returns on made-to-measure curtains?",
				answer: "Because each pair is made to order, most businesses don't accept returns for change of mind. Publish a clear policy that explains how measuring errors, faults and damage in transit are handled, and show it before checkout.",
			},
			{
				question: "Do I need my own workroom to sell made-to-measure curtains online?",
				answer: "No. Many retailers work with trade workrooms that make curtains to order on their behalf. The website simply needs to send each order in the format your workroom partner requires.",
			},
			{
				question: "Should I offer a measuring or fitting service with online orders?",
				answer: "If you serve a local area, it can be a valuable option. Customers who aren't confident measuring themselves can book a measure, while others order online directly. Both routes can run through the same website.",
			},
			{
				question: "What's the difference between curtains and drapes in US product listings?",
				answer: "In the US, “drapes” usually refers to heavier, lined panels, often with pleated headings, while “curtains” often describes lighter or unlined styles. Using both terms in your product titles and descriptions helps customers find what they're looking for.",
			},
		],
	},

	achievements: achievementsSection,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default HowToSellMadeToMeasureCurtainsOnline;
