import { cn } from "@/lib/utils/cn";

/**
 * Texture de points en trame régulière — écho discret du "o" matriciel
 * du logo tca, utilisé comme fond ambiant plutôt que des filets pleine
 * largeur pour séparer le contenu.
 */
export function DotGrid({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "rgba(255,255,255,0.55)" : "rgba(10,10,10,0.55)";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      }}
    />
  );
}
