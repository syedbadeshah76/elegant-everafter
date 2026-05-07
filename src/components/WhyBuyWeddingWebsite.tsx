import { motion } from "framer-motion";
import { Sparkles, Send, Zap, Heart, Smartphone, BarChart3, Globe2, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919160703822?text=Hi%2C%20I%20want%20to%20book%20a%20wedding%20invitation%20website!";

const reasons = [
  { icon: Sparkles, title: "Cinematic First Impression", desc: "Animated entrances, music, and smooth transitions wow your guests the moment they tap." },
  { icon: Send, title: "One-Tap WhatsApp Share", desc: "Share your invite to thousands of guests in seconds — no printing, no courier hassles." },
  { icon: Zap, title: "Instant Updates", desc: "Venue changed? Date moved? Update once and every guest sees it instantly." },
  { icon: Heart, title: "Tells Your Love Story", desc: "Photos, timelines, music, and personal notes — a paper card simply can't compete." },
  { icon: Smartphone, title: "Built for Mobile First", desc: "98% of guests open invites on phones. Our designs look stunning on every device." },
  { icon: BarChart3, title: "Smart RSVP & Insights", desc: "Track confirmations, meal preferences, and arrivals with a real-time guest dashboard." },
  { icon: Globe2, title: "Global Family, Easy Reach", desc: "Relatives abroad? They get the same beautiful experience without postage delays." },
  { icon: MessageCircle, title: "Saves Money & Trees", desc: "Skip ₹50k+ printing costs. Reinvest into your celebration — not into paper waste." },
];

const WhyBuyWeddingWebsite = () => {
  return (
    <section className="py-20 md:py-28 gradient-navy relative overflow-hidden">
      <motion.div
        className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-script text-gold-light text-2xl mb-3">The Smart Choice</p>
          <h2 className="font-display text-3xl md:text-5xl text-ivory mb-4 leading-tight">
            Why You Should Buy a{" "}
            <span className="italic text-gold">Wedding Invitation Website</span>
          </h2>
          <p className="font-body text-base md:text-lg text-ivory/70 max-w-2xl mx-auto">
            8 reasons modern couples are ditching paper for premium digital invites — and never looking back.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-ivory/5 backdrop-blur-sm border border-gold/20 hover:border-gold/60 hover:bg-ivory/10 transition-all duration-300"
            >
              <motion.div
                className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <r.icon size={22} className="text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-lg text-ivory mb-2 group-hover:text-gold-light transition-colors">{r.title}</h3>
              <p className="font-body text-sm text-ivory/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="font-body text-ivory/70 mb-5 text-sm md:text-base">
            ✨ Limited slots open for 2026 weddings — claim yours with FREE demo + ₹499 OFF
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold hover:scale-105 transition-transform"
          >
            <MessageCircle size={16} /> Book My Free Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBuyWeddingWebsite;
