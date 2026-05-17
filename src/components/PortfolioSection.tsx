import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

import hinduImg from "@/assets/portfolio-hindu.webp";
import muslimImg from "@/assets/portfolio-muslim.webp";
import modernImg from "@/assets/portfolio-modern.webp";
import floralImg from "@/assets/portfolio-floral.webp";
import royalImg from "@/assets/portfolio-royal.webp";
import christianImg from "@/assets/portfolio-christian.webp";

const categories = ["All", "Hindu", "Muslim", "Christian", "Modern"];

const portfolio = [
  { id: 1, title: "Royal Rajputana", category: "Hindu", image: hinduImg, couple: "Priya & Arjun" },
  { id: 2, title: "Emerald Nikah", category: "Muslim", image: muslimImg, couple: "Ayesha & Farid" },
  { id: 3, title: "Blush Minimalist", category: "Modern", image: modernImg, couple: "Sara & James" },
  { id: 4, title: "Garden Romance", category: "Modern", image: floralImg, couple: "Meera & Rohan" },
  { id: 5, title: "Regal Navy", category: "Hindu", image: royalImg, couple: "Ananya & Vikram" },
  { id: 6, title: "Chapel Elegance", category: "Christian", image: christianImg, couple: "Grace & Thomas" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            A Gallery of <span className="text-gradient-gold italic">Love Stories</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm tracking-wide transition-all duration-300 ${
                active === cat
                  ? "gradient-gold text-primary-foreground shadow-gold"
                  : "bg-background text-muted-foreground hover:text-gold border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4] shadow-soft"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <img loading="lazy" decoding="async"
                src={item.image}
                alt={`${item.title} wedding invitation design`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="font-script text-gold-light text-lg">{item.couple}</p>
                <h3 className="font-display text-xl text-ivory">{item.title}</h3>
                <p className="font-body text-xs text-ivory/60 uppercase tracking-widest mt-1">{item.category}</p>
                <div className="mt-3 w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
                  <ExternalLink size={14} className="text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
