import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <p className="font-script text-3xl text-gold mb-3">Weddy Dev</p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Premium wedding invitation cards, shaadi websites & digital invitations crafted in Hyderabad for couples worldwide.
          </p>
          <div className="space-y-2">
            <a href="tel:+919160703822" className="flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              <Phone size={12} /> +91 91607 03822
            </a>
            <a href="mailto:weddydevv@gmail.com" className="flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              <Mail size={12} /> weddydevv@gmail.com
            </a>
            <p className="flex items-center gap-2 font-body text-xs text-muted-foreground">
              <MapPin size={12} /> Hyderabad
            </p>
          </div>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-foreground mb-4">Quick Links</p>
          <div className="space-y-2">
            {[
              { label: "Our Designs", href: "/designs" },
              { label: "About Us", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
              { label: "Terms & Conditions", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block font-body text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-foreground mb-4">Services</p>
          <div className="space-y-2">
            {["Wedding Websites", "Digital Wedding Cards", "Shaadi Invitations", "RSVP Systems", "Video Invitations"].map((s) => (
              <p key={s} className="font-body text-sm text-muted-foreground">{s}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-foreground mb-4">We Serve</p>
          <div className="space-y-2">
            {["Hindu Wedding Cards", "Muslim Nikah Invitations", "Christian Wedding Websites", "Multi-Cultural Celebrations", "Destination Weddings"].map((s) => (
              <p key={s} className="font-body text-sm text-muted-foreground">{s}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
          © 2026 Weddy Dev. Made with <Heart size={12} className="text-gold" /> in Hyderabad for love stories everywhere.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Wedding Cards • Wedding Cards Design • Marriage Website • Hyderabad
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
