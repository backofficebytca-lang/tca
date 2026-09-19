import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { OppositionRow } from "@/components/sections/OppositionRow";
import { DotIndex } from "@/components/typography/DotIndex";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { CtaBand } from "@/components/sections/CtaBand";
import { POURQUOI_NOUS_PAGE } from "@/lib/content/pourquoi-nous";
import { SITE } from "@/lib/constants/site";
import { IMAGES } from "@/lib/constants/images";
import { GRAIN_TEXTURE } from "@/lib/constants/textures";

export const metadata: Metadata = {
  title:
    "Pourquoi choisir TCA Backoffice — sept engagements et qui nous sommes | TCA Backoffice",
  description:
    "Référente dédiée, ligne directe, tarif fixe, sans engagement long. Sept différences concrètes plus la présentation de l'équipe et de l'expérience.",
  alternates: { canonical: "/pourquoi-nous" },
};

export default function PourquoiNousPage() {
  const { hero, oppositions, closing, quiNousSommes, engagementsEcrits, secteurs } =
    POURQUOI_NOUS_PAGE;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} />

      <Section>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {oppositions.map((o, i) => (
            <OppositionRow key={o.n} {...o} delay={i * 0.03} />
          ))}
        </div>
        <Reveal delay={0.1} className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-gray md:text-xl">{closing}</p>
        </Reveal>
      </Section>

      <Section containerClassName="!px-0 md:grid md:grid-cols-12">
        {/* The image bleeds to the true left edge instead of sitting boxed
            inside the grid column — the same asymmetric idea as the
            homepage's editorial break, carried onto this page. Height
            follows the text column (grid stretch), not a fixed aspect
            ratio. */}
        <div className="relative min-h-[320px] overflow-hidden md:col-span-5">
          <Reveal className="absolute inset-0">
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

        <div className="flex flex-col justify-center gap-6 px-6 pt-12 md:col-span-7 md:px-10 md:pt-0 lg:pl-16">
          <Reveal>
            <Eyebrow>{quiNousSommes.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-4xl tracking-tight text-ink md:text-5xl">
              {quiNousSommes.title}
            </h2>
          </Reveal>
          {quiNousSommes.histoire.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.04}>
              <p className="max-w-xl text-base leading-relaxed text-gray md:text-lg">{p}</p>
            </Reveal>
          ))}

          {/* Team + founder set apart as their own credentials panel,
              rather than running on as more paragraphs — this is a
              different kind of information (who, not history) and reads
              better with its own frame. */}
          <Reveal delay={0.24} className="mt-4 max-w-xl border border-line p-6 md:p-7">
            <h3 className="text-xl font-medium tracking-tight text-ink">
              {quiNousSommes.equipeTitle}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-gray">{quiNousSommes.equipe}</p>
            <p className="mt-5 border-t border-line pt-5 text-lg font-medium text-ink">
              {SITE.founder}
              <span className="ml-3 text-sm font-normal text-gray">{SITE.founderTitle}</span>
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Engagements" title={engagementsEcrits.title} />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {engagementsEcrits.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-5 border border-line p-7">
                <DotIndex n={i + 1} />
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Secteurs" title={secteurs.title} tone="dark" />
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-10">
          {secteurs.items.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <li className="flex items-center gap-4 border border-white/15 px-6 py-5 text-base text-paper/85">
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-paper/50" />
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand secondaryCta={{ label: "Découvrir nos formules", href: "/formules" }} />
    </>
  );
}
