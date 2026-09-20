import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { NoBreak } from "@/components/typography/NoBreak";
import { ScaleOnScroll } from "@/components/motion/ScaleOnScroll";

type Photo = { src: string; alt: string; position?: string };

/**
 * Opening of every inner page: pill, H1 on the left, intro on the right
 * aligned to the title's baseline and — when a photograph is supplied — one
 * wide rounded photograph that grows slightly as it scrolls into view.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: Photo;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <Container size="display" className="pb-10 pt-8 md:pb-14 md:pt-14">
        <Eyebrow className="fade-up">{eyebrow}</Eyebrow>
        <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <h1 className="t-display fade-up lg:col-span-8" style={{ ["--d" as string]: "100ms" }}>
            <NoBreak>{title}</NoBreak>
          </h1>
          {lede && (
            <p className="t-lead fade-up text-gray lg:col-span-4" style={{ ["--d" as string]: "250ms" }}>
              {lede}
            </p>
          )}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </Container>
      {image && (
        <Container size="display" className="pb-4 md:pb-8">
          <ScaleOnScroll from={0.94}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-mist sm:aspect-[21/9]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1520px) 1440px, 100vw"
                className="object-cover"
                style={{ objectPosition: image.position }}
              />
            </div>
          </ScaleOnScroll>
        </Container>
      )}
    </section>
  );
}
