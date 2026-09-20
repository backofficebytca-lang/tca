import { cn } from "@/lib/utils/cn";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Eyebrow + H2 (+ optional lede). Only the H2 fades in. Sections are free to
 * compose these pieces differently — this is a convenience, not a template
 * every section must use.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  titleClassName,
  ledeClassName,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
  titleClassName?: string;
  ledeClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Reveal>
        <h2 className={cn("t-h2 max-w-3xl", titleClassName)}>{title}</h2>
      </Reveal>
      {lede && <p className={cn("t-lead max-w-[42rem] text-gray", ledeClassName)}>{lede}</p>}
    </div>
  );
}
