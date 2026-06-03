import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cheran & Co. — Building Materials Supplier in Mettupalayam, Coimbatore" },
      { name: "description", content: "Quality building materials supplier in Mettupalayam, Coimbatore. Cement, steel, blocks, sand, aggregates & equipment rental. Open 24/7 with free delivery." },
      { name: "author", content: "Cheran & Co." },
      { name: "keywords", content: "building materials, cement, steel, blocks, sand, aggregates, Mettupalayam, Coimbatore, JCB rental, truck rental" },
      { property: "og:title", content: "Cheran & Co. — Building Materials Supplier in Mettupalayam" },
      { property: "og:description", content: "Quality building materials & equipment rental in Mettupalayam, Coimbatore. Cement, steel, blocks, sand & more. 24/7 service." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cheranandco.in" },
      { property: "og:site_name", content: "Cheran & Co." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@cheranandco" },
      { name: "twitter:title", content: "Cheran & Co. — Building Materials Supplier in Mettupalayam" },
      { name: "twitter:description", content: "Quality building materials & equipment rental in Mettupalayam, Coimbatore." },
      { property: "og:image", content: "https://cheranandco.in/logo.jpg" },
      { name: "twitter:image", content: "https://cheranandco.in/logo.jpg" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "geo.placename", content: "Mettupalayam, Coimbatore, Tamil Nadu, India" },
      { name: "geo.region", content: "IN-TN" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://cheranandco.in" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  // For client-only SPA mode, just render the children without HTML/head/body tags
  return (
    <>
      {children}
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
        <a href="tel:+919865467787" aria-label="Call us" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-110 lg:hidden">
          <Phone className="h-6 w-6" />
        </a>
      </div>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
