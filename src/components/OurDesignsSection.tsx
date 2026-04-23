import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ExternalLink, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";

import projectHinduRoyal from "@/assets/project-hindu-royal.jpg";
import projectHinduTemple from "@/assets/project-hindu-temple.jpg";
import projectHinduFloral from "@/assets/project-hindu-floral.jpg";
import projectHinduPeacock from "@/assets/project-hindu-peacock.jpg";
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

interface ProjectDesign {
  title: string;
  price: string;
  image: string;
  link: string;
  features: string[];
  badge?: string;
}

const designCategories: { category: string; emoji: string; designs: ProjectDesign[] }[] = [
  {
    category: "Hindu Wedding Designs",
    emoji: "🪷",
    designs: [
      {
        title: "Royal Rajputana",
        price: "₹4,999",
        image: projectHinduRoyal,
        link: "https://weddy7.netlify.app/",
        features: ["WhatsApp RSVP", "Countdown Timer", "Venue Map"],
        badge: "Popular",
      },
       {
        title: "Floral Mehendi",
        price: "₹3,499",
        image: projectHinduFloral,
        link: "https://weddy9.netlify.app/",
        features: ["Photo Gallery", "Countdown", "WhatsApp RSVP"],
      },
      {
        title: "Classic Elegante Wedding",
        price: "₹5,999",
        image: projectHinduTemple,
        link: "https://weddy6.netlify.app/",
        features: ["Video Invite", "RSVP Tracking", "Guest Dashboard"],
      },
     
      // {
      //   title: "Peacock Paradise",
      //   price: "₹5,499",
      //   image: projectHinduPeacock,
      //   link: "https://weddydev.com/demo/hindu-peacock",
      //   features: ["Music Player", "Guest Book", "Timeline"],
      //   badge: "New",
      // },
    ],
  },
  {
    category: "Muslim Wedding Designs",
    emoji: "🌙",
    designs: [
      {
        title: "Elegant Wedding Invitation",
        price: "₹4,999",
        image: projectMuslimNikah,
        link: "https://asif-ariba-wedding.netlify.app/",
        features: ["Bilingual Content", "RSVP System", "Venue Info"],
        badge: "Popular",
      },
      {
        title: "Classic Wedding Charm",
        price: "₹6,999",
        image: projectMuslimMughal,
        link: "https://weddy3.netlify.app/",
        features: ["Full Website", "Guest Management", "Travel Guide"],
      },
      {
        title: "Classic Wedding Elegance",
        price: "₹4,499",
        image: projectMuslimMinimal1,
        link: "https://weddy4.netlify.app/",
        features: ["Minimal Design", "RSVP", "Photo Gallery"],
        badge: "New",
      },
      {
        title: "Wedding Elegance",
        price: "₹4,499",
        image: projectMuslimMinimal,
        link: "https://weddy5.netlify.app/",
        features: ["Minimal Design", "RSVP", "Photo Gallery"],
        badge: "New",
      },
    ],
  },
  {
    category: "Christian Wedding Designs",
    emoji: "⛪",
    designs: [
      {
        title: "Garden Romance",
        price: "₹4,499",
        image: projectChristianGarden,
        link: "https://weddydev.com/demo/christian-garden",
        features: ["Photo Gallery", "Venue Map", "Timeline"],
      },
      {
        title: "Chapel Elegance",
        price: "₹5,499",
        image: projectChristianChurch,
        link: "https://weddydev.com/demo/christian-chapel",
        features: ["Video Invite", "RSVP", "Registry"],
        badge: "Popular",
      },
      {
        title: "Rustic Charm",
        price: "₹3,999",
        image: projectChristianRustic,
        link: "https://weddydev.com/demo/christian-rustic",
        features: ["Botanical Theme", "Guest Book", "Countdown"],
      },
    ],
  },
  {
    category: "General / Modern Designs",
    emoji: "✨",
    designs: [
      {
        title: "Modern Luxe",
        price: "₹7,999",
        image: projectGeneralModern,
        link: "https://weddydev.com/demo/modern-luxe",
        features: ["Premium Design", "All Features", "Priority Support"],
        badge: "Premium",
      },
      {
        title: "Ocean Breeze",
        price: "₹3,999",
        image: projectGeneralOcean,
        link: "https://weddydev.com/demo/ocean-breeze",
        features: ["Destination Wedding", "Travel Info", "RSVP"],
      },
      {
        title: "Art Deco Glam",
        price: "₹6,499",
        image: projectGeneralArtdeco,
        link: "https://weddydev.com/demo/art-deco",
        features: ["Gatsby Theme", "Music", "Photo Gallery"],
        badge: "New",
      },
    ],
  },
];

const DesignCard = ({ design, index }: { design: ProjectDesign; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.a
      href={design.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-pointer group block"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Landscape Image - 16:10 aspect */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        <img
          src={design.image}
          alt={design.title}
          loading="lazy"
          width={800}
          height={500}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-5 gap-2">
          <motion.span
            className="flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground font-body text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-soft"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <Eye size={12} /> Preview
          </motion.span>
        </div>

        {/* Price badge */}
        <div className="absolute top-3 right-3 gradient-gold text-primary-foreground font-display text-sm sm:text-base font-semibold px-4 py-2 rounded-full shadow-gold ring-2 ring-background/40 z-10">
          {design.price}
        </div>

        {/* Status badge */}
        {design.badge && (
          <div className={`absolute top-3 left-3 font-body text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1 ${
            design.badge === "Popular"
              ? "bg-accent text-accent-foreground"
              : design.badge === "Premium"
              ? "gradient-gold text-primary-foreground"
              : "bg-emerald-500/90 text-white"
          }`}>
            {design.badge === "Popular" && <Star size={10} />}
            {design.badge}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5">
        <h4 className="font-display text-base sm:text-lg text-foreground mb-2 group-hover:text-gold transition-colors">
          {design.title}
        </h4>
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
};

const OurDesignsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="designs" className="py-14 sm:py-20 md:py-28 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="font-script text-gold text-lg sm:text-xl md:text-2xl mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Collection
          </motion.p>
          <motion.h2
            className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl text-foreground mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore Our <span className="text-gradient-gold italic">Wedding Designs</span>
          </motion.h2>
          <motion.p
            className="font-body text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Browse our curated collection crafted for every culture and style.
          </motion.p>
        </motion.div>

        {designCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            className="mb-10 sm:mb-14 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="font-display text-base sm:text-lg md:text-2xl text-foreground flex items-center gap-2">
                <span>{cat.emoji}</span> {cat.category}
              </h3>
              <Link
                to="/designs"
                className="flex items-center gap-1 font-body text-[10px] sm:text-xs md:text-sm text-gold hover:text-gold-dark transition-colors"
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            {/* Horizontal scrollable row */}
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 no-scrollbar sm:scrollbar-thin sm:scrollbar-thumb-gold/40 sm:scrollbar-track-transparent -mx-4 px-4 sm:-mx-6 sm:px-6 snap-x snap-mandatory scroll-smooth">
              {cat.designs.map((design, i) => (
                <div key={design.title} className="snap-start">
                  <DesignCard design={design} index={i} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/designs"
            className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-body text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-gold hover:scale-105 transition-transform"
          >
            <ExternalLink size={14} /> Explore All Designs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurDesignsSection;
