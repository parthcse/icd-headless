const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const HireShopifyDesigners = {
	slug: "hire-shopify-website-designers",
	pageTitle: "Hire Shopify Web Designers | Icecube Digital",
	metaDescription: "Hire expert Shopify web designers from Icecube Digital — custom theme design, pre-built theme customization, UX/UI, responsive and conversion-focused design, branding, and SEO-friendly stores, with transparent pricing and rapid delivery.",

	banner: {
		heading: "Hire Shopify Web Designers",
		paragraphs: [
			"Hiring a Shopify designer brings a custom approach to your store. They move beyond standard templates to create something that truly reflects your brand. A designer focuses on delivering a smooth shopping experience. This means optimizing every detail to drive engagement and boost conversions. With a thorough understanding of Shopify's features, they ensure that your store functions flawlessly on all devices. Designing for mobile devices is now required; it is no longer optional. Instead of struggling with setup or settling for an average store, a professional designer brings your vision to life. Your store gets the polish it needs for long-term success.",
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
		eyebrow: "Transform Your Business with Expert",
		title: "Shopify Designers",
		contentAlign: "center",
		paragraphs: [
			"A robust Shopify design takes your store to the next level, turning it into a smooth, engaging experience for customers. It's not just about making your site look good—every part of your store, from the homepage to checkout, should be easy to use and inviting. A professional designer focuses on what works for your customers, removing any obstacles in their shopping journey.",
			"At Icecube Digital, our Shopify designers craft more than just a visually appealing store. We build seamless, user-friendly experiences that keep customers engaged and drive sales. Whether you're starting fresh or looking to revamp your existing store, we tailor every detail to fit your brand and business goals.",
			"With fast load times and a mobile-friendly layout, your store becomes a space where shoppers feel comfortable and confident. Investing in a talented Shopify designer ensures your store runs smoothly, giving you the edge in a competitive market and driving real growth.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	imageText: {
		eyebrow: "Hire Shopify Designer with Transparent Pricing &",
		title: "Rapid Delivery",
		image: "/assets/photos/shopify-designer-rapid-delivery.jpg",
		imageAlt: "Hire Shopify designers with transparent pricing and rapid delivery",
		paragraphs: [
			"When you hire a Shopify designer from Icecube Digital, you get a clear pricing structure with no hidden fees. We keep everything straightforward, so you know exactly what you're paying for. Along with fair pricing, we ensure your project is delivered on time, helping you launch quickly and efficiently.",
			"Ready to get started? Request a free quotation or contact us through our Contact Us page to discuss your project and see how we can help your Shopify store thrive.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	leftIconBox: {
		eyebrow: "Why Choose Shopify for Your",
		title: "eCommerce Platform?",
		subtitle: "Shopify is a user-friendly, versatile platform designed to help businesses grow quickly. With its robust features, it simplifies store management, enhances customer experience, and supports marketing efforts.",
		items: [
			{
				icon: "/assets/icons/like.svg",
				title: "Fuss-Free Solution",
				body: "Shopify offers an intuitive interface that requires no technical expertise, making it easy to set up and manage an online store. From inventory management to processing orders, Shopify simplifies day-to-day tasks, so you can focus on growing your business without worrying about the backend complexities of running an e-commerce site.",
			},
			{
				icon: "/assets/icons/predictive.svg",
				title: "Analytics & Customization",
				body: "Shopify provides detailed analytics tools to track your store's performance, helping you make data-driven decisions. Plus, it allows for extensive customization, giving you control over design, functionality, and customer experience. With built-in reporting and custom solutions, you can optimize your store for better conversions and engagement.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Pre-Built Theme Library",
				body: "Shopify offers a variety of pre-built themes that cater to different business needs and aesthetics. These professionally designed themes are fully customizable, enabling you to create a unique look for your store without needing to start from scratch. You can easily switch between themes or tweak elements as your brand evolves.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Security & Reliability",
				body: "Shopify is a highly secure and reliable platform, ensuring that your store and customer data are well-protected. With regular updates, encryption, and secure payment gateways, you can run your business with peace of mind. Shopify's 24/7 monitoring and uptime ensure your store is always accessible and functioning smoothly.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "High Responsiveness",
				body: "Shopify's themes are designed to be mobile-friendly and responsive across all devices. This ensures your store provides a seamless shopping experience, whether customers are browsing on a desktop, tablet, or smartphone. With more consumers shopping on mobile, a responsive design is key to capturing sales and improving user experience.",
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Powerful Digital Marketing Tools",
				body: "Shopify equips you with a range of built-in marketing tools, including SEO features, social media integration, and email marketing options. These tools help you reach your target audience, drive traffic, and convert visitors into loyal customers. The platform also supports third-party app integrations to further enhance your marketing efforts.",
			},
		],
	},

	topIconBox: {
		eyebrow: "Our Shopify",
		title: "Design Solutions",
		subtitles: [
			[
				"As a ",
				{ text: "Shopify development company", href: "/shopify-development-services/" },
				", we offer a range of design solutions tailored to meet your eCommerce needs. From custom themes to responsive designs, we ensure your store is optimized for performance, conversions, and a seamless user experience.",
			],
		],
		items: [
			{
				icon: "/assets/icons/brush.svg",
				title: "Custom Shopify Theme Design",
				body: "Our custom Shopify theme design service creates a store that is tailored specifically to your brand. With a design that reflects your unique style, we help you stand out from competitors and provide an engaging experience for your customers. Every detail is optimized to enhance user experience and drive sales, making sure your store is both visually stunning and functional across all devices.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Pre-Built Theme Customization",
				body: "If you prefer to build on an existing theme, we offer expert customization services. A pre-built Shopify theme can be tailored to fit your brand's look and feel. Our team makes adjustments to colors, fonts, layout, and more to ensure the theme represents your business perfectly. This allows you to take advantage of a ready-made design while still adding your personal touch.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "UX & User Interface (UI) Design",
				body: "Great design is more than just aesthetics—it's about how users interact with your store. We focus on intuitive UX and UI design, creating an experience that's easy to navigate and enjoyable for your customers. By optimizing the shopping journey, we help you increase engagement and guide users smoothly from browsing to checkout.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Responsive Shopify Design",
				body: "With more customers shopping on mobile, having a responsive design is essential. Our Shopify designers ensure that your store works flawlessly across all devices, providing a seamless experience for desktop, tablet, and mobile users. This improves user satisfaction and helps to capture sales from all traffic sources, regardless of the device used.",
			},
			{
				icon: "/assets/icons/vector-path.svg",
				title: "Branding and Visual Identity",
				body: "Your Shopify store should tell your brand's story through cohesive design elements. We help you establish a strong visual identity with consistent logos, color schemes, and typography. This not only enhances the look of your store but also builds brand recognition and trust among your customers.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Conversion-Focused Design",
				body: "Every design decision we make is aimed at driving conversions. By creating a streamlined layout and optimizing calls to action, product pages, and checkout flows, we reduce friction in the customer journey. This approach turns visitors into buyers, helping to grow your revenue through thoughtful, conversion-focused design.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Shopify Design For SEO",
				body: "Good design supports SEO efforts. We structure your Shopify store with clean code, optimized images, and an easy-to-navigate layout, helping search engines index your pages effectively. By improving your store's visibility on search engines, we help attract organic traffic, boosting both reach and conversions.",
			},
			{
				icon: "/assets/icons/app-square.svg",
				title: "Integration of Shopify Design Apps & Features",
				body: "Maximize your store's functionality by integrating Shopify apps and custom features. Whether you need social sharing tools, product reviews, or marketing integrations, our designers ensure that these elements are seamlessly incorporated into your store without compromising on design or performance.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Ongoing Design Support & Maintenance",
				body: "We offer ongoing design support to keep your Shopify store fresh and functional. From minor updates to larger redesigns, our team ensures that your store stays aligned with the latest trends and performs smoothly. Regular maintenance helps you avoid issues and ensures your store is always ready to serve your customers.",
			},
		],
	},

	infoBox: {
		eyebrow: "Key Features of a High-Quality",
		title: "Shopify Store Design",
		subtitle: "A nicely designed Shopify interface ensures that your website is visually appealing, user-friendly, and optimized for performance. These key features contribute to a seamless shopping experience that keeps customers engaged and drives sales.",
		items: [
			{
				title: "Clear and Professional Design",
				body: [
					"A clean, professional design gives your Shopify store credibility and ensures customers trust your brand. A high-quality ",
					{ text: "Shopify store design", href: "/shopify-website-design/" },
					" uses intuitive layouts, clear fonts, and consistent color schemes that align with your branding. This enhances user experience, making navigation easy and encouraging users to explore your store further.",
				],
			},
			{
				title: "Effective Call-to-Action",
				body: "Calls-to-action (CTAs) guide visitors toward key actions, such as purchasing a product or signing up for a newsletter. A well-designed CTA is placed strategically throughout your Shopify store, using compelling language and eye-catching buttons. This encourages customers to take action, improving conversions and driving sales.",
			},
			{
				title: "Mobile Responsiveness",
				body: "With most shoppers using mobile devices, having a mobile-responsive design is essential. A quality Shopify store design ensures your site looks and functions smoothly across all screen sizes, providing a seamless experience on smartphones, tablets, and desktops, which increases user engagement and customer retention.",
			},
			{
				title: "Secure and Fast Loading",
				body: "A fast-loading, secure website is essential to keep visitors on your site. Slow load times drive users away, and an unsecured site raises concerns. By ensuring fast performance and security measures, you build trust and prevent missed opportunities.",
			},
			{
				title: "Integrated Contact Forms",
				body: "Contact forms make it easy for customers to reach out with inquiries, feedback, or support requests. A well-designed Shopify store includes integrated contact forms that are simple and accessible, allowing you to maintain strong communication with your customers and address their needs quickly.",
			},
			{
				title: "SEO-Friendly Structure",
				body: "A Shopify store designed with SEO in mind improves your website's visibility on search engines. This includes proper URL structures, meta tags, alt text for images, and fast page speeds. A high-quality Shopify store design ensures your site is easily discoverable by search engines, helping you attract more organic traffic.",
			},
		],
	},

	processSteps: {
		eyebrow: "Our Shopify",
		title: "Web Design Process",
		subtitle: "We follow a structured, client-focused approach to create custom Shopify stores. Our best Shopify website designers ensure a seamless experience from consultation to launch, making sure your store meets both aesthetic and functional goals.",
		columns: 2,
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
		steps: [
			{
				title: "Initial Consultation",
				body: "We start with a detailed discussion to understand your brand, goals, and target audience. This helps our best Shopify website designers align the project with your vision and set clear objectives for your online store.",
			},
			{
				title: "Planning Technology and Resources",
				body: "Next, we plan the necessary technology stack and allocate resources efficiently. This ensures that your Shopify store is built with the right tools, optimizing performance, scalability, and design for long-term success.",
			},
			{
				title: "Design and Development",
				body: "Our best Shopify website designers craft visually appealing, user-friendly designs while our developers ensure flawless functionality. This step involves customizing the store to reflect your brand identity, ensuring both aesthetics and performance.",
			},
			{
				title: "Content Integration",
				body: "We seamlessly integrate your content, including product descriptions, images, and other essential elements. This step is crucial to ensure your Shopify store looks cohesive and provides a smooth shopping experience for customers.",
			},
			{
				title: "Testing and Launch",
				body: "Before launch, we thoroughly test the store to ensure it functions perfectly across all devices. Once everything is optimized for performance and user experience, we launch your Shopify store with confidence.",
			},
			{
				title: "Ongoing Maintenance",
				body: "Our commitment doesn't end after the launch. We provide ongoing maintenance to keep your Shopify store updated, secure, and performing at its best, ensuring your store remains competitive in the market.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Partner With The Best Shopify Website Designers",
		title: "For Your Store at Icecube Digital",
		subtitle: "Icecube Digital offers a combination of expertise, speed, and personalized care. We focus on building beautiful, high-performing Shopify stores that drive results for your business.",
		items: [
			{
				icon: "/assets/icons/award-badge.svg",
				title: "Certified Shopify Experts",
				body: "Our team is composed of certified Shopify experts who are well-versed in every aspect of the platform. With their deep knowledge, you can trust that your store will be built to industry standards, ensuring smooth performance and compatibility with all Shopify features.",
			},
			{
				icon: "/assets/icons/predictive.svg",
				title: "Data-Driven Design",
				body: "We use data to inform our design decisions, ensuring every element of your store is optimized for conversions. Our best Shopify website designers analyze user behavior, market trends, and performance metrics to create a design that is both visually appealing and effective.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "User-Centric Approach",
				body: "Our design philosophy is centered around your customers. We focus on creating a seamless user experience that enhances navigation and improves shopping satisfaction. By prioritizing user needs, we help you create a store that encourages engagement and boosts sales.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Speedy Turnaround",
				body: "We understand the importance of launching quickly. Our best Shopify website designers are skilled at working efficiently without compromising on quality, ensuring that your store is ready for business in a timely manner while meeting all design and functionality expectations.",
			},
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Transparent Pricing",
				body: "At Icecube Digital, we believe in full transparency. We provide clear, upfront pricing with no hidden fees. This way, you know exactly what to expect, ensuring that your investment is well-planned and delivering value at every stage of the project.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Ongoing Support",
				body: "Our service doesn't end at launch. We offer ongoing support to keep your store updated and running smoothly. Whether it's small updates or major adjustments, our team is always available to assist, ensuring your store's continued success.",
			},
		],
	},

	infoBoxSecondary: {
		eyebrow: "Solving Critical Issues For",
		title: "Shopify Webmasters",
		subtitle: "Our team of Shopify website designers and expert web developers can help resolve the challenges webmasters face. From poor search rankings to ineffective lead generation, our expertise can turn things around and get your Shopify store thriving.",
		gridClass: "sm:grid-cols-2",
		items: [
			{
				title: "Our Website Ranks Poorly in Search Results",
				body: "Poor search engine ranking is a common issue that affects online visibility. Our Shopify expert web designers can enhance your store's SEO by improving site structure, optimizing keywords, and addressing technical issues. With a strategic approach, we help increase your site's search rankings, driving more organic traffic and potential customers.",
			},
			{
				title: "We Struggle to Grow Our Team Effectively",
				body: "As your business scales, managing a larger team becomes challenging. Hiring a Shopify website designer ensures that your site is set up for scalability, with the right tools and workflows in place to accommodate growth. We assist with custom solutions that make onboarding and collaboration easier, enabling smoother team expansion.",
			},
			{
				title: "Our Lead Generation Efforts Are Yielding Insufficient Results",
				body: "If lead generation isn't bringing in enough qualified prospects, it's time to rethink your strategy. Our team optimizes your Shopify store's design to include conversion-focused elements like strategic CTAs, forms, and integrations with CRM tools. This increases the chances of turning visitors into leads and boosting sales efforts.",
			},
			{
				title: "We Are Struggling to Attract New Potential Clients",
				body: "Attracting new clients requires a fresh approach to design and marketing. By hiring a Shopify website designer, you get a store that appeals to your target audience. We focus on enhancing user experience, refining marketing strategies, and using targeted SEO tactics to bring in more potential clients and grow your business.",
			},
		],
	},

	cta: {
		text: "Are You Looking To Hire Shopify Designers?",
		ctaLabel: "Book a Free Consultation Now",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Hire Shopify Website",
		title: "Designers FAQs",
		items: [
			{
				question: "Why should I hire a Shopify website designer?",
				answer: "Hiring a Shopify website designer ensures your online store is tailored to your brand’s specific needs. A professional designer enhances user experience, optimizes functionality, and customizes your site for better performance, ultimately driving conversions and sales growth.",
			},
			{
				question: "What is the difference between a Shopify expert web designer and a general web designer?",
				answer: "A Shopify expert web designer specializes in building and optimizing stores on the Shopify platform, using its tools and features effectively. A general web designer may not have the in-depth knowledge of Shopify’s unique functionality or its SEO, app integration, and performance optimization capabilities.",
			},
			{
				question: "What ongoing support do you provide after the store launch?",
				answer: "We offer comprehensive ongoing support and maintenance services. This includes updates, troubleshooting, and implementing new features to ensure your store stays up-to-date and runs smoothly over time.",
			},
			{
				question: "Can you customize a pre-built Shopify theme?",
				answer: "Yes, we specialize in both custom Shopify themes and pre-built theme customization. We tailor pre-built themes to fit your brand’s aesthetics, ensuring your store stands out while maintaining functionality.",
			},
			{
				question: "How do you ensure my Shopify store is secure and fast?",
				answer: "We implement best practices for security and performance optimization, including secure payment gateways, SSL certificates, and speed enhancements to ensure your store is both safe for customers and quick to load, improving user satisfaction and sales.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default HireShopifyDesigners;
