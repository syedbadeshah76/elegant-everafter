import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Mail, CalendarHeart, MapPin, Palette, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Wedding Invitation Website Design",
    desc: "A premium wedding website with event details, love story, RSVP forms, and mobile-first design — perfect to share your digital invite with guests.",
  },
  {
    icon: Mail,
    title: "Digital Wedding Cards with RSVP & WhatsApp Integration",
    desc: "Send elegant wedding e-invites with smart RSVP tracking, guest management, and instant sharing via WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Wedding Venue Details Page with Maps & Guest Info",
    desc: "Provide guests with a complete wedding venue guide, including Google Maps, accommodation, and travel info — all in one place.",
  },
  {
    icon: Palette,
    title: "Custom Wedding Cards Design for Every Culture",
    desc: "Choose from beautifully crafted Hindu, Muslim, and Christian wedding invitation designs or get a fully customized theme tailored to your love story.",
  },
  {
    icon: CalendarHeart,
    title: "Wedding Countdown Timer & Event Timeline",
    desc: "Add a live wedding countdown and detailed event schedule so guests never miss any function — from Haldi to Reception.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Wedding Website (App-Like Experience)",
    desc: "Your wedding invitation website works like a mobile app — fast, responsive, and accessible on all devices without download.",
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
          initial={{ opacity: 0.01, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-script text-gold text-2xl mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-3xl text-foreground mb-4">
          Wedding Invitation Services –<span className="text-gradient-gold italic"> Websites, Cards & E-Invites</span>
          </h2>
          <h3>
            Complete Digital Wedding Invitation Solutions for Modern Couples
          </h3>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
        From wedding invitation websites to digital wedding cards and e-invites, we offer complete solutions for Hindu, Muslim, and Christian weddings with WhatsApp integration and RSVP tracking.  </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-default"
              initial={{ opacity: 0.01, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
              transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.5 }}
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
