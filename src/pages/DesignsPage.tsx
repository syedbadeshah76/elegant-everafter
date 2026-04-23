import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Star, ExternalLink, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import projectHinduRoyal from "@/assets/project-hindu-royal.jpg";
import projectHinduTemple from "@/assets/project-hindu-temple.jpg";
import projectHinduFloral from "@/assets/project-hindu-floral.jpg";
import projectMuslimNikah from "@/assets/project-muslim-nikah.jpg";
import projectMuslimMughal from "@/assets/project-muslim-mughal.jpg";
import projectMuslimMinimal from "@/assets/project-muslim-minimal.jpg";
import projectMuslimMinimal1 from "@/assets/project-muslim-minimal1.jpg";
import projectChristianGarden from "@/assets/project-christian-garden.jpg";
import projectChristianChurch from "@/assets/project-christian-church.jpg";
import projectChristianRustic from "@/assets/project-christian-rustic.jpg";
import projectGeneralModern from "@/assets/project-general-modern.jpg";
import projectGeneralOcean from "@/assets/project-general-ocean.jpg";
import projectGeneralArtdeco from "@/assets/project-general-artdeco.jpg";

interface DesignItem {
  title: string;
  price: string;
  image: string;
  link: string;
  features: string[];
  badge?: string;
  category: string;
}

const allDesigns: DesignItem[] = [
  // Hindu
  { title: "Royal Rajputana", price: "₹4,999", image: projectHinduRoyal, link: "https://weddy7.netlify.app/", features: ["WhatsApp RSVP", "Countdown Timer", "Venue Map"], badge: "Popular", category: "Hindu" },
  { title: "Floral Mehendi", price: "₹3,499", image: projectHinduFloral, link: "https://weddy9.netlify.app/", features: ["Photo Gallery", "Countdown", "WhatsApp RSVP"], category: "Hindu" },
  { title: "Classic Elegante", price: "₹5,999", image: projectHinduTemple, link: "https://weddy6.netlify.app/", features: ["Video Invite", "RSVP Tracking", "Guest Dashboard"], category: "Hindu" },
  // Muslim
  { title: "Elegant Nikah Invitation", price: "₹4,999", image: projectMuslimNikah, link: "https://asif-ariba-wedding.netlify.app/", features: ["Bilingual Content", "RSVP System", "Venue Info"], badge: "Popular", category: "Muslim" },
  { title: "Classic Wedding Charm", price: "₹6,999", image: projectMuslimMughal, link: "https://weddy3.netlify.app/", features: ["Full Website", "Guest Management", "Travel Guide"], category: "Muslim" },
  { title: "Classic Wedding Elegance", price: "₹4,499", image: projectMuslimMinimal1, link: "https://weddy4.netlify.app/", features: ["Minimal Design", "RSVP", "Photo Gallery"], badge: "New", category: "Muslim" },
  { title: "Wedding Elegance", price: "₹4,499", image: projectMuslimMinimal, link: "https://weddy5.netlify.app/", features: ["Minimal Design", "RSVP", "Photo Gallery"], badge: "New", category: "Muslim" },
  // Christian
  { title: "Garden Romance", price: "₹4,499", image: projectChristianGarden, link: "https://weddydev.com/demo/christian-garden", features: ["Photo Gallery", "Venue Map", "Timeline"], category: "Christian" },
  { title: "Chapel Elegance", price: "₹5,499", image: projectChristianChurch, link: "https://weddydev.com/demo/christian-chapel", features: ["Video Invite", "RSVP", "Registry"], badge: "Popular", category: "Christian" },
  { title: "Rustic Charm", price: "₹3,999", image: projectChristianRustic, link: "https://weddydev.com/demo/christian-rustic", features: ["Botanical Theme", "Guest Book", "Countdown"], category: "Christian" },
  // General
  { title: "Modern Luxe", price: "₹7,999", image: projectGeneralModern, link: "https://weddydev.com/demo/modern-luxe", features: ["Premium Design", "All Features", "Priority Support"], badge: "Premium", category: "General" },
  { title: "Ocean Breeze", price: "₹3,999", image: projectGeneralOcean, link: "https://weddydev.com/demo/ocean-breeze", features: ["Destination Wedding", "Travel Info", "RSVP"], category: "General" },
  { title: "Art Deco Glam", price: "₹6,499", image: projectGeneralArtdeco, link: "https://weddydev.com/demo/art-deco", features: ["Gatsby Theme", "Music", "Photo Gallery"], badge: "New", category: "General" },
];

const categories = ["All", "Hindu", "Muslim", "Christian", "General"];

const DesignCard = ({ design, index }: { design: DesignItem; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.a
      href={design.link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-pointer group block"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
        {!imageLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
        <img
          src={design.image}
          alt={`${design.title} - wedding card design`}
          loading="lazy"
          width={800}
          height={500}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-5 gap-2">
          <span className="flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground font-body text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-soft">
            <Eye size={12} /> Preview
          </span>
        </div>
        <div className="absolute top-3 right-3 gradient-gold text-primary-foreground font-display text-sm sm:text-base font-semibold px-4 py-2 rounded-full shadow-gold ring-2 ring-background/40 z-10">
          {design.price}
        </div>
        {design.badge && (
          <div className={`absolute top-3 left-3 font-body text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1 ${
            design.badge === "Popular" ? "bg-accent text-accent-foreground"
            : design.badge === "Premium" ? "gradient-gold text-primary-foreground"
            : "bg-emerald-500/90 text-white"
          }`}>
            {design.badge === "Popular" && <Star size={10} />}
            {design.badge}
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-base sm:text-lg text-foreground group-hover:text-gold transition-colors">
            {design.title}
          </h3>
          <span className="text-[10px] font-body text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            {design.category}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {design.features.map((feature) => (
            <span key={feature} className="font-body text-[10px] sm:text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const DesignsPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allDesigns : allDesigns.filter((d) => d.category === active);

  return (
    <main className="overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <section className="py-16 md:py-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-gold text-xl sm:text-2xl mb-2">Our Collection</p>
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mb-3">
                All Wedding <span className="text-gradient-gold italic">Invitation Designs</span>
              </h1>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Browse our complete collection of wedding cards and shaadi invitation designs for every culture and style.
              </p>
            </motion.div>

            {/* Filter tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Filter size={16} className="text-muted-foreground self-center mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full font-body text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                    active === cat
                      ? "gradient-gold text-primary-foreground shadow-gold"
                      : "bg-background text-muted-foreground hover:text-gold border border-border"
                  }`}
                >
                  {cat} {cat !== "All" && `(${allDesigns.filter(d => d.category === cat).length})`}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
              layout
            >
              {filtered.map((design, i) => (
                <DesignCard key={design.title} design={design} index={i} />
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-body text-muted-foreground mb-4">
                Don't see what you're looking for? We create custom designs too!
              </p>
              <a
                href="https://wa.me/919160703822?text=Hi%2C%20I%20want%20a%20custom%20wedding%20card%20design.%20Can%20you%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-body text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-gold hover:scale-105 transition-transform"
              >
                <ExternalLink size={14} /> Request Custom Design
              </a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default DesignsPage;
