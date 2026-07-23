import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YoastSchema from "@/components/common/YoastSchema";
import PageSchema from "@/components/common/PageSchema";
import { getYoastMetadataByUri } from "@/lib/seo";

import SpecialHero from "@/components/special/SpecialHero";
import TrustStrip from "@/components/special/TrustStrip";
import StatTiles from "@/components/special/StatTiles";
import WhatsappChatDemo from "@/components/special/WhatsappChatDemo";
import StackCard from "@/components/special/StackCard";
import StepFlow from "@/components/special/StepFlow";
import FeatureCards from "@/components/special/FeatureCards";
import SplitCards from "@/components/special/SplitCards";
import CostTable from "@/components/special/CostTable";
import FaqAccordion from "@/components/special/FaqAccordion";
import CtaBand from "@/components/special/CtaBand";

const URI = "/ai-whatsapp-quoting-system/";
const WA = "https://api.whatsapp.com/send?phone=919106060593";
const PHONE = { label: "Call +91 91060 60593", href: "tel:+919106060593" };

// Rendered as their own band below the TrustStrip (not inside the hero).
const STATS = [
  { value: "Seconds", label: "From a customer's message to a ready-to-send quote" },
  { value: "24/7", label: "Quotes drafted instantly, even after hours" },
  { value: "1 chat", label: "No app, no forms — it all happens in WhatsApp" },
  { value: "Auto", label: "Quotes, amendments and reminders — handled for you" },
];

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri(URI);
  return (
    yoast || {
      title: "AI WhatsApp Quoting System | Icecube Digital",
      description:
        "An AI agent that turns every WhatsApp message into a ready-to-send quote — it reads the request, drafts the order in your store, and replies in the same chat.",
    }
  );
}

const STACK = [
  { title: "WhatsApp Business API", body: "Inbound message via Meta Cloud API." },
  { title: "AI conversational agent", body: "Claude or GPT reads & interprets." },
  { title: "n8n orchestration", body: "State, routing, mapping, scheduling." },
  { title: "Your ecommerce platform", body: "Draft order + customer pricing via API." },
  { title: "Back to WhatsApp", body: "Quote, checkout link & reminders." },
];

const STEPS = [
  { title: "Customer messages in", body: "They text your sales number on WhatsApp, exactly like they do now." },
  { title: "AI understands it", body: "It reads the message and confirms the exact product, variant and quantity with the customer." },
  { title: "It fills the gaps", body: "Quantity, variant, delivery date — it asks follow-ups until nothing's missing." },
  { title: "Draft order is built", body: "A draft order is created in your store with line items and that customer's own pricing." },
  { title: "Quote goes back", body: "Summary and checkout link land in the same chat — with a reminder set for the delivery date." },
];

const CORE = [
  { icon: "/assets/icons/ai-nlp.svg", title: "AI conversational agent", body: "Claude or GPT reads the request in plain language, asks smart follow-ups, and confirms the exact product, variant and quantity." },
  { icon: "/assets/icons/ai-cart.svg", title: "Draft order + checkout link", body: "Builds a draft order in your store with the right line items, then sends the quote and a checkout link straight back into the chat." },
  { icon: "/assets/icons/comment.svg", title: "All inside WhatsApp", body: "No new app, no forms. Customers message the number they already use, and the whole quote happens right there in the thread." },
];

const ADDONS = [
  { icon: "/assets/icons/ai-team.svg", title: "Your whole sales team, one system", body: "Run the same AI across every sales-team WhatsApp number on one shared workflow — add as many numbers as you need." },
  { icon: "/assets/icons/wallet.svg", title: "Customer accounts & pricing", body: "Link each customer to their account and apply their own price lists or B2B pricing, pulled live from your store." },
  { icon: "/assets/icons/note-edit.svg", title: "Amend quotes by chat", body: "“Actually make it 60 units” updates the existing draft order — no need to start over." },
  { icon: "/assets/icons/timer.svg", title: "Delivery-date reminders", body: "Captures the required date and nudges the customer the morning before, so the order ships in time." },
  { icon: "/assets/icons/navigate-into.svg", title: "Dedicated sales-agent routing", body: "Link each customer to a specific agent so quotes and follow-ups route to the right person on your team." },
  { icon: "/assets/icons/hand-support.svg", title: "Human handoff & alerts", body: "Customers can ask for a person anytime; unconverted quotes alert your team via Slack or email so nothing slips." },
];

