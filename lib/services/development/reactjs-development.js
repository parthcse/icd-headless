const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const ReactJsDevelopmentServices = {
	slug: "reactjs-development-services",
	pageTitle: "ReactJS Development Services | ReactJS Web Development Company",
	metaDescription: "As a leading ReactJS development agency, Icecube Digital offers full-stack ReactJS web development services. Rely on our expertise for high-performance services.",

	banner: {
		heading: "ReactJS Development Company",
		paragraphs: [
			"React JS has become a choice for companies who wish to have a robust but flexible user interface with high performance and SEO friendliness. At Icecube Digital, we have ReactJS developers who leverage the power of this technology completely to deliver significantly high-performing and light-weight applications. As a ReactJS development services provider, we engineer world-class solutions that help all-sized organizations, starting from startups to large enterprises, to amplify their performance remarkably.",
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
		eyebrow: "Partner With Best ReactJS",
		title: "Development Agency",
		contentAlign: "center",
		paragraphs: [
			"An ultra-fast and light-weight JavaScript framework, React is a modern platform that helps you build robust web and mobile applications. The ease of development and the open-source nature of the framework makes it an ideal choice to help you build scalable applications that meet your business objectives.",
			"Are you looking for an experienced React JS Development Company to build fast-loading mobile and web apps? Icecube Digital is your answer. Our team of skilled and dedicated React JS professionals helps you in building sophisticated, fully-functional, and visually striking applications using the latest versions of React JS to help your business requirements.",
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

	leftIconBox: {
		eyebrow: "Why Choose",
		title: "ReactJS",
		subtitle: "With so many JavaScript platforms available, why opt for React JS Development services to build your mobile or web app? Here are five reasons why React JS is the ideal choice for your development needs:",
		items: [
			{
				icon: "/assets/icons/speed.svg",
				title: "Fast Rendering Data",
				body: "The React loading engine quickly loads data, without reloading the whole page, thereby significantly cutting down on page load time. Similarly, when there are updates to a page, it automatically reloads the updated information.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Efficient Debugging Tools",
				body: "React comes with a robust set of debugging tools, including the React Developer Tools browser extension, that let developers inspect the component tree and monitor props and state in real time. This makes it easy to identify and fix issues quickly, keeping your application stable and maintainable.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "SEO-friendly",
				body: "One of the biggest problems with SPAs (Single Page Apps) is that they are not SEO-friendly. However, with React, you can make your app SEO-friendly, since it’s rendered on the server-side.",
			},
			{
				icon: "/assets/icons/layers.svg",
				title: "Wide range of Reusable Components",
				body: "React offers an extensive range of reusable components that can be used to build your web application, reducing development time and costs.",
			},
			{
				icon: "/assets/icons/mobile.svg",
				title: "Ideal for Native App Development",
				body: "If you’re looking to build a robust native mobile app, the React framework is the best option, as it has several features that enhance the capability of native mobile apps.",
			},
		],
	},

	imageTextBlocks: [
		{
			eyebrow: "What Do We Do? Our Range Of React JS",
			title: "Development Services",
			subtitle: "As one of the early adopters of React JS, Icecube Digital is an experienced React JS development company that offers a wide range of development services. Our expert in-house resources have developed diverse full-scale web applications, mobile apps, and reusable React components for clients across niches.",
			contentTitle: "React Web and Mobile App Development",
			image: "/assets/photos/reactjs-dev-web-mobile-app.png",
			imageAlt: "React web and mobile app development",
			paragraphs: [
				"If you’re looking to build large-scale web apps that are fast and scalable, React JS is the best development platform for you. Some of the benefits of React for web app development include:",
			],
			checklistItems: [
				"Create interactive UIs that enhance the user experience",
				"Seamlessly update existing components",
				"SEO integrated, thanks to server-side rendering",
				"A thriving global community of React developers",
			],
		},
		{
			contentTitle: "Single-Page Application Development",
			image: "/assets/photos/reactjs-dev-single-page-app.png",
			imageAlt: "React single-page application development",
			imagePosition: "right",
			paragraphs: [
				[
					"Besides, large-scale web apps React is the ideal development framework for small single-page applications (SPAs) as well. Here are a few reasons why you should ",
					{ text: "hire React JS developers", href: "/hire-reactjs-developers/" },
					" for SPA development.",
				],
			],
			checklistItems: [
				"Seamless performance thanks to the virtual representation of the DOM (Document Object Model) in React. When a user interacts with the SPA, the operations are first run against the virtual DOM before being rendered on the visible page, thereby guaranteeing flawless performance.",
				"Easy testing - With React JS, developers can quickly test their SPAs and detect bugs if any before deployment",
				"React JS supports server-side rendering",
			],
		},
		{
			contentTitle: "React Migration Services",
			image: "/assets/photos/reactjs-dev-migration.png",
			imageAlt: "React migration services",
			paragraphs: [
				"If you’re looking to update your existing business applications from any other JavaScript platform to React, our React JS developers ensure a smooth migration. When compared with other existing JavaScript platforms, React offers:",
			],
			checklistItems: [
				"Enhanced flexibility during and after development",
				"Powerful composition model",
				"The capability to pass rich data via an app",
				"No need for multiple additional tools",
			],
		},
		{
			contentTitle: "Ongoing Support for React Web and Mobile Apps",
			image: "/assets/photos/reactjs-dev-ongoing-support.png",
			imageAlt: "Ongoing support for React web and mobile apps",
			imagePosition: "right",
			paragraphs: [
				"Are you looking for an expert React JS developer to upgrade your existing React mobile and web apps? Or do you need a team to provide you with extensive maintenance and support services for your React apps?",
				"At Icecube Digital, our team of React JS developers provides you with affordable maintenance services, including ongoing support, upgrades, enhancements, and technical improvements to your product.",
				"We offer extended support services to all clients for whom we’ve built React applications.",
			],
		},
	],

	checkList: {
		eyebrow: "What Else Do We",
		title: "Offer As React JS?",
		benefitsLeft: [
			"Website Development",
			"Native App Development",
			"Plugin Development",
			"UI/UX Development",
			"Front-end Development",
		],
		benefitsRight: [
			"Integration",
			"Template Creation",
			"Social Networking Solutions",
			"Product Development",
		],
	},

	checkListSecondary: {
		eyebrow: "Why Choose Icecube Digital As Your ReactJS",
		title: "Web Development Company",
		subtitle: "With a robust in-house team of experienced React JS developers, Icecube Digital are pioneers in React JS Development. Our team uses best-in-class tools and sophisticated React JS development services to help you meet your business objectives.",
		benefitsLeft: [
			"Quick turn-around times",
			"Dedicated project manager",
			["Best-in-class tools and ", { text: "SEO-friendly solutions", href: "/seo-search-engine-optimization/" }],
		],
		benefitsRight: [
			"Extended support after the first release",
			"Customized solutions that are best suited to your needs",
		],
	},

	faq: {
		eyebrow: "React JS Development",
		title: "FAQs",
		items: [
			{
				question: "What is the cost of developing a ReactJS application with us?",
				answerHtml: "<p>There is no sure-shot answer to the following question. The price may vary depending on the requirement and its customization. The application with the bare minimum features will naturally cost less than a complex one with a wide range of integrated functionality.</p><p>Our ReactJS development services charge depends mostly on factors like</p><ul><li>Complexity of the project</li><li>Size of the development team</li><li>Clarity on the requirement description as it prohibits any unforeseen additional charge</li><li>Additional requirements like maintenance, design, etc.</li></ul>",
			},
			{
				question: "Do we use any tools to keep track of the progress of the project?",
				answer: "We as a leading ReactJS development company, use project management tools to stay and keep updated on the project. The tools we generally use are Trello, JIRA, Pivotal Tracker, etc.",
			},
			{
				question: "How are we the best choice for your ReactJS project?",
				answer: "Your search for the best and most cost-effective ReactJS team has ended. Here are some of the listed reasons that differentiate us from the rest:",
				answerList: [
					"More than a decade of industry experience.",
					"500+ successful project delivery.",
					"Our agile methodology of working is loved by our clients.",
					"Happily served clients from 15+ countries.",
				],
			},
			{
				question: "What is the difference between AngularJS and ReactJS?",
				answerHtml: "<p>AngularJS and ReactJS both can be used to build dynamic applications. However, there exist some key differences.</p><p>AngularJS is a full-fledged front-end framework. ReactJS is a javascript library used for building User Interfaces (UI).</p>",
			},
			{
				question: "What can be built using our ReactJS services?",
				answer: "Various use cases of ReactJS can make many types of applications. Here are a few of the vast possibilities.",
				answerList: [
					"E-commerce website: An efficient eCommerce storefront is a great use case of ReactJS.",
					"Single Page Applications: Web pages that contain a single HTML page content can be loaded dynamically using ReactJS.",
					"Social Media Application: An interactive and scalable social media can be built using ReactJS.",
					"Video Streaming platforms, Realtime messaging apps, and many more.",
				],
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default ReactJsDevelopmentServices;
