import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Custom-Crafted Designs", us: true, others: false },
  { feature: "WhatsApp RSVP Integration", us: true, others: false },
  { feature: "Multi-Cultural Themes", us: true, others: false },
  { feature: "Fast 48-Hour Delivery", us: true, others: false },
  { feature: "Mobile-Optimized", us: true, others: true },
  { feature: "Unlimited Revisions", us: true, others: false },
  { feature: "Dedicated Designer", us: true, others: false },
  { feature: "Post-Wedding Support", us: true, others: false },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">The Difference</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Why Couples <span className="text-gradient-gold italic">Choose Us</span>
          </h2>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden border border-border shadow-soft"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 gradient-gold text-primary-foreground">
            <div className="p-4 font-display text-sm md:text-base">Feature</div>
            <div className="p-4 font-display text-sm md:text-base text-center">Eternal</div>
            <div className="p-4 font-display text-sm md:text-base text-center">Others</div>
          </div>

          {comparisons.map((row, i) => (
            <motion.div
              key={row.feature}
              className="grid grid-cols-3 border-b border-border last:border-0 hover:bg-card/50 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <div className="p-4 font-body text-sm text-foreground">{row.feature}</div>
              <div className="p-4 flex justify-center">
                <div className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center">
                  <Check size={14} className="text-primary-foreground" />
                </div>
              </div>
              <div className="p-4 flex justify-center">
                {row.others ? (
                  <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                    <Check size={14} className="text-muted-foreground" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                    <X size={14} className="text-muted-foreground" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
