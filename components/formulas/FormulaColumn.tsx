import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/navigation/CtaButton";
import { DotIndex } from "@/components/typography/DotIndex";
import { cn } from "@/lib/utils/cn";

export function FormulaColumn({
  id,
  index,
  name,
  baseline,
  pourQui,
  inclusions,
  volume,
  price,
  priceNote,
  cta,
  featured,
  delay = 0,
}: {
  id: string;
  index: string;
  name: string;
  baseline: string;
  pourQui: string;
  inclusions: string[];
  volume: string | null;
  price: string;
  priceNote: string;
  cta: { label: string; href: string };
  featured?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        id={id}
        className={cn(
          "flex h-full scroll-mt-24 flex-col gap-6 border p-8",
          featured ? "border-2 border-ink" : "border-line"
        )}
      >
        <div className="flex items-center justify-between">
          <DotIndex n={index} />
          {featured && (
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink">
              La plus choisie
            </span>
          )}
        </div>
        <div>
          <h3 className="text-4xl tracking-tight text-ink">{name}</h3>
          <p className="mt-1 text-sm italic text-gray">{baseline}</p>
        </div>
        <div>
          <p className="text-2xl text-ink">{price}</p>
          <p className="mt-1 text-sm text-gray">{priceNote}</p>
        </div>
        <p className="text-sm leading-relaxed text-gray">{pourQui}</p>
        {volume && (
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-gray">{volume}</p>
        )}
        <ul className="mt-2 flex flex-col gap-3 border-t border-line pt-6">
          {inclusions.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/85">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <CtaButton
            href={cta.href}
            variant={featured ? "solid" : "outline"}
            className="w-full justify-center"
          >
            {cta.label}
          </CtaButton>
        </div>
      </div>
    </Reveal>
  );
}
