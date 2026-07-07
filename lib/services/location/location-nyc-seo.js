const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const NycSeoCompany = {
	slug: "nyc-seo-company",
	pageTitle: "NYC SEO Company | New York SEO Services by Consultants",
	metaDescription: "Icecube Digital is a leading SEO company in New York City. Our SEO consultants provide a wide spectrum of NYC SEO Services that drive traffic and leads to your business.",

	banner: {
		heading: "NYC SEO Company",
		paragraphs: [
			"Your website is a hidden treasure chest that should be unlocked to gain more traffic, boost sales, generate revenue, get more leads, and earn more income. And to open up this treasure, you need a key that is none other than a New York SEO company. The company has got everything that ensures scalability for your business.",
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
		eyebrow: "Award-winning NYC SEO",
		title: "Agency Near You",
		contentAlign: "center",
		paragraphs: [
			[
				"NYC SEO company is a hub of ",
				{ text: "digital marketing professionals", href: "/digital-marketing-service/" },
				" that eat, sleep, and breathe search engine optimization, ranking, lead generation, and conversion. We, at Icecube Digital, have tech-savvy brains that work to make businesses thrive.",
			],
			"These NYC SEO experts are well-versed with all the approaches that ensure branding and awareness. On top of it, these professionals also ensure that your business massively scales online. Every single target audience lands on your website and turns out to be your paid customers – that’s what these SEO consultants at NYC do.",
			"And this is not the end of the benefits that you enjoy when hiring New York SEO consultants. There are several other benefits to look upon. So, don’t wait and get in touch with us.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	leftIconBox: {
		eyebrow: "Benefits You Get With NYC",
		title: "SEO Professionals",
		items: [
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "In-Depth Search Engine Optimization",
				body: "Your business would soon be invisible and shut online if you do implement the right SEO strategies. A key to the successful branding of a business on an online platform is following all the SEO metrics. And with the NYC SEO agency, you would just have to focus on adding services or products to your business, and leave the advertising or promoting part to us.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Regular Reporting to Clients",
				body: "Nothing remains hidden about when you hire NYC SEO experts. Every single bit of information about how your website is performing, how much traffic your website is gathering, and how many conversions are you getting daily, weekly, and monthly is disclosed to you regularly. We regularly stay in touch with our clients over call, email, and Skype.",
			},
			{
				icon: "/assets/icons/user-time.svg",
				title: "SEO Updated Professionals",
				body: "It’s not about how quickly we gain business, it’s all about how we win our clients by offering them the best NYC SEO services. Our SEO experts keep themselves updated with the latest metrics. Whatever new comes into digital marketing is discussed and put into practice by our professionals. Our New York SEO experts also make sure that whatever results they get through by implementing new SEO metrics are recorded and put into action next time, if found favorable.",
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Cost-Effective Marketing",
				body: "Nobody wants to heavily spend their resources, be it manpower or money, and everybody wishes to have a cost-effective approach. We have adapted that approach and ensure that the entire cost behind marketing and promoting your brand remains pocket-friendly.",
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Client As A Priority",
				body: "For us, the client is the top-most priority, and we give all our attention to our clients. Not because we are getting paid for it but because we deliver what we commit. We understand your business and listen to your needs. Post that, we form a tailor-made SEO approach to track and analyze your website performance, traffic, competition, and conversion. We work day and night to deliver what we commit to our clients.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Result-Oriented Approach",
				body: "Lastly, we work to deliver favorable results to our clients. We ensure honesty and integrity when working for our clients. All the efforts put into action aim at bringing in traffic and converting them to your potential client.",
			},
		],
	},

	cta: {
		text: "Still Not Sure What Benefits Your Website Will Get From NYC SEO Experts?",
		ctaLabel: "Contact us today",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Our NYC SEO",
		title: "Services Include",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Website SEO Audit",
				body: "Our SEO experts at the NYC agency run an in-depth SEO audit to analyze the performance, site speed, page speed, mobile-friendliness, and user experience. This way, we get a complete idea of the strengths and weaknesses of your website to plan accordingly.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Onpage SEO",
				body: [
					"Our NYC SEO consultants target those pages that are out of the league and bring them into the top 10 search results. Our dedicated ",
					{ text: "WordPress SEO service", href: "/wordpress-seo-service/" },
					" provider optimize images, content, meta titles and descriptions, and links.",
				],
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Complete Technical SEO",
				body: "Slow loading pages may deter the performance of the website. If not fixed on time, you may lose customers, and in the worst-case scenario, your site might not even get traffic. Since your website is the only medium through which you can dominate your competitors online, you must avail of the technical SEO service from the NYC SEO team. What’s the best you can expect is no minor-to-major errors, page loads within seconds, and all the content and images to be optimized.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Link Building",
				body: "Building website authority is important since only then your target audience will trust you. Only then, Google will rank your pages. Only then, you would be able to get traffic from other websites. And all this is possible if you hire NYC SEO consultants. Our team of SEO professionals brings in links from high domain authority websites so that your website gets traffic, which eventually leads to high conversion.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "Content Writing",
				body: "Nothing can beat persuasive content that compels your readers to click and get themselves registered to your website, render your services, or buy your products. One of the reasons why big brands thrive is they add pieces of content that discuss the products or services, their USPs, and their price. If you want your target audience to be well-versed with what you offer or sell, you must think of adding content to your website. We, at Icecube Digital, offer Content Writing services at an affordable rate. Get in touch and know more about it.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "E-commerce SEO",
				body: "People usually do not trust easily when it comes to buying products online. And if you have opened up a new e-commerce store, then there are high chances of high customer acquisition costs. If you have already opened up an online e-commerce store and are still struggling to hold the audience, you are at the right place. Icecube Digital has solutions for both situations. Our SEO experts in New York go above and beyond to acquire customers for your e-commerce store. So, connect with us and get more details.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Why Choose Us As Your NYC",
		title: "SEO Experts?",
		subtitles: [
			"We are a customers-favorite digital marketing company that does everything to build a brand from a common name. From web designing to development and writing content to promoting through SEO, we do it all.",
			"We have an in-house team that is adroit in their respective field. We are proud of enhancing the user experience on websites, being part of different brands’ success stories, and offering modern services that make brands stand out differently. We assure 100% accuracy and when we say we mean it.",
			"Another reason to choose us over other marketing agencies is we believe in transparent communication, meaning no hidden rules and regulations. Our communication method and approach are quite simple. You get reports on a daily, weekly, and monthly basis, depending upon how you want it.",
			"That’s all from our side. Do let us know if you have any questions, concerns, or queries.",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/user-team.svg",
				title: "Expert SEO Team",
				body: "Would you like to turn your marketing efforts into profits for your company? We are a digital marketing company based in NYC and we attribute all our success to our team of SEO experts. Our SEO team of experts never stop inspiring one another and always go the extra mile to improve our services and help our clients. From SEO specialist, consultant to project manager, always expect high quality output from our team.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "Client Comes First",
				body: [
					"At Icecube Digital, we believe our client’s success is our success. Our team, comprised of seasoned marketers, web designers, and developers, is dedicated to executing your vision with precision, delivering maximum results through NYC SEO services. We ensure proactive collaboration on every project to guarantee optimal outcomes. Our unmatched customer service and dedicated staff are always ready to go above and beyond for you, offering top-notch ",
					{ text: "SEO service near you", href: "/local-seo-services/" },
					".",
				],
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Clear Reporting",
				body: "Our team believes in transparency when it comes to presenting the reports of our SEO campaigns. As your digital marketing partner, we schedule to send out monthly SEO reports which include statistics about traffic, rankings, sales and overall performance. Our dedicated manager will discuss the results of our hard work and answer the questions you may have.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Honesty & Integrity",
				body: "We’ll work closely with you to make sure your business thrives and succeeds – starting today. No matter the size or industry, we have the expertise needed to reach your desired business goals. Trust our honest, down-to-earth approach to get ahead in a competitive market. As a trusted NYC SEO Company, we never try to sell irrelevant services to our clients.",
			},
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Extensive SEO Knowledge",
				body: "Everyone is trying to rank their website high in Google and we can help you do it with our affordable and tailored SEO services. With our expert team of SEO professionals and over 14 years of experience, we have helped hundreds of companies just like yours. We are a team that is not only passionate about the work that we do but the growth of our clients.",
			},
			{
				icon: "/assets/icons/rocket.svg",
				title: "Proactiveness",
				body: "Icecube Digital was built on the principle of providing personalized attention to each and every single client. We work tirelessly to find a marketing solution that’s perfect for you, so that you can succeed in ways you never thought possible. Our NYC SEO experts will take on any challenge so that you always reach the top spots in Google and get the most qualified leads.",
			},
		],
	},

	imageText: {
		eyebrow: "Get Best Results With Our",
		title: "NYC SEO Consultant",
		image: "/assets/photos/nyc-seo-consultant.png",
		imageAlt: "",
		paragraphs: [
			"With organic traffic at an all-time low, it was critical to turn things around. We regained the rankings and increased them to new all-time highs, generating more than 160% organic traffic and 67% organic revenue in 2022.",
			"CCC – A leading medical cannabis healthcare center came to us to recover their organic website traffic and revenue through the power of SEO. Some of the tasks we have performed such as removing thin content, toxic backlink removal, creating PR, writing informative copy with LSI keywords, website speed optimization, and fixing 404 errors. In 7 months, when Google rolled out another algorithm update, this time website got a nice recovery with continuous SEO efforts. Our NYC SEO experts grew organic traffic by more than 160% and 67% in revenue.",
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
		eyebrow: "NYC SEO",
		title: "FAQs",
		items: [
			{
				question: "How Much Does NYC SEO Service Cost?",
				answer: "The cost of NYC SEO services depends on factors like your website’s current situation, approach, the end goal, and even the company you select for SEO. Most NYC SEO companies that offer cheap services are well-known for “black-hat” techniques that can severely damage your organic ranking credibility and might also result in a penalty. Thus, it is highly recommended that you should only hire a professional NYC SEO company to get the best results.",
			},
			{
				question: "Can You Guarantee Rankings For My Website?",
				answer: "Most ethical New York SEO companies do not provide any kind of guarantee as they can’t control the outcome. This is because google regularly updates its algorithms and is constantly evolving. You should stay away from such businesses which give some kind of guarantee or claim that they have some special relationship with Google.",
			},
			{
				question: "How Long Does New York SEO Take To Work?",
				answer: "This too depends on your approach and what you are trying to achieve with SEO for your website in New York. But with that being said, know that there is no overnight way to rank better on Google. If by results you mean a considerable increase in website traffic and sales, this would probably need at least 5 to 6 months. So consistent efforts and patience is most important for SEO success.",
			},
			{
				question: "What Are NYC Local Rankings Or New York Local SEO?",
				answer: "Local ranking for websites is the process of ranking your business higher on local searches in New York. Google uses a different algorithm for different location-based search queries. Apart from the factors, considered for a national search query, additional factors like local citations in 3rd party directories, quantity, quality of online reviews, etc. are also considered to rank a business in local search.",
			},
			{
				question: "How Will You Measure The Success Of SEO?",
				answer: "To measure the success of SEO, we will consider several performance metrics, including clicks, positioning of keywords, impressions, sessions, overall traffic, and organic sales on your website. We will ensure that you have implemented proper conversion tracking on your site.",
			},
			{
				question: "How Will You Know This Will Work For Us?",
				answer: "First, we will understand your business niche, products, and services and then analyze your competitors and target audience. Accordingly, we will prepare specific SEO strategies that will work for your website. We know that every business has different requirements, so we will provide unique services to fulfill your needs.",
			},
			{
				question: "Why Is It Important To Hire An NYC SEO Agency For My Website?",
				answer: "If you’ve just started a website, you might be able to handle the basics of SEO on your own by spending about 15-20 hours a week. But if you are serious about your website rankings, you’ll surely have to spend a lot more time on the process. On top of it, you’d also be required to keep yourself updated with the latest changes in Google algorithms and top strategies to get the desired results. This makes hiring a professional NYC SEO expert for the job a far better option.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default NycSeoCompany;
