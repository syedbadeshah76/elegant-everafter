import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! I'm ${formState.name}. Wedding date: ${formState.date}. ${formState.message}`
    );
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 gradient-navy relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 rounded-full border border-gold/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold-light text-2xl mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl text-ivory mb-4">
            Let's Start Your <span className="text-gold-light italic">Dream Wedding</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {[
              { name: "name", placeholder: "Your Name", type: "text" },
              { name: "email", placeholder: "Email Address", type: "email" },
              { name: "phone", placeholder: "Phone Number", type: "tel" },
              { name: "date", placeholder: "Wedding Date", type: "date" },
            ].map((field) => (
              <motion.input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formState[field.name as keyof typeof formState]}
                onChange={(e) => setFormState((s) => ({ ...s, [field.name]: e.target.value }))}
                className="w-full px-5 py-4 rounded-xl bg-ivory/10 border border-ivory/20 text-ivory font-body text-sm placeholder:text-ivory/40 focus:border-gold focus:outline-none transition-colors"
                whileFocus={{ scale: 1.01 }}
              />
            ))}
            <motion.textarea
              placeholder="Tell us about your dream wedding…"
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
              className="w-full px-5 py-4 rounded-xl bg-ivory/10 border border-ivory/20 text-ivory font-body text-sm placeholder:text-ivory/40 focus:border-gold focus:outline-none transition-colors resize-none"
            />
            <motion.button
              type="submit"
              className="w-full py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-xl shadow-gold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            className="space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Phone, label: "Call Us", value: "+91 99999 99999" },
              { icon: Mail, label: "Email Us", value: "hello@eternal.design" },
              { icon: MapPin, label: "Based In", value: "Mumbai, India • Serving Globally" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-body text-xs text-ivory/50 uppercase tracking-widest">{item.label}</p>
                  <p className="font-display text-lg text-ivory">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-ivory/10">
              <p className="font-body text-sm text-ivory/50 mb-2">⚡ Limited Availability</p>
              <p className="font-display text-xl text-gold-light">Only 5 premium slots left for 2026 weddings</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
