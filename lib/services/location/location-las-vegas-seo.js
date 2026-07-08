const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const LasVegasSeo = {
	slug: "las-vegas-seo-company",
	pageTitle: "Las Vegas SEO Services Company | Las Vegas SEO Consultant, Expert",
	metaDescription: "Improve your website traffic with Las Vegas SEO Company. Las Vegas SEO experts at our agency use the latest techniques and strategies to drive more conversions.",

	banner: {
		heading: "Las Vegas SEO Company",
		paragraphs: [
			"Have you ever wondered why your competitors are generating more leads, that too from their websites and social media? If yes, then you are probably not aware of or aware of but not practicing SEO. Icecube Digital is a well-known SEO company across Las Vegas that will help you build a remarkable online presence and generate the most business out of it.",
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
		eyebrow: "Rank Higher in Search Results With Las Vegas's",
		title: "Premier SEO Agency!",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "Icecube Digital is a Las Vegas SEO company that optimizes your website for Google through various techniques, such as keyword research, link building, and content optimization.",
					},
					{
						type: "p",
						text: "When a website is optimized for search engines, it is more likely to rank higher in search results, which can lead to increased traffic, better brand visibility, and, ultimately, more business. Icecube Digital has been practicing these techniques for over a decade, resulting in numerous brands’ prominent online presence.",
					},
					{
						type: "p",
						text: "What our customers felt after getting their websites SEO optimized:",
					},
					{
						type: "ul",
						items: [
							"Their brand awareness increased",
							"A noticeable growth in the organic traffic",
							"Audience considered their content legitimate",
							"A surge in sales and revenue",
						],
					},
					{
						type: "p",
						text: "Don’t let your competitors outrank you – let us help you optimize your website for success.",
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
		eyebrow: "How Las Vegas SEO Experts Boost",
		title: "Your Business",
		items: [
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Improves Ranking",
				body: "Search engines like Google use algorithms to determine the relevance and quality of a website, and they use various ranking factors to determine where a website should rank in the SERPs. Optimizing a website for search engines can improve its ranking by making it more attractive to search engines and more relevant to the users searching for the keywords and phrases your website is targeting.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Saves Money on Paid Advertising",
				body: [
					"SEO is typically a more cost-effective marketing tactic compared to paid advertising. While paid advertising can effectively drive traffic to a website, it can be expensive, especially for highly competitive keywords or industries. In contrast, our ",
					{ text: "WordPress SEO optimization services", href: "/wordpress-seo-service/" },
					" can help drive traffic to your website over the long term without requiring a constant stream of payments for ads.",
				],
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Improves Visibility and Organic Traffic",
				body: "Implementing SEO systematically can bring a considerable amount of organic traffic. This is because users are more likely to click on a website that appears at the top of the organic search results, rather than one that appears lower down the page. SEO experts at Icecube Digital create a customized strategy especially for your business to get the maximum number of traffic possible.",
			},
			{
				icon: "/assets/icons/user-time.svg",
				title: "Enhances User Experience",
				body: "By optimizing a website for search engines, you can also improve the user experience for visitors to the website. This can involve making it easier for search engines to crawl and index the website, as well as providing valuable and relevant content to users. As an advanced Las Vegas SEO agency, we believe a better user experience can lead to increased traffic and higher engagement with the website.",
			},
		],
	},

	cta: {
		text: "Get Started On Your Path To Higher Search Rankings Today!",
		ctaLabel: "Get consultation",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Explore Las Vegas Professional SEO",
		title: "Services Near You",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Keyword Research and Strategy",
				body: "Identifying relevant keywords that people are searching for and incorporating those keywords into website content and metadata can help a website rank higher in search results for those terms. Experts here at Las Vegas SEO company researches those keywords and makes content strategies accordingly.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Competitive Analysis",
				body: "Analyzing and evaluating the strengths and weaknesses of your competitors’ businesses helps you plan your marketing strategies better. Our Las Vegas SEO experts conduct competitor analysis, identify new opportunities and trends, and make the best use of them to make your business compete better in the market.",
			},
			{
				icon: "/assets/icons/brand-tag.svg",
				title: "Build Credibility and Trust",
				body: "Ranking high in search engine page results (SERPs) gives business credibility and trust in the eyes of potential customers. SEO-optimized content suggests audience that the website is a reliable source of information. Our SEO experts ensure your website establishes itself as a credible source of information and positively impacts the audience’s lives.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Local SEO",
				body: [
					"Local SEO mainly focuses on improving your business’s visibility in local search results. By conducting SEO strategies via ",
					{ text: "local search engine optimization services", href: "/local-seo-services/" },
					", you can improve your ranking in local search results and attract more customers in your local area. Improved visibility generates more leads and ultimately increases sales.",
				],
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Content writing is an important part of SEO because it helps to improve the relevance, quality, and user experience of a website, all of which can contribute to better search rankings and more qualified traffic. With the team of the best content writers in town, Las Vegas SEO company will curate the most appealing content for your website.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO",
				body: "The SEO team at Icecube Digital ensures that your website becomes easily crawlable by the search engine to make it to the top of the rankings. Other aspects covered in technical SEO are page speed, mobile friendliness, and page indexing. Just like other techniques, technical SEO holds a prominent role in the world of SEO.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "On & Off Page SEO",
				body: "On-page SEO includes the optimization of the content, HTML code, and meta tags on a web page. It makes sure that the targeted keywords are present in the page title, body, headings, and other places where they are relevant. Off-page SEO includes activities like link building, social media marketing, and content marketing, all of which can help improve a website’s visibility in search engine results pages.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Amazon Marketing & Promotion",
				body: "Selling products on Amazon can be a daunting task, especially if you are trying to compete with the top sellers from around the world. It requires a lot of effort and strategy to get your products noticed. That’s where the SEO experts come in. We have the expertise and experience to help you list your products effectively on Amazon, taking into account a range of factors such as Amazon SEO, promotion tactics, competitive pricing, and technical challenges.",
			},
			{
				icon: "/assets/icons/minicart.svg",
				title: "E-commerce SEO",
				body: "If you want your products and services to stand out in today’s crowded and competitive market, partnering with a reputable and experienced Las Vegas SEO company like Icecube Digital can be a great way to achieve your goals. Here, we understand that every business is unique, and we take the time to get to know your brand and your goals before developing a customized strategy tailored specifically to your needs.",
			},
		],
	},

	plainText: {
		eyebrow: "Elevate Your Business With",
		title: "Icecube Digital",
		contentAlign: "center",
		paragraphs: [
			"At Icecube Digital, we are committed to delivering the highest level of customer satisfaction. We understand that every business is different, and we tailor our digital and marketing services and solutions to meet the specific needs of each of our clients.",
			"For more than 14 years now, we have consistently provided SEO and digital marketing agency services across Las Vegas to become the foremost Las Vegas SEO company.",
			"Whether you’re an internet marketing agency looking to improve your search engine ranking, increase website traffic, or generate more leads, we have the tools and resources to help you achieve your objectives. With our help, you can trust that your business is in good hands and will get the online identity it deserves.",
		],
	},

	imageText: {
		eyebrow: "Best Result With Our Las Vegas",
		title: "SEO Experts",
		image: "/assets/photos/las-vegas-seo-experts.png",
		imageAlt: "",
		paragraphs: [
			"A leading food wholesale business picked Icecube Digital to take rankings to the next level in order to attain all-time sales highs. Organic traffic surged by more than 460% in a year, with more than 10,000 new keywords ranking on Google. As a well-known company in the firewood industry, they needed an established and trustworthy digital marketing company to drive more customers to their online store.",
			"After having multiple proposals from various companies, they chose Icecube Digital to handle their entire digital marketing campaign and were very pleased with their decision. Our cohesive team of Las Vegas SEO experts began SEO efforts by doing competitor research, identifying core business keywords, fixing page load speed, building links, blog outreach, and fixing URL architecture issues. Quarter over Quarter we increased organic traffic, sessions, and revenue. Fergal’s site saw phenomenal success with our strategic SEO efforts.",
		],
	},

	ctaSecondary: {
		text: "Tell Us About Your Las Vegas SEO Service Requirements And Get A Free Quote To Hire Experts Today!",
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
		eyebrow: "Las Vegas SEO",
		title: "FAQs",
		items: [
			{
				question: "How do I track my SEO performance?",
				answer: "There are a variety of tools and techniques that you can use to track and measure your SEO performance, including",
				answerList: [
					"Using Google Analytics to track traffic and conversion data from organic search",
					"Using SEO-specific tools like Ahrefs to track keyword rankings and backlink data",
				],
			},
			{
				question: "What are the most important SEO ranking factors?",
				answer: "The most important SEO ranking factors vary depending on the specific search algorithm being used by a particular search engine. However, some common factors that are often considered to be important include the following:",
				answerList: [
					"Quality and relevance of website content",
					"The website’s structure and navigation",
					"The presence of keywords in the website’s content and meta tags",
					"The quality and relevance of backlinks from other websites",
					"The website’s loading speed and mobile-friendliness",
				],
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default LasVegasSeo;
