const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "./common/milestone-section";
import achievementsSection from "./common/achievements-section";
import ourClientsSection from "./common/our-clients-section";
import ceoCtaSection from "./common/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const ShopifyMaintenance = {
	slug: "shopify-maintenance-services",
	pageTitle: "Shopify Maintenance and Support Services | Icecube Digital",
	metaDescription: "Keep your Shopify store fast, secure, and reliable with Icecube Digital's maintenance and support services — performance optimization, bug fixes, theme and design updates, data backups, third-party integrations, and 24/7 technical support.",

	banner: {
		heading: "Shopify Maintenance and Support Services",
		paragraphs: [
			"Technical support and maintenance of your Shopify store can often feel burdensome. However, at Icecube Digital, no task, especially when it comes to Shopify Plus maintenance & support, is too big or complex for our capable team.",
			"Ensure seamless and smooth functioning of your Shopify e-commerce store with our comprehensive maintenance services. From resolving technical bugs and glitches to implementing critical security updates, our Shopify Plus maintenance agency provides 24/7 assistance to handle all your queries and problems with precision and care.",
			"Whether you're building a Shopify store from scratch or migrating to Shopify from another e-commerce platform, the Icecube Digital team has the right resources and workforce to meet your business requirements and exceed your expectations.",
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
		eyebrow: "Connect With IceCube Digital and",
		title: "Experience The Change",
		contentAlign: "center",
		paragraphs: [
			"A regular Shopify maintenance plan is critical to the long-term success of your Shopify store. With Shopify Plus maintenance services, you can build a strong and thriving e-commerce business by prioritizing performance optimization, website security, improving SEO performance, managing product inventory, improving user experience, monitoring store performance, and updating design.",
			"Enhance your Shopify experience with Icecube Digital's full Shopify maintenance plan services. Our Shopify Plus support service ensures smooth operation, timely updates, and optimal performance of your online store. Building an online business is an ongoing process, and regular maintenance is key to staying ahead in the competitive e-commerce environment. Start your Shopify storage maintenance plan with Icecube Digital today and enjoy the many benefits it can bring to your business.",
		],
		ctaLabel: "Request a Demo",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	topIconBox: {
		eyebrow: "The Need of The Hour - Shopify Maintenance and",
		title: "Support Services",
		subtitles: [
			"Shopify is undoubtedly considered the best platform for developing e-commerce websites. It is because it offers many exclusive features and components that store owners and customers benefit from. However, it is essential to maintain and monitor the store because minor issues or technical glitches might cause significant problems that might impact your online business in the long run. For businesses scaling quickly, Shopify Plus maintenance service offers enhanced features and dedicated support. Shopify Plus support service ensures your store runs smoothly with personalized solutions, keeping up with your growth and addressing issues efficiently.",
			"Here are some reasons why you should hire a Shopify support services company to assist you in maintaining your store while you focus on other business productive tasks:",
		],
		items: [
			{
				icon: "/assets/icons/speed.svg",
				title: "Improved Performance",
				body: "Shopify's support team will optimize your store for speed to drive conversion rates. It can include compressing images, cleaning up code, and implementing techniques to reduce load time, all of which can help you create a faster and more responsive website.",
			},
			{
				icon: "/assets/icons/detection.svg",
				title: "Bug Fixes",
				body: "Our Shopify support team will assist in resolving any bug, error, or technical glitches that impact the overall customer experience. Our experts will take quick and prompt action to resolve it and ensure your website is up and running seamlessly with enhanced functionality to deliver a convenient shopping experience to your target audience.",
			},
			{
				icon: "/assets/icons/html-code.svg",
				title: "Theme and Design Updates",
				body: "Regular website updates are essential for building and maintaining customer trust. We will update your site with new banners, offers, and more to make your site more attractive to your customers. Besides, our team will make swift changes in your store's theme to resonate well with your brand's identity and keep it like your target audience's expectations or as per your vision.",
			},
			{
				icon: "/assets/icons/database.svg",
				title: "Data Backup",
				body: "Our skilled team of experts focuses on leveraging and utilizing robust data backup protocols to ensure the integrity and quick recoverability of your sensitive e-commerce store data. It includes automated and regular backups of your Shopify store database, covering product information, customer details, configuration, and theme settings. Data backup is a crucial part of Shopify support and maintenance services as it mitigates the risk of data loss due to unpredictable circumstances, like hardware failures, server issues, or human errors.",
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Third-Party Integration Support",
				body: "Shopify offers a variety of APIs and tools to support third-party integrations for maintenance services. However, our team will find the best third-party integration to improve your store's functionality, including robust payment getaways, CRM systems, etc. The Shopify API documentation can also guide developers in creating custom integrations that match your current market needs while performing maintenance service.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "24/7 Technical Support",
				body: "Our team is available 24/7 for your support and assistance on any issues regarding the Shopify e-commerce product and store configuration. Be assured of getting continuous updates and information from our team regarding your problems, whether resolving a bug, technical glitch, or additional features to implement in your online store.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Expert Shopify Maintenance For a",
		title: "Range of Industries",
		items: [
			{
				icon: "/assets/icons/marketplace.svg",
				title: "Wholesale and Retail",
				body: "Wholesale and retail eCommerce stores need efficient performance with seamless B2B/B2C transactions. Thus, as a part of Shopify maintenance services, these stores need check-out and payment flow optimization. If there are high product counts or product catalogues, then store performance needs to be optimized.",
			},
			{
				icon: "/assets/icons/home.svg",
				title: "Home Decor and Furniture",
				body: "Home decor and furniture stores depend upon powerful visualizations through images, videos, 360-degree visualization, and product descriptions. To ensure seamless performance, the visuals need to be optimized, and content needs to be updated as per seasonal promotions and campaigns.",
			},
			{
				icon: "/assets/icons/healthcare.svg",
				title: "Health and Beauty",
				body: "The health and beauty eCommerce stores rely on trust, compliance, and recurring purchases. Hence, as a part of maintenance services, our team tries to keep all the product reviews and testimonials updated and visible. We work on SEO optimization to improve your ranking on products and also work off-site SEO to build credibility and gain necessary exposure.",
			},
			{
				icon: "/assets/icons/fashion.svg",
				title: "Fashion",
				body: "The Fashion stores need to maintain a dynamic and visually appealing layout with smooth check-out experiences. We monitor and maintain the website such that the website doesn't crash during the flash sales or limited edition drops. We simplify the workflow of returns and exchange management, providing an easy product exchange experience to customers.",
			},
			{
				icon: "/assets/icons/fitness.svg",
				title: "Sports/Fitness",
				body: "Sports and Fitness websites require frequent updates and optimization to handle a range of product variations, memberships, and subscription-based purchases. Our Shopify maintenance team not only fixes the technical issues, but we continuously work on the website's SEO to ensure it attracts organic traffic. This is critical to make your website visible to the right audience which drives your sales and profitability.",
			},
			{
				icon: "/assets/icons/transport.svg",
				title: "Automotive",
				body: "Whether a B2B or B2C automotive brand, Shopify maintenance services can help in resolving small technical glitches and issues. From fixing theme layout misalignment problems to broken links, our team is available 24/7 to help you keep your website up and running with a high uptime.",
			},
			{
				icon: "/assets/icons/jewelry.svg",
				title: "Jewelry",
				body: "A website gives the jewelry businesses an opportunity to present their brand and products to the digital audience. Shopify maintenance services help in optimizing the information architecture to make it easier for visitors to find what they are looking for and optimize the product description pages for faster performance.",
			},
			{
				icon: "/assets/icons/drink-beverage.svg",
				title: "Food/Beverage",
				body: "Food/Beverage websites need to have online food-ordering features because it can increase sales by 32%. Shopify maintenance services help to ensure a fast-loading page because no one like waiting, especially when it comes to food. The team works on improvising the check-out process and securing payment to avoid any inconvenience.",
			},
		],
	},

	processStepsSecondary: {
		eyebrow: "Hiring Made Simple - IceCube Digital Experts",
		title: "At Your Service",
		subtitle: [
			[
				"As the leading ",
				{ text: "Shopify e-commerce development company", href: "/shopify-development-services/" },
				", we have an easy and smooth process to connect and hire with our experts. Here's how you can share your requirements:",
			],
		],
		steps: [
			{
				title: "Send Us Your Requirements",
				body: [
					"Email us at ",
					{ text: "hello@icecubedigital.com", href: "mailto:hello@icecubedigital.com" },
					" about your Shopify support and maintenance requirements. You can also use the contact form at the bottom of the page.",
				],
			},
			{
				title: "Schedule an Appointment",
				body: "Our experts will thoroughly analyze your requirements and get back to you to schedule a meeting to discuss the requirements or problems in detail. You can expect the reply within 1-2 business days, and our experts will suggest the most effective roadmap to support and maintain your Shopify store.",
			},
			{
				title: "Select a Shopify Support Package",
				body: "We will share an estimated deadline to fulfill your requirements based on your requirements and our analysis. You can then choose the package that best suits your business requirement.",
			},
			{
				title: "Confidentiality Agreement and Internal Team Signature",
				body: "To ensure the privacy and security of your Shopify store, we'll request you to sign a Non-Disclosure Agreement (NDA). Our team also goes through the extensive onboarding process to fully understand your requirements and align the team members who are best suited to cater to your needs.",
			},
		],
	},

	imageText: {
		eyebrow: "Our Flexible",
		title: "Hiring Models",
		image: "/assets/photos/shopify-maintenance-fixed-price.png",
		imageAlt: "Fixed price hiring model for Shopify maintenance",
		contentTitle: "Fixed Price Model",
		blocks: [
			{ text: "In the Fixed pricing model, the contract is prepared on the estimate of the amount of work/services to be performed for Shopify store maintenance. The project requirements are outlined to define the scope of work, and the resources are allocated accordingly to meet the scope. We are flexible in carrying out out-of-scope work, but it will incur additional charges." },
			{
				type: "ul",
				items: [
					"Finalized pricing helps in ensuring maintenance within budget.",
					"Little to no management is required because our team will handle everything.",
					"Low or no risk approach for both service provider and customer because cost and scope are predetermined.",
				],
			},
			{ text: "It is suitable for when you know what needs to be done. Small projects with limited features, fixed deadlines, tight budgets, and clear scope." },
		],
	},

	imageTextSecondary: {
		image: "/assets/photos/shopify-maintenance-hourly.png",
		imageAlt: "Hourly hiring model for Shopify maintenance",
		imagePosition: "right",
		contentTitle: "Hourly Model",
		blocks: [
			{ text: "The hourly model is suitable for projects where the requirements are constantly changing. As the name suggests, the pricing depends upon the resources involved in completing the work allocated throughout the maintenance period. Hourly, daily, weekly and monthly charges will be added, providing flexibility in terms of payment." },
			{
				type: "ul",
				items: [
					"You are charged on the basis of per hour.",
					"A transparent model where you will only pay for the amount of work done and hours allocated by resources.",
					"The model is flexible as it allows for new requests to be accommodated easily, as compared to fixed pricing.",
				],
			},
			{ text: "It is suitable for Shopify stores where the maintenance requirements aren't clear and or a lot of flexibility is required. This model fits projects with long-term changing requirements." },
		],
	},

	imageTextTertiary: {
		image: "/assets/photos/shopify-maintenance-dedicated.png",
		imageAlt: "Dedicated hiring model for Shopify maintenance",
		contentTitle: "Dedicated Hiring",
		blocks: [
			{ text: "Dedicated hiring, as the name suggests, means hiring Shopify developers to focus solely on your eCommerce store. It is suitable in cases when you want to extend the capabilities of your team and fill the gaps to complete your team. You will have total control over the resources, procedures, and processes, which is a flexibility that projects with varied schedules and productivity demands." },
			{
				type: "ul",
				items: [
					"You can conduct interviews with the Shopify developers to see if they meet your needs.",
					"Monthly, quarterly, six-month, or yearly billing, as per your needs.",
					"With total control, your team can assign the developers the tasks, and with daily timesheet reporting, you can monitor productivity.",
				],
			},
			{ text: "It is suitable for projects that require a long-term commitment and high levels of control and transparency." },
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Why Shopify Website Maintenance",
		title: "Services Matter?",
		items: [
			{
				icon: "/assets/icons/wallet.svg",
				title: "Better Shopping Experience For Customers",
				body: "Maintaining your Shopify store guarantees that visitors may browse uninterrupted. People are more likely to buy from you if your site is easier to use. This is because they will stay longer and find what they need.",
			},
			{
				icon: "/assets/icons/minicart-fill.svg",
				title: "Lower The Number of Cart Abandonments and Bounces",
				body: "A site that works well has fewer problems when you're shopping or just looking around. Customers are less likely to leave in the middle of a buy when the site works smoothly. This increases overall sales and customer retention.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Improved SEO Rankings",
				body: "Search engines favor websites that are well-maintained, fast, and secure. Regularly updating your Shopify store ensures it remains aligned with the latest SEO standards, helping to boost your rankings and make your business more visible to potential customers.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Increased Website Security",
				body: "Routine updates and security checks are critical to safeguarding your store from cyber threats. Maintenance keeps vulnerabilities in check, protecting customer data and building trust, which is essential for retaining loyal customers and maintaining a strong reputation.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Boosted Site Speed And Performance",
				body: "Optimizing your Shopify store ensures faster loading times, which is vital for keeping visitors engaged. A well-maintained website delivers a better user experience, prevents frustration, and can even improve your search rankings due to better performance metrics.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "Strengthened Brand Awareness and Trust",
				body: "When your Shopify store is regularly maintained, customers view your brand as professional and reliable. By providing a seamless experience, you build trust, increase loyalty, and reinforce your brand's reputation as a trustworthy and efficient business",
			},
		],
	},

	leftIconBoxTertiary: {
		eyebrow: "Why is IceCube Digital Your Go-To Shopify",
		title: "Maintenance Partner?",
		subtitle: "Icecube Digital is one of the leading experts in providing the most comprehensive Shopify website maintenance services and solutions. We have a team of certified and experienced experts who deliver excellent results. Here are some reasons why we are a perfect fit for you:",
		items: [
			{
				icon: "/assets/icons/user-round.svg",
				title: "Extensive Experience",
				body: "We've been a Shopify partner with an expert Shopify design and development team since we entered the industry. We have many years of experience as shopify developers and expertise in providing high-quality services to companies in various sectors.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Regular On-Site Audits",
				body: "Shopify maintenance experts perform regular and frequent shopify site maintenance and audits as part of Shopify's maintenance services. We identify minor issues that interfere with store operations and fix them before severe damage occurs.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Site Monitoring",
				body: "Site monitoring is a crucial part of our service, where we assess the ongoing health, performance, and security of your e-commerce platform. It will equip our experts with knowledge about the potential problems that might arise in the future, and we'll take preventive steps to avoid the possibility.",
			},
			{
				icon: "/assets/icons/payment-cycle.svg",
				title: "Cost Effective",
				body: "A maintenance plan can be more cost-effective than fixing problems as they occur. It will help prevent significant problems that will cost more to fix. We provide a flexible payment gateway and engagement framework.",
			},
			{
				icon: "/assets/icons/hand-support.svg",
				title: "Professional Advice and Support",
				body: "Our group of Shopify experts can help you stay on top of trends or development related to Shopify. It allows you to take advantage of the latest features.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Platform Migration Solution",
				body: "Streamline your website migration process with our professional services that ensure a smooth transition to a Shopify Online Store 2.0.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "Prompt Action and Quick Response",
				body: "Our team is always ready to solve any problems that prevent your site from working. Any problems you may have will be solved as soon as possible.",
			},
		],
	},

	processSteps: {
		eyebrow: "How Our Shopify Maintenance",
		title: "Agency Works?",
		columns: 2,
		ctaLabel: "Schedule a Meeting Today",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
		steps: [
			{
				title: "Initial Project Analysis",
				body: "We begin by thoroughly analyzing your Shopify store to understand its current setup, functionality, and areas for improvement. This helps us create a clear roadmap tailored to your specific needs.",
			},
			{
				title: "Customized Support Plans",
				body: "Every business is unique, so we craft a support plan that aligns with your store's requirements. Whether it's regular updates, security checks, or performance optimization, we ensure the plan fits your goals.",
			},
			{
				title: "Setup Stage",
				body: "Once the support plan is ready, we move into the setup phase, implementing necessary updates, improvements, and configurations to ensure your store is operating at its best right from the start.",
			},
			{
				title: "Regular Monitoring and Maintenance",
				body: "Our team monitors your Shopify store consistently to catch any issues early. We handle updates and general maintenance to keep the site running smoothly and efficiently without interruption to your business.",
			},
			{
				title: "Testing and Fixing Problems",
				body: "We run tests regularly to detect any bugs or glitches. When problems arise, they're promptly addressed and fixed to ensure minimal disruption to your store's performance and user experience.",
			},
			{
				title: "Tracking Performance",
				body: "We keep a close eye on your store's performance metrics, tracking everything from page load speeds to sales funnel effectiveness. This data helps us identify areas where we can make further improvements.",
			},
			{
				title: "Ongoing Support",
				body: [
					"Our job doesn't end after initial setup. When you ",
					{ text: "hire Shopify developer", href: "/hire-shopify-developers-experts/" },
					", we provide ongoing support to address any future needs, updates, or changes, ensuring your store stays optimized and continues to meet your business objectives.",
				],
			},
		],
	},

	cta: {
		text: "Keep Your Shopify Store Running Smoothly With Expert Maintenance and Support. Contact Us Today!",
		ctaLabel: "Contact Us Today For a Free Consultation",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	tablePricingPlans: {
		eyebrow: "Shopify",
		title: "Maintenance Packages",
		btnArrow: BTN_ARROW,
		features: [
			"Monthly Retainer",
			"Support",
			"Bug Fixes",
			"Theme Updates",
			"App Integrations",
			"Speed Optimization",
			"SEO Improvements",
			"Backup & Security",
			"Performance Reports",
			"Custom Development",
			"Development Cost",
			"Account Manager",
		],
		plans: [
			{
				name: "Standard",
				price: "499",
				period: "month",
				ctaLabel: "Buy Now",
				ctaHref: "#",
				values: [
					"20 Hours",
					"Email Support",
					"Basic Fixes",
					"Quarterly",
					"Limited",
					"Basic",
					"Basic",
					"Weekly Backups",
					"Monthly",
					"3 Hour",
					"20% off",
					"Not Included",
				],
			},
			{
				name: "Premium",
				price: "999",
				period: "month",
				ctaLabel: "Buy Now",
				ctaHref: "#",
				values: [
					"40 Hours",
					"Priority Email & Chat Support",
					"Advanced Fixes",
					"Monthly",
					"Up to 5 Apps",
					"Advanced",
					"Advanced",
					"Daily Backups",
					"Bi-Weekly",
					"Up to 10 Hours",
					"30% off",
					"Personal Account Manager",
				],
			},
			{
				name: "Platinum",
				price: "2499",
				period: "month",
				ctaLabel: "Buy Now",
				ctaHref: "#",
				values: [
					"100 Hours",
					"24/7 Priority Support (Email, Chat & Call)",
					"Unlimited Fixes",
					"On Demand",
					"Unlimited",
					"Full Optimization",
					"Comprehensive",
					"Real-Time Backups",
					"Weekly",
					"Up to 20 Hour",
					"40% off",
					"Dedicated Account Manager",
				],
			},
		],
	},

	information: {
		eyebrow: "Your Guide To Shopify",
		title: "Store Maintenance",
		cards: [
			{
				title: "Introduction to Shopify Store Maintenance",
				blocks: [
					{ text: "Shopify website maintenance keeps your store running at its best. It involves regularly updating themes, fixing plugins, and ensuring payment systems work without a hitch. Sometimes it's about speeding up your site, other times it's about fixing bugs or security issues. When maintenance is consistent, problems don't build up, and your store remains smooth and efficient. This ongoing care ensures your site stays ready for customers and helps prevent downtime. By staying on top of these tasks, you can focus on growing your business, confident that your Shopify store is always performing well." },
				],
			},
			{
				title: "Shopify Maintenance Mode: How Does it Work?",
				blocks: [
					{ text: "Shopify Maintenance Mode is a feature that allows you to temporarily take your store offline while you make updates or changes. During this time, visitors will see a custom maintenance page instead of your live store. This feature is useful when performing tasks like theme updates, plugin installations, or fixing bugs. It helps prevent disruptions in the user experience while you work on improving your store behind the scenes. Once your updates are complete, you can quickly switch your store back to live mode, ensuring minimal downtime and a smooth transition for your customers." },
				],
			},
			{
				title: "Key Components of Shopify Maintenance",
				blocks: [
					{ text: "The key components of Shopify maintenance cover several crucial aspects to ensure your store operates smoothly and remains secure. Regular theme updates are essential to improve performance and integrate new features. Keeping apps and plugins up to date is another critical element to avoid compatibility issues and security vulnerabilities." },
					{ text: "Another major component is security monitoring, which helps detect and address potential threats before they affect your store. Backing up data regularly is also important to protect your information in case of technical problems. Performance optimization, such as improving site speed and reducing load times, ensures a better user experience." },
					{ text: "Payment gateway maintenance is another key aspect, ensuring that transactions process smoothly without interruptions. Lastly, routine checks on SEO settings and store analytics help maintain search engine visibility and monitor performance metrics. These components together keep your Shopify store running efficiently, minimizing downtime, and providing a seamless shopping experience for customers." },
				],
			},
			{
				title: "Development vs. Maintenance: What's the Difference?",
				blocks: [
					{ text: "Development focuses on building and launching your Shopify store, while maintenance is about ensuring its ongoing success. Development is the initial creation, while Shopify maintenance services involve regular updates, bug fixes, and performance enhancements. After the store is live, maintenance ensures everything continues to run smoothly. Both are essential for the long-term health of your eCommerce business, with development laying the foundation and maintenance keeping it strong." },
				],
			},
			{
				title: "Shopify Store Maintenance Best Practices",
				listItems: [
					{ title: "Regular Software Updates", parts: ["Regularly updating your Shopify store's software, including themes and apps, is crucial to maintaining performance, fixing bugs, and ensuring compatibility with new features. Timely updates prevent issues that could disrupt the functionality of your store."] },
					{ title: "Site Security and Protection", parts: ["Ensuring site security is essential for protecting customer data and preventing cyberattacks. Implement SSL certificates, monitor security logs, and use two-factor authentication to safeguard sensitive information and maintain a secure shopping environment."] },
					{ title: "Content Management and Updates", parts: ["Keeping your store's content fresh and relevant is vital for engagement. Regularly update product descriptions, images, and blogs to ensure they align with current trends and customer expectations, driving better interaction and conversions."] },
					{ title: "SEO Monitoring", parts: ["Monitoring SEO ensures that your store maintains visibility in search engine rankings. Regularly review and update meta tags, keywords, and product descriptions to keep up with changes in search algorithms and improve organic traffic."] },
					{ title: "Hosting Services", parts: ["Reliable hosting is key to ensuring your store is always accessible to customers. Regularly review your hosting plan to ensure it meets your store's needs in terms of traffic, storage, and performance without causing downtime."] },
					{ title: "Third-Party Integrations", parts: ["Third-party apps and integrations help extend your store's functionality, but they need regular updates and monitoring to prevent compatibility issues. Ensure they work smoothly with your Shopify store to maintain a seamless experience."] },
					{ title: "Performance Optimization", parts: ["Optimizing your site's speed and load times is essential for a positive customer experience. Regularly check for slow-loading pages, compress images, and optimize code to keep your store running quickly and efficiently."] },
					{ title: "Compliance with Regulations", parts: ["Staying compliant with privacy laws, tax regulations, and accessibility standards is essential. Regularly review and update your store's policies to align with current regulations, protecting your business from legal issues and ensuring customer trust."] },
				],
			},
			{
				title: "Post-Launch Development Support",
				blocks: [
					{ text: "The work doesn't stop after the store goes live. Post-launch development support is critical for keeping your Shopify store running at its best. This involves ongoing maintenance, security updates, and feature enhancements. Our Shopify maintenance services ensure that your store evolves with your business, with regular support to address new needs, add features, and fix any issues that might arise. This ongoing support is essential for sustaining your store's success in a competitive market." },
				],
			},
		],
	},

	faq: {
		eyebrow: "Shopify",
		title: "Maintenance FAQs",
		items: [
			{
				question: "What problems can Shopify support help you solve?",
				answer: "There are many problems that IceCube Digital experts can help to solve, from slow website speed and sudden downtime to various minor but frustrating website issues, security issues, damage caused by cyber attacks, and low conversion rates.",
			},
			{
				question: "What is Shopify's Maintenance Plan?",
				answer: "A Shopify maintenance plan is an ongoing service package that keeps your store secure, fast, and up to date. It typically covers theme and app updates, bug fixes, security monitoring, data backups, performance optimization, and technical support — handled proactively so your store keeps running smoothly without interruptions.",
			},
			{
				question: "How much is the cost of Shopify's Maintenance and Support?",
				answer: "Costs depend on your store's size, complexity, and the level of support you need. We offer flexible packages — including hourly, fixed, and dedicated models — starting at $499/month. Contact us with your requirements and we'll provide a transparent, custom quote.",
			},
			{
				question: "What Types of Site Changes Can I Request?",
				answer: "You can request a wide range of changes — theme and design tweaks, new sections or pages, banner and content updates, app installations and configurations, bug fixes, speed and SEO improvements, checkout customizations, and third-party integrations. Just share your requirements and our team will scope and implement them.",
			},
			{
				question: "What About Updates to the Shopify App and Features?",
				answer: "We manage updates for your apps, themes, and Shopify features, testing each one for compatibility — especially around Shopify's quarterly releases. This prevents broken functionality, security gaps, and conflicts, keeping your store stable and current.",
			},
			{
				question: "How do Shopify Maintenance Services Help in Improving Store Speed and Performance?",
				answer: "We optimize images, minify and clean up code, streamline apps and scripts, and improve theme structure to boost Core Web Vitals and reduce load times. Faster pages keep visitors engaged, lower bounce rates, and can even improve your search rankings.",
			},
			{
				question: "What are the Factors that Affect the Shopify Site's Performance?",
				answer: "Common factors include unoptimized images, heavy or conflicting apps, bloated theme code, excessive third-party scripts, large product catalogs, and outdated configurations. Our maintenance service audits and addresses each of these to keep your store fast and reliable.",
			},
			{
				question: "What are the updates that happen during Shopify Maintenance?",
				answer: "Maintenance updates include theme and app updates, security patches, bug fixes, content and banner refreshes, performance and SEO improvements, data backups, and integration checks — all done proactively to keep your store secure, current, and performing well.",
			},
			{
				question: "How can the security of my Shopify store be improved?",
				answer: "We strengthen security with SSL enforcement, two-factor authentication, access controls, regular security monitoring, automated backups, and timely updates. We also review apps and integrations for vulnerabilities, helping protect customer data and keep your store compliant.",
			},
			{
				question: "How Responsive is your Customer Support Team?",
				answer: "Our team provides 24/7 support and responds promptly to your queries. For urgent issues we act immediately to minimize downtime, and for planned work we keep you updated throughout. Dedicated plans also include a single point of contact for faster, more personal communication.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default ShopifyMaintenance;
