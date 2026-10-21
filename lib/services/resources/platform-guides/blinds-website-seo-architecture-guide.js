const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../../common-section/milestone-section";
import achievementsSection from "../../common-section/achievements-section";
import ourClientsSection from "../../common-section/our-clients-section";
import ceoCtaSection from "../../common-section/ceo-cta-section";

/** Repeated on every per-section checklist box. */
const CHECKLIST_ICON = "/assets/icons/checklist.svg";

/** @type {import('../../index').ServiceData} */
const BlindsWebsiteSeoArchitectureGuide = {
	slug: "blinds-website-seo-architecture-guide",
	pageTitle: "Blinds Website SEO Checklist for Stores and Showrooms",
	metaDescription:
		"Blinds sites lose rankings to duplicate fabric pages and filter URLs. See how to plan categories, variants, schema and location pages that Google can rank.",

	banner: {
		heading: "Blinds Website SEO Architecture: How to Structure Categories, Filters, and Product Pages to Rank",
		paragraphs: [
			"Weak writing rarely causes a blinds website to struggle in search. More often, it's how the site is put together. Offer one roller blind in 200 fabrics and you can end up with hundreds of URLs that look almost the same to Google. Add color and opacity filters and the count climbs into the thousands, while the category page meant to rank for “blackout roller blinds” competes with its own filtered copies.",
			[
				"Good ",
				{ bold: "blinds website seo" },
				" begins with structure. Which pages exist, how they link to each other, which ones Google is allowed to index and what each is meant to rank for. This guide goes through those decisions one section at a time, and every section closes with a short priority checklist, so the whole thing works as a ",
				{ bold: "window treatment seo checklist" },
				" for your team. It covers online stores as well as showrooms and installers, and it fits alongside the wider planning in ",
				{ text: "blinds and curtains website design and development", href: "/blinds-website-design-development/" },
				".",
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

	information: {
		eyebrow: "Why SEO Architecture Matters More on",
		title: "Blinds Websites",
		cards: [
			{
				blocks: [
					{ parts: [
						"Standard ecommerce advice only gets you part of the way with ",
						{ bold: "seo for blinds companies" },
						". A fashion store juggles sizes and colors. A blinds store juggles fabric, opacity, controls, mount type and headrail finish, and on top of that the customer types in their own measurements. Each of those options can create a fresh URL unless someone plans for it.",
					] },
				],
			},
			{
				title: "Made-to-Measure Products, Hundreds of Fabrics and Few Fixed Prices",
				blocks: [
					{ text: "Run the numbers on one Roman shade sold in 150 fabrics. Give every fabric its own product page and Google sees 150 pages with matching titles, matching descriptions and a different swatch on each. It will usually choose one to show, set the rest aside, and now and then choose the wrong one. Pricing complicates things further. A blind made to the customer's size has no single price, so product markup and shopping listings need extra care." },
				],
			},
			{
				title: "Online Stores vs Showrooms and Installers: Two Different Site Structures",
				blocks: [
					{ parts: [
						"An online store is organized around products: categories, filters, product pages and sample orders. A showroom or installer site is organized around places and services, with city pages, consultation booking and project photos doing the heavy lifting. That's why ",
						{ bold: "seo strategies for blinds installers" },
						" depend so much on location pages and Google Business Profile, while online stores succeed or fail on category and product pages. Many businesses run both models, so the structure has to cope with two kinds of search. The platform matters too, because it limits how much you can control URLs and filters, which this comparison of the ",
						{ text: "best ecommerce platform for blinds", href: "/best-ecommerce-platform-for-blinds/" },
						" explains in more detail.",
					] },
				],
			},
			{
				title: "What Good Structure Looks Like on a Real Blinds Store",
				blocks: [
					{ text: "Visor, a Norwegian retailer of made-to-measure blinds and curtains running on Magento 2, shows how structure and speed work together. Each blind type is sold from one product page. The customer enters a width and height, and the price updates straight away from ranges the Visor team sets in the admin. Product options, descriptions and tabs load through AJAX, the mobile product page was rebuilt to be lighter, and both of Visor's stores were moved onto a single AWS server running Redis and Varnish. Icecube Digital carried out that work, and Visor reports a 98% increase in conversion rate. For SEO, the takeaway is straightforward: one strong page per product, quick enough for shoppers and crawlers to get through without waiting." },
				],
			},
		],
	},

	leftIconBox: {
		eyebrow: "Planning Keywords Before",
		title: "You Plan Pages",
		subtitle: "A page should only exist if people search for what's on it. Build the keyword map first and the page list follows from it.",
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Product, Room, Problem and Local: The Four Types of Blinds Searches",
				body: "Most blinds searches fall into four groups, each suited to a different page type:",
				bodyList: [
					[{ bold: "Product searches:" }, " “Plantation shutters” or “cellular shades” suit category pages."],
					[{ bold: "Room and window searches:" }, " “Blackout blinds for nursery” suits room pages or guides."],
					[{ bold: "How-to searches:" }, " “How to measure windows for blinds” suits helpful guides."],
					[{ bold: "Local searches:" }, " “Custom blinds near me” suits showroom and location pages."],
				],
				bodyAfter: "Check keyword search volumes before deciding which pages to create.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Mapping One Main Keyword to Each Page",
				body: "Assign each page one main term and a handful of close variations, and record them in a simple spreadsheet. “Roller blinds” belongs to the roller blinds category. “Best blackout blinds for nursery” belongs to the nursery guide. Before anyone adds a page, look at the sheet. If the term is already assigned, strengthen the existing page instead of creating a rival.",
			},
			{
				icon: "/assets/icons/magnet.svg",
				title: "Stopping Pages From Competing With Each Other",
				body: "Overlap tends to build up quietly. A blog post about blackout blinds, a “blackout blinds” category and a “blackout roller blinds” filter page can all end up aiming at the same search. Search Console gives it away when two of your URLs take turns ranking for one query. Merge the weaker page into the stronger one, or rework it around a different term.",
			},
			{
				icon: CHECKLIST_ICON,
				title: "Checklist",
				bodyList: [
					"Every indexable page has one primary term recorded in the keyword map",
					"No two pages share the same primary term",
					"How-to and cost questions are assigned to guides, not product pages",
					"Local terms only go to pages for places you actually serve",
				],
			},
		],
	},

	topIconBox: {
		eyebrow: "Category Structure: Organizing Blinds by Type, Room,",
		title: "Feature, and Color",
		subtitles: ["Most product searches land on a category page, so this is where planning pays back the most."],
		items: [
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Main Categories by Product Type",
				body: "Use the names customers already use for your top level: roller blinds, Roman shades, cellular shades, vertical blinds, wood and faux wood blinds, and shutters. Supplier range names and internal codes are tempting shortcuts, but nobody searches for “Classic Collection 3.”",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Room and Feature Pages That Earn Their Place",
				body: "Pages such as “bedroom blinds,” “blackout blinds,” “motorized shades,” and “cordless blinds” can rank well when there's search demand behind them and real content on them. A good bedroom page might pull products from several blind types and explain why each one suits a bedroom, from blackout fabric to quiet cordless lifts. A copy of the roller blinds grid with “Bedroom Blinds” as the heading is just a duplicate.",
			},
			{
				icon: "/assets/icons/square-cursor.svg",
				title: "Keeping Every Page Within Three Clicks",
				body: "Try counting the clicks from your homepage to one product. If the route is Home, Blinds, Roller, Blackout, Fabrics, Grey, that product is buried. Crawlers visit it less often and it receives less internal link value. Three clicks is a sensible limit, with filters taking care of the finer choices underneath.",
			},
			{
				icon: "/assets/icons/vector-path.svg",
				title: "URLs and Breadcrumbs That Mirror the Structure",
				body: [
					"A URL like /roller-blinds/blackout/ tells shoppers and crawlers where they are, and the breadcrumb on the page should match it exactly, backed by breadcrumb markup. On large catalogs, platform settings shape much of this. Magento can include or leave out the category path in product URLs, and it generates URL rewrites automatically as products are added, so decide on that setting before the catalog grows. Teams that specialize in ",
					{ text: "Magento development for blinds stores", href: "/magento-development-services/" },
					" tend to settle it at the start, since changing it later means a long list of redirects.",
				],
			},
			{
				icon: CHECKLIST_ICON,
				title: "Checklist",
				bodyList: [
					"Top-level categories use the names customers search for",
					"No product sits more than three clicks from the homepage",
					"Breadcrumbs with markup on every category and product page",
					"Room and feature pages created only where people search for them",
					"Product URL settings agreed before launch",
				],
			},
		],
	},

	infoBox: {
		eyebrow: "Faceted Filters Without",
		title: "Index Bloat",
		columns: 2,
		contentAlign: "left",
		subtitle: "Shoppers rely on filters to compare fabrics and colors. Search engines, left unchecked, will try to crawl every possible combination.",
		items: [
			{
				title: "Which Filtered Pages Deserve to Be Indexed",
				body: "Only a few filter combinations match real searches. “White blackout roller blinds” might be one of them. “Grey, linen-look, chain-operated, 30 to 40 inch, under $150” won't. Pick the few worth ranking, give each a clean URL, a unique title and a short paragraph of its own, and treat them like categories. Every other combination is there for browsing.",
			},
			{
				title: "Blocking the Rest: robots.txt, Canonicals and Noindex",
				body: "Google refreshed its faceted navigation guidance in December 2025, and the message is clear. If filtered URLs don't need to appear in search, the most reliable option is to stop them being crawled, usually with robots.txt rules on the filter parameters. Canonical tags pointing back to the main category, and nofollow on filter links, are both described as less effective over time. Many stores combine the two, with robots.txt covering most parameters and canonicals as a safety net.",
			},
			{
				title: "Handling Empty and Nonsense Filter Combinations",
				body: "Choose “cordless” with a fabric that only comes on a chain and you get no results at all. Google recommends returning a 404 for combinations like that, rather than showing a thin “no products found” page. If any filtered URLs are indexed, keep the filter order fixed as well, so “white + blackout” and “blackout + white” don't create two addresses for the same products.",
			},
			{
				title: "How Filters Create URLs on Shopify",
				body: [
					"Shopify's storefront filters add parameters to collection URLs, for example ?filter.v.option.color=white. Robots.txt can be edited through a theme template, which is where these rules usually live. Products opened from a collection also get a collection-based URL, although Shopify sets the canonical to the main product URL by default. Filter apps and custom configurators sometimes add parameters of their own, which is why stores often bring in a team that handles ",
					{ text: "Shopify development for blinds stores", href: "/shopify-development-services/" },
					" before the filter setup is finished.",
				],
			},
			{
				title: "Checklist",
				bodyList: [
					"Filter parameters you don't want indexed are blocked from crawling",
					"Only filter combinations people search for are indexable",
					"Filters appear in the same order in every URL",
					"Empty or impossible combinations return a 404",
					"Every indexed filter page has its own title and text",
				],
			},
		],
	},

	cta: {
		text: "Not sure how many of your filter URLs Google is crawling? We can audit it and tell you.",
		ctaLabel: "Contact Us Now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	informationSecondary: {
		eyebrow: "Product Pages and Fabric Variants Without",
		title: "Duplicate Content",
		cards: [
			{
				blocks: [
					{ text: "This is where general ecommerce advice falls shortest, because few other product types come in so many near-identical versions." },
				],
			},
			{
				title: "One Product Page or One Page per Fabric?",
				blocks: [
					{ text: "The first option is one page per blind type, with the fabric chosen on the page and only that page indexed. Reviews, links and content all build up in one place, and it's the setup Visor uses, with sizes and pricing handled on a single product page. The second option gives every fabric its own indexable page. That's only worth it when people search for a fabric by name or when it has its own story, such as a designer collection. Most stores sit somewhere in between: one main page per product and a small number of standout fabrics with pages of their own." },
				],
			},
			{
				title: "Variable Products on WooCommerce",
				blocks: [
					{ parts: [
						"WooCommerce normally sets up fabrics and colors as attributes on a variable product. The variations don't get separate URLs by default, which helps. The risk lies in attribute archives and layered navigation, both of which can create URLs if they're switched on without a plan. A partner working on ",
						{ text: "WooCommerce development for blinds businesses", href: "/woocommerce-development-services/" },
						" will decide which archives should exist before the catalog runs into the thousands.",
					] },
				],
			},
			{
				title: "Writing Beyond the Manufacturer's Description",
				blocks: [
					{ text: "Plenty of retailers carry the same supplier ranges and paste in the same supplier text. When Google finds dozens of sites with an identical paragraph, it has no reason to rank yours above the rest. Write the main product pages in your own words. Explain which rooms the blind suits, how the fabric looks with sun behind it, how the cordless lift feels and how the blind is measured. None of that comes from a spec sheet." },
				],
			},
			{
				title: "Swatch and Room Images That Load Fast",
				blocks: [
					{ text: "Swatches and room photos sell blinds, and they also slow pages down. Compress them, use WebP where you can and lazy-load galleries further down the page. Visor's store, for example, lazy-loads images and defers scripts as part of its speed work. Name files clearly, too: “grey-linen-blackout-roller-blind-bedroom.webp” tells Google far more than “IMG_4471.jpg,” and the same applies to alt text." },
				],
			},
			{
				title: "Checklist",
				blocks: [
					{ type: "ul", items: [
						"Each product has one indexable URL, with fabrics handled on the page",
						"Main product pages use your own descriptions, not supplier text",
						"Fabric pages are indexed only when people search for that fabric",
						"Images are compressed, in modern formats, with descriptive alt text",
					] },
				],
			},
		],
	},

	leftIconBoxSecondary: {
		eyebrow: "Structured Data for Blinds, Shades and",
		title: "Shutters Websites",
		subtitle: [
			[
				{ bold: "Structured data for window treatment websites" },
				" tells Google exactly what each page sells and makes richer listings possible. Three areas matter most.",
			],
		],
		items: [
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Product and ProductGroup Markup for Fabric Variants",
				body: "Google supports markup made for products that come in variants. A ProductGroup holds the details every version shares, and each variant lists what makes it different. Supported properties include color, size, material and pattern, which map well onto fabrics and finishes. Every variant needs its own identifier, and a SKU works fine. The markup works whether fabrics share one page or each has a URL of its own.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Showing a Price on Made-to-Measure Products",
				body: "Product markup expects a price, yet a made-to-measure blind has a different price for every size. The usual answer is to mark up the price for a standard starting size, shown on the page as a “from” price, and make sure that exact figure appears when that size is selected. When the markup and the page disagree, listings can be disapproved.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "LocalBusiness, Breadcrumb and Review Markup",
				body: "Each showroom page should carry LocalBusiness markup, with the name, address, phone number and hours matching its Google Business Profile exactly. Breadcrumb markup supports the category paths covered earlier. Review markup only belongs where reviews are genuinely collected and shown on the page, and Google has its own rules on which review snippets qualify.",
			},
			{
				icon: CHECKLIST_ICON,
				title: "Checklist",
				bodyList: [
					"Product markup passes Google's Rich Results Test on key templates",
					"The price in the markup matches the price shown on the page",
					"ProductGroup markup is used where fabrics or colors are variants",
					"LocalBusiness markup is on every showroom page",
					"Breadcrumb markup is on category and product pages",
				],
			},
		],
	},

	leftIconBoxTertiary: {
		eyebrow: "Location Pages for",
		title: "Showrooms and Installers",
		subtitle: [
			[
				"For showrooms and installers, local searches end up on ",
				{ bold: "location pages for window treatment businesses" },
				". These pages are also among the easiest to get wrong.",
			],
		],
		items: [
			{
				icon: "/assets/icons/marketplace.svg",
				title: "When a City Page Makes Sense, and When It Doesn't",
				body: "If you have a showroom in a city or install there regularly, that city deserves a page. Fifty versions of the same page with only the suburb name changed don't. Google tends to see that kind of set as thin, and it can drag down the pages that matter. Begin with the places you actually serve, and add new pages as you complete real jobs in new areas.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "What Every Location Page Needs",
				body: [
					"A strong location page reads as if someone local wrote it. Show finished jobs nearby and reviews from local customers. List the neighborhoods you cover and, for a showroom, the opening hours. Then make it easy to book a visit. A showroom can connect that step to a ",
					{ text: "consultation booking system for blinds showrooms", href: "/blog/blinds-showroom-consultation-booking-system/" },
					", so the page turns a search into an appointment.",
				],
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Connecting Location Pages to Google Business Profile",
				body: "Link each showroom's Google Business Profile to its own location page rather than the homepage. The name, address and phone number must match exactly across the profile, the page and its markup. If you use call tracking, put the tracking number in the primary phone field and keep your main number as an additional one, so the listing stays consistent.",
			},
			{
				icon: CHECKLIST_ICON,
				title: "Checklist",
				bodyList: [
					"One location page for each real showroom or regularly served area",
					"Name, address and phone match the Google Business Profile exactly",
					"Local jobs, reviews and service areas appear on every location page",
					"Each profile links to its own location page",
				],
			},
		],
	},

	infoBoxSecondary: {
		eyebrow: "Internal Linking and Content That Supports",
		title: "Category Pages",
		columns: 2,
		contentAlign: "left",
		subtitle: "A list of pages is only half of the structure. The links between them tell Google which pages matter most.",
		items: [
			{
				title: "Linking Related Blind Types Together",
				body: "A single roller blind can be blackout, motorized and cordless at once, and shoppers move between those ideas as they browse. Link each product type to the features and rooms it suits, link back the other way, and use plain anchor text that says what's on the next page. A shopper looking at blackout roller blinds should be one click from motorized options, and the reverse.",
			},
			{
				title: "Buying Guides and Comparisons That Feed Categories",
				body: "Guides such as “Roman shades vs roller blinds” or “how to choose blinds for a bay window” pick up comparison and how-to searches that category pages won't. Each guide should link clearly to the categories it discusses, so a reader who's ready to buy is one click away from the products.",
			},
			{
				title: "Answers Built for Featured Snippets and AI Overviews",
				body: "Search results answer more questions directly than they used to. A short answer placed right under a question-style heading stands a much better chance of being quoted, in a featured snippet or an AI Overview, than the same answer buried further down. Two sentences on “what's the difference between cellular and roller shades?” near the top of a guide is about the right length.",
			},
			{
				title: "Checklist",
				bodyList: [
					"Every category and product page has at least one internal link pointing to it",
					"Related product types and features link to each other in both directions",
					"Every guide links to the categories it covers",
					"Key questions get a short answer directly under a question heading",
				],
			},
		],
	},

	leftIconBoxQuaternary: {
		eyebrow: "Technical SEO Checks for",
		title: "Blinds Websites",
		subtitle: "Technical problems on blinds sites usually start in the same three places: filters, variants and heavy images.",
		items: [
			{
				icon: "/assets/icons/web.svg",
				title: "Crawling, Indexing and XML Sitemaps",
				body: "The XML sitemap should list only the pages you want indexed. Leave out filter URLs, redirected pages and anything marked noindex. Search Console's page indexing report shows what Google has excluded and why. Hundreds of “Duplicate without user-selected canonical” or “Crawled, currently not indexed” entries almost always point back to filters or fabric variants.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Page Speed, Core Web Vitals and Heavy Fabric Galleries",
				body: "Product pages carrying a swatch grid, a room gallery and a configurator are usually the slowest templates on the site. Check Core Web Vitals for each template separately, because a quick homepage says nothing about the product page. Configurator and gallery scripts should load only where they're needed, which is the same approach behind Visor's AJAX-loaded product options.",
			},
			{
				icon: "/assets/icons/mobile.svg",
				title: "Mobile Layout for Category and Product Pages",
				body: "Google indexes the mobile version of every page, and that's where most browsing happens anyway. Filters should open in a slide-out panel, swatches need to be large enough to tap, and the price and main button should be visible without scrolling through the whole gallery.",
			},
			{
				icon: CHECKLIST_ICON,
				title: "Checklist",
				bodyList: [
					"The XML sitemap lists only indexable, canonical URLs",
					"Core Web Vitals pass on category and product templates",
					"The page indexing report is reviewed monthly for filter and variant URLs",
					"Filters and swatches are easy to use on a phone",
				],
			},
		],
	},

	informationTertiary: {
		eyebrow: "Measuring Whether the",
		title: "Structure Is Working",
		cards: [
			{
				blocks: [
					{ parts: [
						"Rankings only count when they lead to business, and ",
						{ bold: "window treatment seo" },
						" is no different. The structure is working when the right pages rank and those visits turn into inquiries and orders.",
					] },
				],
			},
			{
				title: "Search Console Reports to Watch",
				blocks: [
					{ text: "Three reports cover most of what you need. Page indexing shows whether excluded URLs are falling and your important pages are included. The performance report, filtered by page, shows whether category and location pages are gaining impressions and clicks for the terms mapped to them. Crawl stats show whether Googlebot spends its time on real pages or keeps wandering through filter URLs." },
				],
			},
			{
				title: "Tracking Samples, Quotes, Calls and Orders",
				blocks: [
					{ text: "A blinds sale often starts with a fabric sample, a quote request or a phone call rather than a checkout. Record each of these as a conversion in your analytics and connect it to the landing page. A category page with fewer visits but a steady flow of sample orders is worth more than one with plenty of traffic and nothing after it." },
				],
			},
		],
	},

	imageText: {
		eyebrow: "Common SEO Architecture Mistakes on",
		title: "Blinds Websites",
		image: "/assets/photos/dominate-google-serp.jpg",
		imageAlt: "Reviewing indexing and crawl issues on a blinds website in search results",
		blocks: [
			{ text: "The same problems show up on blinds sites again and again:" },
			{ type: "ul", items: [
				"City pages produced in bulk for towns the business hardly serves",
				"Supplier descriptions copied word for word",
				"Filter and sort URLs left open to crawling",
				"An indexable page for every fabric, with nothing unique on any of them",
				"A price in the product markup that never appears on the page",
				"Category or product pages that no internal link points to",
				"A sitemap full of redirected and filtered URLs",
			] },
		],
	},

	topIconBoxSecondary: {
		eyebrow: "What Sets Icecube",
		title: "Digital Apart?",
		subtitles: ["Icecube Digital builds and optimizes websites for blinds, curtains and shutters businesses, and we plan the SEO structure before any design work starts."],
		items: [
			{
				icon: "/assets/icons/sliders.svg",
				title: "Made-to-Measure Configurator on Magento",
				body: [
					"A custom width and height pricing extension, a lighter mobile product page and speed work across ",
					{ text: "Visor's store", href: "/case-studies/visor/" },
					", with a reported 98% rise in conversion rate.",
				],
			},
			{
				icon: "/assets/icons/marketplace.svg",
				title: "A Blinds Store Organized for Search",
				body: [
					{ text: "Blinds By Post", href: "/case-studies/blinds-by-post/" },
					" is a made-to-measure blinds store where customers browse, measure and order online.",
				],
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Development and SEO From One Team",
				body: "The person who builds your keyword map works with the person building your templates, so nothing is lost in a handover.",
			},
			{
				icon: "/assets/icons/vector-path.svg",
				title: "Structure Planned Before the Build",
				body: "Category paths, filter rules and variant handling are agreed at the start, when changing them costs nothing.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "Shopify, WooCommerce and Magento Expertise",
				body: "Each platform handles URLs, filters and variants in its own way, and we set yours up to suit your catalog.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Support After Launch",
				body: "As your range grows, we keep track of indexing, Core Web Vitals and every new page that goes live.",
			},
		],
	},

	plainTextSecondary: {
		title: "Conclusion",
		blocks: [
			{ text: "A blinds website ranks when every product, room and location has one clear page, filter and fabric variations stay out of the index, and related pages link in a way that makes sense to shoppers and to Google. Very little of that is complicated. Most of it comes down to making decisions on purpose rather than leaving them to a theme or a plugin." },
			{ text: "If you'd like a second opinion on your current setup, Icecube Digital can review your categories, filters, variants and markup, then plan and build the changes. Contact Icecube Digital to get started." },
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
		title: "SEO FAQs",
		items: [
			{
				question: "Should blinds and curtains share one category tree or have separate ones?",
				answer: "Keep them separate at the top level. People search for them as different products, and the filters barely overlap: curtains need heading type and fullness, while blinds need mount type and controls. Shared pages such as “blackout window treatments” can still draw from both.",
			},
			{
				question: "When does a single fabric or color deserve its own page?",
				answer: "When people type its name into Google. A designer collection with a story behind it often qualifies. A plain grey that differs from four other greys only by its code rarely does.",
			},
			{
				question: "Do sample ordering pages need to be indexed?",
				answer: "Rarely. A swatch cart or sample request form is a step in the buying process, not something people search for. Keep it crawlable so links from product pages still count, but there's little point trying to rank it.",
			},
			{
				question: "What happens to rankings when product URLs change during a redesign?",
				answer: "If old URLs simply disappear, rankings can drop sharply. Before launch, map every old URL to its new address and set up 301 redirects, then watch Search Console closely for the first few weeks. Pages without a direct match should redirect to the nearest relevant category, not the homepage.",
			},
			{
				question: "Should discontinued fabrics keep their pages?",
				answer: "That depends on whether the page still earns anything. If it gets traffic or has links pointing to it, redirect it to the closest replacement or its category. A fabric that's only out of stock for a while should stay live, with a note on when it's expected back. Deleting pages every time stock changes throws away rankings the page has already built.",
			},
			{
				question: "How long do structure changes take to show up in rankings?",
				answer: "Quick fixes, such as blocking filter URLs or cleaning up the sitemap, usually appear in Search Console's indexing report within a few weeks. A new category structure takes longer to affect rankings, often a few months. How often Google crawls the site and how competitive the terms are both make a difference.",
			},
			{
				question: "Are pages for the blind brands you sell worth creating?",
				answer: "Sometimes. If customers search for a brand and your page offers something the brand's own site can't, such as local fitting, your pricing or reviews from your customers, it can earn its place. A copy of the manufacturer's marketing text won't.",
			},
			{
				question: "Does a blinds store selling to both the US and Canada need separate site versions?",
				answer: "Only if prices, currency, product range or shipping differ enough to need different pages. In that case, run a version for each country and use hreflang tags so visitors reach the right one. If nothing really changes between the two, a single site with clear shipping details is much easier to manage.",
			},
		],
	},

	achievements: achievementsSection,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default BlindsWebsiteSeoArchitectureGuide;
