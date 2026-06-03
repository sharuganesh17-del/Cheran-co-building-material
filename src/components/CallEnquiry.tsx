import { Phone, MessageCircle, Clock } from "lucide-react";

export function CallEnquiry({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-3">
      <a
        href="tel:+919865467787"
        className="flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
      >
        <Phone className="h-4 w-4" /> Call Now — +91 98654 67787
      </a>
      <a
        href="https://wa.me/919865467787?text=Hi%20Cheran%20%26%20Co.%2C%20I%20would%20like%20to%20enquire%20about%20building%20materials."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-lg border border-accent bg-accent/10 px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-accent/20"
      >
        <MessageCircle className="h-4 w-4 text-accent" /> Chat on WhatsApp
      </a>
      {!compact && (
        <p className="mt-1 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> Open 24/7 — we typically answer within minutes
        </p>
      )}
    </div>
  );
}