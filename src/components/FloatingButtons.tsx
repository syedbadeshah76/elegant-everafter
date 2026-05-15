import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, Gift, Sparkles } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919160703822?text=Hi%2C%20I%27m%20planning%20a%20wedding%20and%20loved%20your%20designs.%20Can%20you%20share%20pricing%20and%20demo%3F";

const FloatingButtons = () => {
  const [showOffer, setShowOffer] = useState(false);
  const [offerDismissed, setOfferDismissed] = useState(false);
  const [showReengagement, setShowReengagement] = useState(false);
  const [reengagementDismissed, setReengagementDismissed] = useState(false);

  // Offer popup disabled — commented out per request
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (!offerDismissed) setShowOffer(true);
  //   }, 15000);
  //   return () => clearTimeout(timer);
  // }, [offerDismissed]);

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

  const openOffer = () => {
    setOfferDismissed(false);
    setShowOffer(true);
  };

  const closeOffer = () => {
    setShowOffer(false);
    setOfferDismissed(true);
  };

  return (
    <>
      {/* Phone button - left */}
      <motion.a
        href="tel:+919160703822"
        className="fixed left-3 sm:left-4 bottom-20 sm:bottom-24 md:bottom-8 z-40 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-elevated group"
        style={{
          background: "linear-gradient(135deg, hsl(220, 60%, 35%), hsl(220, 45%, 20%))",
          boxShadow:
            "0 0 20px hsla(220, 60%, 35%, 0.4), 0 4px 15px hsla(220, 45%, 20%, 0.3)",
        }}
        whileHover={{
          scale: 1.15,
          boxShadow:
            "0 0 30px hsla(220, 60%, 35%, 0.6), 0 4px 20px hsla(220, 45%, 20%, 0.4)",
        }}
        whileTap={{ scale: 0.9 }}
        initial={false}
        animate={{ x: 0 }}
        aria-label="Call us"
      >
        <Phone size={20} className="text-ivory sm:w-[22px] sm:h-[22px]" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#25D366] border-2 border-background animate-pulse" />
      </motion.a>

      {/* Gift/Offer button — disabled per request */}
      {/*
      <motion.button onClick={openOffer} ... >
        ...gift button removed...
      </motion.button>
      */}

      {/* WhatsApp button - right */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-3 sm:right-4 bottom-20 sm:bottom-24 md:bottom-8 z-40 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow:
            "0 0 25px hsla(142, 70%, 49%, 0.5), 0 4px 15px hsla(142, 70%, 49%, 0.3)",
        }}
        whileHover={{
          scale: 1.15,
          boxShadow:
            "0 0 35px hsla(142, 70%, 49%, 0.6), 0 4px 20px hsla(142, 70%, 49%, 0.4)",
        }}
        whileTap={{ scale: 0.9 }}
        initial={false}
        animate={{ x: 0 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} className="text-primary-foreground sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.a>

      {/* Mobile sticky CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-30 md:hidden gradient-gold py-2.5 sm:py-3 px-4 flex items-center justify-center safe-bottom"
        initial={false}
        animate={{ y: 0 }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary-foreground font-body text-xs sm:text-sm tracking-widest uppercase"
        >
          <MessageCircle size={14} />
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
            <div className="absolute inset-0 bg-navy/50" onClick={closeOffer} />
            <motion.div
              className="relative bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full shadow-elevated border border-gold/20 mx-4"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
            >
              <button
                onClick={closeOffer}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close offer"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Gift size={24} className="text-primary-foreground sm:w-[28px] sm:h-[28px]" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2">
                  🎉 Special Wedding Offer!
                </h3>
                <p className="font-display text-base sm:text-lg text-gold mb-1">
                  FREE Demo + ₹499 OFF
                </p>
                <p className="font-body text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  Book your wedding card consultation today and get a complimentary design
                  mockup plus ₹499 off your invitation package.
                </p>
                <p className="font-body text-xs text-gold mb-3 sm:mb-4">
                  ⭐ Trusted by 500+ happy couples • Rated 4.9/5
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 sm:py-4 gradient-gold text-primary-foreground font-body text-xs sm:text-sm tracking-widest uppercase rounded-xl shadow-gold hover:scale-[1.02] transition-transform"
                  onClick={closeOffer}
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
            <div
              className="absolute inset-0 bg-navy/40"
              onClick={() => {
                setShowReengagement(false);
                setReengagementDismissed(true);
              }}
            />
            <motion.div
              className="relative bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-[320px] sm:max-w-sm w-full shadow-elevated border border-gold/20 mx-4"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
            >
              <button
                onClick={() => {
                  setShowReengagement(false);
                  setReengagementDismissed(true);
                }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <p className="font-script text-2xl sm:text-3xl text-gold mb-2 sm:mb-3">
                  Need Help?
                </p>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-2">
                  Need help choosing a wedding card design?
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  Our shaadi experts are here to help you find the perfect
                  invitation design for your special day.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-2.5 sm:py-3 gradient-gold text-primary-foreground font-body text-xs sm:text-sm tracking-widest uppercase rounded-xl shadow-gold hover:scale-[1.02] transition-transform mb-2 sm:mb-3"
                  onClick={() => {
                    setShowReengagement(false);
                    setReengagementDismissed(true);
                  }}
                >
                  Get Free Consultation
                </a>
                <button
                  onClick={() => {
                    setShowReengagement(false);
                    setReengagementDismissed(true);
                  }}
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
