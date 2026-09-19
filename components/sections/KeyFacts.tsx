import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/lib/content/home";

export function KeyFacts() {
  return (
    <Section id="apres-hero" className="scroll-mt-20 py-12 md:py-16">
      <Reveal>
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {HOME.keyFacts.map((fact) => (
            <div
              key={fact.title}
              className="flex flex-col gap-2 border-line py-6 pr-8 first:pl-0 md:border-l md:py-0 md:pl-8 md:first:border-l-0"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray">
                {fact.title}
              </dt>
              <dd className="text-lg font-semibold tabular-nums tracking-[-0.01em] text-ink md:text-xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
