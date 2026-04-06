import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Mail, CalendarHeart, MapPin, Palette, Gift, Video, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Wedding Website Design",
    desc: "Bespoke wedding websites that tell your unique love story with stunning visuals, seamless navigation, and mobile-first design.",
  },
  {
    icon: Mail,
    title: "Wedding Card & RSVP Systems",
    desc: "Elegant digital shaadi cards with smart RSVP tracking, WhatsApp integration, and real-time guest management.",
  },
  {
    icon: Video,
    title: "Video Invitation Creation",
    desc: "Cinematic video wedding invitations with custom animations, music, and transitions that captivate your guests.",
  },
  {
    icon: MapPin,
    title: "Venue Info Pages",
    desc: "Beautiful venue guides with interactive maps, travel details, and accommodation recommendations for your guests.",
  },
  {
    icon: Palette,
    title: "Custom Theme Design",
    desc: "Hand-crafted design themes for Hindu, Muslim, and Christian weddings reflecting your culture and personality.",
  },
  {
    icon: CalendarHeart,
    title: "Countdown & Event Timeline",
    desc: "Engaging countdown timers and detailed event schedules keeping your guests informed and excited about the shaadi.",
  },
  {
    icon: Gift,
    title: "Registry & Gifting Integration",
    desc: "Seamlessly integrate gift registries and UPI payment links so your guests can celebrate with thoughtful presents.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Experience",
    desc: "Progressive web apps that give your guests a native app-like experience on any device — no download required.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-[1px] gradient-gold opacity-30" />
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-script text-gold text-2xl mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Crafting Every Detail of Your <span className="text-gradient-gold italic">Special Day</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            From the first wedding card to the final thank-you, we design every digital touchpoint of your shaadi journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
