const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../../common-section/milestone-section";
import achievementsSection from "../../common-section/achievements-section";
import ourClientsSection from "../../common-section/our-clients-section";
import ceoCtaSection from "../../common-section/ceo-cta-section";

/** @type {import('../../index').ServiceData} */
const WhyMyWebsiteIsntConverting = {
	slug: "why-my-website-isnt-converting",
	pageTitle: "Why My Website Isn't Converting? 5 Common Mistakes & Fixes",
	metaDescription: "Your website isn't converting? Here are 5 reasons why your conversion rate is low. Icecube Digital can help boost your leads and sales. Learn more!",

	banner: {
		heading: "Why My Website Isn't Converting: 5 Reasons Your Conversion Rate Is Low",
		paragraphs: [
			"A website is a medium to convert visitors into customers, but low conversion rates mean there is a problem. Some may talk about slow load time; others talk about user experience and call-to-action. Without proper optimization, traffic to your website could mean nothing in conversion. Shopify SEO services will help to optimize your rankings and send leads worth pursuing.",
			"Businesses fail to convert customers owing to poor SEO optimization, bad calls to action or CTAs, or obsolete strategies. As the best SEO company, we have the expertise in solving all the problems to remove the obstacles that affects the conversion.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Or Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	getQuote: true,

	plainText: {
		eyebrow: "Ready to Boost Your Site's",
		title: "Conversion Rate?",
		contentAlign: "center",
		paragraphs: [
			[
				"If your website is failing to convert visitors into customers, something has to change. Long load times, ineffective CTAs, and lacking SEO are all putting sales at risk. An expert in Shopify SEO Services will optimize your site for more traffic, interaction, and conversions. Whether it's technical amendments to SEO, content revisions, or a complete overhaul of strategy, the ",
				{ text: "Best SEO Company", href: "/seo-search-engine-optimization/" },
				" is well-equipped to assist. Do not let low conversions hold you back. Step up and make the necessary changes so that your site can work as a sales engine for you.",
			],
		],
		ctaLabel: "Request a free quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "5 Common Reasons for Low Conversion Rates - How Our Experts",
		title: "Solve Them!",
		steps: [
			{
				title: "You're Not Optimizing for Every Stage of the Conversion Funnel",
				body: [
					"Not every visitor is ready to buy the moment they land on your site. Some are just browsing, while others are comparing options. If your website does not cater to all these stages of the buyer's journey, you miss great opportunities for conversion. Our ",
					{ text: "Shopify SEO service", href: "/shopify-seo-service/" },
					" expert help structure it so that the content has been prepared for each funnel stage and guides the user seamlessly toward maximum conversions. Here's what we do to optimize for all funnel stages:",
				],
				bodyList: [
					[{ bold: "Top of the funnel (Awareness):" }, " Work on educational content like blogs, videos, and guides to attract visitors."],
					[{ bold: "Middle of the funnel (Consideration):" }, " Create case studies, product comparisons, and testimonials to build trust."],
					[{ bold: "Bottom of the funnel (Decision):" }, " Optimize checkout pages, simplify the buying process, and use strong CTAs."],
				],
			},
			{
				title: "Your CTAs Are Too Similar or Missing Entirely",
				body: "Missing or weak call-to-actions confuse the visitors. They may like your content but they may not have any idea of what steps to take next or where to go. Methods like “Learn More” or “Click Here” do not generate any presence in the minds of the audience and do little to guide one's journey. An SEO agency analyzes the performance and placement of CTAs and thus optimizes them for pertinent conversion rates, which makes them the best SEO company. Here's what we to do improve CTAs:",
				bodyList: [
					"Use action-driven phrases like “Get Your Free Trial” or “Claim Your Discount Now.”",
					"Place CTAs strategically—above the fold, within content, and at the end of blog posts.",
					"Make CTAs stand out with contrasting colors and compelling copy, and test different CTA styles (buttons, pop-ups, sticky bars) to see what converts best.",
				],
			},
			{
				title: "You're Not Keeping Up with the Latest Trends",
				body: "Conversions will drop if your site still utilizes outdated approaches such as keyword stuffing and generic email campaigns. Consumers today want personalized, fun, and fast experiences. The best SEO company is aware of all the trends specific to industries like Jewelry, Healthcare, Retail, etc. This will help you increase the engagement level of your target audience by implementing the trends in your website. Here's what we do:",
				bodyList: [
					"Optimize for voice search with conversational keywords.",
					"Implement chatbots and live chat for instant customer support.",
					"Leverage short-form video content to engage users.",
				],
			},
			{
				title: "You're Not Leveraging SEO Effectively",
				body: "A well-optimized site attracts the correct audience. If your pages rank for irrelevant or low-value keywords, you'll generate traffic without conversions. SEO is not just about establishing ranking; it's about establishing buyers. Our Shopify SEO services will ensure that your brand gets the limelight and that the SEO optimization efforts translate into relevant traffic converting into sales. Here's our strategy to optimize SEO for conversions:",
				bodyList: [
					"Optimize meta titles and descriptions to match search intent.",
					"Improve internal linking to guide visitors through the site.",
					"Speed up page loading time to reduce bounce rates.",
				],
			},
			{
				title: "I Just Launched My Website, and It's Not Converting",
				body: [
					"Lack of trust, visibility, or message clarity is usually what affects the conversion rate of new sites. Users need time to familiarize themselves with your brand. Also, a newly launched website needs time to perform on Google, rank SERPs, and gain the attention of users. Even a recently implemented SEO strategy takes 5-6 months to give the output. So, it is recommended to take some breaths and relax. You can ",
					{ text: "hire SEO experts", href: "/hire-seo-experts/" },
					" who can optimize the website for SEO to drive traffic and conversions with sustained momentum. Here's what our experts do in Shopify SEO services:",
				],
				bodyList: [
					"Invest in high-quality content to establish authority.",
					"Use social proof, such as reviews and testimonials, to build credibility.",
					"Run paid ads to drive initial traffic while SEO efforts gain traction.",
				],
			},
		],
	},

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "christian-marcello",
	},

	achievements: achievementsSection,

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default WhyMyWebsiteIsntConverting;
