import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YoastSchema from "@/components/common/YoastSchema";
import PageSchema from "@/components/common/PageSchema";
import { getYoastMetadataByUri } from "@/lib/seo";

import SpecialHero from "@/components/special/SpecialHero";
import TrustStrip from "@/components/special/TrustStrip";
import FeatureCards from "@/components/special/FeatureCards";
import CompareTable from "@/components/special/CompareTable";
import Counters from "@/components/special/Counters";
import StepFlow from "@/components/special/StepFlow";
import ProofCard from "@/components/special/ProofCard";
import FaqAccordion from "@/components/special/FaqAccordion";
import CtaBand from "@/components/special/CtaBand";
import CtaButton from "@/components/special/CtaButton";

const URI = "/icecube-ecommerce-ai-agent/";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri(URI);
  return (
    yoast || {
      title: "Ecommerce AI Agent | AI Add-on That Knows Your Whole Store",
      description:
        "Icecube Digital builds, trains and runs an AI add-on for your Magento, Shopify or WooCommerce store — it learns your whole catalog, orders and policies to answer shoppers 24/7 in their own language, grounded in your real data.",
    }
  );
}

const WHAT_IT_DOES = [
  { icon: "/assets/icons/ai-search.svg", title: "Finds the exact product", body: "Understands what a shopper means and surfaces the right item — by feature, use case, or even a specific SKU typed into chat." },
  { icon: "/assets/icons/transport.svg", title: "Tracks orders live", body: "Pulls real-time order and shipping status on demand — never a stale guess. “Where's my order?” answered in seconds." },
  { icon: "/assets/icons/ai-support.svg", title: "Resolves support & FAQs", body: "Returns, shipping, warranty, payment and sizing — answered from your real policies and help docs, on-brand." },
  { icon: "/assets/icons/ai-cart.svg", title: "Recommends & upsells", body: "Suggests relevant products, accessories and bundles in the flow of conversation — turning questions into bigger baskets." },
  { icon: "/assets/icons/ai-shield.svg", title: "Won't make things up", body: "Answers only from your store. If confidence is low it hands off to a human instead of inventing prices, stock or policies." },
  { icon: "/assets/icons/ai-team.svg", title: "Learns from your team", body: "A great answer can be saved and reused — but only after your team approves it. It gets sharper every week, on your terms." },
  { icon: "/assets/icons/note.svg", title: "Serves how-to & install guides", body: "Matches each product to its correct setup or installation guide and video automatically — fewer “how do I fit this?” tickets." },
  { icon: "/assets/icons/ai-nlp.svg", title: "Speaks your customers' language", body: "Multilingual out of the box — it detects and replies in the shopper's language, ideal for cross-border stores." },
  { icon: "/assets/icons/ai-analytics.svg", title: "Hands you the data", body: "A dashboard shows what shoppers ask, what was resolved and where it handed off — so you keep improving the store." },
];

const WHY_DIFFERENT = [
  { icon: "/assets/icons/database.svg", title: "Answers from your whole store", body: "Every reply is pulled from your live store — catalog, orders, FAQs, policies and past tickets — not a script. A confidence threshold means it would rather hand off than guess." },
  { icon: "/assets/icons/smart-search.svg", title: "Finds products search misses", body: "A dedicated keyword and SKU layer catches exact-match queries — a model name, a part number, a feature term — that ordinary semantic search quietly drops." },
  { icon: "/assets/icons/ai-bulb.svg", title: "Gets smarter with your approval", body: "Strong answers become reusable knowledge — reviewed and edited by your team before they go live. Continuous improvement you stay in control of." },
  { icon: "/assets/icons/user-team.svg", title: "Human handoff with context", body: "When a question is sensitive or low-confidence, it escalates to your team with the full conversation — nobody starts from scratch." },
  { icon: "/assets/icons/lock.svg", title: "Your data stays private", body: "Your content lives in a private knowledge base built for your store. It isn't used to train public models, and access follows least-privilege." },
  { icon: "/assets/icons/ai-gear.svg", title: "Fully managed for you", body: "We design, host, monitor and keep tuning it. No platform migration, no prompt engineering — you point us at your store and review results." },
];

const COMPARE_ROWS = [
  ["Knows your whole store — orders, policies, content", "FAQ only", { icon: "check", title: "Yes" }],
  ["Answers from live catalog & stock", "Scripted", { icon: "check", title: "Yes" }],
  ["Real-time order & shipping status", "Rarely", { icon: "check", title: "Yes" }],
  ["Refuses to invent answers", "Hallucinates", { icon: "check", title: "Guardrailed" }],
  ["Exact SKU / model-number lookup", "Misses", { icon: "check", title: "Yes" }],
  ["Learns — with your team's approval", "Static", { icon: "check", title: "Yes" }],
  ["Built, hosted & tuned for you", "DIY", { icon: "check", title: "Fully managed" }],
];

const STEPS = [
  { title: "Install", body: "The add-on connects to your store and helpdesk — Magento, Shopify, WooCommerce, Zendesk and more." },
  { title: "Learn", body: "It reads your whole store — catalog, orders, FAQs, policies and tickets — into a private knowledge base." },
  { title: "Tune", body: "We calibrate retrieval, tone and guardrails to your brand and test against real questions." },
  { title: "Launch", body: "A lightweight widget goes live on your site. No theme rebuild, no migration." },
  { title: "Improve", body: "Analytics and approval-gated learning make it more accurate every week." },
];

