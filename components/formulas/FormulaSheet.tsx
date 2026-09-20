import { CtaButton } from "@/components/navigation/CtaButton";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

type Sheet = {
  id: string;
  legacyId?: string;
  index: string;
  name: string;
  price: string;
  unit: string | null;
  priceNote: string | null;
  pourQui: string;
  volume: string;
  inclusions: string[];
  cta: { label: string; href: string };
};

/**
 * The full sheet for each formula (PDF v5 §3.2) as a soft grey card: name,
 * price and audience on the left; the complete list of services and the CTA
 * on the right.
 */
export function FormulaSheet({ sheet }: { sheet: Sheet }) {
  return (
    <Reveal>
      <article
        id={sheet.id}
        className="relative grid scroll-mt-24 gap-10 rounded-[18px] bg-mist p-6 md:p-10 lg:grid-cols-12 lg:gap-x-10"
      >
        {sheet.legacyId && (
          <span
            id={sheet.legacyId}
            aria-hidden="true"
            className="absolute left-0 top-0 h-px w-px scroll-mt-24"
          />
        )}
        <div className="lg:col-span-4">
          <Eyebrow on="card">{sheet.index}</Eyebrow>
          <h3 className="t-h1 mt-5">{sheet.name}</h3>
          <div className="mt-8 flex flex-wrap items-end gap-x-2">
            <span className="t-price">{sheet.price}</span>
            {sheet.unit && <span className="t-small mb-1 text-gray">{sheet.unit}</span>}
          </div>
          {sheet.priceNote && <p className="t-small mt-2 text-gray">{sheet.priceNote}</p>}
        </div>

        <dl className="flex flex-col gap-8 lg:col-span-3">
          <div>
            <dt className="t-small text-gray">Pour qui</dt>
            <dd className="t-body mt-2">{sheet.pourQui}</dd>
          </div>
          <div>
            <dt className="t-small text-gray">Volume</dt>
            <dd className="t-body mt-2">{sheet.volume}</dd>
          </div>
        </dl>

        <div className="lg:col-span-5">
          <p className="t-small text-gray">Prestations incluses</p>
          <ul className="mt-4 flex flex-col gap-3">
            {sheet.inclusions.map((item) => (
              <li key={item} className="t-body flex gap-3">
                <CheckIcon className="mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <CtaButton href={sheet.cta.href} className="mt-8 w-full sm:w-auto">
            {sheet.cta.label}
          </CtaButton>
        </div>
      </article>
    </Reveal>
  );
}
