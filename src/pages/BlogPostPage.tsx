import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BlogCard from "@/components/BlogCard";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogData";
import { articleSchema, breadcrumbSchema, organizationSchema } from "@/lib/seo-schemas";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  CalendarHeart,
  Clock,
  User,
  Share2,
  ChevronRight,
  List,
  Lightbulb,
  CheckCircle2,
  Phone,
  Mail,
  Sparkles,
  BookOpen,
} from "lucide-react";
import heroFallback from "@/assets/hero-wedding.webp";

const SITE_URL = "https://weddydev.com";

// Generic FAQs scoped by category — keeps content people-first and FAQ schema valid
const FAQS_BY_CATEGORY: Record<string, { q: string; a: string }[]> = {
  Trends: [
    {
      q: "What is the biggest wedding website trend in 2026?",
      a: "Interactive RSVP via WhatsApp combined with cinematic video backgrounds is the dominant trend, because it delivers a premium feel while solving real planning problems for couples.",
    },
    {
      q: "Are digital wedding invitations replacing printed cards?",
      a: "Most couples now use a hybrid approach — premium printed cards for close family and a beautifully designed digital wedding invitation website for the wider guest list.",
    },
    {
      q: "How long does it take to build a wedding website?",
      a: "A custom Weddy Dev wedding website is typically delivered within 3–5 days, including unlimited revisions until the design is exactly what you want.",
    },
  ],
  Guide: [
    {
      q: "Which wedding card design suits my culture?",
      a: "We design culture-first invitations for Hindu, Muslim, Christian and fusion weddings — each with motifs, calligraphy and colour palettes that respect tradition while feeling modern.",
    },
    {
      q: "Can I get a bilingual wedding invitation?",
      a: "Yes. We regularly create bilingual wedding cards in English with Hindi, Urdu, Telugu or Tamil, so every guest feels included.",
    },
    {
      q: "Do you offer custom wedding card design?",
      a: "Every Weddy Dev wedding invitation website is custom designed around your story, theme and cultural details — no generic templates.",
    },
  ],
  Tips: [
    {
      q: "How early should I send my wedding invitations?",
      a: "Send digital invitations 4–6 weeks before the wedding, and printed cards 6–8 weeks ahead so guests can plan travel and accommodation comfortably.",
    },
    {
      q: "What should a great wedding website include?",
      a: "Couple story, event schedule, venue map, RSVP, gallery, accommodation guide and a clear contact section — all on a mobile-first, fast-loading design.",
    },
    {
      q: "How do I get more RSVP responses?",
      a: "Use a WhatsApp-integrated RSVP with a clear deadline. Our clients consistently see 95%+ response rates with this approach.",
    },
  ],
};

