import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { CtaButton } from "@/components/navigation/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { FormulaColumn } from "@/components/formulas/FormulaColumn";
import { ComparisonTable } from "@/components/formulas/ComparisonTable";
import { CtaBand } from "@/components/sections/CtaBand";
import { FORMULES_PAGE } from "@/lib/content/formules";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";
import { GRAIN_TEXTURE } from "@/lib/constants/textures";

export const metadata: Metadata = {
  title: "Nos trois formules d'assistanat administratif à distance | TCA Backoffice",
  description:
    "Starter 290€, Essentiel 649€, Pilotage sur devis. Prix fixe, référente dédiée, sans engagement long. Détail des prestations.",
  alternates: { canonical: "/formules" },
};

export default function FormulesPage() {
  const { hero, formulas, switching, relationship, comparison } = FORMULES_PAGE;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {formulas.map((formula, i) => (
            <FormulaColumn key={formula.id} {...formula} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      {/* "Faire évoluer sa formule" — text keeps its normal column, the
          image bleeds past the container to the true right edge of the
          viewport rather than sitting boxed in a rectangle beside it. */}
      <Section containerClassName="!px-0 md:grid md:grid-cols-12 md:items-center md:gap-10">
        <div className="px-6 md:col-span-6 md:px-0 md:pl-10 lg:col-span-7 lg:pl-16">
          <SectionHeading eyebrow={switching.eyebrow} title={switching.title} lede={switching.lede} />
        </div>
        <div className="relative mt-10 min-h-[280px] overflow-hidden md:col-span-6 md:mt-0 md:min-h-[420px] lg:col-span-5">
          <Reveal className="absolute inset-0">
            {/* Placeholder pending fal.ai generation — see IMAGE 1 prompt.
                Stands in with an existing, thematically-matched approved
                asset (organized documents/planning) rather than a random
                stock photo, so the layout ships complete now. */}
            <ParallaxImage
              src={IMAGES.documentsDetail.src}
              alt={IMAGES.documentsDetail.alt}
              strength={8}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
              style={{ backgroundImage: GRAIN_TEXTURE }}
            />
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow={comparison.eyebrow} title={comparison.title} />
        <div className="mt-12">
          <ComparisonTable rows={comparison.rows} />
        </div>
      </Section>

      {/* "Une formule adaptée à votre rythme" — mirrored the other way:
          image bleeds to the true left edge, text on the right. Same
          language as the switching section above, opposite direction, so
          the page reads as a rhythm rather than the same block repeated. */}
      <Section containerClassName="!px-0 md:grid md:grid-cols-12 md:items-center md:gap-10">
        <div className="relative order-2 min-h-[280px] overflow-hidden md:order-1 md:col-span-6 md:min-h-[420px] lg:col-span-5">
          <Reveal className="absolute inset-0">
            {/* Placeholder pending fal.ai generation — see IMAGE 2 prompt.
                Stands in with an existing, human-presence asset rather than
                a random stock photo. */}
            <ParallaxImage
              src={IMAGES.portraitWork.src}
              alt={IMAGES.portraitWork.alt}
              strength={8}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
              style={{ backgroundImage: GRAIN_TEXTURE }}
            />
          </Reveal>
        </div>
        <div className="order-1 mt-10 flex flex-col gap-6 px-6 md:order-2 md:col-span-6 md:mt-0 md:px-0 md:pr-10 lg:col-span-7 lg:pr-16">
          <Reveal>
            <Eyebrow>{relationship.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-4xl tracking-tight text-ink md:text-5xl">{relationship.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-gray md:text-lg">
              {relationship.text}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-2">
            <CtaButton href={HOME.hero.primaryCta.href}>{HOME.hero.primaryCta.label}</CtaButton>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
