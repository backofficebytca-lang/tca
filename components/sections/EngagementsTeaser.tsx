import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";

const PHOTOS = [
  IMAGES.parisGolden,
  IMAGES.deskMug,
  IMAGES.archiveShelves,
  IMAGES.handPen,
  IMAGES.parisBalconies,
  IMAGES.facadeOrange,
];

/**
 * The six commitments in the reference's "Latest works" layout: a header with
 * a text action, then two columns of large rounded photographs, each with its
 * title on the left, its keyword on the right and the sentence underneath.
 */
export function EngagementsTeaser() {
  const { engagements } = HOME;

  return (
    <section className="pb-4 pt-2 md:pt-6">
      <Container size="display">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>{engagements.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className="t-h1 mt-5">{engagements.title}</h2>
            </Reveal>
          </div>
          <ArrowLink href={engagements.cta.href} className="md:mb-2">
            {engagements.cta.label}
          </ArrowLink>
        </div>

        <ul className="mt-10 grid gap-x-4 gap-y-10 md:mt-14 md:grid-cols-2 md:gap-y-12">
          {engagements.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 2) * 100}>
                <article>
                  <div className="zoom relative aspect-[4/3] overflow-hidden rounded-xl bg-mist">
                    <Image
                      src={PHOTOS[i].src}
                      alt={PHOTOS[i].alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: PHOTOS[i].position }}
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-6 px-2 pt-4">
                    <h3 className="text-[1.0625rem] font-medium leading-snug">{item.title}</h3>
                    <span className="t-small shrink-0 text-gray">{item.keyword}</span>
                  </div>
                  <p className="t-small mt-1 max-w-lg px-2 text-gray">{item.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
