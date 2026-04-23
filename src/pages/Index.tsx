import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ServicesSection from "@/components/ServicesSection";
import MidCTA from "@/components/MidCTA";
import OurDesignsSection from "@/components/OurDesignsSection";
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
        title="Weddy Dev — Premium Wedding Invitation Cards, Shaadi Websites & Digital Wedding Card Design in Hyderabad"
        description="Weddy Dev crafts stunning wedding invitation cards, shaadi websites & digital invitations in Hyderabad. Custom designs for Hindu, Muslim & Christian weddings. Trusted by 500+ couples."
        path="/"
        jsonLd={[organizationSchema, localBusinessSchema, websiteSchema]}
      />
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ServicesSection />
      <OurDesignsSection />
      <MidCTA />
      <BuildInvitation />
      <TestimonialsSection />
      <WhyUsSection />
      <WeddingStories />
      <AboutSection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
