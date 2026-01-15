import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FormationsSection from "@/components/home/FormationsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FormationsSection />
      <WhyChooseUs />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
