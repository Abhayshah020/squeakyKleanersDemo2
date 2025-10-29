import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";

const CompanyAgenda = dynamic(() => import("@/components/CompanyAgenda"));
const SpecializedQuotationForm = dynamic(() => import("@/components/SpecializedQuotationForm"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const PriceWeOffer = dynamic(() => import("@/components/PriceWeOffer"));
const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfter"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const SatisfactionGuaranteed = dynamic(() => import("@/components/SatisfactionGuaranteed"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const WhereWeOperate = dynamic(() => import("@/components/WhereWeOperate"));
const DownloadAppSection = dynamic(() => import("@/components/DownloadAppSection"));
const CompaniesWorkedWith = dynamic(() => import("@/components/CompaniesWorkedWith"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const KeepInTouch = dynamic(() => import("@/components/KeepInTouch"));
const Footer = dynamic(() => import("@/components/Footer"));

import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyAgenda />
      <SpecializedQuotationForm />
      <StatsSection />
      <PriceWeOffer />
      <BeforeAfterSlider />
      <Testimonials />
      <SatisfactionGuaranteed />
      <ServicesSection />
      <WhyChooseUs />
      <WhereWeOperate />
      <DownloadAppSection />
      <CompaniesWorkedWith />
      <FaqSection />
      <KeepInTouch />
      <Footer />
      <ChatWidget />
    </>
  );
}
