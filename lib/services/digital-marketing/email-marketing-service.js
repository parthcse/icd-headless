const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

/** @type {import('./index').ServiceData} */
const EmailMarketingService = {
	slug: "email-marketing-company",
	pageTitle: "Email Marketing Company | Icecube Digital",
	metaDescription: "Icecube Digital is a results-driven email marketing company offering campaign design, automation, list maintenance, and reporting — from welcome series and abandoned-cart recovery to drip campaigns that grow eCommerce revenue.",

	banner: {
		heading: "Email Marketing Company",
		paragraphs: [
			"Do you know for every $1 spent, a company earns $36? Email is one of the common channels for users to communicate. It is one of the mediums with the highest volume of users than other communication channels. Leverage email marketing to the fullest and make your customers aware of your products/services. So, start now and witness how rapidly your business thrives.",
		],
		ctaLabel: "Send me a proposal",
		ctaHref: "#",
		phoneLabel: "Call Us +91 9106060593",
		phoneHref: "tel:+919106060593",
		formTitle: "Get A Free Email Marketing Audit",
		btnArrow: BTN_ARROW,
	},

	milestone: milestoneSection,

	caseStudy: {
		eyebrow: "Our",
		title: "Case Studies",
		subtitle: [
			"Welcome to our Case Studies section. This is where we take you on a journey through real-world examples of how we transformed challenges into wins and goals into achievements.",
			"In these pages, you’ll discover the impact of our innovative solutions and the tangible results we’ve delivered for businesses across industries. From developing ground-breaking ecommerce websites, boosting brand visibility through SEO to achieving remarkable ROI with data-driven PPC campaigns, each case study is a testament to our unwavering commitment to driving growth.",
		],
		postIds: [56543, 56553, 56568],
		caseStudyCtaLabel: "More Case Studies",
		caseStudyCtaHref: "/case-studies/",
		btnArrow: BTN_ARROW,
	},

	getQuote: true,

	plainText: {
		eyebrow: "Partner With Email",
		title: "Marketing Agency",
		contentAlign: "center",
		paragraphs: [
			"Email marketing requires strategic planning to implement, and Icecube Digital has a team of digital marketing experts. The group of professionals is well-versed in multiple email service providers to bulk shoot promotional, awareness, and offer related emails to your target audience.",
			"Besides, email marketing experts even monitor the sent email status. It means they even look after which emails were viewed or actions are taken on them. Hiring our email marketing experts would not take much of your time. They know different types of email marketing and perform different campaigns.",
			"Due to our email marketing consultants, our agency has won several awards. So, what are you waiting for? Hire them now and reach out to your target audience worldwide now.",
		],
		ctaLabel: "Request a Free Quote",
		ctaHref: "#",
		btnArrow: BTN_ARROW,
	},

	achievements: achievementsSection,

	topIconBox: {
		eyebrow: "Explore Email",
		title: "Marketing Services",
		items: [
			{
				icon: "/assets/icons/comment-back.svg",
				title: "Campaign Design & Deployment",
				body: "From custom email marketing management services to newsletters to offering sales or discounts, our email marketing specialists take care of it. These professionals will design and develop emails on your behalf as per your requirements. Get in touch with one of our marketing specialists and stay rest assured about pitching your business to your target audience.",
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Campaign Monitoring & Reporting",
				body: "Not only sending emails or running campaigns would suffice, you also need to keep track of how your sent emails are performing. Our email marketing optimization team prepares and shares a detailed monthly report, which includes engagement metrics, such as open, click rate, and conversions. Moreover, our team even shares reports with you or your team.",
			},
			{
				icon: "/assets/icons/note-edit.svg",
				title: "List Maintenance",
				body: "If you are partnering with an Icecube email marketing company, your business is not only ready to engage the target audience but also reach an untouched target audience. We ensure to run engaging list maintenance to hook your target audience with your business. Our team manages to send the right set of emails to the right group of audiences.",
			},
			{
				icon: "/assets/icons/speed.svg",
				title: "Management & Optimization",
				body: "There could be times when additional attention to detail would be required to maintain your ESP. It includes segmentation, list cleaning, and revising all your marketing strategies. All these modifications would be based on your engagement reports. Our email marketing team works really hard to ensure that the email marketing strategy operates in a fully functional mode.",
			},
			{
				icon: "/assets/icons/square-cursor.svg",
				title: "Asset Coordination & Branding",
				body: "Do you know what's crucial for getting the best return on your email marketing investment? It's consistent. We follow your brand guidelines and work accordingly. We also suggest timely content modification and strategize the calendar accordingly.",
			},
			{
				icon: "/assets/icons/comment-list.svg",
				title: "Marketing Goals & Targeting Review",
				body: "Our email marketing works hand in hand with your team to understand your email marketing strategy. Post that, we also review your target audience and look out for the un grabbed opportunities to decide the next planning. That's how we build marketing strategies with unique goals.",
			},
			{
				icon: "/assets/icons/processing.svg",
				title: "ESP Migration",
				body: [
					"Having specific ESP benefits a lot to your business. If you have specific ESP, then our team would migrate current email marketing campaigns, templates, and segmented contacts to it. Our team prefers eCommerce platforms like ",
					{ text: "WooCommerce", href: "/woocommerce-development-services/" },
					" and BigCommerce.",
				],
			},
			{
				icon: "/assets/icons/checklist.svg",
				title: "Email Strategy",
				body: "Hire our email marketing team and get the best strategies for your target audience. We suggest automated campaigns, content strategy, discount recommendations, and email newsletter services.",
			},
			{
				icon: "/assets/icons/setting.svg",
				title: "Email Automation Strategy",
				body: "Our email and eCommerce marketing experts join hands to create a plan for building workflows and automated campaigns to predict future purchases. We have got your back from notifying abandoned carts to shopping sequences and managing VIP reengagement streamline work.",
			},
			{
				icon: "/assets/icons/announcement.svg",
				title: "Email Marketing Management",
				body: "We have a team that helps you with creating persuasive email marketing campaigns that engage your audiences to click and perform actions on sent emails. Our team plans, designs, and test Shopify email marketing to increase conversions and skyrocket revenues.",
			},
			{
				icon: "/assets/icons/grid.svg",
				title: "Tailored Email Campaigns",
				body: "Considering your email goals, we craft campaigns that suit your marketing objectives. From a simple newsletter plan to RSS-to-email feeds to complex automation and conditional forwarding follow-up emails, we have got your back.",
			},
			{
				icon: "/assets/icons/email.svg",
				title: "Email Newsletter Management",
				body: "Your email newsletter must grow, and we constantly work on it. Our email marketing strategists review your business and online platform to boost your newsletter signups and build your brand. Besides, they also ensure that your email gets maximum shares and subscribers.",
			},
		],
	},

	checkList: {
		eyebrow: "Why Choose Us As Your Email",
		title: "Marketing Company?",
		subtitle: [
			[
				"The ",
				{ text: "digital marketing", href: "/digital-marketing-service/" },
				" experts at Icecube are experienced in the email marketing automation business. These seasoned professionals manage to beat your competitors and make you stay ahead of them. When it comes to sending bulk emails, the employed strategies never let you down. Located in the USA, IceCube is a hub of digital and email marketing experts.",
			],
			"With more than 14 years of expertise in the field of email marketing, our professionals are well-versed in effectively pitching your clients.",
		],
		benefitsLeft: [
			"Experienced email marketing experts",
			"Hourly and monthly based pricing structure",
			"Complete transparency in our processes, tools, and pricing",
		],
		benefitsRight: [
			"Shares weekly and monthly report",
			"Simple channels for communication",
		],
	},

	leftIconBox: {
		eyebrow: "How Do You Benefit By Hiring Email",
		title: "Marketing Experts?",
		items: [
			{
				icon: "/assets/icons/grid.svg",
				title: "Review Campaign & Template",
				body: "Hiring our email marketing specialists would benefit you in finding out the flaws in your existing email marketing campaigns and templates. Our email marketing professionals would look into:",
				bodyList: ["Designs of your existing emails", "Subject lines", "Calls-to-actions"],
				bodyAfter: "Comprehending all these factors, they will suggest effective and immediate modifications. They will suggest whatever is best in your interest.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Technical Review",
				body: "Emails that land in spam folders remain unopened and unnoticed. And no matter how much amount you invest in an email campaign, all your efforts may go in vain if it's not landing in the inbox. That's where you would be at benefit from hiring email experts to market it. Our specialists would run a technical audit to find out the flaws hiding in your email system or existing email setup. The technical audit includes:",
				bodyList: ["Spam complaint", "Issues with deliveries", "Domain and IP blacklisting"],
			},
			{
				icon: "/assets/icons/pie-chart.svg",
				title: "Data Review",
				body: "Another potential reason behind an ineffective email marketing campaign would be an updated email list. It happens because, every year, almost 30% of email addresses become outdated. To make sure that campaigns reap desirable results, our marketing experts of email set up metrics for email, analyze the best and worst email marketing campaigns and check on subscribe and unsubscribe email demographics.",
			},
			{
				icon: "/assets/icons/checklist.svg",
				title: "Suggestions",
				body: "Since you have hired our email marketing specialists, it becomes our duty to present flaws and fixes. It means once we perform an audit, identify problems, and derive solutions, we will present you with them. The recommendations include",
				bodyList: ["Modifying code and design", "Changes in content and CTAs", "Frequency of emails", "A/B testing"],
			},
			{
				icon: "/assets/icons/multidevice.svg",
				title: "Design Attractive Templates",
				body: "What hits your customers' inbox should not be less than a gem. After all, it's your first impression in their minds. Hiring our email marketing firm would offer email design with clean codes, which becomes visible and responsive to all email clients and screen sizes.",
			},
			{
				icon: "/assets/icons/gear.svg",
				title: "Quality Assurance & Testing",
				body: "No matter how creative your emails are, they might fail because of being irresponsive or unintended. Our email company ensures all your newsletters or goes through tools that fetch out code running feasibility and responsiveness and are intended.",
			},
			{
				icon: "/assets/icons/code-monitor.svg",
				title: "Program Review",
				body: [
					"Improving email marketing results would require several strategies, including analyzing email automation, audience segmentation, and the health of your email list. Reviewing everything in detail, especially with tools like ",
					{ text: "Klaviyo email marketing", href: "/klaviyo-email-marketing-agency/" },
					", can provide significant benefits.",
				],
			},
		],
	},

	cta: {
		text: "Pitch Your Target Audience With The Right Email",
		ctaLabel: "Call Us Now",
		ctaHref: "tel:+919106060593",
		btnArrow: BTN_ARROW,
	},

	information: {
		eyebrow: "Email",
		title: "Marketing Campaign",
		cards: [
			{
				title: "Retain, Recover, Repeat: Proven Email Campaign Types for eCommerce Growth",
				blocks: [
					{ type: "p", text: "When it comes to eCommerce branding, sending emails just for the sake of it doesn't cut it anymore. We have a long way from simple newsletters and basic discount offers. Your technologically advanced audience requires smart, clever, and well-crafted email campaigns that ignite the longing to visit your website, check out the product, and hit the purchase button." },
					{ type: "p", text: "In a well-rounded email marketing strategy, relying on a single type of campaign is rarely effective. Instead, businesses should implement a range of targeted campaigns that align with each stage of the customer's buying journey, from initial interest to recovering abandoned carts. Here are different email campaign types that businesses can run:" },
				],
			},
			{
				title: "1. Welcome Emails",
				blocks: [
					{ type: "p", text: "A welcome email is the first message sent to a new subscriber or customer after they sign up for your mailing list or create an account. This is your chance to showcase the best-selling products, customer reviews, and lucrative offers to make the best of this opportunity. The three pillars that hold up the success of welcome emails are:" },
					{ type: "ul", items: [
						"Timing: Send it instantly; we strike while the iron is hot.",
						"Content: This is your brand's first impression; make the copy valuable, clear, and on-brand.",
						"Personalization: Make the email copy feel like a one-on-one conversation.",
					] },
				],
			},
			{
				title: "2. Abandoned Cart Emails",
				blocks: [
					{ type: "p", text: "These are automated reminders sent to customers who added items to their cart but didn't complete the checkout. On average, 70% of people abandon their shopping carts and do not finish the final stage of the checkout process." },
					{ type: "p", text: "Abandoned cart emails are exceptionally well at capturing lost interest. All you need to do is charm them rather than chase the abandoner. Here's how:" },
					{ type: "ul", items: [
						"Highlight the distinguishing features of your products, and encourage them to give their carts a second thought.",
						"Alert them with real-time stock notices (Only 3 left!)",
						"Add product reviews and trust badges",
						"Allure them with time-sensitive deals.",
					] },
				],
			},
			{
				title: "3. Product Recommendation Emails",
				blocks: [
					{ type: "p", text: "Emails that suggest relevant products to customers based on their browsing behavior, past purchases, or popular trends. It is a personalized email, and it is recommended to use AI and ML algorithms to make it feel that way to the recipient. The more relevant the products, the more recipients will be drawn to click the “Buy Now” link." },
					{ type: "p", text: "74% of marketers say targeted personalization increases customer engagement, just like how Amazon uses Amazon Personalize. It is Amazon's product recommendation engine that uses generative AI and machine learning to create hyper-personalized experiences." },
					{ type: "p", text: "Icecube Digital's AI-powered services can assist in integrating powerful AI tools into your workflows easily." },
				],
			},
			{
				title: "4. Promotional & Discount Emails",
				blocks: [
					{ type: "p", text: "These campaigns are focused on driving sales by promoting limited-time offers, new launches, flash sales, or discount codes. Customers love a great deal, especially on their favorite products, and no one would ever want to miss that opportunity. You can run a promotional email campaign for any promotions that you are running, like:" },
					{ type: "ul", items: [
						"Limited-time offers",
						"Seasonal and holiday promotions",
						"Subscriber or customer-exclusive deals",
						"Product launches and new arrivals",
						"New subscriber or customer onboarding offer",
						"Contests and giveaways",
					] },
					{ type: "p", text: "69% of millennials say promotional emails have influenced their purchase decisions. So, promotional emails help in keeping your customers informed, engaged, and connected with your brand." },
				],
			},
			{
				title: "5. Order Confirmation and Shipping Updates",
				blocks: [
					{ type: "p", text: "The order confirmation and shipping update emails are categorized as transactional emails. These emails are automatically sent after a purchase, including order confirmation, shipping status, and delivery tracking." },
					{ type: "p", text: "They keep the customer informed at every step of their browsing journey, often triggered by their actions, like resetting the password or placing the order." },
					{ type: "p", text: "However, small, subtle upgrades in the transactional emails can make them more powerful, like:" },
					{ type: "ul", items: [
						"Cross-sell opportunities without being pushy",
						"Branded and On-Voice Design",
						"Add a section like See how others styled it with Instagram posts",
					] },
				],
			},
			{
				title: "6. Post-Purchase Follow-Up Emails",
				blocks: [
					{ type: "p", text: "Post-purchase follow-up emails are sent after an order has been delivered, asking for feedback, offering support, or suggesting complementary products. Sending an email for feedback is common; however, how your eCommerce brand can distinguish itself from others is by educating the customers on what to do with their purchase." },
					{ type: "p", text: "When a new customer receives your product for the first time, they do not know as much as you know them. You can run a post-purchase follow-up email sequence that:" },
					{ type: "ul", items: [
						"Informs customers more about the product and its benefits",
						"Educates customers on how they make the best use of it and care-taking tips",
						"Suggest to them the styling options",
						"Tell them about the safety tips",
					] },
				],
			},
			{
				title: "7. Re-engagement Campaigns",
				blocks: [
					{ type: "p", text: "Targeted emails aimed at subscribers or customers who haven't interacted with your brand in a while. Your subscriber list must include sleepy subscribers, and these emails serve as a wake-up call to them if done right. These emails are emotionally timed, which strikes a balance between “We miss you” and “See, what you are missing out on”." },
					{ type: "p", text: "Sometimes, people need a reminder, and these emails do not need to be exceptionally creative. A simple message, “We have missed you”, and a discount offer is all you need to get their attention back. You can even showcase the new arrivals in this email sequence." },
				],
			},
			{
				title: "8. Seasonal & Holiday Campaigns",
				blocks: [
					{ type: "p", text: "The seasonal and holiday email campaigns are tied to key shopping seasons and holidays, like Black Friday, Valentine's Day, or Summer Sales. You can send them gift ideas, shopping guides, and announcements about the upcoming sales." },
					{ type: "p", text: "The seasonal drip campaigns usually start with a kick-off announcement email and then follow-up emails with a few time-sensitive offers. Here are some tips that our experts use to make your seasonal email campaigns a success:" },
					{ type: "ul", items: [
						"Divide the seasonal or holiday phase into three parts: pre-sale, live-sale, and post-sale",
						"Use festive, on-brand design to set up the stage",
						"Present the offer upfront and clearly, with no guesswork.",
					] },
				],
			},
			{
				title: "9. VIP or Loyalty Emails",
				blocks: [
					{ type: "p", text: "VIP or loyalty emails are exclusive campaigns that are sent to top-tier customers or loyalty program members. It is no secret that existing customers are more profitable than new customers. Since they are in your existing customer base, they are easier to sell to, they are likely to spend more money, and they already trust you and your products. So, why not celebrate their trust and capitalize on this opportunity by providing some exclusive offers to your loyal customers?" },
					{ type: "p", text: "To start this email sequence, all you need to do is pull a list of your most loyal customers (based on recent purchases, LTV, and some other metric) and send them an exclusive discount offer. However, you need to ensure the following things to get the desired ROI from the email campaign:" },
					{ type: "ul", items: [
						"Make it truly feel exclusive",
						"Give a premium look",
						"Don't be over salesy and include a soft CTA, like access your reward",
					] },
					{ type: "p", text: "You can skip the promo for this and just say thank you with a small reward or heartfelt message for their loyalty to your brand." },
				],
			},
		],
	},

	faq: {
		eyebrow: "Email Marketing",
		title: "FAQs",
		items: [
			{
				question: "What is Email Blast Service?",
				answer: "Our email marketing experts shoot targeted and relevant messages to your newsletter subscribers. Our email marketing professionals leverage email blast service to shoot bulk emails to your target audience.",
			},
			{
				question: "What is Drip Marketing?",
				answer: "Drip marketing is a campaign that sends emails to your target audience on a specific timeline and user actions. The marketing campaign aims to drip valuable information to your target on a timely basis. With Drip marketing, the objective is to make users your paid customers.",
			},
			{
				question: "What are the Different Types of Drip Marketing Campaigns?",
				answer: "There are three main types of Drip marketing campaigns:",
				answerList: [
					"Top-of-Funnel Drip : This marketing campaign initiates the conversation with your prospects.",
					"Educational Drip : This campaign ensures to educate your target audience about your brand and promotion offers.",
					"Re-engagement Drip : This marketing campaign aims at bringing back lost customers to your website and offering them the best service.",
				],
			},
			{
				question: "How Effective is Email Marketing Automation?",
				answer: "Email marketing automation ensures that your customers stay motivated when doing business with your brand. Drip marketing allows:",
				answerList: [
					"Making visitors pay for your product",
					"Send personalized brand image",
					"Increases ROI with email marketing",
					"Increases customer engagement",
					"Identifies abandoned carts",
					"Allows upselling and cross-selling",
				],
			},
			{
				question: "Does email marketing really make money?",
				answer: "Yes, email marketing can really help you make money and fill your sales pipeline with hot and potential leads. According to multiple studies, you can expect the ROI to lie in between $36 – $40 for every dollar spent on email campaigns. There are 3x email accounts than on Facebook and X combined, and there is a 6x chance of getting a click-through from email as compared to X. Email has the highest ROI out of all the available marketing channels out there, so you cannot question its place in your strategy.",
			},
			{
				question: "How much does email marketing cost?",
				answer: "On average, the cost of email marketing ranges from $51 – $1000 every month. However, that’s just a ballpark figure; the actual cost depends on how you execute your strategy. Like whether you are setting up an in-house team, investing in the email marketing platforms in-house, hiring a freelancer, or collaborating with an email marketing agency.",
			},
			{
				question: "Is email marketing still growing or going away?",
				answer: "Even though new communication and marketing channels have emerged, email marketing is not going away. Rather, according to reports, email marketing continues to climb the performance charts with email campaigns’ click-to-conversion rates growing by 27.4% in 2024. Also, 2024 was a record-breaking year because businesses sent nearly 24 billion promotional campaign emails, like never before.",
			},
			{
				question: "What’s the biggest problem in email marketing?",
				answer: "The biggest problem with email marketing is the relevance. An average person in a professional setting receives 121 emails, and around 376.5 emails are exchanged every day. So, it is very important to make the emails more relevant to the sender because that will gain their attention. A person only pays attention to those things that address their needs. If the email doesn’t speak with them, it is likely to get ignored, archived, or worse, marked as spam. So, according to email marketing experts, you can make your campaign relevance with segmentation, personalization, and value-driven messaging.",
			},
			{
				question: "Which is the best AI tool for email marketing?",
				answer: "If you need a software application that automates email marketing end-to-end, then you can use Klaviyo, Shopify Email, MailChimp, Ominsend, or ActiveCampaign. If you are thinking of using Gen AI tools to expedite the process of creating engaging, interactive, tailored, and out-of-the-box email copies, then you can opt for MailerLite, Lavender, ChatGPT, or MailMaestro.",
			},
			{
				question: "Is AI the future of smart, data-driven email marketing?",
				answer: "Absolutely! AI has already been integrated into the email marketing workflows, and the entire lifecycle is automated. From scheduling the emails as per target audience preference to AI optimizing the subject lines and email content for personalization, AI is a team player behind the scenes, ensuring the success of an email marketing campaign.",
			},
			{
				question: "How does machine learning help with email A/B testing?",
				answer: "Machine learning models and algorithms can help in streamlining and speeding up the A/B testing process. With automated variant selection, the algorithm continuously analyzes open rates, click-through rates, conversions, and other KPIs in real time. It automatically routes more traffic to the better-performing version as soon as there’s enough data. There are other ways as well, ML simplifies A/B testing:",
				answerList: [
					"ML can predict which variant is likely to perform better based on the historical data.",
					"Instead of testing a single variable, like the subject line, it can handle multivariate testing.",
					"ML algorithms can match email versions to individual users or micro-segments based on behavior patterns.",
				],
			},
			{
				question: "What new AI trends are coming to email marketing?",
				answer: "AI is evolving, and here are some new trends that can increase the potential of your email campaigns:",
				answerList: [
					"Sentiment-aware personalization: Next-gen AI can detect and respond to emotional context in user data, crafting empathetic, tone-matched messages.",
					"Predictive customer journey mapping: AI is beginning to model entire user journeys, forecasting not just next actions but full sequences, leading to proactive workflow, and not like trigger-based.",
					"Agentic AI: Campaign agents can independently plan, launch, adjust, and optimize email campaigns across channels with minimal human oversight.",
				],
			},
			{
				question: "Can AI really boost your email marketing ROI?",
				answer: "Yes, AI-driven optimization can boost email marketing ROI by up to 300%. According to a study, around 70.6% of respondents believe that AI can do a better job than human marketers in some aspects of marketing, because of predictive analytics, data analysis, and content personalization.",
			},
			{
				question: "What’s the best time to send emails for higher open rates?",
				answer: "In terms of days, marketers prefer to schedule campaigns for Thursday, followed by Friday. Monday has the highest open rates, followed by Tuesday. In terms of times, the 3 pm to 7 pm slot is best for weekdays, and on weekends, emails sent around 9 am have the highest opening rates.",
			},
			{
				question: "What’s the difference between email marketing and newsletters?",
				answer: "The basic difference is that email marketing is promotional, and newsletters are promotional. Email marketing aims to drive actions like sales or sign-ups, while newsletters focus on sharing updates, insights, or content to build relationships.",
			},
			{
				question: "What’s the best email marketing platform for small businesses?",
				answer: "Some of the best email marketing platforms for small businesses are Klaviyo, Sender, Brevo, Omnisend, and MailChimp.",
			},
			{
				question: "What are the key email marketing laws?",
				answer: "CAN-SPAM (Controlling the Assault of Non-Solicited Pornography And Marketing) Act is a US law proposed by the FTC for commercial emails. It requires marketers to use honest subject lines, identify the sender, include a physical address, and provide a clear way for recipients to unsubscribe. It also mandates that opt-out requests be honored within 10 business days.",
			},
			{
				question: "How do I grow my email list organically?",
				answer: "Here are some strategies that you can use to grow your email list organically:",
				answerList: [
					"Add exit-intent or time popups to capture the attention of the visitors",
					"Utilize lead magnets, like discount codes, free shipping, or educational resources",
					"Embed signup forms strategically throughout the website",
					"Offer the visitor email opt-ins post-purchase",
					"Try out the SMS-to-email flow",
					"Create social media exclusive offers that require an email signup to access",
				],
			},
		],
	},

	ourClients: ourClientsSection,

	weServe: true,

	ceoCta: ceoCtaSection,
};

export default EmailMarketingService;
