const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const SanFranciscoSeo = {
	slug: "san-francisco-seo-company",
	pageTitle: "San Francisco SEO Company | Expert SEO Services Near You",
	metaDescription: "Icecube Digital is an award-winning San Francisco SEO company, offering complete SEO services tailored to your business needs. Contact our local SEO Experts to develop successful marketing campaigns.",

	banner: {
		heading: "Trusted San Francisco SEO Company",
		paragraphs: [
			"Do you have a website for your business but not getting enough traffic, conversion, and leads? Then, you need to hire San Francisco SEO services for your business that will help you to rank your website on the top results, get expected traffic & visitors, generate leads, and have good conversations. When hiring SEO services, all you need to do is look at the San Francisco SEO company with a decade of industry experience. The company knows the ins and outs of SEO, thus, delivering an array of services. Have a project to discuss?",
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
		eyebrow: "Professional San Francisco SEO Services To",
		title: "Serve Your Needs",
		contentAlign: "center",
		paragraphs: [
			[
				"With a decade of experience in the SEO industry, San Francisco SEO Agency has a team of qualified and ",
				{ text: "skilled SEO experts", href: "/hire-seo-experts/" },
				", strategists, consultants, and professionals. We deliver a range of SEO services to small, medium, and enterprise-level companies worldwide. It doesn’t matter what type and size of business website you are running; we know how to make it rank at the top of the search results and generate your desired revenue.",
			],
			"Our SEO experts will first comprehend your business, target audience, and goal. Then, create a strategy to beat your competitors and ensure your company grows exponentially. So, if you have got a business website that you want to make successful, then connect with one of our SEO specialists and get the best possible solution today.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	leftIconBox: {
		eyebrow: "Get SEO Done Right With #1 San Francisco SEO",
		title: "Agency Near You",
		items: [
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Become Visible Online",
				body: "What if your business website is not visible online? You will lose your visitors and potential customers to those businesses ranking on the top search results. Gradually, you will lose your entire market and reputation. Therefore, San Francisco SEO agency is here to serve you with different SEO services for your business to make it popular and visible online. Here, we will help you enhance your website’s overall visibility and rank it on the first page of Google.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Increase Leads & Overall Sales",
				body: [
					"Who doesn’t want to increase their business’s leads and overall sales? Of course, everyone is looking for different ways to increase leads, conversion, and overall sales, right? We at Icecube Digital are the top San Francisco SEO agency with a team of ",
					{ text: "professional SEO experts", href: "/seo-search-engine-optimization/" },
					". We specialize in making your website popular and generating more traffic. As a result, you can get more leads and increase sales.",
				],
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Measurable Results",
				body: "So far, we have served hundreds of businesses with their desired SEO services and results; therefore, we know what it requires to make any website popular and successful. Here, we are dedicated to delivering quality SEO services that give desired results to businesses of different sizes. With measurable results like increased traffic and business, you can count on our team for long relations.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Constant Updates & Transparency",
				body: "We are here to provide constant updates about your project and maintain complete transparency so that you know how SEO benefits your business. Moreover, our team will keep you and your team updated on the new and most effective San Francisco SEO services and strategies to rule the market.",
			},
		],
	},

	cta: {
		text: "Still Not Sure What Benefits Your Website Will Get From San Francisco SEO Experts?",
		ctaLabel: "Contact us today",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Our Exclusive Range Of San Francisco SEO",
		title: "Services Includes",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Website SEO Audit",
				body: "Our SEO audit service helps you evaluate your website and a number of factors that are essential to rank your website in search engine results. Our experts analyze your website’s on & off-page SEO, technical performance, and overall condition, suggesting you take essential steps to rank your site and get traffic. Our complete SEO audit service will help you to know where your website needs to improve to perform better in search engines.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Link Building",
				body: "Through our quality link-building service, our team of San Francisco SEO experts will help you to get backlinks from top-quality websites through SEO best practices. This service will help you point your visitors and target audience from one website to another and act as the major points. As a result, search engines will know that your website is authoritative and should rank in search results. To discuss your requirements for link building service, you can connect with our experts and get the best solution.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Complete Technical SEO",
				body: "Blending our hands-on experience with robust organic growth strategies, Icecube Digital is a leading San Francisco SEO company recognized in different areas to create a perfect formula for bespoke services and offerings. Irrespective of your website’s type and size, we provide top-notch quality technical SEO services to increase ranking, traffic, and overall performance.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Content is and will always be a king, and this is the reason why you still need to create content to rank better in 2022. Publishing, updating, and auditing website content regularly gives positive results like improving traffic, generating more leads, and increasing overall sales. We provide complete content writing services for your websites, such as articles, blogs, success stories, case studies, whitepapers, and whatnot. Since our experienced team of writers has hands-on experience, we promise to take your content strategy to the next level.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Ecommerce SEO",
				body: [
					"Whether you are already running your eCommerce website or planning to start one, we are offering all the San Francisco SEO services for your online business. Being an award-winning company and having experienced San Francisco SEO consultants, we know how to rank your website higher in search results for your targeted keywords. Our goal is to ensure that you get quality traffic, leads, conversion, and revenue for your business, making us your trusted partner for ",
					{ text: "SEO services near you", href: "/local-seo-services/" },
					".",
				],
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Our San Francisco",
		title: "SEO Experts",
		subtitle: [
			"We are a leading and trusted SEO agency with a professional San Francisco SEO consultant to help businesses improve their online presence in search and social media to get new customers.",
			"Our company is dedicated to helping businesses to build their brand online and get new business. Not only this, but many other points make us apart from other SEO companies. Here are the points that make us stand out from the rest:",
		],
		benefitsLeft: [
			"A team of qualified SEO professionals",
			"Maintains complete transparency throughout the project",
			"14+ years of professional experience in the SEO industry",
		],
		benefitsRight: [
			"Real, measurable results",
			"Constant updates & reports on projects",
		],
	},

	imageText: {
		eyebrow: "Achieve Best Result With San Francisco",
		title: "SEO Company",
		image: "/assets/photos/san-francisco-seo-experts.png",
		imageAlt: "",
		paragraphs: [
			"As a leading travel agency based in the USA, its main goal was to boost organic visibility and conversions. Over four months, organic traffic climbed by 200% with an increase of 100% in Conversations.",
			"Travel By Bob came to Icecube Digital to drive more organic traffic to their site. They wanted to see more stability with their keyword rankings as well as launch a successful Facebook remarketing campaign. Aligning with their marketing objectives, our San Francisco SEO Consultants have begun a quality link-building process, blogs, fixed-mobile usability issues, and have set up the Facebook remarketing campaign. In just 6 months, the site is receiving 200% more organic sessions and double conversion leads.",
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
		eyebrow: "San Francisco SEO",
		title: "FAQs",
		items: [
			{
				question: "What Are The SEO Services That I Need For My Business?",
				answer: "Before we suggest any SEO services for your business, we would love to connect with you and comprehend your business, its objectives, and your desired goals. Then, we would be able to suggest the right possible solution for your business.",
			},
			{
				question: "How Much Would It Cost Me?",
				answer: "To get the exact cost of your project, you can get in touch with us on call, email, or chat. We will understand your requirements and share the approximate cost.",
			},
			{
				question: "Why should I hire Icecube Digital San Francisco SEO Company for my project?",
				answer: "San Francisco SEO Company has been in the market for the past 14 years. We know what it takes to make your business successful on Google. In fact, our team of SEO professionals has hands-on experience in delivering varied SEO services with complete satisfaction. So, you are just a click away from making your website successful.",
			},
			{
				question: "Can You Guarantee Rankings in San Francisco for My Business?",
				answer: "Most ethical San Francisco SEO companies do not provide any kind of guarantee as they can’t really control the outcome. This is because search engines regularly update their algorithms and are constantly evolving. As a matter of fact, you should stay away from such companies that offer some kind of guarantee or claim that they have some special relationship with Google.",
			},
			{
				question: "How to Get Started with My San Francisco SEO Project?",
				answer: "You can contact our San Francisco SEO experts for your SEO requirements. One of our executives will schedule to get on a call with you. Our team will conduct a thorough SEO audit for your eCommerce store to find out areas of improvement. From there we will assign the best resources for your San Francisco SEO project and get started.",
			},
			{
				question: "How Long Does it Take for My Website to Rank #1 on Google in San Francisco?",
				answer: "Any professional San Francisco SEO Company will tell you that it takes 5 to 6 months to start seeing results from SEO work and that’s true. The time it will take to rank in the top 10 on Google depends on several factors such as how old your website is, what are your current rankings and how competitive the market is etc. We will audit your website to identify the current SEO situation of your website in the San Francisco area and based on those facts, we offer the best San Francisco SEO packages customized for your business needs.",
			},
			{
				question: "Is SEO Important for Business in The Bay area?",
				answer: "Yes, It is very important that you hire a San Francisco SEO agency to optimize your website. Without doing SEO – your end users won’t find your business on Google or any other search engine. It helps your business keywords to rank higher on search result pages, it will result in more organic traffic and sales.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default SanFranciscoSeo;
