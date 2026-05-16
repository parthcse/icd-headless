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

  return (
    <>
      <Header />

      {/* Banner is always required */}
      <ServicesBannerSection data={data.banner} />

      {/* All sections below are optional — add the key to a service data file to show it */}
      {data.achievements && <ServicesAchievementsSection data={data.achievements} />}
      {data.clientSuccess && <ServicesClientSuccessSection data={data.clientSuccess} />}

      <GetQuoteSection />

      {data.whyChoose && <ServicesWhyChooseSection data={data.whyChoose} />}
      {data.clientRetention && <ServicesClientRetentionSection data={data.clientRetention} />}
      {data.development && <ServicesDevelopmentSection data={data.development} />}
      {data.offers && <ServicesOffersSection data={data.offers} />}
      {data.partner && <ServicesPartnerSection data={data.partner} />}
      {data.pricing && <ServicesPricingSection data={data.pricing} />}
      {data.cta && <ServicesCtaSection data={data.cta} />}
      {data.clientTrust && <ServicesClientTrustSection data={data.clientTrust} />}
      {data.qualityWebsites && <ServicesQualityWebsitesSection data={data.qualityWebsites} />}
      {data.developmentStep && <ServicesDevelopmentStepSection data={data.developmentStep} />}
      {data.faq && <ServicesFaqSection data={data.faq} />}
      {data.ourClients && <ServicesOurClientSection data={data.ourClients} />}

      <WeServeSection />

      {data.seoSay && <ServicesSeoSaySection data={data.seoSay} />}

      <Footer />
    </>
  );
}
