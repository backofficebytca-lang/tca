import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { SentenceLines } from "@/components/typography/SentenceLines";
import { FormulaCard } from "@/components/formulas/FormulaCard";
import { ComparisonTable } from "@/components/formulas/ComparisonTable";
import { CtaBand } from "@/components/sections/CtaBand";
import { FORMULA_CARDS, FORMULES_PAGE } from "@/lib/content/formules";
import { FORMULA_PHOTOS, IMAGES } from "@/lib/constants/images";

export const metadata: Metadata = {
  title: "Nos formules d'assistance administrative externalisée | TCA Backoffice",
  description:
    "Starter 290 €, Essentiel 649 €, Sur-mesure sur devis. Prix fixe, référente dédiée, abonnement mensuel sans engagement.",
  alternates: { canonical: "/formules" },
};

export default function FormulesPage() {
  const { hero, comparison, switching } = FORMULES_PAGE;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} image={IMAGES.formulesHero} />

      {/* TCA-Recommandations.pdf §3's detailed sheets stay removed (a doublon
          of the comparison table below), but the client asked for the price
          cards back, under the intro, in the same design as the home page. */}
      <Section pad="tight" size="display" className="pb-0">
        <div className="relative">
          <span id="pilotage" aria-hidden className="absolute left-0 top-0 h-px w-px scroll-mt-24" />
        </div>
        <Eyebrow>{comparison.intro.eyebrow}</Eyebrow>
        <Reveal>
          <h2 className="t-h1 mt-5 max-w-2xl">
            <SentenceLines text={comparison.intro.title} />
          </h2>
        </Reveal>
        <p className="t-lead mt-5 max-w-2xl text-gray">{comparison.intro.lede}</p>
      </Section>

      <Section pad="tight" size="display">
        <h2 className="sr-only">{hero.eyebrow}</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {FORMULA_CARDS.map((card, i) => (
            <div key={card.id} id={card.id} className="scroll-mt-24">
              <Reveal delay={i * 100} className="h-full">
                <FormulaCard card={card} image={FORMULA_PHOTOS[i]} moreHref={`#${card.id}`} />
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="sr-only">{comparison.title}</h2>
        <p className="t-lead max-w-3xl">{comparison.included}</p>
        <div className="mt-10 md:mt-14">
          <ComparisonTable
            columns={comparison.columns}
            sections={comparison.sections}
            price={comparison.price}
          />
        </div>
      </Section>

      <Section pad="none" size="display" className="pb-4 md:pb-8">
        <Reveal>
          <div className="grid rounded-[18px] bg-mist p-3 lg:grid-cols-12 lg:items-stretch lg:gap-3">
            <div className="flex flex-col justify-center px-4 py-8 md:px-10 md:py-12 lg:col-span-6 lg:px-14">
              <Eyebrow on="card">{switching.eyebrow}</Eyebrow>
              <h2 className="t-h1 mt-5">
                <SentenceLines text={switching.title} />
              </h2>
              <p className="t-lead mt-5 max-w-xl text-gray">{switching.lede}</p>
            </div>
            <div className="zoom relative aspect-[4/3] overflow-hidden rounded-xl lg:col-span-6 lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={IMAGES.formulesFaireEvoluer.src}
                alt={IMAGES.formulesFaireEvoluer.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
