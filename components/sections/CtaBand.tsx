import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { CtaButton } from "@/components/navigation/CtaButton";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/motion/Reveal";
import { NoBreak } from "@/components/typography/NoBreak";
import { HOME } from "@/lib/content/home";

type Cta = { label: string; href: string };

/**
 * Closing call to action, as in the reference: centred pill, title, one
 * sentence, then a solid black button with a text action beside it.
 */
export function CtaBand({
  title,
  lede,
  primaryCta,
  secondaryCta,
}: {
  title?: string;
  lede?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
} = {}) {
  const fallback = HOME.finalCta;
  const primary = primaryCta ?? fallback.primaryCta;
  const secondary = secondaryCta ?? fallback.secondaryCta;

  return (
    <section className="section-y">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Eyebrow>Premier échange gratuit</Eyebrow>
          <h2 className="t-h1">
            <NoBreak>{title ?? fallback.title}</NoBreak>
          </h2>
          <p className="t-lead max-w-lg text-gray">{lede ?? fallback.lede}</p>
          <div className="mt-3 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <CtaButton href={primary.href}>{primary.label}</CtaButton>
            {secondary && (
              <ArrowLink href={secondary.href} muted>
                {secondary.label}
              </ArrowLink>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
