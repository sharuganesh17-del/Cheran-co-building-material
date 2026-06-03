import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, Clock, Star, Phone, MapPin } from "lucide-react";
import hero from "@/assets/hero-construction.jpg";
import aboutYard from "@/assets/about-yard.jpg";
import aboutYard2 from "@/assets/about-yard2.jpg";
import ctaBg from "@/assets/gallery-delivery.jpg";
import { CallEnquiry } from "@/components/CallEnquiry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheran & Co. — Building Materials Supplier in Mettupalayam, Coimbatore, Ooty & Annur" },
      { name: "description", content: "Quality building materials supplier since 2016. Cement, steel, blocks, sand & aggregates in Mettupalayam, Ooty, Coimbatore & Annur. 24/7 service with home delivery." },
      { name: "keywords", content: "building materials Mettupalayam, cement supplier Mettupalayam, steel bars, sand, aggregates, Ooty, Coimbatore, Annur" },
      { property: "og:title", content: "Cheran & Co. — Building Materials Supplier" },
      { property: "og:description", content: "Quality building materials since 2016. Serving Mettupalayam, Ooty, Coimbatore & Annur. Open 24/7." },
      { property: "og:url", content: "https://cheranandco.in" },
    ],
    links: [{ rel: "canonical", href: "https://cheranandco.in/" }],
  }),
  component: HomePage,
});

const products = [
  { name: "Cement", desc: "Ramco, UltraTech, Dalmia & more — all leading brands." },
  { name: "Steel & TMT Bars", desc: "Premium-grade TMT bars in all required sizes." },
  { name: "AAC & Hollow Blocks", desc: "Lightweight AAC blocks and hollow blocks for efficient construction." },
  { name: "M-Sand & River Sand", desc: "Washed, graded sand for plastering & concreting." },
  { name: "Aggregates / Jelly", desc: "20mm, 12mm & 40mm jelly for all RCC works." },
  { name: "Bricks", desc: "Red bricks, fly-ash bricks & AAC blocks." },
  { name: "JCB / Backhoe Rental", desc: "Hourly & daily rental for excavation & loading." },
  { name: "Dump Truck Rental", desc: "Heavy-duty tipper trucks for site transport." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Cheran & Co. building materials yard" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.15 0.05 264 / 0.92) 0%, oklch(0.22 0.06 264 / 0.78) 50%, oklch(0.22 0.06 264 / 0.5) 100%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-6 md:py-28 lg:py-36">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-accent backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Open 24/7 in Mettupalayam
            </div>
            <h1 className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              One Stop for All Your <span className="text-accent">Building Needs</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm text-white/80 sm:text-base md:text-lg">
              From cement and steel to blocks, sand and aggregates — plus JCB & dump truck rental. Cheran & Co. delivers premium building materials and equipment to your site, on time, every time.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="tel:+919865467787" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105">
                <Phone className="h-4 w-4" /> Call Now — +91 98654 67787
              </a>
              <a href="https://wa.me/919865467787" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                WhatsApp Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/15 pt-6 sm:gap-6">
              {[
                { n: "500+", l: "Projects Served" },
                { n: "24/7", l: "Availability" },
                { n: "100%", l: "Quality Assured" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-xl font-bold text-accent sm:text-2xl md:text-3xl">{s.n}</div>
                  <div className="text-[11px] leading-tight text-white/70 sm:text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Call enquiry card */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-background/95 p-6 shadow-[var(--shadow-elegant)] backdrop-blur md:p-8">
              <h2 className="font-serif text-2xl font-bold text-navy">Enquire by Call</h2>
              <p className="mt-1 text-sm text-muted-foreground">Speak directly with our team — share what you need and get a quick price.</p>
              <div className="mt-5"><CallEnquiry /></div>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
                <div><div className="font-serif text-lg font-bold text-navy">15 min</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Quick Reply</div></div>
                <div><div className="font-serif text-lg font-bold text-navy">24/7</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Available</div></div>
                <div><div className="font-serif text-lg font-bold text-navy">All Sizes</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Orders</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-4 md:px-6">
          {[
            { i: Truck, t: "Site Delivery", d: "Across Coimbatore region" },
            { i: ShieldCheck, t: "Genuine Brands", d: "Direct from manufacturers" },
            { i: Clock, t: "24/7 Service", d: "Order any time of day" },
            { i: Star, t: "Best Prices", d: "Bulk discounts available" },
          ].map((f) => (
            <div key={f.t} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-accent"><f.i className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-semibold text-navy">{f.t}</div>
                <div className="text-xs text-muted-foreground">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-accent">What We Supply</div>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">Premium Building Materials, All Under One Roof</h2>
          <p className="mt-3 text-muted-foreground">Sourced directly from leading manufacturers and inspected for quality before they reach your site.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div key={p.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-accent/10 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy font-serif text-sm font-bold text-accent">0{i + 1}</div>
                <h3 className="mt-4 font-serif text-xl font-bold text-navy">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 font-semibold text-navy hover:text-accent">View All Products <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
          <div className="grid grid-cols-2 gap-4">
            <img src={aboutYard} alt="Cheran & Co. building materials yard" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" loading="lazy" />
            <img src={aboutYard2} alt="Stocked building materials at Cheran & Co." className="aspect-[4/5] mt-8 w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" loading="lazy" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent">About Cheran & Co.</div>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">Coimbatore's Trusted Building Materials Partner</h2>
            <p className="mt-4 text-muted-foreground">Based in Podanur, Coimbatore, we serve builders, contractors, and homeowners with a complete range of quality building materials — backed by reliable delivery and honest pricing.</p>
            <ul className="mt-6 space-y-3">
              {["Direct partnerships with leading brands","On-time site delivery, every time","Bulk pricing for contractors & projects","Friendly local team — speaks your language"].map((b) => (
                <li key={b} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> {b}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]">Learn More <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-accent">What Clients Say</div>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">Built on Trust, Backed by Results</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Karthik R.", r: "Civil Contractor", t: "Cheran & Co. has been my go-to for the past year. Quality of cement and steel is consistent, and they never miss a delivery date." },
            { n: "Priya S.", r: "Homeowner", t: "Built our home with materials from Cheran & Co. — fair pricing, helpful staff, and everything arrived on schedule." },
            { n: "Ramesh K.", r: "Builder", t: "Bulk orders, late-night deliveries, last-minute changes — they handle it all. Truly a 24/7 partner." },
          ].map((t) => (
            <div key={t.n} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-sm text-foreground">"{t.t}"</p>
              <div className="mt-4 border-t border-border pt-4">
                <div className="text-sm font-semibold text-navy">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-primary-foreground">
        <img src={ctaBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" loading="lazy" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="font-serif text-3xl font-bold md:text-5xl">Ready to Start Your Project?</h2>
          <p className="mt-4 text-white/80">Call us for a quick price. We deliver across Coimbatore — 24 hours a day.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+919865467787" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105">
              <Phone className="h-4 w-4" /> Call +91 98654 67787
            </a>
            <a href="https://maps.app.goo.gl/aWmAhacPNxwa3JdP8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              <MapPin className="h-4 w-4" /> Visit Our Yard
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
