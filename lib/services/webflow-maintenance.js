const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WebflowMaintenance = {
	slug: "webflow-maintenance-services",
	pageTitle: "Webflow Maintenance Services | Icecube Digital",
	metaDescription: "Icecube Digital's Webflow maintenance services keep your site up-to-date, secure, and high-performing — routine updates, performance optimization, bug fixes, design enhancements, integrations, SEO support, and flexible monthly plans.",

	banner: {
		heading: "Webflow Maintenance Services",
		paragraphs: [
			"With Icecube Digital's comprehensive Webflow maintenance services, our experts will never let anything affect the site's performance. Website maintenance is not just about finding the broken links and fixing them. It is about keeping an eye on all the factors to keep your site up-to-date, functional, and relevant.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Webflow Store Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	// Figma "Our Portfolio" / case-study section mapped to the standard portfolio component (fetched by postIds).
	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"Explore our portfolio to see how we've helped clients like you achieve their digital goals. From sleek, user-friendly websites to dynamic online platforms, our team delivers tailored Webflow websites. We pride ourselves on creating impactful websites that engage users and drive conversions. Browse through our projects and discover how we can take your online presence to the next level.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: components/home/GetQuoteSection.js ("Let's Work Together")
	getQuote: true,

	plainText: {
		eyebrow: "Keep your Webflow Website Secure and Up-to-date with",
		title: "Flexible Monthly Plans",
		contentAlign: "center",
		paragraphs: [
			"Maintenance is an ongoing task and one of the longest phases in the entire website development lifecycle. However, Webflow websites aren't like WordPress, which needs complex maintenance. Just like how Webflow simplifies the website design and development process, it eliminates a lot of technical maintenance which is required.",
			[
				"Webflow takes care of security, hosting, compatibility, and updates automatically. However, Webflow still requires maintenance to keep your website up to date. The ",
				{ text: "Webflow maintenance agency", href: "/webflow-maintenance-services/" },
				" will update blog posts, portfolio items, and product listings as per SEO updates.",
			],
			"Also, the experts will modify the website design, introduce new elements and features, and add new integrations to make your website more functional, meeting customer expectations and industry standards. Besides, with Webflow's monthly maintenance plans, the experts regularly monitor the website's performance and work on the gaps to ensure a top-notch user experience.",
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/achievements-section.js (default "Our Achievements" heading)
	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		// Placeholder: reusing an existing testimonialId until the WP id for
		// Sean Hennessy (LED Power House, Ireland) is available.
		testimonialId: 24,
	},

	topIconBox: {
		eyebrow: "What's Included in Our Webflow",
		title: "Maintenance Plans",
		subtitle: "Webflow offers powerful customization options, an intuitive visual editor, and seamless CMS integration. It allows for faster design-to-development workflows while enabling full creative control. Plus, you can manage your website without needing coding expertise, making it an ideal platform for businesses of all sizes looking for efficiency and scalability.",
		items: [
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Routine Website Updates",
				body: "To ensure your website never goes out of style, our team releases routine website updates. We will work on releasing new blogs, updating the website content, and adding new features, including animations and micro-interactions, to create dynamic user experiences.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Performance Optimization",
				body: "A slow website drives away potential customers. That's why our Webflow maintenance plans include the website's performance optimization. By monitoring Core Web Vitals, page speed and load times, bounce rate, and other related metrics, we make the decisions and take the actions.",
			},
			{
				icon: "/assets/icons/detection.svg",
				title: "Bug Fixes & Troubleshooting",
				body: "Webflow websites also run into bugs, like broken links, 404 errors, form submission problems, CMS issues, page load and animation glitches, Webflow native bugs, and others. That's why you need an expert on the go to troubleshoot all the problems promptly.",
			},
			{
				icon: "/assets/icons/squre.svg",
				title: "Design Enhancements",
				body: "A website becomes your brand's front face in the digital forefront. So, our expert UI/UX designers will work with you to improve the website's design to create a frictionless and user-friendly user experience. It includes improving call-to-actions to make buttons more visible, adding new pop-ups and seasonal banners, and creating new landing pages.",
			},
			{
				icon: "/assets/icons/pc.svg",
				title: "Third-Party Integrations",
				body: "Third-party integration is essential to make your website more functional and to create a cohesive ecosystem. As a Webflow maintenance agency, we manage, update, troubleshoot, or improve any external services that are connected to the Webflow website to ensure smooth functioning.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Priority Support",
				body: "Our Webflow maintenance plans provide priority support where you don't have to wait for days or weeks to get an issue sorted. With 24-hour turnaround time, we quickly address bugs, updates, or design fixes to keep your website running smoothly without disruptions.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO support",
				body: [
					"SEO algorithm keeps evolving, and so does your website, even if it is Webflow. Our SEO support includes on-page, off-page, and ",
					{ text: "technical SEO modifications", href: "/seo-search-engine-optimization/" },
					" to boost or maintain your visibility and ranking in SERPs.",
				],
			},
		],
	},

	infoBox: {
		eyebrow: "Industry-Specific Webflow",
		title: "Maintenance Solutions",
		subtitle: "Icecube Digital is a leading Webflow maintenance agency, and any limitations never restrict us. Regardless of your industry or timezone, we are ever-ready to take the responsibility of keeping your Webflow website up and running while following your respective industry standards. Here are the industries that we serve:",
		gridClass: "sm:grid-cols-2",
		textAlign: "left",
		items: [
			{
				title: "B2B SaaS",
				body: "B2B SaaS websites often have dynamic content and client dashboards along with custom API integrations with third-party platforms, like CRMs, customer service tools, or analytics. We regularly update and continuously optimize for smooth performance.",
			},
			{
				title: "Fintech",
				body: "For Fintech companies, our Webflow maintenance plans include aligning with security updates and compliance with financial regulations, such as PCI-DSS or GDPR. Additionally, we monitor website performance, load times, and uptime to ensure fast and secure transactions.",
			},
			{
				title: "Healthtech",
				body: "Healthtech is a regulated industry, and our Webflow maintenance focuses on ensuring that the website adheres to privacy and security regulations like HIPAA and others as permitted by your industry. We run frequent checks to safeguard user data and optimize the site for peak traffic.",
			},
			{
				title: "Professional Services",
				body: "For companies delivering professional services, we work on optimizing the contact forms and calls-to-action (CTAs) for better conversion and smooth integration with your CRM systems. We perform regular content updates to highlight new projects, client success stories, or industry expertise to boost credibility.",
			},
			{
				title: "Agencies",
				body: "For agencies, we provide SEO-focused updates to position your brand effectively in search results, targeting keywords relevant to the services you offer. Besides, we perform case studies, content updates and design and UX enhancements to drive in more traffic.",
			},
			{
				title: "eCommerce Brands",
				body: "For eCommerce brands, we heavily focus on website performance to ensure that the website remains accessible with high-grade performance 24/7. From improving product descriptions to modifying website architecture, we ensure that you compete fiercely with your competitors.",
			},
			{
				title: "Startups to Enterprises",
				body: "We serve all types of businesses around the world, no matter the industry. For startups, our maintenance plans focus on establishing a strong digital presence. Whereas for enterprises, we provide advanced, scalable solutions that ensure continuous optimization and seamless performance.",
			},
		],
	},

	processSteps: {
		eyebrow: "How Our Webflow Maintenance",
		title: "Process Works",
		columns: 1,
		steps: [
			{
				title: "Initial Site Audit",
				body: "As a part of our comprehensive Webflow maintenance services, we conduct an initial site audit to understand the website's structure, existing problems, and areas for improvement.",
			},
			{
				title: "Onboarding & Setup",
				body: "Once we have a thorough understanding of your website and brand, our team will complete a small onboarding and setup process to help you align a team of experts.",
			},
			{
				title: "Task Submissions & Queueing",
				body: "When you are successfully onboarded, then our team will act as your team's extended hand. As soon as your team reports an issue through different channels, as mentioned in the opted plan, the tasks will be queued and assigned to the respective expert.",
			},
			{
				title: "Execution & Feedback",
				body: "The expert will instantly take on the request and start working on it. For complex tasks, our team will initiate a discussion with your team to get a better understanding. Based on your feedback, the expert will work on it to ensure it meets your expectations.",
			},
			{
				title: "Ongoing Maintenance & Optimization",
				body: "If the task is completed, our experts will continue to monitor your website's performance by tracking the relevant metrics. If there's anything, our team will run it by you, and you can give your confirmation. Our team will then start working on it.",
			},
		],
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	leftIconBox: {
		eyebrow: "Why Choose Us as Your Webflow",
		title: "Maintenance Agency",
		items: [
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Certified Webflow Experts",
				body: "We have in-house Webflow professionals who have earned recognition for their expertise in the platform. Experts can quickly address complex challenges, saving time and delivering high-quality results more quickly.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Flat Monthly Pricing",
				body: "Our Webflow maintenance plans come with a flat monthly fee with different engagement models. Besides, you can pause or cancel your subscription anytime as per your wish.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "No Long-Term Commitments",
				body: "Engaging with Icecube Digital doesn't come at the expense of long-term commitments. We make it super-flexible for you, and we don't tie you to contracts. You can easily opt-out if you think the arrangement isn't working out for your goals.",
			},
			{
				icon: "/assets/icons/timer.svg",
				title: "Fast Turnaround Time",
				body: "At Icecube Digital, we boast a fast turnaround time, as your requests are considered a priority by our team. Regardless of the urgency, we ensure that our team reports back to you within 24 hours with progress updates.",
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "In-House Design & Dev Team",
				body: [
					"We have an in-house design and development team, which includes UI/UX designers, ",
					{ text: "Webflow developers", href: "/webflow-development-agency/" },
					", front-end developers, creative experts, and Webflow CMS experts, to address issues promptly.",
				],
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Dedicated Project Manager",
				body: "You will be assigned a dedicated project manager who will become the bridge between your team and ours. This will ensure that all your queries are resolved on an urgent basis by our team.",
			},
		],
	},

	// Figma "Pricing" table → ServicesTableCompare.js (3-tier plan cards).
	tableCompare: {
		eyebrow: "Webflow Website Maintenance",
		title: "Pricing Plans",
		subtitle: "Our website maintenance plans are categorized into three tiers. Each plan is designed to meet the varying needs of businesses, from routine updates and performance monitoring to comprehensive support, security enhancements, and ongoing optimization on a monthly basis.",
		btnArrow: BTN_ARROW,
		plans: [
			{
				name: "Starter Plan",
				suitableFor: "Suitable For: Small And Growing Businesses",
				features: [
					"10 hours/month",
					"$30/hr",
					"$300",
					"One month",
					"1 project/limited task",
					"4-6 days average turnaround time",
					"Collaboration through Slack",
					"Rollover hours up to 2 months",
					"Pause anytime",
				],
				ctaLabel: "Get Started",
				ctaHref: "#",
			},
			{
				name: "Growth Plan",
				suitableFor: "Suitable For: Scaling Startups And Businesses",
				features: [
					"50 hours/month",
					"$25/hr",
					"$1250",
					"One quarter minimum",
					"Unlimited projects/tasks",
					"2–4 days average turn around time",
					"Pro support + expert tips",
					"Dedicated project manager",
					"Designer support (if needed)",
					"You own all designs & files",
					"Collaboration through ClickUp & Slack",
					"Rollover hours up to 2 months",
					"Pause anytime",
				],
				ctaLabel: "Get Started",
				ctaHref: "#",
			},
			{
				name: "Enterprise Plan",
				suitableFor: "Suitable For: Enterprises And High-Traffic Websites",
				features: [
					"100 hours/month",
					"$20/hr",
					"$2000",
					"Two quarter minimum",
					"Unlimited projects/tasks",
					"1–2 days average turnaround time",
					"Pro support + expert tips",
					"Dedicated project manager",
					"Designer support (if needed)",
					"You own all designs & files",
					"Collaboration through ClickUp & Slack",
					"Rollover hours up to 3 months",
					"Pause anytime",
				],
				ctaLabel: "Get Started",
				ctaHref: "#",
			},
		],
	},

	cta: {
		text: "Ready For Worry-Free Webflow Updates? Choose Your Maintenance Plan Now!",
		ctaLabel: "Contact Us Today For a Free Consultation",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Webflow",
		title: "Maintenance FAQs",
		items: [
			{
				question: "Can I pause or cancel my subscription at any time?",
				answer: "Yes, we provide the utmost flexibility to our customers, giving them full control over how they want to proceed. Our flexible maintenance plans support a pay-as-you-go model, suitable for businesses that don't want to commit to a monthly contract.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What does “unlimited requests” really mean?",
				answer: "Unlimited requests means you can submit as many maintenance and update tasks as you need — they're added to your queue and completed one (or a few) at a time, in priority order. There's no cap on how many requests you can raise; the monthly hours and turnaround times of your chosen plan determine how quickly they're worked through.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How fast is your turnaround time?",
				answer: "Turnaround depends on your plan and task complexity, typically ranging from 1–2 days on higher tiers to 4–6 days on the Starter plan. Most routine requests are acknowledged within 24 hours, and urgent fixes are prioritized to keep your site running smoothly.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What tools or access do you need?",
				answer: "We typically need collaborator or editor access to your Webflow project, along with any connected integrations (CMS, forms, analytics, or third-party tools) relevant to the work. We coordinate tasks through ClickUp and Slack, and we'll guide you through granting secure access during onboarding.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What is the downside of using Webflow?",
				answer: "Webflow has a learning curve for advanced interactions, and very large or highly custom builds can hit platform limits or require workarounds. Pricing tiers and CMS item limits can also add up as you scale. Our maintenance team helps you navigate these trade-offs and keep your site optimized within Webflow's strengths.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Does Webflow require maintenance?",
				answer: "Yes. While Webflow handles hosting, security, and platform updates automatically, your site still needs ongoing content updates, design refreshes, integration management, performance monitoring, and SEO upkeep to stay current, functional, and competitive.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What is the future of Webflow?",
				answer: "Webflow continues to expand rapidly with new features in CMS, logic, ecommerce, localization, and AI-assisted design, positioning it as a leading visual development platform. Its growing ecosystem and enterprise adoption make it a strong, future-proof choice for businesses building on the web.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Why is Webflow so expensive?",
				answer: "Webflow bundles design, development, hosting, security, and a powerful CMS into one platform, which reduces the need for separate tools and developers. The pricing reflects that all-in-one value, fast performance, and reliable managed hosting — often making it more cost-effective overall than a traditional custom stack.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Is Webflow better than WordPress?",
				answer: "It depends on your needs. Webflow offers a cleaner visual builder, managed hosting, built-in security, and less technical maintenance, making it ideal for design-led marketing sites. WordPress offers a vast plugin ecosystem and flexibility for complex, highly custom functionality. We help you choose and maintain whichever best fits your goals.",
			},
		],
	},

	// common section: ./common/our-clients-section.js
	ourClients: ourClientsSection,

	// common section: components/home/WeServeSection.js ("Countries We Serve")
	weServe: true,

	// common section: ./common/ceo-cta-section.js
	ceoCta: ceoCtaSection,
};

export default WebflowMaintenance;
