const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WhiteLabelSeoServices = {
	slug: "white-label-seo-services",
	pageTitle: "White Label SEO Services | Icecube Digital",
	metaDescription: "Icecube Digital's white label SEO services let your agency offer expert SEO under your brand — on-page, off-page, technical, and local SEO, content, link building, and transparent reporting, with flexible custom plans and no in-house team required.",

	banner: {
		heading: "White Label SEO Services",
		paragraphs: [
			"In the competitive field of e-commerce, building a visually appealing and user-friendly website is only half the battle. Many businesses invest substantially in creating a great online presence but overlook the crucial aspect of search engine optimization (SEO). Without effective optimization, potential customers struggle to find these businesses at top search results for relevant keywords.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Your Free AI SEO Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "White Label SEO Services",
		title: "Success Stories",
		subtitle: [
			"Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements. In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Case Studies",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "SEO Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	plainText: {
		eyebrow: "Our Top Ratings and Recognitions Across",
		title: "Leading Platforms",
		contentAlign: "center",
		paragraphs: [
			"White label SEO is a service where one company provides SEO solutions under another brand's name. The white label provider handles the technical aspects, reporting, and implementation of SEO strategies. It allows businesses to expand their service offerings without investing in specialized expertise, creating a seamless and efficient partnership.",
			"At Icecube Digital, our white label SEO services go beyond the conventional, providing comprehensive solutions for businesses seeking to enhance their online presence. We specialize in integrating our expertise into your agency, allowing you to offer top-notch SEO services without the need for an in-house team.",
		],
	},

	plainTextSecondary: {
		eyebrow: "Why You Should Consider White Label SEO Services For",
		title: "New SEO Agencies",
		contentAlign: "center",
		paragraphs: [
			[
				"New SEO agencies may find it difficult to provide full-scale optimization services because of unavailable resources, time and expertise. That is where white label SEO services will be a game changer. By collaborating with a ",
				{ text: "professional SEO company", href: "/seo-search-engine-optimization/" },
				" offering white label services, you will be able to provide high quality SEO campaigns in your brand, but leave the actual implementation to the professionals.",
			],
			"Keywords research and technical audits to link building and reporting, all areas of SEO can be handled with ease and without necessarily increasing internal staff. This not only saves money and time, but also assists your agency to grow fast and sustain a constant level of satisfaction amongst clients.",
			"The white label SEO relationship provides the opportunity to concentrate on client relations and business development, whereas the specialists guarantee quantifiable outcomes with the help of data-driven approaches. For new agencies looking to gain an edge and build credibility over their rivals, partnering with a professional SEO company for white label services is among the most effective and efficient growth methods available today. Let's get in touch with our White Label SEO experts to get a free AI-powered SEO plan for your prospective client and kickstart it immediately.",
		],
		ctaLabel: "Request A Demo",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	topIconBoxSecondary: {
		eyebrow: "Why Choose Us as Your White Label",
		title: "SEO Agency?",
		items: [
			{
				icon: "/assets/icons/grid.svg",
				title: "Comprehensive Solutions",
				body: "Our white label SEO agency offers a comprehensive approach, covering everything from local SEO services to tailored strategies for your agency. With a commitment to excellence, we ensure your clients receive top-notch solutions."
			},
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Proven Expertise",
				body: "As a trusted white label SEO firm, we bring a track record of success. Our team of SEO specialists is well-versed in the latest trends and techniques, ensuring that your clients consistently achieve remarkable results."
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Tailored for Agencies",
				body: "Icecube Digital understands the intricacies of agency operations. Our white label SEO service for agencies is designed to integrate smoothly into your workflow, providing a hassle-free experience for both you and your clients."
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Results-Driven Approach",
				body: "Elevate your agency's success with our results-driven methodology. We focus on delivering tangible outcomes, ensuring that every investment translates into enhanced visibility, increased traffic, and improved rankings."
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Local SEO Excellence",
				body: "Unleash the power of local SEO with our specialized services. Whether your clients operate on a national or local scale, our white label local SEO services are tailored to meet their unique needs, capturing valuable search territory."
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Proactive Analytics",
				body: "Icecube Digital doesn't just optimize and leave. We provide comprehensive analytics, offering insights into the performance of each SEO campaign as your white label SEO company. Stay informed with regular reports, allowing your agency to make data-driven decisions for continuous improvement."
			},
			{
				icon: "/assets/icons/predictive.svg",
				title: "Scalability Options",
				body: "Adapt to the changing needs of your clients with our scalable solutions. Whether your agency is experiencing rapid growth or looking for a steady, reliable partner, Icecube Digital provides flexible packages that align with your changing requirements."
			},
			{
				icon: "/assets/icons/comment.svg",
				title: "Transparent Communication",
				body: "Experience transparent communication at every step. Our team maintains an open line, ensuring that you are informed about the progress of your campaigns. Collaboration is key, and we prioritize a relationship built on trust and clarity."
			},
			{
				icon: "/assets/icons/magnet.svg",
				title: "Increase Conversions",
				body: "With a track record of excellence, our White Label SEO services are tailored to fuel your business growth. Experience a proven strategy that not only enhances visibility but consistently delivers successful conversions, advancing your business to new heights."
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Remarkable ROI",
				body: "Experience exceptional returns on investment as our strategic approach maximizes visibility, enhances user experiences, and strategically navigates conversion paths. Elevate your digital presence and achieve lasting success with our effective solutions."
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Proactive Problem Solving",
				body: "Anticipate challenges before they arise. Icecube Digital's proactive approach to problem-solving means that potential issues are addressed swiftly, minimizing downtime and ensuring a smooth and uninterrupted SEO service for your clients."
			},
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Continuous Education",
				body: "Stay ahead in the realm of SEO with Icecube Digital, a leading SEO agency in the US dedicated to ongoing education and innovation. Benefit from regular updates, webinars, and resources that keep your agency abreast of the latest trends, algorithm changes, and industry best practices."
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "In-Depth SEO Strategy",
				body: "Collaborate on a comprehensive SEO strategy that not only aligns with current goals but is future-proof. Our in-depth approach includes constant analysis, allowing us to adapt strategies based on search engine algorithms and industry trends."
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Website Optimization Beyond Keywords",
				body: [
					"Icecube Digital's optimization extends beyond keywords. We delve into user experience optimization, mobile-friendliness, technical SEO, and providing white label ",
					{ text: "local SEO services", href: "/seo-search-engine-optimization/" },
					". We ensure that your clients' websites are not just visible but provide an exceptional experience for their visitors.",
				]
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Local Content and Link Building",
				body: "Elevate your clients' content strategy with our local-focused content creation and effective link-building techniques. Additionally, explore our expertise in areas such as social media integration, ensuring an integrated digital marketing approach."
			},
			{
				icon: "/assets/icons/checklist.svg",
				title: "Transparent Reporting and Analytics",
				body: "Our white label SEO firm believes in transparency. Our White Label SEO services come with detailed reporting and analytics, providing you and your clients with a clear understanding of the impact and success of the implemented strategies. Track keyword rankings, website traffic, and other key metrics effortlessly."
			},
			{
				icon: "/assets/icons/eye.svg",
				title: "Continuous Monitoring and Adaptation",
				body: "Icecube Digital ensures continuous monitoring of SEO performance. We stay attentive, adapting our approaches to keep pace with industry shifts, algorithm updates, and emerging trends, guaranteeing sustained success for your clients."
			},
			{
				icon: "/assets/icons/comment-list.svg",
				title: "Dedicated Support and Consultation",
				body: "Our commitment goes beyond delivering services, we offer dedicated support and consultation. Have questions or need insights? Icecube Digital's team of SEO experts is readily available to provide guidance, ensuring a collaborative and informed partnership."
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Pay for Guaranteed Performance",
				body: "Experience peace in your SEO projects with our pay for performance guarantee. At Icecube Digital, we're committed to delivering results. Only pay for the success achieved, ensuring your peace of mind throughout the journey."
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Client-Centric Approach",
				body: "At Icecube Digital, as the leading white label SEO agency, we prioritize your clients' satisfaction. Our client-centric approach means specialized strategies and issue resolution. To elevate your agency's reputation by delivering exceptional SEO services that exceed client expectations."
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Holistic Digital Optimization",
				body: "Experience digital optimization with Icecube Digital's white label SEO services. Beyond keywords and content, we optimize user experience, mobile-friendliness, and technical aspects. Our holistic approach ensures that every aspect of your clients' online presence contributes to their overall success."
			},
		],
	},

	tableSeoPlans: {
		eyebrow: "Let's Double Your Clients With Our Custom",
		title: "White Label SEO Plans",
		subtitle: "We create SEO pricing plans tailored to your business goals, helping you gain more visibility online and grow. Whether you're a small business or a large company, we focus on the right mix of on-page, off-page, and technical SEO to improve your rankings, bring in more visitors, and increase revenue. Let's work together to build an SEO plan that fits your needs!",
		planLabel: "CUSTOM White Label SEO PLANS",
		price: "500",
		period: "Monthly",
		leftTitle: "How We Determine Our SEO Pricing",
		items: [
			{
				icon: "/assets/icons/note-edit-orange.svg",
				title: "Content Marketing Solutions",
				body: "Icecube Digital offers a comprehensive range of content formats, designed to elevate your business with high-quality, SEO-optimized content tailored to any industry. Our dedicated content team ensures impactful and engaging strategies that drive results.",
			},
			{
				icon: "/assets/icons/grid-icon-orange.svg",
				title: "Website Size Considerations",
				body: "Your website's size significantly influences its SEO strategy, including content planning, management, and on-page optimization. Icecube Digital's experts analyze your website's unique requirements to develop a personalized SEO approach that maximizes performance.",
			},
			{
				icon: "/assets/icons/support-icon-orange.svg",
				title: "Consultation Services",
				body: "At Icecube Digital, clients gain access to a team of over 20+ digital marketing specialists, regular consultation calls, and ongoing business reviews, backed by detailed ROI reports. Our White Label SEO experts can also manage complex digital marketing strategies, which you can explore with your dedicated strategist.",
			},
		],
		rightTitle: "Included in All Plans:",
		features: [
			"AI-Driven Strategy Suggestions",
			"Competitor Analysis and Lead Monitoring",
			"Data-Backed Improvement Ideas",
			"Support from a Team of 50+ Digital Experts",
			"Full-Funnel ROI Tracking",
			"Unified Marketing and Sales Data",
			"Complete SEO (On-Page, Off-Page, and Technical)",
			"Track Phone Calls, Leads, and Revenue",
			"Custom Reports and Insights",
			"Local Seo and Google Business Profile Optimization",
		],
		ctaLabel: "Get My Custom Proposal",
		ctaHref: "#",
	},

	topIconBox: {
		eyebrow: "Smooth Transition to White Label",
		title: "SEO Excellence",
		subtitle: "At Icecube Digital, we prioritize a smooth SEO client migration experience with our white label local SEO services. Our seasoned SEO managers collaborate with your business to integrate campaigns from previous providers, tailoring our approach to your clients' unique needs. The process involves strategic steps:",
		items: [
			{
				icon: "/assets/icons/database.svg",
				title: "Intake",
				body: "Gather comprehensive information from your clients, including data and reports, laying the foundation for subsequent steps."
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Onboarding",
				body: "Our account managers integrate your clients' existing Google Analytics into the white-label dashboard, ensuring correct access levels."
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "Product Pairing",
				body: "Match your client with the optimal package, aligning budget considerations with tailored needs for profitable and impactful results."
			},
			{
				icon: "/assets/icons/navigate-into.svg",
				title: "Booking",
				body: "Choose booking from our monthly cycles to initiate your client's monthly campaign, providing flexibility and convenience."
			},
			{
				icon: "/assets/icons/checklist.svg",
				title: "Campaign Activation",
				body: "Our in-house team consolidates campaign objectives, delivering SEO reports customized to each client before the cycle completion."
			},
		],
	},

	faq: {
		eyebrow: "White Label",
		title: "SEO FAQs",
		items: [
			{
				question: "What is White Label SEO, and how does it fit my agency?",
				answer: "White label SEO allows your agency to offer SEO services under your brand while outsourcing the work. This benefits your agency by expanding service offerings without the need for an in-house SEO team.",
			},
			{
				question: "How does Icecube Digital ensure results with White Label SEO services?",
				answer: "We follow a data-driven, white-hat methodology — combining on-page, off-page, technical, and local SEO with continuous analysis, transparent reporting, and ongoing optimization — so your clients see measurable improvements in rankings, traffic, and conversions.",
			},
			{
				question: "Can I trust Icecube Digital's White Label SEO for my industry?",
				answer: "Yes. We've delivered SEO across a wide range of industries and tailor strategies to each client's niche, audience, and competition, so the approach fits your specific market.",
			},
			{
				question: "What sets Icecube Digital apart as a White Label SEO provider?",
				answer: "Our comprehensive solutions, proven expertise, transparent reporting, scalable plans, dedicated support, and 100% white-label confidentiality let you deliver premium SEO under your brand with complete peace of mind.",
			},
			{
				question: "How can I get started with Icecube Digital's White Label SEO services?",
				answer: "Reach out for a free consultation. We'll review your needs, provide an AI-powered SEO plan for your prospective client, and handle onboarding so you can start offering SEO under your brand quickly.",
			},
			{
				question: "How experienced are your SEO managers and team members?",
				answer: "Our team includes seasoned SEO managers and 50+ digital experts well-versed in the latest algorithms, tools, and best practices, with years of hands-on experience across diverse projects.",
			},
			{
				question: "Which tools do you rely on for your SEO services?",
				answer: "We use industry-leading tools for keyword research, technical audits, rank tracking, analytics, and reporting — including platforms like Google Analytics, Search Console, and leading SEO suites — to inform every decision.",
			},
			{
				question: "Are your SEO practices compliant with White Hat standards?",
				answer: "Yes. We strictly follow white-hat, search-engine-compliant practices that build sustainable, long-term results without risking penalties.",
			},
			{
				question: "What makes your team credible in the SEO industry?",
				answer: "A proven track record, certified specialists, transparent reporting, top ratings across Google, Clutch, GoodFirms, and Glassdoor, and years of delivering measurable results for agencies worldwide.",
			},
			{
				question: "Do you engage in risky SEO practices that might lead to penalties?",
				answer: "No. We avoid black-hat tactics entirely and rely on ethical, white-hat strategies that protect your clients' websites from penalties and ensure lasting performance.",
			},
			{
				question: "Is duplicate content used across multiple websites?",
				answer: "No. We create unique, original content tailored to each client and website to maintain quality, avoid duplication issues, and support strong rankings.",
			},
			{
				question: "Can I speak to your previous clients for feedback?",
				answer: "We can share case studies, references, and testimonials, and where appropriate, arrange references so you can hear about our work directly.",
			},
			{
				question: "Will I receive regular reports? What details do they include?",
				answer: "Yes. You'll receive detailed, white-labeled reports covering keyword rankings, traffic, backlinks, technical health, conversions, and other key metrics, so you and your clients stay fully informed.",
			},
			{
				question: "Can your team interact directly with my clients if needed?",
				answer: "We operate fully white-label and stay invisible by default, but if you want us to join calls or interact with your clients under your brand, we can — only with your approval.",
			},
			{
				question: "Do you stay updated on Google algorithm changes?",
				answer: "Yes. We continuously monitor algorithm updates and industry shifts, adapting strategies proactively to keep your clients' rankings stable and growing.",
			},
			{
				question: "Which industries have you worked with for SEO projects?",
				answer: "We've delivered SEO across many industries — including eCommerce, healthcare, professional services, local businesses, B2B, and more — adapting our approach to each sector's needs.",
			},
			{
				question: "Will my information remain secure and confidential?",
				answer: "Yes. We sign NDAs and follow strict confidentiality and data-security practices, so your information and client relationships stay fully protected.",
			},
			{
				question: "Will I have the same level of control over your team as I do with my in-house employees?",
				answer: "Yes. You direct the work, set priorities, and communicate through your preferred tools, with a dedicated point of contact — so our team functions as a seamless extension of yours.",
			},
			{
				question: "Can I hire a complete SEO team instead of individual resources?",
				answer: "Yes. You can engage a full white-label SEO team — strategists, specialists, content, and link builders — or individual resources, depending on your needs.",
			},
			{
				question: "What happens if my workload exceeds the original plan?",
				answer: "Our plans are flexible and scalable. If your workload grows, we can adjust capacity or move you to a larger package so delivery stays smooth.",
			},
			{
				question: "What happens to unused hours in my SEO package?",
				answer: "We'll align on rollover and usage terms upfront based on your chosen plan, so you get the most value from your package.",
			},
			{
				question: "What tools do you use for team communication and productivity?",
				answer: "We collaborate through tools like Slack, ClickUp, email, and your preferred project-management platforms to keep communication clear and projects on track.",
			},
			{
				question: "What are the main advantages of using white label SEO services?",
				answer: "You expand your service offerings, increase revenue, and deliver expert SEO under your brand — without hiring, training, or managing an in-house team — while we handle execution behind the scenes.",
			},
			{
				question: "What is a white label SEO reseller?",
				answer: "A white label SEO reseller offers SEO services to clients under their own brand while a partner like Icecube Digital performs the actual work behind the scenes.",
			},
			{
				question: "What white label SEO services can you do?",
				answer: "We provide on-page, off-page, technical, and local SEO, keyword research, content creation, link building, audits, GBP optimization, and transparent reporting — all under your brand.",
			},
			{
				question: "How does white label SEO work?",
				answer: "You share client requirements, we execute the SEO strategy and deliver white-labeled reports under your brand, and you manage the client relationship while we stay invisible.",
			},
			{
				question: "Do you include content in your white label SEO services for agencies?",
				answer: "Yes. Our content team produces high-quality, SEO-optimized content — including blogs, landing pages, and on-page copy — tailored to each client's industry.",
			},
			{
				question: "Do you include GBP (Google Business Profile) optimizations in your white label SEO services for agencies?",
				answer: "Yes. Local SEO and Google Business Profile optimization are included, helping your clients improve local visibility and capture more nearby customers.",
			},
			{
				question: "What is the difference between SEO and local SEO?",
				answer: "SEO improves your visibility broadly across search results, while local SEO focuses on ranking for location-based searches — optimizing Google Business Profile, local citations, and maps — to attract nearby customers.",
			},
		],
	},

	ourClients: ourClientsSection,

	getQuote: true,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WhiteLabelSeoServices;
