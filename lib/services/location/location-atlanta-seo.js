const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const AtlantaSeo = {
	slug: "atlanta-seo-services-company",
	pageTitle: "Best Atlanta SEO Company | Expert SEO Services Near You",
	metaDescription: "IceCube Digital is a top-rated Atlanta SEO Company, offering SEO services to local Atlanta businesses. Increase your website rankings, reach and revenue with us.",

	banner: {
		heading: "Atlanta SEO Services",
		paragraphs: [
			"Shake hands with the Atlanta SEO service company to unleash new revenue goals, higher conversions, and better rankings. Get your brand recognized on Google by running various SEO campaigns. Your website pages are just SEO services away from getting top rankings on Google. So, get in touch with us and start gaining maximum attention from your target audience.",
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
		eyebrow: "Atlanta SEO Company For",
		title: "Startups And Enterprises",
		cards: [
			{
				blocks: [
					{
						type: "p",
						text: "Do you want your business to scale up online? Do you want your products or services to become the talk of the town even seven seas away? Then wait no more. Connect today with the Atlanta SEO service agency to make your website reach millions of customers.",
					},
					{
						type: "p",
						text: "With years of expertise, these clever SEO professionals have made many businesses thrive, which decided to jump into an online segment. You could be the next one. And these claims are all backed-up testimonials from our clients.",
					},
					{
						type: "p",
						text: "Hiring Atlanta SEO experts means:",
					},
					{
						type: "ul",
						items: [
							"Unloading your website promotion task",
							"Making your business widely present across all online platforms",
							"Reaching out to an unreached audience",
						],
					},
					{
						type: "p",
						text: "So, what are you waiting for? Don’t you want to boost your business revenue? Get higher returns on your investments or beat your competitor?",
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
		eyebrow: "Why Hire Us As Your Atlanta",
		title: "SEO Agency",
		items: [
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Brings in Valuable Industry Knowledge",
				body: "Our Atlanta SEO consultants get themselves updated with all the industry information. That’s the main reason it doesn’t take too much time to scale any new startup or online business that comes into contact with us.",
			},
			{
				icon: "/assets/icons/brand-tag.svg",
				title: "Increases Brand Awareness",
				body: "Branding is a crucial thing when it comes to doing business online. But with the Atlanta SEO Agency, stay worry-free. Our SEO experts at Atlanta go above and beyond to ensure that your website remains visible on Google, Bing, and Yahoo.",
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Lets You Win More Clients",
				body: "Any business with clients regularly sustains and tends to grow dramatically. And making sure that your business also gets the client flow, our Atlanta SEO experts run various campaigns. With this, your website gets the maximum impressions and clicks.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Well-Versed with SEO Metrics",
				body: "What’s most important is ensuring that your website ranks well on Google. And that is possible only if you have a great SEO plan. Do not worry if you don’t have a plan because we at IceCube Digital are ready with a plan. Get in touch with us and get results within a few months.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Stands You Ahead of Competition",
				body: [
					"SEO strategies evolve, and so do our Atlanta SEO consultants. Staying in the competition and beating the competitors is a must if you want to run a successful business. Join hands with our ",
					{ text: "SEO optimization professionals near you", href: "/local-seo-services/" },
					" since these are the guys behind many brands getting higher impressions.",
				],
			},
		],
	},

	cta: {
		text: "Ready To Discuss Your Atlanta SEO Service Requirements With Us?",
		ctaLabel: "Book a free consultation now!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	infoBox: {
		eyebrow: "Atlanta SEO",
		title: "Services Include",
		subtitle: "Rankings and results do not show up without putting in the effort. And it is important to know how we are contributing to your success story. So these are the services that we will offer.",
		items: [
			{
				title: "Keyword Researching",
				body: "Getting your website visible on top search results, requires the right keyword with massive search volume. Our Atlanta SEO experts are well-versed in identifying those industry-specific keywords that help get your website ranked and visible in the crowd.",
			},
			{
				title: "Website SEO Audit",
				body: "Website SEO audit consists of monitoring all the pages’ performance, website design, security, operability, and usability. All these are taken care of by our Atlanta SEO professionals, who meticulously check every SEO factor.",
			},
			{
				title: "On-Page & Off-Page Optimization",
				body: "Both on-page and off-page optimization are important to keep your website visible and user-friendly. Our Atlanta SEO experts at Atlanta ensure that everything looks growing, from link building to content and social media engagement to website traffic.",
			},
			{
				title: "In-Depth Technical SEO",
				body: "Not only do user-friendly websites or quality content brings in results, but there are also several other technical factors, such as fixing crawl errors, optimizing website/page loading speed, correcting canonical tags, and fixing redirecting issues. Don’t worry about any such things when you join hands with the Atlanta SEO agency.",
			},
			{
				title: "Content Curation",
				body: "As everyone says, content is king, meaning your website needs content to answer users’ queries. Our SEO agency also provides you with content curators who understand your products/services and create persuasive content for them. Content that compels users to buy products or renders services.",
			},
			{
				title: "Backlinking",
				body: "Link building is another SEO practice that most big brands with online platforms perform. It is one of the best practices to gain audiences from different channels. With quality links, your website gets maximum reach and visitors that turn into potential customers.",
			},
			{
				title: "E-Commerce SEO",
				body: "Shake hands with the IceCube digital and keep your online store’s audience thriving. Our SEO strategists work round the clock to skyrocket your E-commerce business and boost the business’s bottom line.",
			},
		],
	},

	leftIconBoxSecondary: {
		eyebrow: "Benefits Of Partnering With Atlanta SEO",
		title: "Consultants Near You",
		subtitle: [
			"You have seen how our SEO specialists contribute to uplifting your business to a new level. Plus, you have also seen how our Atlanta SEO services are a must-have for your business to nurture and grow. But most importantly, you must know what we do when we join hands with you.",
			"So here is what you can expect from IceCube Digital Agency:",
		],
		items: [
			{
				icon: "/assets/icons/eye.svg",
				title: "Transparency",
				body: "Partnership stays long-term if there is transparency and trust. We at IceCube Digital ensure that whatever best practices we implement to gain an audience for your website should be known to you. Therefore, we maintain full transparency and share the reports.",
			},
			{
				icon: "/assets/icons/timer.svg",
				title: "Meeting Deadlines",
				body: "This is another benefit you receive when partnering with IceCube Digital Agency, which is meeting deadlines. Only a few groups of SEO agencies promise and meet deadlines, and we are one of them. So, stay worry-free when we commit.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Flexible Pricing Models",
				body: "Pricing is one of the key factors where we give a competitive edge since our pricing models are flexible and affordable. We don’t charge hefty against indigestible promises; we ask for money for what we do and offer results.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "On Chat Support",
				body: [
					"Get your queries, concerns, and questions answered by our ",
					{ text: "SEO experts", href: "/hire-seo-experts/" },
					". We ensure that all the questions raised by our clients are answered on time.",
				],
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Dedicated Group of Professionals",
				body: [
					"IceCube Digital Agency is backed by ",
					{ text: "skilled SEO professionals", href: "/seo-search-engine-optimization/" },
					". You get a team of SEO strategists who not only work round the clock but also get you your investment-worthy results.",
				],
			},
		],
	},

	imageText: {
		eyebrow: "Achieve Best Result With Atlanta",
		title: "SEO Service",
		image: "/assets/photos/atlanta-seo-service.png",
		imageAlt: "Achieve best result with Atlanta SEO service",
		paragraphs: [
			"As a leading travel agency based in the USA, its main goal was to boost organic visibility and conversions. Over four months, organic traffic climbed by 200% with an increase of 100% in Conversations.",
			"Travel By Bob came to Icecube Digital to drive more organic traffic to their site. They wanted to see more stability with their keyword rankings as well as launch a successful Facebook remarketing campaign. Aligning with their marketing objectives, our Atlanta SEO Consultants have begun a quality link-building process, blogs, fixed-mobile usability issues, and have set up the Facebook remarketing campaign. In just 6 months, the site is receiving 200% more organic sessions and double conversion leads.",
		],
	},

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	faq: {
		eyebrow: "Atlanta SEO",
		title: "FAQs",
		items: [
			{
				question: "How much time does it take to rank my website as #1?",
				answer: "Generally, it takes around 5-6 months for any website to start seeing results. And there are a number of factors that contribute to ranking, such as the age of your website, competitiveness, page ranking, user-friendliness, and usability. Our Atlanta SEO professionals perform website audits to identify the challenges and then implement strategies accordingly.",
			},
			{
				question: "How is On-Page SEO different from Off-page SEO?",
				answer: "On-site SEO includes grammatically correcting meta titles and descriptions, header tags, URLs, alt tags, and SCHEMA implementation. Off-page SEO, on the other hand, caters to building backlinks, gaining followers on social media, and developing domain authority.",
			},
			{
				question: "Can You Guarantee Rankings for My Atlanta Website?",
				answer: "Most ethical Atlanta SEO companies do not provide any kind of guarantee as they can’t really control the outcome. This is because search engines like Google regularly update their algorithms and are constantly evolving. As a matter of fact, you should stay away from such companies that offer some kind of guarantee or claim that they have some special relationship with it.",
			},
			{
				question: "How do I Know if SEO is Working for Our Business?",
				answer: "You can use Google Analytics 4, Google Search Console, and other such tools to track SEO performance for your website. It will help you to track growth in organic keywords rank, organic traffic, and sales on your website so you can understand if SEO is working or not. You need to make sure that you have proper conversion tracking implemented on your website.",
			},
			{
				question: "Why SEO is Important for My Atlanta Website?",
				answer: "When searching for any products or services online, your potential buyers are more likely to click and visit websites from the top 4-5 places that the search engine shows them. So if your website is ranking in the top positions on Google SERP – it will increase the quantity and quality of traffic on your website. This will result in more customers and sales on your website. SEO also helps in driving brand awareness.",
			},
			{
				question: "How to Get Started with My Website SEO Project?",
				answer: "You can contact our Atlanta SEO experts for your SEO requirements. One of our executives will schedule to get on a call with you. Our team will conduct a thorough SEO audit for your eCommerce store to find out areas for improvement. From there we will assign the best resources for your SEO project and get started.",
			},
			{
				question: "What Can We Expect from Our SEO Engagement with IceCube Digital?",
				answer: "It’s very important that your Atlanta SEO agency shares the same vision and goal as your company. We will gather as much information as possible before we start the SEO project. You can expect transparency and open communication at all levels during your Atlanta SEO project. Our team will keep you posted all the time about what we are working on and why We will keep monitoring your website’s traffic using different tools and take action with a sound plan of action in place. We will provide a monthly SEO work report with a list of tasks completed in a specific month along with recommendations for next month. You can expect good improvements in organic traffic and sales within 4 to 6 months of SEO work. We offer a 100% money-back guarantee if you are not happy with our services.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default AtlantaSeo;
