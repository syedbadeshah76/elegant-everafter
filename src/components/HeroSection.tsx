import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Phone, MessageCircle, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";
import hero4 from "@/assets/hero4.webp";
import hero5 from "@/assets/hero5.webp";
import hero6 from "@/assets/hero6.webp";

const WHATSAPP_URL = "https://wa.me/919160703822?text=Hi%2C%20I%27m%20planning%20a%20wedding%20and%20loved%20your%20designs.%20Can%20you%20share%20pricing%20and%20demo%3F";
const PHONE_URL = "tel:+919160703822";

const slides = [
  {
    image: hero1,
    title: "Royal Rajputana",
    tagline: "Regal heritage meets modern interactivity",
    features: ["WhatsApp RSVP", "Countdown Timer", "Venue Map"],
  },
  {
    image: hero2,
    title: "Elegant Nikah",
    tagline: "Bilingual elegance with timeless calligraphy",
    features: ["Bilingual Content", "RSVP System", "Guest Manager"],
  },
  {
    image: hero3,
    title: " Marriage of Traditions",
    tagline: "Bilingual elegance with timeless calligraphy",
    features: ["Bilingual Content", "RSVP System", "Guest Manager", "Countdown Timer", "Photo Gallery"],
  },
  {
    image: hero4,
    title: "Countdown Section",
    tagline: "Bilingual elegance with timeless calligraphy",
    features: ["Bilingual Content", "RSVP System", "Guest Manager", "Countdown Timer", "Photo Gallery"],
  },
  {
    image: hero5,
    title: "Rustic Charm",
    tagline: "Soft botanicals for an enchanting celebration",
    features: ["Photo Gallery", "Venue Map", "Timeline", "RSVP Tracking", " Countdown Timer", "WhatsApp Share"],
  },
  {
    image: hero6,
    title: "Wedding Bliss",
    tagline: "Soft botanicals for an enchanting celebration",
    features: ["Photo Gallery", "Venue Map", "Timeline", "RSVP Tracking", " Countdown Timer", "WhatsApp Share"],
  }
];

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Preload all hero images so slide changes are instant
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const next = () => setActive((i) => (i + 1) % slides.length);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 md:pt-28 md:pb-20 overflow-hidden gradient-navy">
      {/* Decorative luxury elements */}
      <motion.div
        className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--gold)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-7rem)]">
        {/* LEFT: Content */}
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm mb-5"
          >
            <Sparkles size={14} className="text-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold-light">Luxury Digital Wedding Invitations</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory leading-[1.1] mb-5">
            <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="block">
              Premium Wedding Invitation Cards &
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="block italic text-gold">
              Wedding Invitation Websites
            </motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="font-body text-base sm:text-lg text-ivory/80 mb-7 max-w-xl mx-auto lg:mx-0">
            Replace dull paper cards with stunning digital wedding invitations. Custom-crafted wedding cards design for Hindu, Muslim & Christian celebrations — with RSVP, WhatsApp share, and guest dashboards.
          </motion.p>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-7 text-sm">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
              <span className="text-ivory/80 font-body ml-1">4.9/5 · 500+ couples</span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-ivory/20" />
            <span className="flex items-center gap-1.5 text-ivory/70 font-body"><ShieldCheck size={14} className="text-gold" /> Trusted Studio</span>
            <span className="flex items-center gap-1.5 text-ivory/70 font-body"><Zap size={14} className="text-gold" /> 48hr Delivery</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="btn-luxury inline-flex items-center justify-center gap-2 px-7 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold"
            >
              <MessageCircle size={16} /> Get Free Demo
            </motion.a>
            <motion.a
              href={PHONE_URL}
              whileTap={{ scale: 0.97 }}
              className="btn-luxury inline-flex items-center justify-center gap-2 px-7 py-4 border border-gold/60 text-gold font-body text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-colors"
            >
              <Phone size={16} /> Call 9160703822
            </motion.a>
          </div>

          <p className="mt-5 font-script text-gold-light text-xl">— Hyderabad · Serving couples worldwide</p>
        </div>

        {/* RIGHT: Carousel */}
        <div
          className="relative w-full max-w-xl mx-auto lg:mx-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Floating ornaments */}
          <motion.div
            className="absolute -top-6 -left-6 w-16 h-16 border-2 border-gold/40 rounded-2xl hidden md:block"
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-gold/30 rounded-full hidden md:block"
            animate={{ rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-elevated bg-card">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={slide.image}
                  src={slide.image}
                  alt={`${slide.title} wedding invitation design`}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

              {/* Slide info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="font-script text-gold text-xl sm:text-2xl mb-1">Featured Design</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-ivory mb-2">{slide.title}</h3>
                  <p className="font-body text-sm text-ivory/80 mb-3">{slide.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {slide.features.map((f) => (
                      <span key={f} className="font-body text-[10px] sm:text-xs uppercase tracking-wider text-gold-light bg-ivory/10 backdrop-blur-sm border border-gold/30 px-2.5 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Previous design"
                className="absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/70 backdrop-blur-sm border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next design"
                className="absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/70 backdrop-blur-sm border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 py-3 bg-card">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-7 bg-gold" : "w-2 bg-border"}`}
                />
              ))}
            </div>
          </div>

          {/* Floating rating card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden sm:flex absolute -left-4 lg:-left-10 top-8 items-center gap-3 bg-background border border-gold/30 rounded-2xl shadow-gold px-4 py-3"
          >
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
              <Star size={18} className="text-primary-foreground fill-primary-foreground" />
            </div>
            <div>
              <p className="font-display text-lg text-foreground leading-none">4.9/5</p>
              <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">500+ Reviews</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
