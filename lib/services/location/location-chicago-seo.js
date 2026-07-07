const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const ChicagoSeoCompany = {
	slug: "chicago-seo-company",
	pageTitle: "Chicago SEO Company | Expert SEO Services Near You",
	metaDescription: "Looking for a Chicago SEO company that can drive traffic and conversions? Our Chicago SEO experts provide ROI-focused SEO services to help achieve your business goals.",

	banner: {
		heading: "Trusted Chicago SEO Company",
		paragraphs: [
			"Icecube Digital is a leading SEO Company in Chicago that ensures the online visibility of your business. Get organic traffic, better reach, and the top position in search engine results with our range of SEO services. So, what are you waiting for? Connect with a Chicago SEO consultant and get the best consultations.",
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
		eyebrow: "Strengthen Your Brand With Chicago",
		title: "SEO Experts",
		contentAlign: "center",
		paragraphs: [
			"Do you want to make your brands visible to a larger audience? Do you want your brand to be vocal? You are just a consultation away from Chicago SEO consultants who have years of experience in making such things happen. That’s the reason we have an effective client retention ratio.",
			"Icecube Digital has a team of SEO strategists who know your target audience and make your website visible to them. Besides, these SEO professionals are also experts at generating organic traffic, sales, and boosting revenue. By availing of search engine optimization services in Chicago, your brand would be in everyone’s mouth.",
			"So, don’t wait and just get in touch with SEO experts to share your requirements.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	leftIconBox: {
		eyebrow: "Bring Success To Your Online Marketing With Chicago",
		title: "SEO Agency",
		subtitle: [
			"Since lead generation is an ultimate objective, hiring a Chicago SEO expert would be one of your best decisions. But, along with lead generation, what else could this bring to the table?",
		],
		items: [
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Complete SEO Setup",
				body: "SEO is not about one or two tasks; it consists of multiple factors to accommodate to get better rankings. Besides, all the elements are incomplete without each other, so you will need a complete SEO package to dominate your competitors and build authority. And that’s what you can expect from us as we are a trusted Chicago SEO company. You don’t need to knock on other doors for an all-in-one SEO package for you.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Proven, Measurable Results",
				body: [
					"Count on our ",
					{ text: "SEO services", href: "/seo-search-engine-optimization/" },
					" to ramp up your top and bottom line. Our team of Chicago SEO consultants would understand your requirements and implement the right SEO strategy effectively. Doing so has produced desired results, such as a mass jump in organic traffic and conversions.",
				],
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Unparalleled Transparency",
				body: "When it’s your business, you should be well-versed with what’s going on, and that’s why we report daily, mentioning all the activities. In addition, our Chicago SEO expert ensures they note every single action taken, every single lead generated and converted, and every single click. Not only this, but our Chicago consultants also wholeheartedly welcome feedback, suggestions, and concerns.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Cost-Effective Marketing",
				body: [
					"SEO is one of the cost-effective marketing strategies to reach out to a mass audience within a short period. With the help of our ",
					{ text: "SEO service near you", href: "/local-seo-services/" },
					", your products will be visible to audiences seeking them.",
				],
			},
		],
	},

	cta: {
		text: "Still Not Sure What Benefits Your Website Will Get From Chicago SEO Experts?",
		ctaLabel: "Contact us today",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Our Chicago SEO",
		title: "Services Include",
		items: [
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Website SEO Audit",
				body: "Our Chicago SEO professionals meticulously check your website performance and user behavior. Doing so helps our SEO auditors know which areas require what improvements. Besides, it even ensures proper optimization of potential pages so that those can generate massive traffic.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "On-page SEO",
				body: "Our search engine optimization adroit developers run campaigns, conducts detailed analysis, and check for meta title, description, and header. The team also brainstorms and implements effective strategies to bring in a good amount of traffic. With On-page SEO, you can expect an increase in the click-through rate, a surge in organic traffic/leads, and high returns.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Complete Technical SEO",
				body: "Do you know what factors Google considers for better ranking? These are site audit, image optimization, competitor analysis, and checking on backlink and site speed. Improving these areas not only boosts the website’s performance but also drives sales and spikes up revenue.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Link Building",
				body: "Domain authority is a must to rank your website better on search engine result pages. And one of the factors that contribute to an increase in domain authority is acquiring links from other high-authority websites. This is called backlinks in the SEO space.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Content writing is also one of the practices to gain the audience’s attention. The internet runs through the content, and what’s better than advertising your services/products through content writing? We have a team of technical and non-technical writers who write crisp and compelling content that convinces your audience to stop and avail of your services.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Ecommerce SEO",
				body: [
					"If you have an E-commerce store, driving traffic and boosting sales are crucial. Our Chicago search engine optimization experts specialize in e-commerce SEO, conducting competitive analyses and optimizations. The SEO expert at ",
					{ text: "Magento SEO agency", href: "/magento-seo-services/" },
					" ensures your website stands out uniquely amidst competitors.",
				],
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Us As Your",
		title: "Chicago SEO Company?",
		subtitle: [
			"Since the world has accepted digitalization, the importance of SEO and online presence has been made mandatory. If you are not online, you are not in line with the business or industry’s requirements.",
			"Despite having an in-house SEO team, you still should explore the untouched side of search engine optimization.",
			"Hiring our SEO consultants would unveil new space for optimizing your website.",
			"Therefore, don’t wait, and let’s get started to bag more deals and turn your business into the most profitable among your competitors.",
			"Here are some reasons to count on us for SEO requirements:",
		],
		benefitsLeft: [
			"14+ Years of Experience in the Industry",
			"A Dedicated and Skilled Team of SEO Experts",
			"Transparent Communication",
		],
		benefitsRight: [
			"Single Point of Contact to Discuss Requirements",
			"Capable of Handling Complex Project Requirements",
		],
	},

	imageText: {
		eyebrow: "Achieve Best Result With Chicago",
		title: "SEO Consultant",
		image: "/assets/photos/chicago-seo-consultant.png",
		imageAlt: "Achieve Best Result With Chicago SEO Consultant",
		paragraphs: [
			"As a leading travel agency based in the USA, its main goal was to boost organic visibility and conversions. Over four months, organic traffic climbed by 200% with an increase of 100% in Conversations.",
			"Travel By Bob came to Icecube Digital to drive more organic traffic to their site. They wanted to see more stability with their keyword rankings as well as launch a successful Facebook remarketing campaign. Aligning with their marketing objectives, our Chicago SEO Consultants have begun a quality link-building process, blogs, fixed-mobile usability issues, and have set up the Facebook remarketing campaign. In just 6 months, the site is receiving 200% more organic sessions and double conversion leads.",
		],
	},

	ctaSecondary: {
		text: "Tell Us About Your SEO Service Requirements And Get A Free Quote To Hire Experts Today!",
		ctaLabel: "Get in touch now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	faq: {
		eyebrow: "Chicago SEO",
		title: "FAQs",
		items: [
			{
				question: "Will My Business Grow After Hiring You As A Chicago SEO Company?",
				answer: "Yes, we have a team of SEO professionals who know in and out about search engine optimization. We will understand your target audience and strategically implement SEO services to make your business stand ahead of its competition.",
			},
			{
				question: "What SEO Services Do You Provide?",
				answer: "Icecube Digital is well-versed in modern-day digital requirements. That’s why we have subject matter experts who have a modern approach to building your brand and getting it recognized. Talking about the list of SEO services, the Chicago SEO agency offers content writing, local and national SEO, technical SEO, Ecommerce SEO, link building, on-page SEO, and website audit.",
			},
			{
				question: "Why Should I Hire A Chicago SEO Agency?",
				answer: "The answer to this question is crystal clear. You should hire a Chicago SEO agency because you need someone who understands your requirements and delivers the best possible solution. Hiring us as your partner will make you feel that you are in safe hands.",
			},
			{
				question: "How Much Do Chicago SEO Services Cost For My Business?",
				answer: "To provide the accurate cost for your business website, we need to communicate in detail to comprehend your business, its needs, and the services you need. After understanding all these things, we will give an exact cost for the project.",
			},
			{
				question: "How Much Time Does Chicago SEO Take?",
				answer: "This really depends on your approach and what you are trying to achieve with Chicago SEO services. But with that being said, there is no overnight way to rank better on search engines. If by results you mean a considerable increase in website traffic and sales, this would most probably need at least 6 months, So consistent efforts and patience is most important for SEO success.",
			},
			{
				question: "How Will You Measure The Success Of Your Chicago SEO Campaigns?",
				answer: "To measure the success of your Chicago SEO campaign, we will consider several website performance metrics, including clicks, positioning of keywords, impressions, sessions, overall traffic, and conversion on your website.",
			},
			{
				question: "Which SEO Tools Do You Use?",
				answer: "Being one of the leading Chicago SEO Agency, we make use of various tools for different purposes. We use different paid tools from keyword research to optimizing content and preparing reports to understand your website’s health score that we can discuss with you on call during the consultation.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default ChicagoSeoCompany;
