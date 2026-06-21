const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const HireWebflowDevelopers = {
	slug: "hire-webflow-developers",
	pageTitle: "Hire Webflow Developers | Icecube Digital",
	metaDescription: "Hire certified Webflow developers from Icecube Digital to build responsive, SEO-friendly, custom websites — from user research and UI/UX design to Webflow development, CMS, and conversion rate optimization, with flexible engagement models.",

	banner: {
		heading: "Hire Webflow Developers",
		paragraphs: [
			"When you hire Webflow developers, you're investing in a seamless and efficient website development experience. Webflow's intuitive platform allows developers to bring their vision to life with precision and creativity. Our expert developers are adept at crafting responsive, user-friendly websites that adapt to your needs. Whether you need custom animations, eCommerce functionality, or a sleek portfolio site, Webflow provides the flexibility to make it happen.",
			"Hire a skilled Webflow developer from Icecube Digital today to create a standout online presence that delivers both form and function, elevating your business's digital experience.",
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
		eyebrow: "Why Hire Certified",
		title: "Webflow Experts?",
		contentAlign: "center",
		paragraphs: [
			"Hiring certified Webflow experts means you're working with professionals who are not only proficient with Webflow's tools but also understand the nuances of web design and development. These experts can ensure your site is responsive, optimized, and tailored to your needs.",
			"With our years of experience working on a wide range of Webflow projects, our Webflow developers can create custom solutions that go beyond standard templates. Certified experts will help you stay ahead of trends, implement best practices, and deliver a site that drives results. Their expertise will ensure that your website is both user-friendly and scalable, meeting your business goals while offering a smooth user experience.",
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/achievements-section.js (default "Our Achievements" heading)
	achievements: achievementsSection,

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		// Placeholder: reusing an existing testimonialId until the WP id for
		// Christian Marcello (COO at Werks Company, LLC) is available.
		testimonialId: 24,
	},

	topIconBox: {
		eyebrow: "Hire Webflow Developers for Seamless",
		title: "Web Development",
		subtitle: "Hiring Webflow developers guarantees that your website will be crafted with precision and attention to detail. Their expertise ensures a seamless, responsive, and visually stunning site that represents your brand perfectly, providing the best possible user experience across all devices.",
		items: [
			{
				icon: "/assets/icons/smart-search.svg",
				title: "User Research",
				body: "User research is a crucial part of developing a website that truly resonates with your audience. By understanding user behaviours, preferences, and pain points, we create a website that meets their needs. This research allows us to optimize the user journey, ensuring that visitors find what they're looking for quickly and efficiently. Ultimately, the more we know about your audience, the better we can design a website that engages, informs, and converts.",
			},
			{
				icon: "/assets/icons/brush.svg",
				title: "Custom Web Design",
				body: "Custom web design ensures that your website stands out from the crowd, reflecting your brand's personality and values. Our team works closely with you to create a unique design that not only looks great but also delivers a seamless user experience. By focusing on your business objectives and target audience, we develop designs that are both visually appealing and functionally effective, driving results and user engagement.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Webflow Development",
				body: "Webflow development allows us to create dynamic websites that are both aesthetically pleasing and highly functional. Whether it's an eCommerce site, portfolio, or corporate website, our developers leverage Webflow's powerful features to build responsive, fast, and secure websites. With Webflow, we can deliver high-quality development with a focus on delivering smooth, intuitive user experiences while also meeting your specific business goals.",
			},
			{
				icon: "/assets/icons/square-cursor.svg",
				title: "UI UX Design",
				body: "UI/UX design focuses on creating an intuitive, user-friendly experience that keeps visitors engaged. From the first click to the final conversion, we design interfaces that make it easy for users to navigate your site. Our approach to UI/UX design considers functionality and aesthetics to ensure your website is both beautiful and practical, boosting user satisfaction and driving business growth.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Prototyping and Wireframing",
				body: "Prototyping and wireframing are essential steps in the web development process, allowing us to visualize the structure and functionality of your website before moving forward with full-scale development. Through wireframes, we plan and test the layout, while prototypes simulate interactions to ensure a seamless user experience. This step helps refine ideas early, saving time and resources by avoiding potential design issues down the line.",
			},
			{
				icon: "/assets/icons/dollar-graph.svg",
				title: "Conversion Rate Optimization",
				body: "Conversion rate optimization (CRO) focuses on improving your website's ability to convert visitors into customers. By analyzing user behavior and testing different elements on your site, we identify areas for improvement. Whether it's refining call-to-action buttons, enhancing product pages, or streamlining the checkout process, our goal is to help you get the most out of every visitor, increasing conversions and maximizing ROI.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Advantages of Using Webflow as Your",
		title: "Website Platform",
		items: [
			{
				icon: "/assets/icons/sliders.svg",
				title: "No-Code Visual Development",
				body: "Webflow's no-code visual development interface allows you to design and build websites without any coding knowledge. This helps in creating websites exactly how you envision them, using drag-and-drop elements and custom animations. You can adjust designs in real-time, giving you full control over the creative process. Webflow makes it possible for you to get your site up and running quickly while still delivering a polished, professional look.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Fully Customizable & Flexible",
				body: "With Webflow, customization is at the core of the design process. The platform lets you take complete control over the layout, structure, and functionality of your website. No matter your design vision or business requirements, Webflow offers flexibility to build and adjust every aspect of your site, allowing you to create a truly unique online presence that stands out in your industry.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Built-In CMS",
				body: "Webflow's built-in CMS allows you to easily manage and update your website's content without needing to rely on a developer. The content management system is fully customizable, so you can structure it to fit your business needs. Whether you're managing blog posts, product listings, or portfolios, Webflow's CMS makes it simple to update content quickly, keeping your site fresh and relevant.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO-Friendly Features",
				body: "Webflow is designed with SEO in mind, offering built-in tools to enhance your website's visibility on search engines. You can easily edit meta tags, alt text, and URL structures. Additionally, Webflow's fast load times, mobile responsiveness, and clean code help improve rankings. With Webflow's SEO-friendly features, your website is positioned for success from the start.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Hosting & Security Included",
				body: "Webflow includes secure, high-performance hosting with every project, ensuring your website is fast, reliable, and secure. With the added benefit of SSL encryption, your visitors' data is safe, giving them confidence in your site's security. Plus, Webflow hosting automatically updates and scales as your business grows, making it easy to keep your website running smoothly without the hassle of managing separate hosting.",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "No Plugin Dependencies",
				body: "With Webflow, you don't need to worry about relying on third-party plugins to add functionality. Webflow's platform includes all the features you need to build a fully functional website without extra add-ons. This means fewer compatibility issues and a smoother user experience. Everything is integrated, so you can focus on creating the best site possible without worrying about external dependencies.",
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Tailored Solutions For",
		title: "Every Business",
		contentAlign: "center",
		paragraphs: [
			"Every business has its unique set of challenges and goals, which is why tailored solutions are key to success. When you hire Webflow developers, you're ensuring that every feature of your website is designed to reflect your brand's individuality and meet your specific business needs.",
			"Whether you're a startup looking for a simple yet professional online presence or an established company that needs a custom-built eCommerce platform, Webflow offers the flexibility to create the perfect solution.",
			"We don't use generic templates; instead, we focus on crafting personalized websites that help you stand out from the competition. Our team works closely with you to understand your target audience, goals, and vision, ensuring every element is designed for maximum impact. With Webflow, you get a seamless integration of aesthetics and functionality with all the tools needed for growth and scalability.",
		],
	},

	cta: {
		text: "Build a Website That Truly Represents Your brand – Hire Expert Webflow Developers Today!",
		ctaLabel: "Talk To Our Experts Now",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	checkList: {
		eyebrow: "Why Choose",
		title: "Icecube Digital?",
		subtitle: "We have over 14+ years of experience in building and creating websites that resonate with the target audience. We deliver pixel-perfect, bug-free, and SEO-friendly Webflow websites that will give your brand a robust online presence. Plus, our developers will blend into your work culture like they have been there all along. Here are the benefits of working with Icecube Digital:",
		benefitsLeft: [
			{
				title: "Fully-vetted professionals",
				body: "Our team of professionals is thoroughly vetted for expertise and boasts huge skill sets. At Icecube Digital, you will get end-to-end expertise when it comes to deploying a website.",
			},
			{
				title: "Timely-Status Update",
				body: "We are very critical about ensuring transparency in the process and communication. As a policy, we ensure that all the developers provide timely updates regarding the progress of the development.",
			},
			{
				title: "Time Zones",
				body: "We are flexible in adjusting our working hours as per your time-zone. As per the engagement model, we will assist in setting up teams which is available to resolve your queries or hear your needs at all-time.",
			},
		],
		benefitsRight: [
			{
				title: "Flexible Engagement",
				body: "We provide the flexibility to hire Webflow developers as per your business requirements. You can hire them as a part of your team, on an hourly basis, or on a fixed project basis.",
			},
			{
				title: "High-Quality Code",
				body: "Webflow is a low-code platform, and our developers add custom code to make the website highly customized. Whatever code we write, we ensure that it is of high quality. It follows all the industry standards - readable, maintainable, and well-commented.",
			},
		],
	},

	faq: {
		eyebrow: "Hire Webflow",
		title: "Developers FAQs",
		items: [
			{
				question: "How do I hire dedicated Webflow experts from Icecube Digital?",
				answer: "With Icecube Digital, you can hire a Webflow expert who tailors to your requirements seamlessly by directly reaching out to us through the contact details mentioned on our site. You can also reach out to us via email, message, or call, and our customer support team will explain the entire process. Based on the assistance, you can make further decisions.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What is your standard operating procedure?",
				answer: "Our process starts with understanding your requirements, after which we share suitable, pre-vetted Webflow developer profiles for your review. Once you select your team, we handle onboarding, set up communication and project-management channels, and begin work in agreed sprints — with regular updates, reviews, and feedback loops until delivery.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How much does it cost to hire a Webflow designer from Icecube Digital?",
				answer: "Cost depends on the engagement model and project scope — you can hire our Webflow developers on an hourly, monthly (dedicated), or fixed project basis. Share your requirements and we'll provide a transparent quote with no hidden fees that fits your budget.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Why hire a Webflow developer?",
				answer: "A dedicated Webflow developer brings platform expertise, clean custom code, and design know-how that templates can't match. They build responsive, fast, SEO-friendly sites tailored to your brand, handle complex interactions and integrations, and save you time while delivering a polished, scalable result.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Why is Icecube Digital the best choice for hiring Webflow developers?",
				answer: "With 14+ years of experience, fully-vetted professionals, transparent communication, flexible engagement and time-zone alignment, and a commitment to high-quality, maintainable code, Icecube Digital delivers pixel-perfect, bug-free, SEO-friendly Webflow sites — while our developers integrate seamlessly into your workflow.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How much time does Webflow development take?",
				answer: "Timelines vary with complexity — a simple site can take 2–4 weeks, while larger builds with custom CMS, integrations, and animations typically take 6–10 weeks or more. After reviewing your requirements, we provide a clear, milestone-based schedule.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Do websites built using Webflow help businesses?",
				answer: "Yes. Webflow sites are fast, responsive, and SEO-friendly, which improves visibility, user experience, and conversions. Their flexible design and easy content management help businesses present their brand professionally, adapt quickly, and scale as they grow.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can Webflow be integrated with other platforms?",
				answer: "Yes. Webflow connects with a wide range of tools through native integrations, APIs, and custom code embeds — including CRMs, marketing automation, analytics, payment gateways, and more. Our developers can also build custom integrations tailored to your specific needs.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What skills should I look for in a Webflow developer?",
				answer: "Look for strong Webflow platform expertise, responsive design and CSS/HTML knowledge, an eye for UI/UX, CMS and interaction/animation skills, custom-code ability for advanced functionality, SEO awareness, and clear communication. Our developers are vetted across all of these areas.",
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

export default HireWebflowDevelopers;
