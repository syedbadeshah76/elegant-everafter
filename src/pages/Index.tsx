import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ServicesSection from "@/components/ServicesSection";
import MidCTA from "@/components/MidCTA";
import OurDesignsSection from "@/components/OurDesignsSection";
import OurAimSection from "@/components/OurAimSection";
import EvolutionTimeline from "@/components/EvolutionTimeline";
import WhyBuyWeddingWebsite from "@/components/WhyBuyWeddingWebsite";
import BuildInvitation from "@/components/BuildInvitation";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
import WeddingStories from "@/components/WeddingStories";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo-schemas";

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
    </main>
  );
};

export default Index;

