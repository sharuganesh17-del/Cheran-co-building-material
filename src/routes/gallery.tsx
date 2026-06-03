import { createFileRoute } from "@tanstack/react-router";
import yard from "@/assets/about-yard.jpg";
import yard2 from "@/assets/about-yard2.jpg";
import delivery from "@/assets/gallery-delivery.jpg";
import blocks from "@/assets/prod-aac.jpg";
import cement from "@/assets/prod-cement.jpg";
import steel from "@/assets/prod-tmt.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cheran & Co. Building Materials Yard in Mettupalayam" },
      { name: "description", content: "A look inside Cheran & Co.'s yard in Mettupalayam, Coimbatore — concrete blocks, cement stock and project deliveries." },
      { name: "keywords", content: "yard gallery, building materials Mettupalayam, project photos" },
      { property: "og:title", content: "Gallery — Cheran & Co. Mettupalayam" },
      { property: "og:description", content: "A look inside our yard and projects in Mettupalayam, Coimbatore." },
      { property: "og:url", content: "https://cheranandco.in/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://cheranandco.in/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: yard, t: "Our Yard in Mettupalayam" },
  { src: cement, t: "Cement Stock" },
  { src: steel, t: "TMT Steel Bars" },
  { src: blocks, t: "AAC & Hollow Blocks" },
  { src: yard2, t: "Materials Storage" },
  { src: delivery, t: "Site Delivery" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="text-xs uppercase tracking-widest text-accent">Our Gallery</div>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">A Look Inside Our Yard</h1>
          <p className="mt-5 text-white/80">Real photos from our Mettupalayam facility and project sites across Mettupalayam, Ooty, Coimbatore and Annur.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img src={it.src} alt={it.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-5 text-primary-foreground">
                <div className="font-serif text-lg font-bold">{it.t}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}