import projectHinduRoyal from "@/assets/project-hindu-royal.webp";
import projectHinduTemple2 from "@/assets/arjun&priyanka.webp";
import projectHinduTemple from "@/assets/project-hindu-temple.webp";
import projectHinduFloral from "@/assets/project-hindu-floral.webp";
import projectHinduPeacock from "@/assets/project-hindu-peacock.webp";
import projectMuslimNikah from "@/assets/project-muslim-nikah.webp";
import projectMuslimMughal from "@/assets/project-muslim-mughal.webp";
import projectMuslimMinimal from "@/assets/project-muslim-minimal.webp";
import projectMuslimMinimal1 from "@/assets/project-muslim-minimal1.webp";
import projectChristianGarden from "@/assets/christan.webp";
import projectChristianChurch from "@/assets/project-christian-church.webp";
import projectChristianRustic from "@/assets/project-christian-rustic.webp";
import projectGeneralModern from "@/assets/project-general-modern.webp";
import projectGeneralOcean from "@/assets/project-general-ocean.webp";
import projectGeneralArtdeco from "@/assets/project-general-artdeco.webp";
import fatima from "@/assets/fatima.png";
import preethi from "@/assets/preethi.png";
import abhishek from "@/assets/abhishek.png";
export interface DesignSection {
  title: string;
  description: string;
}

export interface Design {
  code: string; // WD-01 etc
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  gallery?: string[];
  demoLink: string;
  features: string[];
  sections: DesignSection[];
  rating: number;
  reviews: number;
  badge?: string;
  category: "Hindu" | "Muslim" | "Christian" | "General";
  categoryEmoji: string;
}

const standardSections: DesignSection[] = [
  { title: "Hero Cover", description: "Cinematic landing with couple names, date and a regal opening animation." },
  { title: "Our Story", description: "A romantic timeline of how the couple met, dated and chose forever." },
  { title: "Event Schedule", description: "Mehendi, Sangeet, Haldi, Wedding & Reception with timings and venues." },
  { title: "Venue Map", description: "Interactive Google Map with one-tap directions for guests." },
  { title: "RSVP System", description: "WhatsApp + form-based RSVP with guest count and meal preferences." },
  { title: "Photo Gallery", description: "Pre-wedding photoshoot displayed in an elegant masonry layout." },
  { title: "Countdown Timer", description: "Live countdown to the wedding day building anticipation." },
  { title: "Guest Wishes", description: "A wall where loved ones drop blessings and messages." },
];

