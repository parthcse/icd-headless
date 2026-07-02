import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import ContactBannerSection from "@/components/contact/ContactBannerSection";
import ContactOfficesSection from "@/components/contact/ContactOfficesSection";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";
import ServicesCeoCtaSection from "@/components/services/ServicesCeoCtaSection";
import ceoCtaSection from "@/lib/services/common-section/ceo-cta-section";

export const metadata = {
  title: "Contact Us | Icecube Digital",
  description:
    "Get in touch with Icecube Digital. Request a free quote, reach our Sales, Support and HR teams, or visit one of our offices in the USA, UK, Australia and India.",
};

export default function ContactPage() {
  return (
    <>
      <YoastSchema uri="/contact-us/" />
      <Header />
      <main>
        <ContactBannerSection />
        <GetQuoteSection />
        <ContactOfficesSection />
        <WeServeSection />
        <ServicesCeoCtaSection data={ceoCtaSection} />
      </main>
      <Footer />
    </>
  );
}
