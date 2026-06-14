const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

// Common sections shared across all service pages — edit these files to update every page at once.
import facilitySection from "./common/facility-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const EcommerceWebsiteDesignServices = {
	slug: "ecommerce-website-design-services",
	pageTitle: "Ecommerce Website Design Services | Icecube Digital",
	metaDescription: "Aesthetically pleasing, user-friendly Ecommerce website design services from Icecube Digital — built to drive engagement, conversions, and revenue.",

	banner: {
		heading: "Ecommerce Website Design Service",
		paragraphs: [
			"A compelling Ecommerce design is pivotal for any business seeking to establish a robust online presence in today's digital era. At Icecube Digital, we acknowledge the importance of a well-crafted Ecommerce design that is aesthetically pleasing and user-friendly.",
			"So, how about entrusting our Ecommerce web design agency to create a tailored Ecommerce solution that precisely matches your business objectives?",
		],
		checklistItems: [],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Free eCommerce Store Audit",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/facility-section.js
	facility: facilitySection,

	clientSuccess: {
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
		sectionClass: "services-our-portfolio",
		headingWrapClass: "max-w-5xl mx-auto",
	},

	// common section: components/home/GetQuoteSection.js ("Let's Work Together / Get a Free Quote")
	getQuote: true,

	textBox: {
		eyebrow: "Your Digital Journey to Smart, Scalable, and",
		title: "Secure eCommerce Starts Here",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "You need a forward-thinking web design company to assist you with designing, developing, and deploying an advanced eCommerce platform that understands and adapts according to your user preferences. At Icecube Digital, we use UI and UX design principles and human psychology to create interfaces that are visually appealing, intuitive, and optimized for frictionless navigation. Bring your business online with our expert eCommerce website design services and take your business to new heights." },
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/achievements-section.js
	achievements: achievementsSection,

	clientSay: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialId: 24,
	},

	clientTrust: {
		eyebrow: "A Scientific Approach To",
		title: "Achieving Your Goals",
		subtitle:
			"Welcome to our Ecommerce website design company, where we offer a targeted scientific approach to achieving your goals! At Icecube Digital, we understand that a website redesign should be visually appealing and boost your conversions. We help you achieve this through data-driven design. Therefore, our approach includes the following key elements:",
		subtitleClass: "max-w-4xl",
		items: [
			{
				icon: "/images/grid.svg",
				name: "Digital Lab Set-Up",
				body: "We set up a digital lab to collect and analyze data about your target audience and their behavior. This enables us to make informed decisions about your website design focused on achieving your conversion-specific goals.",
			},
			{
				icon: "/images/Predictive.svg",
				name: "Analytics Audit",
				body: "We conduct a thorough analytics audit to identify potential issues hindering your website's performance. We can help you improve your website's performance and increase conversions by addressing these issues.",
			},
			{
				icon: "/images/website.svg",
				name: "Website Audit",
				body: "We perform a comprehensive website audit to identify areas that need improvement. By optimizing your website for user experience, we can help you increase engagement and conversions.",
			},
			{
				icon: "/images/income.svg",
				name: "ROI Prioritized Hypothesis Framework",
				body: "Based on our research and analysis, we develop a hypothesis framework that prioritizes the most important goals of your business and guarantees a return on investment.",
			},
			{
				icon: "/images/setting.svg",
				name: "Test Cycles",
				body: "We use a series of test cycles to validate our hypothesis framework and make informed creative decisions based on user feedback and A/B testing.",
			},
			{
				icon: "/images/result.svg",
				name: "Actionable Results",
				body: "Finally, we provide actionable results that allow you to make data-driven decisions about your website and achieve your conversion goals.",
			},
		],
	},

	qualityWebsites: {
		eyebrow: "Proven Strategies To Increase Ecommerce",
		title: "User Engagement",
		subtitle:
			"It's quite evident that the success of an Ecommerce web design agency depends on how well you engage with your users. Providing valuable content, intuitive navigation, and visually appealing CTAs are some strategies that can help you increase user engagement. Furthermore, it is also important to cover all platforms and use high-quality imagery to grab the users' attention. Let's dive into some strategies our ecommerce website designers use:",
		subtitleClass: "max-w-4xl",
		items: [
			{
				icon: "/images/Generation.svg",
				name: "Provide Valuable Content",
				body: "Creating and sharing high-quality content through online channels can help form a dedicated community to share your content and help with your marketing efforts. Valuable and relevant content can also promote brand awareness and establish you as a thought leader in your industry.",
			},
			{
				icon: "/images/sound.svg",
				name: "Create Intuitive Navigation",
				body: "While great content is vital to digital marketing, users won't be able to enjoy it if they can't find their way around your website. That's why we emphasize utilizing simple and intuitive navigation to ensure users can easily find what they need and engage with your site.",
			},
			{
				icon: "/images/grid.svg",
				name: "Cover All Platforms",
				body: "To maximize user engagement, it's important to ensure your website is optimized for all available platforms. Users often switch between devices during the purchasing process. As a result, it's important to make your content responsive and user-friendly across all platforms.",
			},
			{
				icon: "/images/www.svg",
				name: "Optimize CTAs",
				body: "CTAs are visual cues that prompt users to take action on your website, such as making a purchase or contacting you. You can use visually appealing CTAs that are easy to find and will encourage users to take action.",
			},
			{
				icon: "/images/images-place.svg",
				name: "Use High-Quality Imagery",
				body: "As visual beings seeking good quality content, using high-quality imagery can significantly improve user engagement on your website. We use as many relevant images to showcase your products and services as possible. Alternatively, photographs of people can also provide a realistic and engaging experience.",
			},
		],
	},

	offers: {
		eyebrow: "Budget-Friendly Design",
		title: "Solutions For Everyone",
		subtitle:
			"Are you looking for affordable yet high-quality website design solutions? Icecube Digital has covered you with our budget-friendly design packages that cater to everyone, regardless of their budget. Here are some of the ecommerce website design services we offer:",
		subtitleClass: "max-w-3xl",
		items: [
			{
				icon: "/images/pc.svg",
				title: "Website Analysis",
				body: "Our team of experts conducts a comprehensive analysis of your website to identify areas that need improvement and provide actionable recommendations to enhance your website's user experience and overall performance.",
			},
			{
				icon: "/images/logo-design.svg",
				title: "Logo Design",
				body: "Your logo truly is the 'face' of your brand, and we create unique and visually appealing logos that capture your brand's essence and help you stand out in a saturated market.",
			},
			{
				icon: "/images/minicsrt.svg",
				title: "Ecommerce Website Design",
				body: "We understand the importance of having an aesthetically pleasing and user-friendly Ecommerce website that drives conversions. Our team designs Ecommerce websites that are both functional and visually appealing, tailored to your specific business needs.",
			},
			{
				icon: "/images/services-offers-2.svg",
				title: "Responsive Web Design",
				body: "With multiple platforms and devices to access the internet, having a responsive website optimized for different screen sizes is crucial. Our team ensures your website is optimized for all devices, delivering a seamless user experience across all platforms.",
			},
		],
	},

	textBoxSecondary: {
		eyebrow: "Customer-Focused",
		title: "Website Redesign",
		contentAlign: "center",
		blocks: [
			{ type: "p", text: "With our Ecommerce website design services, we acknowledge the significance of users to promote better engagement. That's why we adopt a customer-focused approach to website redesigns, ensuring that your online store is optimized to meet the needs of your target audience." },
			{ type: "p", parts: [
				"Our ",
				{ text: "Ecommerce website designers", href: "#" },
				" expert will work with you to create a website that looks visually stunning, easy to navigate, fast, and intuitive. By understanding your customers' needs and behavior, we'll create a website that enhances their shopping experience and drives more sales for your business.",
			]},
			{ type: "p", text: "Trust us to deliver a customer-focused Ecommerce website redesign that will set you apart from the competition and take your business to the next level." },
		],
		ctaLabel: "Request A Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	partner: {
		eyebrow: "AI-Powered eCommerce Website Design -",
		title: "The Future of Online Shopping",
		subtitle: [
			"User-centric AI development is powering the global eCommerce market, with the market size expected to rise to $14.07 billion by 2028. Around 83% of companies are convinced that using AI in their eCommerce website design as a strategic point helps them to achieve a competitive edge in the market.",
			"At Icecube Digital, the leading eCommerce website design company, our understanding of design is independent of mere eCommerce website templates. We conduct market research, user research, and website audits to identify the areas that could be improved with AI features. Our design team comes up with UI and UX designs that integrate AI seamlessly, ensuring functionality without friction.",
			"Here are some AI-powered features that are shaping the future of online shopping:",
		],
		headingWrapClass: "mx-auto max-w-5xl",
		variant: "shaded",
		items: [
			{
				title: "AI-Driven Personalization",
				body: "AI and ML algorithms help digital businesses to tailor the experience to their user preferences. We integrate algorithms in the eCommerce platforms that uncover valuable insights about individuals' preferences, behaviors, and purchasing patterns. With these insights, eCommerce platforms can provide personalized recommendations, curated product selections, and targeted advertisements on a much more personal level that connects with the user, just like Amazon.",
			},
			{
				title: "AI-Based Visual Search & Voice Commerce",
				body: "Visual and voice search will give you an entirely new opportunity to connect with your customers and further define your brand, making your purchase journey as simple as possible. Our eCommerce designer team will implement a schema that will make your website voice search-friendly. The search by image feature will allow users to find a similar product by uploading a photo, making your website more navigable.",
			},
			{
				title: "AI-Based Dynamic Pricing Strategies",
				body: "AI-based dynamic pricing strategies give businesses better control over the pricing of their products/services. Hire eCommerce designers from Icecube Digital to optimize your pricing strategies and provide responses based on analyzing large datasets, real-time demands, competitor pricing, and customer behaviour. All the analysis will happen in the background, and with detailed insights, the prices can be altered based on the existing market and supply.",
			},
			{
				title: "AI-Powered UX/UI Optimization",
				body: "Before any product development, user research is inevitable, but it's a time-consuming and rigorous process. However, thanks to our team's AI expertise, user research will be much easier than before. AI in UX/UI optimization is transforming the way we approach creativity and efficiency, making the process more intuitive. We leverage AI to automate repetitive tasks, brainstorm design ideas, use user analytics to get data-driven insights, and create multiple prototypes within a few hours.",
			},
			{
				title: "Smart Inventory & Demand Forecasting",
				body: "Effective inventory is a plus point for your business when you are digitally dealing in online selling. As the leading eCommerce website development company, we help you with smart inventory and demand forecasting management by integrating AI features into them. With AI-powered forecasting tools, you can easily analyze sales data and predict demand to optimize your inventory level, thereby preventing understocking or overstocking.",
			},
			{
				title: "AI-Driven Content & SEO",
				body: "Our eCommerce SEO consultant can help you understand how AI algorithms can be used to improve the ROI of content marketing and SEO. With AI tools, we help you generate content strategy as per researched keywords and topics, helping you to maintain a steady stream of blog posts, social media pages, and more. We strictly adhere to white-hat SEO practices and use AI to boost the productivity of the SEO initiative, and we do not rely on it for end-to-end search engine optimization.",
			},
			{
				title: "Smart Chatbots & Virtual Assistants",
				body: "Unlike human agents, conversational AI chatbots can provide real-time customer support, answer frequently asked questions, and guide users through your website around the clock. In case of some complex queries, the chatbots can directly route the user toward customer support executives, ensuring that all the queries are promptly answered.",
			},
			{
				title: "Fraud Detection & Secure Transactions",
				body: "AI fraud detection uses machine learning algorithms to detect anomalies in your customer behavior and connections. At Icecube Digital, our team provides you with an AI-powered platform that helps in analyzing the transactions in real-time. It will inform your team about the possibilities of fraud before it occurs while reducing false positives that might be inconvenient to legitimate customers.",
			},
		],
	},

	offersSecondary: {
		eyebrow: "Why Choose Icecube Digital For Ecommerce",
		title: "Website Design Services?",
		subtitle:
			"At Icecube Digital, we believe that Ecommerce design involves more than just aesthetics – it's about creating an online experience that drives sales and revenue for your business. Here are some major reasons that set our Ecommerce website design services apart.",
		subtitleClass: "max-w-3xl",
		gridClass: "sm:grid-cols-2 lg:grid-cols-3",
		items: [
			{
				icon: "/images/cup.svg",
				title: "Showcase Your Success With An Award-Winning Design",
				body: "We don't just design websites. We create digital experiences that leave a lasting impression. Our award-winning design will help showcase your brand's success to create a targeted audience for your business.",
			},
			{
				icon: "/images/time.svg",
				title: "Eliminate Hurdles with Our 14+ Years of Experience",
				body: "With our decade of experience in Ecommerce website design, we understand what it takes to create successful websites. Our expertise will help eliminate hurdles and ensure a seamless experience for you and your customers.",
			},
			{
				icon: "/images/rocket.svg",
				title: "Launch Your Project Per Schedule",
				body: "We strictly emphasize timely delivery and take great pride in delivering our projects on schedule. You can trust us to launch your Ecommerce website on time, without any delays.",
			},
			{
				icon: "/images/like.svg",
				title: "Get Peace of Mind with Our 93% Client Satisfaction Rate",
				body: "We strive for client satisfaction and take pride in our 93% client satisfaction rate. Our team works consistently and dedicatedly to ensure your Ecommerce website design project exceeds your expectations.",
			},
			{
				icon: "/images/squre.svg",
				title: "Surpass Your Competitors With a Customized Design",
				body: "Our tailored design approach ensures that your Ecommerce website stands out. We understand and learn about your business' vision and create a unique design that aligns with your goals and resonates with your audience.",
			},
			{
				icon: "/images/income.svg",
				title: "Accelerate Your Website's ROI",
				body: "At Icecube Digital, we don't just focus on designing beautiful websites. We also prioritize the user experience, resulting in higher conversions and a faster return on investment for your business.",
			},
		],
	},

	cta: {
		text: "Transform Your Online Store With Expert eCommerce Web Design – Get Started Today!",
		ctaLabel: "Contact Us Today for a Free Consultation!",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	information: {
		eyebrow: "eCommerce Website Design",
		title: "Guide Information",
		cards: [
			{
				title: "Introduction to eCommerce Website Design",
				paragraphs: [
					"As the hype for online shopping is gaining more popularity, you don't want to miss a chance to sell your products online. This raises the need to build an eCommerce website that helps you connect with more target audiences and gain more profits, but only if you have the right eCommerce website design.",
					"Web design includes designing product pages, shopping carts, and checkout processes to create a frictionless user experience. From curating the identity of your brand to tailoring the menu and website appearance, an apt design ensures that your website is easy to navigate and accessible to users.",
					"Whether you are a startup, an evolving business, or an established brand, Icecube Digital, the best eCommerce web design company, helps you grow in the digital space. We push the limits of custom eCommerce web design with endless features and complex functionality while bringing new ideas to life.",
				],
			},
			{
				title: "Different Types of eCommerce Websites",
				listItems: [
					{
						title: "B2C eCommerce - Direct Sales to Customers",
						parts: [
							"Relying on a thorough analysis of your business context, we create B2C web stores with attractive UI, reasonable personalization, and high conversion potential. Our web design solutions have pushed many B2C businesses across the globe, like Baby Kingdom and Visor, helping them attain a prominent position online.",
						],
					},
					{
						title: "B2B eCommerce - Wholesale & Enterprise Deals",
						parts: [
							"We create B2B portals for all trading agencies, including suppliers, wholesalers, manufacturers, and their subsidiaries. Our team of designers is equipped with the right resources to craft an effective shopfront for your B2B customers that will take your business to new heights. Our portfolio includes a list of B2B clients, like Food Packaging Direct and LC Supplies, to improve organic clicks and boost website visibility.",
						],
					},
					{
						title: "C2C eCommerce - Peer-to-Peer Selling",
						parts: [
							"If you are planning to expand your C2C eCommerce marketplace, at Icecube Digital, we help you develop the platform with the features you are looking for, adapting to your business and its unique needs. Whether it's to create an auction site that surpasses eBay or help direct sellers find their buyers, you will get the best return on your investment with our expertise at our disposal.",
						],
					},
					{
						title: "C2B eCommerce - Individuals Selling to Businesses",
						parts: [
							"C2B refers to the business system in which your customers use an online agent to find a product or service that meets their needs. We help you build a best-looking site where you can drive your customers to purchase your goods and services directly or entirely through an intermediary portal or medium that connects and can be used by both your brand and your customers.",
						],
					},
					{
						title: "D2C eCommerce - Brands Selling Directly",
						parts: [
							"A D2C eCommerce website is designed to sell products directly to customers, bypassing intermediaries. It focuses on building strong customer relationships, delivering a personalized shopping experience, and maintaining control over your branding and customer data. At Icecube Digital, we specialize in crafting D2C eCommerce websites that align with your brand's vision and business goals, from design to secure payment processing.",
						],
					},
					{
						title: "Dropshipping - Sell Without Inventory",
						parts: [
							"If you want an online store without the stress of managing inventory, dropshipping will be an attractive business model. With drop shipping, you can save money, time, and resources that would otherwise be spent on inventory management. Our experts help you create dropshipping eCommerce designs that are visually stunning and user-friendly. Our ultimate goal is to build online stores that drive better conversions.",
						],
					},
					{
						title: "Marketplace eCommerce - Connecting Buyers & Sellers",
						parts: [
							"Marketplace eCommerce websites connect vendors and buyers under one platform. We help you to process customer transactions and list your products for sale to generate profit. You can take advantage of our marketing and promotional strategies to get more customers and improve your conversion rates.",
						],
					},
				],
			},
			{
				title: "Selecting the Best Platform for Your eCommerce Site",
				paragraphs: [
					"When selecting the ideal eCommerce platform for your business, consider your current needs and your future growth trajectory. At Icecube Digital, our eCommerce SEO consultants will help you choose an eCommerce platform that supports high-volume traffic, integrates seamlessly with other tools (like marketing automation, CRM, and ERP systems), and offers flexibility in design and functionality. We offer eCommerce design services for popular platforms such as Shopify, WooCommerce, and Magento.",
					"Shopify is a hosted platform with excellent scalability, making it ideal for businesses expecting rapid growth. It offers a variety of themes and third-party apps that can enhance your site's functionality but might limit full customization. WooCommerce, a WordPress plugin, provides complete control over design and functionality. However, Magento is great for eCommerce businesses that require scalability, customization, and advanced features.",
					"When evaluating platforms, we consider the SEO capabilities and your requirements to select the platform:",
				],
				listItems: [
					{
						parts: [
							"Shopify has built-in advanced SEO features, while WooCommerce allows you to take full control over meta tags, headings, and URL structures.",
						],
					},
					{
						parts: [
							"Payment integrations should also be a priority; platforms like Magento offer numerous gateway options (PayPal, Amazon Pay, Braintree, etc.), while WooCommerce can integrate with any gateway that supports WordPress.",
						],
					},
					{
						parts: [
							"Security features are paramount—ensure the platform includes SSL certificates, PCI-DSS compliance, and two-factor authentication to protect sensitive customer data. Shopify offers built-in security, and Magento is best for enterprises that require managed, premium-grade security.",
						],
					},
				],
			},
			{
				title: "Key Features Every eCommerce Website Needs",
				paragraphs: [
					"While WordPress is an incredibly popular and flexible platform, it does come with its own set of limitations and challenges that users should be aware of.",
				],
				listItems: [
					{
						title: "User-Friendly Navigation",
						parts: [
							"An intuitive and straightforward navigation can reduce bounce rates. With AI-powered recommendation engines, we can further enhance navigation by showing related products based on the user's behavior and preferences, which drives upsells and cross-sells.",
						],
					},
					{
						title: "Mobile-First Design",
						parts: [
							"Mobile-first is no longer an option but a necessity. Google's mobile-first indexing prioritizes mobile-optimized sites in search rankings. As part of this approach, we focus on ensuring seamless usability across all devices, so that your site loads quickly and looks polished on smaller screens.",
						],
					},
					{
						title: "Lightning-Fast Loading Speed",
						parts: [
							"Web performance is essential, not just for user experience but also for SEO. At Icecube Digital, we focus on improving loading speed and server-side optimizations for global content distribution. On the front end, we use lazy loading for images and videos, minify CSS/JS files, and optimize images through modern formats like WebP.",
						],
					},
					{
						title: "Secure Payment Gateways",
						parts: [
							"Incorporating secure payment gateways is vital for both trust and compliance. At Icecube Digital, our experts ensure that your customers' financial data remains safe. Additionally, we enable multi-factor authentication (MFA) and tokenization, further securing sensitive data during transactions to provide a smooth, localized shopping experience.",
						],
					},
					{
						title: "AI-Powered Search & Filters",
						parts: [
							"AI-powered search tools enhance user experience by anticipating customer needs and providing personalized product suggestions. Our team implements natural language processing (NLP) algorithms to interpret complex search queries and suggest relevant results. We recommend leveraging machine learning algorithms that learn from customer behaviors and interactions to optimize search results over time, improving both customer satisfaction and conversion rates.",
						],
					},
					{
						title: "High-Quality Product Images & Videos",
						parts: [
							"Visual content is essential to converting visitors into buyers. We invest in high-resolution images and 360-degree product views to give potential customers a detailed look at your offerings. Our team ensures that all visual content is optimized for mobile devices, as images can quickly slow down load times if not properly compressed.",
						],
					},
					{
						title: "Live Chat & Chatbots",
						parts: [
							"Live chat and chatbots improve customer engagement and reduce bounce rates. We focus on integrating AI-powered chatbots that can provide immediate responses to customer queries even during off-hours.",
						],
					},
					{
						title: "Multi-Language & Multi-Currency Support",
						parts: [
							"If you are targeting international markets, multi-language and multi-currency support are essential. At Icecube Digital, we implement GeoIP targeting to detect a user's location and display the correct language and currency automatically. Additionally, our team crafts designs that support various international payment gateways to make cross-border shopping easy and seamless.",
						],
					},
					{
						title: "Automated Inventory Management",
						parts: [
							"Efficient inventory management prevents overstocking or understocking issues. We implement real-time inventory tracking tools that update stock levels automatically with each sale. Automated systems also sync your online store with physical stores, ensuring accurate stock levels across all channels.",
						],
					},
				],
			},
			{
				title: "Why a Mobile-First Approach is the Future of eCommerce?",
				paragraphs: [
					"The shift toward mobile-first design isn't just a passing trend—it's a fundamental change in how people shop. Mobile devices now account for over 50% of global web traffic, and this number continues to rise.",
					"The eCommerce SEO consultants at Icecube Digital focus on a mobile-first design to ensure that your site is optimized for all devices, delivering a consistent user experience whether visitors are on smartphones, tablets, or desktops.",
					"As Google continues to prioritize mobile-friendly sites in search results, eCommerce businesses that neglect mobile optimization will find themselves ranked lower. We ensure that your site is mobile-first to improve your chances of ranking higher in search engines, ultimately driving more traffic and sales.",
				],
			},
			{
				title: "Why eCommerce Website Maintenance Matters for Your Business?",
				paragraphs: [
					"Regular maintenance of your eCommerce website is crucial for long-term success. When you partner with Icecube Digital, maintenance will be an ongoing process, not just a one-off task. We keep your site up to date with the latest software updates, security patches, and design improvements, ensuring that it remains competitive in the ever-evolving eCommerce landscape.",
					"When you periodically update content, check for broken links, and test the checkout process, you can prevent customer frustration and cart abandonment. We also offer automated backups, security audits, and performance monitoring tools to ensure that your site operates smoothly without risking data loss.",
				],
			},
		],
	},

	faq: {
		eyebrow: "Ecommerce",
		title: "Web Design FAQs",
		items: [
			{
				question: "How does your design process work?",
				answer:
					"Based on your initial ideas and references, our eCommerce website design team comes up with wire frames and mock ups for page designs. With your feedback on initial mock ups, we work on the revisions. We offer unlimited revisions and we won't be happy unless you are satisfied with the design.",
			},
			{
				question: "Do you use pre-made templates?",
				answer:
					"No, we build designs from scratch to the exact business needs of our valued customers. A lot of companies use pre made templates or themes to cut costs.",
			},
			{
				question: "Do you offer warranty on websites you build?",
				answer:
					"Yes, we provide free one month bug fixing support. Later, you can opt for our monthly or yearly eCommerce website maintenance package to keep your website up to date.",
			},
			{
				question: "Who will handle content required for the pages?",
				answer:
					"You can provide content from your end if you can manage or opt for our content writing service package that we offer. We can assist you to create SEO friendly content for your web pages.",
			},
			{
				question: "I already have a website, can you update it?",
				answer:
					"If you have a website which is out of date and not generating sales, we can help to redesign it as per current design trends. The price and timeline for such a project can be decided after thorough review of your existing website.",
			},
			{
				question: "How do you increase ecommerce user engagement?",
				answerList: [
					"Create valuable content",
					"Create easy and intuitive navigation",
					"Use high-quality images",
					"Offer multiple payment options",
					"Provide live chat support",
					"Cover all types of devices",
					"Use proper CTAs",
				],
			},
			{
				question: "How much does an eCommerce website cost?",
				answer:
					"The cost of building a website really depends on the time it takes for design and development of the website. It takes longer to build a webshop with custom features than a simple order processing website. We offer industry specific solutions to keep the cost as minimum as possible.",
			},
			{
				question: "Can I update website myself after it's completed and live?",
				answer:
					"Yes, you can update content on the pages such as images and text but you can't modify the overall design layout of web pages. Our eCommerce website design team will provide you a guide on how you can update those items on your own.",
			},
			{
				question: "Will my website work well on smartphones and tablets?",
				answer:
					"Every website we build is mobile responsive. Majority of people are accessing the web using small screen devices these days so it's important that your website provides the best user experience on mobile phones and tablets. Our design team uses mobile first strategy while designing eCommerce websites.",
			},
			{
				question: "Do I need to choose a template for my website design?",
				answer:
					"No, we build creative custom designs from scratch based on your unique brand needs and suggestions. You can browse through our eCommerce web design library to look for ideas about your custom design as well as share any other design references that you love.",
			},
			{
				question: "What if I find any issues after the website is live?",
				answer:
					"We have a solid testing process in place for all our website design and development projects so there is no chance of errors but in case of any issues, we offer 1 month of free bug fixing support so you are all covered.",
			},
		],
	},

	// common section: ./common/our-clients-section.js
	ourClients: ourClientsSection,

	// common section: components/home/WeServeSection.js
	weServe: true,

	// common section: ./common/ceo-cta-section.js
	seoSay: ceoCtaSection,
};

export default EcommerceWebsiteDesignServices;
