import type { Metadata } from "next";
import { LegalPageBody } from "@/components/sections/LegalPageBody";
import { MENTIONS_LEGALES } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return <LegalPageBody title={MENTIONS_LEGALES.title} sections={MENTIONS_LEGALES.sections} />;
}
