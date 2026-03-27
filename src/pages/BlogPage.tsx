import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { CalendarHeart, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "10 Wedding Website Trends for 2026",
    excerpt: "From interactive RSVP systems to cinematic video backgrounds — discover the top digital wedding trends that will make your celebration unforgettable.",
    date: "March 15, 2026",
    category: "Trends",
  },
  {
    title: "Hindu vs Muslim vs Christian Wedding Invitations: A Complete Guide",
    excerpt: "Understanding the cultural nuances and design elements that make each wedding tradition unique. Learn how to choose the perfect style for your celebration.",
    date: "March 10, 2026",
    category: "Guide",
  },
  {
    title: "Why Every Modern Couple Needs a Wedding Website",
    excerpt: "Gone are the days of paper-only invitations. Here's why a beautifully designed wedding website is essential for managing your guest experience.",
    date: "March 5, 2026",
    category: "Tips",
  },
  {
    title: "How to Write the Perfect RSVP Message for WhatsApp",
    excerpt: "Craft the ideal RSVP message that gets responses. Our templates and tips ensure your guests reply promptly and with all the information you need.",
    date: "February 28, 2026",
    category: "Tips",
  },
];

const BlogPage = () => (
  <main>
    <Navbar />
    <div className="pt-24">
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-script text-gold text-2xl mb-3">Our Blog</p>
            <h1 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              Wedding Inspiration & <span className="text-gradient-gold italic">Tips</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Expert advice, design inspiration, and practical tips for planning your perfect digital wedding experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-body gradient-gold text-primary-foreground">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                    <CalendarHeart size={12} />
                    {post.date}
                  </span>
                </div>
                <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="flex items-center gap-1 font-body text-sm text-gold group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    <FloatingButtons />
  </main>
);

export default BlogPage;