const MANDATORY = [
  { title: "Core AI agent & quoting", text: "— understands the request, matches the product, variant & quantity, and quotes in natural language" },
  { title: "Draft order + checkout link", text: "— builds the draft in your store and sends the quote back in the chat" },
  { title: "WhatsApp Business API & n8n setup", text: "— the connection and workflow that powers everything" },
  { title: "Customer onboarding flow", text: "— identifies and captures customers as they message in" },
  { title: "Testing, logging, docs & handover", text: "— prompt templates, flows, an ops guide and a walkthrough" },
];

const ADDON_LIST = [
  { title: "All your sales numbers", text: "— run the same AI across every sales-team number" },
  { title: "Customer accounts & pricing", text: "— per-customer price lists and B2B pricing from your store" },
  { title: "Quote amendments by chat", text: "— “make it 60 units” updates the existing draft" },
  { title: "Delivery-date reminders", text: "— captures the date and nudges before it's due" },
  { title: "Dedicated sales-agent routing", text: "— link each customer to a specific agent" },
  { title: "Human handoff & team alerts", text: "— escalate to a person; flag unconverted quotes" },
];

const COST_ROWS = [
  ["WhatsApp Business API (Meta)", "$10–200", "Per-message pricing, set by Meta per recipient country. Scales with the number of quotes you send."],
  ["n8n", "$0–50", "Self-hosted is free (needs a small VPS); n8n Cloud starts around $25."],
  ["AI / LLM API", "$30–500", "Claude or OpenAI. A typical 3–5 turn quote costs ~$0.03–0.05."],
  ["Your ecommerce platform", "Included", "Draft orders and quotes use your existing store plan via its API — no added cost."],
  ["VPS / hosting", "From $25", "Only if self-hosting n8n. Starts around $25 and scales with the load the server needs."],
  ["Estimated total", "$75–900", "Low volume (~500 quotes/mo) up to high volume (~10,000 quotes/mo)."],
];

// Business-impact benefits — sits between "How It Works" and "What's Included"
// so the reader gets mechanism → why it matters → scope. Icons are reused from
// elsewhere on this page, so the section adds no new asset requests.
const IMPACT = [
  { icon: "/assets/icons/timer.svg", title: "Speed wins the order", body: "When a buyer asks three suppliers, the first quote back usually wins. Replying in seconds instead of hours puts you first far more often — on the same enquiries you already get." },
  { icon: "/assets/icons/ai-team.svg", title: "Your team sells instead of typing", body: "Reps stop stopping mid-task to look up stock, pricing and line items. The same headcount handles far more enquiries — capacity grows without hiring." },
  { icon: "/assets/icons/comment.svg", title: "After-hours enquiries stop leaking", body: "A message at 9pm or on a Sunday gets a quote immediately instead of going cold overnight — or getting answered by a competitor first." },
  { icon: "/assets/icons/wallet.svg", title: "Margin protected on every quote", body: "Every price is pulled from your store's own price lists, so nobody under-quotes from memory or applies the wrong customer's rate. Fewer pricing errors, less margin quietly lost." },
  { icon: "/assets/icons/hand-support.svg", title: "Fewer deals slip through the cracks", body: "Delivery-date reminders and unconverted-quote alerts mean follow-up doesn't depend on someone remembering. Quotes that would have gone quiet get chased automatically." },
  { icon: "/assets/icons/shield-check.svg", title: "More throughput, no added risk", body: "Orders stay drafts until a human confirms, and running costs scale with volume rather than a fixed licence — so you grow quoting capacity without new fixed cost or a bad live order." },
];

