import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Eye, Star, Info } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { designsByCategory, type Design } from "@/data/designsData";

const DesignCard = ({ design, index }: { design: Design; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/product/${design.code}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/product/${design.code}`);
      }}
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-pointer group flex flex-col"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
        {!imageLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
        <img
          src={design.image}
          alt={`${design.title} wedding card design`}
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="absolute top-3 left-3 font-body text-[10px] tracking-widest uppercase bg-background/90 text-foreground px-2.5 py-1 rounded-full">
          {design.code}
        </span>
        {design.badge && (
          <div
            className={`absolute top-3 right-3 font-body text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1 ${
              design.badge === "Popular"
                ? "bg-accent text-accent-foreground"
                : design.badge === "Premium"
                  ? "gradient-gold text-primary-foreground"
                  : "bg-emerald-500/90 text-white"
            }`}
          >
            {design.badge === "Popular" && <Star size={10} />}
            {design.badge}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <h4 className="font-display text-base sm:text-lg text-foreground mb-1 group-hover:text-gold transition-colors">
          {design.title}
        </h4>
        <p className="font-body text-xs text-muted-foreground mb-3 leading-relaxed">{design.subtitle}</p>

        <div className="flex items-end justify-between pt-2 border-t border-border mb-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl sm:text-2xl font-bold text-gold">{design.price}</span>
            {design.originalPrice && (
              <span className="font-body text-xs sm:text-sm text-muted-foreground line-through">
                {design.originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star size={12} className="text-gold fill-gold" />
            <span>{design.rating}</span>
          </div>
        </div>

        {/* Two buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <a
            href={design.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-gold/50 text-gold font-body text-[11px] sm:text-xs tracking-wider uppercase rounded-full hover:bg-gold/10 transition-colors"
          >
            <Eye size={12} /> Demo
          </a>
          <Link
            to={`/product/${design.code}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 gradient-gold text-primary-foreground font-body text-[11px] sm:text-xs tracking-wider uppercase rounded-full shadow-gold hover:scale-[1.03] transition-transform"
          >
            <Info size={12} /> Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ScrollableRow = ({ designs }: { designs: Design[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative group/row">
      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-11 h-11 rounded-full bg-background/95 border border-gold/40 items-center justify-center text-gold shadow-elevated opacity-0 group-hover/row:opacity-100 transition-all hover:bg-gold hover:text-primary-foreground"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-11 h-11 rounded-full bg-background/95 border border-gold/40 items-center justify-center text-gold shadow-elevated opacity-0 group-hover/row:opacity-100 transition-all hover:bg-gold hover:text-primary-foreground"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 snap-x snap-mandatory scroll-smooth"
      >
        {designs.map((design, i) => (
          <div key={design.code} className="snap-start">
            <DesignCard design={design} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

const OurDesignsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  // Hide General/Modern from homepage as previously requested
  const categoriesToShow = designsByCategory().filter((c) => c.category !== "General");

  return (
    <section id="designs" className="py-14 sm:py-20 md:py-28 bg-cream relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-script text-gold text-lg sm:text-xl md:text-2xl mb-2">Our Collection</p>
          <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl text-foreground mb-2 sm:mb-3">
            Explore Our <span className="text-gradient-gold italic">Wedding Designs</span>
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Browse our curated collection crafted for every culture and style.
          </p>
        </motion.div>

        {categoriesToShow.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            className="mb-10 sm:mb-14 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: catIndex * 0.05, duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="font-display text-base sm:text-lg md:text-2xl text-foreground flex items-center gap-2">
                <span>{cat.emoji}</span> {cat.category} Wedding Designs
              </h3>
              <Link
                to="/designs"
                className="flex items-center gap-1 font-body text-[10px] sm:text-xs md:text-sm text-gold hover:text-gold-dark transition-colors"
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>
            <ScrollableRow designs={cat.designs} />
          </motion.div>
        ))}

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
