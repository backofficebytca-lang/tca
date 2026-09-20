import Image from "next/image";
import { cn } from "@/lib/utils/cn";

/**
 * The small rounded label that opens every section: the brand's dot-ring mark
 * and a 12px word. Grey on white, white on a grey card (`on="card"`).
 */
export function Pill({
  children,
  on = "page",
  className,
}: {
  children: React.ReactNode;
  on?: "page" | "card";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "t-eyebrow inline-flex items-center gap-1.5 rounded-full px-3 py-[3px] text-ink",
        on === "card" ? "bg-paper" : "bg-mist",
        className
      )}
    >
      <Image src="/brand/tca-icon-black.png" alt="" width={12} height={12} className="h-3 w-3" />
      {children}
    </span>
  );
}
