import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/lib/content/home";

export function PersonNotService() {
  const { personNotService } = HOME;

  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6">
          <SectionHeading
            eyebrow={personNotService.eyebrow}
            title={personNotService.title}
            lede={personNotService.lede}
          />
        </div>
        <div className="flex flex-col justify-center gap-8 md:col-span-6">
          <Reveal>
            <ul className="flex flex-col gap-4 border-t border-line pt-6">
              {personNotService.lines.map((line) => (
                <li key={line} className="flex gap-4 text-base text-gray md:text-lg">
                  <span aria-hidden className="text-ink/30">
                    ×
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="border-l-2 border-ink py-1 pl-6 font-serif text-xl italic leading-snug text-ink md:text-2xl">
              {personNotService.closing}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
