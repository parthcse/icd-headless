import { Fragment } from "react";
import { notFound } from "next/navigation";
import { SERVICES_SLUGS, getServiceData } from "@/lib/services/index";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";

import ServicesBannerSection from "@/components/services/ServicesBannerSection";
import ServicesAchievementsSection from "@/components/services/ServicesAchievementsSection";
import ServicesClientSuccessSection from "@/components/services/ServicesClientSuccessSection";
import ServicesWhyChooseSection from "@/components/services/ServicesWhyChooseSection";
import ServicesClientRetentionSection from "@/components/services/ServicesClientRetentionSection";
import ServicesDevelopmentSection from "@/components/services/ServicesDevelopmentSection";
import ServicesOffersSection from "@/components/services/ServicesOffersSection";
import ServicesPartnerSection from "@/components/services/ServicesPartnerSection";
import ServicesPricingSection from "@/components/services/ServicesPricingSection";
import ServicesCtaSection from "@/components/services/ServicesCtaSection";
import ServicesClientTrustSection from "@/components/services/ServicesClientTrustSection";
import ServicesQualityWebsitesSection from "@/components/services/ServicesQualityWebsitesSection";
import ServicesDevelopmentStepSection from "@/components/services/ServicesDevelopmentStepSection";
import ServicesFaqSection from "@/components/services/ServicesFaqSection";
import ServicesOurClientSection from "@/components/services/ServicesOurClientSection";
import ServicesSeoSaySection from "@/components/services/ServicesSeoSaySection";
import ServicesFacilitySection from "@/components/services/ServicesFacilitySection";
import ServicesTextBoxSection from "@/components/services/ServicesTextBoxSection";
import ServicesClientSaySection from "@/components/services/ServicesClientSaySection";
import ServicesInformationSection from "@/components/services/ServicesInformationSection";
import ServicesSeoAuditFormSection from "@/components/services/ServicesSeoAuditFormSection";
import ServicesSeoPricingSection from "@/components/services/ServicesSeoPricingSection";
import ServicesWpPricingSection from "@/components/services/ServicesWpPricingSection";

/**
 * Every renderable section, keyed by the name used in `sectionOrder` / the
 * service data file. `banner`, `getQuote`, and `weServe` always render;
 * everything else only renders when the matching `data.<key>` is present.
 *
 * To add a new section: build the component and add it here. It will then
 * be available to use as a key in any service data file.
 */
