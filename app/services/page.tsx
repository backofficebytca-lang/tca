import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { CtaButton, buttonClasses } from "@/components/navigation/CtaButton";
import { ArrowUpRight } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/motion/Reveal";
import { StackedCards } from "@/components/sections/StackedCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { FORMULA_CARDS } from "@/lib/content/formules";
import { SERVICES_PAGE } from "@/lib/content/services";
import { IMAGES } from "@/lib/constants/images";
import { PENDING } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Packs récurrents et services à la carte | TCA Backoffice",
  description:
    "Packs d'assistance administrative et services à la carte : mise en page, présentations, courriers, traitement d'archives.",
  alternates: { canonical: "/services" },
};

/** One photograph per à-la-carte service, in the order of the list. */
const SERVICE_PHOTOS = [
  IMAGES.deskLaptop,
  IMAGES.deskSunlit,
  IMAGES.deskMug,
  IMAGES.envelopes,
  IMAGES.archiveShelves,
];

export default function ServicesPage() {
  const { hero, packs, carte, agency } = SERVICES_PAGE;
  const agencyLinkReady = !PENDING.agencyUrl.startsWith("[");

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        lede={hero.lede}
        image={{ ...IMAGES.archiveWarehouse, position: "50% 40%" }}
      />

      {/* A — recurring packs: the three formulas, summarised and linked. */}
      <Section id={packs.id} size="display">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Eyebrow>{packs.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className="t-h1 mt-5">{packs.title}</h2>
            </Reveal>
            <p className="t-lead mt-5 text-gray">{packs.lede}</p>
            <div className="mt-8">
              <CtaButton href={packs.cta.href}>{packs.cta.label}</CtaButton>
            </div>
          </div>

          <ul className="flex flex-col gap-3 lg:col-span-7">
            {FORMULA_CARDS.map((card, i) => (
              <li key={card.id}>
                <Reveal delay={i * 90}>
                  <Link
                    href={`/formules#${card.id}`}
                    className="group grid gap-2 rounded-xl bg-mist px-6 py-6 transition-colors duration-300 hover:bg-[#ececec] sm:grid-cols-12 sm:items-center sm:gap-x-6 md:py-7"
                  >
                    <span className="t-h3 sm:col-span-4">{card.name}</span>
                    <span className="t-body sm:col-span-4">
                      {card.price}
                      {card.unit ? ` ${card.unit}` : ""}
                    </span>
                    <span className="t-small flex items-center justify-between gap-4 text-gray sm:col-span-4">
                      {card.pour}
                      <ArrowUpRight className="text-ink transition-transform duration-500 ease-[cubic-bezier(0.35,0,0,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* B — à-la-carte services, stacked cards each with its own photograph. */}
      <Section id={carte.id} size="display" pad="none" className="pb-16 md:pb-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="t-h1">{carte.title}</h2>
          </Reveal>
          <p className="t-lead max-w-md text-gray">{carte.lede}</p>
        </div>

        <div className="mt-10 md:mt-14">
          <StackedCards items={carte.items.map((item, i) => ({ ...item, image: SERVICE_PHOTOS[i] }))} />
        </div>

        <div className="mt-10">
          <CtaButton href={carte.cta.href}>{carte.cta.label}</CtaButton>
        </div>
      </Section>

      {/* C — TCA Agency: a redirect, not a merger. */}
      <Section id={agency.id} size="display" pad="none" className="pb-8 md:pb-12">
        <Reveal>
          <div className="grid rounded-[18px] bg-mist p-3 lg:grid-cols-12 lg:gap-3">
            <div className="px-4 py-8 md:px-10 md:py-12 lg:col-span-7 lg:px-14">
              <Eyebrow on="card">{agency.eyebrow}</Eyebrow>
              {/* The source specifies an H3, so it stays an <h3>; the larger
                  size comes from the t-h2 typographic role, not the tag. */}
              <h3 className="t-h2 mt-5">{agency.title}</h3>
              <div className="mt-6">
                {agency.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="t-body text-gray [&:not(:first-child)]:mt-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                {agencyLinkReady ? (
                  <a
                    href={PENDING.agencyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses("solid")}
                  >
                    {agency.linkLabel}
                    <ArrowUpRight className="h-[18px] w-[18px]" />
                    <span className="sr-only">(nouvel onglet)</span>
                  </a>
                ) : (
                  <>
                    <span
                      aria-disabled="true"
                      className={buttonClasses("outline", "cursor-not-allowed opacity-70")}
                    >
                      {agency.linkLabel}
                    </span>
                    <p className="t-small mt-3 text-gray">Lien à confirmer avant mise en ligne.</p>
                  </>
                )}
              </div>
            </div>
            <div className="zoom relative min-h-[300px] overflow-hidden rounded-xl lg:col-span-5">
              <Image
                src={IMAGES.parisGolden.src}
                alt={IMAGES.parisGolden.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
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
