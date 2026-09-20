import Link from "next/link";
import { NoBreak } from "@/components/typography/NoBreak";
import { cn } from "@/lib/utils/cn";

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The reference's text button: label and an up-right arrow, with a short
 * dash underneath that stretches to the full width on hover. `full` makes
 * the link span its container (used at the foot of cards).
 */
export function ArrowLink({
  href,
  children,
  className,
  full = false,
  muted = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  full?: boolean;
  muted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-2.5",
        full ? "w-full" : "w-fit",
        muted ? "text-gray hover:text-ink" : "text-ink",
        className
      )}
    >
      <span
        className={cn(
          "flex items-center gap-4 text-[1.0625rem] leading-none",
          full && "justify-between"
        )}
      >
        <span>
          <NoBreak>{children}</NoBreak>
        </span>
        <ArrowUpRight className="transition-transform duration-500 ease-[cubic-bezier(0.35,0,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
      <span aria-hidden className="flex w-full items-center gap-[3px]">
        <i className="h-[3px] w-[3px] shrink-0 rounded-full bg-current" />
        <i className="h-[3px] w-[25px] rounded-full bg-current transition-[width] duration-500 ease-[cubic-bezier(0.35,0,0,1)] group-hover:w-[calc(100%-6px)]" />
      </span>
    </Link>
  );
}
