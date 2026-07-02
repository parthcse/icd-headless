const BTN_ARROW =
    "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const WhiteLabelWebDesignAndDevelopment = {
    slug: "white-label-web-design-and-development-services",
    pageTitle: "White Label Web Design & Development Services | Icecube Digital",
    metaDescription: "Scale your agency without hiring. Icecube Digital is your dedicated white-label web design and development partner — delivering high-quality websites across WordPress, Shopify, Magento, and custom builds under your brand with full confidentiality.",

    banner: {
		heading: "White Label Web Design & Development Partner for Growing Agencies",
        paragraphs: [
            "Scale your agency without hiring, delays, or delivery bottlenecks.",
            "Icecube Digital works behind the scenes as your dedicated white-label team, helping you deliver high-quality websites, faster turnarounds, and consistent client results without increasing your internal overhead.",
            "Whether you're handling 5 projects a month or scaling to 50+, we integrate into your workflow, match your quality standards, and help you take on more work confidently.",
            "What this means for your agency:",
        ],
        checklistItems: [
            "Deliver more projects without hiring in-house teams",
            "Maintain consistent quality across all client websites",
            "Reduce turnaround time without compromising execution",
            "Increase client retention with reliable delivery",
        ],
        closingParagraph: "Your clients see your brand. We handle everything else.",
        ctaLabel: "Send me a proposal",
        ctaHref: "#",
        phoneLabel: "Call Us +91 9106060593",
        phoneHref: "tel:+919106060593",
        formTitle: "Risk-Free White-Label Development Trial (5 Free Hours)",
        btnArrow: BTN_ARROW,
    },

    milestone: milestoneSection,

    caseStudy: {
      eyebrow: "",
      title: "Real Agency Growth Delivered Through White Label Execution",
      subtitle: [
        "Our work isn’t just about building websites &#8211; it’s about helping agencies scale operations, improve delivery consistency, and retain more clients.",
        "Here are a few examples of how we support agency growth behind the scenes:",
      ],
      postIds: [56510, 56508, 56582],
      caseStudyCtaLabel: "More Case Studies",
      caseStudyCtaHref: "/case-studies/",
      btnArrow: BTN_ARROW,
    },

    imageText: {
        eyebrow: "Scaling Delivery Capacity",
        title: "Without Hiring",
        image: "/assets/photos/white-label-without-hiring.png",
        imageAlt: "",
        imagePosition: "left",
        blocks: [
            {
                text: "An agency struggling with development bandwidth partnered with us to handle overflow projects.",
            },
            {
                type: "checklist",
                items: [
                    "Increased monthly delivery capacity by 3X",
                    "Reduced turnaround time by 40%",
                    "Improved client satisfaction due to faster delivery cycles",
                    "Improving Website Quality & Client Retention",
                ],
            },
            {
                text: "A design-focused agency needed stronger development execution to match their creative output.",
            },
            {
                type: "checklist",
                items: [
                    "Delivered performance-optimized builds across multiple CMS platforms",
                    "Reduced post-launch issues significantly",
                    "Helped improve long-term client retention through stable website performance",
                    "Supporting Multi-Platform Development at Scale",
                ],
            },
            {
                text: [
                    "An agency offering multiple services needed support across ",
                    {
                        text: "Shopify development",
                        href: "/shopify-development-services/",
                    },
                    ", WordPress, and custom builds.",
                ],
            },
            {
                type: "checklist",
                items: [
                    "Provided a cross-functional team (design + dev + QA)",
                    "Streamlined project workflows",
                    "Enabled the agency to expand service offerings without internal hiring",
                ],
            },
        ],
        ctaLabel: "Schedule an Appointment Today",
        ctaHref: "#",
        btnArrow: BTN_ARROW,
    },

    getQuote: true,

    infoBox: {
        eyebrow: "White Label Web Design & Development Solutions",
        title: "Built for Agencies",
        subtitle: [
            [
                "We provide complete white-label solutions designed to support agencies at every stage from design execution to ",
                {
                    text: "eCommerce development services",
                    href: "/ecommerce-website-development-services/",
                },
                " and ongoing development and maintenance.",
            ],
        ],
        textAlign: "left",
        items: [
            {
                title: "Custom Website Design (Figma / UI/UX)",
                body: "Conversion-focused, brand-aligned designs tailored to your client's business goals — not template-based layouts.",
            },
            {
                title: "Frontend & Backend Development",
                body: "Clean, scalable, and performance-optimized development across:",
                bodyList: ["WordPress", "Shopify", "Magento", "Custom frameworks"],
            },
            {
                title: "eCommerce Development",
                body: "Build high-performing online stores with:",
                bodyList: [
                    "Optimized product pages",
                    "Seamless checkout experience",
                    "Platform-specific enhancements",
                ],
            },
            {
                title: "Website Maintenance & Support",
                body: "Ongoing updates, bug fixes, and improvements handled without delays — so your clients stay satisfied post-launch.",
            },
            {
                title: "Landing Pages & Conversion-Focused Builds",
                body: "Fast-turnaround landing pages designed for campaigns, lead generation, and performance marketing.",
            },
            {
                title: "White Label QA & Testing",
                body: "Every project goes through structured testing",
                bodyList: [
                    "Cross-browser compatibility",
                    "Device responsiveness",
                    "Speed optimization",
                    "Functional testing",
                ],
            },
            {
                title: "Round-The-Clock Support",
                body: "We offer a support term during which our devoted developers manage any anomalies or urgent eCommerce issues. By doing this, you can be confident that your website will be safe from any unusual problems that might arise once the project completes.",
            },
            {
                title: "On-time Delivery",
                body: "Our WooExperts give you the most precise time estimate before every project, and we ensure to deliver the project even earlier than the deadline.",
            },
            {
                title: "Exceptional Customer Service",
                body: "We ensure you never experience an unresponsive website. You can be sure that your WooCommerce store is always operational.",
            },
        ],
    },

    achievements: achievementsSection,

    topIconBoxSecondary: {
        columns: 3,
        eyebrow: "Our White Label",
        title: "Delivery Framework",
        subtitle:
            "We don't just execute projects — we integrate into your agency workflow and operate like an extension of your internal team.",
        textAlign: "left",
        items: [
            {
                icon: "/assets/icons/sliders.svg",
                title: "Strategic Alignment Before Execution",
                body: "We begin by understanding:",
                bodyList: [
                    "Your agency workflow",
                    "Client expectations",
                    "Project scope & priorities",
                ],
                bodyAfter:
                    "This ensures every project aligns with your delivery standards from day one.",
            },
            {
                icon: "/assets/icons/multidevice.svg",
                title: "Structured Design & Development Workflow",
                body: "Every project follows a clear, predictable structure:",
                bodyList: [
                    "Wireframing / Planning",
                    "UI/UX Design",
                    "Development",
                    "QA Testing",
                    "Final Delivery",
                ],
                bodyAfter: "This minimizes revisions, delays, and miscommunication.",
            },
            {
                icon: "/assets/icons/comment-list.svg",
                title: "Dedicated Communication & Project Handling",
                body: "You work with a consistent team that understands your projects.",
                bodyList: [
                    "Clear communication channels",
                    "Fast response times",
                    "Seamless collaboration with your internal team",
                ],
            },
            {
                icon: "/assets/icons/speed.svg",
                title: "Performance-Focused Execution",
                body: "We build websites that don't just look good — they perform.",
                bodyList: [
                    "Fast loading speeds",
                    "Clean code structure",
                    "Mobile-first responsiveness",
                ],
            },
            {
                icon: "/assets/icons/code-monitor.svg",
                title: "Multi-Platform Expertise",
                body: "Our team works across leading technologies:",
                bodyList: ["WordPress", "Shopify", "Magento", "Custom development"],
                bodyAfter:
                    "This allows you to take on diverse client requirements without limitations.",
            },
            {
                icon: "/assets/icons/gear.svg",
                title: "Ongoing Support & Iteration",
                body: "Our role doesn't end at delivery. We support:",
                bodyList: [
                    "Updates",
                    "Improvements",
                    "Long-term performance enhancements",
                ],
                bodyAfter: "So your agency continues to deliver value beyond launch.",
            },
            {
                icon: "/assets/icons/shield-check.svg",
                title: "Fully White Label & Confidential",
                body: "We operate completely behind your brand:",
                bodyList: [
                    "No direct client interaction (unless required)",
                    "NDA-driven processes",
                    "Full confidentiality",
                ],
            },
        ],
    },

    leftIconBox: {
        eyebrow: "What Actually Drives Successful White Label",
        title: "Website Delivery",
        subtitle: [
            "Most agencies don't struggle with getting projects — they struggle with delivering them consistently.",
            [
                "Over the years, we've refined a working model that helps agencies maintain quality while increasing delivery capacity while supporting agencies with ongoing ",
                {
                    text: "website maintenance services",
                    href: "/wordpress-maintenance-service/",
                },
                ".",
            ],
        ],
        items: [
            {
                icon: "/assets/icons/announcement.svg",
                title: "Deep Brand Alignment",
                body: "We don't treat projects as outsourced tasks. Before we start, we understand:",
                bodyList: [
                    "Your client's brand positioning",
                    "Design expectations",
                    "Communication style",
                ],
                bodyAfter:
                    "So the final output doesn't feel outsourced — it feels like your in-house team delivered it.",
            },
            {
                icon: "/assets/icons/grid.svg",
                title: "Structured Yet Flexible Execution",
                body: "No two agency workflows are the same. We adapt to:",
                bodyList: [
                    "Your project management tools",
                    "Internal processes",
                    "Communication style",
                ],
                bodyAfter:
                    "At the same time, we follow a structured internal workflow to avoid delays and rework.",
            },
            {
                icon: "/assets/icons/layers.svg",
                title: "Design Decisions Backed by Real Use Cases",
                body: "We don't design for “looks”. Every layout, section, and interaction is planned around:",
                bodyList: [
                    "How users navigate",
                    "What they expect",
                    "What drives action",
                ],
                bodyAfter:
                    "This helps your clients get websites that actually perform — not just look good.",
            },
            {
                icon: "/assets/icons/check-circle.svg",
                title: "Faster Approvals Through Clear Mockups",
                body: "One of the biggest delays in agency projects is unclear design direction. We solve that with:",
                bodyList: [
                    "Quick wireframes",
                    "Clear design previews",
                    "Defined structure before development",
                ],
                bodyAfter: "This reduces back-and-forth and speeds up approvals.",
            },
            {
                icon: "/assets/icons/code-monitor.svg",
                title: "Testing That Prevents Post-Launch Issues",
                body: "Most agencies lose time after delivery fixing issues. We focus heavily on:",
                bodyList: [
                    "Cross-device testing",
                    "Performance checks",
                    "Functional validation",
                ],
                bodyAfter: "So your projects don't come back with avoidable problems.",
            },
            {
                icon: "/assets/icons/pc.svg",
                title: "Built for Scale, Not Just Launch",
                body: "We don't build websites that break when traffic grows or requirements change. Our builds are:",
                bodyList: [
                    "Easy to extend",
                    "Easy to manage",
                    "Ready for future updates",
                ],
                bodyAfter: "This makes your agency look more reliable in the long run.",
            },
        ],
    },

    processSteps: {
        eyebrow: "Our White Label Website Delivery",
        title: "Process",
        columns: 2,
        subtitle:
            "We follow a clear, structured process that keeps projects moving without confusion, delays, or unnecessary revisions.",
        steps: [
            {
                title: "Project Brief & Alignment",
                body: "We start by understanding:",
                bodyList: [
                    "Project scope",
                    "Client expectations",
                    "Required timelines",
                ],
                bodyAfter:
                    "If needed, we can also join discovery calls to help define requirements clearly from the start.",
            },
            {
                title: "Planning & Structure",
                body: "Before design begins, we map out:",
                bodyList: ["Page structure", "User flow", "Key conversion points"],
                bodyAfter:
                    "This avoids redesigns later and gives clarity to everyone involved.",
            },
            {
                title: "Design Execution (UI/UX)",
                body: "We create clean, conversion-focused designs that align with your client's brand. You get:",
                bodyList: [
                    "Clear design previews",
                    "Easy feedback cycles",
                    "Faster approvals",
                ],
            },
            {
                title: "Development & Integration",
                body: "Once approved, we move into development.",
                bodyList: [
                    "Clean, scalable code",
                    "CMS-based or custom builds",
                    "Fully responsive implementation",
                ],
            },
            {
                title: "QA & Testing",
                body: "Before delivery, every project is tested for:",
                bodyList: [
                    "Device compatibility",
                    "Browser consistency",
                    "Performance & speed",
                    "Functional accuracy",
                ],
            },
            {
                title: "Final Delivery & Support",
                body: "We deliver projects ready for launch — with minimal friction. Post-delivery, we support:",
                bodyList: ["Fixes", "Updates", "Ongoing improvements"],
            },
        ],
        ctaLabel: "Schedule a Meeting Today",
        ctaHref: "#",
        btnArrow: BTN_ARROW,
    },

    infoBoxSecondary: {
        eyebrow: "Built Specifically for Agencies —",
        title: "Not General Clients",
        subtitle: [
            "Most development companies are built to serve end clients.",
            "We're structured differently – everything we do is designed around how agencies operate.",
        ],
        textAlign: "left",
        items: [
            {
                title: "Works Like Your Internal Team",
                body: "We don't operate as an external vendor.",
                bodyList: [
                    "We align with your workflow",
                    "We match your delivery standards",
                    "We stay consistent across projects",
                ],
                bodyAfter: "So your clients never feel a difference.",
            },
            {
                title: "No Hiring, No Training, No Overhead",
                body: "Instead of building an internal team, you get immediate access to:",
                bodyList: ["Designers", "Developers", "QA specialists"],
                bodyAfter: "Without long hiring cycles or ongoing management.",
            },
            {
                title: "Consistent Delivery — Even Under Pressure",
                body: "Handling multiple client deadlines at once is where most agencies struggle. We help you:",
                bodyList: [
                    "Manage peak workload",
                    "Maintain timelines",
                    "Deliver without quality drops",
                ],
            },
            {
                title: "Flexible Engagement",
                body: "Agency work isn't always predictable. We adapt to:",
                bodyList: ["Ongoing work", "One-off projects", "Changing priorities"],
            },
            {
                title: "Full White Label Confidentiality",
                body: "Everything is delivered under your brand.",
                bodyList: [
                    "No visibility of our involvement",
                    "NDA-backed processes",
                    "Optional client interaction (only if you want)",
                ],
            },
        ],
    },

    topIconBox: {
        eyebrow: "Built for Performance, Stability, and",
        title: "Long-Term Use",
        subtitles: [
            "A good-looking website is expected. What matters is how well it performs after launch.",
            "We build websites that are easy to manage, fast to load, and reliable under real-world usage — so your clients don't come back with issues later.",
        ],
        textAlign: "left",
        items: [
            {
                icon: "/assets/icons/code-monitor.svg",
                title: "Clean Builds That Don't Break Easily",
                body: "We follow structured development practices to ensure:",
                bodyList: [
                    "Stable performance across devices",
                    "Minimal bugs post-launch",
                    "Easy handover and future updates",
                ],
                bodyAfter: "This reduces rework and support requests for your agency.",
            },
            {
                icon: "/assets/icons/speed.svg",
                title: "Performance Considered From the Start",
                body: "Speed isn't something we fix later — it's part of how we build.",
                bodyList: [
                    "Optimized code structure",
                    "Lightweight front-end execution",
                    "Efficient asset handling",
                ],
                bodyAfter: "So your clients get a smooth experience from day one.",
            },
            {
                icon: "/assets/icons/seo-monitor.svg",
                title: "Search-Friendly Structure (Without Overcomplicating It)",
                body: "We don't overload websites with SEO tactics. Instead, we make sure:",
                bodyList: [
                    "Pages are structured properly",
                    "Content is easy to crawl",
                    "Technical basics are handled correctly",
                ],
                bodyAfter:
                    "This gives your SEO team (or client's team) a solid foundation to build on.",
            },
            {
                icon: "/assets/icons/shield-check.svg",
                title: "Security & Reliability Built-In",
                body: "Every project is handled with:",
                bodyList: [
                    "Secure development practices",
                    "Clean database structure",
                    "Protection against common vulnerabilities",
                ],
                bodyAfter: "So your clients can rely on their website long-term.",
            },
            {
                icon: "/assets/icons/workflow.svg",
                title: "Works Across Platforms Without Limitations",
                body: "We regularly work on:",
                bodyList: [
                    "WordPress",
                    "Shopify",
                    "Magento",
                    "WooCommerce",
                    "Custom builds",
                ],
                bodyAfter:
                    "This allows your agency to take on different types of projects without worrying about execution.",
            },
        ],
    },

    cta: {
        text: "Deliver Premium Websites to Your Clients Under Your Brand-Explore our White-Label Services Today!",
        ctaLabel: "Contact Us Today for a Free Consultation!",
        ctaHref: "#",
        btnArrow: BTN_ARROW,
    },

    faq: {
        eyebrow: "White Label Web Design and",
        title: "Development FAQs",
        items: [
			{
				question: "How does your white label partnership work?",
				answer: "You share project requirements, and we handle design, development, and delivery under your brand. We work in the background while you manage the client relationship.",
			},
			{
				question: "Will my clients know you are involved?",
				answer: "No. Everything is delivered as a white-label service. We remain completely invisible unless you request direct involvement.",
			},
			{
				question: "Can you work within our existing process or tools?",
				answer: "Yes. We adapt to your workflow — whether you use ClickUp, Trello, Asana, Slack, or any custom system.",
			},
			{
				question: "Do you provide a dedicated point of contact?",
				answer: "Yes. You’ll work with a consistent project manager who understands your projects and keeps communication clear.",
			},
			{
				question: "What types of projects can you handle?",
				answer: "We handle: You can outsource full projects or specific parts (design or development only).",
				answerList: [
					"Business websites",
					"eCommerce stores",
					"Landing pages",
					"Custom builds",
				],
			},
			{
				question: "How quickly can you deliver projects?",
				answer: "Timelines depend on scope, but we prioritize structured execution to avoid delays. Once we review your requirements, we provide a clear delivery timeline.",
			},
			{
				question: "Can you support ongoing work or maintenance?",
				answer: "Yes. We support ongoing updates, fixes, and improvements — so your clients continue to get value after launch.",
			},
			{
				question: "How do you handle communication during projects?",
				answer: "We keep communication simple and consistent: You’re never left guessing where things stand.",
				answerList: [
					"Regular updates",
					"Quick response times",
					"Clear status tracking",
				],
			},
			{
				question: "Is there a minimum commitment or long-term contract?",
				answer: "No. You can work with us based on your project flow — whether it’s one-off work or ongoing collaboration.",
			},
			{
				question: "Can you help with project planning or estimates?",
				answer: "Yes. We can assist with: This helps you respond to your clients faster.",
				answerList: [
					"Requirement understanding",
					"Scope planning",
					"Project estimates",
				],
			},
			{
				question: "What happens if something needs fixing after delivery?",
				answer: "We provide post-delivery support and handle fixes quickly to ensure smooth handover and client satisfaction.",
			},
			{
				question: "How do you ensure quality across projects?",
				answer: "Every project goes through structured QA: So issues are caught before delivery.",
				answerList: [
					"Functional testing",
					"Device compatibility",
					"Performance checks",
				],
			},
		],
    },

    ourClients: ourClientsSection,

    weServe: true,

    ceoCta: ceoCtaSection,
};

export default WhiteLabelWebDesignAndDevelopment;
