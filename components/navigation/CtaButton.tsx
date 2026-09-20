import Link from "next/link";
import { NoBreak } from "@/components/typography/NoBreak";
import { cn } from "@/lib/utils/cn";

type Variant = "solid" | "outline";

/**
 * Buttons: rounded 12px. Solid = black with white text; outline = a hairline
 * border. Text-style actions use <ArrowLink> instead.
 */
export function buttonClasses(variant: Variant = "solid", className?: string) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 t-button transition-[background-color,color,transform] duration-300 ease-out",
    variant === "solid"
      ? "bg-ink text-paper hover:bg-[#2a2d36]"
      : "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
    className
  );
}

export function CtaButton({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      <span>
        <NoBreak>{children}</NoBreak>
      </span>
    </Link>
  );
}
