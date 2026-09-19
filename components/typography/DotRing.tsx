import { cn } from "@/lib/utils/cn";

/**
 * Anneau de points généré en CSS — reprend fidèlement le dessin du "o"
 * matriciel du logo tca (douze points disposés en cercle) comme élément
 * graphique de marque, sans réutiliser de fichier logo existant.
 */
export function DotRing({
  size = 56,
  dotCount = 12,
  tone = "light",
  className,
}: {
  size?: number;
  dotCount?: number;
  tone?: "light" | "dark";
  className?: string;
}) {
  // Valeurs arrondies : évite les écarts de sérialisation flottante
  // entre le rendu serveur et le client (erreur d'hydratation).
  const round = (n: number) => Math.round(n * 100) / 100;

  const dotSize = round(size * 0.16);
  const radius = size / 2 - dotSize / 2;

  const dots = Array.from({ length: dotCount }, (_, i) => {
    const angle = (i / dotCount) * 2 * Math.PI - Math.PI / 2;
    const x = round(size / 2 + radius * Math.cos(angle) - dotSize / 2);
    const y = round(size / 2 + radius * Math.sin(angle) - dotSize / 2);
    return { x, y };
  });

  return (
    <div
      aria-hidden
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
    >
      {dots.map((dot, i) => (
        <span
          key={i}
          className={cn(
            "absolute rounded-full",
            tone === "dark" ? "bg-paper" : "bg-ink"
          )}
          style={{
            width: dotSize,
            height: dotSize,
            left: dot.x,
            top: dot.y,
          }}
        />
      ))}
    </div>
  );
}
