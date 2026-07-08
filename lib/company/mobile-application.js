const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../services/common-section/milestone-section";
import ourClientsSection from "../services/common-section/our-clients-section";
import ceoCtaSection from "../services/common-section/ceo-cta-section";

/** @type {import('../services/index').ServiceData} */
const MobileApplication = {
	slug: "mobile-application",
	pageTitle: "Mobile App Development Company | Android, iPhone & iPad Developers",
	metaDescription: "Let your mobile app engage with your potential customers. Icecube Digital is a top mobile app development company, develops customer centric mobile apps to give your users a unique experience. Hire Android, iPhone and iPad app developers with flexible hourly or fixed cost rates. Get free quote now.",

	simpleBanner: {
		heading: "Mobile App Development Company",
		paragraphs: ["Converting best app ideas into reality"],
	},

	getQuote: true,

	plainText: {
		eyebrow: "Mobile App Development",
		title: "Services",
		contentAlign: "center",
		paragraphs: [
			"The world is rapidly going mobile. Are you?",
			"Smartphones and tablets are very soon going to take over desktops/laptops as a medium to access information through the internet. We are a team of mobile app evangelists, designers, and developers working closely with entrepreneurs to help them shape their great ideas into efficient mobile apps.",
			"We do not just design and develop mobile apps for you, we also help with the application submission and review process for each App Store. Our mobile apps are always simple to navigate and have a great, user-friendly interface.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		items: [
			{ icon: "/assets/icons/award-badge.svg", title: "Quality" },
			{ icon: "/assets/icons/bulb-active.svg", title: "Creativity" },
			{ icon: "/assets/icons/user-round.svg", title: "User Experience" },
			{ icon: "/assets/icons/dollar-focus.svg", title: "Best Price" },
			{ icon: "/assets/icons/cup.svg", title: "Customer Success" },
		],
	},

	milestone: milestoneSection,

	topIconBoxSecondary: {
		title: "What We Provide",
		columns: 3,
		items: [
			{ icon: "/assets/icons/mobile.svg", title: "iPhone App Development" },
			{ icon: "/assets/icons/multidevice.svg", title: "iPad App Development" },
			{ icon: "/assets/icons/app-square.svg", title: "Android App Development" },
			{ icon: "/assets/icons/layers.svg", title: "Hybrid Applications" },
			{ icon: "/assets/icons/magnet.svg", title: "App Marketing" },
			{ icon: "/assets/icons/hand-shake.svg", title: "Long Term Support" },
		],
	},

	leftIconBox: {
		eyebrow: "Why To",
		title: "Choose Us?",
		columns: 2,
		items: [
			{
				icon: "/assets/icons/user-time.svg",
				title: "Years of Experience",
				body: "We have been delivering robust mobile apps for more than 14 years now, and we have created a reputation of trust with our valuable customers.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Bespoke Solutions",
				body: "We build all our apps specific to your business needs, so you will find much less code than in pre-made templates. This makes your app load fast, more user-friendly, and easy to manage.",
			},
			{
				icon: "/assets/icons/hand-support.svg",
				title: "Excellent Support",
				body: "Our job does not end when we complete the design and development of your app. We provide round-the-clock support for any critical breakdown to make sure that your app is serving your customers well all the time.",
			},
			{
				icon: "/assets/icons/like.svg",
				title: "Customer Satisfaction",
				body: "We don’t just talk about customer satisfaction, but we really mean it. Yes, we really do. Customer satisfaction is at the center of everything that we do.",
			},
		],
	},

	topIconBoxTertiary: {
		eyebrow: "Why To Hire Mobile App",
		title: "Developers From Us",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/trusted-value.svg",
				title: "Unparalleled Quality",
				body: "Being a leader in providing high-performance mobile app development services, Icecube Digital delivers quality-rich solutions.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Affordable Pricing",
				body: "We understand what it takes to run a business, so we won’t break your budget. We provide quality mobile app solutions at an affordable price.",
			},
			{
				icon: "/assets/icons/support-call.svg",
				title: "24/7 Technical Support",
				body: "Our experienced support team is available 24/7 to assist our customers with all their mobile app development problems.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default MobileApplication;
