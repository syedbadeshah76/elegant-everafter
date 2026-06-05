import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ChevronRight,
  Search,
  Sparkles,
  Heart,
  BookOpen,
  Palette,
  Camera,
  Globe,
  Star,
  ArrowRight,
  Clock,
  User,
  CalendarHeart,
  ChevronDown,
  Phone,
  MessageCircle,
  Mail,
  ArrowUpDown,
  Tag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";
import { blogPosts, type BlogPost } from "@/data/blogData";
import {
  blogListingSchema,
  breadcrumbSchema,
  organizationSchema,
} from "@/lib/seo-schemas";

const PAGE_SIZE = 8;
const SITE = "https://weddydev.com";

// ---------- Category metadata ----------
const CATEGORY_META: Record<
  string,
  { icon: typeof BookOpen; gradient: string; description: string }
> = {
  Trends: { icon: Sparkles, gradient: "from-amber-200 via-rose-200 to-rose-300", description: "What's new in wedding design" },
  Guide: { icon: BookOpen, gradient: "from-emerald-200 via-teal-200 to-cyan-200", description: "Step-by-step planning advice" },
  Tips: { icon: Heart, gradient: "from-pink-200 via-rose-200 to-orange-200", description: "Smart shortcuts for couples" },
  Design: { icon: Palette, gradient: "from-violet-200 via-fuchsia-200 to-pink-200", description: "Visual inspiration & ideas" },
  Photography: { icon: Camera, gradient: "from-slate-200 via-stone-200 to-amber-200", description: "Capture the moment" },
  Destinations: { icon: Globe, gradient: "from-sky-200 via-indigo-200 to-violet-200", description: "Venues & travel" },
};

const getMeta = (cat: string) =>
  CATEGORY_META[cat] || { icon: Star, gradient: "from-amber-100 via-rose-100 to-pink-100", description: "Wedding insights" };

// ---------- Reading-time helper ----------
const countByCategory = (cat: string) => blogPosts.filter((p) => p.category === cat).length;

