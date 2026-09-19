import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { PointsList } from "@/components/sections/PointsList";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — 30 minutes pour cadrer votre besoin | TCA Backoffice",
  description:
    "Réservez un premier échange gratuit de 30 minutes. Cadrage du périmètre, chiffrage de l'économie, proposition de formule sous 48h.",
  alternates: { canonical: "/rendez-vous" },
};

export default function RendezVousPage() {
  const { hero, cadrage, preparer, after, writeInstead } = RENDEZ_VOUS_PAGE;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} />

      {/* Moved directly under the page intro — a visitor who already knows
          they'd rather write shouldn't have to scroll past the booking
          flow first. Tighter top gap than the standard section rhythm
          (this content is a direct continuation of the intro above it),
          full standard rhythm below (a genuinely new section follows). */}
      <Section id="ecrire" className="pt-12 md:pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>{writeInstead.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl tracking-tight text-ink md:text-4xl">
                {writeInstead.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-gray md:text-lg">
                {writeInstead.lede}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section border>
        <SectionHeading eyebrow={cadrage.eyebrow} title={cadrage.title} />
        <div className="mt-12">
          <PointsList points={cadrage.points} />
        </div>
      </Section>

      <Section tone="dark">
        <BookingPanel />
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl tracking-tight text-ink md:text-4xl">{preparer.title}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray">{preparer.lede}</p>
            <ul className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
              {preparer.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray">{preparer.closing}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl tracking-tight text-ink md:text-4xl">{after.title}</h2>
            <ul className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
              {after.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
