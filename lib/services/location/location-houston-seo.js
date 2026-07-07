const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const HoustonSeo = {
	slug: "houston-seo-company",
	pageTitle: "Houston SEO Services Company | Houston SEO Consultant, Experts",
	metaDescription: "Looking for a Houston SEO services company to get traffic and revenue? Our Houston SEO experts provide SEO solutions that help achieve your business goals.",

	banner: {
		heading: "A Trusted Houston SEO Company",
		paragraphs: [
			"What if we tell you that you can make your business popular, double the traffic, and increase profit and overall revenue? Wonderful, right? We at Icecube Digital are dedicated to delivering a comprehensive range of SEO services in Houston. With a team of skilled SEO experts, we know how to take your business to new heights. Have a project in mind? So, let’s connect and decide the best possible solution!",
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
		eyebrow: "Ready To Strengthen Your Brand With",
		title: "Houston SEO Firm?",
		contentAlign: "center",
		paragraphs: [
			"Imagine a scenario where your business website is ranking on the top of the first page of a search engine, and you are getting huge traffic that is becoming your potential customers. You are doubling the overall sales and profit of your business. Sounds unbelievable? Well, it should not be.",
			"Icecube Digital is the leading SEO company in Houston, serving complete SEO services, including Local SEO, ON-page SEO, Off-page SEO, Content planning & writing, and more. Having SEO experts who have years of experience and expertise to meet your SEO needs. Now, get yourself ready to get new leads and boost ROI through advanced SEO solutions.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	leftIconBox: {
		eyebrow: "We Are The Leading",
		title: "Houston SEO Agency",
		subtitle: "Ready to touch the top of Google search results and generate new leads? Hiring us as your Houston SEO services partner will be your best decision. Here is a comprehensive range of SEO services to choose from:",
		items: [
			{
				icon: "/assets/icons/gear.svg",
				title: "Complete SEO Setup",
				body: "Do you have a dream to rank at the top of your competitors? Do you want to double sales and increase overall profit? Then, you need a complete SEO package to take your business to new heights. With 14+ years of experience in the industry, we know how your business will get wings to touch the top rankings. Besides this, we have a team of professional Houston SEO experts to support you through your thin and thick.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Proven and Measurable Results",
				body: [
					"Our advanced ",
					{ text: "quality SEO services", href: "/seo-search-engine-optimization/" },
					" deliver proven and measurable results to your business irrespective of the type and size. First, we comprehend where your website stands and compare it with your competitors to deliver direct insights and results. So, let our team handle your requirements and provide measurable results.",
				],
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Unparalleled Transparency",
				body: "We at Icecube Digital believe in complete transparency, which is why we will show you precisely what we are doing and how we are doing it. We will keep you updated through monthly, quarterly, and yearly reports so that you stay in the loop. Moreover, we will assign one single point of contact to give updates and the status of your campaigns. So, talk to our experts now and get transparent services.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Cost-Effective Marketing",
				body: "What if you have been running your business for a long time but still not getting enough customers and traffic? The solution to this problem is SEO, which is one of the best cost-effective marketing strategies. Quality SEO services will help you market your business to your correct target audience and get desired results in a stipulated period.",
			},
		],
	},

	cta: {
		text: "Still Not Sure What Benefits Your Website Will Get From Houston SEO Experts?",
		ctaLabel: "Contact us today!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Affordable Houston SEO",
		title: "Services To Avail",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Website SEO Audit",
				body: [
					"We provide a website SEO audit service that includes proven insights, strategies, and tricks to make your website perform better than your competitors. We will analyze your business website, understand the requirements, and suggest the best possible auditing solutions, ensuring a comprehensive ",
					{ text: "local search optimization service", href: "/local-seo-services/" },
					".",
				],
			},
			{
				icon: "/assets/icons/note.svg",
				title: "On-Page SEO",
				body: "With top-notch quality on-page SEO service, you can maintain your website position on Google and other top search engines. With constant optimization, you will be assured that your site runs efficiently and smoothly.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Complete Technical SEO",
				body: "Compared to other SEO services, technical SEO plays a significant role in search engine rankings. Icecube Digital, along with the SEO team, helps different businesses to know technical weaknesses in the site like non-responsive, page loading speed, graphics, etc. With better technical SEO services, deliver a user-friendly experience to your website visitors and turn them into paid customers.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Link Building",
				body: "How about getting quality backlinks from the top most widespread and trusted websites? Wonderful? Well, we will help you to get quality backlinks from the top websites. Here, we will handle content development, and outreach to websites and images, and report back to you for the procured links.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Content is the king. Very old, but the golden saying. Content is the best strategy for your website. You can publish top-quality content to your website and help your readers get answers to their problems. With the help of technical and non-technical writers, we are dedicated to providing premium content.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Ecommerce SEO",
				body: "No matter what size and type of eCommerce website you run, we can deliver eCommerce SEO services for your website to increase sales and profit. With top-quality images, content, and the proper internal linking structure, we will help you to encourage browsing and build a memorable brand.",
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Us As Your Houston",
		title: "SEO Company?",
		subtitle: "No one knows better than us when it comes to delivering quality SEO services in Houston. With the required knowledge and experience, our SEO professionals are dedicated to sufficing your website needs.",
		benefitsLeft: [
			"Result-Oriented SEO Experts to Handle Your Needs",
			"14+ Years of Experience in the Industry",
			"Transparent Communication and Results",
		],
		benefitsRight: [
			"On-Time Delivery of Projects and Updates",
			"Non-Disclosure Agreement",
			"24/7 Technical Support",
		],
	},

	imageText: {
		eyebrow: "Best Results with Our",
		title: "Houston SEO Solutions",
		image: "/assets/photos/houston-seo-solutions.png",
		imageAlt: "Best results with our Houston SEO solutions",
		paragraphs: [
			"With organic traffic at an all-time low, it was critical to turn things around. We regained the rankings and increased them to new all-time highs, generating more than 160% organic traffic and 67% organic revenue in 2022.",
			"CCC – A leading medical cannabis healthcare center came to us to recover their organic website traffic and revenue through the power of SEO. Some of the tasks we have performed such as removing thin content, toxic backlink removal, creating PR, writing informative copy with LSI keywords, website speed optimization, and fixing 404 errors. In 7 months, when Google rolled out another algorithm update, this time website got a nice recovery with continuous SEO efforts. Our Houston SEO experts grew organic traffic by more than 160% and 67% in revenue.",
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
		eyebrow: "Houston SEO",
		title: "FAQs",
		items: [
			{
				question: "Why Should I Hire A Houston SEO Agency For My Business Website?",
				answer: "The answer to this question is crystal clear. You should hire a Houston SEO agency because you need someone who understands your requirements and delivers the best possible solution. Hiring us as your partner will make you feel that you are in safe hands.",
			},
			{
				question: "Will I Get Daily SEO Updates And Reports On My Project?",
				answer: "Yes, we will assign one dedicated project manager for your project, who will update and share reports on the project. In case you have any confusion and requirements to discuss, you can schedule a call without any hassle.",
			},
			{
				question: "How Much Do SEO Services Cost For My Business?",
				answer: "To provide the accurate cost for your business website, we need to communicate in detail to comprehend your business, its needs, and the Houston SEO solutions you need. After understanding all these things, we will offer the best price for the project.",
			},
			{
				question: "How Long Does Houston SEO Take To Work?",
				answer: "It depends on your approach and what you are trying to achieve with SEO. But with that being said, know that there is no overnight way to rank better on search engines. If by results you mean a considerable increase in website traffic and sales, this would most probably need at least 6 months, So consistent efforts and patience is most important for success in SEO.",
			},
			{
				question: "How To Get Started With My Website SEO Project?",
				answer: "You can contact our Houston SEO consultant for your SEO requirements. One of our executives will schedule to get on a call with you. Our local SEO specialist will conduct a thorough SEO audit for your eCommerce store to find out areas for improvement. From there we will assign the best resources for your SEO project and get started.",
			},
			{
				question: "How Will You Measure The Success Of Your Houston SEO Campaigns?",
				answer: "To measure the success of your SEO project, we will consider a number of website performance metrics, including clicks, positioning of keywords, impressions, sessions, overall traffic, and conversion on your website.",
			},
			{
				question: "What Are Local Rankings Or Local SEO?",
				answer: "Local ranking for websites is the process of ranking your business higher on local searches done in Houston. Google uses a different algorithm for local search queries. Apart from the factors, considered for a national search query, additional factors like local citations in 3rd party directories, quantity, quality of online reviews, etc. are also considered to rank a business in local SEO.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default HoustonSeo;
