import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import MidCTA from "@/components/MidCTA";
import BuildInvitation from "@/components/BuildInvitation";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
import WeddingStories from "@/components/WeddingStories";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ServicesSection />
      <PortfolioSection />
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
