const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const ShopifyWebsiteDesign = {
	slug: "shopify-website-design",
	pageTitle: "Top Rated Shopify Website Design Services | Icecube Digital",
	metaDescription: "Icecube Digital builds custom, high-converting Shopify stores — bespoke themes, responsive design, app and payment integrations, migrations, and ongoing support that turn visitors into loyal customers.",

	banner: {
		heading: "Top Rated Shopify Website Design Services",
		paragraphs: [
			"With the changed outlook towards buying things online post-pandemic, there is no doubt that eCommerce is growing at a higher pace than ever all over the world. Over the years, Shopify has emerged as a preferred platform in the eCommerce domain. We have a team of Shopify developers who dedicatedly work to create attractive and user-friendly online stores that not only look captivating but also are SEO friendly. As a Shopify web design company, we work with the priority to deliver online stores that give unforgettable user experiences with a higher rate of conversion.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free Shopify Store Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Shopify Website Design",
		title: "Success Stories",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you'll discover the impact of our innovative solutions and the tangible results we've delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [40941, 40927, 40956],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "How Shopify Web Design Services Can Transform",
		title: "Your Online Store?",
		contentAlign: "center",
		paragraphs: [
			"Are you looking to create an online store that attracts customers? We can turn your ideas into reality with our Shopify web design service.",
			"As a top-notch Shopify Web Design Agency, we take pride in our expert team, who specialize in building eCommerce websites that effectively convert visitors into loyal customers. Our team of design specialists and developers possesses the technical skills required to craft aesthetically beautiful shops with exceptional functionality.",
			[
				"To kick-start the process, we will initiate a discussion to gain extensive knowledge of your business. Subsequently, our ",
				{ text: "Shopify web developers", href: "/hire-shopify-developers-experts/" },
				" will tailor a brand-specific web store designed to meet the unique needs of your products and customers. We are committed to delivering aesthetically pleasing designs that work for you, with tangible results reflected in the sales you generate.",
			],
			"Whether you're launching a new shop on Shopify or updating your existing website, you can count on us to develop an outstanding website for your brand. Entrust your eCommerce vision to our Shopify pros. Our personalized Shopify Web Design Services empower stores to discover their voice and amplify sales.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: {
		...achievementsSection,
		eyebrow: "Our Top Ratings and Recognitions Across",
		title: "Leading Platforms",
	},

	checkList: {
		eyebrow: "Why Businesses Choose a Professional Shopify",
		title: "Web Design Agency For Growth",
		subtitle: "While anyone with a basic knowledge of website development can build a Shopify eCommerce store, hiring a Shopify Website Design Agency is always advisable. They can help you to build customized eCommerce websites from the ground up. At Icecube Digital, our Shopify web designers don't just build websites; we structure and decorate your online store to reflect your brand identity and meet your business needs. Our Shopify Website Design Services include:",
		benefitsLeft: [
			"Attractive, neat-looking website designs to appeal to your target audience",
			"Customized yet brand-consistent themes that reinforce brand image",
			"Leveraging Shopify's robust features for enhanced functionality",
		],
		benefitsRight: [
			"User-friendly interface for an optimized customer experience",
			"SEO-friendly development to improve organic rankings",
		],
		textContent: [
			"Our developers are highly proficient in Shopify's Timber theme and Bootstrap frameworks. This makes us well-equipped to make any Shopify eCommerce website design responsive across devices.",
			"By partnering with industry specialists like us for your custom Shopify website design needs, you can focus on running your online business while leaving the heavy lifting to the experts. Our ultimate goal is to create a custom-designed Shopify store that maximizes conversions and sales.",
		],
	},

	leftIconBox: {
		eyebrow: "Why Shopify Is the Preferred Platform For",
		title: "Modern eCommerce Businesses",
		subtitle: "As a leading Shopify web design agency, we are often asked why we chose Shopify over other eCommerce platforms. There are many benefits to building your online store with Shopify that make it stand out from competitors:",
		items: [
			{
				icon: "/assets/icons/user.svg",
				title: "User-Friendly Interface",
				body: "Shopify is widely loved for its super intuitive and easy-to-navigate admin interface. The dashboard enables you to seamlessly manage all critical eCommerce operations, from products to orders and shipping, even with zero technical expertise required.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Seamlessly Scalable",
				body: "A major benefit is that Shopify stores are immediately optimized for business growth and scalability. You can comfortably start small as a beginner and easily scale up your operations over time as you can expand your store without having to re-platform or migrate later.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Secure & Reliable Infrastructure",
				body: "Shopify provides industry-leading security measures. With a globally load-balanced server network, it offers superior speed and reliability compared to many other eCommerce solutions. Business owners can rest assured, as they don't need to constantly worry about security vulnerabilities, website downtime, or unreliable servers. Our Shopify Website Design Services also guarantee 100% security.",
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Built-in Marketing Tools",
				body: "Right out of the box, Shopify comes packed with a versatile set of pre-built marketing tools. It offers targeted email campaigns, gift cards, coupons, and more designed to boost your store's sales and revenue directly without external apps. You also get access to detailed analytics, giving actionable insights on conversions.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Customized Theme Store",
				body: "The Shopify Theme Store grants you instant access to an abundant marketplace with over 6,000 beautiful themes suited for all niches and verticals, offered at affordable pricing. You're guaranteed to find a visually appealing theme no matter what products you sell.",
			},
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Simplify Checkout",
				body: "A huge sales advantage is Shopify's seamless one-page checkout process. It drastically improves conversion rates by offering multiple trusted payment gateways like Stripe. It also supports integrating various local payment methods to cater to all the global marketplaces you target.",
			},
		],
	},

	checkListSecondary: {
		eyebrow: "Why Choose Us As a Trusted Shopify",
		title: "Web Design Agency?",
		subtitle: "As a premier Shopify web design company, Icecube Digital is trusted by businesses worldwide to build custom, high-converting eCommerce websites on the Shopify platform. Here are a few key reasons to work with our team:",
		benefitsLeft: [
			"Expertise in Shopify's themes framework (Timber) and building custom themes from scratch",
			"Expertise in content management using Sections, Blog, and Pages",
			"Deep integration experience with payment gateways like Stripe, PayPal, and Amazon Pay",
			"Extensive experience optimizing sites for speed, conversion, and usability",
			"Integration of 3rd party apps like shipping calculators, inventory management, and abandoned cart recovery",
			"User experience design focusing on usability and intuitive navigation",
			"Proficiency in Shopify Sections and building custom Snippets",
		],
		benefitsRight: [
			"Proficient with web design and development languages like PHP, HTML, CSS, JavaScript",
			"Migration experience moving stores from other platforms to Shopify",
			"Ongoing support and maintenance to update sites with new features and functionality",
			"Dedicated Shopify Plus specialists for enterprise-level stores",
			"Social media integration, including Facebook Pixel, Instagram shopping, and email marketing tools",
			"Ongoing analytics tracking and reporting to improve performance",
			"Timely delivery of the project with no compromise on the quality.",
		],
	},

	plainTextSecondary: {
		eyebrow: "Flexible Shopify Web Design Packages That Meet",
		title: "Your Business Needs",
		contentAlign: "center",
		paragraphs: [
			"At IceCube Digital, we offer flexible engagement models to meet clients' unique needs. Whether you're a small business looking for an affordable fixed-price website or an enterprise that requires dedicated developers for an ongoing eCommerce project, we have solutions tailored for you.",
			"For small businesses, our fixed-price Shopify web design packages allow you to get an affordable, custom-designed website on a predetermined budget. We'll list all the key deliverables, like the number of pages, custom features, etc., so you know exactly what you're getting.",
			"We offer dynamic pricing or dedicated developer teams for larger or more complex Custom Shopify web design projects. With dynamic pricing, costs scale up or down based on changes in scope or requirements during the web design and development process. The dedicated team model allows us to embed designers and developers within your company to work as an extension of your in-house staff.",
			"No matter which engagement structure makes the most sense for your needs, our Shopify website developers and web design experts are here to deliver exceptional work. You'll get 24/7 support so we can build the perfect Shopify-powered website together. And we're happy to work onsite, remotely, or both – whatever blend best brings your digital vision to life.",
		],
	},

	topIconBox: {
		eyebrow: "Custom Shopify",
		title: "Web Design Solutions",
		subtitles: [
			[
				"As the ",
				{ text: "best Shopify development agency", href: "/shopify-development-services/" },
				", we build eCommerce sites from the ground up, including customized themes, responsive design, as well as social media integration solutions.",
			],
			"Whether you plan to get a completely new eCommerce store or migrate your existing one to Shopify, we'll help elevate your business's online presence to the next level. Here are our solutions to make your store truly unique, instantly attracting customers and increasing engagement on your e-store.",
		],
		items: [
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Shopify Website Design",
				body: [
					"We have made a mark on our prestigious clients by providing the best Shopify web designers in the USA. We are well-reputed for our expertise in creating unique UI and UX Shopify designs that portray your brand's aesthetics. Our ",
					{ text: "Shopify experts designers", href: "/hire-shopify-website-designers/" },
					" leave no stone unturned when it comes to designing a custom-themed website that can instantly attract customers.",
				],
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Shopify Theme Customization",
				body: "Our team of Shopify website designers is well-acquainted with the platform's 100+ professionally made themes and has the expertise needed to integrate them with your brand's identity. It helps in creating a unique online store that surpasses your competition in every aspect. We are also equipped with the skills needed to create fresh Shopify themes from scratch that align with the vision you have for a successful eCommerce site.",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "Shopify Plugins & Extensions",
				body: "Once your eCommerce stores' design is finalized, the next step is to decide on which plugins you need to ensure a smooth user experience while selecting and purchasing the products. We have professionals who install Shopify plugins such as the Store locator, free shipping bar, easy contact form, filter and search, and Nudgify for social proof and FOMO notifications.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Platform Migration Solutions",
				body: "If you intend to migrate your website from another eCommerce platform to Shopify, we are here to help. We offer well thought-out solutions for platform migration while beautifying your store's look and feel at Shopify. Migrating your online store to Shopify will give you access to many features to make your eCommerce site unique.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Shopify Integration Solutions",
				body: "You can directly drive traffic from social media to your eCommerce store with our comprehensive integration solutions. We have industry experts in our Shopify website developers team who integrate shopping into your business's social media channels, letting your followers shop as they browse.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Support & Maintenance",
				body: "Developing a website is not a one-time process. It needs to be upgraded regularly with the ever-changing technology. Our team is always ready to offer the support necessary to keep your website up and running.",
			},
		],
	},

	cta: {
		text: "Transform Your Online Store With a Stunning Shopify Website Design—Start Building Your Brand Today!",
		ctaLabel: "Get A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Shopify Website Design",
		title: "FAQs",
		items: [
			{
				question: "How much time does it take to build a Shopify site?",
				answer: "It depends on what type of business you want to do. Simple sites with 1-2 pages and an out-of-the-box theme can take 2-3 weeks. More complex custom designs using custom themes may take longer time. Many factors influence timelines, such as features, pages, integrations, etc.",
			},
			{
				question: "What kind of customization options does Shopify provide?",
				answer: "Shopify allows extensive branding customizations like color schemes, fonts, and logo placement. You can customize navigation menus, header/footer content and layout. Using sections and snippets allows custom HTML/CSS code additions. Apps add functional features. Themes are fully customizable, or you can build one from scratch.",
			},
			{
				question: "Why should I hire Shopify experts from IceCube Digital?",
				answer: "We are a certified Shopify development agency with 12+ years of experience. Customer satisfaction being the end goal of everything that we do, you can put your trust in us.",
			},
			{
				question: "How much does a Shopify website design cost?",
				answer: "The price is determined by your store size, functionality and style of design. We offer customized prices on each Shopify project.",
			},
			{
				question: "How long does it take to design a Shopify website?",
				answer: "Depending on the scope and customization of projects, our professional Shopify web design services typically require 2 to 6 weeks.",
			},
			{
				question: "Can you redesign my existing Shopify website?",
				answer: "Yes, we optimize and modernize the current Shopify stores to enhance user experience, conversions and performance.",
			},
			{
				question: "What’s included in your Shopify website design services?",
				answer: "We offer customization of themes, responsive layout, search engine optimization, integration of apps, as well as conversion-oriented design.",
			},
			{
				question: "Do you create custom Shopify designs or use templates?",
				answer: "As a trusted Shopify web design agency, we create fully custom Shopify designs tailored to your brand identity and business goals, ensuring a unique and high-performing online store.",
			},
			{
				question: "Can you integrate my website with CRM or email marketing platforms?",
				answer: "Yes, we will be able to smoothly combine your Shopify store with CRM systems and email marketing techniques to automatize the work with customers and increase their engagement.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default ShopifyWebsiteDesign;