export const designs: Design[] = [
  // Hindu
  {
    code: "WD-01",
    title: "Rajputana Royale",
    subtitle: "Regal palace vibes with rich gold accents",
    description: "A cinematic wedding invitation website inspired by Rajput palaces — deep maroons, intricate gold motifs and royal typography. Perfect for grand traditional Hindu weddings that demand opulence.",
    price: "₹4,999",
    originalPrice: "₹7,999",
    image: projectHinduRoyal,
    demoLink: "https://weddydev4.netlify.app/",
    features: ["WhatsApp RSVP", "Countdown Timer", "Venue Map", "Photo Gallery", "Live Stream Link"],
    sections: standardSections,
    rating: 4.9,
    reviews: 128,
    badge: "Popular",
    category: "Hindu",
    categoryEmoji: "🪷",
  },
  {
    code: "WD-02",
    title: "Arjun & Priyanka Saga",
    subtitle: "Timeless elegance with temple motifs",
    description: "A soft, story-driven wedding website inspired by South Indian temple art. Hand-illustrated motifs, gentle florals and a heartfelt narrative tone.",
    price: "₹1,999",
    originalPrice: "₹5,499",
    image: projectHinduTemple2,
    demoLink: "https://weddydev11.netlify.app/",
    features: ["Video Invite", "RSVP Tracking", "Guest Dashboard", "Story Timeline"],
    sections: standardSections,
    rating: 4.8,
    reviews: 92,
    category: "Hindu",
    categoryEmoji: "🪷",
  },
  {
    code: "WD-03",
    title: "  Bloom Mehendi",
    subtitle: "Lush florals & vibrant mehendi colors",
    description: "Bursting with marigold, henna green and bougainvillea pinks — a cheerful, celebratory wedding website built for vibrant Mehendi & Haldi forward weddings.",
    price: "₹3,999",
    originalPrice: "₹5,999",
    image: preethi,
    demoLink: "https://weddydev16.netlify.app/",
    features: ["Photo Gallery", "Countdown", "WhatsApp RSVP", "Music Player"],
    sections: standardSections,
    rating: 4.9,
    reviews: 76,
    category: "Hindu",
    categoryEmoji: "🪷",
  },
  
  {
    code: "WD-03",
    title: "Mehendi Bloom",
    subtitle: "Lush florals & vibrant mehendi colors",
    description: "Bursting with marigold, henna green and bougainvillea pinks — a cheerful, celebratory wedding website built for vibrant Mehendi & Haldi forward weddings.",
    price: "₹2,999",
    originalPrice: "₹4,999",
    image: projectHinduFloral,
    demoLink: "https://weddy9.netlify.app/",
    features: ["Photo Gallery", "Countdown", "WhatsApp RSVP", "Music Player"],
    sections: standardSections,
    rating: 4.9,
    reviews: 76,
    category: "Hindu",
    categoryEmoji: "🪷",
  },
  {
    code: "WD-04",
    title: "Sacred Temple Vows",
    subtitle: "Hand-crafted temple motifs in ivory & gold",
    description: "An elegant, ceremonial wedding website with temple-arch frames, Sanskrit accents and refined ivory + gold palette.",
    price: "₹4,999",
    originalPrice: "₹7,499",
    image: projectHinduTemple,
    demoLink: "https://weddydev9.netlify.app/",
    features: ["Video Invite", "RSVP Tracking", "Guest Dashboard", "Sanskrit Shlokas"],
    sections: standardSections,
    rating: 4.9,
    reviews: 64,
    category: "Hindu",
    categoryEmoji: "🪷",
  },
  {
    code: "WD-05",
    title: "Peacock Pavilion",
    subtitle: "Peacock-inspired teal & emerald grandeur",
    description: "A bold, peacock-themed wedding website with shimmering teal, emerald and gold accents — for couples who want to make a statement.",
    price: "₹3,499",
    originalPrice: "₹5,999",
    image: abhishek,
    demoLink: "https://weddydevv15.netlify.app/",
    features: ["Photo Gallery", "Music Player", "WhatsApp RSVP", "Live Stream"],
    sections: standardSections,
    rating: 4.8,
    reviews: 41,
    badge: "New",
    category: "Hindu",
    categoryEmoji: "🪷",
  },

  // Muslim
  {
    code: "WD-06",
    title: "Nikah Calligraphy",
    subtitle: "Refined Arabic calligraphy with bilingual content",
    description: "A bilingual nikah invitation website with breathtaking Arabic calligraphy, soft ivory backgrounds and gentle gold filigree borders.",
    price: "₹3,499",
    originalPrice: "₹5,499",
    image: projectMuslimNikah,
    demoLink: "https://weddydev6.netlify.app/",
    features: ["Bilingual Content", "RSVP System", "Venue Info", "Walima Schedule"],
    sections: standardSections,
    rating: 4.9,
    reviews: 88,
    badge: "Popular",
    category: "Muslim",
    categoryEmoji: "🌙",
  },
  {
    code: "WD-07",
    title: "Mughal Garden",
    subtitle: "Minimal Mughal-inspired arches & motifs",
    description: "Inspired by Mughal courtyards — pointed arches, jali patterns and a calming green & gold palette for a refined nikah experience.",
    price: "₹1,599",
    originalPrice: "₹2,999",
    image: projectMuslimMughal,
    demoLink: "https://weddydev1.netlify.app/",
    features: ["Full Website", "Guest Management", "Travel Guide"],
    sections: standardSections,
    rating: 4.8,
    reviews: 53,
    category: "Muslim",
    categoryEmoji: "🌙",
  },
  {
    code: "WD-08",
    title: "Crescent Minimalist",
    subtitle: "Sophisticated minimal layout for nikah",
    description: "A clean, minimalist nikah website with crescent ornaments, soft typography and lots of whitespace — modern Islamic elegance.",
    price: "₹2,499",
    originalPrice: "₹3,999",
    image: projectMuslimMinimal1,
    demoLink: "https://weddydev3.netlify.app/",
    features: ["Minimal Design", "RSVP", "Photo Gallery"],
    sections: standardSections,
    rating: 4.9,
    reviews: 47,
    badge: "New",
    category: "Muslim",
    categoryEmoji: "🌙",
  },
  {
    code: "WD-09",
    title: "Pearl & Gold Premium",
    subtitle: "Crisp, modern wedding cards design",
    description: "A premium pearl & gold themed nikah website — luxurious yet minimal, with hand-finished motifs and a guest dashboard.",
    price: "₹1,999",
    originalPrice: "₹3,499",
    image: projectMuslimMinimal,
    demoLink: "https://weddydev7.netlify.app/",
    features: ["Minimal Design", "RSVP", "Photo Gallery", "Guest Dashboard"],
    sections: standardSections,
    rating: 4.8,
    reviews: 39,
    badge: "New",
    category: "Muslim",
    categoryEmoji: "🌙",
  },
  {
    code: "WD-09",
    title: "Pink Premium",
    subtitle: "Crisp, modern wedding cards design",
    description: "A premium pearl & gold themed nikah website — luxurious yet minimal, with hand-finished motifs and a guest dashboard.",
    price: "₹1,999",
    originalPrice: "₹3,499",
    image: fatima,
    demoLink: "https://weddydev14.netlify.app/",
    features: ["Minimal Design", "RSVP", "Photo Gallery", "Guest Dashboard"],
    sections: standardSections,
    rating: 4.8,
    reviews: 39,
    badge: "New",
    category: "Muslim",
    categoryEmoji: "🌙",
  },

  // Christian
  {
    code: "WD-10",
    title: "Garden Romance Chapel",
    subtitle: "Soft botanicals & dreamy garden florals",
    description: "Soft watercolor botanicals, blush florals and an airy chapel feel — perfect for a romantic Christian garden wedding.",
    price: "₹3,499",
    originalPrice: "₹5,499",
    image: projectChristianGarden,
    demoLink: "https://daniemarie.netlify.app/",
    features: ["Photo Gallery", "Venue Map", "Timeline", "Registry"],
    sections: standardSections,
    rating: 4.9,
    reviews: 71,
    category: "Christian",
    categoryEmoji: "⛪",
  },
  {
    code: "WD-11",
    title: "Sacred Chapel Elegance",
    subtitle: "Pure white luxury for the holy union",
    description: "An all-white luxurious chapel website with cathedral arches, ivory florals and gentle gold script accents.",
    price: "₹4,499",
    originalPrice: "₹6,499",
    image: projectChristianChurch,
    demoLink: "https://weddydev.com/demo/christian-chapel",
    features: ["Video Invite", "RSVP", "Registry", "Live Stream"],
    sections: standardSections,
    rating: 4.9,
    reviews: 58,
    badge: "Popular",
    category: "Christian",
    categoryEmoji: "⛪",
  },
  {
    code: "WD-12",
    title: "Rustic Vineyard Charm",
    subtitle: "Earthy botanicals & rustic warmth",
    description: "Wood textures, eucalyptus greens and warm cream tones — a rustic vineyard feel for outdoor Christian weddings.",
    price: "₹2,999",
    originalPrice: "₹4,499",
    image: projectChristianRustic,
    demoLink: "https://weddydev.com/demo/christian-rustic",
    features: ["Botanical Theme", "Guest Book", "Countdown"],
    sections: standardSections,
    rating: 4.8,
    reviews: 44,
    category: "Christian",
    categoryEmoji: "⛪",
  },

  // General / Modern
  {
    code: "WD-13",
    title: "Modern Luxe Signature",
    subtitle: "Premium minimal design with full features",
    description: "A premium signature design with the full feature set — for couples who want a perfectly minimal, future-proof wedding website.",
    price: "₹6,999",
    originalPrice: "₹9,999",
    image: projectGeneralModern,
    demoLink: "https://weddydev.com/demo/modern-luxe",
    features: ["Premium Design", "All Features", "Priority Support"],
    sections: standardSections,
    rating: 5.0,
    reviews: 32,
    badge: "Premium",
    category: "General",
    categoryEmoji: "✨",
  },
  {
    code: "WD-14",
    title: "Ocean Breeze Destination",
    subtitle: "Beach destination wedding vibes",
    description: "Soft sand, ocean blues and palm fronds — a destination wedding website for couples saying I do by the sea.",
    price: "₹3,499",
    originalPrice: "₹5,499",
    image: projectGeneralOcean,
    demoLink: "https://weddydev.com/demo/ocean-breeze",
    features: ["Destination Wedding", "Travel Info", "RSVP", "Hotel Booking"],
    sections: standardSections,
    rating: 4.9,
    reviews: 28,
    category: "General",
    categoryEmoji: "✨",
  },
  {
    code: "WD-15",
    title: "Art Deco Glam",
    subtitle: "Bold gold & geometric Gatsby glamour",
    description: "Gatsby-era glamour with bold geometric gold patterns, deep emerald accents and dramatic typography.",
    price: "₹5,499",
    originalPrice: "₹7,999",
    image: projectGeneralArtdeco,
    demoLink: "https://weddydev.com/demo/art-deco",
    features: ["Gatsby Theme", "Music", "Photo Gallery"],
    sections: standardSections,
    rating: 4.8,
    reviews: 24,
    badge: "New",
    category: "General",
    categoryEmoji: "✨",
  },
];

export const getDesignByCode = (code: string) =>
  designs.find((d) => d.code.toLowerCase() === code.toLowerCase());

export const designsByCategory = () => {
  const groups: Record<string, { category: string; emoji: string; designs: Design[] }> = {};
  designs.forEach((d) => {
    if (!groups[d.category]) {
      groups[d.category] = { category: d.category, emoji: d.categoryEmoji, designs: [] };
    }
    groups[d.category].designs.push(d);
  });
  return Object.values(groups);
};
