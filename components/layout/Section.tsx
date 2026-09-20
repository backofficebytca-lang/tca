import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/layout/Container";

/**
 * A page section. Surfaces stay white; grey appears on the cards inside
 * (`bg-mist rounded-…`), as in the reference. `tone="mist"` is kept for the
 * rare full-bleed grey band.
 */
export function Section({
  children,
  className,
  containerClassName,
  tone = "light",
  id,
  size = "page",
  pad = "default",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "light" | "mist";
  id?: string;
  size?: "page" | "display";
  pad?: "default" | "tight" | "none";
}) {
  return (
    <section
      id={id}
      className={cn(
        tone === "mist" ? "bg-mist" : "bg-paper",
        "text-ink",
        pad === "default" && "section-y",
        pad === "tight" && "py-12 md:py-20",
        className
      )}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
