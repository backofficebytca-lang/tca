import { Container } from "@/components/layout/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PhotoCarousel } from "@/components/ui/PhotoCarousel";
import { MarqueeBand } from "@/components/sections/MarqueeBand";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";

/** Ten colour photographs for the roll, varied in subject and light. */
const ROLL = [
  IMAGES.parisGolden,
  IMAGES.deskSunlit,
  IMAGES.facadeOrange,
  IMAGES.handPen,
  IMAGES.glassCorridor,
  IMAGES.envelopes,
  IMAGES.parisRoof,
  IMAGES.deskMug,
  IMAGES.archiveShelves,
  IMAGES.parisBalconies,
];

/**
 * The cover, in the reference's layout: the H1 top-left with its intro, a
 * text action top-right, then a drifting roll of rounded portrait photographs
 * and the services strip. Light surface under the glass header.
 */
export function Hero() {
  const { hero } = HOME;

  return (
    <section>
      <Container size="display" className="pb-10 pt-8 md:pb-12 md:pt-14 lg:pt-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[46rem]">
            <h1>
              <span className="t-hero block">
                {hero.statement.map((line, i) => (
                  <span key={line}>
                    <span className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]">
                      <span className="rise inline-block" style={{ ["--d" as string]: `${120 + i * 140}ms` }}>
                        {line}
                      </span>
                    </span>{" "}
                  </span>
                ))}
              </span>
              <span
                className="t-lead fade-up mt-5 block font-normal text-ink"
                style={{ ["--d" as string]: "600ms" }}
              >
                {hero.positioning}
              </span>
            </h1>
            <p
              className="t-lead fade-up mt-4 max-w-[38rem] text-gray"
              style={{ ["--d" as string]: "760ms" }}
            >
              {hero.subtitle}
            </p>
          </div>

          <div
            className="fade-up flex flex-row flex-wrap gap-x-10 gap-y-6 lg:flex-col lg:items-end lg:gap-6 lg:pb-2"
            style={{ ["--d" as string]: "900ms" }}
          >
            <ArrowLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ArrowLink>
            <ArrowLink href={hero.secondaryCta.href} muted>
              {hero.secondaryCta.label}
            </ArrowLink>
          </div>
        </div>
      </Container>

      <div className="fade-up" style={{ ["--d" as string]: "1000ms" }}>
        <PhotoCarousel photos={ROLL} />
      </div>

      <MarqueeBand />
    </section>
  );
}
