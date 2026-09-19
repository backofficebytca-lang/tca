import { cn } from "@/lib/utils/cn";

/**
 * Badge numéroté en anneau pointillé — reprend le motif du "o" matriciel
 * du logo tca (anneau de points) comme repère numérique récurrent,
 * plutôt qu'un simple numéro gris.
 */
export function DotIndex({
  n,
  tone = "light",
  className,
}: {
  n: string | number;
  tone?: "light" | "dark";
  className?: string;
}) {
  const value = typeof n === "number" ? String(n).padStart(2, "0") : n;

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-dotted text-xs font-semibold tabular-nums",
        tone === "dark" ? "border-paper/40 text-paper" : "border-ink/30 text-ink",
        className
      )}
    >
      {value}
    </span>
  );
}
