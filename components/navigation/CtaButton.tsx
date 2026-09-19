import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Editorial button system — a persistent dotted frame (thin, reduced
 * weight) echoing the brand's own dot-matrix mark — the same border
 * language DotIndex already uses — rather than a generic solid-line
 * button. A fill that inverts (solid) or barely tints (outline) on hover,
 * and an arrow that travels further than its own width so the motion reads
 * as deliberate rather than decorative. No pill shapes, no gradients, no
 * default browser button chrome.
 */
export function CtaButton({
  href,
  children,
  variant = "solid",
  tone = "light",
  className,
}: CtaButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 rounded-[var(--radius-tca)] px-7 py-3.5 text-[0.9rem] tracking-[0.01em] transition-[background-color,color,border-color] duration-[250ms] ease-out active:scale-[0.98]";

  const styles: Record<string, string> = {
    "solid-light":
      "border border-dotted border-ink bg-ink font-semibold text-paper hover:bg-paper hover:text-ink",
    "solid-dark":
      "border border-dotted border-paper bg-paper font-semibold text-ink hover:bg-ink hover:text-paper",
    "outline-light":
      "border border-dotted border-ink/70 bg-transparent font-medium text-ink hover:border-ink hover:bg-ink/[0.04]",
    "outline-dark":
      "border border-dotted border-paper/60 bg-transparent font-medium text-paper hover:border-paper hover:bg-paper/[0.08]",
    "ghost-light":
      "px-0 py-0 font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink",
    "ghost-dark":
      "px-0 py-0 font-medium text-paper underline decoration-gray underline-offset-4 hover:decoration-paper",
  };

  return (
    <Link href={href} className={cn(base, styles[`${variant}-${tone}`], className)}>
      <span>{children}</span>
      {variant !== "ghost" && (
        <span
          aria-hidden
          className="inline-block transition-transform duration-[250ms] ease-out group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );
}
