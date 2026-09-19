import { cn } from "@/lib/utils/cn";

/**
 * Étiquette de section — pas de pastille pilule façon SaaS (interdite par
 * le brief). Un simple repère carré (écho du point matriciel de la marque)
 * suivi d'un libellé mono espacé, sans conteneur.
 */
export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em]",
        tone === "dark" ? "text-paper/70" : "text-gray",
        className
      )}
    >
      <span
        aria-hidden
        className={cn("h-1.5 w-1.5 shrink-0", tone === "dark" ? "bg-paper/70" : "bg-ink/60")}
      />
      {children}
    </span>
  );
}
