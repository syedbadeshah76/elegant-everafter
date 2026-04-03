import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const AboutPage = () => (
  <PageTransition>
  <main>
    <Navbar />
    <div className="pt-24">
      <AboutSection />
      <WhyUsSection />
    </div>
    <Footer />
    <FloatingButtons />
  </main>
  </PageTransition>
);

export default AboutPage;
