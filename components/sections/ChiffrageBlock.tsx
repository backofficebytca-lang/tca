import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/navigation/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/lib/content/home";

export function ChiffrageBlock() {
  const { chiffrage } = HOME;

  return (
    <Section border className="py-20 md:py-28">
      <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <h2 className="max-w-2xl text-3xl leading-[1.15] text-ink md:text-4xl">
            {chiffrage.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray md:text-lg">
            {chiffrage.lede}
          </p>
        </div>
        <div className="md:col-span-4 md:flex md:justify-end">
          <CtaButton href={chiffrage.cta.href}>{chiffrage.cta.label}</CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
