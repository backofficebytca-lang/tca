import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQ_PAGE } from "@/lib/content/faq";
import { IMAGES } from "@/lib/constants/images";

export const metadata: Metadata = {
  title: "FAQ — Vos questions sur l'assistanat administratif externalisé | TCA Backoffice",
  description:
    "Une personne réelle ? Comment résilier ? Confidentialité, délai de démarrage. Toutes les réponses.",
  alternates: { canonical: "/faq" },
};

/**
 * The reference's FAQ: the pill, title and intro stay in view on the left
 * (with a rounded photograph) while the questions stack on the right as soft
 * grey cards.
 */
export default function FaqPage() {
  const { hero, items } = FAQ_PAGE;

  return (
    <>
      <section>
        <Container size="display" className="pb-16 pt-8 md:pb-24 md:pt-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-6 lg:self-start">
              <div className="lg:sticky lg:top-28">
                <Eyebrow className="fade-up">{hero.eyebrow}</Eyebrow>
                <h1 className="t-h1 fade-up mt-5" style={{ ["--d" as string]: "100ms" }}>
                  {hero.title}
                </h1>
                <p className="t-lead fade-up mt-6 max-w-lg text-gray" style={{ ["--d" as string]: "250ms" }}>
                  {hero.lede}
                </p>
                <div className="relative mt-10 hidden aspect-[16/10] w-full max-w-lg overflow-hidden rounded-xl bg-mist lg:block">
                  <Image
                    src={IMAGES.parisRoof.src}
                    alt={IMAGES.parisRoof.alt}
                    fill
                    sizes="30vw"
                    className="object-cover"
                    style={{ objectPosition: IMAGES.parisRoof.position }}
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <FaqAccordion items={items} />
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
