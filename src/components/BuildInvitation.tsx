import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Check } from "lucide-react";

const cultures = ["Hindu", "Muslim", "Christian"];
const themes = ["Royal", "Minimal", "Floral"];
const features = ["RSVP", "Countdown", "Gallery", "Venue Map"];

const themeColors: Record<string, { bg: string; accent: string; text: string }> = {
  "Hindu-Royal": { bg: "from-red-900 to-amber-900", accent: "text-amber-300", text: "text-amber-100" },
  "Hindu-Minimal": { bg: "from-orange-50 to-amber-50", accent: "text-orange-600", text: "text-orange-900" },
  "Hindu-Floral": { bg: "from-rose-100 to-pink-50", accent: "text-rose-500", text: "text-rose-900" },
  "Muslim-Royal": { bg: "from-emerald-900 to-teal-900", accent: "text-emerald-300", text: "text-emerald-100" },
  "Muslim-Minimal": { bg: "from-teal-50 to-green-50", accent: "text-teal-600", text: "text-teal-900" },
  "Muslim-Floral": { bg: "from-green-100 to-emerald-50", accent: "text-green-500", text: "text-green-900" },
  "Christian-Royal": { bg: "from-indigo-900 to-blue-900", accent: "text-blue-300", text: "text-blue-100" },
  "Christian-Minimal": { bg: "from-slate-50 to-blue-50", accent: "text-blue-600", text: "text-blue-900" },
  "Christian-Floral": { bg: "from-violet-100 to-purple-50", accent: "text-violet-500", text: "text-violet-900" },
};

const WHATSAPP_BASE = "https://wa.me/919160703822?text=";

const BuildInvitation = () => {
  const [culture, setCulture] = useState("Hindu");
  const [theme, setTheme] = useState("Royal");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["RSVP"]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const key = `${culture}-${theme}`;
  const colors = themeColors[key] || themeColors["Hindu-Royal"];

  const toggleFeature = (f: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const whatsappMsg = encodeURIComponent(
    `Hi, I'd love a ${culture} ${theme} wedding invitation with ${selectedFeatures.join(", ")}. Can you share pricing?`
  );

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-script text-gold text-2xl mb-3">Interactive Experience</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Design Your Dream <span className="text-gradient-gold italic">Wedding Card</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Choose your style and see a live preview — then let's bring your shaadi invitation to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div>
              <p className="font-display text-lg text-foreground mb-3">Choose Culture</p>
              <div className="flex flex-wrap gap-3">
                {cultures.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCulture(c)}
                    className={`px-5 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                      culture === c
                        ? "gradient-gold text-primary-foreground shadow-gold"
                        : "bg-card border border-border text-muted-foreground hover:border-gold/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display text-lg text-foreground mb-3">Choose Theme</p>
              <div className="flex flex-wrap gap-3">
                {themes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-5 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                      theme === t
                        ? "gradient-gold text-primary-foreground shadow-gold"
                        : "bg-card border border-border text-muted-foreground hover:border-gold/40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display text-lg text-foreground mb-3">Add Features</p>
              <div className="flex flex-wrap gap-3">
                {features.map((f) => (
                  <button
                    key={f}
                    onClick={() => toggleFeature(f)}
                    className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 flex items-center gap-2 ${
                      selectedFeatures.includes(f)
                        ? "gradient-gold text-primary-foreground shadow-gold"
                        : "bg-card border border-border text-muted-foreground hover:border-gold/40"
                    }`}
                  >
                    {selectedFeatures.includes(f) && <Check size={14} />}
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={`${WHATSAPP_BASE}${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold hover:scale-105 transition-transform"
            >
              <Sparkles size={16} />
              Get This Design
            </a>
          </motion.div>

          <motion.div
            className={`rounded-3xl p-8 md:p-12 bg-gradient-to-br ${colors.bg} shadow-elevated relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center`}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            key={key}
          >
            <div className={`absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 ${colors.accent.replace("text", "border")} opacity-50`} />
            <div className={`absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 ${colors.accent.replace("text", "border")} opacity-50`} />

            <motion.p
              className={`font-script text-3xl md:text-4xl ${colors.accent} mb-2`}
              key={`script-${key}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {culture === "Muslim" ? "Bismillah" : culture === "Hindu" ? "Shubh Vivah" : "Holy Matrimony"}
            </motion.p>

            <motion.h3
              className={`font-display text-2xl md:text-3xl ${colors.text} mb-1`}
              key={`title-${key}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Riya & Aarav
            </motion.h3>

            <div className={`w-16 h-[1px] ${colors.accent.replace("text", "bg")} my-4 opacity-60`} />

            <p className={`font-body text-sm ${colors.text} opacity-70 mb-6`}>
              March 15, 2026 • The Grand Palace
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {selectedFeatures.map((f) => (
                <motion.span
                  key={f}
                  className={`px-3 py-1 rounded-full text-xs font-body ${colors.accent} border ${colors.accent.replace("text", "border")} border-opacity-30`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  {f}
                </motion.span>
              ))}
            </div>

            <p className={`font-body text-xs ${colors.text} opacity-40 mt-6 uppercase tracking-widest`}>
              {theme} Theme Preview
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildInvitation;
