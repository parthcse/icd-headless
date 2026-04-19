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

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <WhyChooseUsSection />
      <HappyCustomersSection />
      <TrustedClientsSection />
      <LatestNewsSection />
      <GetQuoteSection />
      <WeServeSection />
      <Footer />
    </>
  );
}
