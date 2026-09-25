import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";
import { IMAGES } from "@/lib/constants/images";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — 30 minutes pour cadrer votre besoin | TCA Backoffice",
  description:
    "Réservez un premier échange gratuit de 30 minutes. Cadrage du périmètre, chiffrage de l'économie, proposition de formule sous 48h.",
  alternates: { canonical: "/rendez-vous" },
};

export default function RendezVousPage() {
  const { booking, preparer, after, writeInstead } = RENDEZ_VOUS_PAGE;

  return (
    <>
      {/* TCA-Recommandations.pdf + client note: the page opens directly on
          the booking agenda — no hero banner, no separate 30-minute pitch.
          The visible title lives in <BookingPanel>'s h2; this sr-only h1
          keeps the page to one accessible top-level heading. */}
      <h1 className="sr-only">{booking.title}</h1>
      <Section pad="none" size="display" className="pb-16 pt-8 md:pb-24 md:pt-14">
        <BookingPanel />
      </Section>

      {/* The written route: a visitor who would rather write than book a
          slot never has to scroll far for the form. */}
      <Section id="ecrire" pad="none" size="display" className="pb-16 md:pb-24">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{writeInstead.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className="t-h1 mt-5">{writeInstead.title}</h2>
            </Reveal>
            <p className="t-lead mt-5 max-w-md text-gray">{writeInstead.lede}</p>
            <div className="zoom relative mt-8 hidden aspect-[4/3] w-full overflow-hidden rounded-xl bg-mist lg:block">
              <Image
                src={IMAGES.rendezVousFormulaire.src}
                alt={IMAGES.rendezVousFormulaire.alt}
                fill
                sizes="30vw"
                className="object-cover"
                style={{ objectPosition: IMAGES.rendezVousFormulaire.position }}
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[18px] bg-mist p-5 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section pad="none" size="display" className="pb-20 md:pb-32">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-[18px] bg-mist p-6 md:p-10">
              <h2 className="t-h2">{preparer.title}</h2>
              <p className="t-body mt-4 max-w-md text-gray">{preparer.lede}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {preparer.items.map((item) => (
                  <li key={item} className="t-body flex gap-3">
                    <CheckIcon className="mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="t-small mt-6 text-gray">{preparer.closing}</p>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="h-full rounded-[18px] bg-mist p-6 md:p-10">
              <h2 className="t-h2">{after.title}</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {after.items.map((item) => (
                  <li key={item} className="t-body flex gap-3">
                    <CheckIcon className="mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
