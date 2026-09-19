import { Container } from "@/components/layout/Container";
import { CtaButton } from "@/components/navigation/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";

type Cta = { label: string; href: string };

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

  const resolvedTitle = title ?? fallback.title;
  const resolvedLede = lede ?? fallback.lede;
  const resolvedPrimary = primaryCta ?? fallback.primaryCta;
  const resolvedSecondary = secondaryCta ?? fallback.secondaryCta;

  return (
    <section
      data-header-surface="dark"
      className="relative overflow-hidden border-t border-line py-28 md:py-40"
    >
      <ParallaxImage src={IMAGES.darkStatement.src} alt={IMAGES.darkStatement.alt} strength={12} />
      <div aria-hidden className="absolute inset-0 bg-ink/75" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="max-w-3xl text-5xl leading-[1.05] text-paper md:text-6xl lg:text-7xl">
            {resolvedTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="flex max-w-lg flex-col items-center gap-8">
          <p className="text-base text-paper/80 md:text-lg">{resolvedLede}</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <CtaButton href={resolvedPrimary.href} tone="dark">
              {resolvedPrimary.label}
            </CtaButton>
            {resolvedSecondary && (
              <CtaButton href={resolvedSecondary.href} variant="ghost" tone="dark">
                {resolvedSecondary.label}
              </CtaButton>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
