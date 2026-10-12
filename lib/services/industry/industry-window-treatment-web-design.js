const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/**
 * Industry page — window treatment website design for installers, dealers and
 * showrooms. Lead-generation focused sibling of industry-shutters-web-design.js
 * and industry-blinds-curtains-web-design.js.
 *
 * Section order on the page = the order of the keys below (buildSectionOrder in
 * app/[slug]/page.js). Internal links use paths, not full https:// URLs —
 * renderParts opens absolute URLs in a new tab, which is meant for external sites.
 */
/** @type {import('../index').ServiceData} */
const IndustryWindowTreatmentWebDesign = {
	slug: "window-treatment-website-design",
	pageTitle: "Window Treatment Website Design | Installer & Showroom Sites",
	metaDescription:
		"Websites for window treatment installers, dealers and showrooms, built to book in-home consultations, generate quote requests and win local customers.",

	banner: {
		heading: "Window Treatment Website Design for Installers, Dealers and Showrooms",
		paragraphs: [
			[
				"Is your ",
				{ bold: "window treatment website design" },
				" turning visitors into booked measures, or only showing them products? If your website showcases products but makes it difficult to book a consultation, homeowners may leave without knowing whether you serve their area, what your work looks like or how to request a quote. This is why ",
				{ bold: "window treatment website design" },
				" has to be built around the way you sell: measures, consultations and quotes.",
			],
			[
				"Icecube Digital builds websites for installers, dealers and showrooms that put booking first, with ",
				{ bold: "service area pages" },
				", ",
				{ bold: "project galleries" },
				", reviews and a clear path to a ",
				{ bold: "free measure" },
				" or quote instead of a layout built around checkout. The site answers the questions homeowners have before they call, such as where you work and what a quote covers, and reflects the quality of your work. The result is a website that answers common questions and gives local customers a clear way to book a consultation.",
			],
		],
		ctaLabel: "Book a Free Website Consultation",
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
		eyebrow: "Why Many Window Treatment Websites Don't Bring",
		title: "In Consultations",
		subtitle: [
			"A blinds company website can look polished yet generate very few enquiries or consultation bookings. If you have one of those window treatment websites, these could be some of the reasons:",
		],
		items: [
			{
				title: "No clear booking path",
				body: "Visitors who want to book find only a generic contact form, so many give up.",
			},
			{
				title: "Awkward on phones",
				body: "Pages feel slow or awkward on a phone. Buttons may be difficult to press on certain websites.",
			},
			{
				title: "No service area details",
				body: "Service areas are never mentioned, so visitors don't know whether you cover their town.",
			},
			{
				title: "Tired galleries and thin trust signals",
				body: "Galleries are outdated, which leaves a homeowner wondering whether you are still active.",
			},
			{
				title: "No lead tracking",
				body: "You can't tell which calls came from the website, so you can't judge what the site is worth.",
			},
		],
	},

	cta: {
		text: "Not sure what's holding your current site back? Let's take a look.",
		subtitle: "Visitors who hit one of these gaps rarely tell you why they left, so the inquiries you lost stay invisible.",
		ctaLabel: "Contact Us Now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Window Treatment Websites Built to",
		title: "Book In-Home Consultations",
		subtitles: [
			[
				"A consultation-first ",
				{ bold: "window treatment company website" },
				" treats every page as a step toward an appointment:",
			],
		],
		items: [
			{
				icon: "/assets/icons/magnet.svg",
				title: "Matched calls to action",
				body: [
					"Product pages invite a ",
					{ bold: "free measure" },
					", city pages invite a local booking and gallery pages invite a quote request.",
				],
			},
			{
				icon: "/assets/icons/mobile.svg",
				title: "Always within reach",
				body: "Booking and call buttons stay visible on every screen, including mobile.",
			},
			{
				icon: "/assets/icons/comment.svg",
				title: "Answers before the call",
				body: "Content answers the questions that the homeowner asks prior to commitment. It includes what will be expected during the visit, the factors that influence the cost and how the measurement is done.",
			},
			{
				icon: "/assets/icons/edit-board.svg",
				title: "Easy to manage",
				body: "You can also manage the website yourself, adding new photos, offers and services offered, without a developer.",
			},
		],
	},

	plainText: {
		eyebrow: "Pages Every Window Treatment",
		title: "Website Needs",
		contentAlign: "left",
		blocks: [
			{ parts: [
				"A ",
				{ bold: "window treatment website" },
				" needs product pages, service area pages, proof of your work and an easy way to book. These eight pages cover it:",
			] },
			{ type: "ul", items: [
				"Home: what you sell, where you work and how to book",
				"Products: separate pages for blinds, shades, shutters and drapery",
				"Service areas: one page for each city you cover",
				"Gallery: finished projects that show your craftsmanship",
				"Reviews: proof from real customers that back up your claims",
				"Warranty and financing: answers to risk and budget worries",
				"About: the people who will visit the home",
				"Contact and booking: the page where visitors take action",
			] },
			{ text: "Navigation matters as much as the list. Keep product and service area pages in the main menu. Add links to warranty and financing details from every product page. Keep the menu short and put booking in the top bar, so every page is one tap away." },
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Features of a High-Converting Blinds",
		title: "Installer Website",
		subtitles: [
			[
				"Strong ",
				{ bold: "blinds installer website design" },
				" focuses on features that move a visitor from browsing to booking.",
			],
		],
		items: [
			{
				icon: "/assets/icons/timer.svg",
				title: "Online Consultation and Free Measure Booking",
				body: [
					"Let visitors choose a time for a ",
					{ bold: "free measure" },
					" or in-home consultation right on the site. Ask only for what you need, such as address, room and preferred day, so you spend less time trading calls and messages. If you work across several towns, show open time slots by area.",
				],
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Service Area and City Landing Pages",
				body: "Give each city or region its own page with local details, so homeowners see right away that you serve their neighborhood and know how to reach you. List the towns or ZIP codes you cover and how far you travel for a measure. Write each page from scratch, with nearby projects and local questions, so none read like copies.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Quote Forms and Call Tracking",
				body: "Short quote forms capture the details you need, such as room type, window count and product interest. Keep it to the fields you actually need. Call tracking shows pages and sources that generate the phone calls.",
			},
			{
				icon: "/assets/icons/images-place.svg",
				title: "Project Galleries and Before-and-After Photos",
				body: "Well-organized galleries with before-and-after photos help homeowners visualize how different window treatments could look in their own homes. These examples help homeowners assess the quality of your installation work before contacting you. Organize your projects based on the product or the room, so visitors find relevant examples quickly.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Reviews, Warranties and Financing Information",
				body: "Place customer reviews, warranty terms and financing options where buyers look for them, such as product pages. This will save you time because there will be no need to answer the same questions again and again. The stars and the link to Google reviews provide your customers with an opportunity to check your reputation themselves.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Motorized and Smart Shade Product Pages",
				body: "Motorized shades are a higher-value upsell, and they need their own pages. Explain control options, power sources, smart home compatibility and how installation differs from manual shades. Add a prompt to ask about motorization when visitors book a consultation.",
			},
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Product and Brand Pages for Authorized Dealers",
				body: "Dealers need a page for each product line they carry. Brand names and images must follow your dealer program rules, so confirm what you may show first. Where manufacturer images are not permitted, use your own project photos to showcase the products you install.",
			},
		],
	},

	ctaSecondary: {
		text: "Want these features on your site? Book a free website consultation.",
		ctaLabel: "Book a Free Consultation",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	leftIconBox: {
		eyebrow: "Website Design for Every Kind of Window",
		title: "Treatment Business",
		subtitle: [
			[
				{ bold: "Window covering website design" },
				" starts with how your business sells.",
			],
		],
		items: [
			{
				icon: "/assets/icons/user-round.svg",
				title: "Independent installers",
				body: "Simple booking and your best work, so you can take appointments without answering every call.",
			},
			{
				icon: "/assets/icons/suitcase.svg",
				title: "Authorized dealers",
				body: [
					"Brand pages, credentials and booking, central to ",
					{ bold: "blinds dealer website design" },
					".",
				],
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Showroom retailers",
				body: [
					"A ",
					{ bold: "blinds showroom website" },
					" with directions, hours and visit booking, so shoppers know when and where to come in.",
				],
			},
			{
				icon: "/assets/icons/transport.svg",
				title: "Mobile showrooms",
				body: "Clear service areas and “we come to you” messaging, plus booking by area.",
			},
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Multi-location companies",
				body: "Location pages and central booking, with consistent branding across every branch.",
			},
			{
				icon: "/assets/icons/companies.svg",
				title: "Commercial companies",
				body: "Project pages and quote requests for big jobs, written for builders and property managers.",
			},
		],
		footerNote: [
			"Many businesses operate in two or more of these categories. For instance, a showroom that has a commercial division is able to provide two separate options of residential and commercial from the same home page. Selling shutters too? See ",
			{ text: "shutters website design", href: "/shutters-website-design-development/" },
			" for configuration and visualizer details.",
		],
	},

	imageTextBlocks: [
		{
			eyebrow: "Integrations for Booking, CRM and",
			title: "Call Tracking",
			image: "/assets/photos/Inventory-ERP-CRM-Integration.png",
			imageAlt: "Installer website connected to booking calendar, CRM and call tracking",
			blocks: [
				{ type: "text", text: [
					"A ",
					{ bold: "window treatment installer website" },
					" should connect to the tools you already use. We can connect booking calendars, your CRM, call tracking and email tools, and incorporate relevant Google Business Profile links or booking options where supported. Flexible WordPress development for ",
					{ bold: "installer websites" },
					" keeps those connections adjustable as your needs change.",
				] },
				{ type: "text", text: "A homeowner books a measure, the appointment lands on your calendar, and the lead's details reach your CRM. The customer gets a confirmation email, and your team gets an alert, so nothing sits unanswered." },
				{ type: "text", text: "Each tracked call is tagged with its source, so your CRM records whether a lead came from a city page, a product page or your Google Business Profile. Reminders can go out to the customer before the visit, which helps cut down on no-shows. If you use other tools, tell us during discovery and we will plan around them." },
			],
		},
		{
			eyebrow: "Local SEO Foundations Built Into Every",
			title: "Installer Website",
			image: "/assets/photos/local-seo-every-business.png",
			imageAlt: "Local SEO and service area pages for a window treatment installer",
			imagePosition: "right",
			blocks: [
				{ type: "text", text: [
					"Local SEO for an ",
					{ bold: "installer website" },
					" starts with clear service area pages and accurate business details. These basics help search engines understand where you work and what you offer. For work beyond the build, see ",
					{ text: "local SEO for window treatment businesses", href: "/local-seo-services/" },
					". We build city pages, keep your business name, address and phone number consistent across the site, and add local business schema, which labels your name, address, hours and service area in a format search engines read.",
				] },
				{ type: "text", text: "The site also matches your Google Business Profile, loads quickly and uses internal links to connect related pages, such as a city page and its matching products. Every page gets a clear title and description written for the people who will read it in search results." },
			],
		},
		{
			eyebrow: "Platform Options That Grow",
			title: "With Your Business",
			image: "/assets/photos/ecommorce-web-development-left.png",
			imageAlt: "WordPress, WooCommerce and Shopify options for a window treatment website",
			blocks: [
				{ type: "text", text: [
					"WordPress suits a ",
					{ bold: "window treatment company website" },
					" built for leads. It offers flexible page layouts, simple editing and plenty of options for forms and booking. When you're ready for sample ordering or online sales, WooCommerce can extend your WordPress website. Shopify is another option for businesses that need a dedicated ecommerce platform, with the right integration or migration approach depending on your setup. Sample ordering is a smaller first step than a full catalog, and it lets you test demand before you build a store.",
				] },
				{ type: "text", text: [
					"WooCommerce keeps the store inside your WordPress site, while Shopify suits businesses that want a dedicated store platform. For a full online store, see ",
					{ text: "blinds and curtains website design and development", href: "/blinds-website-design-development/" },
					".",
				] },
			],
		},
	],

	processSteps: {
		eyebrow: "How We Build Your Window",
		title: "Treatment Website",
		columns: 2,
		subtitle: "Four stages take you from a first conversation to a live site you can manage yourself.",
		steps: [
			{
				title: "Discovery and Service Area Mapping",
				body: "We learn how you sell and map the cities you serve. You share your services, product lines and any current site details. Then we plan the site structure to match how local customers search and book.",
			},
			{
				title: "Design and Content",
				body: "We design the layout and write each page around the questions customers ask most. You supply project photos, reviews and credentials, and you review every draft before we move forward.",
			},
			{
				title: "Build, Booking and Tracking Setup",
				body: [
					"We handle ",
					{ text: "WordPress development for installer websites", href: "/wordpress-development-services/" },
					", then install booking forms, quote forms, and call tracking on all paths to leads. Every single form, connection to a calendar, and phone number gets tested with actual submissions through smartphones, tablets, and desktop computers. This way, you can be sure requests reach you.",
				],
			},
			{
				title: "Launch, Training and Ongoing Support",
				body: "We'll launch the website and help you learn how to edit pages and add galleries while checking your lead reports. Support stays available afterwards for updates and questions.",
			},
		],
	},

	ctaTertiary: {
		text: "Ready to see how this would work for you? Let's talk.",
		ctaLabel: "Contact Us Now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	// Image/text, continuing the alternating pattern above (previous block was left).
	imageText: {
		eyebrow: "What Affects the Cost of a Window",
		title: "Treatment Website?",
		image: "/assets/photos/dynamic_pricing.jpg",
		imageAlt: "What drives the cost of a window treatment website",
		imagePosition: "right",
		blocks: [
			{ type: "text", text: "Cost depends on scope rather than a flat template price. The main drivers are the number of pages and locations, your booking and integration needs, the size of your product catalog and whether you plan to add online sales. For instance, each extra location needs its own page and content. And each integration adds setup and testing." },
			{ type: "text", text: "A large motorized range or a separate commercial section adds pages and setup time. A single-location installer with a handful of pages sits at one end of the range, while a multi-location dealer with a large catalog and several integrations sits at the other." },
			{ type: "text", text: "Know your page count, locations and whether you will sell online to easily compare the quotes. For a deeper breakdown, see the guide to window treatment website cost." },
		],
	},

	informationSecondary: {
		eyebrow: "Why Window Treatment Businesses",
		title: "Choose Icecube Digital",
		cards: [
			{
				blocks: [
					{ text: "Icecube Digital has built websites for blinds and window treatment brands, so we understand products, measuring and motorization. That familiarity shapes the pages: product and booking content answers the questions homeowners ask about measuring accuracy and lead times. Design, development, SEO and support come from one team, so booking forms, service pages and tracking are planned together instead of patched on later. In the end, your site can start as a lead generator and grow into ecommerce as your business expands." },
					{ text: "You deal with the same people from the first consultation to ongoing support, so nobody has to explain your business twice." },
				],
			},
		],
	},

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	faq: {
		eyebrow: "Window Treatment Website",
		title: "Design FAQs",
		items: [
			{
				question: "Do I need a website if most of my work comes from referrals?",
				answer: "Yes, and blinds installers are no exception. Customers who hear about you from a friend still search for your name before they call, and they judge you by what they find. A clear site with reviews, photos and booking makes scheduling easy, even outside office hours.",
			},
			{
				question: "I'm an authorized dealer. Can I use manufacturer photos and brand names?",
				answer: "It depends on the conditions of your dealer agreement. The logo, product picture, and wording will depend on the policies made by the manufacturer. So check your program guidelines or ask your rep first. We will build the pages around whatever assets you are cleared to use. Rules differ from one brand to the next.",
			},
			{
				question: "How long does it take to build an installer website?",
				answer: "Typically, it will take around 4-8 weeks. However, the timeline might vary depending on pages and features. A compact lead-generation site moves faster than one with many service areas, a large product catalog or several integrations. After your consultation, we'll outline a schedule based on your exact scope so you can plan around it.",
			},
			{
				question: "Will I be able to update the website myself?",
				answer: "Yes. Text, photos, projects, offers and service area pages are all yours to edit. Larger changes, such as a new page layout, a booking flow or an integration, are better handled by us. Our team stays available for them.",
			},
			{
				question: "Do you redesign existing window treatment websites?",
				answer: "Yes. We can optimize your existing website by restructuring its content, design, and architecture while retaining the existing working elements, such as pages, reviews, and pictures. That way, you get an improved booking flow and a responsive design without rebuilding your website from scratch or throwing away content your clients trust. We explain what stays before work starts.",
			},
			{
				question: "Can you move my website without losing my Google rankings?",
				answer: "We plan every move to protect your visibility. This includes linking all previous URLs to the new URLs, using redirects and retaining important page title tags, heading tags and content, so that people will not end up at broken pages. Nobody can provide you with any guarantees of ranking positions. But we ensure careful migration and post-launch checks to reduce the risk of losing traffic.",
			},
			{
				question: "Do you write the website content, or do I?",
				answer: "Either works. We handle the page copy, drawing on a short intake form about what you sell and the areas you cover. Or you can write it, and we will edit for clarity and search. Either way, you approve every page before it goes live.",
			},
			{
				question: "Are hosting and maintenance included?",
				answer: "Ongoing support is available after launch to keep your site running smoothly and answer questions as they arise. But hosting and maintenance arrangements vary by project, depending on the project scope. We'll confirm exactly what's included during your consultation so you know what to expect before you commit.",
			},
			{
				question: "Will my website work well on phones and tablets?",
				answer: "Yes. Layouts adapt to phone, tablet and desktop widths, images are sized to load quickly on mobile data, and tap targets are large enough for thumbs. We test on common devices before launch, so your customers can easily see that you cover their address and book a visit from wherever they are.",
			},
			{
				question: "Can I add seasonal offers and promotions to the site?",
				answer: [
					"Yes. You can add banners, promotion pages or limited-time offers whenever you like, then remove them when the season ends. Giving each offer its own page keeps old promotions from cluttering your main pages. If you later want to sell products online, read more about ",
					{ text: "selling blinds online", href: "/blog/blinds-ecommerce-development/" },
					".",
				],
			},
		],
	},

	plainTextQuinary: {
		eyebrow: "Book More",
		title: "Consultations",
		blocks: [
			{ parts: [
				"Want ",
				{ bold: "window treatment website design" },
				" that books more consultations? Tell us about your business, and we will outline the right pages, features, platform, booking setup, and local foundations, giving your business more space to grow.",
			] },
		],
		ctaLabel: "Book your free consultation today!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default IndustryWindowTreatmentWebDesign;
