import type { Metadata } from "next";
import { LegalPageBody } from "@/components/sections/LegalPageBody";
import { CGV } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  alternates: { canonical: "/cgv" },
  robots: { index: false, follow: true },
};

export default function CgvPage() {
  return <LegalPageBody title={CGV.title} sections={CGV.sections} />;
}
