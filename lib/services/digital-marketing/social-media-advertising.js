const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const SocialMediaAdvertisingServices = {
	slug: "social-media-advertising-services",
	pageTitle: "Top Social Media Advertising Services | Expert Agency & Company",
	metaDescription: "Icecube Digital is your go-to social media advertising agency in the USA. Get expert paid social media advertising services. Hire the top social media company today!",

	banner: {
		heading: "Social Media Advertising Company",
		paragraphs: [
			"In today’s digital era, social media is a warzone of brands. Ignoring the irrelevant noise to reach the target audience is a game of observation and skill. How about we tell you that it’s achievable to reach the targeted audience with the correct message? Check us out, we are Icecube Digital, the social media advertising services company you require now. We don’t randomly throw stones in the dark with the hope of reaching the correct place. Rather we believe in crafting our data-driven campaigns with well-researched strategies to get the desired results.",
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

	leftIconBox: {
		eyebrow: "Navigating Social Media Advertising with",
		title: "Icecube Digital",
		subtitle: [
			"Effective social media advertising campaigns can take you to an unimaginable reach. However, navigating your social media advertising journey could be a little complex, but we’ve got you covered. Allow us to be your trusted guide in your smooth and successful experience with social media.",
		],
		items: [
			{
				icon: "/assets/icons/result.svg",
				title: "Defining a Clear Goal",
				body: "We will begin by collaborating with you to identify your product’s unique social media objectives. Identifying goals can help us in directing to the correct strategy route.",
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Targeted Audience",
				body: "Cutting-edge data insight tools and demographic analysis are done to pinpoint the possible user base.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Strategic Compelling Content to Drive Traffic",
				body: "No matter what you pursue, effective content is the primary traffic booster. We curate Social media ads and content for you in a strategic manner that resonates with the target audience.",
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Transparent Functioning",
				body: "We understand the importance of transparent communication. We will send regular detailed reports regarding the campaign performance and the strategies we are implementing.",
			},
		],
		footerNote: "A business needs to have clear digital expansion plans to stay relevant in the heated market.",
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	checkList: {
		eyebrow: "What an Effective Social Media Advertising Agency Can Do for",
		title: "Small Businesses?",
		subtitle: "The present-day digital landscape is so competitive that small businesses struggle to be seen in the crowd. A team of effective social media advertising experts can be a secret weapon of growth for the business.",
		benefitsLeft: [
			{
				title: "Re-Defining the Targeting Strategy",
				body: "Sophisticated tools to target potential consumers based on demographics, online behavior, and interests.",
			},
			{
				title: "High ROI (Return on Investment) Methods",
				body: "Social media advertising can be dollar-draining if not in safe hands. In Icecube Digital we understand the intricacies of optimizing the campaigns to generate high ROI.",
			},
		],
		benefitsRight: [
			{
				title: "Focus on Core Business",
				body: "Running a business can be a juggling journey. Let a leading social media advertising company in the United States, Icecube Digital do the heavy lifting of expanding your digital presence meanwhile, you can focus on delivering quality services.",
			},
		],
	},

	topIconBox: {
		eyebrow: "How Do We Build a Social Media",
		title: "Advertising Strategy?",
		subtitles: [
			["Here are some of the ", { text: "Social Media Management", href: "/social-media-marketing-management/" }, " strategies we adopt to build a brand:"],
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Understanding What the Client Sells",
				body: "We delve deeper into the business to understand what the business is offering. This ensures the entire strategy is aligned with the business goal.",
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Creating the Ideal Customer Profile",
				body: "Thorough research and analytical tools help us to create a customer-aligned business face. This tactic helps the consumer base to trust the brand more and get repeat orders.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Creating a Content Calendar",
				body: "Regular upload of targeted content can be a great lead generator. We provide content plans prior so that there is ample time for approval and timely upload is also achieved.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Create Ad Copies as Per Budget",
				body: "The highest quality of content for a bigger impact is what we offer. We run strategic ad campaigns with budgets that reflect great business values.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Create an Effective Landing Page",
				body: "We ensure that customers have a hassle-free experience while reaching out to businesses. An attractive landing page with a CTA button makes the brand accessible.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Analyze and Adapt",
				body: "We follow the process of continuous monitoring and analyzing of performance. This method helps us to have a clear view of the sweet spots and the pain points of the audience. We adapt to new methods according to the analysis.",
			},
		],
	},

	infoBox: {
		eyebrow: "Power of Diverse Social Media with",
		title: "Icecube Digital",
		items: [
			{
				title: "Facebook",
				body: "Reach out to a huge audience and drive brand awareness and website traffic. With daily users of 1.4 Billion people, Facebook is a go-to platform for most of the brands.",
			},
			{
				title: "Twitter X",
				body: "Targeted tweets with trending hashtags are what makes the content engaging in this particular platform.",
			},
			{
				title: "YouTube",
				body: "The long video advertising will be quite in the boom with a proper brand story of yours.",
			},
			{
				title: "Instagram",
				body: "Capturing the attention with quality videos in short form to do product demos and tutorials.",
			},
			{
				title: "LinkedIn",
				body: "Professionals and B2B decision-makers are on this platform. Filling their thought process with the product can be a wise thing to do.",
			},
			{
				title: "Pinterest",
				body: "A visually compelling pin might drive a good audience base through this platform.",
			},
		],
	},

	leftIconBoxSecondary: {
		eyebrow: "Why Do Businesses",
		title: "Choose Us?",
		subtitle: [
			"Businesses across the world have shown faith and trust in our services. Our innovative strategies and result-driven approach have played a significant role in acquiring the belief of our client powerhouses.",
		],
		items: [
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Sales Generation",
				body: "We’ve generated over $15 million in sales for our clients, a testament to our data-driven strategies and commitment to success.",
			},
			{
				icon: "/assets/icons/database.svg",
				title: "Data-Driven Decisions",
				body: "The days are gone when one-size-fits-all strategies are used to work. This rapidly evolving world requires data-driven instant decisions. Most of our customized strategies are curated and influenced by the trends in data.",
			},
			{
				icon: "/assets/icons/user-time.svg",
				title: "Account Management",
				body: "We have managed over 100 social media accounts across various platforms.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Higher Website Traffic",
				body: "Our results-driven approach brings up a significant positive change in the number of visitors.",
			},
			{
				icon: "/assets/icons/companies.svg",
				title: "Remodeled 100+ Small Businesses",
				body: "Small business houses were one of the most benefited from the collaboration with Icecube Digital. We have re-defined their existence in the market and as a result, have 100+ businesses put their trust in us.",
			},
			{
				icon: "/assets/icons/checklist.svg",
				title: "Transparent Reporting",
				body: "We don’t believe in putting all the complexities of the industry in the name of reporting. We follow the easy-to-understand template in the report to keep you updated throughout the campaign.",
			},
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Work Experience",
				body: "Our extensive experience working with diverse sectors has helped us keep sharpening our expertise in the market.",
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Industry Experts",
				body: "We house a team of experts under a single roof. Most of our team comprises the top players from a wide range of industries.",
			},
		],
	},

	cta: {
		text: "Make Your Business Global with Icecube Digital’s Social Media Advertising.",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Social Media Advertising",
		title: "FAQs",
		items: [
			{
				question: "Which social media platform should I use to grow my business?",
				answer: "The answer to this question will vary according to the particular niche your business is pursuing. Another driving factor to this question is the business goal. We need to understand the very fact that every social media has a different audience. For example: LinkedIn comprises professionals, and Instagram attracts short video form content consumers. The highest ROI (Return On Investment) social media platform for your business could be the one where the audience actively seeks the products and services you are offering.",
			},
			{
				question: "What does Icecube Digital’s social media marketing consist of?",
				answer: "Social media marketing is not about posting articles only, it is way more analytical and strategic than that. Here are the aspects that social media marketing comprises:",
				answerList: [
					[{ bold: "Setting the objective:" }, " The origin of social media marketing is the goal setting of the brand."],
					[{ bold: "Curating content:" }, " Icecube Digital will propose some engaging content strategies to resonate with the audience’s interest. Informative captions, high-quality visuals, and eye-catching quotes are the way to impact the audience’s focus on the brand."],
					[{ bold: "Community management:" }, " Social media is a two-way game. Making the consumer believe that the brand is reachable helps in building trust."],
					[{ bold: "Reports and analytics:" }, " We provide detailed reports on key metrics like engagement, reach, website click, and engagement. This data helps in identifying the areas for improvement and optimizing the strategy."],
				],
			},
			{
				question: "Is there anything like too much advertisement? Where do we draw the line?",
				answer: "There is a very fine line between effective advertising and flooding the audience with intrusive ads. Here are some key points to keep in mind to balance the advertising:",
				answerList: [
					[{ bold: "Quality content:" }, " Do not emphasize posting countless ads. Rather you should focus on providing high-quality content and targeted ads that are on the same page with the audience’s thought process."],
					[{ bold: "User response:" }, " Make sure you are respecting the user experience. Nobody enjoys too many intrusive ads and it might result in an unpleasant brand image."],
					[{ bold: "Be open to feedback:" }, " Listening to the audience’s words might give you an insight that is generally missed in the data. Look out for negative feedback which will tell you about the ad frequency and its effectiveness."],
					[{ bold: "Transparent offering:" }, " Be very much upfront with the offerings. Avoiding misleading content and communicating the purpose of the ad is a rewarding strategy."],
				],
			},
			{
				question: "Is social media marketing and digital marketing the same?",
				answer: "Digital marketing and social media marketing are closely related but they are not the same thing. Here is the breakdown of these two:",
				answerList: [
					[{ bold: "The bigger umbrella:" }, " Digital marketing comprises all the online marketing tactics a business uses to reach a potential audience. There can be various tools, channels, and strategies in it. It generally includes the website, email marketing, SEO (Search Engine Optimization), pay-per-click ads, etc. along with social media marketing."],
					[{ bold: "Tool within the bigger umbrella:" }, " Social media marketing is a subset of digital marketing that focuses on the correct utilization of social media platforms to reach consumers. Creation of content, community building, and running ads are some of the major strategies of social media marketing."],
				],
			},
			{
				question: "How much does social media advertising cost?",
				answerHtml: "<p>The cost of social media advertising might depend on various factors. As an SEO agency in USA, we can mention some major factors that decide the overall cost:</p><ul><li><strong>Campaign Objective:</strong> The difference in campaign objectives requires different strategies and budget sizes.</li><li><strong>Potential Customer:</strong> The demography of the target audience is a driving factor of budget.</li><li><strong>Social media platform:</strong> The cost varies across all types of platforms. For example: In most cases, Facebook is an expensive place to run a campaign in comparison to Pinterest.</li><li><strong>Length of campaign:</strong> The length of the campaign is directly proportional to the money to be spent.</li></ul><p>At Icecube Digital, we follow the transparent pricing model. This way we ensure you have a clear idea of how the budget is going to be utilized throughout.</p>",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default SocialMediaAdvertisingServices;
