import type { Metadata } from "next";
import { LegalPageBody } from "@/components/sections/LegalPageBody";
import { CONFIDENTIALITE } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return <LegalPageBody title={CONFIDENTIALITE.title} sections={CONFIDENTIALITE.sections} />;
}
