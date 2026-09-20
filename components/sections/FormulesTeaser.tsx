import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { FormulaCard } from "@/components/formulas/FormulaCard";
import { FORMULA_CARDS } from "@/lib/content/formules";
import { HOME } from "@/lib/content/home";
import { FORMULA_PHOTOS } from "@/lib/constants/images";

/** Home preview of the three formulas — the reference's pricing block. */
export function FormulesTeaser() {
  const { formulesTeaser } = HOME;

  return (
    <section className="section-y">
      <Container size="display">
        <Eyebrow>{formulesTeaser.eyebrow}</Eyebrow>
        <Reveal>
          <h2 className="t-h1 mt-5 max-w-3xl">{formulesTeaser.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 lg:grid-cols-3">
          {FORMULA_CARDS.map((card, i) => (
            <Reveal key={card.id} delay={i * 100} className="h-full">
              <FormulaCard card={card} image={FORMULA_PHOTOS[i]} moreHref={`/formules#${card.id}`} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
