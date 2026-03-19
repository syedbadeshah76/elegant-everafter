import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const stories = [
  {
    couple: "Priya & Arjun",
    date: "December 2025",
    story: "A beautiful Hindu wedding with a royal Rajputana theme. We crafted a website that mirrored the grandeur of their Udaipur celebration.",
    challenge: "Coordinating 800+ guests across 3 countries",
    result: "98% RSVP response rate via WhatsApp integration",
  },
  {
    couple: "Ayesha & Farid",
    date: "November 2025",
    story: "An intimate nikah ceremony that blended tradition with modern elegance. Every detail reflected their love for Islamic art and calligraphy.",
    challenge: "Bilingual content in English & Urdu",
    result: "Guests praised the seamless cultural authenticity",
  },
  {
    couple: "Grace & Thomas",
    date: "October 2025",
    story: "A destination wedding in Goa. We designed an all-in-one website with travel guides, venue maps, and a stunning countdown timer.",
    challenge: "Managing logistics for international guests",
    result: "50+ guests used the venue map feature to navigate",
  },
];

const WeddingStories = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stories" className="py-24 md:py-32 bg-cream relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">Real Stories</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Wedding Stories That <span className="text-gradient-gold italic">Inspire</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-[0.5px]" />

          {stories.map((story, i) => (
            <motion.div
              key={story.couple}
              className={`relative mb-16 last:mb-0 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 rounded-full gradient-gold flex items-center justify-center z-10 shadow-gold">
                <Heart size={14} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft hover:shadow-gold transition-shadow duration-500">
                  <p className="font-body text-xs uppercase tracking-widest text-gold mb-2">{story.date}</p>
                  <h3 className="font-display text-xl text-foreground mb-3">{story.couple}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{story.story}</p>
                  <div className="space-y-2">
                    <p className="font-body text-xs text-muted-foreground">
                      <span className="text-gold font-semibold">Challenge:</span> {story.challenge}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      <span className="text-gold font-semibold">Result:</span> {story.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingStories;
