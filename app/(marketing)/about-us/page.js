import AboutBannerSection from "@/components/about/AboutBannerSection";
import AboutOurCultureSection from "@/components/about/AboutOurCultureSection";
import AboutOurHeartSection from "@/components/about/AboutOurHeartSection";
import AboutOurValueSection from "@/components/about/AboutOurValueSection";
import AboutTeamSection from "@/components/about/AboutTeamSection";
import AboutAwardsRecognitionSection from "@/components/about/AboutAwardsRecognitionSection";
import AboutLastAgencySection from "@/components/about/AboutLastAgencySection";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import HappyCustomersSection from "@/components/home/HappyCustomersSection";
import WeServeSection from "@/components/home/WeServeSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/about-us/");
  return yoast || {
  title: "About Us | Icecube Digital",
};
}

export default function AboutPage() {
  return (
    <>
      <YoastSchema uri="/about-us/" />
      <Header />
      <main>
        <AboutBannerSection />
        <AboutOurHeartSection />
        <AboutOurValueSection />
        <AboutAwardsRecognitionSection />
        <AboutLastAgencySection />
        <WhyChooseUsSection />
        <AboutTeamSection />
        <AboutOurCultureSection />
        <HappyCustomersSection />
        <GetQuoteSection />
        <WeServeSection />
      </main>
      <PageSchema uri="/about-us/" />
      <Footer />
    </>
  );
}
