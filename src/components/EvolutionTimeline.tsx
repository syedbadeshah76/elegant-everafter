import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Sparkles } from "lucide-react";

interface Era {
  year: number;
  title: string;
  story: string;
  // SVG illustration of the era's invitation
  illustration: JSX.Element;
}

const eras: Era[] = [
  {
    year: 2000,
    title: "Plain Paper Cards",
    story: "In 2000, weddings began with humble printed cards — small folds of paper, posted by hand, often forgotten in a drawer.",
    illustration: (
      <div className="w-full h-full bg-[#f1ebe0] flex items-center justify-center p-8">
        <div className="bg-white border border-stone-300 shadow-sm w-56 h-72 rotate-[-3deg] p-5 font-serif text-stone-700 text-center text-xs">
          <div className="border border-stone-400 h-full flex flex-col items-center justify-center gap-2 px-2">
            <p className="uppercase tracking-widest text-[10px]">Wedding</p>
            <p className="text-base">Ramesh & Sita</p>
            <div className="w-12 h-px bg-stone-400 my-1" />
            <p className="text-[10px] leading-tight">12th February 2000<br/>Community Hall</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    year: 2008,
    title: "Decorated Print Cards",
    story: "By 2008, gold foiling and floral motifs arrived. Prettier — but still paper, still bulky, and still easy to lose.",
    illustration: (
      <div className="w-full h-full bg-gradient-to-br from-[#fdf3e3] to-[#f7e5c2] flex items-center justify-center p-8">
        <div className="bg-[#fffaf0] border-2 border-amber-700/40 shadow-md w-56 h-72 rotate-[2deg] p-4 font-serif text-amber-900 text-center">
          <div className="border-2 border-double border-amber-600/60 h-full flex flex-col items-center justify-center gap-2 px-3 relative">
            <span className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-amber-700/70" />
            <span className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-amber-700/70" />
            <p className="text-[9px] tracking-[0.3em] uppercase text-amber-700">Shubh Vivah</p>
            <p className="text-lg font-semibold">Arjun & Priya</p>
            <p className="font-script text-sm text-amber-700">~ ❀ ~</p>
            <p className="text-[10px]">15th November 2008<br/>Grand Banquet</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    year: 2014,
    title: "Email & PDF Invites",
    story: "By 2014, couples started emailing PDF invites. Faster, cheaper — but lifeless, with no interaction or shareable charm.",
    illustration: (
      <div className="w-full h-full bg-[#eef2f7] flex items-center justify-center p-8">
        <div className="bg-white shadow-lg w-64 h-72 rounded-md overflow-hidden border border-slate-200">
          <div className="h-7 bg-slate-100 border-b border-slate-200 flex items-center gap-1.5 px-3">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <p className="ml-3 text-[10px] text-slate-500 truncate">invitation.pdf</p>
          </div>
          <div className="p-5 font-serif text-slate-700 text-center text-xs flex flex-col justify-center h-[calc(100%-1.75rem)] gap-2">
            <p className="uppercase tracking-widest text-[10px] text-slate-500">Save the Date</p>
            <p className="text-lg">Karan & Neha</p>
            <p className="text-[11px]">8th December 2014</p>
            <p className="text-[10px] text-slate-500 italic mt-2">Please find attached</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    year: 2020,
    title: "WhatsApp Image Invites",
    story: "In 2020, jpeg and video invites flooded WhatsApp groups. Convenient, but generic — every couple looked the same.",
    illustration: (
      <div className="w-full h-full bg-[#e6e9d8] flex items-center justify-center p-8">
        <div className="w-60 h-72 bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-200">
          <div className="h-9 bg-emerald-700 flex items-center px-3 gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-400" />
            <p className="text-white text-[11px] font-medium">Family Group</p>
          </div>
          <div className="p-3 bg-[#e6ddd1] h-[calc(100%-2.25rem)]">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-rose-200 via-amber-100 to-rose-300 flex flex-col items-center justify-center font-serif text-rose-900 text-center px-3">
                <p className="text-[10px] tracking-widest">SAVE THE DATE</p>
                <p className="text-xl mt-1">Rohan ♥ Anjali</p>
                <p className="font-script text-rose-700 text-sm mt-1">22.10.2020</p>
              </div>
              <p className="text-[9px] text-slate-500 px-2 py-1 text-right">10:42 AM ✓✓</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    year: 2026,
    title: "Digital Wedding Invitation Website",
    story: "In 2026, weddings live online — interactive websites with RSVP, countdowns, galleries, and stories. This is what we craft at Weddy Dev.",
    illustration: (
      <div className="w-full h-full bg-gradient-to-br from-navy via-navy-light to-navy flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, hsl(var(--gold)/0.5), transparent 50%), radial-gradient(circle at 70% 80%, hsl(var(--gold)/0.4), transparent 50%)" }} />
        <div className="relative w-72 bg-card rounded-2xl overflow-hidden shadow-2xl border border-gold/40">
          <div className="h-6 bg-cream flex items-center gap-1.5 px-3 border-b border-border">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <p className="ml-2 text-[9px] text-muted-foreground truncate">weddy.dev/aarav-and-isha</p>
          </div>
          <div className="relative aspect-[4/5] bg-gradient-to-br from-blush via-cream to-blush-deep flex flex-col items-center justify-center px-4 text-center">
            <Sparkles className="text-gold mb-1 animate-pulse" size={18} />
            <p className="font-script text-gold text-2xl">forever</p>
            <p className="font-display text-2xl text-navy mt-1">Aarav & Isha</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-navy/70 mt-1">14 · 02 · 2026</p>
            <div className="flex gap-1.5 mt-3">
              {["RSVP", "Story", "Venue"].map((t) => (
                <span key={t} className="text-[9px] px-2 py-1 rounded-full bg-navy text-ivory">{t}</span>
              ))}
            </div>
            <div className="flex gap-1 mt-3">
              {[42, 18, 36, 22].map((h, i) => (
                <motion.div key={i} className="w-2 rounded-full bg-gold/70" style={{ height: h }} animate={{ scaleY: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const EvolutionTimeline = () => {
  const [idx, setIdx] = useState(eras.length - 1);
  const era = useMemo(() => eras[idx], [idx]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-cream via-background to-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-script text-gold text-2xl mb-2">The Evolution</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            From Paper Cards to <span className="text-gradient-gold italic">Living Invitations</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Slide through 26 years of how India invited the people they love — and where it's all heading.
          </p>
        </div>

        {/* Display container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-card to-cream border border-gold/30 shadow-elevated overflow-hidden mb-10">
          <div className="grid md:grid-cols-2 gap-0 min-h-[420px]">
            {/* Illustration */}
            <div className="relative aspect-[4/3] md:aspect-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={era.year}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  {era.illustration}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Story */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={era.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-4">
                    <Sparkles size={12} className="text-gold" />
                    <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-dark">Year {era.year}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">{era.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{era.story}</p>
                  {era.year === 2026 && (
                    <a
                      href="https://wa.me/919160703822?text=I%20want%20a%20digital%20wedding%20invitation%20website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-luxury mt-6 inline-flex items-center gap-2 px-6 py-3 gradient-gold text-primary-foreground rounded-full text-xs tracking-widest uppercase shadow-gold"
                    >
                      Build Yours Today
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="px-2 sm:px-6">
          <Slider
            value={[idx]}
            onValueChange={(v) => setIdx(v[0])}
            min={0}
            max={eras.length - 1}
            step={1}
            className="mb-4"
          />
          <div className="flex justify-between mt-2">
            {eras.map((e, i) => (
              <button
                key={e.year}
                onClick={() => setIdx(i)}
                className={`flex flex-col items-center gap-1 transition-all ${i === idx ? "scale-110" : "opacity-60 hover:opacity-100"}`}
              >
                <span className={`w-2 h-2 rounded-full ${i === idx ? "bg-gold shadow-gold" : "bg-muted-foreground/40"}`} />
                <span className={`font-display text-xs sm:text-sm ${i === idx ? "text-gold font-semibold" : "text-muted-foreground"}`}>
                  {e.year}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionTimeline;
