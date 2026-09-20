import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buttonClasses } from "@/components/navigation/CtaButton";
import { NoBreak } from "@/components/typography/NoBreak";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";
import { cn } from "@/lib/utils/cn";

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden className={className}>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The cover: one large rounded colour photograph carrying the statement.
 * On desktop the supporting paragraph and the single call to action sit in a
 * dark glass panel over the photograph; on tablet and phone the photograph
 * keeps the statement and the paragraph and button follow beneath it on
 * white. One CTA only, in both arrangements.
 */
export function Hero() {
  const { hero } = HOME;
  const image = IMAGES.glassCorridor;

  const cta = (variant: "light" | "solid", className?: string) => (
    <Link
      href={hero.primaryCta.href}
      className={buttonClasses(variant, cn("!gap-3 !px-8 !py-5 !text-[1.0625rem]", className))}
    >
      <span>
        <NoBreak>{hero.primaryCta.label}</NoBreak>
      </span>
      <ArrowRight className="transition-transform duration-500 ease-[cubic-bezier(0.35,0,0,1)] group-hover:translate-x-1" />
    </Link>
  );

  return (
    <section>
      <Container size="display" className="pb-2 pt-2 md:pt-4">
        <div className="relative isolate flex min-h-[540px] flex-col justify-end overflow-hidden rounded-[18px] bg-ink p-6 md:min-h-[620px] md:p-10 lg:min-h-[min(84svh,900px)] lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:p-14">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1520px) 1440px, 100vw"
            className="-z-20 object-cover"
            style={{ objectPosition: "50% 58%" }}
          />
          <div className="absolute inset-0 -z-10 bg-ink/40" aria-hidden />

          <h1 className="max-w-[46rem] text-paper">
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
              className="t-lead fade-up mt-5 block max-w-xl font-normal text-paper"
              style={{ ["--d" as string]: "600ms" }}
            >
              {hero.positioning}
            </span>
          </h1>

          <div
            className="fade-up hidden w-full max-w-[27rem] shrink-0 rounded-2xl border border-paper/25 bg-ink/40 p-7 backdrop-blur-xl lg:block"
            style={{ ["--d" as string]: "800ms" }}
          >
            <p className="t-body text-paper">{hero.subtitle}</p>
            <div className="mt-7">{cta("light", "w-full")}</div>
          </div>
        </div>

        <div className="fade-up mt-6 lg:hidden" style={{ ["--d" as string]: "800ms" }}>
          <p className="t-lead max-w-2xl text-gray">{hero.subtitle}</p>
          <div className="mt-6">{cta("solid", "w-full sm:w-auto")}</div>
        </div>
      </Container>
    </section>
  );
}
