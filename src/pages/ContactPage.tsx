import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo-schemas";

const ContactPage = () => (
  <main>
    <SEO
      title="Contact Weddy Dev — Wedding Invitation Designers in Hyderabad"
      description="Get in touch with Weddy Dev for custom wedding invitation websites, shaadi cards, and digital invitations. Based in Hyderabad, serving couples across India."
      path="/contact"
      jsonLd={[
        localBusinessSchema,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ]}
    />
    <Navbar />
    <div className="pt-24">
      <ContactSection />
      <FAQSection />
    </div>
    <Footer />
    <FloatingButtons />
  </main>
);

export default ContactPage;
