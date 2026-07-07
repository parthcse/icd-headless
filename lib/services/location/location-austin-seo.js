const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const AustinSeo = {
	slug: "austin-seo-company",
	pageTitle: "Austin SEO Company | Expert SEO Services Near You",
	metaDescription: "Icecube Digital is a hyper focused SEO company in Austin, offering professional SEO services to local Austin businesses. Boost website traffic and sales with SEO experts.",

	banner: {
		heading: "Austin SEO Company",
		paragraphs: [
			"Do you feel the current organic traffic on your website is less than the average traffic? If yes, then the time has come to get into the light and stay away from the dark ages. It’s time to uplift your digital marketing campaigns, build aggressive business promotional strategies, and become customers’ number 1 choice. So, wait no more because you are just a call away from making your business visible to your target audience.",
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
		eyebrow: "Partner With Austin",
		title: "SEO Company",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "We, as an Austin SEO agency, are a roof under which digital marketing subject matter experts brainstorm. With modern-day search engine optimization techniques and strategies, our Austin SEO consultants contribute to scaling businesses across the globe.",
					},
					{
						type: "p",
						text: "The process is quite simple and easily understandable when it comes to hiring our SEO professionals from Austin. Our SEO professionals understand your business, industry, and target audience. Once they are well-versed with the nitty-gritty of the products/services, they start a series of campaigning.",
					},
					{
						type: "p",
						text: "Their contribution to businesses has:",
					},
					{
						type: "ul",
						items: [
							"Won many awards and accolades",
							"Increased retention ratio",
							"High conversion ratio",
						],
					},
					{
						type: "p",
						text: "Be a part of the growing business community and thrive in your business.",
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
		eyebrow: "How Do You Benefit By Hiring Our Austin",
		title: "SEO Experts?",
		items: [
			{
				icon: "/assets/icons/result.svg",
				title: "Get Your Products/Services in Ranking",
				body: "It is one of the benefits to expect when hiring Austin SEO professionals. We develop strategies so that your products/services start ranking on Google. It becomes visible to your target audience through which one of the problems of getting less than average traffic gets resolved.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Witness More Traffic",
				body: "As said, your website started getting a huge organic traffic flow by hiring Austin SEO professionals. With different SEO techniques, the results will always be favorable. Get in touch with our SEO experts to learn more about how we work and how long it takes to scale your business through search engine optimization methods.",
			},
			{
				icon: "/assets/icons/brand-tag.svg",
				title: "Build a Brand Out of Your Business",
				body: "A business is always opened with a vision to create everyone’s go-to brand. And it’s only possible when new customers start visiting and taking action on your website. Hiring our SEO professionals from Austin would get more new customers every time on your website. Bringing new customers every time would be difficult, but with the right strategies, you would be able to turn your business into a brand.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Word of Mouth Marketing",
				body: "Reviews is something most people look for, which depends on how good your products/services are. Our SEO consultants ensure all the positive reviews are shown on Google, so when your target audience looks for specific services, they see the reviews about it.",
			},
		],
	},

	cta: {
		text: "Spike Up Sales & Revenue With Austin SEO Agency",
		ctaLabel: "Call now",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Explore Austin SEO Professional",
		title: "Services Near You",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research & Analysis",
				body: "Our SEO professionals are well-versed in keyword research, analysis, and placement in the content. With the use of several trustworthy tools, our SEO experts fetch out keywords that your target audience uses more frequently to search for specific services or products.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Identify Your Competitors",
				body: "Businesses have competitors, and one must keep track of them. In your case, leave that to our SEO strategists. Our SEO executives at Austin do a wonderful job of identifying your true competitors and building aggressive strategies to stay ahead of them. Start taking action right now because your competitors are already implementing strategies.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Make Your Business Visible",
				body: "You have put in all your resources on your website, and if that doesn’t show up in Google, it’s all worthless. But worry no more when you have hired an Austin SEO agency. One of our objectives is to make businesses popular and gain attention. And for that, our SEO experts extend their boundaries in making sure that the website becomes in the top search results of Google.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Local SEO",
				body: [
					"You have to start small when it comes to marketing your business. One of the things to consider when it comes to advertising your business is to execute local SEO. It contains many SEO tactics and initiatives to implement so that your company begins to receive organic leads. So, don’t hesitate to contact our SEO consultants for any kind of ",
					{ text: "SEO help near you", href: "/local-seo-services/" },
					".",
				],
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Another efficient SEO service that effectively promotes goods or services is content writing. Everything you provide for your clients is skillfully written in the form of an article with appropriate keyword placement and made available so that your target audience can search for and read about it. Contact our SEO consultant in Austin to learn more about it.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO",
				body: "No matter what you do, your company’s website won’t be able to pass Google’s search algorithms unless it is technically sound. Trust our SEO technical professionals with your website, make the proposed improvements, and then enjoy the never-before-seen gains. It is our responsibility to alert you as soon as possible to any necessary technological alterations.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "On & Off Page SEO",
				body: "Ranking and promotion include several different elements in addition to content writing. Backlinks, meta tags, SEO, anchors, and 404 are all part of it. Additionally, social media profiles, listings, and the creation of external links are other promotion-related considerations. Additionally, by hiring SEO specialists in Austin, you may anticipate obtaining favorable testimonials on a variety of social media sites, including Facebook and Google.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Amazon Marketing & Promotion",
				body: [
					"You must speak with our SEO specialists if you want to list your products on Amazon. They would offer you their years of experience to help you list products on Amazon. These experts would be responsible for handling ",
					{ text: "Amazon SEO", href: "/amazon-seo-services/" },
					", pricing strategy, and product listings.",
				],
			},
			{
				icon: "/assets/icons/minicart.svg",
				title: "Ecommerce SEO",
				body: "Collaborate with Austin SEO professionals to accelerate your online store. They employ the proper techniques to maximize impressions, visits and clicks on your online store. Therefore, don’t wait and start making the right decisions for your company right away.",
			},
		],
	},

	checkList: {
		eyebrow: "Should You Hire Icecube Digital",
		title: "Marketing Agency?",
		subtitle: [
			"Yes, you must hire Icecube as your business’s digital marketing agency. The developers of Icecube are experienced digital marketers. These seasoned professionals promise to maintain an advantage over rivals. When it comes to ranking, the employed techniques never let you down. Located in the USA, Icecube is made up of strategists, content writers, and SEO experts.",
			"Our SEO specialists have more than 14 years of expertise in the field and are knowledgeable about Google’s requirements as well as those of your intended audience. Since our early years, we have concentrated on achieving the highest client retention rate. This demonstrates that we put our clients’ needs first.",
		],
		benefitsLeft: [
			"Dedicated, experienced professionals in several fields",
			"Transparency",
			"Pricing structure based on an hourly basis",
		],
		benefitsRight: [
			"Simple channels for communication",
			"Support responses to all of your inquiries, questions, and worries",
		],
	},

	imageText: {
		eyebrow: "Best Result With Our",
		title: "Austin SEO Experts",
		image: "/assets/photos/austin-seo-experts.png",
		imageAlt: "",
		paragraphs: [
			"A leading food wholesale business picked Icecube Digital to take rankings to the next level in order to attain all-time sales highs. Organic traffic surged by more than 460% in a year, with more than 10,000 new keywords ranking on Google.",
			"As a well-known company in the firewood industry, they needed an established and trustworthy company to drive more customers to their online store. After having multiple proposals from various companies, they chose Icecube Digital to handle their entire digital marketing campaign and were very pleased with their decision. Our cohesive team of Austin SEO experts began SEO efforts by doing competitor research, identifying core business keywords, fixing page load speed, building links, blog outreach, and fixing URL architecture issues. Quarter over Quarter we increased organic traffic, sessions, and revenue. Fergal’s site saw phenomenal success with our strategic SEO efforts.",
		],
	},

	ctaSecondary: {
		text: "Tell Us About Your Austin SEO Service Requirements And Get A Free Quote To Hire Experts Today!",
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
		eyebrow: "Austin SEO",
		title: "FAQs",
		items: [
			{
				question: "Are SEO Services Effective and Result-Generating?",
				answer: "Yes, if you are availing of SEO services or hiring SEO professionals, you are making one of the best decisions. Because the experts know how to rank websites and bring them to the attention of your business’s target audience. And when the business gets attention, it also gets customers. Eventually, it starts noticing sales and revenue spikes.",
			},
			{
				question: "Does Hiring SEO Experts bring Desirable Results?",
				answer: "Absolutely yes, hiring an SEO expert would never be a worthless decision because they know what Google wants and how it works. Get in touch with our Austin SEO experts and get an opinion about your online platform.",
			},
			{
				question: "Will My Business Be Successful After Hiring an Austin SEO Company?",
				answer: "Yes, we have a team of SEO experts who have in-depth knowledge and experience in search engine optimization. We understand our customer’s requirements and prepare and implement strategies that reach out to potential audiences in a shorter duration.",
			},
			{
				question: "Why Should I Hire Austin SEO Services?",
				answer: "We as an Austin SEO agency believe in delivering quality and results at a successful rate. We have a team of professionals who know inside and out about search engines that will solve all your queries anytime.",
			},
			{
				question: "How Much Time Does It Take?",
				answer: "It completely depends on your project requirements. We will put all our efforts to rank better on search engines in the shortest duration of time. However, patience and consistency are essential for SEO achievement.",
			},
			{
				question: "How Much Does an Austin SEO Company Charge for the Business?",
				answer: "It depends on your search engine requirements. Therefore, to know the precise charge; contact our team.",
			},
			{
				question: "Is PPC Better than SEO?",
				answer: "We can’t say that one service is better than another. But SEO is quite slow than PPC. SEO takes months to give you results once you optimize your website completely through Austin SEO services. However, PPC gives leads immediately to your website.",
			},
			{
				question: "How Can I Track the Progress of My SEO Campaign?",
				answer: "If you have hired Austin SEO experts from any leading SEO company, then the experts will prepare a complete report to share with you so that you can track the progress. Not only this, you can use the Google Search Console tool that helps monitor the website’s traffic and performance.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default AustinSeo;
