const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const MarketingAutomationServices = {
	slug: "marketing-automation-services",
	pageTitle: "Marketing Automation Services | Icecube Digital",
	metaDescription: "Icecube Digital's marketing automation services help businesses connect marketing channels, customer data, and campaign execution into one unified system — turning leads into customers with structured, trigger-based workflows.",

	banner: {
		heading: "Marketing Automation Services",
		paragraphs: [
			"Businesses invest in marketing tools, run multiple campaigns, and generate leads regularly, but converting those leads into customers remains inconsistent. The problem isn't a lack of marketing activities but the absence of a structured process.",
			"At Icecube Digital, a leading marketing automation company, helps address these operational gaps by setting workflow automation that connects marketing channels, customer data, and campaign execution into one unified system.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Marketing Automation Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "What is",
		title: "Marketing Automation?",
		contentAlign: "center",
		paragraphs: [
			"Marketing automation refers to using software and technology to execute repetitive and rule-based tasks in marketing with minimal human intervention. These activities often involve lead capture, social media posting, email campaigns, customer segmentation, and engagement tracking.",
			"Instead of your marketing reps manually executing each step in a campaign or performing a task, marketing automation systems for businesses trigger actions based on predefined rules and customer behaviour. For example, when a user signs up for a newsletter or interacts with the campaign, the marketing automation platform initiates the next step, which can include sending personalized emails, assigning lead scores, and aligning the lead to a suitable sales rep.",
			"With marketing automation in place, businesses can respond to the customer's action instantly, instead of waiting for manual follow-up. Businesses are integrating marketing automation because it reduces manual workload, improves response time, and delivers personalized responses or helps in curating a personalized experience for the customer.",
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "How Marketing",
		title: "Automation Works?",
		subtitle: "Marketing automation works on a simple principle of trigger-based logic and conditional workflows. It triggers a set of automated responses, like a thank-you email, followed by educational content, as soon as someone takes an action. Here's how marketing automation works:",
		columns: 2,
		steps: [
			{
				title: "Lead Capture Automation",
				body: "The data about leads is automatically extracted from forms, landing pages, chatbots, and campaign interactions, and is stored in Excel sheets or saved in CRM platforms. AI-powered algorithms can assign a score to a lead and route the lead to the sales team for further engagement.",
			},
			{
				title: "Email Marketing Automation",
				body: "When a prospect subscribes to an email newsletter or interacts with campaigns, the platform automatically starts sending personalised email sequences and tries to nurture the lead with relevant content and scheduled follow-ups.",
			},
			{
				title: "Customer Journey Automation",
				body: "With marketing automation solutions, the customer journey can be structured into defined stages and automate actions as users move from one phase to the next. For example, once a customer completes a purchase, the automation workflow begins the post-purchase phase of the journey.",
			},
			{
				title: "SEO & Paid Ads Campaign Automation",
				body: "If a user visits a product page or abandons a form, automation platforms trigger remarketing ads, adjust audience targeting, and align paid campaigns with CRM and conversion data.",
			},
			{
				title: "AI-Powered Marketing Automation",
				body: "AI-powered marketing automation helps businesses integrate AI algorithms to boost the value of automation. AI analyzes the pattern to predict user intent, optimise campaign targeting, and recommend automated messaging strategies for improved conversions.",
			},
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	topIconBox: {
		eyebrow: "Our Marketing",
		title: "Automation Services",
		subtitles: [
			"To deliver strategic and measurable results from marketing automation, we combine technical expertise, automation platforms, and data-driven strategies to build scalable marketing systems. Here are the automated marketing services for businesses that we offer:",
		],
		items: [
			{
				icon: "/assets/icons/announcement.svg",
				title: "Marketing Automation Strategy",
				body: "Our expert marketing consultants and marketing automation specialists analyze your marketing funnel, customer journey, and campaign processes to design a structured automation strategy, which defines workflows, segmentation rules, and lead scoring models.",
			},
			{
				icon: "/assets/icons/magnet.svg",
				title: "Lead Generation Automation",
				body: "We implement automated lead capture systems to collect, qualify, and route leads to CRM platforms from websites, landing pages, paid campaigns, chatbots, and forms. They enrich contact profiles with behavioral data, and trigger immediate engagement workflows such as welcome & follow-up emails.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Lead Nurturing Automation",
				body: "Our automation experts create multi-stage nurturing workflows that guide prospects through the buying journey using behavior-based triggers and segmentation rules. We analyze the trigger and build the segmentation rules after assessing your customer audience, products, and workflows.",
			},
			{
				icon: "/assets/icons/pc.svg",
				title: "Marketing Workflow Automation",
				body: "As per the chosen marketing automation platform, we design structured marketing workflows that automate repetitive operational tasks such as audience segmentation, campaign scheduling, follow-up messaging, and data synchronization.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Campaign Automation & Optimization",
				body: "Our experts implement automated campaign systems to manage multi-channel marketing activities across email marketing, landing pages, advertising platforms, and social media platforms. Based on performance, we optimize and fine-tune the campaign to deliver better results.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO & PPC Marketing Automation",
				body: "We connect marketing automation platforms with SEO and PPC campaigns to create a unified lead tracking system. The automated marketing workflows capture the leads generated through paid and organic tactics, and attribute them to the correct campaign and trigger remarketing workflows.",
			},
			{
				icon: "/assets/icons/voice.svg",
				title: "AI-Driven Marketing Personalization",
				body: "We integrate AI-powered personalisation capabilities to enhance the performance of marketing automation. The AI tools analyse behavioral data, engagement patterns, and historical interactions, and allow automation platforms to dynamically adjust campaign messaging & deliver targeted offers.",
			},
			{
				icon: "/assets/icons/predictive.svg",
				title: "Marketing Reporting & Analytics Automation",
				body: "We integrate analytics and reporting platforms to automation workflow that can collect campaign data from marketing platforms and CRM systems and track key metrics. We implement custom dashboards to make it easier for sales and marketing team to derive the insights.",
			},
		],
	},

	leftIconBoxSecondary: {
		eyebrow: "Marketing Automation",
		title: "Platforms We Work With",
		subtitle: "As a leading and expert service provider of automated marketing services, we work with a range of marketing automation platforms that could help businesses see a 541% increase in qualified lead generation.",
		items: [
			{
				icon: "/assets/icons/hubspot-icon.svg",
				title: "HubSpot Marketing Automation",
				body: "Our experts configure HubSpot workflows, lead scoring models, and CRM integrations to automate lead nurturing, sales handoffs, lifecycle management, and multi-channel campaign tracking within a unified platform.",
			},
			{
				icon: "/assets/icons/marketo-icon.svg",
				title: "Marketo Marketing Automation",
				body: "Marketo, a part of Adobe Experience Cloud, is an enterprise marketing automation platform designed for complex B2B funnels, and we help in setup enterprise-grade campaign automation, advanced lead scoring, account-based marketing workflows, and deep analytics.",
			},
			{
				icon: "/assets/icons/activecampaign-icon.svg",
				title: "ActiveCampaign Automation",
				body: "We design behavior-driven automation in ActiveCampaign to combine email marketing, marketing automation, CRM pipelines, and segmentation rules to create personalised communication workflows and setup efficient lead nurturing systems.",
			},
			{
				icon: "/assets/icons/mailchimp-icon.svg",
				title: "Mailchimp Marketing Automation",
				body: "Mailchimp is a widely used marketing automation platform by startups and small businesses. We setup workflows to manage email campaigns, audience segmentation, and triggered messaging while tracking engagement metrics.",
			},
			{
				icon: "/assets/icons/klaviyo-icon.svg",
				title: "Klaviyo Marketing Automation",
				body: [
					"Klaviyo is an ecommerce-focused marketing automation platform, and our Klaviyo ",
					{ text: "email marketing services", href: "#" },
					" enable personalised messaging, abandoned cart recovery, and retention automation by integrating customer purchase data with email and SMS campaigns.",
				],
			},
		],
	},

	infoBox: {
		eyebrow: "Benefits of",
		title: "Marketing Automation",
		subtitle: "As a marketing automation agency that has worked with several businesses across the globe to implement automation workflows, we can say that when implemented thoughtfully, marketing automation can create a fertile ground for healthy, long-term relationships with your customers.",
		gridClass: "sm:grid-cols-2",
		items: [
			{
				title: "Save time with automated marketing campaigns",
				body: "Marketing automation eliminates the need for manual execution. By scheduling emails, triggering follow-ups, and managing workflows automatically, the marketing team can focus on strategy, campaign optimisation, and customer engagement, instead of balancing both growth and administrative tasks.",
			},
			{
				title: "Improve lead nurturing and conversions",
				body: "With marketing automation, a structured lead nurturing process is followed. AI-powered capabilities further strengthen this process by analyzing engagement patterns and deriving insights that help with assigning lead score, identifying high-intent prospects, and prioritizing leads.",
			},
			{
				title: "Deliver personalized customer experiences",
				body: "Around 71% of customers expect personalized experiences, and 76% of them express frustration when they don't receive them. Marketing automation does it with ease by analyzing customer data and refining the messages accordingly.",
			},
			{
				title: "Improve marketing and sales alignment",
				body: "Marketing automation connects marketing platforms with CRM systems, ensuring that lead data flows directly to sales teams. Automated lead scoring, qualification, and routing help sales reps prioritise high-intent prospects and respond more efficiently.",
			},
			{
				title: "Increase marketing ROI",
				body: "Marketing automation can boost ROI by an average of $5.44 for every $1 spent, delivering around 444% return on investment. This means that your expenses on software or the plans can be recovered within six months of establishing.",
			},
		],
	},

	processStepsSecondary: {
		eyebrow: "Our Marketing Automation",
		title: "Implementation Process",
		columns: 2,
		subtitle: "As an experienced service provider of automated marketing services, the success of marketing automation depends on 3 factors: starting simple, clean data, and clear goals. Here's how we set up the strong foundation of marketing automation:",
		steps: [
			{
				title: "Business Analysis & Automation Planning",
				body: "Our experts connect with your marketing and sales team to understand the operational processes, and we analyze your lead generation channels, CRM structure, and customer journey to identify gaps and opportunities. This helps in creating a structured automation plan.",
			},
			{
				title: "Marketing Workflow Design",
				body: "Our experts brainstorm and map marketing workflows that show how leads move through the funnel. We create automation flows for lead nurturing, onboarding, remarketing, and retention, so that every interaction with a prospect has a purpose.",
			},
			{
				title: "Platform Setup & Integration",
				body: "Based on your requirements and budget, our experts will recommend the best automation platform and implement & integrate in your tech stack. From suggesting the best plans and configuring the platform to integrating them with your existing third-party systems, we manage everything.",
			},
			{
				title: "Campaign Automation Implementation",
				body: "Once the platform is ready, we transform the mapped marketing workflows into real and implement automated campaigns across email marketing, landing pages, lead capture forms, and multi-channel engagement workflows.",
			},
			{
				title: "Monitoring & Optimization",
				body: [
					"Marketing automation is not a one-time setup, and that's why, as an ",
					{ text: "AI digital marketing agency", href: "#" },
					", our team monitors the automation performance and refines workflows with ongoing optimization, A/B testing, and data-driven adjustments.",
				],
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Why Choose Us For",
		title: "Marketing Automation?",
		subtitles: [
			"Icecube Digital is a leading email marketing service provider with a team of 35+ in-house experts. Our thoughtful strategies and expert implementation have helped businesses increase their revenue by 90% during the first year working with us. Here's why you can trust us to make your marketing automation do wonders:",
		],
		items: [
			{
				icon: "/assets/icons/user-team.svg",
				title: "Experienced marketing automation specialists",
				body: "We have been working as an independent eCommerce agency for 14+ years, and after serving over 250 clients across the globe, we have experience in SEO, email marketing, PPC, and conversion optimization. Our hands-on experience in implementing marketing automation platforms ensures that your businesses make the best use of every penny you invest in software and experts.",
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "AI-powered marketing workflows",
				body: "We use AI and ML-powered tools to automate campaign execution, analyze behavioural data, design campaign content, and optimize targeting. The integration of AI tools reduces time as compared to getting things done manually, and delivers more precise marketing strategies that improve engagement and conversion performance.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Custom automation strategies",
				body: "We don't rely on generic templates because every business has different sales cycles, audiences, and marketing goals. Hence, we build every workflow from scratch after understanding business process and goals. The framework is designed around your customer journey and ensures that every automation workflow, whether for nurturing or engagement, aligns with your growth objectives.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "CRM and marketing platform integration",
				body: "An automation becomes effective only when it is connected securely with other systems. Our experts specialize in integrating marketing automation platforms with CRM systems, analytics tools, and ecommerce platforms using REST APIs, webhooks, native connectors, and middleware tools to ensure synchronized data flow between systems.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Data-driven campaign optimization",
				body: "Before we even start with designing marketing automation workflows, we first establish the KPIs and metrics, and deploy analytics tools to monitor the performance as per the decided metrics. Based on this data, we continue refining the automation workflows and marketing strategies to improve conversions and long-term ROI.",
			},
		],
	},

	checkList: {
		eyebrow: "Marketing Automation",
		title: "Use Cases",
		subtitle: "Marketing automation can be applied across different industries and business models to improve customer engagement, streamline lead management, and optimize campaign performance. Here are some use cases across common verticals:",
		benefitsLeft: [
			{ title: "Ecommerce Marketing Automation:", body: "eCommerce businesses can use marketing automation workflows triggered after key events, like when a customer abandons a cart, the system triggers reminder emails, discount offers, and retargeting campaigns to recover potential sales." },
			{ title: "B2B Marketing Automation:", body: "Automation can help B2B businesses survive the battle of long sales cycles. When a prospect downloads a whitepaper or attends a webinar, the system triggers educational email sequences and continues that until the prospect is converted. The continuous chain of emails ensures that the lead doesn't lose interest." },
		],
		benefitsRight: [
			{ title: "SaaS Marketing Automation:", body: "For SaaS businesses, marketing automation can encourage product adoption and trial conversions. When a user signs up for a free trial, automated sequences, like automated onboarding emails, feature tutorials, and usage reminders, guide them towards paid subscriptions." },
			{ title: "Digital Marketing Campaign Automation:", body: "Marketing automation can also help in multi-channel campaign management. When users interact with ads, download resources, or visit key website pages, the system automatically triggers personalised emails, remarketing ads, and follow-up campaigns." },
		],
	},

	plainTextSecondary: {
		eyebrow: "Ready to Automate",
		title: "Your Marketing?",
		contentAlign: "center",
		paragraphs: [
			"Businesses understand the potential of marketing automation, but struggle to implement and drive the actual results because of improper planning and execution. With Icecube Digital as your technology-enabled partner, we help you build a structured and scalable marketing system where lead generation, nurturing, and engagement happen automatically.",
			"Businesses can identify high-intent prospects faster while continuing to nurture early-stage leads as we strategically implement trigger-based campaigns, AI-driven lead scoring, and CRM integrations. Your sales and marketing team can focus on more important things, while we deploy automation workflows that manage the basic, repetitive, and time-consuming tasks. Connect with our experts to discuss your ideas on marketing automation.",
		],
	},

	cta: {
		text: "Streamline Your Campaigns and Convert More Leads — Hire a Marketing Automation Agency Today!",
		ctaLabel: "Contact Us Today For a Free Consultation",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Marketing Automation Services",
		title: "FAQs",
		items: [
			{
				question: "What is marketing automation?",
				answer: "Marketing automation refers to the use of platforms and technologies to set up trigger-based workflows to manage repetitive marketing tasks, like sending follow-up emails to leads and customers, aligning leads to sales reps, and identifying high-intent leads.",
			},
			{
				question: "How does marketing automation work?",
				answer: "Marketing automation works on a trigger-based logic. When a user takes a specific action — such as signing up for a newsletter, visiting a product page, or abandoning a cart — the platform automatically triggers a predefined sequence of actions like sending emails, assigning lead scores, or notifying a sales rep. These workflows run continuously in the background without manual intervention.",
			},
			{
				question: "What tools are used for marketing automation?",
				answer: "Common marketing automation tools include HubSpot, Marketo, ActiveCampaign, Mailchimp, Klaviyo, Pardot, and others. The right tool depends on your business size, goals, budget, and existing tech stack. We help you evaluate and implement the platform that best fits your requirements.",
			},
			{
				question: "What are the benefits of marketing automation?",
				answer: "Marketing automation saves time by eliminating manual campaign execution, improves lead nurturing and conversions through structured workflows, delivers personalized customer experiences at scale, aligns marketing and sales teams, and can boost marketing ROI by an average of $5.44 for every $1 spent.",
			},
			{
				question: "Can marketing automation improve conversion rates?",
				answer: "Yes. By delivering the right message to the right prospect at the right time based on their behavior and intent, marketing automation significantly improves conversion rates. Automated lead scoring helps sales teams prioritize high-intent prospects, while nurturing workflows keep early-stage leads engaged until they are ready to convert.",
			},
			{
				question: "Is marketing automation suitable for small businesses?",
				answer: "Yes. Marketing automation is beneficial for businesses of all sizes. For small businesses, it removes the need to hire large marketing teams by automating repetitive tasks. Platforms like Mailchimp and ActiveCampaign offer affordable plans specifically designed for startups and small businesses.",
			},
			{
				question: "How long does it take to implement marketing automation?",
				answer: "Implementation timelines vary depending on the complexity of your workflows, the platform selected, and the integrations required. A basic setup with a few workflows can be completed in 2–4 weeks, while a comprehensive enterprise-grade implementation with multiple integrations and custom workflows may take 2–3 months.",
			},
			{
				question: "What is the cost of marketing automation services?",
				answer: "The cost depends on the scope of work, the number of workflows, the platform selected, and the level of ongoing support required. We offer customized marketing automation service packages tailored to your business goals and budget. Contact us for a free consultation and proposal.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default MarketingAutomationServices;
