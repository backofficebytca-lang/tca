import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/**
 * One "market versus us" contrast as a soft grey card: index pill and the
 * statement on the left; on the right the market's position and ours (a
 * black chip, so the answer is the strongest thing on the card). The
 * "Conséquence" line is hidden per client request but stays in the content
 * data in case it returns.
 */
export function OppositionRow({
  n,
  title,
  market,
  us,
}: {
  n: string;
  title: string;
  market: string;
  us: string;
  consequence?: string;
}) {
  return (
    <li>
      <Reveal>
        <article className="grid gap-8 rounded-[18px] bg-mist p-6 md:p-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <Eyebrow on="card">{n}</Eyebrow>
            <h3 className="t-h2 mt-5">
              <span className="sr-only">{n}. </span>
              {title}
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-xl bg-paper p-5">
              <p className="t-small text-gray">Le marché</p>
              <p className="t-body mt-2 text-gray line-through decoration-1">{market}</p>
            </div>
            <div className="rounded-xl bg-ink p-5 text-paper">
              <p className="t-small text-paper/70">Nous</p>
              <p className="t-body mt-2">{us}</p>
            </div>
          </div>
        </article>
      </Reveal>
    </li>
  );
}
