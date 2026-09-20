import Image from "next/image";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { NoBreak } from "@/components/typography/NoBreak";

type Photo = { src: string; alt: string; position?: string };

type Item = { n: string; title: string; text: string; image: Photo };

/**
 * The reference's stacked steps: large rounded grey cards, photograph on the
 * left, index pill / title / text on the right. From tablet up each card
 * sticks a little lower than the previous one, so the cards pile up as you
 * scroll (pure CSS, no script).
 */
export function StackedCards({ items, top = 96, step = 18 }: { items: Item[]; top?: number; step?: number }) {
  return (
    <ol className="flex flex-col gap-5">
      {items.map((item, i) => (
        <li key={item.n} className="md:sticky" style={{ top: top + i * step }}>
          <article className="grid rounded-[18px] bg-mist p-3 md:min-h-[440px] md:grid-cols-[minmax(0,42%)_1fr] md:gap-3">
            <div className="zoom relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
                style={{ objectPosition: item.image.position }}
              />
            </div>
            <div className="flex flex-col justify-center gap-5 px-4 py-8 md:px-10 md:py-10 lg:px-16">
              <Eyebrow on="card">{item.n}</Eyebrow>
              <h3 className="t-h2 max-w-xl">
                <span className="sr-only">{item.n}. </span>
                <NoBreak>{item.title}</NoBreak>
              </h3>
              <p className="t-lead max-w-lg text-gray">{item.text}</p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
