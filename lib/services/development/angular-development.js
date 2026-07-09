const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const AngularJsDevelopment = {
	slug: "angular-js-development",
	pageTitle: "AngularJS Development Services | AngularJS Development Company",
	metaDescription: "Looking for reliable AngularJS development services? Partner with Icecube Digital – the USA’s top AngularJS development company. Get your project started now!",

	banner: {
		heading: "Angular JS Development Company",
		paragraphs: [
			"Angular JS has become very popular as a structural framework for dynamic web applications in the last few years due to its capability to build scalable and responsive websites. It makes building web applications easy, fast, and flawless. Created and maintained by Google, it has continuously improved to comply with the changing demands of the technology world. By selecting a well-known Angular development company like Icecube Digital, you can get a feature-rich and contemporary web application built quickly.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [40964, 40966, 40941],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
	},

	getQuote: true,

	plainText: {
		eyebrow: "A Global Custom",
		title: "AngularJS Development Company",
		contentAlign: "center",
		paragraphs: [
			"Feature-rich, functional and versatile, AngularJS has emerged as one of the most widely-used front-end frameworks for developing modern web applications. Whether you’re building single-page apps or large cross-platform applications, AngularJS helps you build versatile applications that are functional and aesthetically appealing.",
			"Our in-house team of AngularJS developers leverages the functionalities of the framework to deliver superior results that engage and attract. As a leading custom AngularJS development company globally, we have years of experience working with businesses of all sizes and across niches.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "laura-degraff",
	},

	topIconBox: {
		eyebrow: "Full-Stack AngularJS",
		title: "Development Services",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Custom AngularJS Design & Development",
				body: "With years of experience and expertise, we help you build scalable, secure, and versatile applications that are power-packed with a wide range of features.",
			},
			{
				icon: "/assets/icons/brush.svg",
				title: "AngularJS UI/UX Development",
				body: "Whether you’re looking to build a web application, portal, or widget, we offer you engaging UI/UX services that are intuitive, user-friendly, and visually appealing.",
			},
			{
				icon: "/assets/icons/comment.svg",
				title: "Real-time Chat Apps",
				body: "Our team of Angular developers has plenty of experience in designing and developing lightweight, speedy, and efficient real-time chat apps that are 100% functional.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Ecommerce Site/App Design",
				body: "AngularJS helps in developing powerful ecommerce applications and websites that are interactive, intuitive, and easy-to-navigate.",
			},
			{
				icon: "/assets/icons/web.svg",
				title: "Web Portal Development",
				body: "Whether you’re looking to build a web portal for internal use or a customized portal for customers, we can help.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "AJAX Development",
				body: "Our team of developers has extensive experience handling various AJAX development services like CSS, XML, XHTML, JavaScript, XHR, and more.",
			},
			{
				icon: "/assets/icons/ai-integration.svg",
				title: "API Development",
				body: "We offer design and development of interactive and customized APIs to meet your business requirements.",
			},
			{
				icon: "/assets/icons/layers.svg",
				title: "Plugin Development",
				body: "Add custom plugins to your web applications and extend its functionality with our plugin design and development services.",
			},
		],
		footerNote: "Besides the AngularJS development services listed above, we also offer migration & porting services. We help you migrate an existing app from one platform to another, seamlessly and at the fastest turnaround times.",
	},

	checkList: {
		eyebrow: "Benefits of Using AngularJS for Custom",
		title: "Web Development Services",
		subtitle: [
			"AngularJS is a powerful modern-day web framework maintained by Google. It offers dynamic views (MVC) for websites and cross-platform applications.",
			["Here are a few benefits of choosing AngularJS for your ", { text: "web development", href: "/" }, " needs:"],
		],
		benefitsLeft: [
			"Progressive Web Apps",
			"Faster Loading Times",
			"Internationalization",
			"A large community of developers",
		],
		benefitsRight: [
			"Superior Performance",
			"Modular Approach",
			"TypeScript",
			"Unit testing with Protractor & Karma",
		],
	},

	imageText: {
		eyebrow: "Reasons To Choose Us For AngularJS",
		title: "Development Services",
		image: "/assets/photos/angular-js-development.png",
		imageAlt: "Angular JS Development",
		imagePosition: "right",
		paragraphs: [
			"Feature-rich, functional and versatile, AngularJS has emerged as one of the most widely-used front-end frameworks for developing modern web applications. Whether you’re building single-page apps or large cross-platform applications, AngularJS helps you build versatile applications that are functional and aesthetically appealing.",
			"Our in-house team of AngularJS developers leverages the functionalities of the framework to deliver superior results that engage and attract. As a leading AngularJS development company globally, we have years of experience working with businesses of all sizes and across niches.",
		],
	},

	infoBox: {
		eyebrow: "Our Proven 3-Step Approach to AngularJS",
		title: "Project Success",
		items: [
			{
				title: "1. Do you have a project in mind? Drop us a line.",
				body: "Fill our quote request form specifying your requirements. Our team will get in touch with you to gather more details about your project and to understand your expectations. We will then provide you with a free quotation – that lists details of your project – the time required, resources involved, and the approximate estimate.",
			},
			{
				title: "2. We sign an NDA & Finalize the Contract",
				body: "Once you give us the go-ahead, we sign an NDA (Non-Disclosure Agreement), which ensures that your sensitive data & confidential ideas are protected. We start work on your project once you sign the contract.",
			},
			{
				title: "3. Design, Development, Testing & Deployment",
				body: "Our team starts work on your project, and you’re assigned a dedicated project manager, who acts as your point-of-contact. We involve you at every stage of the process – design, development, testing, and launch. Our team is open to client suggestions & feedback, and we promise high-quality code, on-time delivery, & meeting all your requirements.",
			},
		],
	},

	faq: {
		eyebrow: "Angular JS Development",
		title: "FAQs",
		items: [
			{
				question: "What is the cost of developing an application using AngularJS?",
				answerHtml: "<p>We don’t have a direct answer to this question as many factors must be addressed before reaching a final number. Here are some possible factors that might be a discussion point before getting started with a custom AngularJS development service company.</p><ul><li><strong>Project Complexity:</strong> The complexity of the project is a major element driving the cost of the project.</li><li><strong>Resource requirement:</strong> Depending on the complexity and length of the project, team size would be decided.</li><li><strong>Scope of Project:</strong> A clear requirement description can be highly impactful in terms of cost estimation.</li></ul><p>Feel free to reach out to us for any related queries.</p>",
			},
			{
				question: "What are some of the popular websites that are built on AngularJS?",
				answer: "There are many revolutionary websites built by Angular development companies on this particular framework. Some of them are:",
				answerList: [
					"Netflix",
					"Forbes",
					"Paypal",
					"Gmail",
					"Upwork",
					"The Guardian",
				],
			},
			{
				question: "Why is the Angular framework so popular?",
				answer: "Angular is a very friendly framework that checks almost every required box. Here are some of the property of angular that makes it worth using:",
				answerList: [
					"It provides stability.",
					"It isn’t difficult to maintain.",
					"Has a huge scalability potential.",
					"Versatile to make a variety of applications.",
				],
			},
			{
				question: "Do you offer any consultation services for Angular technology and how can it benefit my project?",
				answerHtml: "<p>Yes, we do offer our consultation expertise and how it can direct your project in the right way. Our experts can help you understand</p><ul><li>If Angular is the right fit for your project.</li><li>Our advice would revolve around whether Angular’s strength aligns with the project goals.</li><li>We can also discuss how our Angular services can curate the project and add life to it.</li></ul><p>You can reach out to us for a consultation and see how Angular is the magical fit for you.</p>",
			},
			{
				question: "Will you provide NDA and IP rights for my project?",
				answer: "You will be the sole owner of your project. Copyright, NDA, source code, confidential letters, and Intellectual Property rights would be provided to ensure your 100% ownership over the project.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default AngularJsDevelopment;
