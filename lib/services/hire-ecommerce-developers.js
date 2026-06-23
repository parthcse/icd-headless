const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const HireEcommerceDevelopers = {
	slug: "hire-ecommerce-designers-developers",
	pageTitle: "Hire Ecommerce Website Designers & Developers | Icecube Digital",
	metaDescription: "Hire experienced eCommerce website designers and developers from Icecube Digital to design, build, and grow your online store.",

	banner: {
		heading: "Hire Ecommerce Website Designers",
		paragraphs: [
			"Have you made up your mind to give a distinctive look to your eCommerce website? Then, you must be looking for safe hands to handle your requirements. Hire experienced eCommerce website designers, developers, and strategists from Icecube Digital to take your business to new heights.",
			"Delivering services to startups, medium-sized businesses, and enterprises, we know what it requires to make any eCommerce business successful. Got a project to discuss with us? We are just a click away!",
		],
		checklistItems: [],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free eCommerce Store Audit",
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
		eyebrow: "Hire Ecommerce Website Developers For Versatile",
		title: "Business Needs",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "Whether you are looking to redesign your eCommerce website to provide a user-friendly experience to your customers or want to develop it from scratch, we have got you covered. We, at Icecube Digital, have hands-on experience in different eCommerce platforms, including Magento, Shopify, WooCommerce, Drupal, Square Online, Volusion, Big Cartel, and other eCommerce platforms." },
			{ type: "p", parts: [
				"Utilizing our 14+ years of industry experience as a leading ",
				{ text: "eCommerce Website Development company,", href: "#" },
				" we deliver a wide range of eCommerce services that optimize your website for higher conversions. Don't just believe our words; experience it for yourself. So, without giving a second thought, talk to our expert now to hire eCommerce developers.",
			]},
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialId: 24,
	},

	imageText: {
		eyebrow: "Mastering User Experience to Maximize Conversions and",
		title: "Upsell Opportunities",
		image: "/assets/photos/hire-ecommorce-developers-left.png",
		imageAlt: "",
		paragraphs: [
			"Acing user experience is crucial to turning visitors into customers and increasing your average order value. An intuitive layout, simple navigation, and clear calls-to-action guide users seamlessly through the buying journey, making it easier for them to find what they need and encouraging more purchases.",
			"An e-commerce website designer for hire can tailor your site to highlight upsell opportunities without disrupting the customer's experience. By strategically placing relevant products or special offers, you can boost sales without feeling overly promotional.",
			"Additionally, a well-designed user experience builds trust and keeps customers coming back. When your website feels effortless to use, visitors are more likely to complete purchases and even recommend your store to others, increasing your overall revenue.",
		],
		checklistItems: [],
	},

	imageTextSecondary: {
		eyebrow: "Showcase Your",
		title: "Products Beautifully",
		image: "/assets/photos/hire-ecommorce-developers-right.png",
		imageAlt: "",
		imagePosition: "right",
		paragraphs: [
			"Your products deserve to stand out. A clean, visually appealing layout can make all the difference in how customers perceive your brand. By using high-quality images, compelling descriptions, and smart design choices, you can create an environment that encourages customers to explore and buy.",
			"Our ecommerce web development experts focus on creating designs that not only look great but are easy to navigate. From product categories to search filters, every element is crafted to guide users effortlessly toward the checkout.",
			"Showcasing your products beautifully isn't just about aesthetics—it's about driving conversions. By ensuring your store is optimized for a seamless shopping experience, you'll capture attention and make it easier for customers to choose your products over competitors.",
		],
		checklistItems: [],
	},

	topIconBox: {
		eyebrow: "Best Agency For",
		title: "Diversified Ecommerce",
		items: [
			{
				icon: "/assets/icons/html-code.svg",
				title: "Custom eCommerce Web Development",
				body: "Do you want to develop a customer-centric eCommerce website that gives a rich user experience, boosts sales, and increases the overall profit of your business? Then, we are here to develop retina-ready websites that have cross-browser compatibility to give an experience like never before.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Responsive Design",
				body: "Our eCommerce designers know how to design detail-oriented experiences that not only focus on exceeding customers' expectations but also give an excellent performance to stand out from your competitors. We design marketing-driven designs for your eCommerce website, store, or mobile application to delight your customers and boost your brand image.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Platform Upgrade & Migration",
				body: "We, at Icecube Digital, are also catering to our clients with the need of upgrading eCommerce platforms and migrating their stores from one platform to another. Whether you want to upgrade your current platform or looking for migrating it, just discuss your requirements with us and we will suggest the best solution.",
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "Payment Gateway Integration",
				body: "Allow your customers to make an online payment for their purchasing and provide a safe and secure experience that they have never experienced. To deliver a safe payment experience to your customers, we do provide the best payment gateway integration options like Stripe, PayPal, Cashfree, and more.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Plugins & Module Development",
				body: "We develop custom eCommerce plugins and modules that align with your website smoothly and enhance the overall online store's functionality. Whether you want to improve the functionality and overall website experience, we develop advanced plugins and modules to boost performance.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "eCommerce SEO",
				body: "If you need an eCommerce website that has all the SEO-friendly features and functionalities, then we can be the best project partner. Our eCommerce developers are experts in designing and developing eCommerce website that meets SEO standards of search engines like Google, Yahoo!, and Bing.",
			},
			{
				icon: "/assets/icons/minicart.svg",
				title: "Shopping Cart Development",
				body: "Are you looking for developing a shopping cart that makes an entire shopping experience from ordering to payment delightful? Then, you are in safe hands. We do have a team of eCommerce developers who have special expertise in designing and developing shopping cart solutions that are seamless to use. Our developed solutions encourage your users and customers to visit your eCommerce repeatedly.",
			},
			{
				icon: "/assets/icons/predictive.svg",
				title: "Analytics and Reporting",
				body: "We provide comprehensive analytics and reporting tools that offer insights into user behavior, sales performance, and marketing effectiveness. These reports help you make informed decisions, ensuring your site continues to evolve and meet business goals efficiently.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Maintenance and Support",
				body: "Our ongoing maintenance and support services ensure your website remains up-to-date, secure, and fully functional. From routine updates to troubleshooting, we're here to make sure your site operates smoothly without interruption.",
			},
		],
	},

	processSteps: {
		eyebrow: "Empowering Your Online Growth With",
		title: "Technical Expertise",
		steps: [
			{
				title: "Choosing the Best E-Commerce Platform",
				body: "A successful store is mostly dependent on the platform you choose. We evaluate the demands of your company and work with you to select a platform that will enable long-term growth by providing flexibility, scalability, and ease of use.",
			},
			{
				title: "Creating a Smooth User Interface",
				body: "The layout of your website should promote browsing and purchasing. Our priority is to maintain your consumers' engagement and increase conversions with intelligent layout, fast load speeds, and straightforward navigation.",
			},
			{
				title: "Ensuring Cross-Device Compatibility",
				body: "Shoppers expect a consistent experience across all devices. We ensure your site works flawlessly on smartphones, tablets, and desktops, providing a unified experience no matter how your customers shop.",
			},
			{
				title: "Backend Development & Server Management",
				body: "A strong backend ensures your site runs smoothly. Our team manages everything from server configuration to ongoing maintenance, so your store is always up and running without issues.",
			},
			{
				title: "Integrating Reliable Payment Solutions",
				body: "A smooth and secure checkout process is crucial. We integrate trusted payment gateways that offer easy transactions and peace of mind for both you and your customers.",
			},
			{
				title: "Implementing Advanced Security Measures",
				body: "Data breaches can be costly. Our team puts the latest security protocols in place to safeguard your customers' information and protect your business from threats.",
			},
			{
				title: "Building a Secure and Scalable Database",
				body: "As your business grows, so do your data needs. We develop databases that handle increasing demands while keeping data organized and secure, supporting your growth without compromising performance.",
			},
			{
				title: "Optimizing Performance and Load Speed",
				body: "Fast-loading pages can make or break a sale. We optimize your site's performance to ensure quick load times, reducing bounce rates and keeping customers engaged longer.",
			},
		],
	},

	infoBox: {
		eyebrow: "Ecommerce Website Design",
		title: "Best Practices We Follow",
		subtitle: [
			"The success of an e-commerce business relies on the design of its website. At IceCube Digital, we help you create a user-friendly experience that captivates your audience and drives profits. So, let us explore the top e-commerce practices to build websites optimized for success!",
			"IceCube Digital presents some of the topmost e-commerce design practices that will take your website to a new level.",
		],
		items: [
			{
				title: "Clear and Intuitive Navigation",
				body: "IceCube Digital ensures that your website has a proper menu structure that categorizes products logically. Our navigation elements are easy to find and a joy to use for everyone. Remember, a frustrated visitor is unlikely to become a satisfied customer.",
			},
			{
				title: "Product Descriptions",
				body: "Detailed product descriptions can inform and persuade your customers. IceCube Digital ensures your product descriptions are clear, concise, and informative. We also include details such as specifications, materials, and usage instructions.",
			},
			{
				title: "Mobile-Friendly Design",
				body: "The world is going mobile, and so should your e-commerce website. We implement responsive design to ensure a consistent and enjoyable experience across different screen sizes so your customers can shop wherever they are.",
			},
			{
				title: "Prominent Search Bar",
				body: "Our e-commerce designs feature a highly visible search bar that allows users to find and search for products quickly. We implement filters and sorting options to refine search results for an efficient shopping experience.",
			},
			{
				title: "Call-to-Action (CTA) Buttons",
				body: "Did you know that CTAs are your silent salespeople? We add action-oriented CTAs like \"Add to Cart\" and \"Buy Now\" to product pages and shopping carts, making it effortless for customers to take the desired actions.",
			},
			{
				title: "Trust Signals and Security",
				body: "We go the extra mile by displaying trust badges, security seals, and payment logos prominently to instill confidence in users. We implement secure payment gateways and highlight your website's security measures.",
			},
			{
				title: "Simplified Checkout Process",
				body: "IceCube Digital streamlines the checkout experience, minimizing the steps required to purchase a product. We also offer guest checkout options to avoid forcing users to create an account.",
			},
			{
				title: "Cross-Selling and Upselling",
				body: "IceCube Digital implements related product recommendations and upsell options on product pages and during checkout. It's proven to increase average order value and enhance the shopping experience.",
			},
			{
				title: "High-Quality Images",
				body: "The clearer the image, the greater the appeal. We insist on using high-resolution images that showcase your products from every angle. Implement zoom functionality, which enables users to examine product details up close.",
			},
			{
				title: "Easy Wishlist and Shopping Cart Access",
				body: "Your customers should be able to access their wishlist and shopping cart with ease. We provide users with a visible wishlist and shopping cart icon, allowing them to add or remove items effortlessly.",
			},
			{
				title: "A/B Testing and Optimization",
				body: "IceCube Digital is committed to continuous improvement. We encourage A/B testing of different design elements and layouts to identify what works best for your audience.",
			},
			{
				title: "User Reviews and Ratings",
				body: "Our team showcases user-generated reviews as well as ratings on your website. It is an effective way to provide social proof of your products or services and build credibility.",
			},
			{
				title: "Return and Refund Policies",
				body: "Transparency builds trust. IceCube Digital ensures that your return and refund policies are clearly stated, reassuring customers about their purchase decisions.",
			},
			{
				title: "Simple and Consistent Design",
				body: "IceCube Digital utilizes clean and appealing designs that maintain a consistent color scheme, typography, and design elements across the site.",
			},
			{
				title: "Fast Loading Speed",
				body: "Slow websites are a turnoff. IceCube Digital optimizes images, scripts, and other elements to ensure fast page loading times.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Our Ecommerce Website Development Experts Have",
		title: "Following Expertise",
		items: [
			{
				icon: "/assets/icons/magento.svg",
				title: "Magento Development",
				body: [
					"Looking for the best and most fully customized B2B or B2C eCommerce store? Our ",
					{ text: "Magento developers", href: "#" },
					" have the potential to make proper utilization of the Magento platform to deliver 3rd party integrations for Magento ERP, CE, EE, and POS integrations.",
				],
				bodyAfter: "So far, we have helped a number of companies across the world turn their websites into sales platforms with in-depth Magento customization and refinement services. If you have made the smart decision of redesigning your website or want to develop it from the core, then get in touch with us today.",
			},
			{
				icon: "/assets/icons/shopify.svg",
				title: "Shopify Development",
				body: [
					"With the increasing number of businesses that are moving from brick & mortar stores to online space, the demand for experienced Shopify experts has increased. With our team of ",
					{ text: "Shopify developers,", href: "#" },
					" you can unlock the real potential of this platform and avail many advantages.",
				],
				bodyAfter: "Whether you are looking for Shopify customization services, integration services, migration services, or theme development, our eCommerce developers are agile in delivering to any industry vertical. In fact, our dedicated Shopify team strives hard to provide powerful and dynamic eCommerce solutions.",
			},
			{
				icon: "/assets/icons/woocommerce.svg",
				title: "WooCommerce Development",
				body: [
					"Our team of ",
					{ text: "WooCommerce developers", href: "#" },
					" is well-known for utilizing a perfect blend of user persona profiles, prototyping & designing, and shopping cart research to plan a complete journey of users in order to structure and design what it needs to engage users. We make sure to deliver a rich user experience to convert your users into customers.",
				],
				bodyAfter: "Further, our WooCommerce team has hands-on experience in handling different WooCommerce requirements, including plugin customization, theme customization, payment gateway integration, and more.",
			},
		],
	},

	infoBoxSecondary: {
		eyebrow: "Benefits of Hiring eCommerce Developers from",
		title: "Icecube Digital",
		subtitle: [
			"An eCommerce platform is only as strong as the developers behind it. Experienced developers with expertise on different projects bring to the table knowledge to navigate the project in the right direction.",
			"When you hire an adept web developer, your eCommerce platform will not feel like it is programmed; rather, it will feel and look profoundly personalized for the visitors, which makes eCommerce shopping a breeze. We are motivated to create experiences that engage, inspire, and drive meaningful connections that boost your ROI.",
		],
		items: [
			{
				title: "Global Talent Access",
				body: "We connect your brand to the best eCommerce web designer that best suits your needs from across the world. Our pre-vetted talent pool has developers and designers with expertise in different eCommerce platforms, like Shopify and WooCommerce. As per your needs, we can help you choose the right developer as per your preference, whether onshore, offshore, or nearshore staff augmentation.",
			},
			{
				title: "Flexible Team Scaling",
				body: "With Icecube Digital on your side, you can rest assured about your team size when, whether the demand in the industry upscales or downscales. As per your needs, we can provide you with more capable resources to handle the increased workload. We do our best to provide you with nothing but the best eCommerce website designers for hiring to ensure that you meet all the deadlines timely.",
			},
			{
				title: "Boost Sales & Revenue",
				body: "When you gain access to skilled and experienced developers driven by the goal of maximizing your ROI, they will come up with out-of-the-box solutions. We build platforms that drive traffic and boost conversion rates, which automatically improves sales and increases revenue. Besides, we look for opportunities or trends that can be implemented to enhance the store's performance and, ultimately, your sales.",
			},
			{
				title: "Effortless Payroll & Compliance",
				body: "Managing payroll for a distributed and remote team is difficult; however, we can make it simpler for you. We provide a streamlined solution to brands to handle the payroll and meet international and national regulatory compliance for the remote eCommerce web development team.",
			},
			{
				title: "Enhanced Customer Experience",
				body: "Our eCommerce web designers focus on improving the user experience. We optimize the UI design and UX workflows, which helps in laying a solid and future-proof foundation for the eCommerce platform. From implementing UX principles to implementing the latest UI trends, our solutions are capable of overcoming user problems and helping you meet your goals.",
			},
			{
				title: "Curated Network of Experts",
				body: "We have curated a skilled and qualified network of experts from different domains, specializing in eCommerce development. From ideating strategic UI/UX design to implementing robust security measures, our experts will help in creating an effective eCommerce platform that drives success.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Hire Ecommerce Web Designers To Enhance",
		title: "Business Growth",
		subtitle: [
			"Do you want to develop an eCommerce website that doubles your sales, provides an exceptional experience to your customers, and requires no dedicated team to handle it?",
			"No wonder it's time to hire a team of dedicated eCommerce designers in the USA and sit back and relax. Our team will handle all your requirements and turn your dream project into a reality. Sounds great? Let's take a quick look at the benefits of hiring dedicated eCommerce web developers in the USA over freelancers.",
		],
		items: [
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "The most cost effective option",
				body: "Hiring a dedicated team will help you save thousands of dollars spent on different things, including office space, hiring costs, training & onboarding, and other legal expenses.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Boost Overall Productivity",
				body: "Increase overall productivity by focusing on the more crucial tasks rather than hiring and training developers. You can focus on the core things and give your eCommerce business the edge over the competition.",
			},
			{
				icon: "/assets/icons/user.svg",
				title: "Flexible Hiring Options",
				body: "The best thing about a dedicated team is that you don't have to hire an in-house expert to handle your eCommerce website. You can hire a dedicated team on an hourly, weekly, and monthly basis as per your project requirements.",
			},
			{
				icon: "/assets/icons/user-round.svg",
				title: "Access A Variety Of Skills & Expertise",
				body: "Hiring a team of dedicated eCommerce website developers will be a great option as each developer, designer, and strategist will have a new set of expertise and skills. Each member will be suited to a specific aspect of the task.",
			},
		],
	},

	infoBoxTertiary: {
		eyebrow: "Our Ecommerce",
		title: "Design Solutions",
		gridClass: "sm:grid-cols-2",
		items: [
			{
				title: "B2C (Business to Consumer) Solutions",
				body: "Our B2C design solutions focus on creating a user-friendly experience that keeps customers coming back. We craft intuitive, visually appealing websites that streamline the shopping process, making it easy for consumers to find, compare, and purchase products—all with expert ecommerce web design that boosts conversions.",
			},
			{
				title: "B2B (Business to Business) Solutions",
				body: "B2B websites need to cater to complex buying cycles and bulk orders. Our designs simplify these processes, offering tailored features like customized pricing, bulk order options, and seamless product catalogs. This ensures your business clients can make efficient purchasing decisions with minimal friction.",
			},
			{
				title: "D2C (Direct to Consumer) Solutions",
				body: "For D2C brands, owning the customer relationship is key. We create engaging, easy-to-navigate websites that allow you to showcase your products and connect directly with your audience. Our designs help you build brand loyalty while driving repeat purchases and maximizing customer lifetime value.",
			},
			{
				title: "Marketplace Development",
				body: "We build scalable, feature-rich marketplaces that connect buyers and sellers efficiently. From user-friendly search functions to secure payment gateways, our solutions focus on creating a seamless, reliable platform for all users. Whether you're building a niche marketplace or a large-scale operation, we ensure it's built to grow with you.",
			},
		],
	},

	cta: {
		text: "Let’s Start A Successful Ecommerce Website Project Today",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Hire Ecommerce",
		title: "Developers FAQs",
		items: [
			{
				question: "How does your design process work?",
				answer:
					"Based on your initial ideas and references, our expert eCommerce website designers' team can develop wireframes and mock-ups for page designs. With your feedback on the initial mock-ups, we work on the revisions. We offer unlimited revisions and we won't be happy unless you are satisfied with the design.",
			},
			{
				question: "Do you use pre-made templates?",
				answer:
					"No, we build designs from scratch to the exact business needs of our valued customers. A lot of companies use pre-made templates or themes to cut costs.",
			},
			{
				question: "Do you offer warranty on websites you build?",
				answer:
					"Yes, we provide a free one month of bug fixing support. Later, you can opt for our monthly or yearly eCommerce website maintenance package to keep your website up to date.",
			},
			{
				question: "I already have a website, can you update it?",
				answer:
					"If you have a website that is out of date and not generating sales, we can help to redesign it as per current design trends. The price and timeline for such a project can be decided after a thorough review of your existing website.",
			},
			{
				question: "What essential features do you offer for eCommerce websites?",
				answerList: [
					"Responsive UI/UX design",
					"Easy and intuitive navigation",
					"Advanced search functionality",
					"Use high-quality images",
					"Customer reviews/social proofs",
					"Automation features",
					"Third-party system integration",
					"Simple Checkout process",
					"Multiple payment gateway integrations",
					"Shipping system integration",
					"Effective back end panel",
					"Proper CTAs",
				],
			},
			{
				question: "How much does an eCommerce website cost?",
				answer:
					"The cost of building a website really depends on the time it takes to design and development of the website. It takes longer to build a webshop with custom features than a simple order processing website. We offer industry-specific solutions to keep the cost as minimum as possible.",
			},
			{
				question: "Will my website work well on smartphones and tablets?",
				answer:
					"Every website we build is mobile responsive. The majority of people are accessing the web using small screen devices these days so it's important that your website provides the best user experience on mobile phones and tablets. Our design team uses a mobile-first strategy while designing eCommerce websites.",
			},
			{
				question: "What if I find any issues after the website is live?",
				answer:
					"We have a solid testing process in place for all our website design and development projects so there is no chance of errors but in case of any issues, we offer 1 month of free bug fixing support so you are all covered.",
			},
			{
				question: "Who will be my point of contact during project tenure?",
				answer:
					"Our eCommerce development project manager will be in constant communication with you via your preferred communication channel. We use email, phone, Skype, and other project management tools such as Trello, Slack, etc to keep our valued customers updated about the project progress.",
			},
			{
				question: "What payment types do you accept?",
				answer: "We accept payment via PayPal and bank transfer along with all major credit cards.",
			},
			{
				question: "Do you offer a payment schedule?",
				answer: "Yes, based on the type and size of the project we split the payment into parts.",
			},
			{
				question: "Why should I hire eCommerce designers & developers from Icecube Digital?",
				answer:
					"Don't worry – you are in safe hands. We are a certified eCommerce Design & development agency with 10+ years of experience in building ground breaking eCommerce websites and portals. Customer satisfaction is the end goal of everything that we do. Don't take our words for it, please review our customer testimonials on Google and GoodFirms.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default HireEcommerceDevelopers;
