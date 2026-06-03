import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import logoImg from "@/assets/cheranlogo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Cheran & Co." className="h-14 w-14 rounded-full ring-2 ring-accent" />
            <div>
              <div className="font-serif text-xl font-bold">Cheran <span className="text-accent">& Co.</span></div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Building Materials Supplier</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">One stop for all your building needs in Coimbatore. Quality materials, equipment rental, timely delivery and fair prices.</p>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-lg text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-lg text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-accent" /> RK Complex, GD Hospital, Mettur, Podanur, Coimbatore, Tamil Nadu 641023</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-accent" /> <a href="tel:+919865467787" className="hover:text-accent">+91 98654 67787</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-accent" /> <a href="mailto:cheran.co.build@gmail.com" className="hover:text-accent">cheran.co.build@gmail.com</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-accent" /> Open 24/7</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-lg text-accent">Follow Us</h4>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=61590624419459" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-white/20 p-2.5 transition-colors hover:border-accent hover:text-accent"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/cheran.co.build/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/20 p-2.5 transition-colors hover:border-accent hover:text-accent"><Instagram className="h-4 w-4" /></a>
          </div>
          <a href="https://maps.app.goo.gl/aWmAhacPNxwa3JdP8" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm text-accent hover:underline">View on Google Maps →</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Cheran & Co. Building Materials Supplier. All rights reserved.
      </div>
    </footer>
  );
}