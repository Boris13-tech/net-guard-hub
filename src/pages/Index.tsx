
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import FeaturedFormations from "@/components/home/FeaturedFormations";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <FeaturedFormations />
      <Testimonials />
      <UpcomingEvents />
      <LatestBlogPosts />
      <CTASection />
    </Layout>
  );
};

export default Index;
