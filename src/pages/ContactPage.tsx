import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const ContactPage = () => (
  <PageTransition>
  <main>
    <Navbar />
    <div className="pt-24">
      <ContactSection />
      <FAQSection />
    </div>
    <Footer />
    <FloatingButtons />
  </main>
  </PageTransition>
);

export default ContactPage;
