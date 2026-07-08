const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const PhiladelphiaSeo = {
	slug: "philadelphia-seo-company",
	pageTitle: "Best Philadelphia SEO Company | Expert SEO Services Near You",
	metaDescription: "IceCube Digital is a top-rated Philadelphia SEO Company, offering SEO services to local Philadelphia businesses. Increase your website rankings, traffic, and revenue with us.",

	banner: {
		heading: "Philadelphia SEO Company",
		paragraphs: [
			"Having an online presence in the form of a website or social media account isn’t enough; you must run a campaign, perform on-page & off-page SEO, and put all your marketing efforts into making your brand visible. All alone is quite a difficult job, but what if you get a dedicated SEO agency to only work on building a brand out of your business and skyrocketing your revenue levels?",
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
		eyebrow: "Join Hands With Philadelphia",
		title: "SEO Company",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "We, a Philadelphia SEO agency, strives day in and day out to help our clients achieve their business objective. With several years of experience and after closely monitoring Google’s updates, we are sure of one thing – favorable results are no big game.",
					},
					{
						type: "p",
						text: "Our SEO consultants understand the business, gains knowledge about the industry, and then start strategizing SEO campaigns. Doing so for more than 14 years has won us:",
					},
					{
						type: "ul",
						items: [
							"Multiple awards",
							"Big firms as our repetitive clients",
							"Recognition on several reviewing platforms",
						],
					},
					{
						type: "p",
						text: "From startups to established firms, we have got them visible on Google search results. And the story doesn’t end here; through SEO tactics, our clients have also witnessed:",
					},
					{
						type: "ul",
						items: [
							"Good traffic flow",
							"More clicks and visits",
							"Gradual increase in conversion rate",
						],
					},
					{
						type: "p",
						text: "So, what are you waiting for? Book your appointment with our Philadelphia SEO experts.",
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
		eyebrow: "How Do You Benefit By Hiring Philadelphia",
		title: "SEO Experts?",
		items: [
			{
				icon: "/assets/icons/result.svg",
				title: "Rank Your Products/Services Better",
				body: "What’s better than watching your products/services in top search results on Google? Hiring Philadelphia SEO experts would make this possible with effective SEO strategies. With the help of keyword research and link building, your products or services come into every impression of whoever searches for them.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Get More Traffic Than Before",
				body: "Hiring SEO professionals from Philadelphia would increase the traffic to your online store by multi-fold times. Our SEO experts put all possible tactics into action, with which the results seem no more a big deal. Talk to our SEO experts, share your business plans, and get the best advice for your online platform.",
			},
			{
				icon: "/assets/icons/brand-tag.svg",
				title: "Turn Your Business into a Brand",
				body: "You have established your business, and now it’s time to create a brand out of it. This is possible when most of your target audience visits and takes action on your website. So, how will you make it possible? Writing an article and updating your website alone doesn’t simply make it happen; you need advice from search engine optimization experts to turn your business into a brand.",
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Get Positive Reviews of Your Business",
				body: "Word of mouth is one of the potential and effective marketing strategies with which the sales would ramp up. In today’s digital world, it has been known as reviews. So, start receiving reviews of your products/services by hiring our SEO consultants.",
			},
		],
	},

	cta: {
		text: "Ramp Up Your Sales & Revenue With Philadelphia SEO Agency",
		ctaLabel: "Call now",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Explore Philadelphia SEO Professional",
		title: "Services Near You",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Appropriate Keyword Research",
				body: "With the right tools, our SEO experts will find some low-to-high search volume keywords that help in ranking. There are several tools that have a list of keywords on different business niches. Our SEO strategists will fetch out those keywords that are suitable to your business and place them accordingly into the content.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Competitor Analysis",
				body: "Since your business is highly competitive; you need to understand your competitor’s current and next move. Our SEO consultants at Philadelphia ensure none of your competitors remains out of their sight when it comes to analyzing them. So, wait no more and get in touch with them to stay ahead of your competitors.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Business Visibility",
				body: "All your hardships in building a website may go worthless if the website doesn’t get the attention of your target audience. Hiring our SEO consultants from Philadelphia would go above and beyond to ensure that your online website gets the attention of its target audience. Therefore, it would be best to hire an SEO professional rather than do all the jobs single-handedly.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Local SEO",
				body: [
					"When it comes to promoting business, you must take baby steps. Performing local SEO is one of the steps to perform when it comes to promoting business. It includes different SEO strategies and campaigns to run so that your business starts getting organic and potential leads. So, wait no more and talk to our SEO consultants for further discussion on ",
					{ text: "local search services", href: "/local-seo-services/" },
					".",
				],
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Content writing is another effective SEO service that promotes products or services in the best possible ways. Whatever you offer to your customers is well-written in the form of an article with proper placement of keywords and made public so that your target audience can search and read about it. Get in touch with our Philadelphia SEO consultant and get to know about it.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Technical SEO",
				body: "No matter what you do for your business and its website, until and unless it is technically sound, it won’t manage to meet Google’s search algorithms. Hand over your website to our SEO technical experts, act on suggested changes, and then witness the never-seen positive results. It’s our duty to inform you about the technical changes that need to be implemented as fast as possible.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "On & Off Page SEO",
				body: "Apart from content writing, several other factors constitute ranking and promotion. It includes backlinks, meta-tags, optimization, anchors, and 404. Besides, social media accounts, listings, and external link building are also other factors to consider for promotion. Moreover, when hiring SEO experts at Philadelphia, you can also expect to bring in positive reviews through different social media platforms, like Facebook, BBB, and Google.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Amazon Marketing & Promotion",
				body: "If you wish to list your products at Amazon, then you must talk to our SEO experts. With years of experience, they would guide you to make it possible to list down products on Amazon. These professionals would take up the duty of product listings, pricing strategy, optimization, and Amazon SEO.",
			},
			{
				icon: "/assets/icons/minicart.svg",
				title: "E-commerce SEO",
				body: "Accelerate your eCommerce business by joining hands with Philadelphia SEO consultants. They implement the right strategies so that your online store gets the maximum impression, visits, and clicks. So, don’t wait and just start taking the right actions for your business.",
			},
		],
	},

	checkList: {
		eyebrow: "Why Should You Hire Icecube As Your Digital",
		title: "Marketing Agency?",
		subtitle: [
			"Icecube is built by a team of professional digital marketers. These experienced experts guarantee to stay ahead of competitors. The strategies put into action never disappoint when it comes to ranking. IceCube is located in the USA and consists of SEO consultants, content writers, and strategists.",
			[
				"With more than 14 years of experience in the industry, our ",
				{ text: "SEO professionals", href: "/seo-search-engine-optimization/" },
				" are well-versed in the demand of Google and your target audience. Since our formative years, we have focused on the maximum customer retention ratio. This proves that we do what’s best for our clients.",
			],
		],
		benefitsLeft: [
			"Dedicated experienced experts in different verticals",
			"Transparency",
			"Hourly and project-based pricing structure",
		],
		benefitsRight: [
			"No hassle communication channels",
			"Support answers to all your questions, queries, and concerns",
		],
	},

	imageText: {
		eyebrow: "Best Result With Our Philadelphia",
		title: "SEO Experts",
		image: "/assets/photos/philadelphia-seo-experts.png",
		imageAlt: "",
		paragraphs: [
			"A leading food wholesale business picked IceCube Digital to take rankings to the next level in order to attain all-time sales highs. Organic traffic surged by more than 460% in a year, with more than 10,000 new keywords ranking on Google.",
			"As a well-known company in the firewood industry, they needed an established and trustworthy company to drive more customers to their online store. After having multiple proposals from various companies, they chose Icecube Digital to handle their entire digital marketing campaign and were very pleased with their decision. Our cohesive team of Philadelphia SEO experts began SEO efforts by doing competitor research, identifying core business keywords, fixing page load speed, building links, blog outreach, and fixing URL architecture issues. Quarter over Quarter we increased organic traffic, sessions, and revenue. Fergal’s site saw phenomenal success with our strategic SEO efforts.",
		],
	},

	ctaSecondary: {
		text: "Tell Us About Your Philadelphia SEO Service Requirements And Get A Free Quote To Hire Experts Today!",
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
		eyebrow: "Philadelphia SEO",
		title: "FAQs",
		items: [
			{
				question: "Why are Keywords Crucial?",
				answer: "Google understands and crawls the content through the keywords, which is why keywords are important. Over the years, the prominence of keywords has remained steady, and Google takes a look at the bigger picture. Search engines analyze how well the whole material is connected and how better it is discussed. Ensuring proper keyword placement is what our Philadelphia SEO consultants will guide you and improve user experience.",
			},
			{
				question: "What Do Local Keywords Mean?",
				answer: "Local keywords are the ones that have a geographical location in them, which better helps to fetch search results. For instance, Philadelphia SEO services fetch out digital marketing agencies in the Philadelphia area.",
			},
			{
				question: "Why Should I Hire a Philadelphia SEO Company?",
				answer: "To beat your competitors through custom SEO strategies and tactics, hire a professional Philadelphia SEO company that comprehends your business requirements and delivers services accordingly. An experienced Philadelphia SEO agency is known for delivering real revenue results to its customers.",
			},
			{
				question: "How Much Does it Cost to Hire a Philadelphia SEO Expert?",
				answer: "The average cost to hire a professional Philadelphia SEO consultant is between $25-$150 an hour. Generally, SEO costs range from $400 to $5000 per month. Moreover, it also depends on the type of expert you are hiring for your business, like years of experience, skills & experts, and more.",
			},
			{
				question: "How Long Does It Take to Rank on Google?",
				answer: "The average time to rank any website on Google through SEO strategies and tactics is about 3 to 6 months. To rank on the first page of Google generally takes between 90 to 180 days, mainly depending on the industry you are targeting and the keywords from Philadelphia SEO services.",
			},
			{
				question: "If My Site Ranks Well Now, Should I Still Invest in SEO?",
				answer: "Yes, of course, you should invest in SEO to maintain your position on Google. As you know that SEO is an ongoing process, so if you are investing in the right Philadelphia SEO experts, it will deliver greater results. No matter whether you are ranking on the first page of Google or 2nd page, you need to invest in SEO to maintain the position.",
			},
			{
				question: "Does an SEO Service Offer Guaranteed Results?",
				answer: "Most ethical Philadelphia SEO agencies do not provide any kind of guarantee as they can’t really control the outcome. This is because search engines regularly update their algorithms and are constantly evolving. The best way to make this decision is by researching and checking out their credibility.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default PhiladelphiaSeo;
