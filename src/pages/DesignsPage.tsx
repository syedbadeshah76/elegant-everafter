import Navbar from "@/components/Navbar";
import OurDesignsSection from "@/components/OurDesignsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const DesignsPage = () => (
  <main>
    <Navbar />
    <div className="pt-24">
      <OurDesignsSection />
    </div>
    <Footer />
    <FloatingButtons />
  </main>
);

export default DesignsPage;
