import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Designs", href: "/designs" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP_URL = "https://wa.me/919160703822?text=Hi%2C%20I%27m%20planning%20a%20wedding%20and%20loved%20your%20designs.%20Can%20you%20share%20pricing%20and%20demo%3F";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);
  const location = useLocation();

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-3 md:py-4"
      >
        <motion.div
          className="absolute inset-0 backdrop-blur-xl border-b border-border/30"
          style={{
            backgroundColor: "hsla(220, 30%, 12%, 0.7)",
            opacity: bgOpacity,
          }}
        />
        <div className="relative max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-script text-2xl sm:text-3xl text-gold">
            Weddy Dev
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.href ? "text-gold" : "text-ivory/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
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
            className="md:hidden text-ivory z-10"
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
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: "hsl(220, 45%, 12%)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-ivory/80 hover:text-gold transition-colors"
        aria-label="Close menu"
      >
        <X size={28} />
      </button>
      {navLinks.map((link, i) => (
        <motion.div
          key={link.href}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.08 }}
        >
          <Link
            to={link.href}
            onClick={onClose}
            className="font-display text-2xl text-ivory hover:text-gold transition-colors"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
      <motion.a
        href="https://wa.me/919160703822"
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
