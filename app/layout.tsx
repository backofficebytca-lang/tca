import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SupportPanel } from "@/components/support/SupportPanel";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `Assistante administrative externalisée — artisans, TPE, PME | ${SITE.name}`,
  description:
    "Une professionnelle humaine dédiée pour artisans, auto-entrepreneurs, TPE et PME. Facturation, relances, fournisseurs. Prix fixe, sans engagement long.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.contactEmail,
  description:
    "Une professionnelle humaine dédiée pour artisans, auto-entrepreneurs, TPE et PME. Facturation, relances, fournisseurs. Prix fixe, sans engagement long.",
  areaServed: "FR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <SupportPanel />
      </body>
    </html>
  );
}
