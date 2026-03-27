import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Heart, Zap } from "lucide-react";

const highlights = [
  { icon: Code, title: "Tech-First Approach", desc: "We combine cutting-edge web technology with artistic design to deliver flawless digital wedding experiences." },
  { icon: Palette, title: "Culture-Aware Design", desc: "Deep understanding of Hindu, Muslim, Christian, and multi-cultural wedding traditions ensures authentic and respectful designs." },
  { icon: Zap, title: "Lightning Fast Delivery", desc: "From concept to launch in as little as 48 hours — because your wedding timeline can't wait." },
  { icon: Heart, title: "Passion-Driven Team", desc: "Every member of our team is a wedding enthusiast who pours love into every pixel and interaction." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blush/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">Who We Are</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            The Team Behind <span className="text-gradient-gold italic">Weddy Dev</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl gradient-navy flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <Code className="mx-auto text-gold-light mb-4" size={48} />
                <p className="font-script text-4xl text-gold-light mb-2">Since 2020</p>
                <p className="font-body text-sm text-ivory/60">Designing love stories digitally</p>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <Palette size={20} className="text-primary-foreground" />
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <Zap size={20} className="text-primary-foreground" />
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <Heart size={20} className="text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl gradient-gold opacity-20" />
          </div>

          <div>
            <h3 className="font-display text-2xl text-foreground mb-6">
              We build wedding websites that make guests go "WOW"
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              At Weddy Dev, we believe every couple deserves a wedding experience as beautiful online as it is in person. We're a passionate team of designers, developers, and wedding enthusiasts who transform your love story into a stunning digital experience.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              From custom wedding websites and digital invitations to RSVP management and video invitations — we handle every digital touchpoint so you can focus on what matters most: celebrating your love. Our expertise spans Hindu, Muslim, Christian, and multi-cultural weddings across India and the world.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div>
                <p className="font-display text-3xl text-gold">5+</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">500+</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Weddings Delivered</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">100%</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Client Love</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-2xl bg-card border border-border text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <item.icon className="mx-auto text-gold mb-3" size={28} />
              <h4 className="font-display text-lg text-foreground mb-2">{item.title}</h4>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
