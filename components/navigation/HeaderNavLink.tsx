"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

export function HeaderNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative whitespace-nowrap text-[0.875rem] font-semibold transition-colors duration-300",
        active ? "text-ink" : "text-ink/60 hover:text-ink",
        "after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-ink after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.35,0,0,1)]",
        active ? "after:scale-x-100" : "after:scale-x-0"
      )}
    >
      {children}
    </Link>
  );
}
