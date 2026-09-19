import { Reveal } from "@/components/motion/Reveal";
import { DotIndex } from "@/components/typography/DotIndex";

export function PointsList({
  points,
}: {
  points: { title: string; text: string }[];
}) {
  return (
    <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {points.map((point, i) => (
        <Reveal key={point.title} delay={i * 0.06} className="h-full">
          <li className="flex h-full flex-col gap-5 border border-line p-7">
            <DotIndex n={i + 1} />
            <div>
              <h3 className="text-xl tracking-tight text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray md:text-base">
                {point.text}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
