import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By purchasing or using any service from Weddy Dev (\"we\", \"us\", or \"our\"), including wedding invitation websites, digital wedding cards, or related design services, you (\"client\", \"you\") agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Service Validity (3 Months)",
    body: "Every wedding invitation website or digital invite delivered by Weddy Dev is hosted and accessible for a period of three (3) months from the date of delivery. After this period, the website may be taken offline. Extensions are available on request and are billed separately. We strongly recommend downloading any content you wish to keep before the validity ends.",
  },
  {
    title: "3. Payments & Refunds",
    body: "All payments made to Weddy Dev are final. Once a project is purchased and work has commenced, no refunds will be issued under any circumstances — including, but not limited to, change of plans, postponement, or cancellation of the wedding. Reasonable design revisions are included as outlined in your selected package.",
  },
  {
    title: "4. Use of Personal Data",
    body: "Any personal data (names, photos, event details, contact information, guest lists) provided by you is collected solely with your consent for the purpose of designing and operating your wedding invitation. We do not sell, rent, share, or send your data to any third party. Your information is used only to fulfil the service you have purchased.",
  },
  {
    title: "5. Content Ownership & Rights",
    body: "You retain ownership of all content you provide (photos, names, story details). By submitting content, you grant Weddy Dev a limited license to use it for the purpose of building, hosting and supporting your wedding invitation. We retain ownership of design templates, code, and reusable assets.",
  },
  {
    title: "6. Showcase Rights",
    body: "Unless you opt out in writing before delivery, Weddy Dev may display a non-personal preview of your design (without sensitive details such as full guest lists or contact numbers) in our portfolio, social media, and marketing material.",
  },
  {
    title: "7. Project Timeline & Delivery",
    body: "Standard delivery is between 48 hours and 7 days based on the package selected and the speed at which content/feedback is shared by you. Delays caused by late content submission or revision approvals are not the responsibility of Weddy Dev.",
  },
  {
    title: "8. Revisions",
    body: "Each package includes a defined number of revisions. Additional revisions beyond the included scope, or major changes after final approval, may incur extra charges communicated in advance.",
  },
  {
    title: "9. Third-Party Services",
    body: "Our invitations may integrate with third-party services such as WhatsApp, Google Maps, or hosting providers. Weddy Dev is not responsible for outages, downtime, or policy changes of these third-party platforms.",
  },
  {
    title: "10. Limitation of Liability",
    body: "Weddy Dev's total liability for any claim related to a project is strictly limited to the amount paid by you for that specific service. We are not liable for any indirect, incidental, or consequential losses, including missed RSVPs, missed events, or guest miscommunication.",
  },
  {
    title: "11. Acceptable Use",
    body: "You agree not to use our services to publish unlawful, offensive, defamatory, or infringing content. We reserve the right to refuse or take down any content that violates this clause without refund.",
  },
  {
    title: "12. Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time. The latest version will always be available on this page. Continued use of our services after updates constitutes acceptance of the revised terms.",
  },
  {
    title: "13. Governing Law",
    body: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.",
  },
  {
    title: "14. Contact",
    body: "For any questions about these terms, please reach us at weddydevv@gmail.com or +91 9160703822 (Hyderabad).",
  },
];

const TermsPage = () => {
  return (
    <main className="overflow-x-clip">
      <SEO
        title="Terms & Conditions | Weddy Dev — Wedding Invitation Website"
        description="Read the Terms & Conditions for using Weddy Dev wedding invitation websites and digital wedding cards — service validity, payments, refunds, and data usage."
        path="/terms"
      />
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-script text-gold-light text-2xl mb-2">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-4">Terms & Conditions</h1>
          <p className="font-body text-ivory/70 max-w-2xl mx-auto">
            Please read these terms carefully before purchasing a wedding invitation website or any service from Weddy Dev.
          </p>
          <p className="font-body text-xs text-ivory/50 mt-4">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="border-l-2 border-gold/40 pl-5">
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-2">{s.title}</h2>
              <p className="font-body text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="mt-10 p-6 rounded-2xl bg-cream border border-gold/30 text-center">
            <p className="font-display text-lg text-foreground mb-2">Questions?</p>
            <p className="font-body text-sm text-muted-foreground mb-4">
              We're happy to walk you through any clause before you purchase.
            </p>
            <a
              href="https://wa.me/919160703822"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-block px-6 py-3 gradient-gold text-primary-foreground rounded-full text-xs tracking-widest uppercase shadow-gold"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default TermsPage;
