import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BlogCard from "@/components/BlogCard";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogData";
import {
  blogListingSchema,
  breadcrumbSchema,
  organizationSchema,
} from "@/lib/seo-schemas";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
const PAGE_SIZE = 6;

const BlogPage = () => {
  const [active, setActive] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Math.max(1, parseInt(searchParams.get("page") || "1", 10));

  const filtered = useMemo(
    () => (active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active)),
    [active]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(currentPage, totalPages);
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const goToPage = (p: number) => {
    const params = new URLSearchParams(searchParams);
    if (p === 1) params.delete("page");
    else params.set("page", String(p));
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategory = (cat: string) => {
    setActive(cat);
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    setSearchParams(params);
  };

  const seoTitle =
    page > 1
      ? `Wedding Blog — Page ${page} | Weddy Dev`
      : "Wedding Blog — Invitation Tips, Shaadi Card Ideas & Trends | Weddy Dev";
  const seoDescription =
    "Read expert tips on wedding invitation websites, shaadi cards, digital invitations, and wedding planning ideas for Hindu, Muslim & Christian couples.";
  const canonicalPath = page > 1 ? `/blog?page=${page}` : "/blog";

  return (
    <main className="overflow-x-clip">
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={canonicalPath}
        jsonLd={[
          organizationSchema,
          blogListingSchema(blogPosts),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <Navbar />
      <div className="pt-24">
        <section className="py-16 md:py-24 bg-background min-h-screen">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.header
              className="text-center mb-12"
              initial={{ opacity: 0.01, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-script text-gold text-xl sm:text-2xl mb-2">Our Blog</p>
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mb-3">
                Wedding Invitation Blog &amp; <span className="text-gradient-gold italic">Shaadi Inspiration</span>
              </h1>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Expert advice on wedding cards, shaadi invitations, and planning your perfect digital wedding experience.
              </p>
            </motion.header>

            {/* Category filters */}
            <motion.nav
              aria-label="Blog categories"
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
              initial={{ opacity: 0.01, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  aria-pressed={active === cat}
                  className={`px-4 sm:px-5 py-2 rounded-full font-body text-xs sm:text-sm transition-all duration-300 ${
                    active === cat
                      ? "gradient-gold text-primary-foreground shadow-gold"
                      : "bg-card text-muted-foreground hover:text-gold border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.nav>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {visible.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center font-body text-muted-foreground mt-12">
                No blog posts found in this category.
              </p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                aria-label="Blog pagination"
                className="flex items-center justify-center gap-2 mt-12"
              >
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="p-2 rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }).map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => goToPage(p)}
                      aria-current={p === page ? "page" : undefined}
                      className={`w-9 h-9 rounded-full font-body text-sm transition-all ${
                        p === page
                          ? "gradient-gold text-primary-foreground shadow-gold"
                          : "border border-border text-muted-foreground hover:text-gold hover:border-gold"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className="p-2 rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </nav>
            )}

            {/* Crawlable index of every post for SEO discovery */}
            <section aria-label="All blog posts" className="mt-16 pt-10 border-t border-border">
              <h2 className="font-display text-lg text-foreground mb-4 text-center">
                All Articles
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl mx-auto">
                {blogPosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      › {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default BlogPage;
