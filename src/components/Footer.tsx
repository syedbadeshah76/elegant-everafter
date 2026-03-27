import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="font-script text-3xl text-gold mb-3">Weddy Dev</p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            We craft digital love stories that your guests will remember forever. Premium wedding invitations & websites.
          </p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-foreground mb-4">Quick Links</p>
          <div className="space-y-2">
            {[
              { label: "Our Designs", href: "/designs" },
              { label: "About Us", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
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
            {["Wedding Websites", "Digital Invitations", "RSVP Systems", "Video Invitations"].map((s) => (
              <p key={s} className="font-body text-sm text-muted-foreground">{s}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
          © 2026 Weddy Dev. Made with <Heart size={12} className="text-gold" /> for love stories everywhere.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Wedding Invitations • Wedding Websites • Marriage Invitation Design
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
