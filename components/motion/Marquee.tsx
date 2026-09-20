import { cn } from "@/lib/utils/cn";

/**
 * A looping horizontal track. `children` is a render function so the second
 * copy (which only exists to make the loop seamless) can be hidden from
 * assistive technology and skip work such as image priority. Movement pauses
 * on hover and keyboard focus and is switched off for reduced motion.
 */
export function Marquee({
  children,
  duration = 60,
  reverse = false,
  className,
  trackClassName,
}: {
  children: (copy: 0 | 1) => React.ReactNode;
  /** Seconds for one full loop. Higher is slower. */
  duration?: number;
  reverse?: boolean;
  className?: string;
  trackClassName?: string;
}) {
  return (
    <div
      className={cn("marquee overflow-hidden", reverse && "marquee-reverse", className)}
      style={{ ["--marquee-d" as string]: `${duration}s` }}
    >
      <div className="marquee-track h-full">
        <div className={cn("flex shrink-0", trackClassName)}>{children(0)}</div>
        <div className={cn("flex shrink-0", trackClassName)} aria-hidden="true">
          {children(1)}
        </div>
      </div>
    </div>
  );
}
