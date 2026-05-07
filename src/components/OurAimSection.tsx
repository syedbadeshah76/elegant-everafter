import { motion } from "framer-motion";
import { Leaf, ArrowRight, Sparkles, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919160703822?text=Hi%2C%20I%20want%20to%20replace%20paper%20invites%20with%20a%20stunning%20digital%20one!";

const OurAimSection = () => (
  <section className="py-20 md:py-28 bg-background relative overflow-hidden">
    <motion.div
      className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-script text-gold text-2xl mb-3">Our Aim</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-5 leading-tight">
          Replace Old Paper Invites with{" "}
          <span className="text-gradient-gold italic">Stunning Digital Wedding Cards</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Paper invites get lost, damaged, and forgotten. We're on a mission to give modern couples
          something better — beautiful, interactive wedding invitation websites and wedding cards
          design that delight every guest, save trees, and become a memory worth keeping.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {[
          { num: "0", label: "Trees cut for your invites" },
          { num: "100%", label: "Mobile-friendly & global reach" },
          { num: "5x", label: "Better engagement vs paper" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-gold/20 text-center hover:border-gold/50 hover:shadow-gold transition-all"
          >
            <p className="font-display text-4xl text-gold mb-2 font-bold">{s.num}</p>
            <p className="font-body text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold hover:scale-105 transition-transform"
        >
          <Sparkles size={16} /> Go Digital Today <ArrowRight size={16} />
        </a>
        <a
          href="tel:+919160703822"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-gold text-gold font-body text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-colors"
        >
          <Phone size={16} /> Talk to Designer
        </a>
      </motion.div>
    </div>
  </section>
);

export default OurAimSection;
