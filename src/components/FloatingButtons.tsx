import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, Gift, Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%2C%20I%27m%20planning%20a%20wedding%20and%20loved%20your%20designs.%20Can%20you%20share%20pricing%20and%20demo%3F";

const FloatingButtons = () => {
  const [showOffer, setShowOffer] = useState(false);
  const [offerDismissed, setOfferDismissed] = useState(false);
  const [showReengagement, setShowReengagement] = useState(false);
  const [reengagementDismissed, setReengagementDismissed] = useState(false);

  // Show offer popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!offerDismissed) setShowOffer(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [offerDismissed]);

  // Re-engagement popup after 30 seconds of inactivity
  useEffect(() => {
    if (reengagementDismissed) return;
    let inactivityTimer: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (!reengagementDismissed && !showOffer) {
          setShowReengagement(true);
        }
      }, 30000);
    };

    const events = ["mousemove", "keydown", "scroll", "touchstart", "click"];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [reengagementDismissed, showOffer]);

  return (
    <>
      {/* Phone button - left - enhanced */}
      <motion.a
        href="tel:+919999999999"
        className="fixed left-4 bottom-24 md:bottom-8 z-40 w-16 h-16 rounded-full flex items-center justify-center shadow-elevated group"
        style={{
          background: "linear-gradient(135deg, hsl(220, 60%, 35%), hsl(220, 45%, 20%))",
          boxShadow: "0 0 20px hsla(220, 60%, 35%, 0.4), 0 4px 15px hsla(220, 45%, 20%, 0.3)",
        }}
        whileHover={{ scale: 1.15, boxShadow: "0 0 30px hsla(220, 60%, 35%, 0.6), 0 4px 20px hsla(220, 45%, 20%, 0.4)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ delay: 5, type: "spring" }}
        aria-label="Call us"
      >
        <Phone size={22} className="text-ivory" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#25D366] border-2 border-background animate-pulse" />
      </motion.a>

      {/* Gift/Offer button - top left */}
      <motion.button
        onClick={() => { if (!offerDismissed) setShowOffer(true); }}
        className="fixed left-4 bottom-44 md:bottom-28 z-40 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, hsl(37, 50%, 65%), hsl(37, 38%, 50%), hsl(37, 35%, 40%))",
          boxShadow: "0 0 25px hsla(37, 50%, 60%, 0.5), 0 4px 15px hsla(37, 38%, 50%, 0.3)",
        }}
        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ delay: 5.3, type: "spring" }}
        aria-label="Special offer"
      >
        <Gift size={22} className="text-primary-foreground relative z-10" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            background: "conic-gradient(from 0deg, transparent, hsla(37, 50%, 80%, 0.5), transparent)",
          }}
        />
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-gold border-2 border-background flex items-center justify-center">
          <Sparkles size={10} className="text-primary-foreground" />
        </span>
      </motion.button>

      {/* WhatsApp button - right - enhanced */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-24 md:bottom-8 z-40 w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 0 25px hsla(142, 70%, 49%, 0.5), 0 4px 15px hsla(142, 70%, 49%, 0.3)",
        }}
        whileHover={{ scale: 1.15, boxShadow: "0 0 35px hsla(142, 70%, 49%, 0.6), 0 4px 20px hsla(142, 70%, 49%, 0.4)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{ delay: 5, type: "spring" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="text-primary-foreground" />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
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

      {/* Re-engagement Popup */}
      <AnimatePresence>
        {showReengagement && !reengagementDismissed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navy/40" onClick={() => { setShowReengagement(false); setReengagementDismissed(true); }} />
            <motion.div
              className="relative bg-background rounded-3xl p-8 max-w-sm w-full shadow-elevated border border-gold/20"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
            >
              <button
                onClick={() => { setShowReengagement(false); setReengagementDismissed(true); }}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <p className="font-script text-3xl text-gold mb-3">Need Help?</p>
                <h3 className="font-display text-xl text-foreground mb-2">Need help choosing a design?</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Our wedding experts are here to help you find the perfect design for your special day.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-xl shadow-gold hover:scale-[1.02] transition-transform mb-3"
                  onClick={() => { setShowReengagement(false); setReengagementDismissed(true); }}
                >
                  Get Free Consultation
                </a>
                <button
                  onClick={() => { setShowReengagement(false); setReengagementDismissed(true); }}
                  className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  No thanks, I'm just browsing
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
