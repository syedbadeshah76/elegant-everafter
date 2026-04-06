import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Heart, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: Heart, value: 500, suffix: "+", label: "Happy Couples" },
  { icon: Users, value: 1200, suffix: "+", label: "Wedding Guests Served" },
  { icon: Globe, value: 12, suffix: "+", label: "Countries Reached" },
  { icon: Award, value: 4.9, suffix: "/5", label: "Client Rating", decimal: true },
];

const Counter = ({ target, decimal, suffix }: { target: number; decimal?: boolean; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const spring = useSpring(0, { duration: 2500, bounce: 0 });
  const display = useTransform(spring, (v) =>
    decimal ? v.toFixed(1) : Math.floor(v).toString()
  );

  useEffect(() => {
    if (inView) {
      spring.set(target);
    }
  }, [inView, target, spring]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-gold">
      <motion.span>{display}</motion.span>{suffix}
    </span>
  );
};

const SocialProof = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 gradient-navy relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <stat.icon className="mx-auto mb-3 text-gold-light" size={28} />
            <Counter target={stat.value} decimal={stat.decimal} suffix={stat.suffix} />
            <p className="font-body text-sm text-ivory/60 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
