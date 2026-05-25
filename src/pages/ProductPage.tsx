import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowLeft, Phone, MessageCircle, Eye, Check, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { getDesignByCode, designs } from "@/data/designsData";
import { breadcrumbSchema, organizationSchema } from "@/lib/seo-schemas";

const WHATSAPP_BASE = "https://wa.me/919160703822";
const PHONE_URL = "tel:+919160703822";

const ProductPage = () => {
  const { code } = useParams<{ code: string }>();
  const design = code ? getDesignByCode(code) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [code]);

  if (!design) {
    return <Navigate to="/designs" replace />;
  }

  const whatsappBookUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Hi, I want to book the "${design.title}" (${design.code}) wedding invitation website. Please share next steps.`,
  )}`;

  const related = designs.filter((d) => d.category === design.category && d.code !== design.code).slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${design.title} — ${design.code}`,
    description: design.description,
    image: design.image,
    sku: design.code,
    brand: { "@type": "Brand", name: "Weddy Dev" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: design.rating,
      reviewCount: design.reviews,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: design.price.replace(/[^\d]/g, ""),
      availability: "https://schema.org/InStock",
      url: `https://weddydev.com/product/${design.code}`,
    },
  };

  return (
    <main className="overflow-x-clip">
      <SEO
        title={`${design.title} (${design.code}) — Wedding Invitation Website | Weddy Dev`}
        description={design.description}
        path={`/product/${design.code}`}
        jsonLd={[
          organizationSchema,
          productJsonLd,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Designs", path: "/designs" },
            { name: design.title, path: `/product/${design.code}` },
          ]),
        ]}
      />
      <Navbar />

      {/* Hero / Overview */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 gradient-navy relative overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/designs"
            className="inline-flex items-center gap-2 text-ivory/70 hover:text-gold font-body text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to all designs
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-elevated bg-card aspect-[4/5] sm:aspect-[5/6]">
                <img loading="lazy" decoding="async"
                  src={design.image}
                  alt={`${design.title} wedding invitation website preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-body text-xs tracking-widest uppercase bg-background/90 text-foreground px-3 py-1.5 rounded-full">
                  {design.code}
                </span>
                {design.badge && (
                  <span
                    className={`absolute top-4 right-4 font-body text-xs px-3 py-1.5 rounded-full ${
                      design.badge === "Popular"
                        ? "bg-accent text-accent-foreground"
                        : design.badge === "Premium"
                          ? "gradient-gold text-primary-foreground"
                          : "bg-emerald-500/90 text-white"
                    }`}
                  >
                    {design.badge}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm mb-4">
                <Sparkles size={14} className="text-gold" />
                <span className="font-body text-xs tracking-widest uppercase text-gold-light">
                  {design.categoryEmoji} {design.category} Wedding
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight mb-3">
                {design.title}
              </h1>
              <p className="font-script text-gold-light text-xl mb-4">{design.subtitle}</p>

              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-ivory/80 font-body text-sm">
                  {design.rating}/5 · {design.reviews} reviews
                </span>
              </div>

              <p className="font-body text-base text-ivory/80 mb-6 leading-relaxed">
                {design.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-4xl text-gold font-bold">{design.price}</span>
                {design.originalPrice && (
                  <>
                    <span className="font-body text-lg text-ivory/50 line-through">{design.originalPrice}</span>
                    <span className="font-body text-[10px] uppercase tracking-wider bg-emerald-500/15 text-emerald-300 px-2 py-1 rounded-full font-semibold">
                      Limited Offer
                    </span>
                  </>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={whatsappBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury inline-flex items-center justify-center gap-2 px-7 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold"
                >
                  <MessageCircle size={16} /> Book Now
                </a>
                <a
                  href={design.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury inline-flex items-center justify-center gap-2 px-7 py-4 border border-gold/60 text-gold font-body text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-colors"
                >
                  <Eye size={16} /> View Demo
                </a>
              </div>

              <a
                href={PHONE_URL}
                className="inline-flex items-center gap-2 text-ivory/70 hover:text-gold font-body text-sm transition-colors"
              >
                <Phone size={14} /> Or call us at 9160703822
              </a>

              {/* Trust strip */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1.5 text-ivory/70 font-body">
                  <ShieldCheck size={14} className="text-gold" /> 3-month validity
                </span>
                <span className="flex items-center gap-1.5 text-ivory/70 font-body">
                  <Zap size={14} className="text-gold" /> 48hr Delivery
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-script text-gold text-xl mb-1">What's Included</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
              Premium <span className="text-gradient-gold italic">Features</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {design.features.map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-2xl bg-background border border-border hover:border-gold/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-full gradient-gold flex items-center justify-center shrink-0">
                  <Check size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-foreground">{feat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections breakdown */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-script text-gold text-xl mb-1">Inside the Website</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
              Every <span className="text-gradient-gold italic">Section</span> Crafted With Care
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {design.sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-gold transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-gold text-lg">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg text-foreground">{s.title}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-script text-gold text-xl mb-1">Loved by Couples</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-5">
            Rated <span className="text-gradient-gold italic">{design.rating}/5</span>
          </h2>
          <div className="inline-flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-gold fill-gold" />
            ))}
          </div>
          <p className="font-body text-muted-foreground">Based on {design.reviews} verified couple reviews</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 gradient-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-4xl text-ivory mb-4">
            Ready to book <span className="italic text-gold">{design.title}</span>?
          </h2>
          <p className="font-body text-ivory/80 mb-8">
            Get your customized wedding invitation website ready in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-flex items-center justify-center gap-2 px-8 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold"
            >
              <MessageCircle size={16} /> Book Now on WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="btn-luxury inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/60 text-gold font-body text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-colors"
            >
              <Phone size={16} /> Call 9160703822
            </a>
          </div>
        </div>
      </section>

      {/* Related designs */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="font-script text-gold text-xl mb-1">More Designs</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
                Other <span className="text-gradient-gold italic">{design.category}</span> Designs
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((d) => (
                <Link
                  key={d.code}
                  to={`/product/${d.code}`}
                  className="rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 hover:shadow-gold transition-all duration-500 block group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 font-body text-[10px] tracking-widest uppercase bg-background/90 text-foreground px-2 py-1 rounded-full">
                      {d.code}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base text-foreground group-hover:text-gold transition-colors">
                      {d.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground mb-2">{d.subtitle}</p>
                    <p className="font-display text-lg text-gold font-bold">{d.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default ProductPage;
