import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Heart, Zap, Users, Clock, Shield, Headphones } from "lucide-react";

const highlights = [
  { icon: Code, title: "Tech-First Approach", desc: "We combine cutting-edge web technology with artistic design to deliver flawless digital wedding experiences." },
  { icon: Palette, title: "Culture-Aware Design", desc: "Deep understanding of Hindu, Muslim, Christian, and multi-cultural wedding traditions ensures authentic designs." },
  { icon: Zap, title: "Lightning Fast Delivery", desc: "From concept to launch in as little as 48 hours — because your shaadi timeline can't wait." },
  { icon: Heart, title: "Passion-Driven Team", desc: "Every member of our team is a wedding enthusiast who pours love into every pixel and interaction." },
];

const process = [
  { step: "01", title: "Share Your Vision", desc: "Tell us about your wedding — culture, theme, colors, and features you want. We listen to every detail." },
  { step: "02", title: "Design & Preview", desc: "Our designers craft a stunning mockup tailored to your love story. You get unlimited revisions until it's perfect." },
  { step: "03", title: "Launch & Celebrate", desc: "We publish your wedding card and website, set up RSVP tracking, and provide full support through your big day." },
];

const teamValues = [
  { icon: Users, title: "500+ Happy Couples", desc: "Every couple we've served is a story we're proud to have been part of." },
  { icon: Clock, title: "48-Hour Express", desc: "Need it fast? Our rush delivery gets your wedding invitation live in just 2 days." },
  { icon: Shield, title: "100% Satisfaction", desc: "We don't stop until you absolutely love your wedding website and cards." },
  { icon: Headphones, title: "24/7 Support", desc: "From Hyderabad to the world — our team is always available when you need us." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Main About Section */}
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
                  <p className="font-body text-sm text-ivory/60">Designing love stories from Hyderabad</p>
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
                We build wedding cards & websites that make guests go "WOW"
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                At Weddy Dev, we believe every couple deserves a wedding experience as beautiful online as it is in person. Based in Hyderabad, we're a passionate team of designers, developers, and shaadi enthusiasts who transform your love story into stunning digital invitations and wedding websites.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                From custom wedding cards and digital invitations to RSVP management and video invitations — we handle every digital touchpoint so you can focus on celebrating your love. Our expertise spans Hindu, Muslim, Christian, and multi-cultural weddings across India and the world.
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

      {/* How It Works Section */}
      <section className="py-24 md:py-32 gradient-navy relative overflow-hidden" ref={processRef}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="font-script text-gold-light text-2xl mb-3">How It Works</p>
            <h2 className="font-display text-3xl md:text-5xl text-ivory mb-4">
              Three Simple Steps to Your <span className="text-gold-light italic">Dream Wedding Card</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                className="relative text-center p-8 rounded-2xl border border-ivory/10 bg-ivory/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
              >
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-xl text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="font-display text-xl text-ivory mb-3">{item.title}</h3>
                <p className="font-body text-sm text-ivory/60 leading-relaxed">{item.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gold/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-24 md:py-32 bg-cream relative overflow-hidden" ref={valuesRef}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="font-script text-gold text-2xl mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              What Makes Weddy Dev <span className="text-gradient-gold italic">Special</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              From Hyderabad to destination weddings worldwide — here's why couples trust us with their most special day.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {teamValues.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-gold transition-all duration-500"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
