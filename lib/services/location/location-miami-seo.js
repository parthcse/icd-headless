const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const MiamiSeo = {
	slug: "miami-seo-company",
	pageTitle: "Miami SEO Company | Expert SEO Services Near You",
	metaDescription: "Looking for a Miami SEO company that can drive traffic and revenue? Our Miami SEO experts provide result driven SEO services to help achieve your business goals.",

	banner: {
		heading: "Miami SEO Company",
		paragraphs: [
			"Build your brand with a Miami SEO company. Get more traffic, leads, and generate more revenue for your business with positive SEO results. We offer effective SEO strategies that acquire more customers and a higher rank on search engines. Make a room for yourself in the industry and showcase your business forefront, marking your company to be a leading successful business.",
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
			"Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [56589, 56585, 56582],
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
		eyebrow: "Strengthen Your Brand With Miami",
		title: "SEO Experts Near You",
		contentAlign: "center",
		paragraphs: [
			"Do you want to reach out to your target audience? Do you want to expand your business to get visible to more customers? Are you looking for adequate SEO results? Your all-in-one solution is with our Miami SEO experts who will turn your business into a successful growing business.",
			[
				"Our Miami SEO agency has a team of experts who have years of experience in this field, know how to make out-of-box strategies, and can make things happen. The ",
				{ text: "SEO professionals", href: "/seo-search-engine-optimization/" },
				" have in-depth knowledge about organic traffic, sales, and generating leads. Upscale your business productivity while adding business value to it. The experts define and set your business goal for long-term success.",
			],
			"So, what are you waiting for? Get in touch with our SEO experts who help you make your business a brand.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	infoBox: {
		eyebrow: "Get SEO Done Right With #1 Miami",
		title: "SEO Agency",
		columns: 2,
		items: [
			{
				title: "Complete SEO Setup",
				body: "SEO is not limited to one or two hours of work; it has numerous elements that need to be done to get into search engine results in the top ranking. Nevertheless, everything is connected to one another; so you require a complete SEO setup that helps you achieve your business goal. The setup will build authority and create a domain for your business.",
			},
			{
				title: "Proven, Measurable Results",
				body: "Do not just fall into words, we have delivered measurable results that reached business to the top. Our team of SEO consultants understands your needs and creates SEO strategies according to it. The bottom line is to generate efficient organic traffic and conversations that produce desired results. The result-proven SEO strategies will fall business into the right place.",
			},
			{
				title: "Unparalleled Transparency",
				body: "Transparency and communication is the key element of any business. And that’s the reason, we’ll keep up with every single update and ensure that you know what’s going on. Our Miami SEO team of experts will offer reports where generated leads, conversations, and all other actions are mentioned. Moreover, feedback, concerns, and suggestions are always welcome and solved.",
			},
			{
				title: "Cost-Effective Marketing",
				body: "SEO is an essential part of digital marketing. Our company’s target is to provide you with cost-effective marketing that helps you to reach out to a wider audience within a short period. Our proven SEO strategies are formed to help out your business reach the maximum target audience and acquire more customers from it. Let the world know about your products with our Miami SEO services.",
			},
		],
	},

	infoBoxSecondary: {
		eyebrow: "Our Miami SEO",
		title: "Services Include",
		items: [
			{
				title: "Website SEO Audit",
				body: "Our Miami SEO experts check the website’s relevance and website performance thoroughly along with user behavior. With website SEO audits, our professionals analyze and identify areas of improvement. The website pages are highly optimized to rank top on search engines.",
			},
			{
				title: "Onpage SEO",
				body: "Leverage and optimize your content for search engines and wider audiences. Our Miami SEO professionals conduct in-depth research, site audits, meta title, header, and meta descriptions. We amend content with internal linking and make your website relevant, increasing traffic with higher returns.",
			},
			{
				title: "Complete Technical SEO",
				body: "A website is SEO-friendly when factors like backlinks, image optimization, competitor analysis, and site audit are in it. Our team of Miami SEO consultants ensures good site speed and finds issues that help clients to witness effective results.",
			},
			{
				title: "Link Building",
				body: "Search engines know domain language, thus we provide acquiring links from high-authority websites. The backlinks improve search engine results and inbound quality links to the webpage. It will boost the page or website ranking.",
			},
			{
				title: "Content Marketing",
				body: [
					"Words connect businesses and customers, and content writing is crucial for acquiring audience attention. High-quality content narrates your product and reaches your audience effectively. Our Miami SEO experts excel at conveying your business services with ",
					{ text: "local search optimization services", href: "/local-seo-services/" },
					".",
				],
			},
			{
				title: "E-commerce SEO",
				body: "Make your e-commerce store more visible in the search engine result pages (SERPs) with our dynamic SEO strategies. We ensure to display your product to potential customers by analyzing keyword search volume, user intent, and cost per conversion.",
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Why Choose Us As Your Miami",
		title: "SEO Company",
		contentAlign: "center",
		paragraphs: [
			"We are not your usual SEO agency; we believe in delivering creative and technical marketing. Miami SEO agency ensures to build a brand and optimize your websites or pages into search engine page results.",
			"Hiring Miami SEO consultants will give you exposure to standing out among your competitors. Bag more opportunities and business deals with proven results.",
			"Let’s reach out to your goals and run successful SEO campaigns!",
		],
	},

	imageText: {
		eyebrow: "Achieve Best Result With Miami",
		title: "SEO Consultant",
		image: "/assets/photos/miami-seo-consultant.png",
		imageAlt: "",
		paragraphs: [
			"As a leading travel agency based in the USA, its main goal was to boost organic visibility and conversions. Over four months, organic traffic climbed by 200% with an increase of 100% in Conversations.",
			"Travel By Bob came to Icecube Digital to drive more organic traffic to their site. They wanted to see more stability with their keyword rankings as well as launch a successful Facebook remarketing campaign. Aligning with their marketing objectives, our Miami SEO Consultants have begun a quality link-building process, blogs, fixed-mobile usability issues, and have set up the Facebook remarketing campaign. In just 6 months, the site is receiving 200% more organic sessions and double conversion leads.",
		],
	},

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	faq: {
		eyebrow: "Miami SEO",
		title: "FAQs",
		items: [
			{
				question: "Will My Business be Successful After Hiring a Miami SEO Company?",
				answer: "Yes, we have a team of SEO experts who have in-depth knowledge and experience in search engine optimization. We understand our customer’s requirements and prepare and implement strategies that reach out to potential audiences in a shorter duration.",
			},
			{
				question: "Why Should I Hire Miami SEO Services?",
				answer: "We as a Miami SEO agency believe in delivering quality and results at a successful rate. We have a team of professionals who know inside and out about search engines that will solve all your queries anytime.",
			},
			{
				question: "How Much Time Does It Take?",
				answer: "It completely depends on your project requirements. We will put all our efforts to rank better on search engines in the shortest duration of time. However, patience and consistency are essential for SEO achievement.",
			},
			{
				question: "How Much Does a Miami SEO Company Charge for the Business?",
				answer: "It depends on your search engine requirements. Therefore, to know the precise charge; contact our team.",
			},
			{
				question: "Is PPC Better than SEO?",
				answer: "We can’t say that one service is better than another. But SEO is quite slow than PPC. SEO takes months to give you results once you optimize your website completely through Miami SEO services. However, PPC gives leads immediately to your website.",
			},
			{
				question: "How Can I Track the Progress of My SEO Campaign?",
				answer: "If you have hired Miami SEO experts from any leading SEO company, then the experts will prepare a complete report to share with you so that you can track the progress. Not only this, you can use the Google Search Console tool that helps monitor the website’s traffic and performance.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default MiamiSeo;