// ---------- Cover (lightweight gradient + iconography, no heavy images) ----------
const Cover = ({ post, large = false }: { post: BlogPost; large?: boolean }) => {
  const meta = getMeta(post.category);
  const Icon = meta.icon;
  return (
    <div
      className={`relative overflow-hidden ${large ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[16/9]"} rounded-2xl bg-gradient-to-br ${meta.gradient}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "20px 20px", color: "#1a1a1a" }} />
      <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-full bg-white/30 blur-2xl" />
      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm text-[10px] font-body tracking-widest uppercase text-foreground">
        <Icon size={12} /> {post.category}
      </div>
      <div className={`absolute bottom-4 right-4 ${large ? "w-20 h-20" : "w-14 h-14"} rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center text-foreground/70`}>
        <Icon size={large ? 36 : 24} />
      </div>
    </div>
  );
};

// ---------- Blog card ----------
const ArticleCard = ({ post }: { post: BlogPost }) => (
  <article className="group">
    <Link to={`/blog/${post.slug}`} className="block">
      <Cover post={post} />
      <div className="pt-5">
        <div className="flex items-center gap-3 text-[11px] font-body text-muted-foreground mb-2 uppercase tracking-widest">
          <span>{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
        </div>
        <h3 className="font-display text-lg sm:text-xl text-foreground leading-snug group-hover:text-gold transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
            <User size={11} /> {post.author}
          </span>
          <span className="text-xs font-body text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  </article>
);

// ---------- FAQ accordion ----------
const FAQS = [
  { q: "How often is the Weddy Dev blog updated?", a: "We publish 2–4 new editorial pieces every month covering wedding website trends, invitation design, and planning advice." },
  { q: "Can I submit a wedding story or design feature?", a: "Absolutely. Email weddydevv@gmail.com with your story, photos and the date of your celebration." },
  { q: "Are the digital wedding cards mentioned in the blog customisable?", a: "Yes — every design we ship is fully customisable in colour, language, animations and content." },
  { q: "Do you publish guides for non-Indian weddings as well?", a: "Yes. Our editorial covers Hindu, Muslim, Christian and multicultural celebrations across India and destinations worldwide." },
];

const Accordion = ({ items }: { items: typeof FAQS }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 text-left p-5 sm:p-6 transition-colors hover:bg-muted/40"
            >
              <span className="font-display text-base sm:text-lg text-foreground">{item.q}</span>
              <ChevronDown size={18} className={`flex-shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-6 font-body text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ---------- Main page ----------
const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCat = searchParams.get("category") || "All";
  const query = searchParams.get("q") || "";
  const currentPage = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const sort = (searchParams.get("sort") as "latest" | "oldest" | "popular" | "featured") || "latest";
  const [searchInput, setSearchInput] = useState(query);

  const categories = useMemo(
    () => Array.from(new Set(blogPosts.map((p) => p.category))),
    []
  );
  const trending = useMemo(
    () => Array.from(new Set(blogPosts.flatMap((p) => [p.category, "Hyderabad", "Hindu", "Muslim", "Christian", "RSVP", "Digital"]))),
    []
  );

  const filtered = useMemo(() => {
    let posts = blogPosts;
    if (activeCat !== "All") posts = posts.filter((p) => p.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      posts = posts.filter(
        (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [activeCat, query]);

  const featured = blogPosts[0];
  const popular = blogPosts.slice(1, 4);
  const sorted = useMemo(() => {
    const base = filtered.length ? [...filtered] : [...blogPosts];
    const time = (d: string) => new Date(d).getTime() || 0;
    switch (sort) {
      case "oldest":
        return base.sort((a, b) => time(a.date) - time(b.date));
      case "popular":
        // popular = same as initial featured/popular ordering in blogPosts
        return base;
      case "featured":
        return base.sort((a, b) => (a.slug === featured.slug ? -1 : b.slug === featured.slug ? 1 : 0));
      case "latest":
      default:
        return base.sort((a, b) => time(b.date) - time(a.date));
    }
  }, [filtered, sort, featured.slug]);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const page = Math.min(currentPage, totalPages);
  const latest = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const updateParam = (key: string, value: string | null) => {
    const p = new URLSearchParams(searchParams);
    if (value === null || value === "" || (key === "category" && value === "All")) p.delete(key);
    else p.set(key, value);
    if (key !== "page") p.delete("page");
    setSearchParams(p);
    if (key === "page") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateParam("q", searchInput.trim() || null);
  };

  const seoTitle =
    page > 1
      ? `Wedding Blog — Page ${page} | Weddy Dev`
      : "Wedding Blog — Invitation Tips, Shaadi Card Ideas & Trends | Weddy Dev";
  const seoDescription =
    "Editorial guides on wedding invitation websites, shaadi cards, digital invitations and modern wedding planning for Hindu, Muslim & Christian couples.";
  const canonicalPath = page > 1 ? `/blog?page=${page}` : "/blog";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Weddy Dev Wedding Blog",
    url: `${SITE}/blog`,
    description: seoDescription,
    hasPart: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Organization", name: p.author },
    })),
  };
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="overflow-x-clip bg-background">
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={canonicalPath}
        jsonLd={[
          organizationSchema,
          blogListingSchema(blogPosts),
          collectionSchema,
          searchActionSchema,
          faqSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-gold text-primary-foreground px-4 py-2 rounded-full text-sm">Skip to content</a>
      <Navbar />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-24 sm:pt-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <ol className="flex items-center gap-2 text-xs sm:text-sm font-body text-muted-foreground">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={12} /></li>
            <li aria-current="page" className="text-foreground">Blog</li>
          </ol>
        </div>
      </nav>

      <div id="main-content">

      {/* HERO */}
      <section className="relative pt-12 sm:pt-16 pb-20 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream/60 via-background to-background" />
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl -z-10" />
        <div className="absolute top-40 -right-24 w-80 h-80 rounded-full bg-blush/30 blur-3xl -z-10" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <p className="font-script text-gold text-xl sm:text-2xl mb-3">The Weddy Journal</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-3xl mx-auto">
            Editorial ideas for the <span className="text-gradient-gold italic">modern wedding</span>
          </h1>
          <p className="mt-6 font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated guides on wedding invitation websites, shaadi cards, RSVP systems and timeless design — written for couples who care about the details.
          </p>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            role="search"
            className="mt-10 max-w-xl mx-auto flex items-center gap-2 p-2 rounded-full border border-border bg-card shadow-sm focus-within:border-gold/60 transition-colors"
          >
            <label htmlFor="blog-search" className="sr-only">Search articles</label>
            <Search size={18} className="ml-3 text-muted-foreground flex-shrink-0" />
            <input
              id="blog-search"
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search articles, themes, ideas…"
              className="flex-1 bg-transparent border-0 outline-none font-body text-sm text-foreground placeholder:text-muted-foreground/60 py-2"
            />
            <button type="submit" className="px-5 py-2 rounded-full gradient-gold text-primary-foreground font-body text-sm tracking-wider shadow-gold hover:opacity-95 transition-opacity">
              Search
            </button>
          </form>

          {/* Topic chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => updateParam("category", c)}
                aria-pressed={activeCat === c}
                className={`px-4 py-1.5 rounded-full text-xs font-body tracking-wider transition-all ${
                  activeCat === c
                    ? "gradient-gold text-primary-foreground shadow-gold"
                    : "border border-border text-muted-foreground hover:text-gold hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY EXPLORER */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <header className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-script text-gold text-lg mb-1">Browse</p>
              <h2 className="font-display text-2xl sm:text-3xl text-foreground">Explore by category</h2>
            </div>
            <Link to="/blog" onClick={() => updateParam("category", "All")} className="text-sm font-body text-gold hover:gap-3 flex items-center gap-2 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((cat) => {
              const meta = getMeta(cat);
              const Icon = meta.icon;
              const count = countByCategory(cat);
              return (
                <button
                  key={cat}
                  onClick={() => updateParam("category", cat)}
                  className="group text-left p-5 sm:p-6 rounded-3xl border border-border bg-card hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-foreground/70 mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors">{cat}</h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">{meta.description}</p>
                  <p className="font-body text-[11px] uppercase tracking-widest text-muted-foreground/70 mt-3">{count} article{count !== 1 ? "s" : ""}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <header className="mb-10">
            <p className="font-script text-gold text-lg mb-1">Editor's pick</p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">Featured this week</h2>
          </header>

          <article className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10">
            <Link to={`/blog/${featured.slug}`} className="md:col-span-3 block">
              <Cover post={featured} large />
            </Link>
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground font-body mb-3">
                <span className="text-gold">{featured.category}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span className="flex items-center gap-1"><CalendarHeart size={11} /> {featured.date}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-tight mb-4">
                <Link to={`/blog/${featured.slug}`} className="hover:text-gold transition-colors">{featured.title}</Link>
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
              <Link
                to={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-gold text-primary-foreground text-sm font-body tracking-wider shadow-gold hover:opacity-95 transition-opacity"
              >
                Read the article <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* POPULAR */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <header className="mb-10">
            <p className="font-script text-gold text-lg mb-1">Most read</p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">Popular this season</h2>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {popular.map((p) => <ArticleCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <header className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-script text-gold text-lg mb-1">Fresh ink</p>
              <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                {activeCat === "All" ? "Latest articles" : `Latest in ${activeCat}`}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-muted-foreground" aria-hidden="true" />
                <label htmlFor="cat-filter" className="sr-only">Filter by category</label>
                <select
                  id="cat-filter"
                  value={activeCat}
                  onChange={(e) => updateParam("category", e.target.value)}
                  className="bg-card border border-border rounded-full px-4 py-2 font-body text-sm text-foreground focus:border-gold outline-none"
                >
                  <option value="All">All categories</option>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpDown size={14} className="text-muted-foreground" aria-hidden="true" />
                <label htmlFor="sort-by" className="sr-only">Sort articles</label>
                <select
                  id="sort-by"
                  value={sort}
                  onChange={(e) => updateParam("sort", e.target.value === "latest" ? null : e.target.value)}
                  className="bg-card border border-border rounded-full px-4 py-2 font-body text-sm text-foreground focus:border-gold outline-none"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="popular">Popular</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>
          </header>

          {latest.length === 0 ? (
            <p className="text-center font-body text-muted-foreground py-10">No articles match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {latest.map((p) => <ArticleCard key={p.slug} post={p} />)}
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-14">
              {page > 1 && (
                <Link
                  rel="prev"
                  to={`/blog?page=${page - 1}`}
                  onClick={(e) => { e.preventDefault(); updateParam("page", String(page - 1)); }}
                  className="px-4 py-2 rounded-full border border-border text-sm font-body text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  Previous
                </Link>
              )}
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <Link
                    key={p}
                    to={p === 1 ? "/blog" : `/blog?page=${p}`}
                    onClick={(e) => { e.preventDefault(); updateParam("page", p === 1 ? null : String(p)); }}
                    aria-current={p === page ? "page" : undefined}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-body text-sm transition-all ${
                      p === page ? "gradient-gold text-primary-foreground shadow-gold" : "border border-border text-muted-foreground hover:text-gold hover:border-gold"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}
              {page < totalPages && (
                <Link
                  rel="next"
                  to={`/blog?page=${page + 1}`}
                  onClick={(e) => { e.preventDefault(); updateParam("page", String(page + 1)); }}
                  className="px-4 py-2 rounded-full border border-border text-sm font-body text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  Next
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>

      {/* TRENDING TOPICS */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <header className="mb-10 text-center">
            <p className="font-script text-gold text-lg mb-1">Tags</p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">Trending topics</h2>
          </header>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {trending.map((t) => (
              <button
                key={t}
                onClick={() => { updateParam("q", t); setSearchInput(t); }}
                className="px-5 py-2 rounded-full border border-border bg-card text-sm font-body text-muted-foreground hover:text-gold hover:border-gold transition-colors"
              >
                #{t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl gradient-navy p-10 sm:p-16 text-center">
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <p className="font-script text-gold-light text-xl mb-3">Ready when you are</p>
              <h2 className="font-display text-3xl sm:text-4xl text-ivory max-w-2xl mx-auto leading-tight mb-5">
                Let's design your wedding invitation website
              </h2>
              <p className="font-body text-ivory/70 max-w-xl mx-auto mb-8">
                Premium designs, 48-hour delivery, fully customisable. Talk to our team for a free demo and pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/919160703822?text=Hi%20Weddy%20Dev%2C%20I%20found%20you%20via%20the%20blog%20and%20would%20like%20a%20demo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <a
                  href="tel:+919160703822"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-gold/60 text-gold-light font-body text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-colors"
                >
                  <Phone size={16} /> Call 9160703822
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <header className="mb-10 text-center">
            <p className="font-script text-gold text-lg mb-1">Good to know</p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">Frequently asked</h2>
          </header>
          <Accordion items={FAQS} />
        </div>
      </section>

      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default BlogPage;
