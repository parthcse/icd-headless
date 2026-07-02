import GetQuoteSection from "../components/home/GetQuoteSection";
import HappyCustomersSection from "../components/home/HappyCustomersSection";
import HeroSection from "../components/home/HeroSection";
import LatestNewsSection from "../components/home/LatestNewsSection";
import ServicesSection from "../components/home/ServicesSection";
import SuccessStoriesSection from "../components/home/SuccessStoriesSection";
import TrustedClientsSection from "../components/home/TrustedClientsSection";
import WeServeSection from "../components/home/WeServeSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import YoastSchema from "../components/common/YoastSchema";
import { getYoastMetadataByUri } from "../lib/seo";

export async function generateMetadata() {
  return (await getYoastMetadataByUri("/")) || {};
}

export default function Home() {
  return (
    <>
      <YoastSchema uri="/" />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SuccessStoriesSection />
        <WhyChooseUsSection />
        <HappyCustomersSection />
        <TrustedClientsSection />
        <LatestNewsSection />
        <GetQuoteSection />
        <WeServeSection />
      </main>
      <Footer />
    </>
  );
}
