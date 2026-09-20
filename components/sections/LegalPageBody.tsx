import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
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
      <Section pad="tight">
        <div className="flex max-w-2xl flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="t-h3">{section.heading}</h2>
              <p className="t-body mt-3 text-gray">{section.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
