import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Palette, Clock, Users, Smartphone, Star, MapPin, Gift, CalendarHeart } from "lucide-react";
import { Link } from "react-router-dom";

const designCategories = [
  {
    category: "Hindu Designs",
    designs: [
      {
        title: "Royal Rajputana",
        price: "₹4,999",
        colors: ["#8B0000", "#D4AF37", "#FFF8DC"],
        features: ["WhatsApp RSVP", "Countdown Timer", "Venue Map"],
        icon: Palette,
      },
      {
        title: "Sacred Mandala",
        price: "₹3,999",
        colors: ["#FF6B35", "#F7C948", "#FFFBE6"],
        features: ["Digital Invitation", "Event Timeline", "Photo Gallery"],
        icon: CalendarHeart,
      },
      {
        title: "Temple Gold",
        price: "₹5,999",
        colors: ["#B8860B", "#DAA520", "#FFF5E1"],
        features: ["Video Invite", "RSVP Tracking", "Guest Dashboard"],
        icon: Star,
      },
      {
        title: "Floral Mehendi",
        price: "₹3,499",
        colors: ["#228B22", "#FFD700", "#FFF8DC"],
        features: ["WhatsApp RSVP", "Photo Gallery", "Countdown"],
        icon: Gift,
      },
      {
        title: "Peacock Glory",
        price: "₹6,999",
        colors: ["#004D40", "#26A69A", "#E0F2F1"],
        features: ["Full Website", "RSVP System", "Video Integration"],
        icon: Users,
      },
    ],
  },
  {
    category: "Muslim Designs",
    designs: [
      {
        title: "Emerald Nikah",
        price: "₹4,999",
        colors: ["#006400", "#C0C0C0", "#F5F5DC"],
        features: ["Bilingual Content", "RSVP System", "Venue Info"],
        icon: MapPin,
      },
      {
        title: "Crescent Moon",
        price: "₹3,999",
        colors: ["#1A237E", "#FFD700", "#ECEFF1"],
        features: ["Digital Invitation", "Countdown Timer", "Gallery"],
        icon: CalendarHeart,
      },
      {
        title: "Calligraphy Elegance",
        price: "₹5,499",
        colors: ["#004D40", "#D4AF37", "#F5F5F5"],
        features: ["Urdu Typography", "Video Invite", "RSVP"],
        icon: Palette,
      },
      {
        title: "Royal Mughal",
        price: "₹6,999",
        colors: ["#311B92", "#FFD54F", "#FFF8E1"],
        features: ["Full Website", "Guest Management", "Travel Guide"],
        icon: Star,
      },
    ],
  },
  {
    category: "General Designs",
    designs: [
      {
        title: "Blush Minimalist",
        price: "₹2,999",
        colors: ["#F8BBD0", "#FCE4EC", "#FFFFFF"],
        features: ["Clean Design", "RSVP", "Countdown"],
        icon: Smartphone,
      },
      {
        title: "Garden Romance",
        price: "₹4,499",
        colors: ["#E91E63", "#4CAF50", "#FFF9C4"],
        features: ["Photo Gallery", "Venue Map", "Timeline"],
        icon: MapPin,
      },
      {
        title: "Ocean Breeze",
        price: "₹3,999",
        colors: ["#0288D1", "#81D4FA", "#E1F5FE"],
        features: ["Destination Wedding", "Travel Info", "RSVP"],
        icon: Clock,
      },
      {
        title: "Vintage Classic",
        price: "₹5,999",
        colors: ["#5D4037", "#D7CCC8", "#EFEBE9"],
        features: ["Full Website", "Registry", "Video"],
        icon: Gift,
      },
      {
        title: "Modern Luxe",
        price: "₹7,999",
        colors: ["#212121", "#FFD700", "#FAFAFA"],
        features: ["Premium Design", "All Features", "Priority Support"],
        icon: Star,
      },
    ],
  },
];

const DesignCard = ({ design }: { design: typeof designCategories[0]["designs"][0] }) => (
  <motion.div
    className="min-w-[280px] max-w-[300px] flex-shrink-0 rounded-2xl bg-card border border-border p-6 hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-default group"
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
        <design.icon className="text-primary-foreground" size={22} />
      </div>
      <span className="font-display text-xl text-gold">{design.price}</span>
    </div>

    <h4 className="font-display text-lg text-foreground mb-3">{design.title}</h4>

    {/* Color palette */}
    <div className="flex gap-2 mb-4">
      {design.colors.map((color) => (
        <div
          key={color}
          className="w-8 h-8 rounded-lg border border-border shadow-sm"
          style={{ backgroundColor: color }}
          title={color}
        />
      ))}
    </div>

    {/* Features */}
    <div className="space-y-1.5">
      {design.features.map((feature) => (
        <div key={feature} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
          <span className="font-body text-xs text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const OurDesignsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="designs" className="py-24 md:py-32 bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">Our Collection</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Explore Our <span className="text-gradient-gold italic">Wedding Designs</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Browse through our curated collection of wedding invitation designs — crafted for every culture and style.
          </p>
        </motion.div>

        {designCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            className="mb-12 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: catIndex * 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl text-foreground">{cat.category}</h3>
              <Link
                to="/designs"
                className="flex items-center gap-1 font-body text-sm text-gold hover:text-gold-dark transition-colors"
              >
                View All <ChevronRight size={16} />
              </Link>
            </div>

            {/* Horizontal scrollable row */}
            <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent -mx-4 px-4 sm:-mx-6 sm:px-6">
              {cat.designs.map((design) => (
                <DesignCard key={design.title} design={design} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurDesignsSection;
