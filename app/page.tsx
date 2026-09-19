import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { KeyFacts } from "@/components/sections/KeyFacts";
import { PersonNotService } from "@/components/sections/PersonNotService";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { RelancesSection } from "@/components/sections/RelancesSection";
import { FormulesTeaser } from "@/components/sections/FormulesTeaser";
import { ChiffrageBlock } from "@/components/sections/ChiffrageBlock";
import { EngagementsTeaser } from "@/components/sections/EngagementsTeaser";
import { TestimonialsPlaceholder } from "@/components/sections/TestimonialsPlaceholder";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Assistante administrative externalisée — artisans, TPE, PME | TCA Backoffice",
  description:
    "Une professionnelle humaine dédiée pour artisans, auto-entrepreneurs, TPE et PME. Facturation, relances, fournisseurs. Prix fixe, sans engagement long.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <KeyFacts />
      <PersonNotService />
      <AudienceSection />
      <RelancesSection />
      <FormulesTeaser />
      <ChiffrageBlock />
      <EngagementsTeaser />
      <TestimonialsPlaceholder />
      <CtaBand />
    </>
  );
}
