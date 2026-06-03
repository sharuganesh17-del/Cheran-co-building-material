import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Heart, Award } from "lucide-react";
import aboutYard from "@/assets/about-yard.jpg";
import aboutYard2 from "@/assets/about-yard2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Cheran & Co. Building Materials Supplier in Mettupalayam" },
      { name: "description", content: "Learn about Cheran & Co. — Quality building materials supplier since 2016 in Mettupalayam, Ooty, Coimbatore & Annur. 15 years of experience, 24/7 service." },
      { name: "keywords", content: "about Cheran Co, building materials supplier Mettupalayam, trusted construction materials" },
      { property: "og:title", content: "About — Cheran & Co. Building Materials" },
      { property: "og:description", content: "Mettupalayam's trusted building materials supplier — quality, reliability and 24/7 service." },
      { property: "og:url", content: "https://cheranandco.in/about" },
    ],
    links: [{ rel: "canonical", href: "https://cheranandco.in/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="text-xs uppercase tracking-widest text-accent">Our Story</div>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Quality is Our Guiding Principle</h1>
          <p className="mt-5 text-white/80">Since 2016, Cheran & Co. has been serving Mettupalayam, Ooty, Coimbatore and Annur with high-quality building materials, equipment rental, and trusted delivery services. With 15 years of combined industry experience, we've earned the confidence of contractors, builders and homeowners across the region.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6">
        <img src={aboutYard} alt="Cheran & Co. yard in Mettupalayam" className="rounded-2xl shadow-[var(--shadow-elegant)]" loading="lazy" />
        <div>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">Who We Are</h2>
          <p className="mt-4 text-muted-foreground">Located at No. 1, Fathima Complex, Mettupalayam – 641301, Cheran & Co. is a full-service building materials supplier serving contractors, builders and homeowners across Mettupalayam, Ooty, Coimbatore and Annur. From a single bag of cement to truckloads of aggregates, we handle orders of every size with the same commitment to quality and timeliness.</p>
          <p className="mt-3 text-muted-foreground">Our partnerships with India's leading brands — Ramco, UltraTech, Dalmia and more — let us offer genuine products at competitive prices, with the added convenience of round-the-clock service.</p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">What Drives Us</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[              { i: Target, t: "Our Mission", d: "Be the trusted single-source supplier for every building material need in Mettupalayam, Ooty, Coimbatore and Annur." },
              { i: Heart, t: "Our Values", d: "Quality is our guiding principle. Honesty in pricing, consistency in materials, and respect for every customer — big or small." },
              { i: Award, t: "Our Promise", d: "Genuine brands, on-time delivery, competitive pricing, and a friendly team ready to help 24 hours a day." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-accent"><c.i className="h-5 w-5" /></div>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6">
        <div>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">Why Choose Cheran & Co.</h2>
          <ul className="mt-6 space-y-3">
            {[
              "Authorised dealer for leading cement & steel brands",
              "Strict quality checks on every batch we deliver",
              "Reliable site delivery across Mettupalayam, Ooty, Coimbatore & Annur",
              "Transparent pricing with bulk discounts",
              "24/7 availability — even on holidays",
              "JCB / Backhoe & dump truck rental available",
              "Friendly, locally-rooted team with 15 years of experience",
            ].map((b) => (
              <li key={b} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> {b}</li>
            ))}
          </ul>
        </div>
        <img src={aboutYard2} alt="Stocked materials at Cheran & Co. yard" className="rounded-2xl shadow-[var(--shadow-elegant)]" loading="lazy" />
      </section>
    </>
  );
}