import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { LEGAL_NOTICE } from "@/lib/content/legal";

export function LegalPageBody({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; text: string }[];
}) {
  return (
    <>
      <PageHero eyebrow="Légal" title={title} lede={LEGAL_NOTICE} />
      <Section className="py-16 md:py-20">
        <div className="flex max-w-2xl flex-col gap-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.04}>
              <h2 className="font-serif text-xl text-ink">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray md:text-base">
                {section.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
