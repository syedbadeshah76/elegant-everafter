import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Star, ExternalLink, Filter, Info } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { breadcrumbSchema, localBusinessSchema, organizationSchema } from "@/lib/seo-schemas";
import { designs, type Design } from "@/data/designsData";

const categories = ["All", "Hindu", "Muslim", "Christian", "General"] as const;

const DesignCard = ({ design, index }: { design: Design; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/product/${design.code}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/product/${design.code}`);
      }}
      className="rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-pointer group flex flex-col"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: Math.min(index, 6) * 0.05, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
        {!imageLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
        <img loading="lazy" decoding="async"
          src={design.image}
          alt={`${design.title} - wedding card design`}
          loading="lazy"
          width={800}
          height={500}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="absolute top-3 left-3 font-body text-[10px] tracking-widest uppercase bg-background/90 text-foreground px-2.5 py-1 rounded-full">
          {design.code}
        </span>
        {design.badge && (
          <div
            className={`absolute top-3 right-3 font-body text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1 ${
              design.badge === "Popular"
                ? "bg-accent text-accent-foreground"
                : design.badge === "Premium"
                  ? "gradient-gold text-primary-foreground"
                  : "bg-emerald-500/90 text-white"
            }`}
          >
            {design.badge === "Popular" && <Star size={10} />}
            {design.badge}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <h3 className="font-display text-base sm:text-lg text-foreground mb-1 group-hover:text-gold transition-colors">
          {design.title}
        </h3>
        <p className="font-body text-xs text-muted-foreground mb-3 leading-relaxed">{design.subtitle}</p>

        <div className="flex items-end justify-between pt-2 border-t border-border mb-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl sm:text-2xl font-bold text-gold">{design.price}</span>
            {design.originalPrice && (
              <span className="font-body text-xs sm:text-sm text-muted-foreground line-through">
                {design.originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star size={12} className="text-gold fill-gold" />
            <span>{design.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          <a
            href={design.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-gold/50 text-gold font-body text-[11px] sm:text-xs tracking-wider uppercase rounded-full hover:bg-gold/10 transition-colors"
          >
            <Eye size={12} /> Demo
          </a>
          <Link
            to={`/product/${design.code}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 gradient-gold text-primary-foreground font-body text-[11px] sm:text-xs tracking-wider uppercase rounded-full shadow-gold hover:scale-[1.03] transition-transform"
          >
            <Info size={12} /> Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const DesignsPage = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? designs : designs.filter((d) => d.category === active);

  return (
    <main className="overflow-x-clip">
      <SEO
        title="Wedding Invitation Designs — Hindu, Muslim & Christian Shaadi Cards | Weddy Dev"
        description="Browse our complete collection of premium wedding invitation websites and shaadi card designs. Custom themes for Hindu, Muslim, and Christian celebrations."
        path="/designs"
        jsonLd={[
          organizationSchema,
          localBusinessSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Designs", path: "/designs" },
          ]),
        ]}
      />
      <Navbar />
      <div className="pt-24">
        <section className="py-16 md:py-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-gold text-xl sm:text-2xl mb-2">Our Collection</p>
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mb-3">
                All Wedding <span className="text-gradient-gold italic">Invitation Designs</span>
              </h1>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Browse our complete collection of wedding cards and shaadi invitation designs for every culture and
                style.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Filter size={16} className="text-muted-foreground self-center mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full font-body text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                    active === cat
                      ? "gradient-gold text-primary-foreground shadow-gold"
                      : "bg-background text-muted-foreground hover:text-gold border border-border"
                  }`}
                >
                  {cat} {cat !== "All" && `(${designs.filter((d) => d.category === cat).length})`}
                </button>
              ))}
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map((design, i) => (
                <DesignCard key={design.code} design={design} index={i} />
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-body text-muted-foreground mb-4">
                Don't see what you're looking for? We create custom designs too!
              </p>
              <a
                href="https://wa.me/919160703822?text=Hi%2C%20I%20want%20a%20custom%20wedding%20card%20design.%20Can%20you%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-body text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-gold hover:scale-105 transition-transform"
              >
                <ExternalLink size={14} /> Request Custom Design
              </a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default DesignsPage;
