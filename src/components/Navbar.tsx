import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Stories", href: "#stories" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%2C%20I%27m%20planning%20a%20wedding%20and%20loved%20your%20designs.%20Can%20you%20share%20pricing%20and%20demo%3F";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 12]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
        style={{
          backgroundColor: `hsla(40, 33%, 98%, ${bgOpacity.get()})`,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: "hsla(40, 33%, 98%, 0.9)",
            opacity: bgOpacity,
            backdropFilter: `blur(${blur}px)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="font-script text-3xl text-gold">
            Eternal
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-wide text-foreground/70 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 gradient-gold text-primary-foreground font-body text-sm tracking-wide rounded-full shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          <button
            className="md:hidden text-foreground z-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresenceMobile isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

const AnimatePresenceMobile = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-background/98 flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {navLinks.map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="font-display text-2xl text-foreground hover:text-gold transition-colors"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.08 }}
        >
          {link.label}
        </motion.a>
      ))}
      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-8 py-3 gradient-gold text-primary-foreground font-body rounded-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Book Now
      </motion.a>
    </motion.div>
  );
};

export default Navbar;
