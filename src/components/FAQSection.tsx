import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to design a wedding website?",
    a: "Our standard turnaround is 5-7 business days. For rush orders, we offer a 48-hour express service. Every design goes through multiple rounds of refinement until you're completely in love with it.",
  },
  {
    q: "Can you design for any culture or religion?",
    a: "Absolutely! We specialize in Hindu, Muslim, Christian, and multi-cultural weddings. Our designers research cultural nuances to ensure every detail is authentic and respectful.",
  },
  {
    q: "How does the WhatsApp RSVP system work?",
    a: "Your guests receive a beautifully designed invitation with a direct WhatsApp link. They can RSVP with a single tap, and you get real-time tracking of all responses in an organized dashboard.",
  },
  {
    q: "What's included in the wedding website package?",
    a: "Each package includes a custom-designed website, RSVP management, event timeline, venue information with maps, photo gallery, and a beautiful countdown timer. Premium packages include video integration and registry features.",
  },
  {
    q: "Can I make changes after the website is live?",
    a: "Yes! We offer unlimited revisions before launch, and post-launch support for any updates you need — from adding new events to updating guest information.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 100% satisfaction guarantee. If you're not happy with the initial concepts, we'll refund your deposit. However, this has never happened — our clients always love what we create!",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">Questions?</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Frequently Asked <span className="text-gradient-gold italic">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-4 sm:px-6 overflow-hidden"
              >
                <AccordionTrigger className="font-display text-sm sm:text-base text-foreground hover:text-gold transition-colors py-5 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
