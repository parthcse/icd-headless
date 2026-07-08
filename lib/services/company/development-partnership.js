const BTN_ARROW =
	"M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const DevelopmentPartnership = {
	slug: "development-partnership",
	pageTitle: "Web Development Partnership | Magento Development Partnership",
	metaDescription:
		"Icecube Digital's partnership program offers individuals and companies a great opportunity to extend their business growth. Hire full-time or part-time certified Magento developers, WordPress developers, and mobile app developers to complete your customer projects on time with the best turnaround. Contact us now!",

	simpleBanner: {
		heading: "Development Partnership",
		paragraphs: ["Together we Can"],
	},

	getQuote: true,

	plainText: {
		title: "Development Partnership",
		paragraphs: [
			[
				"If you are a web design or marketing company and do not have in-house resources to complete your customer projects effectively and on time without compromising the quality of the work, we can help. We have experience working with other web design and marketing agencies to help them complete their customer projects on time with the best turnaround. We are a reliable partner for any web design, development, and mobile app development needs of any web agency. We can work silently without disclosing the fact that we are working on the project on your behalf. We can support you starting from the initial project planning phase through the final launch and regular support and ",
				{ text: "website maintenance", href: "/website-maintenance-service/" },
				" of your customer projects.",
			],
			"Some of our agency partners use us for a lot of their ongoing development needs, and they never felt the need to hire in-house developers, since this mode of operation is very cost-effective for them. We always deliver quality work, on time.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		columns: 3,
		items: [
			{
				icon: "/assets/icons/lock.svg",
				title: "NDA",
				body: "We sign and strictly follow an NDA to maintain the privacy of your projects. We will not put it in our portfolio and will keep quiet about it. It’s your project, your code, and your customer.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Quality Code",
				body: "We either do it the best or we clearly say no, but we never compromise on the quality of the work we do. We follow all the coding standards so that it is easy for you to upgrade in the future or make any changes required.",
			},
			{
				icon: "/assets/icons/timer.svg",
				title: "On Time Delivery",
				body: "We do the required groundwork when scoping a project and estimating the time, so we know the requirements in and out to complete the project on time. With a realistic deadline and an itemized estimation for all the milestones, we will make sure that you won’t let your customers down.",
			},
		],
	},

	milestone: milestoneSection,

	leftIconBox: {
		eyebrow: "Why To",
		title: "Choose Us?",
		columns: 2,
		items: [
			{
				icon: "/assets/icons/user-time.svg",
				title: "Years of Experience",
				body: "We have been delivering robust websites for more than 14 years now, and we have created a reputation of trust with our valuable customers.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Best Keyword Ranking",
				body: "We build all our websites specific to your business needs, so you will find much less code than in pre-made templates. This makes your website load fast, more search-engine-friendly, and easy to manage.",
			},
			{
				icon: "/assets/icons/hand-support.svg",
				title: "Excellent Support",
				body: "Our job does not end when we complete the design and development of your website. We provide round-the-clock support for any critical breakdown to make sure that your website is serving your customers well all the time.",
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Customer Satisfaction",
				body: "We don’t just talk about customer satisfaction, but we really mean it. Yes, we really do. Customer satisfaction is at the center of everything that we do.",
			},
		],
	},

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default DevelopmentPartnership;
