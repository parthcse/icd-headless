const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../../common-section/milestone-section";
import achievementsSection from "../../common-section/achievements-section";
import ourClientsSection from "../../common-section/our-clients-section";
import ceoCtaSection from "../../common-section/ceo-cta-section";

/** @type {import('../../index').ServiceData} */
const WhyMyWebsiteIsntDrivingLeads = {
	slug: "why-my-website-isnt-driving-leads",
	pageTitle: "Why My Website Isn't Driving Leads & How to Fix It?",
	metaDescription: "Icecube Digital shares key reasons why your website isn't driving leads and how to fix it. Improve your site's performance today with expert tips.",

	banner: {
		heading: "Why My Website Isn't Driving Leads (& How to Fix It!)",
		paragraphs: [
			"There can be many reasons behind your website not bringing in leads, from technical to on-page or off-page SEO-related issues. Several factors inhibit conversions: poor optimization, uninteresting content, or simple weak CTAs. The WordPress SEO services include SEO audit where the experts analyze your existing website to identify the existing disparities. Then, the team works on them to make your website rank on Google.",
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
		eyebrow: "Transform your Website into a Powerful Lead",
		title: "Generation Tool",
		contentAlign: "center",
		paragraphs: [
			[
				"Would you like to convert your website into a lead-generation machine? In any case, a badly optimized site will not get you one; with a ",
				{ text: "WordPress SEO service", href: "/wordpress-seo-service/" },
				" in the hands of experts, you may expect more in search rankings, engagement, and conversions. From keyword optimization to delivering a seamless user experience, we ensure that your site attracts visitors and converts them. Do not settle for a few leads-optimize now and watch the growth of your business!",
			],
		],
		ctaLabel: "Request a free quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "Website Issues That Impact Lead Generation and",
		title: "How to Solve Them",
		subtitle: [
			"An experienced SEO team can help in optimizing your site by resolving the common issues:",
		],
		steps: [
			{
				title: "Poor SEO Strategy",
				body: "A weak SEO is one of the biggest reasons that your site is not generating leads. If your site does not rank for the right keywords or is not optimized for search intent, your potential customers will not find you. Yet many businesses focus on generic keywords instead of looking for terms that attract high-intent users. To fix this, here's how we work:",
				bodyList: [
					"Perform keyword analysis as per your business and competitors.",
					"Understand the gaps using Google Search Console, SEMrush, etc.",
					["Analyze what type of SEO services will be required, like ", { text: "local SEO", href: "/local-seo-services/" }, " or negative SEO"],
				],
				bodyAfter: "The better the SEO foundation, the more visibility and quality traffic that converts will come on board.",
			},
			{
				title: "Slow Website Speed",
				body: "Slow-loading websites make visitors leave the page before their eyes even behold your offerings. 40% of the users tend to leave a website that takes more than 3 seconds to load, and this, in turn, raises the bounce rate and lowers the conversion. This speed also impacts the search ranking as Google favors fast-loading sites, and hence slow loading adds to the pain of traffic and lead generation. Here's how our WordPress SEO experts fix this:",
				bodyList: [
					"Evaluate the website speed using Google PageSpeed Insights.",
					"Reduce the size of your images, adopting lazy loading for faster performance of the page.",
					"Eliminate unnecessary use of plugins, enable browser caching, and upgrade your hosting package if needed.",
				],
				bodyAfter: "A quick recovery website will not only enhance user experience but will give a good boost in engagement and conversions, thus eventually turning visitors into leads.",
			},
			{
				title: "Unoptimized Forms That Fail to Convert",
				body: "Website forms do much for generating leads, and if difficult, overly extensive, or poorly placed, they won't be filled out by the visitors. Asking for too much information, unclear instructions, and poor placement will scare away potential leads. Here's how our experts optimize your forms:",
				bodyList: [
					"Keep them as simple as possible, and remove the fields that ask what's more than necessary",
					"Make the user experience easier with features such as auto-fill.",
					"Ensure the form is optimized for mobile, as most people browse from their phones.",
				],
				bodyAfter: "Adding assurance, such as testimonials or security badges, may boost user trust and willingness to complete the form. Refining the forms leads to less friction in the process of lead capture.",
			},
			{
				title: "Missing or Ineffective CTAs",
				body: "A call to action (CTA) is the most important requirement for all visitors for the next step—whether it's signing up for the newsletter, booking a consultation, or outright purchasing. Where CTAs remain bland or missing altogether, visitors draw a blank as to what should be their next action, ultimately losing you more leads. Here are the strategies that we use to improve the CTAs:",
				bodyList: [
					"The CTAs are made clear, with a call for action plus a strong visual presence.",
					"Experiment with a few CTA placements—from above the fold, interspersed within the blog content, or at pop-up opportunities analyze what works best.",
					"Create a little sense of urgency with limited-time offers to encourage the visitors to take action.",
				],
				bodyAfter: "With your strong CTAs present, the rest of the website will only work in getting visitors towards becoming leads.",
			},
			{
				title: "Content That Doesn't Resonate with the Target Audience",
				body: "Your content should attract and engage your ideal customers. If your website has no relevant, informative, or engaging content, then those visitors cannot see what you are offering as valuable. Poorly written, stale, or out-of-date content could work against your interests by driving users away from you rather than toward you. Here's what we do as a WordPress SEO agency:",
				bodyList: [
					"Create a thorough content plan with different types of content, like blog posts and case studies.",
					"Make sure to address content through storytelling and visuals that are easy to read.",
					"Ensure that your content matches what your audience is looking for.",
				],
				bodyAfter: "When the content matches the audience's intent, there is a high chance that visitors will convert to leads.",
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

export default WhyMyWebsiteIsntDrivingLeads;
