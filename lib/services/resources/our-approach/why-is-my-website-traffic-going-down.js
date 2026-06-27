const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../../common-section/milestone-section";
import achievementsSection from "../../common-section/achievements-section";
import ourClientsSection from "../../common-section/our-clients-section";
import ceoCtaSection from "../../common-section/ceo-cta-section";

/** @type {import('../../index').ServiceData} */
const WhyIsMyWebsiteTrafficGoingDown = {
	slug: "why-is-my-website-traffic-going-down",
	pageTitle: "Why Is My Website Traffic Going Down & How Do I Fix It?",
	metaDescription: "Website traffic dropping? Find out why and get expert tips from Icecube Digital to bring your visitors back. Let's fix your traffic issues today!",

	banner: {
		heading: "Why Is My Website Traffic Going Down? (And How Do I Fix It?)",
		paragraphs: [
			"If your website traffic is dropping, you're not alone. Algorithm changes can impact your visibility; so can bad SEO practices and outdated content. Technical neglect can actually worsen the situation. Developing a good strategy is the only way to get back that lost traffic. The best way to do this is to hire professional seo agency who can analyze, fix, and optimize your website for higher rankings and traffic.",
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
		eyebrow: "Recover Your Website Traffic with",
		title: "Icecube Digital",
		contentAlign: "center",
		paragraphs: [
			"Website traffic can be a serious dent in your business growth, and an avalanche drop in traffic can spell ruin. Here at Icecube Digital, we identify and fix SEO problems, improve content strategy and boost rankings for your business. Hire SEO experts to help your site regain visibility and traffic.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	processSteps: {
		eyebrow: "How to Fix a Website That's Not Appearing",
		title: "on Google?",
		subtitle: [
			"When you hire an expert SEO expert, you can leave the burden of website performance on the expert. Our experts will take the responsibility to ensure that your website not only works, but performs the best on SERPs. Our experts are trained to execute SEO optimization strategically. From conducting a thorough audit to implementing a plan that addresses the issues and meets the industry standard – we have got it all covered.",
		],
		steps: [
			{
				title: "Your Content Lacks Helpfulness",
				body: "Search engines greatly favor content that adds actionable value to its visitors. If you see a decrease in your website traffic, it may be due to shallow, non-relevant, or unengaging content. Google's Helpful Content Update rewards user-first content, as opposed to generic and stuffed with keywords, pages that cannot rank higher. Hence, if your content strategy cannot save you, get SEO experts to work on your site with useful content that engages its visitors. Here's what SEO expert will do:",
				bodyList: [
					"Analyze the specific content in question and find out whether it answers the user query.",
					"Conduct exhaustive keyword research to see what your audience is interested in.",
					"Revive the old articles, modify them with new information, and make the content easy for audiences to read.",
				],
			},
			{
				title: "Your Site Has Technical SEO Issues",
				body: [
					"Technical SEO is a valuable factor in showing off the performance of your site. If your traffic is quite low, that means the search engines are not crawling or indexing your pages correctly. ",
					{ text: "Technical SEO", href: "/technical-seo-services/" },
					" issues include broken links, slower page speed, missing meta tags, and robots.txt misconfiguration. Working with professionals can ease this, so when you hire SEO experts, they will figure out and fix the technical obstacles that impede your site's visibility and growth. Here are some strategies that experts commonly use:",
				],
				bodyList: [
					"Conduct an SEO audit using industry-standard tools, like Google Search Console or Screaming Frog.",
					"Identify and correct broken links; consider image compression for quicker website loading; check if the XML Sitemap was submitted properly.",
					"Ensure mobile compatibility because Google places priority on mobile-first indexing.",
				],
			},
			{
				title: "Your Paid Ad Campaign Has Ended",
				body: "If your website traffic has been only bought through Google Ads or some social media campaigns. So, when the campaigns end, the traffic will suddenly drop. Paid ads can bring in a large amount of visitors, but without a functioning organic traffic strategy, as soon as the ad is turned off, those numbers will drop. This is what we do to maintain traffic:",
				bodyList: [
					"Work on long-term SEO strategies, including the paid ads",
					"Invest in content marketing, optimize for organic search, and build a good backlink profile.",
					"Engage on social media, along with email marketing that can contribute towards driving consistent traffic without fully depending on paid advertising.",
				],
			},
			{
				title: "You Redesigned Your Site Without SEO Preparation",
				body: "Sometimes, the redesign of a website can also cause a sudden loss in traffic as a result of not installing the SEO best practices during this entire process. An example is changing URLs without proper redirection, deleting important pages, or changing the content structure. Here's how our team deals with the issue:",
				bodyList: [
					"Conduct a post-launch SEO audit.",
					"Check if all old URLs are redirected using 301 redirects so that link equity is preserved.",
					"Verify that your metadata, keywords, and internal links are intact.",
				],
			},
			{
				title: "A New Algorithm Update Has Been Released",
				body: [
					"Google's updates of its search algorithms are often in the hundreds, but a few can throw an entire site off balance. If your traffic has dropped suddenly, it can happen due to recently updated algorithms when search engines evaluate your site differently. Hiring an SEO expert is essential because they are aware about the recent changes, and whether the updates are regarding poor content quality, spammy backlinks, or technical SEO issues, the ",
					{ text: "hired SEO expert", href: "/hire-seo-experts/" },
					" will modify the SEO strategy accordingly. Here's how we do it:",
				],
				bodyList: [
					"Stay updated on all recent changes by Google, and make amendments to your search engine optimization strategy.",
					"For high-quality user-friendly content, better site structure, and best practices compliance.",
					"Through the regular monitoring of analytics and search performance, one will be able to react to changes in ranking almost immediately.",
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

export default WhyIsMyWebsiteTrafficGoingDown;
