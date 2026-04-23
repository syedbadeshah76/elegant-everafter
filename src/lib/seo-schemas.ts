import type { BlogPost } from "@/data/blogData";

const SITE_URL = "https://weddydev.com";
const LOGO_URL = `${SITE_URL}/favicon.ico`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Weddy Dev",
  url: SITE_URL,
  logo: LOGO_URL,
  email: "weddydevv@gmail.com",
  telephone: "+919160703822",
  sameAs: [],
  description:
    "Weddy Dev creates premium wedding invitation websites, shaadi cards, and digital wedding invitations for Hindu, Muslim, and Christian celebrations.",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Weddy Dev",
  image: LOGO_URL,
  url: SITE_URL,
  telephone: "+919160703822",
  email: "weddydevv@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  serviceType: [
    "Wedding Invitation Design",
    "Wedding Website Design",
    "Digital Wedding Cards",
    "Shaadi Invitations",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Weddy Dev",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const blogListingSchema = (posts: BlogPost[]) => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Weddy Dev Blog — Wedding Invitation & Shaadi Inspiration",
  url: `${SITE_URL}/blog`,
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.date,
    author: { "@type": "Person", name: p.author },
  })),
});

export const articleSchema = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  url: `${SITE_URL}/blog/${post.slug}`,
  datePublished: post.date,
  dateModified: post.date,
  author: { "@type": "Person", name: post.author },
  publisher: {
    "@type": "Organization",
    name: "Weddy Dev",
    logo: { "@type": "ImageObject", url: LOGO_URL },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/${post.slug}`,
  },
  articleSection: post.category,
});

export const breadcrumbSchema = (
  items: { name: string; path: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
  })),
});
