import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { CallEnquiry } from "@/components/CallEnquiry";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Cheran & Co. Building Materials Supplier" },
      { name: "description", content: "Contact Cheran & Co. Call +91 98654 67787 or visit our facility in Mettupalayam. Serving Mettupalayam, Ooty, Coimbatore & Annur. Open 24/7." },
      { name: "keywords", content: "contact Cheran Co, building materials Mettupalayam, cement supplier contact" },
      { property: "og:title", content: "Contact — Cheran & Co. Mettupalayam" },
      { property: "og:description", content: "Call, WhatsApp or visit us in Mettupalayam. Serving Mettupalayam, Ooty, Coimbatore & Annur. Open 24/7." },
      { property: "og:url", content: "https://cheranandco.in/contact" },
    ],
    links: [{ rel: "canonical", href: "https://cheranandco.in/contact" }],
  }),
  component: ContactPage,
});

const items = [
  { i: Phone, t: "Call Us", d: "+91 98654 67787", href: "tel:+919865467787" },
  { i: MessageCircle, t: "WhatsApp", d: "Chat anytime, 24/7", href: "https://wa.me/919865467787" },
  { i: Mail, t: "Email", d: "cheran.co.build@gmail.com", href: "mailto:cheran.co.build@gmail.com" },
  { i: Clock, t: "Hours", d: "Open 24 hours, 7 days a week" },
];

function ContactPage() {
  return (
    <>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="text-xs uppercase tracking-widest text-accent">Get in Touch</div>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Let's Build Something Together</h1>
          <p className="mt-5 text-white/80">Whatever your project size, we're here to help — round the clock.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-navy">Reach Us</h2>
            <p className="mt-2 text-muted-foreground">Pick the channel that suits you best. We respond fast.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((c) => {
                const inner = (
                  <div className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-accent"><c.i className="h-5 w-5" /></div>
                    <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="mt-1 font-semibold text-navy">{c.d}</div>
                  </div>
                );
                return c.href ? <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : <div key={c.t}>{inner}</div>;
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-semibold text-navy">Visit Our Yard</div>
                  <p className="mt-1 text-sm text-muted-foreground">Rk Complex, GD Hospital, Mettur, Podanur, Coimbatore, Tamil Nadu 641023</p>
                  <a href="https://maps.app.goo.gl/aWmAhacPNxwa3JdP8" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">Open in Google Maps →</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elegant)] md:p-8">
            <h2 className="font-serif text-2xl font-bold text-navy">Talk to Us Directly</h2>
            <p className="mt-1 text-sm text-muted-foreground">Call or WhatsApp us with your requirement — we'll share a price within minutes.</p>
            <div className="mt-5"><CallEnquiry /></div>
            <div className="mt-6 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-navy">What to share when you call:</p>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Product you need (cement, steel, blocks, sand, etc.)</li>
                <li>• Approximate quantity</li>
                <li>• Delivery location & date</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <iframe
              title="Cheran & Co. location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.095625933885!2d76.9874047!3d10.956148899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b19e5375c31%3A0xcdafae97a652c8f9!2sCheran%26Co%20-%20Building%20Materials!5e0!3m2!1sen!2sin!4v1780650408830!5m2!1sen!2sin"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}