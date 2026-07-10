const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const CustomPhpDevelopmentServices = {
	slug: "custom-php-development-services",
	pageTitle: "Custom PHP Development Services Company | Hire PHP Developers",
	metaDescription: "Icecube Digital as a leading PHP development company provides custom PHP development services for diverse business requirements. Hire expert PHP developers today.",

	banner: {
		heading: "PHP Development Services",
		paragraphs: [
			"PHP has been one of the preferred choices for organizations for years because of its capacity to develop dynamic applications. Being developers’ favorite choice, more than 245 websites use PHP as a framework and the number keeps increasing. As a PHP development services provider, we have successfully developed several applications for various domains. Over the years, our talented PHP developers have gathered hands-on experience utilizing various famous PHP frameworks like Laravel, CakePHP, Codeigniter, and more.",
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
		postIds: [40909, 40903, 40882],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Hire Custom",
		title: "PHP Developers",
		contentAlign: "center",
		paragraphs: [
			"If you’re looking for an effective, technical, creative, and focused team for your web development services, IceCube Digital is the answer for you. IceCube Digital offers a wide framework of PHP Web Development Services for you to choose from and develop your business ideologies.",
			"Gain an edge over the competition, with world-class PHP services for your web development needs that are custom, flexible, and extremely versatile. You can select a developer from our team of highly qualified individuals and transform your business goals into a reality.",
			[
				"IceCube Digital is an all-rounded PHP web development company known for its platform that dives into various industries ranging from jewellery, automotive, ",
				{ text: "food", href: "/food-beverage-website-design/" },
				", sports, ",
				{ text: "real estate", href: "/real-estate-website-design-development/" },
				", furniture, ",
				{ text: "medical and healthcare", href: "/medical-healthcare-website-design-development/" },
				" to ",
				{ text: "travel and tourism", href: "/travel-website-design-development/" },
				". It would be more beneficial for you to invest in a company that has dealt with a good number of aspects of software development. This experience of more than 14+ years sets us apart from our competitors.",
			],
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "leon-ernst",
	},

	leftIconBox: {
		eyebrow: "Get Trendy Feature Rich Responsive",
		title: "Web Application",
		subtitle: [
			"PHP is an open-source web development platform that runs on the most productive systems at zero cost. It provides an extremely high-end, customizable, and flexible platform to create highly dynamic web solutions. Apart from that, here are some of the major reasons to use PHP.",
		],
		items: [
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Easy to Learn and Integrate",
				body: "PHP is known to be one of the most simple to learn programming languages. This is exactly why Web Developers find it easy to create and use. They excel in the software within no time, leaving space for creativity and optimization.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Efficacy in Performance",
				body: "PHP Development is versatile beyond imagination. You can mold the software’s features based on your personal requirements, write scalable codes and develop various kinds of web pages and apps. It is also known for its great speed and hassle-free UI.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Cost Efficient",
				body: "Purchasing PHP Software is completely free, and hence, there are many developers who try to work on that and excel in it. This makes hiring a PHP developer cost-effective as well.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Flexibility",
				body: "PHP Web Development is quite flexible, as mentioned above. PHP allows room for changes along the course of a project. This feature makes PHP a very attractive choice of Web Development option, as the functionality of a project is susceptible to a number of changes.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Stability and Security",
				body: "This framework is extremely strong against outer attacks and security threats. PHP is also more stable compared to other programming languages. This framework has been in use for a long time and has developed extremely strong software free of bugs and issues.",
			},
		],
	},

	infoBox: {
		eyebrow: "Why Choose IceCube Digital for",
		title: "Custom PHP Development",
		subtitle: "At IceCube Digital, we specialize in delivering precise, modern, and high-quality PHP websites. Our team of skilled developers streamlines the process without compromising on functionality, ensuring your website is robust and effective. We focus on developing products that meet your specific needs and exceed expectations.",
		columns: 2,
		items: [
			{
				title: "Custom PHP Development",
				body: "A website developed from PHP is thorough, precise, and tested. PHP is a more modern, cutting edge, and simple style of web development that allows a developer to hasten the process of wireframing, without compromising on the quality and functionality of the product. Hire a PHP web developer from our team of well-equipped, inspired creators, who would go out of their way to provide you with the best advantages of PHP Web Development.",
			},
			{
				title: "Web Testing",
				body: "The PHP framework makes it possible for the performers to write test cases and test the web application easily and thoroughly. This enhances the output to a large extent, with the PHP framework easily automating different tasks.",
			},
			{
				title: "Maintenance and Online Support",
				body: "PHP framework only makes the web application development process easier. PHP consists of a model view controller framework that helps maintain this code. Other than this, the PHP framework also consists of a great online community that helps constantly critiques and grows the system along the way, adding new features every now and then.",
			},
			{
				title: "Dynamic Hands-on Support",
				body: "We work with you even long after we have completed the process of creating the best PHP software for your business niche. Since businesses grow and advance rapidly, many changes and alterations take place that can easily be brought into place. The flexibility of the software is a major advantage for this scenario.",
			},
		],
	},

	checkList: {
		eyebrow: "Delivering Top Notch Applications as a Custom PHP",
		title: "Development Company",
		subtitle: "For us, communication is key, and the client comes first. We will be in touch with you at every step of the process, ensuring our intentions are clear and sit well with your needs. We understand your requirements and provide services beyond what is asked for. IceCube Digital can help your business grow by providing extensive feedback on the web development ideologies most suited for your business. Select us as your PHP development company to create the best UI/UX for your business niche and surge forward in no time.",
		benefitsLeft: [
			"Using PHP tools to build cloud-native apps",
			"Offering custom consulting services for design and implementation, application architecture, and application development test their SPAs and detect bugs if any before deployment",
			"Helping you to have hassle-free migration to PHP without any loss of data or feature",
		],
		benefitsRight: [
			"Developing custom online stores using the latest PHP platforms",
			"Delivering web applications with interactive dashboards",
			"Flexible and prompt development approach",
		],
	},

	faq: {
		eyebrow: "PHP Development",
		title: "FAQs",
		items: [
			{
				question: "What is PHP?",
				answer: "PHP is an HTML-embedded scripting language. It is a high-performance programming language to build dynamic websites and portals.",
			},
			{
				question: "What is the benefit of using PHP?",
				answer: "PHP is open source meaning you don’t need to pay any platform fees to use it. It is compatible with almost all servers used today. It is easy to learn for developers. Supports a very large database.",
			},
			{
				question: "How secure is PHP?",
				answer: "PHP is highly secure as other major programming languages. The security of your web portal or app relies on the skills of the PHP Development Company you use. They need to ensure all security measures while building the application.",
			},
			{
				question: "What kind of web projects can be built using PHP?",
				answer: "Starting from simple CMS websites to large eCommerce portals with large databases can be handled effectively using PHP. It is also used to build online communities and project management tools. For example, Facebook – a world-known social media portal was originally developed in PHP.",
			},
			{
				question: "How much does it cost to build my site on PHP?",
				answer: "The cost of development really depends on how big and complicated your application is. Our Custom PHP developers can get you a cost estimate after reviewing your detailed project specs.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default CustomPhpDevelopmentServices;
