import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just design our wedding invitation website — they created a complete digital experience. The RSVP system and WhatsApp sharing made it super easy for our guests. Highly recommended!",
    couple: "Priya & Arjun Sharma",
    location: "Mumbai, India",
    rating: 5,
  },
  {
    quote: "The level of detail and personalization was beyond anything we imagined. Our nikah invitation was a masterpiece — every guest complimented the design.",
    couple: "Aisha & Faraz Khan",
    location: "Hyderabad, India",
    rating: 5,
  },
  {
    quote: "From concept to delivery, the experience was seamless. Our guests are still talking about how beautiful our wedding website was!",
    couple: "Anjali & Karthik Reddy",
    location: "Bangalore, India",
    rating: 5,
  },
  {
    quote: "The interactive RSVP and beautiful wedding cards design made planning so much easier. Pure magic — worth every rupee.",
    couple: "Meera & Rohan Patel",
    location: "Pune, India",
    rating: 5,
  },
  {
    quote: "We chose Weddy Dev for our destination wedding and it was the best decision. Stunning visuals and rated 4.9/5 by all our family members!",
    couple: "Neha & Vikram Iyer",
    location: "Chennai, India",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">Love Notes</p>
          <h2 className="font-display text-3xl md:text-3xl text-foreground mb-4">
           Real Reviews for Wedding <span className="text-gradient-gold italic">Invitation Websites</span>
          </h2>
          <p className="font-body text-muted-foreground">
            Rated <span className="text-gold font-semibold">4.9 out of 5</span> by 500+ couples across India
          </p>
        </motion.div>

        <motion.div
          className="relative mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Quote className="mx-auto text-gold/20 mb-6" size={48} />

          <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="font-display text-lg sm:text-xl md:text-2xl text-foreground italic leading-relaxed mb-8 max-w-2xl mx-auto">
              "{t.quote}"
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="font-display text-lg text-foreground">{t.couple}</p>
            <p className="font-body text-sm text-muted-foreground">{t.location}</p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border hover:border-gold flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-gold" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border hover:border-gold flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
