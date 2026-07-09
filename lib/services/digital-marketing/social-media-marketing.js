const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const SocialMediaMarketingManagement = {
	slug: "social-media-marketing-management",
	pageTitle: "Social Media Marketing & Management Services | Social Media Management Agency",
	metaDescription: "Our social media management and marketing company can help boost your online presence. Our firm specializes in crafting effective campaigns on Facebook, LinkedIn, Instagram, and more.",

	banner: {
		heading: "Social Media Marketing Management",
		paragraphs: [
			"Engage Icecube Digital to help you with content, design, and campaign creation for your social media marketing management. Being a social media management firm, we help you leverage the power of social media channels to earn business and achieve your goals. Starting from analyzing your target audience, to developing effective strategies, selecting suitable social media channels, measuring KPIs, and reporting, our team of experts helps you at all levels.",
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
		postIds: [56571, 56568, 56557],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	imageText: {
		eyebrow: "Why Your Company Needs Social Media Marketing",
		title: "Management Services",
		image: "/assets/photos/smm-why-social-media.png",
		imageAlt: "Social Media Marketing Management Services",
		paragraphs: [
			"As of October 2023, the number of people using social media is over 4.95 billion worldwide making it one of the best places to connect with your audience. People use these platforms to not only connect with family and friends but to buy products, and make informed decisions.",
			"In the urge to build a robust online presence, attract more followers, increase brand awareness, surge the engagement rate, and finally have more conversions and business, social media marketing aids you in the whole process. A social media marketing expert like Icecube Digital can help your customers connect with your brand on a personal level and increase brand loyalty and customer retention.",
		],
		ctaLabel: "Request a Demo!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	information: {
		eyebrow: "Achieving the Goals of Your Business with a",
		title: "Social Media Strategy",
		contentAlign: "center",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "There is no one ‘right’ answer to all the companies' social media marketing needs as every brand is different and so as every brand’s goals. We understand the nuances of social media strategy and craft personalized strategies for our customers.",
					},
					{
						type: "p",
						text: "We craft bespoke social media strategies that help you reach a wider customer base on social media and capture more targeted leads. We evolve with the market and implement updated strategies for our customers’ businesses that can bring qualified traffic to the customers’ websites or landing pages. Remember, the key to creating a successful social media management strategy is the ability to run the campaigns by lowering your CPA (cost per acquisition) and maximizing your ROI (return on investment).",
					},
				],
			},
		],
	},

	plainText: {
		eyebrow: "What Do Social Media Marketing Companies",
		title: "Do for You?",
		contentAlign: "center",
		paragraphs: [
			"A social media marketing agency can help you create a strong online presence for your business leaving behind your competitors. A social media marketing company like Icecube Digital has teams of experts who manage various tasks of social media marketing including content creation, community management, campaign creation, and paid advertising. A social media agency must be an amalgamation of creative and strategic ideas that help you achieve your goals and objectives. They make sure your social media channels are always updated with the latest insights for your visitors and that you are present there consistently.",
		],
	},

	topIconBox: {
		eyebrow: "Icecube Digital for Bespoke Social Media",
		title: "Management Services",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/social-share.svg",
				title: "Social Media Marketing",
				body: "We strongly believe that as per the nature of businesses, brands have a variety of objectives when they opt for a social marketing campaign. That is why we craft social media marketing campaigns understanding the phases of the customer journey from awareness and consideration to conversion.",
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Social Media Advertising",
				body: [
					"Conquer social media via our effective ",
					{ text: "social media advertising", href: "/social-media-advertising-services/" },
					" solutions. We offer targeted advertising solutions leveraging our expertise and hands-on experience in managing all the major social media platforms. We understand the value of cost per click and ensure the best campaigns that bring the best possible results.",
				],
			},
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Social Media Strategy Development",
				body: "We believe in developing refined social media marketing strategies that not only focus on growing followers but also bring business benefits in terms of revenue generation. We build outcome-focused social media strategy that aligns with your organization’s goals.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Creation",
				body: "Armed with comprehensive groundwork, we craft content for your social media management campaigns that turn heads toward your brand and attract your target audience. Being a Google AdWords management company, we make sure to weave all the keywords in our content smoothly.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Analytics and Reporting",
				body: [
					{ text: "Analytics and reporting", href: "/digital-marketing-analytics-reporting-services/" },
					" is the most crucial but undervalued step of the whole process. We regularly analyze the efforts, modify them as per the market needs, and keep reporting to our clients regularly. These analyses and data help us outperform the competition and excel in the market.",
				],
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "PPC Management",
				body: "PPC allows you to reach the desired position in search engine results with efficient campaigns and bidding. We help our clients with a well-designed campaign that aids them in highlighting their brands via the right advertisement at the right place and in the budget determined.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Social Media Reputation Management",
				body: "Social media platforms are the first ones that can build a perception of your brand in public. A simple internet search may reveal your negative feedback diminishing your reputation. But by coming to us for online reputation management, you can be sure of customized strategies that help you protect your reputation.",
			},
			{
				icon: "/assets/icons/facebook-circle.svg",
				title: "Facebook Management",
				body: "With 1.4 billion daily users, it is inevitable to focus on Facebook paid advertising to reach your potential customers and grow your business. Understanding various aspects of advertising like demographics, customer behavior, and interests, we offer Facebook ads services that are cost-effective and game changers.",
			},
			{
				icon: "/assets/icons/twitter-circle.svg",
				title: "X Management",
				body: "X (Twitter) marketing tactics have helped many businesses become brands. However, handling X marketing needs extensive experience looking at its fast-paced nature. We have helped businesses build trust, and credibility and finally increase their customer base with our proven X marketing tactics.",
			},
			{
				icon: "/assets/icons/instagram-circle.svg",
				title: "Instagram Management",
				body: "With over 2 billion active users and a stupendous engagement rate, there is no doubt about Instagram’s influence on a business’ marketing. Having an expert team who understands Instagram’s diverse offering of ad styles and placements, native marketing features, and detailed analytics, we enable you to achieve your business goals.",
			},
			{
				icon: "/assets/icons/linkedin-circle.svg",
				title: "LinkedIn Management",
				body: "A social media platform built for professionals and businesses has been ignored by people many times. However, the latest reports say that 59% of brands are seen as “higher quality” after advertising on LinkedIn highlighting the importance of LI marketing for all-size businesses. By hiring our social media management agency, you can equip your brand with expert LI marketing professionals.",
			},
			{
				icon: "/assets/icons/voice.svg",
				title: "YouTube Management and Video Marketing",
				body: "With more and more people getting influenced by videos, video marketing, and YouTube presence has become ever more important. We have been helping businesses to stand apart in the crowd with our YouTube video ads and video marketing strategies.",
			},
		],
	},

	checkList: {
		eyebrow: "What Icecube Digital",
		title: "Can Do for You?",
		subtitle: "When you leave your social media presence in our hands, you’ll save plenty of time to focus on other areas of your business. Our social media management campaigns consist of a variety of activities such as;",
		benefitsLeft: [
			"Audit your current presence on social media channels",
			"Understand the target audience and analyze the competitors",
			"Create an effective content calendar",
			"Create unique posts and share them consistently",
		],
		benefitsRight: [
			"Leverage each suitable platform",
			"Respond to the comments of readers",
			"Set up paid advertisements to get more benefits",
			"Analyze performances and manage activities accordingly",
		],
		textContent: "In all, when you come to us, we audit your current presence on a specific platform and determine how we can improve your profiles and monetize them in the best possible ways.",
	},

	infoBox: {
		eyebrow: "Benefits of Hiring a Social Media",
		title: "Management Company",
		items: [
			{
				title: "Increased brand awareness",
				body: "Don’t get overwhelmed by the different variables of each platform. Instead, hire a social media marketing manager who understands all the requirements of various platforms and helps you win remarkable attention and brand awareness.",
			},
			{
				title: "Higher leads and sales",
				body: "Harnessing the power of each platforms’ features and advanced targeting options, you can reach your ideal customers and increase the possibility of sales conversions with the help of a social media marketing firm.",
			},
			{
				title: "Loyal customer base",
				body: "Social media management needs continuous engagement and efforts to develop a strong customer base. We not only respond to them but also create behaviorally-themed posts that can resonate with your audience and keep them connected.",
			},
			{
				title: "Consistent and professional presence",
				body: "It’s a difficult task to keep up with the social media demands and consistency. There steps in an expert like us who makes sure you are never away from your audiences’ vision and you are always leaving your imprint there.",
			},
			{
				title: "Measurable results and ROI",
				body: "Having incredible tools available, a client can precisely measure the results of their social media activities and keep an eye on their ROI. We make sure to report our clients with the utmost accurate data.",
			},
			{
				title: "Increased community engagement",
				body: "Social media is a two-way street and thus, the higher you want to go, the more you need to indulge in constructive communication. Handling this, we ensure to spread positivity for your brand in the community.",
			},
		],
	},

	cta: {
		text: "Ready to Grow Your Audience? Explore Our Social Media Marketing & Management Services!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Social Media Marketing Management",
		title: "FAQs",
		items: [
			{
				question: "How do you create a social media strategy?",
				answer: "To reach somewhere we have to know where we are. So, first, we audit the existing social media presence of the brand and its goals. And according to the requirements, we form a tightly knit strategy built to earn the expected results.",
			},
			{
				question: "Why should I spend on social media marketing management?",
				answer: "Till now 5.07 billion social media users are making it mandatory for any business to tap into this market. Social media marketing services are not only crucial for small businesses and newcomers, but it is practically helpful to any size of business.",
			},
			{
				question: "Even if I am taking SEO services, shall I also need to hire a social media manager?",
				answer: "Yes, certainly! You may be leveraging local SEO services near you, but you still need to consult a social media marketing expert as both of them comprise different activities and tactics.",
			},
			{
				question: "What if I haven’t done any social media profile?",
				answer: "That’s ok. We can offer you set-up assistance for your profile creation from content creation to the design elements.",
			},
			{
				question: "Do I need to log in and post or comment on social media profiles?",
				answer: "No. Once you handle your social media marketing management with us, you hardly need to log in to your profiles. We manage everything there starting from posting to commenting and also, give you a time-to-time report of our activities and results.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default SocialMediaMarketingManagement;
