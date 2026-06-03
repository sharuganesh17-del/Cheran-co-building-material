import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import imgCement from "@/assets/prod-cement.jpg";
import imgSteel from "@/assets/prod-tmt.jpeg";
import imgBlocks from "@/assets/prod-aac.jpg";
import imgSand from "@/assets/prod-sand.jpg";
import imgAggregates from "@/assets/prod-aggregates.jpg";
import imgBricks from "@/assets/prod-bricks.jpg";
import imgHardware from "@/assets/prod-hardware.jpg";
import imgJcb from "@/assets/rental-jcb.jpg";
import imgDump from "@/assets/prod-dump-truck.jpeg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Cement, Steel, Blocks, Sand | Cheran & Co. Mettupalayam" },
      { name: "description", content: "Complete range of building materials in Mettupalayam — cement, TMT bars, concrete blocks, M-sand, river sand, aggregates and bricks. Quality suppliers." },
      { name: "keywords", content: "cement price Mettupalayam, steel bars, concrete blocks, sand supplier, aggregates, building materials" },
      { property: "og:title", content: "Products — Cheran & Co. Building Materials" },
      { property: "og:description", content: "Cement, steel, blocks, sand, aggregates & more — delivered in Mettupalayam & Coimbatore." },
      { property: "og:url", content: "https://cheranandco.in/products" },
    ],
    links: [{ rel: "canonical", href: "https://cheranandco.in/products" }],
  }),
  component: ProductsPage,
});

const products = [
  { img: imgCement, name: "Cement", brands: "Ramco · UltraTech · Dalmia · Coromandel", desc: "OPC 43 & 53 grade, PPC and PSC cement in 50kg bags. Available in any quantity from a single bag to full truckloads." },
  { img: imgSteel, name: "Steel & TMT Bars", brands: "Fe 500 · Fe 550 · Fe 600", desc: "Premium TMT bars in 8mm, 10mm, 12mm, 16mm, 20mm and 25mm sizes from leading brands like TATA Tiscon, JSW and Vizag." },
  { img: imgBlocks, name: "AAC & Hollow Blocks", brands: "Lightweight · Durable · Thermal Insulation", desc: "Lightweight AAC blocks and high-quality hollow blocks for efficient construction with excellent thermal insulation properties." },
  { img: imgSand, name: "M-Sand & River Sand", brands: "Plastering · Concreting", desc: "Washed, sieved and graded sand for plastering, masonry and concreting work. Consistent quality, prompt delivery." },
  { img: imgAggregates, name: "Aggregates / Jelly", brands: "20mm · 12mm · 40mm", desc: "Crushed stone aggregates for RCC, foundations and road works. Sourced from reputed quarries." },
  { img: imgBricks, name: "Bricks", brands: "Red · Fly-ash · AAC", desc: "Traditional red bricks, eco-friendly fly-ash bricks and lightweight AAC blocks — choose what suits your project best." },
  { img: imgHardware, name: "Hardware & Tools", brands: "On Request", desc: "Nails, binding wire, tools and accessories to keep your site moving without trips to multiple shops." },
];

const rentals = [
  { img: imgJcb, name: "JCB / Backhoe Rental", brands: "Hourly · Daily · With Operator", desc: "Excavation, trenching, loading and site clearing. Experienced operators available. Book by the hour or day across Coimbatore." },
  { img: imgDump, name: "Dump Truck Rental", brands: "Tipper · Heavy Duty · On Time", desc: "Transport sand, aggregates, debris and construction waste. Reliable drivers and flexible scheduling for your project needs." },
];

function ProductsPage() {
  return (
    <>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="text-xs uppercase tracking-widest text-accent">Our Products</div>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Everything You Need to Build</h1>
          <p className="mt-5 text-white/80">From foundation to finishing — plus JCB & dump truck rental for your site.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[11px] uppercase tracking-widest text-accent">{p.brands}</div>
                <h3 className="mt-2 font-serif text-xl font-bold text-navy">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <a href="tel:+919865467787" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-accent">
                  <Phone className="h-4 w-4" /> Call to Enquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RENTAL EQUIPMENT */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-widest text-accent">Equipment Rental</div>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">JCB & Dump Truck on Hire</h2>
            <p className="mt-3 text-muted-foreground">Heavy machinery and transport available for your construction site. Flexible hourly and daily rates across Coimbatore.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rentals.map((p) => (
              <div key={p.name} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[11px] uppercase tracking-widest text-accent">{p.brands}</div>
                  <h3 className="mt-2 font-serif text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <a href="tel:+919865467787" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-accent">
                    <Phone className="h-4 w-4" /> Call to Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-accent py-14 text-accent-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Need something not listed here?</h2>
            <p className="mt-1 text-sm opacity-90">We arrange custom orders for almost any building material — just ask.</p>
          </div>
          <a href="tel:+919865467787" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]"><Phone className="h-4 w-4" /> Call +91 98654 67787</a>
        </div>
      </section>
    </>
  );
}