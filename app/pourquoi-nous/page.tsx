import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { OppositionRow } from "@/components/sections/OppositionRow";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { BoldBrand } from "@/components/typography/BoldBrand";
import { SentenceLines } from "@/components/typography/SentenceLines";
import { LockIcon, ShieldIcon, DoubleArrowIcon, ExportArrowIcon } from "@/components/ui/EngagementIcons";
import { POURQUOI_NOUS_PAGE } from "@/lib/content/pourquoi-nous";
import { IMAGES } from "@/lib/constants/images";

// TCA-Recommandations.pdf §11: one icon per written engagement, in source order.
const ENGAGEMENT_ICONS = [LockIcon, ShieldIcon, DoubleArrowIcon, ExportArrowIcon];

export const metadata: Metadata = {
  title: "Pourquoi choisir TCA Backoffice — cinq engagements et qui nous sommes | TCA Backoffice",
  description:
    "Référente dédiée, ligne directe, tarif fixe, sans engagement long. Cinq différences concrètes plus la présentation de l'équipe et de l'expérience.",
  alternates: { canonical: "/pourquoi-nous" },
};

export default function PourquoiNousPage() {
  const { hero, oppositionsHeading, oppositions, closing, quiNousSommes, engagementsEcrits } =
    POURQUOI_NOUS_PAGE;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} image={IMAGES.pourquoiNousHero} />

      <Section pad="tight" size="display">
        <h2 className="sr-only">{oppositionsHeading}</h2>
        <ol className="flex flex-col gap-4">
          {oppositions.map((o) => (
            <OppositionRow key={o.n} {...o} />
          ))}
        </ol>
        <p className="t-lead mt-10 max-w-2xl text-gray md:mt-14">
          <BoldBrand text={closing} />
        </p>
      </Section>

      {/* Who we are: photograph on the left, story and team on the right. */}
      <Section pad="none" size="display" className="py-8 md:py-12">
        <Reveal>
          <div className="grid rounded-[18px] bg-mist p-3 lg:grid-cols-12 lg:gap-3">
            <div className="zoom relative aspect-[4/3] overflow-hidden rounded-xl lg:col-span-5 lg:aspect-auto lg:min-h-[560px]">
              <Image
                src={IMAGES.quiNousSommes.src}
                alt={IMAGES.quiNousSommes.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-4 py-8 md:px-10 md:py-12 lg:col-span-7 lg:px-14">
              <h2 className="t-h1">{quiNousSommes.title}</h2>
              <p className="t-lead mt-6 max-w-xl text-gray">
                <BoldBrand text={quiNousSommes.histoire} />
              </p>
              <div className="mt-10 border-t border-ink/10 pt-8">
                <h3 className="t-h3">{quiNousSommes.equipeTitle}</h3>
                <div className="mt-5 flex max-w-xl flex-col gap-4">
                  {quiNousSommes.equipe.map((paragraph) => (
                    <p key={paragraph} className="t-body text-gray">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section size="display">
        <Reveal>
          <h2 className="t-h1 max-w-4xl">
            <SentenceLines text={engagementsEcrits.title} />
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {engagementsEcrits.items.map((item, i) => {
            const Icon = ENGAGEMENT_ICONS[i];
            return (
              <li key={item.title}>
                <Reveal delay={i * 90} className="h-full">
                  <article className="h-full rounded-xl bg-mist p-6 md:p-7">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink">
                      <Icon />
                    </span>
                    <h3 className="t-h3 mt-5">{item.title}</h3>
                    <p className="t-body mt-3 text-gray">{item.text}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Section>

      <CtaBand
        primaryCta={{ label: "Réserver un échange", href: "/rendez-vous" }}
        secondaryCta={{ label: "Découvrir nos formules", href: "/formules" }}
      />
    </>
  );
}
