import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SupportPanel } from "@/components/support/SupportPanel";
import { SITE } from "@/lib/constants/site";

// The four weights the design uses. Self-hosted by
// next/font at build time, display: swap, so no layout-blocking request.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.metaTitle,
  description: SITE.metaDescription,
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
  // Google Search Console (search.google.com/search-console) domain ownership.
  verification: {
    google: "R2Nw77knqkUiqMQfBZqDDYzDk7DDBRNqSqy0YUB4z2s",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.contactEmail,
  description: SITE.metaDescription,
  areaServed: "FR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
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
