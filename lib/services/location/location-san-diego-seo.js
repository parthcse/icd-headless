const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const SanDiegoSeo = {
	slug: "san-diego-seo-company",
	pageTitle: "San Diego SEO Company | San Diego SEO Services By Experts",
	metaDescription: "IceCube Digital is an award winning SEO company in San Diego. We help businesses succeed through quality SEO services. Get in touch with San Diego's best SEO Experts now!",

	banner: {
		heading: "Renowned San Diego SEO Company",
		paragraphs: [
			"Based in San Diego, USA, Icecube Digital has carved a niche by offering high-quality, scalable, and robust SEO services and solutions to enterprises and businesses, helping them increase their online visibility and drive more organic traffic and sales.",
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

	information: {
		eyebrow: "Customized SEO Solutions To Meet Your",
		title: "Business Needs",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "Search engine optimization is not an option anymore, especially in today’s digitally-driven era. Irrespective of what you sell, if your target audience does not find you online, you are missing a larger chunk of potential customers interested in your offerings.",
					},
					{
						type: "p",
						text: "How about backing this claim with some statistics?",
					},
					{
						type: "ul",
						items: [
							"As per the study by Statista, 1.66 billion people shop for products and services online.",
							"Another report estimated that the US digital advertising and marketing market is $460 billion.",
							"63% of businesses increased their digital marketing budgets last year.",
							"A study points out that 49% of companies believe that organic search brings them the best marketing ROI.",
							"Furthermore, a report indicates that the organic traffic share of all website traffic is 53%.",
						],
					},
					{
						type: "p",
						text: "What do all these studies and reports reveal?",
					},
					{
						type: "p",
						parts: [
							"Search engine optimization is the essential digital marketing approach you can add to your marketing strategy. Your business cannot survive without it. We at Icecube Digital are dedicated to delivering advanced ",
							{ text: "quality SEO solutions", href: "/seo-search-engine-optimization/" },
							" with a proven track record and a promising portfolio.",
						],
					},
					{
						type: "p",
						text: "We have an experienced team of San Diego SEO experts and professionals to comprehend digital marketing approaches and implement them in your business. We will first understand your business requirements, target audience, future goals, products, or services and then design a scalable, personalized, and results-driven SEO strategy that works in real time.",
					},
				],
			},
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	leftIconBox: {
		eyebrow: "The Benefits Of A San Diego SEO",
		title: "Consultant Near You",
		items: [
			{
				icon: "/assets/icons/note.svg",
				title: "Complete SEO Service Package",
				body: "How about climbing the search results with our customized SEO service package? Great, right? You can avail the benefits of the complete San Diego SEO service package, including on-page SEO, off-page SEO, link building, content marketing, and optimization. So, without having a second thought, get in touch with us to discuss your requirements!",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Measurable Results",
				body: "SEO is one of the most important tactics that one should adopt to make their business popular and expandable. One thing to know about SEO is that it doesn’t give instant results. White-hat SEO takes time to show results but gives desired results in the long run. Here, our team knows how to implement the right tactics and drive measurable results.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Complete Transparency",
				body: "Transparency with our valuable customers is what makes us apart from our competitors. We believe in maintaining complete transparency, honesty, and integrity with our customers. This includes keeping them up to date on all the updates about the projects.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Constant Updates & Transparency",
				body: "Icecube Digital is a trusted SEO company that delivers cost-effective marketing services, including content marketing, email marketing, marketing through social media, and more. With a perfect blend of strategies and tactics, we help businesses to grow their business by bounds.",
			},
		],
	},

	cta: {
		text: "Still Not Sure What Benefits Your Website Will Get From San Diego SEO Experts?",
		ctaLabel: "Contact us today!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Our San Diego SEO",
		title: "Services Include",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Website Audit",
				body: "Is your website SEO-friendly? We need to know it first. Our experts will audit your website from an SEO perspective and find technical or functional issues to address.",
			},
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keywords Research and Strategy",
				body: "Finding the right keywords is a vital task for any SEO strategy. These keywords will drive more leads and revenues to the table. We are equipped with the right people and SEO tools to find the best relevant keywords based on your offerings.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Competitor Analysis",
				body: "You cannot just design an SEO strategy without knowing what your competitors are doing. We will thoroughly check your competitors’ SEO activities and incorporate the analysis into the strategy to get the best outcomes.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Link Building",
				body: "Having a powerful bank of high-quality backlinks helps Google to identify that your business has an authoritative position in the industry. Also, Google has revealed that a website with high-quality backlinks will be ranked higher. Let our content creators and San Diego SEO experts build quality backlinks for you.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "On-Page Optimization",
				body: "On-page SEO is all about making your site Google-friendly. Our San Diego SEO experts will optimize your website so that Google crawlers can easily identify the purpose of your website and crawl it accordingly. Some of the on-page SEO activities are URL updates, keyword optimization in content and URLs, title tags, meta descriptions, etc.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Local SEO",
				body: [
					"Are you looking for local leads from your city or state? Well, our San Diego SEO consultants will optimize your website to improve your online presence for a particular geographical location. Our ",
					{ text: "local SEO experts", href: "/local-seo-services/" },
					" will also create and optimize your Google My Business dashboard to get more quality links from your potential local audience.",
				],
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Content Creation",
				body: "An SEO strategy is incomplete without high-quality, relevant, original, and valuable content. We have a dedicated team of SEO content writers who will create insightful and engaging content to help Google understand that you provide relevant value to your visitors.",
			},
			{
				icon: "/assets/icons/brand-tag.svg",
				title: "Online Reputation Management",
				body: "Having a positive brand image is a must thing, not just to attract new leads but also to retain your existing customers. Icecube Digital can help you manage your reputation by conducting certain branding activities such as positive social media presence, correcting wrong information, and creating more valuable website pages.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Ecommerce SEO",
				body: "Our San Diego SEO specialists will design a comprehensive eCommerce SEO strategy for your eCommerce store. Ecommerce SEO experts help businesses to get more organic traffic and leads. Also, it improves the overall user experience through SEO activities such as site optimization, creating local citations, increasing page speed, etc.",
			},
			{
				icon: "/assets/icons/mobile.svg",
				title: "Mobile-Friendly Optimization",
				body: "Most of us search for products and services from our smartphones. Our San Diego SEO specialist will optimize your website for various devices such as mobiles and tablets to offer a satisfying user experience when someone visits your website through other devices.",
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Icecube Digital As Your San Diego",
		title: "SEO Agency?",
		benefitsLeft: [
			{
				title: "A team of qualified SEO professionals",
				body: "Icecube Digital is the best San Diego SEO agency with another name for trust and transparency. For us, a new project is not just a mere project but an opportunity to help our client to write their business’s growth story.",
			},
			{
				title: "We Are Transparent",
				body: "We are a customer-centric San Diego SEO company that puts its clients’ interests above everything else. We are highly professional and transparent to our clients in whatever business endeavors we practice.",
			},
			{
				title: "We Stay Updated",
				body: "Our San Diego SEO experts stay updated with the Google updates and SEO trends to incorporate them into real-time SEO projects to give you a competitive edge over others.",
			},
		],
		benefitsRight: [
			{
				title: "We Possess Sheer Expertise",
				body: "Our sheer expertise and rich SEO experience help us create more end-to-end, data-driven, and scalable SEO strategies for clients to make a difference.",
			},
			{
				title: "We Do Advanced Analysis and Reporting",
				body: "We thoroughly research and analyze your business, industry, competitors, and other crucial parameters before designing a strategy for your business. We monitor SEO campaigns with a sharp eye and amend campaigns as per data we receive from analytics. In addition, we also report you the progress reports regularly to keep you updated about the campaign.",
			},
			{
				title: "We Keep You in Loop",
				body: "We keep our clients in the loop for each SEO activity we do to incorporate their valuable inputs and feedback into the strategy. We will keep you updated about all the progress of your SEO campaign. We have advanced tools for smooth and clear communication.",
			},
		],
	},

	imageText: {
		eyebrow: "Best Results With Our San Diego",
		title: "SEO Service",
		image: "/assets/photos/san-diego-seo-service.png",
		imageAlt: "",
		paragraphs: [
			"With organic traffic at an all-time low, it was critical to turn things around. We regained the rankings and increased them to new all-time highs, generating more than 160% organic traffic and 67% organic revenue in 2022.",
			"CCC – A leading medical cannabis healthcare center came to us to recover their organic website traffic and revenue through the power of SEO. Some of the tasks we have performed such as removing thin content, toxic backlink removal, creating PR, writing informative copy with LSI keywords, website speed optimization, and fixing 404 errors. In 7 months, when Google rolled out another algorithm update, this time website got a nice recovery with continuous SEO efforts. Our San Diego SEO experts grew organic traffic by more than 160% and 67% in revenue.",
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
		eyebrow: "San Diego SEO",
		title: "FAQs",
		items: [
			{
				question: "What Is The Difference Between On-Site And Off-Site SEO?",
				answer: "On-site SEO is the process of optimizing pages of the website, like the meta optimization, title tags, headings, URL optimization, Image alt tags, anchor text, SCHEMA implementation, etc. On the flip side, off-site SEO deals with other important aspects like link building, authority development, email outreach, review marketing, improving social media presence, etc.",
			},
			{
				question: "Is It Important To Hire San Diego SEO Agency For My Website?",
				answer: "If you’ve just started a website, you might be able to handle the basics of San Diego SEO on your own by spending about 10-15 hours a week. But if you are serious about your SEO rankings, you’ll surely have to spend a lot more time on the process. On top of it, you’d also be required to keep yourself updated with the latest changes in Google search engine algorithms and top strategies to get the desired results. This makes hiring San Diego SEO Consultants for the job a far better option.",
			},
			{
				question: "How Much Does San Diego SEO Cost?",
				answer: "The cost of San Diego SEO services depends on a lot of factors like the current situation of your website, your approach, your end goal, and even the company you select for doing SEO. Most local SEO specialists that offer cheap services are well-known to use “black-hat” techniques that can severely damage your organic ranking credibility and might also result in a penalty. Thus, it is highly recommended that you should only hire a professional San Diego SEO agency to get the best results.",
			},
			{
				question: "How To Get Started With My San Diego Website SEO Project?",
				answer: "You can contact our San Diego SEO experts for your SEO requirements. One of our San Diego SEO specialists will schedule to get on a call with you. Our team will conduct a thorough SEO audit for your web store to find out areas for improvement. From there we will assign the best resources for your SEO project and get started.",
			},
			{
				question: "What Types Of SEO Strategies Do You Implement For Your Clients In San Diego?",
				answer: "We implement SEO strategies depending on the client’s website and requirements in San Diego. We suggest the best possible strategies that drive our client’s website traffic, ranking, reach, and conversion. Some of the most powerful techniques are keyword research, identifying your audience, optimizing the content, improving the user experience, and on-page and off-page SEO.",
			},
			{
				question: "What Are Local Rankings Or Local SEO Or San Diego SEO?",
				answer: "Local ranking for websites is the process of ranking your business higher on local searches in San Diego. Google uses a different algorithm for local rankings and local search queries. Apart from the factors, considered for a San Diego search query, additional factors like local citations in 3rd party directories, quantity, quality of online reviews, etc. are also considered to rank a business in local search.",
			},
			{
				question: "How Long Does It Take For My Website To Rank #1 On Google In San Diego?",
				answer: "Any professional San Diego SEO Company will tell you that it takes 5 to 6 months to start seeing results from SEO work and that’s true. The time it will take to rank in the top 10 on Google depends on several factors such as how old your website is, what are your current rankings and how competitive the market is etc. We will audit your website to identify the current SEO situation of your website in the San Diego area and based on those facts, we offer the best SEO packages customized for your business needs.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default SanDiegoSeo;
