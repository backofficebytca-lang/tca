import { Pill } from "@/components/ui/Pill";

/** Section label — a block wrapper around the pill so it can be centred or spaced. */
export function Eyebrow({
  children,
  className,
  on = "page",
}: {
  children: React.ReactNode;
  className?: string;
  on?: "page" | "card";
}) {
  return (
    <div className={className}>
      <Pill on={on}>{children}</Pill>
    </div>
  );
}
