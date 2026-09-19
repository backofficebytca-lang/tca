import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQ_PAGE } from "@/lib/content/faq";

export const metadata: Metadata = {
  title: "FAQ — Vos questions sur l'assistanat administratif externalisé | TCA Backoffice",
  description:
    "IA ou personne réelle ? Comment résilier ? Confidentialité, marchés publics, délai de démarrage. Toutes les réponses.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow={FAQ_PAGE.hero.eyebrow} title={FAQ_PAGE.hero.title} lede={FAQ_PAGE.hero.lede} />
      <Section>
        <FaqAccordion items={FAQ_PAGE.items} />
      </Section>
      <CtaBand />
    </>
  );
}