const SECTION_RENDERERS = {
  banner: (data) => <ServicesBannerSection data={data.banner} />,
  facility: (data) => data.facility && <ServicesFacilitySection data={data.facility} />,
  achievements: (data) => data.achievements && <ServicesAchievementsSection data={data.achievements} />,
  testimonials: (data) => data.testimonials && <ServicesClientSaySection data={data.testimonials} />,
  portfolio: (data) => data.portfolio && <ServicesClientSuccessSection data={data.portfolio} />,
  getQuote: () => <GetQuoteSection />,
  textBox: (data) => data.textBox && <ServicesTextBoxSection data={data.textBox} />,
  textBoxSecondary: (data) => data.textBoxSecondary && <ServicesTextBoxSection data={data.textBoxSecondary} />,
  textBoxTertiary: (data) => data.textBoxTertiary && <ServicesTextBoxSection data={data.textBoxTertiary} />,
  textBoxQuaternary: (data) => data.textBoxQuaternary && <ServicesTextBoxSection data={data.textBoxQuaternary} />,
  checkList: (data) => data.checkList && <ServicesWhyChooseSection data={data.checkList} />,
  retentionStats: (data) => data.retentionStats && <ServicesClientRetentionSection data={data.retentionStats} />,
  retentionStatsSecondary: (data) =>
    data.retentionStatsSecondary && <ServicesClientRetentionSection data={data.retentionStatsSecondary} />,
  retentionStatsTertiary: (data) =>
    data.retentionStatsTertiary && <ServicesClientRetentionSection data={data.retentionStatsTertiary} />,
  retentionStatsQuaternary: (data) =>
    data.retentionStatsQuaternary && <ServicesClientRetentionSection data={data.retentionStatsQuaternary} />,
  development: (data) => data.development && <ServicesDevelopmentSection data={data.development} />,
  offers: (data) => data.offers && <ServicesOffersSection data={data.offers} />,
  offersSecondary: (data) => data.offersSecondary && <ServicesOffersSection data={data.offersSecondary} />,
  infoBoxes: (data) => data.infoBoxes && <ServicesPartnerSection data={data.infoBoxes} />,
  infoBoxesSecondary: (data) => data.infoBoxesSecondary && <ServicesPartnerSection data={data.infoBoxesSecondary} />,
  infoBoxesTertiary: (data) => data.infoBoxesTertiary && <ServicesPartnerSection data={data.infoBoxesTertiary} />,
  pricing: (data) => data.pricing && <ServicesPricingSection data={data.pricing} />,
  seoPricing: (data) => data.seoPricing && <ServicesSeoPricingSection data={data.seoPricing} />,
  wpPricing: (data) => data.wpPricing && <ServicesWpPricingSection data={data.wpPricing} />,
  seoAuditForm: (data) => data.seoAuditForm && <ServicesSeoAuditFormSection data={data.seoAuditForm} />,
  cta: (data) => data.cta && <ServicesCtaSection data={data.cta} />,
  iconCards: (data) => data.iconCards && <ServicesClientTrustSection data={data.iconCards} />,
  iconCardsSecondary: (data) => data.iconCardsSecondary && <ServicesClientTrustSection data={data.iconCardsSecondary} />,
  featureCards: (data) => data.featureCards && <ServicesQualityWebsitesSection data={data.featureCards} />,
  featureCardsSecondary: (data) =>
    data.featureCardsSecondary && <ServicesQualityWebsitesSection data={data.featureCardsSecondary} />,
  processSteps: (data) => data.processSteps && <ServicesDevelopmentStepSection data={data.processSteps} />,
  information: (data) => data.information && <ServicesInformationSection data={data.information} />,
  faq: (data) => data.faq && <ServicesFaqSection data={data.faq} />,
  faqSecondary: (data) => data.faqSecondary && <ServicesFaqSection data={data.faqSecondary} />,
  ourClients: (data) => data.ourClients && <ServicesOurClientSection data={data.ourClients} />,
  weServe: () => <WeServeSection />,
  ceoCta: (data) => data.ceoCta && <ServicesSeoSaySection data={data.ceoCta} />,
};

/**
 * Builds the section order from the order keys are written in the service
 * data file itself (object property order), so editing the order of keys
 * in lib/services/your-slug.js reorders the page. `getQuote` and `weServe`
 * don't have their own data blocks, so if they're not explicitly placed by
 * adding e.g. `getQuote: true` / `weServe: true` as a key, they default to
 * their historical positions (after clientSuccess, and before seoSay).
 */
function buildSectionOrder(data) {
  const order = Object.keys(data).filter((key) => key in SECTION_RENDERERS);

  if (!order.includes("getQuote")) {
    const i = order.indexOf("portfolio");
    order.splice(i >= 0 ? i + 1 : 1, 0, "getQuote");
  }
  if (!order.includes("weServe")) {
    const i = order.indexOf("ceoCta");
    order.splice(i >= 0 ? i : order.length, 0, "weServe");
  }

  return order;
}

export function generateStaticParams() {
  return SERVICES_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getServiceData(slug);
  if (!data) return {};
  return {
    title: data.pageTitle,
    description: data.metaDescription,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = getServiceData(slug);
  if (!data) notFound();

  const order = data.sectionOrder ?? buildSectionOrder(data);

  return (
    <>
      <Header />
      {order.map((key) => (
        <Fragment key={key}>{SECTION_RENDERERS[key]?.(data)}</Fragment>
      ))}
      <Footer />
    </>
  );
}
