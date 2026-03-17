import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import SuccessStoriesSection from "../components/home/SuccessStoriesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HappyCustomersSection from "../components/home/HappyCustomersSection";
import TrustedClientsSection from "../components/home/TrustedClientsSection";
import LatestNewsSection from "../components/home/LatestNewsSection";
import GetQuoteSection from "../components/home/GetQuoteSection";
import WeServeSection from "../components/home/WeServeSection";
import FooterSection from "../components/home/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ServicesSection />
        <SuccessStoriesSection />
        <WhyChooseUsSection />
        <HappyCustomersSection />
        <TrustedClientsSection />
        <LatestNewsSection />
        <GetQuoteSection />
        <WeServeSection />
      </div>
      <FooterSection />
    </main>
  );
}