import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, Gift } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%2C%20I%27m%20planning%20a%20wedding%20and%20loved%20your%20designs.%20Can%20you%20share%20pricing%20and%20demo%3F";

const FloatingButtons = () => {
  const [showOffer, setShowOffer] = useState(false);
  const [offerDismissed, setOfferDismissed] = useState(false);

  // Show offer popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!offerDismissed) setShowOffer(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [offerDismissed]);

  return (
    <>
      {/* Phone button - left */}
      <motion.a
        href="tel:+919999999999"
        className="fixed left-4 bottom-24 md:bottom-8 z-40 w-14 h-14 rounded-full gradient-navy flex items-center justify-center shadow-elevated"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ delay: 5, type: "spring" }}
        aria-label="Call us"
      >
        <Phone size={20} className="text-ivory" />
      </motion.a>

      {/* WhatsApp button - right */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-24 md:bottom-8 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-elevated animate-pulse-gold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{ delay: 5, type: "spring" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} className="text-primary-foreground" />
      </motion.a>

      {/* Mobile sticky CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-30 md:hidden gradient-gold py-3 px-4 flex items-center justify-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 6 }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary-foreground font-body text-sm tracking-widest uppercase"
        >
          <MessageCircle size={16} />
          Chat on WhatsApp
        </a>
      </motion.div>

      {/* Offer Popup */}
      <AnimatePresence>
        {showOffer && !offerDismissed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navy/50" onClick={() => { setShowOffer(false); setOfferDismissed(true); }} />
            <motion.div
              className="relative bg-background rounded-3xl p-8 max-w-md w-full shadow-elevated border border-gold/20"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
            >
              <button
                onClick={() => { setShowOffer(false); setOfferDismissed(true); }}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close offer"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                  <Gift size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">Special Offer!</h3>
                <p className="font-display text-lg text-gold mb-1">FREE Demo + ₹2,000 OFF</p>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Book your consultation today and get a complimentary design mockup plus ₹2,000 off your package.
                </p>
                <p className="font-body text-xs text-gold mb-4">⭐ Trusted by 500+ happy couples</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-xl shadow-gold hover:scale-[1.02] transition-transform"
                  onClick={() => { setShowOffer(false); setOfferDismissed(true); }}
                >
                  Claim Your Offer
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
