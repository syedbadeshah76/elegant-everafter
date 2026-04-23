import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import {
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/seo-schemas";

const AboutPage = () => (
  <main>
    <SEO
      title="About Weddy Dev — Hyderabad's Wedding Invitation Studio"
      description="Meet the team behind Weddy Dev — a Hyderabad-based studio crafting premium wedding invitation websites and shaadi cards for couples across India."
      path="/about"
      jsonLd={[
        organizationSchema,
        localBusinessSchema,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ]}
    />
    <Navbar />
    <div className="pt-24">
      <AboutSection />
      <WhyUsSection />
    </div>
    <Footer />
    <FloatingButtons />
  </main>
);

export default AboutPage;
