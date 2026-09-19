import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { DotIndex } from "@/components/typography/DotIndex";
import { CtaButton } from "@/components/navigation/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/lib/content/home";

export function EngagementsTeaser() {
  const { engagements } = HOME;
  const half = Math.ceil(engagements.items.length / 2);
  const columns = [engagements.items.slice(0, half), engagements.items.slice(half)];

  return (
    <Section>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={engagements.eyebrow} title={engagements.title} />
        <CtaButton href={engagements.cta.href} variant="ghost" className="shrink-0">
          {engagements.cta.label}
        </CtaButton>
      </div>

      <Reveal className="mt-14 grid grid-cols-1 gap-x-10 md:grid-cols-2">
        {columns.map((column, colIndex) => (
          <ul key={colIndex} className="flex flex-col border-t border-line">
            {column.map((item) => (
              <li key={item.n} className="flex items-baseline gap-5 border-b border-line py-6">
                <DotIndex n={item.n} className="shrink-0" />
                <div>
                  <h3 className="text-base font-medium tracking-[-0.01em] text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-gray">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </Reveal>
    </Section>
  );
}
