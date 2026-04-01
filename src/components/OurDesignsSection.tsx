import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import projectHinduRoyal from "@/assets/project-hindu-royal.jpg";
import projectHinduTemple from "@/assets/project-hindu-temple.jpg";
import projectHinduFloral from "@/assets/project-hindu-floral.jpg";
import projectMuslimNikah from "@/assets/project-muslim-nikah.jpg";
import projectMuslimMughal from "@/assets/oursection1.png";
import projectMuslimMugha6 from "@/assets/oursection2.png";
import projectMuslimMugha2 from "@/assets/image.png";
import projectMuslimMugha4 from "@/assets/image.png";
import projectMuslimMugha5 from "@/assets/image.png";
import projectMuslimMugha3 from "@/assets/image.png";
import projectChristianGarden from "@/assets/project-christian-garden.jpg";
import projectChristianChurch from "@/assets/project-christian-church.jpg";
import projectGeneralModern from "@/assets/project-general-modern.jpg";
import projectGeneralOcean from "@/assets/project-general-ocean.jpg";

interface ProjectDesign {
  title: string;
  price: string;
  image: string;
  link: string;
  features: string[];
}

const designCategories: { category: string; designs: ProjectDesign[] }[] = [
  {
    category: "Hindu Wedding Designs",
    designs: [
      {
        title: "Royal Rajputana",
        price: "₹4,999.99",
        image: projectHinduRoyal,
        link: "#",
        features: ["WhatsApp RSVP", "Countdown Timer", "Venue Map"],
      },
      {
        title: "Temple Gold",
        price: "₹5,999.99",
        image: projectHinduTemple,
        link: "#",
        features: ["Video Invite", "RSVP Tracking", "Guest Dashboard"],
      },
      {
        title: "Floral Mehendi",
        price: "₹3,499.99",
        image: projectHinduFloral,
        link: "#",
        features: ["Photo Gallery", "Countdown", "WhatsApp RSVP"],
      },
    ],
  },
  {
    category: "Muslim Wedding Designs",
    designs: [
      {
        title: "Hashim & Ayesha",
        price: "₹4,999",
        image: projectMuslimNikah,
        link: "https://asif-sana-wedding.netlify.app/",
        features: ["Bilingual Content", "RSVP System", "Venue Info"],
      },
      {
        title: "Mohd & Habeeba",
        price: "₹6,999",
        image: projectMuslimMughal,
        link: "https://weddy3.netlify.app/",
        features: ["Full Website", "Guest Management", "Travel Guide"],
      },
      {
        title: "Asif & Ariba",
        price: "₹6,999",
        image: projectMuslimMughal,
        link: "https://asif-ariba-wedding.netlify.app/",
        features: ["Full Website", "Guest Management", "Travel Guide"],
      },
      
      {
        title: "Yaseen & Sara",
        price: "₹6,999",
        image: projectMuslimMugha6,
        link: "https://weddy4.netlify.app/",
        features: ["Full Website", "Guest Management", "Travel Guide"],
      },
      {
        title: "Dr. Shakeel & Dr. Khateja",
        price: "₹6,999",
        image: projectMuslimMughal,
        link: "https://weddy5.netlify.app/",
        features: ["Full Website", "Guest Management", "Travel Guide"],
      },
    ],
  },
  {
    category: "Christian Wedding Designs",
    designs: [
      {
        title: "Garden Romance",
        price: "₹4,499",
        image: projectChristianGarden,
        link: "#",
        features: ["Photo Gallery", "Venue Map", "Timeline"],
      },
      {
        title: "Chapel Elegance",
        price: "₹5,499",
        image: projectChristianChurch,
        link: "#",
        features: ["Video Invite", "RSVP", "Registry"],
      },
    ],
  },
  {
    category: "General / Modern Designs",
    designs: [
      {
        title: "Modern Luxe",
        price: "₹7,999",
        image: projectGeneralModern,
        link: "#",
        features: ["Premium Design", "All Features", "Priority Support"],
      },
      {
        title: "Ocean Breeze",
        price: "₹3,999",
        image: projectGeneralOcean,
        link: "#",
        features: ["Destination Wedding", "Travel Info", "RSVP"],
      },
    ],
  },
];

const DesignCard = ({ design }: { design: ProjectDesign }) => (
  <motion.a
    href={design.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-pointer group block"
    whileHover={{ y: -8 }}
  >
    {/* Image */}
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <img
        src={design.image}
        alt={design.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
        <span className="flex items-center gap-1.5 text-white font-body text-xs uppercase tracking-widest">
          View Project <ExternalLink size={12} />
        </span>
      </div>
      {/* Price badge */}
      <div className="absolute top-3 right-3 gradient-gold text-primary-foreground font-display text-sm px-3 py-1 rounded-full shadow-gold">
        {design.price}
      </div>
    </div>

    {/* Info */}
    <div className="p-4 sm:p-5">
      <h4 className="font-display text-base sm:text-lg text-foreground mb-2">{design.title}</h4>
      <div className="flex flex-wrap gap-1.5">
        {design.features.map((feature) => (
          <span
            key={feature}
            className="font-body text-[10px] sm:text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const OurDesignsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="designs" className="py-16 sm:py-24 md:py-32 bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-xl sm:text-2xl mb-3">Our Collection</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mb-3 sm:mb-4">
            Explore Our <span className="text-gradient-gold italic">Wedding Designs</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Browse through our curated collection of wedding invitation designs — crafted for every culture and style.
          </p>
        </motion.div>

        {designCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            className="mb-8 sm:mb-12 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: catIndex * 0.15 }}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="font-display text-lg sm:text-2xl text-foreground">{cat.category}</h3>
              <Link
                to="/designs"
                className="flex items-center gap-1 font-body text-xs sm:text-sm text-gold hover:text-gold-dark transition-colors"
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            {/* Horizontal scrollable row */}
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent -mx-4 px-4 sm:-mx-6 sm:px-6 snap-x snap-mandatory">
              {cat.designs.map((design) => (
                <div key={design.title} className="snap-start">
                  <DesignCard design={design} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurDesignsSection;
