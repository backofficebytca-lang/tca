import { DotIndex } from "@/components/typography/DotIndex";
import { Reveal } from "@/components/motion/Reveal";

export function OppositionRow({
  n,
  title,
  market,
  us,
  consequence,
  delay = 0,
}: {
  n: string;
  title: string;
  market: string;
  us: string;
  consequence: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col gap-6 border border-line p-7 md:p-8">
        <div className="flex items-start gap-4">
          <DotIndex n={n} />
          <h3 className="pt-2 text-2xl tracking-tight text-ink md:text-3xl">{title}</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-gray/70">
              Le marché
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray line-through decoration-line md:text-base">
              {market}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink">Nous</p>
            <p className="mt-2 text-sm leading-relaxed text-ink md:text-base">{us}</p>
          </div>
        </div>
        <p className="text-sm italic text-gray">Conséquence : {consequence}</p>
      </div>
    </Reveal>
  );
}
