const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WebflowDevelopment = {
	slug: "webflow-development-agency",
	pageTitle: "Webflow Development Agency | Icecube Digital",
	metaDescription: "Icecube Digital is an expert Webflow development agency — custom, responsive, SEO-optimized Webflow websites built fast on Webflow's no-code platform, with integrations, hosting, animations, and flexible hiring models.",

	banner: {
		heading: "Expert Webflow Development Agency",
		paragraphs: [
			"As a leading Webflow development company, we specialize in creating custom, high-performance websites tailored to your unique needs. Our team of expert developers and designers use the functionalities of Webflow's intuitive no/low-code platform to build responsive, visually stunning websites that elevate your brand at affordable rates.",
			"Whether you need a simple landing page or a complex, fully functional site, we ensure that your website is optimized for speed, performance, and SEO. Partner with us to deploy websites that inspire, designs that impress, and experiences that convert.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Webflow Store Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

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

	getQuote: true,

	plainText: {
		eyebrow: "Custom Webflow Development Solutions",
		title: "Tailored To Your Needs",
		contentAlign: "center",
		paragraphs: [
			"At our Webflow development agency, we understand that every business has unique requirements. That's why we offer custom Webflow solutions tailored to your specific goals and objectives. From bespoke designs to advanced functionality, we work closely with you to bring your vision to life. Our team of certified Webflow experts takes the time to understand your brand, target audience, and business goals, ensuring the final product aligns with your vision.",
			[
				"We use Webflow's powerful design and development tools to build scalable, responsive, and ",
				{ text: "SEO-optimized websites", href: "/seo-search-engine-optimization/" },
				" that are both visually appealing and user-friendly. Whether you need a simple landing page or a fully-featured e-commerce platform, we provide end-to-end Webflow development services, including design, development, and ongoing support.",
			],
			"Our custom Webflow solutions ensure that you have complete control over your website's content and functionality. With a focus on delivering high-quality results, we provide a seamless experience from concept to launch. Partner with us for your Webflow project, and we'll help you build a digital presence that stands out.",
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "What",
		title: "Clients Say?",
		testimonialSlug: "christian-marcello",
	},

	topIconBox: {
		eyebrow: "Benefits of Using Webflow as Your",
		title: "Website Platform",
		subtitle: "Webflow offers powerful customization options, an intuitive visual editor, and seamless CMS integration. It allows for faster design-to-development workflows while enabling full creative control. Plus, you can manage your website without needing coding expertise, making it an ideal platform for businesses of all sizes looking for efficiency and scalability.",
		items: [
			{
				icon: "/assets/icons/edit-board.svg",
				title: "No-Code Visual Development",
				body: "Webflow's no-code visual development platform enables you to design and build websites without needing to write a single line of code. You have full creative freedom to customize layouts, animations, and interactions visually, making it a perfect solution for businesses that do not want dedicated website development from scratch. It's a fast and efficient way to create professional websites.",
			},
			{
				icon: "/assets/icons/rocket.svg",
				title: "Faster Development & Launch",
				body: "With Webflow, you can streamline the development process and speed up the launch of your website. Its intuitive drag-and-drop interface, powerful CMS, and pre-built templates make creating your website quicker and more efficient. Whether you're creating a simple page or a complex site, Webflow's user-friendly tools reduce the need for extensive development time and resources so you can launch your website faster.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Fully Responsive & Mobile-Optimized",
				body: "Webflow ensures your website looks and functions flawlessly across all devices. Every design is automatically responsive. It can adapt to different screen sizes, from desktop to tablet to mobile. Webflow's mobile-first approach guarantees that users have a seamless browsing experience, enhancing engagement and accessibility. You can focus on your content and design while Webflow takes care of optimization for every device.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Built-in Hosting & Security",
				body: "Webflow provides robust, reliable hosting, ensuring your website is always up and running smoothly. With secure, fast content delivery through CDN (Content Delivery Network), your site's performance is optimized globally. Built-in SSL certificates ensure your website's security and protect user data. By combining powerful hosting with high-level security, Webflow offers a seamless and secure browsing experience for your visitors.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO-Friendly & Performance Optimized",
				body: "Webflow is built with SEO best practices in mind, helping your website rank higher in search engines. Its clean code, customizable meta tags, and automatic sitemaps ensure your site is easily crawled and indexed. In addition, Webflow optimizes your site's loading speed, which is crucial for both user experience and SEO rankings. With Webflow, your site is ready for search engine success and superior performance.",
			},
			{
				icon: "/assets/icons/square-cursor.svg",
				title: "Advanced Animations & Interactions",
				body: "Webflow allows you to create sophisticated animations and interactions without relying on complex code. You can enhance your website's user experience by adding scroll-triggered effects, hover animations, and interactive elements that captivate visitors. These animations not only make your website visually appealing but also help guide users through your content, improving engagement and retention.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Why Choose Our Webflow",
		title: "Development Services?",
		subtitle: "Our Webflow development services are designed to help you build fast, visually stunning, and user-friendly websites that are fully optimized for performance and SEO. Our experienced team ensures a seamless, collaborative process, delivering your project on time and within budget.",
		items: [
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Affordable Pricing",
				body: "We believe that top-notch Webflow development doesn't have to break the bank. Our pricing is designed to be flexible and affordable, allowing businesses of all sizes to access high-quality web development services. Whether you need a simple website or a more complex platform, we provide cost-effective solutions that don't compromise on quality. Get the best value for your investment with clear pricing and no hidden fees, ensuring you stay within your budget while getting outstanding results.",
			},
			{
				icon: "/assets/icons/cloud-upload.svg",
				title: "Fast Turnaround",
				body: "We understand that time is crucial when it comes to launching your website. Our team is committed to delivering fast results without compromising quality. With Webflow's efficient design and development tools, we can accelerate the development process, ensuring a quick turnaround for your project. From initial concept to final launch, we work diligently to meet your deadlines and help you get your website live as soon as possible.",
			},
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Certified Webflow Experts",
				body: "Our team consists of certified Webflow experts who have extensive experience building high-quality websites on the Webflow platform. With a deep understanding of Webflow's capabilities and best practices, we can create customized solutions that meet your unique needs. Whether it's complex animations, integrations, or responsive designs, our certified experts have the skills and knowledge to deliver exceptional results, ensuring your website performs at its best.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO & Performance Optimized",
				body: "Your website's performance is crucial for both user experience and search engine ranking. We optimize every Webflow website we create to ensure fast loading times, high performance, and excellent SEO results. From clean code and proper meta tags to responsive design and optimized media, we ensure that your website is primed for success across search engines. With our SEO and performance optimization services, your site will attract more traffic and deliver an excellent user experience.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Responsive by Default",
				body: "With Webflow, every website we build is responsive by default. Your website will adapt to different screen sizes, ensuring a smooth user experience whether visitors are on desktop, tablet, or mobile devices. You don't have to worry about additional coding or adjustments—Webflow automatically optimizes your design for all devices. By focusing on responsive design from the start, we ensure your website delivers a consistent experience for all users, no matter how they access it.",
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Flexible Hiring Models",
				body: "Our flexible hiring models are designed to suit the unique needs of your business. Whether you need a full-time developer, part-time support, or a project-based team, we offer tailored solutions that work for you. You can hire our Webflow developers on an hourly, monthly, or project basis, depending on the scope of your project. This allows you to have control over your budget and timeline while ensuring you get the expertise you need. Our team is always ready to adapt to your specific requirements, ensuring a smooth and efficient development process.",
			},
		],
	},

	plainTextSecondary: {
		eyebrow: "Integrations With Any",
		title: "Software You Want",
		contentAlign: "center",
		paragraphs: [
			"Webflow's open integration ecosystem makes it simple to connect with the tools and software that drive your business. Whether you need to integrate third-party apps, marketing automation platforms, CRMs, payment gateways, or analytics, Webflow provides flexible integration options to meet your needs.",
			"Through native integrations, API connections, and custom embeds, you can seamlessly incorporate software solutions to enhance functionality, streamline processes, and grow your business online. Plus, with Webflow's developer tools, you can build custom integrations tailored to your specific requirements, ensuring your website works seamlessly with any tool you use.",
		],
	},

	cta: {
		text: "Power Up Your Website – Integrate Marketing, Payments, Analytics, and More With Webflow.",
		ctaLabel: "Talk To Our Experts Now",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Webflow",
		title: "Development FAQs",
		items: [
			{
				question: "What is Webflow, and why should I choose it for my website?",
				answer: "Webflow is a powerful design and development platform that enables you to create responsive websites without coding. It’s perfect for businesses seeking speed, flexibility, and creative control. Its drag-and-drop interface and robust CMS make it easier to design, manage, and launch high-performance websites quickly.",
			},
			{
				question: "Can Webflow integrate with third-party software?",
				answer: "Yes, Webflow offers extensive integration options with third-party tools such as CRMs, email marketing platforms, analytics tools, and more. Through its open API and Zapier integrations, you can connect your website with the software you already use to streamline operations.",
			},
			{
				question: "How much does it cost to build a website with Webflow?",
				answer: "The cost of building a website with Webflow depends on your specific requirements, such as design complexity, functionality, and integrations. We offer affordable pricing with clear packages and can tailor a solution to fit your budget.",
			},
			{
				question: "How long does it take to develop a website using Webflow?",
				answer: "The timeline for Webflow development varies based on the complexity of the website. A simple website could take a few weeks, while more advanced features or e-commerce sites may take longer. Our team works efficiently to deliver your project within the agreed timeline.",
			},
			{
				question: "Do I need coding skills to manage a Webflow website?",
				answer: "No, Webflow’s visual editor allows you to manage and update your website without needing coding skills. It’s a user-friendly platform that lets you create and edit content with ease. However, if needed, we provide ongoing support and training to ensure you’re comfortable with the platform.",
			},
			{
				question: "Is Webflow SEO-friendly?",
				answer: "Yes, Webflow is designed with SEO best practices in mind. It provides clean code, customizable meta tags, alt attributes for images, and automatic sitemaps, all of which help improve your website’s SEO performance. Additionally, Webflow’s fast load speeds contribute to better rankings in search engines.",
			},
			{
				question: "Can Webflow support eCommerce websites?",
				answer: "Absolutely! Webflow offers a comprehensive e-commerce solution, allowing you to build and manage online stores with ease. You can create custom product pages, integrate payment gateways, and manage orders—all without needing coding skills.",
			},
			{
				question: "Will my Webflow site be mobile-friendly?",
				answer: "Yes, Webflow automatically ensures that your website is fully responsive, meaning it will look great and function seamlessly across all devices. You can also customize how your site appears on different screen sizes, ensuring an optimal experience for every user.",
			},
			{
				question: "What happens if I need support after my website is live?",
				answer: "We offer ongoing support after the launch of your website. Whether you need help with updates, troubleshooting, or scaling your website, our team is here to assist you with any questions or issues that may arise.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WebflowDevelopment;
