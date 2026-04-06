import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import heroImage from "@/assets/herosection.png";

const WHATSAPP_URL = "https://wa.me/919160703822?text=Hi%2C%20I%27m%20planning%20a%20wedding%20and%20loved%20your%20designs.%20Can%20you%20share%20pricing%20and%20demo%3F";

const headlineWords = ["Premium", "Wedding", "Invitations"];
const subWords = ["& Shaadi", "Website", "Design"];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury wedding floral arrangement with elegant invitation cards"
          className="w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/55 to-navy/85" />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full border border-gold/20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-20 h-20 rounded-full border border-gold/15"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-script text-gold-light text-xl md:text-2xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          Where Dreams Meet Design
        </motion.p>

        <div className="mb-4">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory inline-block mr-3 md:mr-4"
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 3.2 + i * 0.15, duration: 0.7, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className="mb-8">
          {subWords.map((word, i) => (
            <motion.span
              key={i}
              className="font-display text-3xl md:text-5xl lg:text-6xl italic text-gold inline-block mr-3 md:mr-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8 + i * 0.12, duration: 0.6 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="font-body text-ivory/70 text-base md:text-lg max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 0.8 }}
        >
          Custom wedding cards, digital shaadi invitations & stunning wedding websites — crafted for Hindu, Muslim & Christian celebrations across India.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8, duration: 0.6 }}
        >
          <div className="flex items-center gap-1.5 text-gold-light text-sm font-body">
            <Star size={14} fill="currentColor" />
            <span className="text-ivory/80">Trusted by 500+ couples</span>
          </div>
          <div className="w-[1px] h-4 bg-ivory/20 hidden sm:block" />
          <p className="text-ivory/80 text-sm font-body">Based in Hyderabad • Serving globally</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.6 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold"
          >
            Start Your Wedding Journey
          </a>
          <a
            href="/designs"
            className="px-8 py-4 border border-ivory/30 text-ivory font-body text-sm tracking-widest uppercase rounded-full hover:border-gold hover:text-gold transition-all duration-300"
          >
            View Our Designs
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-ivory/40" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
