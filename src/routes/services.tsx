import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, ClipboardList, Headphones, Package, MapPinned, Calculator, Construction, Phone } from "lucide-react";
import jcbImg from "@/assets/rental-jcb.jpg";
import dumpImg from "@/assets/prod-dump-truck.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Delivery, Bulk Supply, Site Support | Cheran & Co. Mettupalayam" },
      { name: "description", content: "Free site delivery, bulk supply for contractors, project consultation and 24/7 support in Mettupalayam, Coimbatore." },
      { name: "keywords", content: "delivery service, bulk supply contractor, JCB rental, truck rental Mettupalayam" },
      { property: "og:title", content: "Services — Cheran & Co. Building Materials" },
      { property: "og:description", content: "Delivery, bulk supply, equipment rental and 24/7 support in Mettupalayam." },
      { property: "og:url", content: "https://cheranandco.in/services" },
    ],
    links: [{ rel: "canonical", href: "https://cheranandco.in/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { i: Truck, t: "Site Delivery", d: "We deliver to your construction site across Coimbatore — on time, every time." },
  { i: Package, t: "Bulk Supply for Projects", d: "Special pricing and dedicated logistics for builders, contractors and large-scale projects." },
  { i: Calculator, t: "Quantity Estimation", d: "Not sure how much you need? Share your plan — we'll help you estimate quantities and budget." },
  { i: ClipboardList, t: "Project Consultation", d: "Tap into our experience to choose the right materials and brands for every stage of construction." },
  { i: Headphones, t: "24/7 Customer Support", d: "Whether it's 3 PM or 3 AM, our team picks up the phone. Emergencies and last-minute orders welcome." },
  { i: MapPinned, t: "Region-Wide Coverage", d: "Serving Podanur, Madukkarai, Sundarapuram, Kuniyamuthur, Pollachi Road and the wider Coimbatore region." },
  { i: Construction, t: "JCB / Backhoe Rental", d: "Available for excavation, loading and site preparation. Hire by the hour or day across Coimbatore." },
  { i: Truck, t: "Dump Truck Rental", d: "Heavy-duty dump trucks for transporting sand, aggregates and debris to and from your site." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="text-xs uppercase tracking-widest text-accent">What We Offer</div>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Beyond Supply — Real Service</h1>
          <p className="mt-5 text-white/80">We don't just deliver materials. We deliver convenience, expertise and peace of mind.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-accent">What We Offer</div>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">Our Services</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-accent transition-transform group-hover:scale-110"><s.i className="h-6 w-6" /></div>
              <h3 className="mt-5 font-serif text-xl font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT RENTAL */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-widest text-accent">Equipment Rental</div>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">JCB & Dump Trucks on Hire</h2>
            <p className="mt-3 text-muted-foreground">Need heavy equipment for your site? We rent out JCB backhoes and dump trucks at competitive hourly and daily rates across Coimbatore.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={jcbImg} alt="JCB Backhoe Rental" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy">JCB / Backhoe Rental</h3>
                <p className="mt-2 text-sm text-muted-foreground">Ideal for excavation, trenching, loading and site clearing. Experienced operators available on request. Flexible hourly and daily booking.</p>
                <a href="tel:+919865467787" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-accent">
                  <Phone className="h-4 w-4" /> Call to Book — +91 98654 67787
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={dumpImg} alt="Dump Truck Rental" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy">Dump Truck Rental</h3>
                <p className="mt-2 text-sm text-muted-foreground">Heavy-duty tipper trucks for moving sand, aggregates, debris and construction waste. Reliable drivers and on-time scheduling.</p>
                <a href="tel:+919865467787" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-accent">
                  <Phone className="h-4 w-4" /> Call to Book — +91 98654 67787
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-center font-serif text-3xl font-bold text-navy md:text-4xl">How It Works</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Tell Us Your Need", d: "Call us or WhatsApp your requirement." },
              { n: "02", t: "Get a Quick Price", d: "We confirm pricing within 15 minutes." },
              { n: "03", t: "Confirm & Schedule", d: "Pick a delivery time that suits you." },
              { n: "04", t: "Receive at Site", d: "Materials arrive on time, inspected." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="font-serif text-3xl font-bold text-accent">{step.n}</div>
                <div className="mt-3 font-serif text-lg font-bold text-navy">{step.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="tel:+919865467787" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]">Call Now — +91 98654 67787</a>
          </div>
        </div>
      </section>
    </>
  );
}