// Inject id attributes onto h2 headings so the TOC can link to them
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const enhanceContent = (html: string) => {
  const headings: { id: string; text: string }[] = [];
  const enhanced = html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/g, (_m, attrs = "", inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = slugify(text);
    headings.push({ id, text });
    return `<h2 id="${id}"${attrs ?? ""}>${inner}</h2>`;
  });
  return { html: enhanced, headings };
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  const [activeId, setActiveId] = useState<string>("");

  const { html, headings } = useMemo(
    () => (post ? enhanceContent(post.content) : { html: "", headings: [] }),
    [post],
  );

  // Highlight active TOC item while scrolling
  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings, slug]);

  if (!post) {
    return (
      <main>
        <SEO
          title="Post Not Found | Weddy Dev Blog"
          description="The blog post you are looking for could not be found."
          path={`/blog/${slug ?? ""}`}
          noIndex
        />
        <Navbar />
        <div className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl text-foreground mb-4">Post Not Found</h1>
            <Link to="/blog" className="font-body text-gold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const faqs = FAQS_BY_CATEGORY[post.category] ?? FAQS_BY_CATEGORY.Tips;
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const popularPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);

  const keyTakeaways = headings.slice(0, 5).map((h) => h.text);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url: window.location.href });
      } catch {
        /* user cancelled */
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="overflow-x-clip bg-background">
      <SEO
        title={`${post.title} | Weddy Dev Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        image={`${SITE_URL}${heroFallback}`}
        jsonLd={[
          organizationSchema,
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.category, path: `/blog?category=${encodeURIComponent(post.category)}` },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          faqSchema,
        ]}
      />
      <Navbar />

      <div className="pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-cream/40">
          <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-body text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight size={12} className="opacity-60" />
            <li>
              <Link to="/blog" className="hover:text-gold transition-colors">
                Blog
              </Link>
            </li>
            <ChevronRight size={12} className="opacity-60" />
            <li>
              <Link
                to={`/blog?category=${encodeURIComponent(post.category)}`}
                className="hover:text-gold transition-colors"
              >
                {post.category}
              </Link>
            </li>
            <ChevronRight size={12} className="opacity-60" />
            <li className="text-foreground truncate max-w-[60vw]" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Article header */}
        <article>
          <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-gold transition-colors mb-6"
              >
                <ArrowLeft size={14} /> Back to Blog
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-body uppercase tracking-widest gradient-gold text-primary-foreground mb-5">
                {post.category}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-5">
                {post.title}
              </h1>

              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 max-w-3xl">
                {post.excerpt}
              </p>

              {/* Author + meta strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-display text-base shadow-soft"
                    aria-hidden="true"
                  >
                    {post.author
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="leading-tight">
                    <p className="font-body text-sm text-foreground font-medium">
                      <User size={12} className="inline mr-1 -mt-0.5" />
                      {post.author}
                    </p>
                    <p className="font-body text-xs text-muted-foreground flex items-center gap-3 mt-0.5">
                      <span className="flex items-center gap-1">
                        <CalendarHeart size={11} /> Published {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream border border-border text-xs font-body text-foreground/70">
                    <Sparkles size={12} className="text-gold" /> Expert Verified
                  </span>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream border border-border text-sm font-body text-foreground/80 hover:bg-gold hover:text-primary-foreground hover:border-gold transition-colors"
                    aria-label="Share article"
                  >
                    <Share2 size={14} /> Share
                  </button>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Featured hero image */}
          <motion.figure
            className="max-w-5xl mx-auto px-4 sm:px-6 mt-8"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={heroFallback}
              alt={`${post.title} — Weddy Dev wedding invitation insight`}
              width={1200}
              height={675}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full aspect-[16/9] object-cover rounded-2xl shadow-elevated"
            />
            <figcaption className="text-center font-body text-xs text-muted-foreground mt-3">
              {post.title}
            </figcaption>
          </motion.figure>

          {/* Body: sidebar + content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14">
            {/* MAIN CONTENT */}
            <div className="min-w-0">
              {/* TL;DR */}
              <aside
                aria-label="Key takeaways"
                className="rounded-2xl border border-gold/30 bg-gradient-to-br from-cream to-background p-6 sm:p-7 mb-10 shadow-soft"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={18} className="text-gold" />
                  <h2 className="font-display text-lg text-foreground m-0">Quick Summary — TL;DR</h2>
                </div>
                <p className="font-body text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                {keyTakeaways.length > 0 && (
                  <ul className="space-y-2">
                    {keyTakeaways.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 font-body text-sm text-foreground/80"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-gold mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </aside>

              {/* Mobile TOC */}
              {headings.length > 1 && (
                <details className="lg:hidden mb-8 rounded-xl border border-border bg-cream/50 p-4">
                  <summary className="flex items-center gap-2 cursor-pointer font-display text-base text-foreground">
                    <List size={16} className="text-gold" /> Table of Contents
                  </summary>
                  <ol className="mt-3 space-y-2 list-decimal pl-5">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              {/* Article body */}
              <div
                className="blog-content font-body text-foreground/90 leading-relaxed scroll-mt-28
                  [&_h2]:scroll-mt-28 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4
                  [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
                  [&_p]:mb-5 [&_p]:text-[15px] [&_p]:sm:text-base [&_p]:text-muted-foreground [&_p]:leading-[1.8]
                  [&_ul]:mb-5 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2
                  [&_ol]:mb-5 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2
                  [&_li]:text-[15px] [&_li]:sm:text-base [&_li]:text-muted-foreground
                  [&_strong]:text-foreground [&_em]:text-gold-dark
                  [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-gold-dark
                  [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-foreground/80 [&_blockquote]:my-6"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              {/* Inline expert tip */}
              <aside className="my-10 rounded-2xl border-l-4 border-gold bg-cream/60 p-5 sm:p-6">
                <p className="font-display text-base text-foreground mb-1 flex items-center gap-2">
                  <Sparkles size={16} className="text-gold" /> Expert Tip from Weddy Dev
                </p>
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed m-0">
                  Pair your wedding card design with a full{" "}
                  <Link to="/designs" className="text-gold underline underline-offset-4">
                    wedding invitation website
                  </Link>{" "}
                  so guests get RSVP, venue map and your love story in one elegant link. It dramatically
                  improves response rates and saves printing cost.
                </p>
              </aside>

              {/* Inline CTA */}
              <div className="my-12 p-8 rounded-2xl gradient-navy text-center shadow-elevated">
                <p className="font-script text-2xl text-gold-light mb-1">Ready to get started?</p>
                <h2 className="font-display text-xl sm:text-2xl text-ivory mb-5 m-0">
                  Design Your Dream Wedding Invitation Website
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919160703822?text=Hi%2C%20I%20read%20your%20blog%20and%20I%27m%20interested%20in%20wedding%20card%20design.%20Can%20you%20help%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold hover:scale-105 transition-transform"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+919160703822"
                    className="inline-flex items-center gap-2 px-7 py-3 border border-gold-light text-ivory font-body text-sm tracking-widest uppercase rounded-full hover:bg-ivory/10 transition-colors"
                  >
                    <Phone size={14} /> Call 9160703822
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <section aria-labelledby="faq-heading" className="mt-14">
                <h2
                  id="faq-heading"
                  className="font-display text-2xl sm:text-3xl text-foreground mb-2"
                >
                  Frequently Asked Questions
                </h2>
                <p className="font-body text-sm text-muted-foreground mb-5">
                  Quick answers to the questions couples ask us most about this topic.
                </p>
                <Accordion type="single" collapsible className="rounded-2xl border border-border bg-cream/40 px-5 sm:px-6">
                  {faqs.map((f, i) => (
                    <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
                      <AccordionTrigger className="text-left font-display text-base text-foreground hover:no-underline">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Author bio */}
              <section
                aria-labelledby="author-heading"
                className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft"
              >
                <h2 id="author-heading" className="sr-only">
                  About the author
                </h2>
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-display text-xl shrink-0 shadow-gold">
                    {post.author
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-gold mb-1">
                      Written by
                    </p>
                    <p className="font-display text-xl text-foreground mb-2">{post.author}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                      The Weddy Dev team designs premium wedding invitation websites and digital
                      shaadi cards for couples across Hyderabad and beyond. With hundreds of
                      celebrations delivered, we blend cultural authenticity with modern web craft.
                    </p>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1 font-body text-sm text-gold hover:gap-2 transition-all"
                    >
                      <BookOpen size={14} /> More articles by {post.author}
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                {/* Table of contents */}
                {headings.length > 1 && (
                  <nav
                    aria-label="Table of contents"
                    className="rounded-2xl border border-border bg-cream/40 p-5"
                  >
                    <p className="flex items-center gap-2 font-display text-base text-foreground mb-3">
                      <List size={16} className="text-gold" /> On this page
                    </p>
                    <ol className="space-y-1.5">
                      {headings.map((h, i) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className={`block py-1 pl-3 border-l-2 font-body text-sm transition-colors ${
                              activeId === h.id
                                ? "border-gold text-gold font-medium"
                                : "border-border text-muted-foreground hover:text-gold hover:border-gold/50"
                            }`}
                          >
                            <span className="text-gold/70 mr-1.5">{i + 1}.</span>
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}

                {/* Newsletter */}
                <div className="rounded-2xl gradient-navy p-6 text-ivory">
                  <p className="font-script text-xl text-gold-light mb-1">Stay inspired</p>
                  <p className="font-display text-base mb-3">
                    Wedding design tips, in your inbox.
                  </p>
                  <p className="font-body text-xs text-ivory/70 mb-4">
                    Get our best wedding invitation guides and exclusive offers. No spam, ever.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const email = (
                        e.currentTarget.elements.namedItem("email") as HTMLInputElement
                      )?.value;
                      window.open(
                        `https://wa.me/919160703822?text=${encodeURIComponent(
                          `Hi, please add me to your newsletter: ${email ?? ""}`,
                        )}`,
                        "_blank",
                      );
                    }}
                    className="flex flex-col gap-2"
                  >
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full px-3 py-2 rounded-md bg-ivory/10 border border-ivory/20 placeholder:text-ivory/50 text-ivory text-sm focus:outline-none focus:border-gold-light"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-md gradient-gold text-primary-foreground font-body text-xs tracking-widest uppercase hover:scale-[1.02] transition-transform"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Popular / related */}
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-display text-base text-foreground mb-4">Popular articles</p>
                  <ul className="space-y-4">
                    {popularPosts.map((p) => (
                      <li key={p.slug}>
                        <Link to={`/blog/${p.slug}`} className="group block">
                          <p className="font-body text-xs text-gold uppercase tracking-wider mb-1">
                            {p.category}
                          </p>
                          <p className="font-display text-sm text-foreground group-hover:text-gold transition-colors leading-snug">
                            {p.title}
                          </p>
                          <p className="font-body text-xs text-muted-foreground mt-1 flex items-center gap-2">
                            <Clock size={11} /> {p.readTime}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lead capture */}
                <div className="rounded-2xl border border-gold/30 bg-cream p-5 text-center">
                  <Mail size={20} className="text-gold mx-auto mb-2" />
                  <p className="font-display text-base text-foreground mb-1">
                    Free design consultation
                  </p>
                  <p className="font-body text-xs text-muted-foreground mb-3">
                    Tell us your wedding date and we'll send a personalised invitation idea.
                  </p>
                  <a
                    href="https://wa.me/919160703822?text=Hi%2C%20I%27d%20like%20a%20free%20wedding%20invitation%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full px-4 py-2 rounded-md gradient-gold text-primary-foreground font-body text-xs tracking-widest uppercase hover:scale-[1.02] transition-transform"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <section aria-labelledby="related-heading" className="py-16 sm:py-20 bg-cream mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-10">
                <p className="font-script text-2xl text-gold mb-1">Keep reading</p>
                <h2
                  id="related-heading"
                  className="font-display text-2xl sm:text-3xl text-foreground"
                >
                  Related Articles You'll Love
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((p, i) => (
                  <BlogCard key={p.slug} post={p} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer discovery */}
        <section aria-label="Explore more" className="py-12 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm font-body">
            <div>
              <p className="font-display text-base text-foreground mb-3">Categories</p>
              <ul className="space-y-2 text-muted-foreground">
                {Array.from(new Set(blogPosts.map((p) => p.category))).map((c) => (
                  <li key={c}>
                    <Link
                      to={`/blog?category=${encodeURIComponent(c)}`}
                      className="hover:text-gold transition-colors"
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-base text-foreground mb-3">Recent posts</p>
              <ul className="space-y-2 text-muted-foreground">
                {blogPosts.slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`} className="hover:text-gold transition-colors">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-base text-foreground mb-3">Explore</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/designs" className="hover:text-gold transition-colors">Wedding Card Designs</Link></li>
                <li><Link to="/about" className="hover:text-gold transition-colors">About Weddy Dev</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-gold transition-colors">All Articles</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-base text-foreground mb-3">Get in touch</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="tel:+919160703822" className="hover:text-gold transition-colors">+91 9160 703 822</a></li>
                <li><a href="mailto:weddydevv@gmail.com" className="hover:text-gold transition-colors">weddydevv@gmail.com</a></li>
                <li><a href="https://wa.me/919160703822" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp us</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default BlogPostPage;
