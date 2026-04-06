import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarHeart, ArrowRight, Clock, User } from "lucide-react";
import type { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => (
  <motion.article
    className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-gold cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    whileHover={{ y: -4 }}
  >
    <Link to={`/blog/${post.slug}`} className="block">
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="px-3 py-1 rounded-full text-xs font-body gradient-gold text-primary-foreground">
          {post.category}
        </span>
        <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
          <CalendarHeart size={12} />
          {post.date}
        </span>
        <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
          <Clock size={12} />
          {post.readTime}
        </span>
      </div>
      <h2 className="font-display text-lg sm:text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
        {post.title}
      </h2>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
          <User size={12} />
          {post.author}
        </span>
        <span className="flex items-center gap-1 font-body text-sm text-gold group-hover:gap-2 transition-all">
          Read More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  </motion.article>
);

export default BlogCard;
