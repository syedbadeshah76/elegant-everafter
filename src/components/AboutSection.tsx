import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

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

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">Our Story</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            The Faces Behind <span className="text-gradient-gold italic">Eternal</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl gradient-blush flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <Heart className="mx-auto text-gold mb-4" size={48} />
                <p className="font-script text-4xl text-gold mb-2">Since 2020</p>
                <p className="font-body text-sm text-foreground/60">Crafting love stories digitally</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl gradient-gold opacity-20" />
          </div>

          <div>
            <h3 className="font-display text-2xl text-foreground mb-6">
              Born from a love for design & weddings
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              We started Eternal with a simple belief: every couple deserves a wedding experience that's as beautiful online as it is in person. What began as a passion project has grown into a studio trusted by over 500 couples across India and beyond.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Our team of designers, developers, and wedding enthusiasts pour their hearts into every project. We don't just design — we listen, understand, and create digital experiences that capture the unique essence of your love story.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-display text-3xl text-gold">5+</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">15+</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Team Members</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">100%</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Client Love</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