const WHY_US = [
  { icon: "/assets/icons/award-badge.svg", title: "15+ years in eCommerce", body: "Deep, hands-on experience building commerce and automation across hundreds of ecommerce stores and custom builds." },
  { icon: "/assets/icons/workflow.svg", title: "Built for your workflow", body: "We design around how your sales team and your customers already work — not a rigid off-the-shelf bot." },
  { icon: "/assets/icons/shield-check.svg", title: "Drafts, never surprises", body: "Orders stay manual to confirm. You keep control of stock, payment and pricing while the AI does the legwork." },
  { icon: "/assets/icons/layers.svg", title: "Phased, low-risk delivery", body: "Go live on a few numbers first, prove the value, then scale to the whole team with confidence." },
  { icon: "/assets/icons/note.svg", title: "Documented & handed over", body: "You get prompt templates, flow docs, an ops guide and a walkthrough — so your team isn't dependent on us." },
  { icon: "/assets/icons/support-call.svg", title: "Ongoing support", body: "Maintenance and refinement once you're live, with transparent communication every step of the way." },
];

const FAQS = [
  { question: "Do we need WhatsApp Business API access?", answer: "Yes. The system connects through Meta's WhatsApp Business API (Cloud API), which requires a verified Meta Business account. We guide you through approval and the technical connection as part of the build." },
  { question: "Will it use our existing store pricing?", answer: "It reads pricing directly from your store using customer groups, price lists or B2B pricing. Pricing stays in one place — the AI simply pulls the correct price for each customer's account, so different customers always see their own rates." },
  { question: "Does it place live orders automatically?", answer: "No — and that's deliberate. It creates draft orders in your store. Your team reviews each one, confirms stock and payment, and converts it to a live order. The system alerts your team — or the customer's dedicated agent, if you use that option — when they're ready to proceed, so nothing slips." },
  { question: "How are customers matched to the right account and pricing?", answer: "A mapping layer links each customer's phone number to their account in your store, so every quote is created against the correct account and priced correctly. If several people from the same business message in, they're all tied back to the same account — keeping your data clean. Optionally, you can also assign each customer to a dedicated sales agent so quotes route to the right person on your team." },
  { question: "Can customers change a quote after it's sent?", answer: "Yes. They can amend conversationally — “actually make it 60 units” or “add 10 more” — and the AI updates the existing draft order. No need to request a fresh quote." },
  { question: "How does the build work?", answer: "We start with the mandatory foundation — the core agent, quoting, draft orders, the WhatsApp and n8n setup, and customer onboarding — so you're quoting through WhatsApp early. From there we add whichever add-ons you've chosen, either in the same project or layered in later. We scope and sequence it around what matters most to you." },
  { question: "What does it cost?", answer: "Monthly running costs (third-party platforms) land between roughly $75 and $900 depending on volume — see the running-costs section above. The one-off development cost is quoted separately based on the core system plus any add-ons you choose. Request a proposal and we'll put a figure to it." },
];

