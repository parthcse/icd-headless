import { Fragment } from "react";
import { notFound } from "next/navigation";
import { SERVICES_SLUGS, getServiceData } from "@/lib/services/index";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";

import ServicesBannerSection from "@/components/services/ServicesBannerSection";
import ServicesAchievementsSection from "@/components/services/ServicesAchievementsSection";
import ServicesPortfolioSection from "@/components/services/ServicesPortfolioSection";
import ServicesCheckListSection from "@/components/services/ServicesCheckListSection";
import ServicesImageTextSection from "@/components/services/ServicesImageTextSection";
import ServicesInfoBoxSection from "@/components/services/ServicesInfoBoxSection";
import ServicesTableDevelopmentPackages from "@/components/services/ServicesTableDevelopmentPackages";
import ServicesTableSeoPackages from "@/components/services/ServicesTableSeoPackages";
import ServicesCtaSection from "@/components/services/ServicesCtaSection";
import ServicesTopIconBoxSection from "@/components/services/ServicesTopIconBoxSection";
import ServicesLeftIconBoxSection from "@/components/services/ServicesLeftIconBoxSection";
import ServicesProcessStepSection from "@/components/services/ServicesProcessStepSection";
import ServicesFaqSection from "@/components/services/ServicesFaqSection";
import ServicesOurClientSection from "@/components/services/ServicesOurClientSection";
import ServicesCeoCtaSection from "@/components/services/ServicesCeoCtaSection";
import ServicesMilestoneSection from "@/components/services/ServicesMilestoneSection";
import ServicesPlainTextSection from "@/components/services/ServicesPlainTextSection";
import ServicesTestimonialSection from "@/components/services/ServicesTestimonialSection";
import ServicesInfoSection from "@/components/services/ServicesInfoSection";
import ServicesSeoAuditFormSection from "@/components/services/ServicesSeoAuditFormSection";
import ServicesTableSeoPlans from "@/components/services/ServicesTableSeoPlans";
import ServicesTableBasic from "@/components/services/ServicesTableBasic";
import ServicesTableCompare from "@/components/services/ServicesTableCompare";

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
  milestone: (data) => data.milestone && <ServicesMilestoneSection data={data.milestone} />,
  achievements: (data) => data.achievements && <ServicesAchievementsSection data={data.achievements} />,
  testimonials: (data) => data.testimonials && <ServicesTestimonialSection data={data.testimonials} />,
  portfolio: (data) => data.portfolio && <ServicesPortfolioSection data={data.portfolio} />,
  getQuote: () => <GetQuoteSection />,
  plainText: (data) => data.plainText && <ServicesPlainTextSection data={data.plainText} />,
  plainTextSecondary: (data) => data.plainTextSecondary && <ServicesPlainTextSection data={data.plainTextSecondary} />,
  plainTextTertiary: (data) => data.plainTextTertiary && <ServicesPlainTextSection data={data.plainTextTertiary} />,
  plainTextQuaternary: (data) => data.plainTextQuaternary && <ServicesPlainTextSection data={data.plainTextQuaternary} />,
  checkList: (data) => data.checkList && <ServicesCheckListSection data={data.checkList} />,
  checkListSecondary: (data) => data.checkListSecondary && <ServicesCheckListSection data={data.checkListSecondary} />,
  imageText: (data) => data.imageText && <ServicesImageTextSection data={data.imageText} />,
  imageTextSecondary: (data) =>
    data.imageTextSecondary && <ServicesImageTextSection data={data.imageTextSecondary} />,
  imageTextTertiary: (data) =>
    data.imageTextTertiary && <ServicesImageTextSection data={data.imageTextTertiary} />,
  imageTextQuaternary: (data) =>
    data.imageTextQuaternary && <ServicesImageTextSection data={data.imageTextQuaternary} />,
  infoBox: (data) => data.infoBox && <ServicesInfoBoxSection data={data.infoBox} />,
  infoBoxSecondary: (data) => data.infoBoxSecondary && <ServicesInfoBoxSection data={data.infoBoxSecondary} />,
  infoBoxTertiary: (data) => data.infoBoxTertiary && <ServicesInfoBoxSection data={data.infoBoxTertiary} />,
  tableDevelopmentPackages: (data) =>
    data.tableDevelopmentPackages && <ServicesTableDevelopmentPackages data={data.tableDevelopmentPackages} />,
  tableSeoPlans: (data) => data.tableSeoPlans && <ServicesTableSeoPlans data={data.tableSeoPlans} />,
  tableBasic: (data) => data.tableBasic && <ServicesTableBasic data={data.tableBasic} />,
  tableSeoPackages: (data) => data.tableSeoPackages && <ServicesTableSeoPackages data={data.tableSeoPackages} />,
  seoAuditForm: (data) => data.seoAuditForm && <ServicesSeoAuditFormSection data={data.seoAuditForm} />,
  cta: (data) => data.cta && <ServicesCtaSection data={data.cta} />,
  topIconBox: (data) => data.topIconBox && <ServicesTopIconBoxSection data={data.topIconBox} />,
  topIconBoxSecondary: (data) => data.topIconBoxSecondary && <ServicesTopIconBoxSection data={data.topIconBoxSecondary} />,
  topIconBoxTertiary: (data) => data.topIconBoxTertiary && <ServicesTopIconBoxSection data={data.topIconBoxTertiary} />,
  topIconBoxQuaternary: (data) => data.topIconBoxQuaternary && <ServicesTopIconBoxSection data={data.topIconBoxQuaternary} />,
  topIconBoxQuinary: (data) => data.topIconBoxQuinary && <ServicesTopIconBoxSection data={data.topIconBoxQuinary} />,
  featureCards: (data) => data.featureCards && <ServicesLeftIconBoxSection data={data.featureCards} />,
  featureCardsSecondary: (data) =>
    data.featureCardsSecondary && <ServicesLeftIconBoxSection data={data.featureCardsSecondary} />,
  featureCardsTertiary: (data) =>
    data.featureCardsTertiary && <ServicesLeftIconBoxSection data={data.featureCardsTertiary} />,
  processSteps: (data) => data.processSteps && <ServicesProcessStepSection data={data.processSteps} />,
  processStepsSecondary: (data) =>
    data.processStepsSecondary && <ServicesProcessStepSection data={data.processStepsSecondary} />,
  information: (data) => data.information && <ServicesInfoSection data={data.information} />,
  tableCompare: (data) => data.tableCompare && <ServicesTableCompare data={data.tableCompare} />,
  faq: (data) => data.faq && <ServicesFaqSection data={data.faq} />,
  faqSecondary: (data) => data.faqSecondary && <ServicesFaqSection data={data.faqSecondary} />,
  ourClients: (data) => data.ourClients && <ServicesOurClientSection data={data.ourClients} />,
  weServe: () => <WeServeSection />,
  ceoCta: (data) => data.ceoCta && <ServicesCeoCtaSection data={data.ceoCta} />,
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
