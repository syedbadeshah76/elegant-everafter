import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import heroImage from "@/assets/herosection.png";

const WHATSAPP_URL = "https://wa.me/919160703822?text=Hi%2C%20I%27m%20planning%20a%20wedding%20and%20loved%20your%20designs.%20Can%20you%20share%20pricing%20and%20demo%3F";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Wedding Invitation Websites & Cards in India"
          className="w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/55 to-navy/85" />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full border border-gold/20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-32 right-16 w-20 h-20 rounded-full border border-gold/15 hidden md:block"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-script text-gold-light text-xs md:text-2xl mb-6"
          initial={{ opacity: 0.01, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        Custom Digital Wedding Invitations for Hindu, Muslim & Christian Weddings
        </motion.p>

        {/* Single semantic H1 with primary SEO keywords */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-5xl text-ivory mb-4 leading-tight">
          <motion.span
            className="block"
            initial={{ opacity: 0.01, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
         Luxury Wedding Invitation Websites & Cards in India
          </motion.span>
          <motion.span
            className="block font-display italic text-gold mt-2 text-3xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0.01, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
        wedding invitation websites
          </motion.span>
        </h1>

        <motion.p
          className="font-body text-ivory/80 text-base md:text-lg max-w-xl mx-auto mb-10 mt-6"
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
     Create stunning premium wedding invitation websites and cards designed for modern Indian weddings.
We craft digital shaadi invites, e-invites, and custom wedding websites tailored for Hindu, Muslim, and Christian ceremonies across India.  </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
          initial={{ opacity: 0.01, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold transition-shadow duration-300 hover:shadow-lg"
          >
          Create Your Wedding Invitation Website
          </motion.a>
          <motion.a
            href="/designs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 border border-ivory/40 text-ivory font-body text-sm tracking-widest uppercase rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
          >
          Explore Wedding Card Designs
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <ChevronDown className="text-ivory/40" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
