const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import ourClientsSection from "../common-section/our-clients-section";

/** @type {import('../index').ServiceData} */
const WhyWorkWithUs = {
	slug: "why-work-with-us",
	pageTitle: "Why Work With Us | Web Design and Development Company",
	metaDescription: "IceCube Digital is an award winning company with proven track records of delivering eCommerce web design, development, SEO and mobile app development services. Here are the number of reasons that set us apart from other web agencies. To know more, Please email us at hello@icecubedigital.com",

	simpleBanner: {
		heading: "Why Work With Us",
	},

	imageText: {
		eyebrow: "Customer Happiness Is",
		title: "Our End Goal",
		image: "/assets/photos/goodfirm-logo-why-us.png",
		imageAlt: "Goodfirm Logo",
		imagePosition: "right",
		paragraphs: [
			[
				"We dedicate all our time in helping our customers to solve their problems and grow their online business with our years of experience in delivering result driven eCommerce websites, mobile apps & SEO. We are a young company but we think Big & always try to go the extra mile to make our customers happy. Customer happiness is the end goal at Icecube Digital & here is the proof that we are going in the right direction. We have won highest numbers of positive customer reviews on customer review and research platform – ",
				{ text: "goodfirms.co", href: "https://www.goodfirms.co/company/icecube-digital" },
			],
		],
		ctaLabel: "Get a Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	plainText: {
		eyebrow: "We Care For Our",
		title: "Customers And Our Team",
		contentAlign: "center",
		paragraphs: [
			"Keeping customers happy is our biggest asset as a business and we work hard to make this happen. We really care about our customers and our team members. We do great work but don’t take our word for it. Check what our customers are saying who have been working with us for years.",
		],
		ctaLabel: "View All Testimonials",
		ctaHref: "/client-testimonials/",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "Reasons To",
		title: "Choose Us",
		columns: 3,
		items: [
			{ icon: "/assets/icons/why-us-magento-solution-partner.jpeg" },
			{ icon: "/assets/icons/why-us-magento-certified-developers.png" },
			{ icon: "/assets/icons/why-us-woocommerce-expert.png" },
			{ icon: "/assets/icons/why-us-goodfirms.png" },
			{ icon: "/assets/icons/why-us-google-adwords-certified.jpeg" },
			{ icon: "/assets/icons/why-us-google-analytics-certified.jpeg" },
		],
	},

	topIconBoxSecondary: {
		columns: 3,
		items: [
			{
				icon: "/assets/icons/why-us-powerful-team.png",
				title: "We are a powerful team & We really love what we do.",
			},
			{
				icon: "/assets/icons/why-us-listen.png",
				title: "We listen to understand your needs in and out",
			},
			{
				icon: "/assets/icons/why-us-discuss-solutions.png",
				title: "We discuss best solutions based on our experience",
			},
			{
				icon: "/assets/icons/why-us-communicate.png",
				title: "We communicate well at all levels of Project",
			},
			{
				icon: "/assets/icons/why-us-feedback.png",
				title: "We take feedback to ensure customer satisfaction",
			},
			{
				icon: "/assets/icons/why-us-work-with-heart.png",
				title: "We work more with heart so our customers are always happy",
			},
		],
	},

	milestone: milestoneSection,

	getQuote: true,

	ourClients: ourClientsSection,

	weServe: true,
};

export default WhyWorkWithUs;
