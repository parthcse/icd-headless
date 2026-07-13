const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const IcecubeEcommerceAiAgent = {
	slug: "icecube-ecommerce-ai-agent",
	pageTitle: "Ecommerce AI Agent | AI Add-on That Knows Your Whole Store",
	metaDescription:
		"Icecube Digital builds, trains and runs an AI add-on for your Magento, Shopify or WooCommerce store. It learns your whole catalog, orders and policies to answer shoppers 24/7 in their own language — grounded in your real data.",

	heroMedia: {
		eyebrow: "Ecommerce AI Add-on",
		heading: "An AI add-on that knows your whole store — and answers for it 24/7.",
		paragraphs: [
			"Icecube Digital builds, trains and runs an AI assistant that installs onto your existing Magento, Shopify or WooCommerce store. It learns all of it — products, orders, policies and content — and answers shoppers instantly, in their own language. Grounded in your real data, so it never makes things up.",
		],
		checklistItems: [
			"24/7 — always answering shoppers",
			"70% of routine questions handled",
			"10+ languages, out of the box",
		],
		ctaLabel: "Book a demo",
		ctaHref: "popup",
		phoneLabel: "Call +91 91060 60593",
		phoneHref: "tel:+919106060593",
		media: "/assets/gifs/ecommerce-ai-agent-hero.gif",
		mediaAlt: "Animated demo of the Icecube AI store assistant answering a shopper's product and order questions in a chat window.",
		btnArrow: BTN_ARROW,
	},

	topIconBox: {
		eyebrow: "What It Does",
		title: "One add-on that knows your entire store.",
		subtitle:
			"Because it reads your whole store — products, orders, policies and content — it handles the repetitive work your team does all day, instantly and in any language, around the clock.",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/ai-search.svg",
				title: "Finds the exact product",
				body: "Understands what a shopper means and surfaces the right item — by feature, use case, or even a specific SKU typed into chat.",
			},
			{
				icon: "/assets/icons/transport.svg",
				title: "Tracks orders live",
				body: "Pulls real-time order and shipping status on demand — never a stale guess. “Where's my order?” answered in seconds.",
			},
			{
				icon: "/assets/icons/ai-support.svg",
				title: "Resolves support & FAQs",
				body: "Returns, shipping, warranty, payment and sizing — answered from your real policies and help docs, on-brand.",
			},
			{
				icon: "/assets/icons/ai-cart.svg",
				title: "Recommends & upsells",
				body: "Suggests relevant products, accessories and bundles in the flow of conversation — turning questions into bigger baskets.",
			},
			{
				icon: "/assets/icons/ai-shield.svg",
				title: "Won't make things up",
				body: "Answers only from your store. If confidence is low it hands off to a human instead of inventing prices, stock or policies.",
			},
			{
				icon: "/assets/icons/ai-team.svg",
				title: "Learns from your team",
				body: "A great answer can be saved and reused — but only after your team approves it. It gets sharper every week, on your terms.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Serves how-to & install guides",
				body: "Matches each product to its correct setup or installation guide and video automatically — fewer “how do I fit this?” tickets.",
			},
			{
				icon: "/assets/icons/ai-nlp.svg",
				title: "Speaks your customers' language",
				body: "Multilingual out of the box — it detects and replies in the shopper's language, ideal for cross-border stores.",
			},
			{
				icon: "/assets/icons/ai-analytics.svg",
				title: "Hands you the data",
				body: "A dashboard shows what shoppers ask, what was resolved and where it handed off — so you keep improving the store.",
			},
		],
	},

	topIconBoxSecondary: {
		eyebrow: "Why It's Different",
		title: "Most “AI chatbots” guess. This one is built to be trusted.",
		subtitle:
			"Anyone can bolt a generic chatbot onto a store. The hard part — where we've spent the engineering — is making it accurate, grounded and improvable on real ecommerce data.",
		columns: 3,
		items: [
			{
				icon: "/assets/icons/database.svg",
				title: "Answers from your whole store",
				body: "Every reply is pulled from your live store — catalog, orders, FAQs, policies and past tickets — not a script. A confidence threshold means it would rather hand off than guess.",
			},
			{
				icon: "/assets/icons/smart-search.svg",
				title: "Finds products search misses",
				body: "A dedicated keyword and SKU layer catches exact-match queries — a model name, a part number, a feature term — that ordinary semantic search quietly drops.",
			},
			{
				icon: "/assets/icons/ai-bulb.svg",
				title: "Gets smarter with your approval",
				body: "Strong answers become reusable knowledge — reviewed and edited by your team before they go live. Continuous improvement you stay in control of.",
			},
			{
				icon: "/assets/icons/user-team.svg",
				title: "Human handoff with context",
				body: "When a question is sensitive or low-confidence, it escalates to your team with the full conversation — nobody starts from scratch.",
			},
			{
				icon: "/assets/icons/lock.svg",
				title: "Your data stays private",
				body: "Your content lives in a private knowledge base built for your store. It isn't used to train public models, and access follows least-privilege.",
			},
			{
				icon: "/assets/icons/ai-gear.svg",
				title: "Fully managed for you",
				body: "We design, host, monitor and keep tuning it. No platform migration, no prompt engineering — you point us at your store and review results.",
			},
		],
	},

	tableBasic: {
		eyebrow: "The Difference at a Glance",
		title: "The Icecube add-on vs. a generic chatbot.",
		boldColumns: [0],
		colWidths: ["40%", "30%", "30%"],
		contentAlign: "left",
		columns: ["Capability", "Generic chatbot", "Icecube add-on"],
		rows: [
			[
				"Knows your whole store — orders, policies, content",
				"FAQ only",
				{ icon: "check", title: "Yes" },
			],
			[
				"Answers from live catalog & stock",
				"Scripted",
				{ icon: "check", title: "Yes" },
			],
			[
				"Real-time order & shipping status",
				"Rarely",
				{ icon: "check", title: "Yes" },
			],
			[
				"Refuses to invent answers",
				"Hallucinates",
				{ icon: "check", title: "Guardrailed" },
			],
			[
				"Exact SKU / model-number lookup",
				"Misses",
				{ icon: "check", title: "Yes" },
			],
			[
				"Learns — with your team's approval",
				"Static",
				{ icon: "check", title: "Yes" },
			],
			[
				"Built, hosted & tuned for you",
				"DIY",
				{ icon: "check", title: "Fully managed" },
			],
		],
	},

	milestone: milestoneSection,

	processSteps: {
		eyebrow: "How It Works",
		title: "From install to a store that answers for itself, in weeks.",
		subtitle:
			"We run the whole thing end to end — you don't replatform, add a separate tool, or manage prompts.",
		columns: 2,
		steps: [
			{
				title: "Install",
				body: "The add-on connects to your store and helpdesk — Magento, Shopify, WooCommerce, Zendesk and more.",
			},
			{
				title: "Learn",
				body: "It reads your whole store — catalog, orders, FAQs, policies and tickets — into a private knowledge base.",
			},
			{
				title: "Tune",
				body: "We calibrate retrieval, tone and guardrails to your brand and test against real questions.",
			},
			{
				title: "Launch",
				body: "A lightweight widget goes live on your site. No theme rebuild, no migration.",
			},
			{
				title: "Improve",
				body: "Analytics and approval-gated learning make it more accurate every week.",
			},
		],
	},

	information: {
		eyebrow: "Live in Production",
		title: "Already answering real shoppers.",
		contentAlign: "center",
		cards: [
			{
				title: "Visor",
				blocks: [
					{ type: "p", text: "Magento store · premium sun-protection blinds · Norway" },
					{
						type: "table",
						columns: ["24/7", "3"],
						rows: [["Coverage in the shopper's language", "Sources: catalog, orders & support"]],
					},
					{
						type: "p",
						text: "“It answers product, order and install questions the moment customers ask — day or night, in Norwegian or English.”",
					},
					{
						type: "p",
						text: "On Visor's Magento store the add-on handles product discovery (down to a specific Cordlock SKU), live order status and install-guide lookups — grounded in the store's own catalog and policies, with a human handoff whenever it isn't certain.",
					},
				],
			},
		],
	},

	plainText: {
		eyebrow: "Packages",
		title: "Pick the scope. We handle the build and the running.",
		contentAlign: "center",
		paragraphs: [
			"Every plan is fully managed — design, training, hosting and ongoing tuning included.",
		],
		ctaLabel: "Get a quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Questions",
		title: "The things buyers ask us first.",
		items: [
			{
				question: "Which platforms do you support?",
				answer:
					"Magento, Shopify and WooCommerce out of the box, plus custom and headless stores — anything with an API we can read your catalog and orders from. Helpdesks like Zendesk connect for tickets and handoff.",
			},
			{
				question: "How long until it's live?",
				answer:
					"Typically two to four weeks, depending on catalog size and how many data sources we connect. We handle ingestion, tuning and testing; you review the answers before it goes public.",
			},
			{
				question: "Will it make up answers about my products?",
				answer:
					"No. Every reply is grounded in your own store data, and a confidence threshold stops it from answering when it isn't sure — it hands off to a human instead. That guardrail is core to how we build it.",
			},
			{
				question: "What about our data and privacy?",
				answer:
					"Your content lives in a private knowledge base built for your store and isn't used to train public models. We scope data access to what the add-on needs and follow least-privilege practices.",
			},
			{
				question: "Do we have to manage it?",
				answer:
					"No — it's fully managed. We build, host, monitor and keep tuning it. Your only ongoing job is the one you should own: approving the answers it learns.",
			},
			{
				question: "Can it hand off to our human team?",
				answer:
					"Yes. When a question is sensitive or low-confidence, it escalates to your team with the full conversation context, so nobody starts from scratch.",
			},
		],
	},

	cta: {
		text: "See it answer your customers' questions.",
		subtitle:
			"Book a 30-minute demo and we'll show the add-on working on a store like yours — then map what it would take for yours.",
		ctaLabel: "Book a demo",
		ctaHref: "popup",
		ctaLabelSecondary: "Chat on WhatsApp",
		ctaHrefSecondary: "https://wa.me/919106060593",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	ceoCta: ceoCtaSection,
};

export default IcecubeEcommerceAiAgent;
