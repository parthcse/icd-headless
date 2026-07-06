const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const SportsWebDesign = {
	slug: "sports-website-design",
	pageTitle: "Best Sports Website Design Company | Fitness Website Designer",
	metaDescription: "Icecube Digital is an award-winning sports website design company that develops ROI focused websites for fitness, athletic and sports club companies.",

	banner: {
		heading: "Sports Website Design Company",
		paragraphs: [
			"Being an award-winning sports website design company, Icecube Digital builds interactive and classy sports websites that represent the companies in the best way. We have a team of fitness website designers who understand the key elements of developing a successful and interactive sports website. We know the value of visual appeal and user-friendliness and deliver comprehensive and affordable sports websites incorporating all the technicalities and features flawlessly. Come to Icecube Digital to get an impressive sports website designed.",
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
		postIds: [40930, 40867, 40960],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Best Sports",
		title: "Website Development",
		paragraphs: [
			"When it comes to sports, fitness and outdoor activities, there are a ton of businesses and other brands, contesting for their share in the cluttered marketplace of today. To stand out from the crowd, you need the best sports website design company for spectacular marketing and a robust brand identity.",
			"This is where we come in. Our expert team of sports and fitness web designers and developers has been providing high-quality, ROI-focused web design services to sports companies; fitness brands athletic foundations, teams, and sports persons for years. We believe that every sports brand should have a solid presence on the internet, to capitulate on their target audience, who are searching for sports products and services online.",
			"Whether you’re looking to build a sports website from scratch, relaunch your existing football club website with a new persona, or sell sports and fitness merchandise online – you’ve come to the right place. Our expert sports club website builders take care of it all to provide you with the best results.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	imageText: {
		eyebrow: "Professional Sports",
		title: "Website Designer",
		image: "/assets/photos/sports-professional-designer.png",
		imageAlt: "Professional Sports Website Designer",
		imagePosition: "right",
		paragraphs: [
			"With our years of experience working with sports companies and athletes, we understand that no two sports businesses are alike. This is why; you cannot find any fixed sports team website design packages on our site. We abhor the “one-size-fits-all” approach. Instead, we work with you to find out the ins-and-outs of your business, get to know your objectives and goals, and create custom sports eCommerce website solutions that perfectly match your specific requirements.",
		],
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "kendal-rudolph",
	},

	information: {
		eyebrow: "Sell Your Sports & Fitness Products With Our Sports Team Website",
		title: "Design Service",
		cards: [
			{
				blocks: [
					{
						type: "p",
						parts: [
							"Our dedicated team of ",
							{ text: "eCommerce specialists", href: "/hire-ecommerce-designers-developers/" },
							" has tons of experience working across all major eCommerce platforms. This makes us ideally suited to help you choose the best eCommerce tool to sell your sports merchandise online. Whether this is your first time selling your sports & fitness products and services online, or whether you’re looking to boost profits, we’ve got you covered.",
						],
					},
					{
						type: "p",
						text: "Some of the popular eCommerce platforms we specialize in sports eCommerce development",
					},
					{
						type: "ul",
						items: [
							[{ text: "Magento eCommerce", href: "/magento-development-services/" }],
							[{ text: "WooCommerce", href: "/woocommerce-development-services/" }],
							[{ text: "Shopify", href: "/shopify-development-services/" }],
							"Open Cart",
							"Drupal Commerce",
						],
					},
					{
						type: "p",
						text: "Get in touch with our sports website design team to figure out the right eCommerce approach that works for your brand.",
					},
				],
			},
		],
	},

	infoBox: {
		eyebrow: "What Makes Us The Best Fitness",
		title: "Website Designer Team?",
		subtitle: [
			"We help you gain an edge over your direct competitors as well as the big players in the industry. Our sports and fitness website design doesn’t just look elegant, but also functions extremely well to provide your customers with the ultimate user experience.",
			"Here’s why our clients love working with us:",
		],
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				title: "Seamless User Experience",
				body: "The most important requirement for any sports eCommerce website is that it has to be functional and easy to use. By striking the right balance between design and functionality, and by using a mix of media components, we provide your target audience with a seamless user experience.",
			},
			{
				title: "Strong Branding",
				body: "When your business is based on a sports team or a sports club event, you need to have robust branding to connect with the avid fans. We ensure that the colors, mascot, logo and even typography of your sports league website match the sports event, team or person you’re representing.",
			},
			{
				title: "Mobile Compatibility",
				body: "With more and more users shifting to handheld devices, your website has to provide users with a consistent experience; irrespective of the device they’re on. This is why we focus on building a custom sports team website designs that are responsive and mobile-friendly.",
			},
			{
				title: "Visually Engaging",
				body: "Any sports website web design has to have the right visual imagery to keep the audience engaged and captivated. We don’t bombard your site with pages of text nor image after image. We strike the right balance to create a visually engaging site that captivates and connects.",
			},
			{
				title: "Ecommerce Features",
				body: "Whether you’re selling tickets to a sports event, booking slots for your fitness classes, or selling athletic apparel, we provide your customers with a credible and intuitive user-friendly online platform to buy your products.",
			},
			{
				title: "SEO and Digital Marketing",
				body: "We don’t just build you an online address, but we help you get found online. All our sites are seo-friendly and follow the latest seo principles to boost your search engine rankings. We also help you connect with your target audience using relevant digital marketing techniques.",
			},
		],
	},

	checkList: {
		eyebrow: "Why Work With The Best Fitness",
		title: "Website Designer",
		benefitsLeft: [
			"Team of certified eCommerce website developers",
			"200+ eCommerce projects completed successfully",
			"Free project consultation by our eCommerce experts",
			"Best eCommerce user experience experts",
		],
		benefitsRight: [
			"Unparalleled quality with the best performance",
			"Easy and effective communication process",
			"24/7 technical support",
			["14+ years of ", { text: "ecommerce web development", href: "/ecommerce-website-development-services/" }, " experience"],
		],
	},

	cta: {
		text: "Game On! Elevate Your Sports Business With a Custom-Built Website.",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Sports Website Design",
		title: "FAQs",
		items: [
			{
				question: "How does your design process work?",
				answer: "Based on your initial ideas and references, our sports website design team comes up with wire frames and mock ups for page designs. With your feedback on initial mock ups, we work on the revisions. We offer unlimited revisions and we won’t be happy unless you are satisfied with the design.",
			},
			{
				question: "Do you use pre-made templates?",
				answer: "No, we build custom designs from scratch to meet the exact business needs of our valued clients. A lot of companies use pre made templates or themes to cut costs. We strongly recommend our customers to go with a custom design",
			},
			{
				question: "Do you offer warranty on sports and fitness websites you build?",
				answer: "Yes, we provide free one month bug fixing support. After that, you can opt for our monthly or yearly website maintenance package to keep your website up to date.",
			},
			{
				question: "Who will arrange content for my site?",
				answer: "You can provide content from your end if you can manage or opt for our content writing service package that we offer. We can assist you to create SEO & user friendly content for your web pages that will help you outrank top competitors online.",
			},
			{
				question: "I already have a website, can you update it?",
				answer: "If you have a website that is old-fashioned and not generating revenue, our sports web design specialists consult with you to determine your vision and redesign your site as per current design trends.",
			},
			{
				question: "What are your payment terms?",
				answer: "Project payments are divided in phases as per the project scope. You will need to release part of the payment as we finish the set milestones. For SEO & website maintenance services, It will be monthly or yearly based on package selected.",
			},
			{
				question: "How much does a sports website cost?",
				answer: "The cost of building a website really depends on the complexity and time it takes to build a complete website. It takes longer to build a webshop for sporting goods with custom features than a simple CMS website for sports team or club. We offer industry specific solutions to keep the cost as minimum as possible",
			},
			{
				question: "Can I update website myself after it's completed and live?",
				answer: "Our sites are built to give you full control and flexibility. Our sports website development team will provide you a guide on how you can update those items on your own. If you ever want us to do technical updates, we will happily do it for you on hourly or fixed cost basis.",
			},
			{
				question: "Will my website work well on different size of devices?",
				answer: "Every website we build is mobile friendly. Majority of people are accessing the web using small screen devices these days so it’s important that your website provides the best user experience on mobile phones and tablets. Our sports and fitness website design team uses mobile first strategy while designing websites.",
			},
			{
				question: "Can I see my website during development phase?",
				answer: "Yes. We will keep you in the center throughout the development phase to ensure your satisfaction. Once you approve the design layout, we will send a private link to check the construction. This way, any other changes required from your end will be made at the same time.",
			},
			{
				question: "What types of sports websites and portals do you build?",
				answer: "We have great experience in building different types of websites such as",
				answerList: [
					"Sporting goods eCommerce websites",
					"Sports club website design",
					"Cricket website design",
					"Fishing charter website design",
					"Rugby website design",
					"Football website design",
					"Sports training website design",
					"Personal trainer website design",
				],
			},
			{
				question: "Why should I hire Icecube Digital for my website project?",
				answer: "Don’t worry – you are in safe hands. We are a certified sports website development agency with 10+ years experience in building ground breaking sports and fitness websites and portals. Customer satisfaction is the end goal of everything that we do. Don’t take our words for it, please review our customer testimonials on Google and GoodFirms.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default SportsWebDesign;
