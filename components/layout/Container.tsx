import { cn } from "@/lib/utils/cn";

/**
 * "page" is the standard content width (1440px), "display" the widest
 * (1520px) used by the hero and image-led sections. Side gutters are 20px on
 * phones and 40px from tablet up, as in the reference.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
  size = "page",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "page" | "display";
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 md:px-10",
        size === "display" ? "max-w-[var(--container-display)]" : "max-w-[var(--container-page)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