const COUNTERS = [
  { value: "250+", label: "Happy Clients" },
  { value: "500+", label: "Successfully optimised websites" },
  { value: "100%", label: "Customer satisfaction" },
  { value: "14y", label: "Years of unparalleled service" },
];

const FAQS = [
  { question: "Which platforms do you support?", answer: "Magento, Shopify and WooCommerce out of the box, plus custom and headless stores — anything with an API we can read your catalog and orders from. Helpdesks like Zendesk connect for tickets and handoff." },
  { question: "How long until it's live?", answer: "Typically two to four weeks, depending on catalog size and how many data sources we connect. We handle ingestion, tuning and testing; you review the answers before it goes public." },
  { question: "Will it make up answers about my products?", answer: "No. Every reply is grounded in your own store data, and a confidence threshold stops it from answering when it isn't sure — it hands off to a human instead. That guardrail is core to how we build it." },
  { question: "What about our data and privacy?", answer: "Your content lives in a private knowledge base built for your store and isn't used to train public models. We scope data access to what the add-on needs and follow least-privilege practices." },
  { question: "Do we have to manage it?", answer: "No — it's fully managed. We build, host, monitor and keep tuning it. Your only ongoing job is the one you should own: approving the answers it learns." },
  { question: "Can it hand off to our human team?", answer: "Yes. When a question is sensitive or low-confidence, it escalates to your team with the full conversation context, so nobody starts from scratch." },
];

export default function EcommerceAiAgentPage() {
  return (
    <>
      <YoastSchema uri={URI} />
      <Header />
      <main>
        <SpecialHero
          eyebrow="Ecommerce AI Add-on"
          heading={["An AI add-on that knows your ", { accent: "whole store" }, " — and answers for it 24/7."]}
          paragraphs={[
            "Icecube Digital builds, trains and runs an AI assistant that installs onto your existing Magento, Shopify or WooCommerce store. It learns all of it — products, orders, policies and content — and answers shoppers instantly, in their own language. Grounded in your real data, so it never makes things up.",
          ]}
          primary={{ label: "Book a demo", href: "popup" }}
          phone={{ label: "Call +91 91060 60593", href: "tel:+919106060593" }}
          rating={[
            { value: "5.0", label: "Clutch" },
            { value: "4.9", label: "GoodFirms" },
            { value: "14 yrs", label: "in ecommerce" },
          ]}
          media="/assets/gifs/ecommerce-ai-agent-hero.gif"
          mediaAlt="Animated demo of the Icecube AI store assistant answering a shopper's product and order questions in a chat window."
        />

        <TrustStrip
          label="Built on a certified ecommerce team"
          items={["Magento Certified", "Shopify Partner", "WooCommerce", "Clutch & GoodFirms Top Dev"]}
        />

        <FeatureCards
          eyebrow="What It Does"
          title="One add-on that knows your entire store."
          subtitle="Because it reads your whole store — products, orders, policies and content — it handles the repetitive work your team does all day, instantly and in any language, around the clock."
          items={WHAT_IT_DOES}
        />

        <FeatureCards
          tinted
          eyebrow="Why It's Different"
          title="Most “AI chatbots” guess. This one is built to be trusted."
          subtitle="Anyone can bolt a generic chatbot onto a store. The hard part — where we've spent the engineering — is making it accurate, grounded and improvable on real ecommerce data."
          items={WHY_DIFFERENT}
        />

        <CompareTable
          eyebrow="The Difference at a Glance"
          title="The Icecube add-on vs. a generic chatbot."
          columns={["Capability", "Generic chatbot", "Icecube add-on"]}
          rows={COMPARE_ROWS}
        />

        <Counters items={COUNTERS} />

        <StepFlow
          eyebrow="How It Works"
          title="From install to a store that answers for itself, in weeks."
          subtitle="We run the whole thing end to end — you don't replatform, add a separate tool, or manage prompts."
          steps={STEPS}
        />

        <ProofCard
          eyebrow="Live in Production"
          title="Already answering real shoppers."
          brand="Visor"
          context="Magento store · premium sun-protection blinds · Norway"
          metrics={[
            { value: "24/7", label: "Coverage in the shopper's language" },
            { value: "3", label: "Sources: catalog, orders & support" },
          ]}
          quote="“It answers product, order and install questions the moment customers ask — day or night, in Norwegian or English.”"
          body="On Visor's Magento store the add-on handles product discovery (down to a specific Cordlock SKU), live order status and install-guide lookups — grounded in the store's own catalog and policies, with a human handoff whenever it isn't certain."
        />

        <section className="full-section">
          <div className="container mx-auto max-w-3xl text-center animate fadeUp">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">Packages</p>
            <h2 className="mb-4 font-36 font-bold leading-tight">Pick the scope. We handle the build and the running.</h2>
            <p className="mb-6 text-muted">Every plan is fully managed — design, training, hosting and ongoing tuning included.</p>
            <CtaButton href="popup" label="Get a quote" />
          </div>
        </section>

        <FaqAccordion eyebrow="Questions" title="The things buyers ask us first." items={FAQS} />

        <CtaBand
          text="See it answer your customers' questions."
          subtitle="Book a 30-minute demo and we'll show the add-on working on a store like yours — then map what it would take for yours."
          primary={{ label: "Book a demo", href: "popup" }}
          secondary={{ label: "Chat on WhatsApp", href: "https://wa.me/919106060593" }}
        />

      </main>
      <PageSchema uri={URI} />
      <Footer />
    </>
  );
}
