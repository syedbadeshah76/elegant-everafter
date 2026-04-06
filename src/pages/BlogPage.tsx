import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogData";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const BlogPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <main className="overflow-x-clip">
      <Navbar />
      <div className="pt-24">
        <section className="py-16 md:py-24 bg-background min-h-screen">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="font-script text-gold text-xl sm:text-2xl mb-2">Our Blog</p>
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mb-3">
                Wedding Inspiration & <span className="text-gradient-gold italic">Tips</span>
              </h1>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Expert advice on wedding cards, shaadi invitations, and planning your perfect digital wedding experience.
              </p>
            </motion.div>

            {/* Category filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full font-body text-xs sm:text-sm transition-all duration-300 ${
                    active === cat
                      ? "gradient-gold text-primary-foreground shadow-gold"
                      : "bg-card text-muted-foreground hover:text-gold border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center font-body text-muted-foreground mt-12">
                No blog posts found in this category.
              </p>
            )}
          </div>
        </section>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default BlogPage;
