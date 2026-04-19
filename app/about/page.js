import AboutBannerSection from "../../components/about/AboutBannerSection";
import AboutOurCultureSection from "../../components/about/AboutOurCultureSection";
import AboutOurHeartSection from "../../components/about/AboutOurHeartSection";
import AboutOurValueSection from "../../components/about/AboutOurValueSection";
import AboutTeamSection from "../../components/about/AboutTeamSection";
import AwardsRecognitionSection from "../../components/about/AwardsRecognitionSection";
import GetQuoteSection from "../../components/home/GetQuoteSection";
import HappyCustomersSection from "../../components/home/HappyCustomersSection";
import WeServeSection from "../../components/home/WeServeSection";
import WhyChooseUsSection from "../../components/home/WhyChooseUsSection";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

export const metadata = {
  title: "About Us | Icecube Digital",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutBannerSection />
      <AboutOurHeartSection />
      <AboutOurValueSection />
      <AwardsRecognitionSection />
      <WhyChooseUsSection />
      <AboutTeamSection />
      <AboutOurCultureSection />
      <HappyCustomersSection />
      <GetQuoteSection />
      <WeServeSection />
      <Footer />
    </>
  );
}
