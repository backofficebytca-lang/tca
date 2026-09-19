"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

export function HeaderNavLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative text-[0.9rem] font-medium tracking-[0.01em] transition-colors",
        tone === "dark"
          ? "text-paper/80 hover:text-paper after:bg-paper"
          : "text-ink/80 hover:text-ink after:bg-ink",
        "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100",
        active && (tone === "dark" ? "text-paper after:scale-x-100" : "text-ink after:scale-x-100")
      )}
    >
      {children}
    </Link>
  );
}
