import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { CtaButton } from "@/components/navigation/CtaButton";
import type { FormulaCardData } from "@/lib/content/formules";

type Photo = { src: string; alt: string; position?: string };

/**
 * One plan as a soft grey rounded card: a colour photograph, the name, the
 * price very large, audience and volume, the headline services with check
 * marks, and a text action pinned to the foot (its dash stretches on hover).
 *
 * TCA-Recommandations.pdf §4: the most chosen plan ("Essentiel") stands apart
 * with a black background everywhere it appears, instead of the plain white
 * badge on the grey card.
 */
export function FormulaCard({
  card,
  image,
  moreHref,
}: {
  card: FormulaCardData;
  image: Photo;
  /** Where "En savoir plus" points, e.g. "/formules#starter" or "#starter". */
  moreHref: string;
}) {
  const href = card.cta.href ?? moreHref;
  const featured = card.featured;

  return (
    <article
      className={
        featured
          ? "lift group flex h-full flex-col rounded-[18px] bg-ink p-3 text-paper"
          : "lift group flex h-full flex-col rounded-[18px] bg-mist p-3"
      }
    >
      <div className="zoom relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="object-cover"
          style={{ objectPosition: image.position }}
        />
        {featured && (
          <span className="t-eyebrow absolute right-3 top-3 rounded-full bg-paper px-3 py-1 text-ink">
            La plus choisie
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-6 md:px-5">
        <p className={featured ? "t-small text-paper/60" : "t-small text-gray"}>{card.label}</p>
        <h3 className="t-h2 mt-1">{card.name}</h3>

        <div className="mt-6 flex flex-wrap items-end gap-x-2">
          <span className="t-price">{card.price}</span>
          {card.unit && (
            <span className={featured ? "t-small mb-1 text-paper/60" : "t-small mb-1 text-gray"}>{card.unit}</span>
          )}
        </div>
        <p className={featured ? "t-small mt-2 text-paper/60" : "t-small mt-2 text-gray"}>{card.priceNote}</p>

        <dl
          className={
            featured
              ? "t-small mt-6 flex flex-col gap-1.5 border-t border-paper/15 pt-5"
              : "t-small mt-6 flex flex-col gap-1.5 border-t border-ink/10 pt-5"
          }
        >
          <div className="flex gap-2">
            <dt className={featured ? "text-paper/60" : "text-gray"}>Pour</dt>
            <dd>{card.pour}</dd>
          </div>
          <div className="flex gap-2">
            <dt className={featured ? "text-paper/60" : "text-gray"}>Volume</dt>
            <dd>{card.volume}</dd>
          </div>
        </dl>

        <p className={featured ? "t-small mt-6 text-paper/60" : "t-small mt-6 text-gray"}>{card.inclusHeading}</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="t-small flex gap-2.5">
              <CheckIcon className="mt-0.5 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          {featured ? (
            <CtaButton href={href} variant="light" className="w-full">
              {card.cta.label}
            </CtaButton>
          ) : (
            <ArrowLink href={href} full>
              {card.cta.label}
            </ArrowLink>
          )}
        </div>
      </div>
    </article>
  );
}
