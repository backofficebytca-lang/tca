import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/** Numbered points as a grid of soft grey cards. */
export function PointsList({ points }: { points: { title: string; text: string }[] }) {
  // Six-column grid: three across, and a final row of two or one shares the
  // full width instead of leaving an empty cell.
  const rest = points.length % 3;
  const spanFor = (i: number) => {
    const fromEnd = points.length - i;
    if (rest === 2 && fromEnd <= 2) return "lg:col-span-3";
    if (rest === 1 && fromEnd === 1) return "lg:col-span-6";
    return "lg:col-span-2";
  };

  return (
    <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
      {points.map((point, i) => {
        const n = String(i + 1).padStart(2, "0");
        return (
          <li key={point.title} className={spanFor(i)}>
            <Reveal delay={(i % 3) * 90} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-xl bg-mist p-6 md:p-7">
                <Eyebrow on="card">{n}</Eyebrow>
                <h3 className="t-h3">
                  <span className="sr-only">{n}. </span>
                  {point.title}
                </h3>
                <p className="t-body text-gray">{point.text}</p>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
