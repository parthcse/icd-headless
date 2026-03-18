import { Suspense } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import SuccessStoriesSection from "../components/home/SuccessStoriesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import HappyCustomersSection from "../components/home/HappyCustomersSection";
import TrustedClientsSection from "../components/home/TrustedClientsSection";
import LatestNewsSection from "../components/home/LatestNewsSection";
import GetQuoteSection from "../components/home/GetQuoteSection";
import WeServeSection from "../components/home/WeServeSection";
import SuccessStoriesSkeleton from "../components/home/skeletons/SuccessStoriesSkeleton";
import TestimonialsSkeleton from "../components/home/skeletons/TestimonialsSkeleton";
import BlogSkeleton from "../components/home/skeletons/BlogSkeleton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <HeroSection />
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <ServicesSection />
          <Suspense fallback={<SuccessStoriesSkeleton />}>
            <SuccessStoriesSection />
          </Suspense>
          <WhyChooseUsSection />
          <Suspense fallback={<TestimonialsSkeleton />}>
            <HappyCustomersSection />
          </Suspense>
          <TrustedClientsSection />
          <Suspense fallback={<BlogSkeleton />}>
            <LatestNewsSection />
          </Suspense>
          <GetQuoteSection />
          <WeServeSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
