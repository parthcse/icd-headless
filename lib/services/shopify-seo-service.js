const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const ShopifySeoService = {
	slug: "shopify-seo-service",
	pageTitle: "Shopify SEO Services | Icecube Digital",
	metaDescription: "Boost organic traffic and sales with Icecube Digital's Shopify SEO services — SEO audits, technical SEO, content creation, on-page and off-page optimization, conversion optimization, and AI-assisted SEO for your Shopify store.",

	banner: {
		heading: "Shopify SEO Services",
		paragraphs: [
			"Want to boost organic traffic to your Shopify website? Do you want to double the sales of your ecommerce business? Icecube Digital is a team of Shopify SEO Specialists with adequate experience and expertise in delivering a range of Shopify SEO services for your versatile ecommerce store. Just share your requirements with us TODAY!",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get Your Free AI SEO Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Real Shopify SEO",
		title: "Success Stories",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins  and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions  and the tangible results we’ve delivered for businesses across  industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with  data-driven PPC campaigns, each Portfolio is a testament to our  unwavering commitment to driving growth.",
		],
		postIds: [71, 65, 73],
		portfolioCtaLabel: "More Case Studies",
		portfolioCtaHref: "#",
		btnArrow: BTN_ARROW,
	},

	seoAuditForm: {
		eyebrow: "Get Your FREE",
		title: "SEO Audit Report Now!",
		image: "/assets/photos/seo-form.png",
		imageAlt: "",
	},

	plainText: {
		eyebrow: "Hire Shopify SEO Experts To",
		title: "Drive Targeted Traffic",
		contentAlign: "center",
		paragraphs: [
			[
				"Are you looking forward to dominating the search results and increasing the total number of customers? To attract more targeted traffic and conversion-ready traffic to your online Shopify store, you need professional SEO strategists and experts to handle your ",
				{ text: "eCommerce website", href: "/ecommerce-website-development-services/" },
				" and take your website to new heights in search engines like Google.",
			],
			"Icecube Digital is a leading Shopify SEO agency, having years of experience in optimizing and promoting online stores hosted on the Shopify platform. So whether you want to increase traffic, sales, and overall revenue, we will help you with everything. Our Shopify SEO Specialists, data analysts, content creators, and digital PR specialists deliver advanced quality search engine optimization services by comprehending your business inside and out.",
			"Just get in touch with our Shopify SEO consultant team and discuss your project requirements to get the best possible solution!",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	// common section: ./common/achievements-section.js (default "Our Achievements" heading)
	achievements: achievementsSection,

	topIconBox: {
		eyebrow: "Our Range Of",
		title: "Shopify SEO Services",
		subtitle: "At Icecube Digital, we offer a full suite of Shopify SEO services designed to help your store rank higher, attract qualified traffic, and maximize conversions. Our Shopify-certified SEO experts leverage proven strategies and deep platform knowledge to deliver measurable growth for your eCommerce business.",
		items: [
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Website SEO Audit",
				body: "We, at Icecube Digital, analyze your online store to track page performance, usability, security, and website redesign. Our experts will audit your Shopify website to determine whether or not it's optimized to achieve your targeted traffic goals and how to improve performance. We will take the necessary steps to enhance your website's overall results.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Site Migration",
				body: "With handling 50+ migrations successfully, we, at Icecube Digital, follow a tried and trusted website migration process, making sure that your website's ranking and traffic are not impacted in any manner. No matter what type of online store you have, we will successfully migrate it to Shopify as per your needs.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Complete Technical SEO",
				body: "Whether you want to improve your website's search visibility, online rankings, or sales, our experts have hands-on experience delivering technical SEO services. Our team will perform a website audit, optimize website speed, and fix crawl errors, canonical tags, and redirect issues. Just discuss your requirements with us, and let our specialists handle the rest.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Unique Content Creation",
				body: "Content is king, so publishing high-quality content and attracting new visitors to your website plays a very important role. So, our team of SEO content writers will create quality content for your Shopify website that attracts targeted audiences and compels new users. From eye-catching product descriptions to blog posts and conversational landing pages, our team is here to help you with everything.",
			},
			{
				icon: "/assets/icons/smart-search.svg",
				title: "On-page and Off-page Optimization",
				body: "Our SEO experts will ensure that your online store's essential aspects are fully optimized. Our team will handle all your requirements, from content optimization to link building and improving social media engagement.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Shopify Store Conversion Optimization",
				body: "Want to improve the conversion of your store? Icecube Digital is the answer. We have practical knowledge and tried tactics to boost the conversion of your Shopify website, boosting sales. Our SEO specialists focus on store conversion optimization to boost traffic and skyrocket the conversion rate.",
			},
		],
	},

	infoBox: {
		eyebrow: "Solving Key Challenges For",
		title: "Shopify Store Owners",
		subtitle: [
			[
				"Operating a retail website using Shopify presents a unique array of obstacles. An effective SEO plan requires technical, on-page, and off-page optimization knowledge. As a leading ",
				{ text: "LA SEO company", href: "/los-angeles-seo-company/" },
				" for Shopify, we can assist merchants in surmounting common obstacles and expanding their operations.",
			],
		],
		items: [
			{
				title: "I'd like more people to find my website through search engines.",
				body: "We can conduct an exhaustive SEO audit and execute tactics to optimize your website for organic search through technical SEO, link building, keyword research, and other methods.",
			},
			{
				title: "Since migrating my website, I've noticed a drop in traffic and sales",
				body: "As the best Shopify SEO agency, we can help resolve issues caused by a website move, like broken links, canonicalization errors, or missing metadata, through technical troubleshooting and SEO remediation.",
			},
			{
				title: "Can you guide me through the technical side of SEO to ensure my website keeps growing?",
				body: "Our SEO expert will provide training and continuous technical support to ensure your site complies with Google's guidelines and enables continued SEO growth.",
			},
			{
				title: "We're transforming to Shopify and need through SEO support. Can you assist us?",
				body: "To ensure a smooth transition without compromising SEO performance, we provide migration services, audits, strategy development, and implementation as the preeminent Shopify SEO firm.",
			},
			{
				title: "I'm seeking a solid plan to Increase sales and take my website to the next level.",
				body: "We will develop a comprehensive growth strategy customized to your objectives, utilizing content, technical, and link-building techniques to increase conversions and qualified traffic.",
			},
			{
				title: "My shopify website isn't bringing in enough leads. In what way could you assist in enhancing that?",
				body: [
					"Proper SEO strategies are crucial for Shopify stores to achieve maximum success. Our ",
					{ text: "eCommerce SEO experts", href: "/ecommerce-seo-services/" },
					" expert will optimize your site, content, and links to increase lead generation through organic search and attract customers with high intent.",
				],
			},
			{
				title: "My Shopify site got penalized after google's update. Can you Assist in resolving this?",
				body: "Based on our extensive knowledge of SEO and our established connections with Google, we can identify problems, submit requests for reconsideration, and implement corrective measures to avoid penalties. Ice Cube Digital, an industry-leading digital marketing agency, has assisted companies of every size in most sectors to overcome SEO obstacles and expand to unprecedented heights.",
			},
			{
				title: "As a Fortune 500 Company, we're looking for a Shopify SEO Agnecy that can handle everything from shopify maintenance to SEO",
				body: [
					"As a top SEO company for Shopify, we offer full-service management and support to meet the needs of global enterprises. We have an in-house team of experienced ",
					{ text: "Shopify developers", href: "/hire-shopify-developers-experts/" },
					" to build a top-class website experience that meets your user expectations and resonates with your brand identity. Besides, we are your one-stop solution regarding Shopify services, as we support all the services related to Shopify.",
				],
			},
		],
	},

	leftIconBox: {
		eyebrow: "Strategies For Maximizing",
		title: "Your Online Success",
		subtitle: [
			"E-commerce platforms like Shopify are helping more firms sell their products and services online. It is a widely utilized stand-alone e-commerce platform that eliminates the requirement for technical backend configuration to construct and administer online stores.",
			"Shopify provides a complete framework for building an online store, but SEO is crucial for growing sales and organic traffic. Also, Shopify simplifies launching a store; however, it requires considerable marketing effort to generate traffic and increase sales again.",
			[
				"Your store needs SEO services for Shopify and search marketing to succeed online. By implementing strategies such as link building, content creation, and technical optimization, a leading Shopify ",
				{ text: "SEO firm near you", href: "/local-seo-services/" },
				" like IceCube Digital can assist businesses in increasing sales through organic search and attracting more qualified customers. Here are some successful strategies that we often use:",
			],
		],
		items: [
			{
				icon: "/assets/icons/speed.svg",
				title: "Optimize Website Speed",
				body: "Website speed is a major ranking factor for Google. Obtaining the assistance of a Shopify SEO expert to lessen page load times and enhance the user experience is one way to optimize the performance of your website.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Turn Categories Into Pillar Pages",
				body: "Transform primary categories into informative pillar pages by adding pertinent content that addresses customer inquiries. It serves to enhance search engine rankings and user experience. SEO services can help it for Shopify.",
			},
			{
				icon: "/assets/icons/edit-board.svg",
				title: "Configure The Blog Feature",
				body: "Regularly publish fresh, pertinent content using the integrated blog feature into Shopify. Incorporate focused keywords to generate organic traffic improve conversions. With the assistance of expert SEO agency services for Shopify, online retailers can gradually observe a substantial increase in traffic, sales, and search engine rankings by concentrating on these strategies.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Build Informative Content & (E-E-A-T) Score",
				body: "Objectively produce informative and instructive content that addresses inquiries from users to attain a high EAT (expertise, authoritativeness, trustworthiness) score. Hire an experienced content marketing agency for assistance in creating and drafting content that can rank high on search engines.",
			},
			{
				icon: "/assets/icons/search-link.svg",
				title: "Effective Internal Linking Structure",
				body: "Establish a logical internal linking framework that establishes connections between critical webpages such as blogs, products, and categories. It facilitates search engine understanding of the subject matter of your website. SEO services can assist you in building an effective internal linking structure for your Shopify store.",
			},
			{
				icon: "/assets/icons/copy.svg",
				title: "Create Sub-Category Pages",
				body: "Generate distinct webpages for each niche sub-category derived from the overarching categories. This level of organization facilitates clients' ability to locate precisely what they require. Here, a Shopify e-commerce SEO expert's assistance can be helpful.",
			},
			{
				icon: "/assets/icons/database.svg",
				title: "Canonical Tag and Domain Canonicalization",
				body: "Canonicalization and canonical elements should be utilized to prevent SEO-harming penalties for duplicate content. Hire Shopify SEO experts who can quickly implement these correctly.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Install Product Review App",
				body: "Customers' product evaluations can be gathered and displayed via an application similar to evaluations. Positive reviews influence purchase decisions and inspire confidence.",
			},
		],
	},

	tableSeoPlans: {
		eyebrow: "SEO Pricing Plans Customized For Your",
		title: "Business Success",
		subtitle: "We create SEO pricing plans tailored to your business goals, helping you gain more visibility online and grow. Whether you're a small business or a large company, we focus on the right mix of on-page, off-page, and technical SEO to improve your rankings, bring in more visitors, and increase revenue. Let's work together to build an SEO plan that fits your needs!",
		planLabel: "CUSTOM White Label SEO PLANS",
		price: "500",
		period: "Monthly",
		leftTitle: "How We Determine Our SEO Pricing",
		items: [
			{
				icon: "/assets/icons/note-edit-orange.svg",
				title: "Content Marketing Solutions",
				body: "Icecube Digital offers a comprehensive range of content formats, designed to elevate your business with high-quality, SEO-optimized content tailored to any industry. Our dedicated content team ensures impactful and engaging strategies that drive results.",
			},
			{
				icon: "/assets/icons/grid-icon-orange.svg",
				title: "Website Size Considerations",
				body: "Your website's size significantly influences its SEO strategy, including content planning, management, and on-page optimization. Icecube Digital's experts analyze your website's unique requirements to develop a personalized SEO approach that maximizes performance.",
			},
			{
				icon: "/assets/icons/support-icon-orange.svg",
				title: "Consultation Services",
				body: "At Icecube Digital, clients gain access to a team of over 20+ digital marketing specialists, regular consultation calls, and ongoing business reviews, backed by detailed ROI reports. Our Woocommerce SEO experts can also manage complex digital marketing strategies, which you can explore with your dedicated strategist.",
			},
		],
		rightTitle: "Included in All Plans:",
		features: [
			"AI-Driven Strategy Suggestions",
			"Competitor Analysis and Lead Monitoring",
			"Data-Backed Improvement Ideas",
			"Support from a Team of 50+ Digital Experts",
			"Full-Funnel ROI Tracking",
			"Unified Marketing and Sales Data",
			"Complete SEO (On-Page, Off-Page, and Technical)",
			"Track Phone Calls, Leads, and Revenue",
			"Custom Reports and Insights",
			"Local Seo and Google Business Profile Optimization",
		],
		ctaLabel: "Get My Custom Proposal",
		ctaHref: "#",
	},

	infoBoxSecondary: {
		eyebrow: "Shopify SEO Best",
		title: "Practices We Follow",
		subtitle: "We at IceCube Digital understand the importance of optimizing your Shopify website for SEO. IceCube Digital considers it the key to boosting your online visibility and attracting what we call organic traffic. So, here are ten excellent tips to help you enhance your Shopify website's SEO:",
		items: [
			{
				title: "Keyword Research for Better Reach",
				body: "Identify relevant keywords, including phrases that customers might use to discover products like yours. Use tools like Google Keyword Planner or SEMrush to find better keywords with moderate competition.",
			},
			{
				title: "Make Your Product Pages Stand Out!",
				body: "Your product pages are the heart of your e-commerce website. Write descriptive and unique product titles. Moreover, compose detailed product descriptions and do not forget to include high-quality images.",
			},
			{
				title: "SEO-Friendly URLs for Optimization",
				body: "Use descriptive URLs with all relevant keywords and your brand name. Avoid lengthy numbers or symbols because they can confuse search engines and users alike.",
			},
			{
				title: "Excellent Mobile Responsiveness",
				body: "We know that Shopify themes are inherently mobile-friendly. Yet, make sure to double-check to ensure your website looks and functions flawlessly across various mobile devices and operating systems.",
			},
			{
				title: "Page Speed Optimization: Speed Matters!",
				body: "Compress images to reduce their file sizes. Also, minimize code and enable browser caching. Use a content delivery network (CDN) to improve load times.",
			},
			{
				title: "Structured Data Markup",
				body: "Implement structured data, or schema markup, to help search engines comprehend your product information. It can enhance the appearance of rich snippets in search results.",
			},
			{
				title: "Blogging and Content",
				body: "Start a blog on your Shopify website and regularly publish relevant and informative content. Mentioning relevant keywords in these blogs will help you rank better SEO-wise. Address common customer questions and pain points. Share your specific expertise to establish authority in your niche.",
			},
			{
				title: "Internal Linking & Backlinking",
				body: "Create a logical and well-organized internal linking structure to aid users in navigating your website. It helps distribute link authority throughout your pages, improving SEO. Guest posting, influencer collaborations, and partnerships can help with effective backlinking.",
			},
			{
				title: "Seamless User Experience (UX)",
				body: "Ensure easy navigation and a clear hierarchy on your website. Ensure to enable the presence of a search bar for user convenience. Add calls-to-action (CTAs) to inform users about the next steps of the buying process.",
			},
			{
				title: "Meta Tags for Optimal Results",
				body: "Craft unique and engaging meta titles and descriptions for each page. Keep meta titles under 60 characters and meta descriptions under 160 characters for optimal results.",
			},
		],
	},

	leftIconBoxSecondary: {
		eyebrow: "We're A Top-rated Shopify SEO Company",
		title: "For A Reason",
		items: [
			{
				icon: "/assets/icons/magnet.svg",
				title: "Get Highly-Targeted Traffic",
				body: "Do you know that opening an online store is not enough? All you need to do is market it in order to ensure customers will find your store on Google and through other channels like social media. Our SEO services will not only increase the visibility of your store but boost highly targeted traffic that will be converted into potential customers.",
			},
			{
				icon: "/assets/icons/result.svg",
				title: "Improve Search Engine Rankings",
				body: "To improve search engine rankings, you need to incorporate SEO strategies like keyword research and link building. Through advanced SEO services, you will know which keywords are suitable for your website and what is helpful for your targeted audience. Implementing a vital SEO process gives your online store the boost that it needs to rank higher on search engines.",
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Google Shopping Ads Optimization",
				body: "Google's results on the first page for any product or service are considered the most well-known brand names. Such companies are the ones that people trust for buying products and services. No matter what type or size of product or service you offer, it is necessary that you establish your brand on Google, Yahoo, and Bing and that is only possible through advanced SEO service. With different SEO services, you can make your company popular, turning it into a brand.",
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Optimizes Your Online Store for Mobile SEO",
				body: "Do you know that more than half of online website visitors are mobile users? It means you need to optimize your Shopify store for mobile SEO. Most online shoppers prefer using smartphones for shopping because it is a more convenient option than a computer. So, our Shopify experts will help you optimize your online Shopify store for mobile to get better search engine rankings.",
			},
		],
	},

	cta: {
		text: "Discover What Our Shopify Seo Specialists Can Do For Your Store",
		ctaLabel: "Contact Us Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	checkList: {
		eyebrow: "Why Hire Us As Your Shopify",
		title: "SEO Company?",
		subtitle: [
			"IceCube Digital is a leading Shopify SEO company based in the USA, having a team of Shopify SEO consultants, strategists, and experts to take your online store to new heights. With 14+ years of experience in delivering advanced SEO services, we will be there for you until you make your website popular and successful.",
			"With the main aim of serving our precious clients with desired digital solutions, we believe in building long-lasting relations with them. Therefore, we will be the perfect choice for you when hiring a trusted Shopify SEO agency.",
		],
		benefitsLeft: [
			"A skilled team of Shopify SEO experts to work on your project requirements",
			"Hourly or project-based pricing model to meet your requirements",
			"Technical support to answer your queries or questions quality with the best performance",
		],
		benefitsRight: [
			"Maintain transparent communication throughout the project",
			"200+ SEO projects handled successfully",
			"Assign a single point of contact to keep you updated about your project",
		],
	},

	imageText: {
		eyebrow: "Best Result With Our Shopify",
		title: "SEO Experts",
		image: "/assets/photos/shopify-seo-experts-case-study.png",
		imageAlt: "Shopify SEO experts case study results",
		paragraphs: [
			"A leading food wholesale business picked IceCube Digital to take rankings to the next level in order to attain all-time sales highs. Organic traffic surged by more than 460% in a year, with more than 10,000 new keywords ranking on Google.",
		],
		footerParagraphs: [
			"As a well-known company in the firewood industry, they needed an established and trustworthy company to drive more customers to their online store. After having multiple proposals from various companies, they chose Icecube Digital to handle their entire digital marketing campaign and were very pleased with their decision. Our cohesive team of Shopify SEO experts began SEO efforts by doing competitor research, identifying core business keywords, fixing page load speed, building links, blog outreach, and fixing URL architecture issues. Quarter over Quarter we increased organic traffic, sessions, and revenue. Fergal's site saw phenomenal success with our strategic SEO efforts.",
		],
	},

	ctaSecondary: {
		text: "Tell Us About Your Shopify Seo Service Requirements And Get A Free Quote To Hire Experts Today!",
		ctaLabel: "Get In Touch Now",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	information: {
		eyebrow: "Additional",
		title: "Information",
		cards: [
			{
				title: "What is a Shopify Expert?",
				blocks: [
					{ text: "Shopify AI SEO services refer to the use of AI tools and plugins to improve a store's ranking on search engine results pages. AI is useful for many SEO tasks, like:" },
					{
						type: "ul",
						items: [
							"Determine the search rankings",
							"Identify the website optimization opportunities",
							"Research keywords",
							"Summarize research",
							"Write SEO-optimized content",
						],
					},
					{ text: "What makes AI truly valuable is how much time it saves. Instead of spending hours manually analyzing competitors, finding long-tail keywords, or optimizing each product page one by one, AI handles these tasks in minutes. It automates repetitive processes, delivers data-backed suggestions instantly, and even generates ready-to-use metadata and descriptions. Whether you have 50 or 5,000 SKUs, the AI-driven SEO workflows keep your store fully optimized, competitive, and visible in search, without wasting time or budget." },
				],
			},
			{
				title: "Our Shopify AI SEO Solution: What You Get",
				paragraphs: [
					"At Icecube Digital, we are all about tailoring our services to your needs. We provide a comprehensive and complete AI SEO solution, automating the entire search engine optimization process, from keyword research to content generation. Here's what is included in our shopify AI SEO package:",
				],
				listItems: [
					{ title: "AI SEO Audit for Shopify", parts: ["We use AI SEO audit plugins, like SEO Kart or TinyIMG SEO and Image Optimizer, to perform a technical and deep SEO audit and identify issues. With an AI-powered SEO audit, our experts cover the store's entire SEO picture, from missing alt texts to duplicate content. We find the problems, we find the solutions."] },
					{ title: "Keyword Research Tailored to Shopify Collections & Products", parts: ["Instead of targeting a range of keywords, we narrow the top 4-5 high-ranking and relevant keywords to your products and services. Then, our experts try to build different combinations of keywords from the originally selected ones and create a content plan around them. The best part? Most of the time-consuming tasks are finished by AI within minutes."] },
					{ title: "AI-Powered Meta Data Optimization", parts: ["The Shopify app store features over 8,000 apps and plugins, including Smart SEO, which we utilize to automate the generation of meta titles and descriptions for your product pages. Every meta tile and description is created to perform on both search engines and user intent. Each copy is optimized with target keywords, character limits, and compelling language to boost click-through rates."] },
					{ title: "Internal Linking Strategy for eCommerce", parts: ["The internal links connect your pages in a logical hierarchy. It helps search engines understand the structure and relationship between different parts of your website. Our experts can take their time to build a solid internal linking strategy, but our AI tools understand your brand, the products, and website structure, and create the strategy within minutes."] },
					{ title: "Advanced Schema Markup for Shopify", parts: ["Schema markups are crucial for making your store crawlable and indexable. It provides a clearer picture of the structure and relevance of your eCommerce site. We implement advanced structured data using AI-powered tools that automatically generate rich markup for your products, categories, FAQs, reviews, and more. This enables your pages to appear with rich results in Google, improving the click through rates."] },
					{ title: "Shopify App SEO Compatibility & Enhancement", parts: ["Your SEO setup is only as strong as its compatibility with the apps powering your storefront. We make sure your SEO strategy works seamlessly with major Shopify apps like PageFly, Yotpo, and Judge.me, GemPages, and others. Our AI-enhanced workflows monitor for potential code conflicts or performance slowdowns that could impact your SEO, ensuring your entire tech stack operates in harmony."] },
					{ title: "Dynamic Product Page Optimization", parts: ["As your inventory changes, we integrate AI tools and plugins that automatically update content, metadata, and tags. So, when your products go in or out of stock, get renamed, or have new reviews or specifications, our AI tools dynamically update product availability status, product descriptions, and promotions in real-time. This keeps your SEO strategy in sync with your store."] },
					{ title: "Canonical Tag Automation & URL Cleanup", parts: ["Shopify's URL structure and product variants can create a mess of duplicate pages and unnecessary parameters. We use AI and advanced tools to automatically manage canonical tags, ensuring that search engines know which page is the original version to index. We aim to create a cleaner, faster, and more search-friendly site architecture that improves your rankings and crawl efficiency."] },
				],
			},
			{
				title: "Key Benefits of Our Shopify AI SEO Services",
				paragraphs: [
					"Whether you opt for conventional Shopify SEO services or AI SEO services from Icecube Digital, you can expect our strategy to win and work as per your expectations. With over 14 years of experience, we have developed strategic and precise SEO strategies for numerous clients worldwide that have worked out excellently. However, the difference with AI SEO services is that strategy creation and execution happen much faster. Here's how AI automates the time-consuming tasks:",
				],
				listItems: [
					{ title: "Scale SEO across 100s or 1000s of products effortlessly:", parts: ["AI helps you optimize every page, even at large volumes, without the need for manual editing, saving you hours every week."] },
					{ title: "Improve organic rankings and traffic:", parts: ["Our AI approach ensures content relevance, keyword optimization, and page health are always aligned with Google's evolving algorithm."] },
					{ title: "Eliminate duplicate content automatically:", parts: ["We identify and resolve duplicate content caused by product variants, filters, and dynamic URLs, keeping your SEO clean and penalty-free."] },
					{ title: "Free up time from manual optimization tasks:", parts: ["Your team can focus on strategy and growth while our AI handles the repetitive tasks like metadata, internal links, and audits."] },
					{ title: "Boost ROI with smarter data-backed decisions:", parts: ["With AI insights, you invest where the data says you'll win, whether it's product pages, blog content, or new keyword targets."] },
				],
			},
			{
				title: "What Makes Shopify SEO Challenging?",
				paragraphs: [
					"Shopify already has in-built SEO features, which make it easier for shop owners and developers to ensure the store is SEO-friendly from start to finish. For instance, the canonical tags are automatically generated and added to the pages to prevent duplicate content from appearing in search results. Similarly, the SSL certificates are automatically enabled, themes support social media sharing options, and themes generate the title tags for product or store name automatically.",
					"However, to master Shopify SEO, your team needs more than simple automation. The limited features in Shopify for SEO make the entire process challenging. Let's understand the limitations:",
				],
				listItems: [
					{ title: "Limited access to advanced SEO elements", parts: ["Unlike custom platforms, Shopify restricts access to deep technical SEO settings. This makes it difficult to implement features like structured data and page speed optimizations manually."] },
					{ title: "Duplicate content from product variants and messy URLs", parts: ["Shopify auto-generates multiple URLs for the same product (e.g., via filters or variants), which dilutes SEO value and confuses Google. Hence, the URL needs to be manually optimized so that the store can be easily crawled by the bots and get indexed."] },
					{ title: "No control over robots.txt, sitemap, or canonical tags", parts: ["Robots.txt, sitemap, and canonical tags are foundational SEO elements, and Shopify limits how much you can customize them. These are critical tools that guide search engine bots on how to crawl and index your site, and the lack of control over customization can send mixed signals to search engines."] },
					{ title: "Manual on-page optimization for hundreds of SKUs", parts: ["On-page optimization plays a significant role in boosting the visibility of the product pages. Optimization can be done manually for 10-20 pages, but editing metadata and content for 50-100 products is painfully slow and unsustainable for growing stores."] },
					{ title: "Inconsistent meta descriptions and outdated content", parts: ["As your store expands, it's hard to keep every page updated manually. The inconsistencies in meta descriptions can lower your click-through rates, reduce user trust, and make your brand appear neglected in search results. Besides, the outdated content gives your competitors an edge, and your brand loses its top-ranking spot."] },
				],
			},
			{
				title: "Results You Can Expect",
				paragraphs: [
					"Our strategies are designed to work and show excellent results. While AI becomes an integral part of our Shopify SEO, the use of AI is directed by our experts. At Icecube Digital, we believe that AI is an assistive technology, and we use it ethically and responsibly to drive results for your business. In this business world, where fast actions to industry needs determine your agility, our AI-assisted services are designed to deliver results that you are expecting, but a little quicker.",
				],
				listItems: [
					{ title: "Improved product visibility in search:", parts: ["Our AI-powered optimization ensures more of your SKUs appear in search results and with higher visibility."] },
					{ title: "Higher rankings for category & collection pages:", parts: ["We focus on improving your high-impact pages, helping collections rank higher for valuable, purchase-intent keywords."] },
					{ title: "Reduced bounce rates with faster, optimized pages:", parts: ["By compressing images, removing unnecessary code, and improving structure, your site loads faster and keeps shoppers engaged."] },
					{ title: "Up to 60% less manual SEO work:", parts: ["Our automation eliminates hours of repetitive tasks, so your team can focus on scaling your store, not editing meta tags."] },
					{ title: "Scalable SEO for future growth:", parts: ["Whether you launch 10 new products or 1,000, our AI keeps your SEO sharp, current, and ready to perform at scale."] },
				],
			},
		],
	},

	faq: {
		eyebrow: "Shopify",
		title: "SEO FAQs",
		items: [
			{
				question: "How long does it take for Shopify to rank #1 on Google?",
				answer: "The time for a Shopify store to rank #1 on Google depends on several factors such as the business category, competition, keyword difficulty, and the quality of the website content and optimization. Generally, it takes 4 to 6 months of time to start seeing results from SEO work for fresh website. To improve the chances of ranking high on Google, it's important to regularly produce high-quality, relevant content and to optimize the website's code, meta tags, images, etc.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What is the difference between on-site and off-site?",
				answer: "On-site (on-page) SEO covers everything on your store — site architecture, page speed, content, title tags, schema, and internal links — to help search engines understand and rank your pages. Off-site SEO builds your store's authority and reputation externally, mainly through high-quality backlinks, brand mentions, and digital PR. Both work together to improve rankings.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How much does Shopify SEO service cost?",
				answer: "The cost depends on your store's size, competition, and the scope of work involved. We offer flexible plans starting at $500/month and can tailor a package to your goals and budget. Request a free SEO audit and we'll review your store and provide a custom proposal.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Can you guarantee rankings for my Shopify project?",
				answer: "No reputable SEO agency can guarantee specific rankings, since search engines control their algorithms. What we do guarantee is a proven, white-hat strategy, transparent reporting, and consistent effort that reliably improves visibility, traffic, and conversions over time. Beware of anyone promising guaranteed #1 rankings.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What are Shopify Local Rankings or Local SEO?",
				answer: "Local SEO optimizes your store to appear in location-based searches and Google's local pack and maps. It includes Google Business Profile optimization, local keywords, location pages, NAP consistency, and reviews — helping nearby customers find your store and driving foot traffic and local online sales.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "Why is it important to hire Shopify SEO consultants for my website?",
				answer: "Shopify SEO consultants bring platform-specific expertise in Liquid, theme structure, app compatibility, and Shopify's SEO limitations. They implement technical fixes, content, and link-building strategies efficiently, avoid costly mistakes, and adapt to algorithm changes — delivering faster, more reliable growth than a do-it-yourself approach.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How do you do SEO on Shopify Websites?",
				answer: "We start with a full SEO audit, then optimize site architecture, page speed, and Core Web Vitals, fix technical issues like duplicate content and canonical tags, optimize product and collection pages with keyword research and schema, create high-quality content, and build authority through links — all tracked with transparent monthly reporting.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "What are the challengers with SEO on this Shopify website?",
				answer: "Common Shopify SEO challenges include duplicate content from product variants and filters, limited control over robots.txt, sitemap, and URL structure, restricted access to advanced technical settings, and slow manual optimization across large catalogs. We overcome these with canonical management, clean site architecture, structured data, and AI-assisted automation tailored to the platform.",
			},
			{
				// TODO: draft answer — replace with final approved copy
				question: "How do I know if this is working for our business?",
				answer: "We measure success against KPIs tied to your goals — organic traffic, keyword rankings, click-through rates, conversions, and revenue from organic search. Using tools like Google Analytics and Search Console, we provide transparent monthly reports with clear insights and next steps so you can see exactly how your investment is performing.",
			},
		],
	},

	// common section: ./common/our-clients-section.js
	ourClients: ourClientsSection,

	// common section: components/home/GetQuoteSection.js ("Let's Work Together")
	getQuote: true,

	// common section: components/home/WeServeSection.js ("Countries We Serve")
	weServe: true,

	// common section: ./common/ceo-cta-section.js
	ceoCta: ceoCtaSection,
};

export default ShopifySeoService;