export default function AiWhatsappQuotingSystemPage() {
  return (
    <>
      <YoastSchema uri={URI} />
      <Header />
      <main>
        <SpecialHero
          eyebrow="AI · WhatsApp · Ecommerce · n8n"
          heading={["Turn every WhatsApp message into a ", { accent: "ready-to-send quote." }]}
          paragraphs={[
            "An AI agent reads the customer's message, confirms the product and quantity, asks for anything missing, and drafts the order in your store — then sends the quote straight back in the same chat. A WhatsApp quoting system for any ecommerce store, built for your whole sales team and orchestrated end-to-end with n8n.",
          ]}
          primary={{ label: "Get a proposal", href: "popup" }}
          secondary={{ label: "Chat with us", href: WA }}
          chips={["Meta WhatsApp Business API", "Draft orders & checkout", "n8n orchestration"]}
          media={<WhatsappChatDemo />}
        />

        <TrustStrip
          label="Trusted commerce engineering since 2009"
          items={["15+ yrs experience", "300+ projects shipped", "★ 5.0 Clutch · 4.9 GoodFirms"]}
        />

        <StatTiles items={STATS} />

        <StackCard
          eyebrow="What It Is"
          title="Quoting that lives where your customers already are — WhatsApp."
          paragraphs={[
            "Your customers don't fill in forms. They send a message: “Can I get a quote for 50 of these by Friday?” Today that means a salesperson stops what they're doing, checks stock, looks up the customer's pricing in your store, builds a draft, and types it all back.",
            "This system does all of that in seconds. An LLM-powered agent understands the request in plain language, confirms the product and quantity, pulls the right price for that customer's account, creates a draft order in your store, and sends the quote and checkout link back in the same thread — then chases the order before the delivery date.",
          ]}
          bullets={[
            [{ bold: "No new app for customers to learn." }, " They keep texting the rep's number. The AI just answers faster."],
            [{ bold: "Your team stays in control." }, " Draft orders only — a human confirms stock and payment before it goes live."],
            [{ bold: "Pricing stays in your store." }, " One source of truth. The AI reads each customer's price — never invents one."],
          ]}
          stackLabel="The Stack"
          stackItems={STACK}
        />

        <StepFlow
          eyebrow="How It Works"
          title="Message in, quote out — in five steps."
          subtitle="Every quote follows the same path, whether it's the first message of the day or the hundredth."
          steps={STEPS}
        />

        <FeatureCards
          eyebrow="Business Impact"
          title="What faster quoting actually does to your numbers."
          subtitle="Quoting isn't admin — it's the moment a sale is won or lost. Here's what changes when that moment takes seconds instead of hours."
          items={IMPACT}
        />

        <FeatureCards
          tinted
          eyebrow="What's Included"
          title="Start with the core. Add what you need."
          subtitle="Every build begins with the core quoting system — the part that turns a WhatsApp message into a ready quote. From there, pick the add-ons that fit how you sell."
          coreLabel="Core — in every build"
          coreItems={CORE}
          itemsLabel="Add-ons"
          itemsSubtitle="Pick what fits how you sell — choose any, in any order"
          items={ADDONS}
        />

        <SplitCards
          eyebrow="The Build"
          title="What's mandatory, and what's an add-on."
          footnote="Every build includes the mandatory foundation. Add-ons can ship in the same project or come later — we scope it around your priorities."
          cards={[
            { label: "Mandatory", title: "The foundation, in every build", highlight: true, intro: "The mandatory items are the foundation every build needs to go live with quoting on WhatsApp.", items: MANDATORY },
            { label: "Add-ons", title: "Optional — choose what you need", intro: "Add-ons are optional — pick the ones that fit how you sell, in the same project or layered in later.", items: ADDON_LIST },
          ]}
        />

        <CostTable
          eyebrow="Transparent Running Costs"
          title="What it costs to keep running, monthly."
          intro="These are third-party platform fees only — example rates that vary by region and volume. Development is quoted separately as a one-off build."
          callout={[{ bold: "Pay as you grow." }, " You only pay for what you use — message volume, AI usage and hosting all scale with how many quotes you send. There are no big fixed platform licences to buy upfront."]}
          columns={["Service", "Est. cost / month (USD)", "What it covers"]}
          rows={COST_ROWS}
          footnote="WhatsApp message rates are set by Meta and depend on the recipient's country code, not your location. The figures shown are examples and may shift as Meta updates pricing — we'll size them to your market and volume."
        />

        <FeatureCards
          eyebrow="Why Icecube Digital"
          title="A commerce team that's shipped this kind of integration before."
          items={WHY_US}
        />

        <FaqAccordion eyebrow="Good to Know" title="Frequently Asked Questions" items={FAQS} />

        <CtaBand
          eyebrow="Get Started"
          text="Let's turn your WhatsApp into a quoting machine."
          subtitle="Tell us about your products, your store and how your team quotes today. We'll come back with a phased plan and a fixed proposal."
          primary={{ label: "Request a proposal", href: "popup" }}
          secondary={{ label: "Message us on WhatsApp", href: WA }}
          phone={PHONE}
        />

      </main>
      <PageSchema uri={URI} />
      <Footer />
    </>
  );
}
