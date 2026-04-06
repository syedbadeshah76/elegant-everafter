import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919160703822?text=Hi%2C%20I%27d%20love%20to%20design%20my%20love%20story%20with%20you.%20Can%20we%20chat%3F";

const MidCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-blush opacity-30" />
      <motion.div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <Sparkles className="mx-auto text-gold mb-4" size={32} />
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Ready to Create Your <span className="text-gradient-gold italic">Shaadi Invitation?</span>
        </h2>
        <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
          Every great love story deserves a stunning wedding card and website. Let's craft yours together — from Hyderabad to the world.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold hover:scale-105 transition-transform"
        >
          Let's Design Your Wedding Cards
        </a>
      </motion.div>
    </section>
  );
};

export default MidCTA;
