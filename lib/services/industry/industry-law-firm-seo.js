const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const LawFirmSeo = {
	slug: "law-firm-seo-services",
	pageTitle: "Law Firm SEO Service Company | Attorney, Lawyer SEO Agency",
	metaDescription: "Searching for a top Law Firm SEO company in the USA? Icecube Digital offers expert attorney SEO services to boost your firm’s online visibility. Contact us today!",

	banner: {
		heading: "Law Firm SEO Agency",
		paragraphs: [
			"Let’s not forget that launching a well-designed website is work done partially. In this global world, law firms need to have a digital face but it is of no use if it is not visited by the target audience. And a law firm SEO agency has a grand role there. They help you to make your website listed on the first page of the Google search results. At Icecube Digital, our team of expert SEO professionals forms a customized strategy for attorneys and helps them build trust in the market along with advertising their services in the right way.",
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
		subtitle: [
			"Welcome to our Case Studies section. Here, we provide real-life examples of how we conquered challenges and achieved goals for other different businesses.",
			"These pages show how our innovative approach to offering SEO services has yielded tangible results. For instance, check out how we used profit-driven keywords for various companies and then optimized their Google My Business page so it could be found by potential clients who were searching for them on Google. Our case studies are stunningly simple examples of strategic commitment toward driving growth through SEO.",
		],
		postIds: [56497, 56495, 56493],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "SEO Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	plainText: {
		eyebrow: "Professional Law Firm",
		title: "SEO Services",
		contentAlign: "center",
		paragraphs: [
			"Days, where people keep turning the yellow pages for hiring a lawyer for their legal assistance, are gone; now people prefer to do an online search to find what they need for getting legal advice or legal representation.",
			"Law firm SEO services provided by Icecube Digital will help your law firm agency’s presence reach more potential customers and drive more traffic to your law website. Our vastly experienced team of SEO professionals will work with your law agency and determine the target/ideal clients for your business and explore the possible ways to achieve your business goals.",
			"Hiring our lawyer SEO services will reduce your competition significantly, and that will surely give you a competitive edge over others. We drive interested prospects to your law firm website and convert them into clients.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	checkList: {
		eyebrow: "Icecube Digital The Best Law Firm",
		title: "SEO Company",
		subtitle: [
			"Icecube Digital is a professional SEO agency highly passionate about building and promoting digital products. Unlike other developers and marketers, we are different; our team is extremely creative, technically sound, and vastly experienced.",
			"We always stay ahead of others by utilizing cutting-edge web technologies and deliver great results by handling everything with 100% efficiency.",
			"Here are a few things your law firm can gain by hiring a professional lawyer SEO service provider from Icecube Digital.",
		],
		benefitsLeft: [
			"Industry Experienced SEO Experts",
			"Result-driven SEO Campaign",
			"Effective SEO Strategy",
			"Full Control On Leads Through In-depth Keyword Research",
			"In-House SEO Specialists",
		],
		benefitsRight: [
			"Increases your business establishment in the market",
			"High relevant traffic for long term",
			"Strong SEO tactics to influx your prospective clients",
			"Increases your site conversion rate & Law Firm’s ROI",
		],
	},

	imageTextBlocks: [
		{
			eyebrow: "What",
			title: "We Do",
			image: "/assets/photos/law-firm-what-we-do.svg",
			imageAlt: "Overview of the law firm SEO services Icecube Digital provides",
			imagePosition: "right",
			paragraphs: [
				[
					"Icecube Digital are the experts at diverting people who tend to search and find law firm SEO service providers for their legal assistance towards our client’s website. Our ",
					{ text: "expert SEO professional", href: "/seo-search-engine-optimization/" },
					" creates unique strategies, techniques, and tactics that will attract more target audiences towards our client’s law firm websites.",
				],
				"Here are the services we provide under SEO for Lawyers, which you can’t see often among the array of SEO service providers for law firms.",
			],
		},
		{
			contentTitle: "Keyword Research",
			image: "/assets/photos/law-firm-keyword-research.svg",
			imageAlt: "Keyword research for law firm SEO using tools like Google Trends and Ahrefs",
			paragraphs: [
				[
					"Well, under this, our expert ",
					{ bold: "law firm SEO" },
					" professional does necessary research and identifies the phrases used as the queries by the users in search engines to find law firms. Icecube Digital experts use advanced tools to predict the search volume impressions along with its precision. We carry out the keyword research operation as a part of science and part of art through a conducted survey.",
				],
				"Here are a few of the tools we have expertise in handling.",
			],
			checklistItems: [
				"Google Trends",
				"SpyFu",
				"Keyword Planner",
				"Google Search Console",
				"SEMrush",
				"Ahrefs",
			],
		},
		{
			contentTitle: "Site Audit",
			image: "/assets/photos/law-firm-site-audit.svg",
			imageAlt: "SEO site audit for a law firm website",
			imagePosition: "right",
			paragraphs: [
				"Site auditing is one of the primary SEO services we offer to our Law Firm clients. Our experts are acquainted with the legal business and vastly experienced to analyze the prospects which you target. We are a team of professionals fully determined and flexible to assist you in all kinds to achieve your business goals.",
				"Our SEO experts will carry out a site audit, to understand its current status and performance on the search engine results page. Also, we do map your content and study your keyword positioning status. All these audits will be useful in understanding your site’s strengths & weaknesses and to develop a strong SEO strategy.",
			],
		},
		{
			contentTitle: "Content Marketing",
			image: "/assets/photos/law-firm-content-marketing.svg",
			imageAlt: "Content marketing strategy for a law firm website",
			paragraphs: [
				"In the virtual world, especially in websites, everything needs to be filled with either content or in form of an image. Content marketing is not about writing attractive to express the firm’s ability, instead, it should drive the potential people from various sources.",
				[
					"To achieve that, we follow law firm content archetypes for filling all pages of ",
					{ bold: "law firm SEO Company’s website" },
					" and also on the blogs. We create content on trending topic clusters and publish those on engaging platforms where target audiences visit a lot. More importantly, we prefer publishing long-form content which will be pretty useful for the readers.",
				],
			],
		},
		{
			contentTitle: "On-site SEO For Lawyers",
			image: "/assets/photos/law-firm-on-site-seo.svg",
			imageAlt: "On-site (on-page) SEO optimization for a lawyer website",
			imagePosition: "right",
			paragraphs: [
				"On-site SEO for lawyers also refers to On-page services for attorney SEO. In this part, our experts will explore the possible ways to optimize site structure, title tags, speed up site loading time, proper utilization of internal links, link distribution, optimizing website images, and so on.",
				"Our law firm SEO professionals are highly talented and stay abreast of those technology stacks along with the latest updates from Google.",
			],
		},
		{
			contentTitle: "Local SEO For Lawyers",
			image: "/assets/photos/law-firm-local-seo.svg",
			imageAlt: "Local SEO for law firms and attorneys targeting nearby clients",
			paragraphs: [
				[
					"At Icecube Digital, we follow a narrow set of strategies to determine the local ranking factors of the law ",
					{ text: "SEO firms near you", href: "/local-seo-services/" },
					". Our experts will explore the possible ways to optimize the Google My Business profile better than the competitors, enhance the business presence among the target audience, and create & submit content on citations & directories for gaining maximum impact.",
				],
			],
		},
		{
			contentTitle: "SEO For DUI Attorneys",
			image: "/assets/photos/law-firm-dui-attorney-seo.svg",
			imageAlt: "Link building and SEO for DUI attorneys",
			imagePosition: "right",
			paragraphs: [
				"We are the best at delivering a high level of attorney SEO services by carrying sophisticated link-building procedures with crystal clear strategies. Our SEO for DUI attorneys is creative and 100% working.",
				"We build links by posting Guest postings, posting on lawyer-specific directories, building organic links on Reddit, posting Infographics with embedded links, building links via Testimonials/reviews/HARO (Help A Reporter Out), and so on.",
			],
		},
		{
			contentTitle: "Measuring SEO Success",
			image: "/assets/photos/law-firm-measuring-seo-success.svg",
			imageAlt: "Measuring law firm SEO success with performance reports",
			paragraphs: [
				"Finally, we measure the success of our lawyer SEO services by delivering reports on the traction of our client’s website optimization performance, link acquisition strategies, keyword ranking along search volume, and give you full details on how to measure the conversion ratio.",
				[
					"In this way, our ",
					{ bold: "law firm SEO" },
					" agency clientele can easily predict and improve their business ROI.",
				],
			],
		},
	],

	plainTextSecondary: {
		eyebrow: "Why Hiring Our SEO Service For Lawyers",
		title: "Is So Important?",
		contentAlign: "center",
		paragraphs: [
			"If you own a law firm and are looking to boost its growth by attracting target customers, then you should hire our professional who is capable of doing SEO for DUI attorneys. We, Icecube Digital, are the masters when it comes to delivering next-level law firm SEO services. If your website is not finding the top position on Google’s search results page, the chances of potential customers finding and engaging with your law firm website/company become very low.",
			"We are in the digital era, where people tend to hire lawyers/attorneys online. According to a recent survey conducted in the year 2020, almost 25% of legal consumers hire their lawyers online. And the numbers will grow rapidly in upcoming years.",
			"If you are running a law firm, then it’s the right time to invest your money in a law firm SEO agency. We are the best at offering essential components for running a successful marketing strategy for law firms.",
			"Feel free to contact our customer support team and fix an appointment for boosting your law firm agency’s ROI.",
			"We are eager to work for you!",
		],
	},

	faq: {
		eyebrow: "Law Firm SEO",
		title: "FAQs",
		items: [
			{
				question: "What is a law firm SEO?",
				answerHtml: "<p>A law firm’s website tends to be visible and reachable to customers using SEO. It is the strategic technique and optimization to improve the law firm’s presence on platforms like Google, Bing, etc.</p><p>The relevant inclusion of these techniques gains trust among the Search Engine Results Pages (SERPs). When the platforms confirm the credibility of the content, the website becomes more accessible in organic search.</p>",
			},
			{
				question: "What services do you offer as a law firm SEO agency?",
				answerHtml: "<p>Our law firm SEO services include a wide range of offerings with a unified goal to improve the current positioning of your firm. Our legal SEO experts will conduct a full SEO audit to determine the red flags of the strategy and probe an immediate action on it.</p><p>Niche research, link building, SEO management, and expert consulting are some of the best help we bring to the table for better ROI.</p>",
			},
			{
				question: "How long does it take to see the results of SEO?",
				answerHtml: "<p>The positive, significant results can be observed within a duration of 2 to 4 months. However, our daily communications and weekly reports will reflect the continuous and meaningful progress.</p><p>The timeframe of success depends on the goals and challenges of the law firm. You can feel free to reach out to us to know more about it.</p>",
			},
			{
				question: "Is law firm SEO worth investing in?",
				answerHtml: "<p>Law firm SEO investment is specifically to enhance digital presence and achieve long-term success. You can stand above the competition and generate more revenue by attracting new customers.</p><p>Having your online presence is the most essential factor in this rapidly changing tech world.</p>",
			},
			{
				question: "Is law firm SEO a proven technique to grow business?",
				answer: "Absolutely, it is a proven way to boost organic traffic by improving the website’s visibility.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default LawFirmSeo;
