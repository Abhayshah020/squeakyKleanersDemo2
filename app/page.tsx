import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import ChatWidget from "@/components/ChatWidget";

const CompaniesWorkedWith = dynamic(() => import("@/components/CompaniesWorkedWith"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const PriceWeOffer = dynamic(() => import("@/components/PriceWeOffer"));
const SatisfactionGuaranteed = dynamic(() => import("@/components/SatisfactionGuaranteed"));
const CompanyAgenda = dynamic(() => import("@/components/CompanyAgenda"));
const SpecializedQuotationForm = dynamic(() => import("@/components/SpecializedQuotationForm"));
const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfter"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const WhereWeOperate = dynamic(() => import("@/components/WhereWeOperate"));
const DownloadAppSection = dynamic(() => import("@/components/DownloadAppSection"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const KeepInTouch = dynamic(() => import("@/components/KeepInTouch"));
const Footer = dynamic(() => import("@/components/Footer"));

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
