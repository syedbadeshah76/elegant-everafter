import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import OurDesignsSection from "@/components/OurDesignsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const DesignsPage = () => (
  <PageTransition>
    <main>
      <Navbar />
      <div className="pt-24">
        <OurDesignsSection />
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  </PageTransition>
);

export default DesignsPage;
