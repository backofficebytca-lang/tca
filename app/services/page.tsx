import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { DotIndex } from "@/components/typography/DotIndex";
import { CtaButton } from "@/components/navigation/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { SERVICES_PAGE } from "@/lib/content/services";
import { PENDING } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Missions ponctuelles — marchés publics, dossiers BPI | TCA Backoffice",
  description:
    "Deux interventions administratives ciblées : réponse aux appels d'offres publics, montage des dossiers de financement BPI. En complément d'une formule ou en autonome.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const { hero, missions, agency } = SERVICES_PAGE;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} />

      <Section>
        <SectionHeading eyebrow={missions.eyebrow} title={missions.title} />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {missions.rows.map((row, i) => (
            <Reveal key={row.id} delay={i * 0.06} className="h-full">
              <div id={row.id} className="flex h-full scroll-mt-24 flex-col gap-6 border border-line p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <DotIndex n={row.index} />
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-gray">
                    {row.meta}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl tracking-tight text-ink md:text-3xl">{row.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray md:text-base">
                    {row.text}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 border-t border-line pt-6">
                  {row.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 max-w-2xl">
          <p className="text-sm leading-relaxed text-gray md:text-base">{missions.pricing}</p>
          <div className="mt-6">
            <CtaButton href={missions.cta.href}>{missions.cta.label}</CtaButton>
          </div>
        </Reveal>
      </Section>

      <Section id={agency.id} tone="dark">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <SectionHeading eyebrow={agency.eyebrow} title={agency.title} lede={agency.text} tone="dark" />
          </div>
          <Reveal delay={0.1} className="md:col-span-4 md:flex md:justify-end">
            <a
              href={PENDING.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-paper pb-1 text-sm text-paper transition-colors hover:text-paper/70"
            >
              {agency.linkLabel}
              <span aria-hidden>↗</span>
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
