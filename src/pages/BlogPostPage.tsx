import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BlogCard from "@/components/BlogCard";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogData";
import { articleSchema, breadcrumbSchema, organizationSchema } from "@/lib/seo-schemas";
import { ArrowLeft, CalendarHeart, Clock, User, Share2 } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

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

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <main className="overflow-x-clip">
      <SEO
        title={`${post.title} | Weddy Dev Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={[
          organizationSchema,
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <Navbar />
      <div className="pt-24">
        <article className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-gold transition-colors mb-8"
              >
                <ArrowLeft size={14} /> Back to Blog
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-body gradient-gold text-primary-foreground">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                  <CalendarHeart size={12} /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
                <span className="flex items-center gap-1.5 text-sm font-body text-muted-foreground">
                  <User size={14} /> {post.author}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-gold transition-colors"
                >
                  <Share2 size={14} /> Share
                </button>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              <div
                className="blog-content font-body text-foreground/90 leading-relaxed
                  [&>h2]:font-display [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4
                  [&>p]:mb-4 [&>p]:text-sm [&>p]:sm:text-base [&>p]:text-muted-foreground [&>p]:leading-relaxed
                  [&>ul]:mb-4 [&>ul]:pl-6 [&>ul]:list-disc
                  [&>ul>li]:mb-2 [&>ul>li]:text-sm [&>ul>li]:sm:text-base [&>ul>li]:text-muted-foreground
                  [&_strong]:text-foreground [&_em]:text-gold"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-12 p-8 rounded-2xl gradient-navy text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-script text-2xl text-gold-light mb-2">Ready to get started?</p>
              <h3 className="font-display text-xl sm:text-2xl text-ivory mb-4">
                Create Your Dream Wedding Invitation Today
              </h3>
              <a
                href="https://wa.me/919160703822?text=Hi%2C%20I%20read%20your%20blog%20and%20I%27m%20interested%20in%20wedding%20card%20design.%20Can%20you%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-full shadow-gold hover:scale-105 transition-transform"
              >
                Get Free Consultation
              </a>
            </motion.div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-cream">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <h2 className="font-display text-2xl text-foreground mb-8 text-center">
                More Articles You'll Love
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((p, i) => (
                  <BlogCard key={p.slug} post={p} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default BlogPostPage;
