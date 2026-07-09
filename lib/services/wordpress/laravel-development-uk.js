const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('../index').ServiceData} */
const LaravelDevelopmentCompanyUk = {
	slug: "laravel-development-company-uk",
	pageTitle: "Laravel Web Development Company UK | Hire Laravel Developers",
	metaDescription:
		"Icecube Digital is a top Laravel development agency in the UK, offering result-driven custom Laravel development services. Hire expert Laravel developers for proven success!",

	banner: {
		heading: "Laravel Development Company UK",
		paragraphs: [
			"Laravel web development isn’t just hype, as 2,639,545 websites are Laravel customers and 669,818+ live websites already use it. If your whole business runs on code, that code has to stay readable and easy to fix even a year later. That’s what we care about at Icecube Digital. We’re a top Laravel agency in the UK, and we stick to solid architecture, clear logic, and code that’s clean and easy to read.",
			"Other companies pick us as their go-to Laravel development agency in the UK because we don’t just finish a job and bounce. We build full Laravel development services setups that actually hold up when the business is running day-to-day. That means hooking into other systems, sorting out who can do what, cranking out detailed reports, staying on the right side of GDPR, and setting up background tasks so nobody has to babysit them.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "popup",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Request a Free Quote",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	portfolio: {
		eyebrow: "Our",
		title: "Portfolio",
		subtitle: [
			"Welcome to Our Portfolio section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each Portfolio is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [40919, 40962, 40884],
		portfolioCtaLabel: "More Portfolio",
		portfolioCtaHref: "/our-portfolio/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Why Choose Laravel for",
		title: "Web Development?",
		contentAlign: "center",
		paragraphs: [
			"When you’re working on a big project, you’ll notice fast that frameworks can either be a lifesaver or make you want to throw your laptop across the room. Laravel development company UK keeps things tidy by giving you a clear layout. The MVC pattern in Laravel stops you from compressing everything into one huge file or coming up with a new way to handle routes every time you open VS Code. Eloquent ORM makes working with relationships and pulling data way easier to read, so you don’t have to write raw SQL for every little filter.",
			"Security in Laravel is baked in from day one. Laravel gives you CSRF tokens, input checks, safe logins, and data encryption right out of the box. Nobody wants to spend weeks patching holes after the site is already live. With Laravel development services UK, the basics come with the framework. They are not random plugins you have to hunt for.",
			"The ecosystem is super cool too. Laravel Horizon takes care of queues. Nova builds admin panels in no time. Passport handles API logins. Sanctum deals with SPA tokens. The whole stack grows with your project. Whether you’re going API-first, headless, server-driven, real-time, or multi-tenant, the pieces are ready. You just plug them in, test, and keep moving instead of starting over every time.",
		],
		ctaLabel: "Request a free quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	testimonials: {
		eyebrow: "Hear What Our",
		title: "Clients Have to Say!",
		testimonialSlug: "charley-powell",
	},

	topIconBox: {
		eyebrow: "Our Laravel Development",
		title: "Services UK",
		subtitles: [
			"If you’re in the UK and need help with Laravel development services UK, you want someone who actually solves your problems instead of leaving you with a bigger mess later. That’s exactly what we do as a leading Laravel development company in the UK. We use the same tools that real, growing companies rely on every day. They are not just the flashy stuff that looks good on a sales pitch.",
		],
		columns: 3,
		items: [
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Custom Laravel Development",
				body: "First we figure out what your business actually needs, then we write the code to fit it. Big stuff like approval chains, batch jobs, or orders that move through a bunch of stages gets broken into smaller chunks: jobs, listeners, events, and observers. We use Service Providers, dependency injection, and Eloquent relationships to keep the code modular and easy to expand, so we don’t end up stuck with a rigid setup.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "Laravel API & Integration",
				body: "We build our APIs with Laravel’s Resource classes and transformer patterns. We handle versioning, rate limits, policy-based authentication, and request validation using middleware and comprehensive testing. When integration with legacy systems is required, we implement secure HTTP clients and custom command-line utilities to ensure seamless synchronization with any platform, whether it’s an older AS400 system or flat file data source.",
			},
			{
				icon: "/assets/icons/shopping.svg",
				title: "Laravel Ecommerce Solutions",
				body: [
					"First, as a leading ",
					{ text: "Ecommerce web development company", href: "/ecommerce-website-development-services/" },
					", we sketch out the whole order flow, set up tax rules, link products to the right categories, and track stock everywhere it’s sold. Then we lock down the checkout so it’s secure. We integrate Stripe, Klarna, and PayPal, connecting them with events and queue workers so payments run in the background and the site stays fast. For the admin side, we either use Nova or build custom Blade components.",
				],
			},
			{
				icon: "/assets/icons/database.svg",
				title: "CMS & CRM Development",
				body: "We pull in Policies, Gates, and multi-tenancy when they help, and Eloquent keeps the data models clean and easy to change. Admins get their own roles, content writers stick to clear workflows, and everyone ends up with reports that line up with real business goals instead of just giant lists of records.",
			},
			{
				icon: "/assets/icons/cloud-upload.svg",
				title: "Laravel Migration & Upgrades",
				body: "We deal with messy schemas, weird data, lost passwords, and broken links. Every migration gets tested and has rollbacks, seeders, and a dry run. We keep SEO and URLs the same, rebuild user sessions, move logic into services, and make sure everything is versioned and ready for review.",
			},
			{
				icon: "/assets/icons/wallet.svg",
				title: "Third-Party API & Payment Integration",
				body: "Every integration kicks off with contracts and tests. We deal with payment APIs by using special Service classes that come with built-in exception handling, retries, webhooks, and audit logs. When we hook up to outside business systems, we park their logic in custom providers so their code never messes with our main business stuff.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Support & Maintenance",
				body: "Keeping the site running is almost as tricky as building it in the first place. We keep an eye on everything with Sentry and Telescope, set up automatic backups with Laravel’s scheduler, update packages through Composer, and let our CI pipeline run every time we push new code.",
			},
		],
	},

	infoBox: {
		eyebrow: "Common Challenges UK Businesses Face with",
		title: "Laravel Development",
		items: [
			{
				title: "Shortage of Skilled Developers",
				body: "Most developers just learn the basic create-read-update-delete stuff and then bounce. Only a handful actually know how to keep their service layers tidy, make jobs run faster, or fix tricky queue bugs. That is why a lot of codebases turn into a mess, with the important logic scattered all over controllers and random helper files.",
			},
			{
				title: "Legacy System Integration Issues",
				body: "Hooking Laravel up to old-school systems is kind of a pain. You run into stuff like weird character encoding, endpoints that randomly crash, and SQL that looks like it is from the Stone Age. The usual fix is a pile of mapping layers, a couple of adapters, and some background jobs that always seem to run at the worst times.",
			},
			{
				title: "Dependency on Third-Party Packages",
				body: "While Laravel offers a wide range of third-party packages and add-ons to extend its functionality, many of these are maintained by individual developers or small teams. Relying too heavily on these external packages can introduce significant risks, especially if support or updates are discontinued.",
			},
			{
				title: "Performance Scaling Problems",
				body: "Laravel’s speed really comes down to how you set it up. If you skip stuff like cache drivers, configuration caching, eager loading, chunked queries, or tuning the Horizon queue, the application will drag. Make sure your teammates actually test and tweak each part instead of just sticking with the defaults.",
			},
			{
				title: "GDPR Compliance Effort",
				body: "GDPR compliance requires more than a simple checkbox. As a trusted Laravel development company UK, we embed consent tracking, deletion logs, data exports, and audit trails directly into your application. Integrated with Laravel’s events and jobs, our solutions ensure your business remains compliant, even as regulations evolve.",
			},
			{
				title: "Steep Learning Curve",
				body: "When projects get bigger, most teams eventually hit a roadblock. Middleware, the service container, queued jobs, and broadcast events, if you do not know how to hook them up, your code either stays clean or turns into a mess. Laravel can carry you a long way, but only if you use it the right way.",
			},
		],
	},

	leftIconBox: {
		eyebrow: "Benefits of Laravel Development for",
		title: "UK Businesses",
		items: [
			{
				icon: "/assets/icons/rocket.svg",
				title: "Accelerated Time to Market",
				body: "Artisan, migrations, seeders, and built-in authentication in Laravel streamline initial development. As a leading Laravel development company UK, we deliver robust features quickly because the essential framework is pre-built and thoroughly tested, ensuring efficient project launches for our clients and reducing time to market for your business.",
			},
			{
				icon: "/assets/icons/dollar-focus.svg",
				title: "Budget-Friendly Development",
				body: "Laravel development agency UK is totally open source, so the main parts are free. Because of that, you will not have to shell out for big rewrites later. Composer handles all the package stuff, and updates come in a steady, no-surprise way.",
			},
			{
				icon: "/assets/icons/shield-check.svg",
				title: "Robust Security Features",
				body: "The framework already comes with some solid security stuff built in: it blocks CSRF attacks, checks all the data people type in, stores passwords as hashes, and keeps files encrypted. On top of that, we are adding ACLs, rate limiting, token-based APIs, and brute-force protection.",
			},
			{
				icon: "/assets/icons/layers.svg",
				title: "Flexible and Scalable Architecture",
				body: "We do not build one giant chunk of code that is a pain to change. Instead, we use service providers, interfaces, job queues, and modular controllers, so the application can grow or switch direction without having to start from scratch.",
			},
			{
				icon: "/assets/icons/seo-monitor.svg",
				title: "Optimised for SEO and Speed",
				body: [
					"We have SEO expertise built into our Laravel development services UK. Our team ensures every website benefits from best practices like clean code, structured metadata, optimized routes, and fast performance. This integrated approach, combined with our ",
					{ text: "professional SEO services", href: "/seo-search-engine-optimization/" },
					", means your site not only works flawlessly for users but also ranks strongly in search engines.",
				],
			},
			{
				icon: "/assets/icons/workflow.svg",
				title: "Seamless System Integration",
				body: "We build adapters, use the HTTP client, set up automatic synchronizations on a schedule, and tidy up third-party data before it lands in your main system. We keep an eye on everything and log it all, so nothing slips through the cracks.",
			},
		],
	},

	processSteps: {
		eyebrow: "Our Laravel Development Process",
		title: "Agile, Transparent, Proven",
		columns: 2,
		steps: [
			{
				title: "Understanding Your Needs",
				body: "First, we take a look at the code and run some workshops to figure out what everyone needs. We sketch out user flows, business rules, and the stuff that bugs people, so the final product works for both the users and the higher-ups.",
			},
			{
				title: "Easy Design, Smart Planning",
				body: "We sketch out the database layout, draw up ER and sequence diagrams, and list who can do what. We write everything down before we move anything over.",
			},
			{
				title: "Development, Testing, and Launch",
				body: "We keep every change in Git, every pull request gets looked at, we run PHPUnit to check our tests, and anything super important also gets end-to-end tests. We aim for zero downtime and always have a rollback plan ready.",
			},
			{
				title: "Ongoing Support",
				body: "Real support means you get Sentry to track errors, Horizon to handle your queues, and Telescope to watch your requests. You also get regular updates and security checks. Your business cannot deal with downtime or missing reports.",
			},
			{
				title: "Performance, Security, & Scalability",
				body: "We thoroughly test your application, identify any weaknesses, monitor its performance, and make ongoing improvements as your user base grows. You will receive clear, straightforward reports showing exactly what needs to be fixed or upgraded next.",
			},
		],
		ctaLabel: "Schedule a Meeting Today!",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	leftIconBoxSecondary: {
		eyebrow: "Why Choose Us as Your Laravel Development",
		title: "Agency in the UK?",
		items: [
			{
				icon: "/assets/icons/user-time.svg",
				title: "16 Years of Experience",
				body: "We kicked things off with plain PHP, watched frameworks grow up, and have been coding and keeping Laravel applications alive since way back. All that time means we can spot and dodge the usual mistakes before they bite us.",
			},
			{
				icon: "/assets/icons/hand-shake.svg",
				title: "99.9% Client Satisfaction Rate",
				body: "Our customers stick around because their systems just keep running. When they want something tweaked, we map out the plan, make the updates, and keep it all super simple.",
			},
			{
				icon: "/assets/icons/bulb-active.svg",
				title: "Industry Know-How",
				body: "We totally get technology and the fields we work in: logistics, finance, healthcare, e-commerce, and education. For every project, we mix what we know about the industry with solid technical skills.",
			},
			{
				icon: "/assets/icons/sliders.svg",
				title: "Custom Functionality Built to Your Needs",
				body: "Your application is made just for you. We skip the boring, one-size-fits-all dashboards and copy-paste templates. Instead, we take the way you actually work and turn it into classes, jobs, events, and screens that fit what you need.",
			},
			{
				icon: "/assets/icons/note.svg",
				title: "Clear Contracts and No Hidden Fees",
				body: "Everything is out in the open. Every task is listed, every sprint and update gets tracked. You will never get hit with surprise fees.",
			},
			{
				icon: "/assets/icons/comment.svg",
				title: "Clear Communication",
				body: "You talk straight to the engineers who are actually building your system, not just some account manager. We hop on a quick call every week, walk through the code together, and give you straight-up answers whenever something is bugging you or you have questions.",
			},
		],
	},

	cta: {
		text: "Need Stellar Web Magic? Hit Up a Laravel Development Company in UK and Let’s Make It Happen!",
		ctaLabel: "Get a Free Quote",
		ctaHref: "popup",
		btnArrow: BTN_ARROW,
	},

	faq: {
		eyebrow: "Laravel Development",
		title: "FAQs",
		items: [
			{
				question: "What is Laravel?",
				answer: "Laravel is basically a PHP toolkit that makes it way easier to build web apps you can actually keep running and grow later. It sticks to the MVC pattern and already has stuff like user login, URL routing, background jobs, automated tests, and security baked right in.",
			},
			{
				question: "What is the cost of Laravel development in the UK?",
				answer: "Prices change based on how big the project is, what features you need, and what other systems it has to connect with. Most jobs land somewhere between £8,000 and £40,000, but they can cost more if things get complicated. Either way, we’ll give you a clear, itemized quote before we kick anything off.",
			},
			{
				question: "Can I hire Laravel developers on an hourly basis?",
				answer: "Sure, you can totally hire Laravel developers. They can be from the UK or anywhere else in the world. You can bring them on for just a couple of hours, part-time, or full-time, whatever works for your project.",
			},
			{
				question: "What makes Laravel better than other PHP frameworks?",
				answer: "Laravel keeps things tidy, has a huge community watching its back, comes with solid security baked right in, and plays nice with all the modern tools. The code stays clean and can grow without turning into a mess.",
			},
			{
				question: "Why should I choose Laravel for my web project?",
				answer: "Laravel is perfect for whipping up quick prototypes, running tests without a headache, tossing in new features without wrecking what’s already there, and keeping the whole project easy to manage as time goes on.",
			},
			{
				question: "Can you migrate my existing site to Laravel?",
				answer: "We move all the old stuff over, whether it’s plain PHP, CodeIgniter, Symfony, or some random custom code. We handle the data, the user sessions, and the page links so nothing disappears and the site keeps running the whole time.",
			},
			{
				question: "Is Laravel good for eCommerce websites?",
				answer: "Yes, totally doable if we set things up right. We take care of product management, checkout, inventory, pricing, promotions, and payments inside the model and service layer.",
			},
			{
				question: "Can Laravel handle large-scale projects?",
				answer: "Yes, Laravel can totally handle a ton of traffic and tricky business rules. It uses jobs, queues, caching, service layers, and some smart planning to pull it off.",
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default LaravelDevelopmentCompanyUk;
