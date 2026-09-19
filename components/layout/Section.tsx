import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/layout/Container";

export function Section({
  children,
  className,
  containerClassName,
  tone = "light",
  border = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "light" | "dark";
  border?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      data-header-surface={tone}
      className={cn(
        "py-20 md:py-32",
        tone === "dark" ? "bg-ink text-paper" : "bg-paper text-ink",
        border && (tone === "dark" ? "border-t border-white/15" : "border-t border-line"),
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
