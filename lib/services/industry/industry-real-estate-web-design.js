const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const RealEstateWebDesign = {
	slug: "real-estate-website-design-development",
	pageTitle: "Real Estate Website Design & Development Services | Real Estate Web Design Company",
	metaDescription: "Looking for a real estate website design company? Our expert real estate web designers build attractive, SEO-friendly, high-converting websites. Get a free quote!",

	banner: {
		heading: "Real Estate Website Design & Development Services",
		paragraphs: [
			"We help real estate agencies to highlight their market expertise by creating customized real estate websites. The websites we design are not only attractive and feature-rich but also work as a testament to the real estate agency. As a real estate web design agency, we not only take care of design but also implement search engine optimization strategies to make sure you rank high in the search engine results. In all, by selecting us for your real estate website design needs, you can stay assured of achieving your marketing goals.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
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
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [40831, 40897, 40932],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Your Experienced Real Estate Website",
		title: "Design Company",
		contentAlign: "center",
		paragraphs: [
			"Just like every other commodity, the real estate marketplace also has migrated online. Today, almost every single property buyer or seller, starts the process with an online search. And, if you aren’t easy to find online, then you can be sure that your customers are going over to your competition.",
			"With an expert team of real estate website developers, designers, content creators, SEO specialists and digital marketers, with years of experience in the real estate industry, we have been exceeding our client’s expectations, making us the most trusted real estate website design and development company in the country.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "williams",
	},

	infoBox: {
		eyebrow: "Why",
		title: "Choose Us?",
		columns: 2,
		items: [
			{
				title: "End-to-end Services",
				body: "We aren’t just your real estate website design agency. Instead, we help you take care of other aspects of your online presence including web hosting, digital marketing, lead generation, branding, social media marketing, seo for real estate website and much more.",
			},
			{
				title: "Exceptional Customer Service",
				body: "With a team of customer service agents who work around the clock, we ensure that all elements of your online presence run smoothly without any glitches. We assign a dedicated project manager for each client, so you have a one-person-contact for the entire duration of your project and even after.",
			},
			{
				title: "Customized Solutions",
				body: "We believe that every business is unique. This is why, we don’t offer packages. We don’t try to sell you services that you don’t need. Instead, our real estate web design and development solution provider team work with you to understand your requirements and comes up with unique solutions that are tailored to match your specific requirements.",
			},
			{
				title: "Affordable Prices",
				body: [
					"As a small business our self, we understand the challenges faced by other small and medium businesses. We know that each penny you spend is highly critical. This is why; we ensure that all our clients get the best ",
					{ text: "ecommerce website design services", href: "/ecommerce-website-design-services/" },
					" at the best prices.",
				],
			},
		],
	},

	topIconBox: {
		eyebrow: "Our Real Estate Web",
		title: "Development Services",
		subtitles: [
			"Take a look at a few of the tasks we do around here. If what you need isn’t listed here, worry not. Get in touch with our team and we’ll help you out.",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/web.svg",
				title: "Professional Website Designs",
				body: "Impress your clients and hook them in with a professional website design for your real estate agency. Simple, clean, clutter-free, yet elegant and functional, our real estate web design provides your target audience with the best user experience.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO",
				body: [
					"All our websites are seo-friendly and come with plenty of features to help you stay visible and stand out among your direct competitors. We know that SEO is constantly changing and for the best results, we ensure that our ",
					{ text: "SEO Expert", href: "/hire-seo-experts/" },
					" stays on top of their game, always.",
				],
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Responsive Websites",
				body: "Irrespective of whether your clients are on desktops, laptops, mobiles or tablets, our expert team of real estate website developers provide your users with a consistent and seamless experience across channels.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Real Estate Leads",
				body: "It isn’t enough to have just a real estate website. You need to capture and convert your leads to boost your bottom line. Our advanced lead generation tools help you capture qualified real estate leads that drive your sales turnovers.",
			},
			{
				icon: "/assets/icons/www.svg",
				title: "WordPress",
				body: [
					"As the world’s leading CMS (Content Management System) powering over 60 million websites, WordPress offers exceptional functionality and superior versatility. As a leading ",
					{ text: "WordPress Development firm", href: "/wordpress-development-services/" },
					", we design real estate websites that make the most of WP.",
				],
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Real Estate Marketing",
				body: "We don’t stop with designing real estate websites. Instead, we also create a tailored digital marketing strategy to boost your online visibility, improve page rankings, increase website traffic, attract your target audience across all popular social media channels and more.",
			},
		],
	},

	cta: {
		text: "Dominate the Real Estate Market With a Modern, User-Friendly Website – Let’s Get Started!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Real Estate Website Design",
		title: "FAQs",
		items: [
			{
				question: "How much time does it take to complete a real estate website?",
				answerHtml: "<p>The tenure may vary according to the requirement. However, our team can provide you with a rough estimate of the timeline that your project might take. A real estate website design with a simple structure can be built within a week and on the other hand, a complex one will take months.</p><p>To gain more insights on this feel free to reach out to us for a consultation.</p>",
			},
			{
				question: "Can you build a real estate website according to my needs?",
				answer: "Yes, we can. We will understand the necessity and will create a roadmap to move way forward. The solution will be goal-oriented for the best results.",
			},
			{
				question: "What type of resources will I have for my project?",
				answer: "Client testimonials have always indicated us as the best real estate website design agency out there. Our approach to the project is always been systematic and strategic. A thorough roadmap would be made before we jump off to execution; according to that, we have the industry specialist in the team to take over. Whether it’s developers, designers, or a team of marketers we ensure the quality of work.",
			},
			{
				question: "What makes us the best real estate web design agency?",
				answer: "Our team of developers and designers is very passionate about every project. This could be one of the prominent reasons behind building our result-oriented mindset. Here are some more aspects that make us unique:",
				answerList: [
					[{ bold: "Experience Spectrum:" }, " Years ago, before exploring our niche, we were a bookstore web agency and also a restaurant website design agency. This wide range of experience has unveiled many layers of traffic driving and consumer behavior in real estate."],
					[{ bold: "Data-driven strategy:" }, " Our approach to a particular project is always based on data and analytics. This way the optimization of the website is ensured."],
				],
			},
			{
				question: "Do you provide maintenance and support to the project?",
				answer: "Yes, we do provide support and maintenance. We are always there, whether you want to introduce a new feature or change the existing source code.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default RealEstateWebDesign;
