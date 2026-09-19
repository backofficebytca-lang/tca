import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { HeroTextReveal } from "@/components/motion/HeroTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Magnetic } from "@/components/motion/Magnetic";
import { DotRing } from "@/components/typography/DotRing";
import { CtaButton } from "@/components/navigation/CtaButton";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";
import { GRAIN_TEXTURE } from "@/lib/constants/textures";

/**
 * The full-bleed photograph stays (that composition is settled) — the
 * luxury register comes from restraint executed with more craft: a slow
 * one-time cinematic zoom instead of a static frame, a film-grain pass so
 * the photograph reads as shot, not stocked, corner brackets borrowed from
 * gallery/viewfinder framing, a wall-label treatment for the eyebrow, and
 * buttons that drift toward the cursor rather than sitting inert.
 */
export function Hero() {
  const { hero } = HOME;

  return (
    <section
      data-header-surface="dark"
      className="relative -mt-20 flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-20"
    >
      <ParallaxImage
        src={IMAGES.documentsDetail.src}
        alt={IMAGES.documentsDetail.alt}
        priority
        kenBurns
        grayscale={false}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20"
      />
      {/* A second, dedicated top-down blend — separate from the content
          scrim above, which is intentionally weak near the top. Keeps the
          white logo and nav legible against the photograph the instant the
          page opens, without darkening the rest of the frame. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent md:h-48"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_TEXTURE }}
      />

      {/* Viewfinder corners — a restrained framing device borrowed from
          gallery labels and camera viewfinders, present only at rest, never
          animated, so it reads as curated rather than decorative. */}
      <div aria-hidden className="pointer-events-none absolute inset-6 hidden sm:block md:inset-10">
        <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-paper/30" />
        <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-paper/30" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-paper/30" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-paper/30" />
      </div>

      <div className="relative flex flex-1 flex-col justify-end pb-16 pt-32 md:pb-20">
        <Container>
          <Reveal className="mb-7 flex items-center gap-4">
            <Image
              src="/brand/tca-icon-white.png"
              alt=""
              width={584}
              height={585}
              className="h-5 w-5"
            />
            <span className="h-px w-10 bg-paper/30" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/60">
              {hero.eyebrow}
            </span>
          </Reveal>
          <HeroTextReveal
            text={hero.title}
            className="max-w-4xl text-[2.5rem] font-bold leading-[1.0] tracking-[-0.02em] text-paper sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          />
          <Reveal delay={0.18} className="mt-7 max-w-xl">
            <p className="text-base leading-relaxed text-paper/80 md:text-lg">{hero.lede}</p>
          </Reveal>
          <Reveal delay={0.26} className="mt-9 flex flex-wrap items-center gap-5">
            <Magnetic strength={10}>
              <CtaButton href={hero.primaryCta.href} tone="dark">
                {hero.primaryCta.label}
              </CtaButton>
            </Magnetic>
            <Magnetic strength={10}>
              <CtaButton href={hero.secondaryCta.href} variant="outline" tone="dark">
                {hero.secondaryCta.label}
              </CtaButton>
            </Magnetic>
          </Reveal>
        </Container>
      </div>

      {/* Scroll cue — a small circular affordance rather than plain text,
          its dotted ring echoing the same border language as the buttons
          and the brand mark itself. Native anchor + the site-wide smooth
          scroll-behavior handles the scroll, no JS required. */}
      <Reveal
        delay={0.55}
        className="absolute inset-x-0 bottom-24 hidden justify-center sm:flex md:bottom-28"
      >
        <a
          href="#apres-hero"
          className="group flex flex-col items-center gap-3 text-paper/70 transition-colors duration-200 hover:text-paper"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Découvrir</span>
          <span className="motion-safe:animate-[gentle-bounce_2.4s_ease-in-out_infinite] flex h-11 w-11 items-center justify-center rounded-full border border-dotted border-paper/40 transition-colors duration-200 group-hover:border-paper/80">
            <DotRing size={14} tone="dark" className="opacity-70" />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
