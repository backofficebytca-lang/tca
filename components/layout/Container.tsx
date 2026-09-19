import { cn } from "@/lib/utils/cn";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[var(--container-page)] px-6 md:px-10", className)}>
      {children}
    </Tag>
  );
}
