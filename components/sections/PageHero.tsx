import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { HeroTextReveal } from "@/components/motion/HeroTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { GRAIN_TEXTURE } from "@/lib/constants/textures";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  image,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="border-b border-line pb-0 pt-14 md:pt-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        </Reveal>
        <HeroTextReveal
          text={title}
          as="h1"
          className="max-w-4xl text-5xl leading-[1.0] text-ink sm:text-6xl md:text-7xl lg:text-[5rem]"
        />
        {lede && (
          <Reveal delay={0.12} className="mt-7 max-w-xl">
            <p className="text-base leading-relaxed text-gray md:text-lg">{lede}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.18} className="mt-8">
            {children}
          </Reveal>
        )}
      </Container>
      {image ? (
        // Bled to the right edge, ink ground standing as negative space on
        // the left — the same asymmetric language as the homepage's
        // editorial break, not a flat full-width rectangle.
        <Reveal delay={0.15} className="relative mt-12 h-[42svh] min-h-[260px] w-full overflow-hidden bg-ink md:mt-16 md:h-[54svh]">
          <div className="absolute inset-y-0 right-0 w-[88%] sm:w-[80%] lg:w-[68%]">
            <ParallaxImage src={image.src} alt={image.alt} strength={8} />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
              style={{ backgroundImage: GRAIN_TEXTURE }}
            />
          </div>
        </Reveal>
      ) : (
        <div className="pb-14 md:pb-20" />
      )}
    </section>
  );
}
