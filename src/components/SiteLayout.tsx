import { Outlet } from "@tanstack/react-router";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Phone } from "lucide-react";

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1"><Outlet /></main>
      <SiteFooter />
      <a href="tel:+919865467787" aria-label="Call us" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-110 lg:hidden">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}