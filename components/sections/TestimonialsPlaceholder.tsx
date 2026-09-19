import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Le document de contenu réserve trois emplacements pour des témoignages
 * clients, à intégrer en phase 2 une fois les verbatims recueillis.
 */
export function TestimonialsPlaceholder() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Témoignages</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 max-w-2xl text-3xl tracking-[-0.01em] text-ink md:text-4xl">
          Ce que nos clients en disent — à venir.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[1, 2, 3].map((slot) => (
          <Reveal key={slot} delay={slot * 0.06}>
            <div className="flex h-full flex-col justify-between gap-8 border border-dashed border-line p-6">
              <p className="text-sm italic leading-relaxed text-gray">
                Témoignage à intégrer — phase 2.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-gray">
                Nom · Fonction · Secteur
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
