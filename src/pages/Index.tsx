import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import SEO from "@/components/SEO";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo-schemas";

// Lazy-load below-the-fold sections to shrink the initial bundle & speed up LCP
const OurDesignsSection = lazy(() => import("@/components/OurDesignsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const OurAimSection = lazy(() => import("@/components/OurAimSection"));
const WhyBuyWeddingWebsite = lazy(() => import("@/components/WhyBuyWeddingWebsite"));
const WeddingStories = lazy(() => import("@/components/WeddingStories"));
const EvolutionTimeline = lazy(() => import("@/components/EvolutionTimeline"));
const MidCTA = lazy(() => import("@/components/MidCTA"));
const BuildInvitation = lazy(() => import("@/components/BuildInvitation"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const WhyUsSection = lazy(() => import("@/components/WhyUsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingButtons = lazy(() => import("@/components/FloatingButtons"));

const Fallback = () => <div className="min-h-[200px]" aria-hidden="true" />;

const Index = () => {
  return (
    <main className="overflow-x-clip">
      <SEO
        title="Weddy Dev — Wedding Cards & Wedding Invitation Website Design | Hyderabad"
        description="Premium wedding cards, wedding invitation cards & wedding invitation websites. Custom wedding cards design for Hindu, Muslim & Christian weddings. Rated 4.9/5 by 500+ couples."
        path="/"
        jsonLd={[organizationSchema, localBusinessSchema, websiteSchema]}
      />
      <Navbar />
      <HeroSection />
      <SocialProof />
      <Suspense fallback={<Fallback />}>
        {/* 3rd: Our Designs */}
        <OurDesignsSection />
        {/* 4th */}
        <ServicesSection />
        {/* 5th */}
        <OurAimSection />
        {/* 6th: The Difference */}
        <WhyBuyWeddingWebsite />
        {/* 7th: Real Stories */}
        <WeddingStories />
        <EvolutionTimeline />
        <MidCTA />
        <BuildInvitation />
        <TestimonialsSection />
        <WhyUsSection />
        <AboutSection />
        <ContactSection />
        <FAQSection />
        <Footer />
        <FloatingButtons />
      </Suspense>
    </main>
  );
};

export default Index;
