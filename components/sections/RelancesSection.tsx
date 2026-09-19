import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DrawLine } from "@/components/motion/DrawLine";
import { DotGrid } from "@/components/motion/DotGrid";
import { HOME } from "@/lib/content/home";

export function RelancesSection() {
  const { relances } = HOME;

  return (
    <Section tone="dark" className="relative overflow-hidden">
      <DotGrid tone="dark" className="opacity-[0.06]" />
      <SectionHeading
        eyebrow={relances.eyebrow}
        title={relances.title}
        lede={relances.lede}
        tone="dark"
      />

      <div className="relative mt-20">
        <div className="absolute left-0 right-0 top-[1.9rem] hidden border-t-2 border-dotted border-white/20 md:block" />
        <DrawLine className="absolute left-0 top-[1.9rem] hidden w-full border-t-2 border-dotted border-paper md:block" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {relances.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <span
                  aria-hidden
                  className="relative z-10 w-fit bg-ink pr-4 text-4xl font-bold tabular-nums tracking-[-0.02em] text-paper md:text-5xl"
                >
                  {step.n}
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.01em] text-paper">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-paper/70 md:text-base">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.3} className="mt-16 max-w-2xl">
        <p className="text-sm leading-relaxed text-paper/70 md:text-base">
          {relances.closing}
        </p>
      </Reveal>
    </Section>
  );
}
