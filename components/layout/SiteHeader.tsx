"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/navigation/Logo";
import { MobileNav } from "@/components/navigation/MobileNav";
import { HeaderNavLink } from "@/components/navigation/HeaderNavLink";
import { cn } from "@/lib/utils/cn";
import { MAIN_NAV, APPOINTMENT_CTA } from "@/lib/constants/nav";
import Link from "next/link";
import { buttonClasses } from "@/components/navigation/CtaButton";

/**
 * Glass header. Transparent at the very top of the page; once scrolled it
 * turns into a frosted white bar (real backdrop blur) so content passing
 * underneath stays legible. Logo left, links and one solid CTA right; below
 * 1024px the links collapse into the "Menu" panel.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b transition-[background-color,border-color] duration-500",
        scrolled ? "border-line bg-paper/75 backdrop-blur-[15px]" : "border-transparent bg-transparent"
      )}
    >
      <Container size="display" className="flex h-[72px] items-center justify-between gap-8 md:h-20">
        <Logo loading="eager" />
        <div className="hidden items-center gap-10 lg:flex">
          <nav aria-label="Navigation principale">
            <ul className="flex items-center gap-8">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <HeaderNavLink href={item.href}>{item.label}</HeaderNavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href={APPOINTMENT_CTA.href}
            className={buttonClasses("solid", "!px-5 !py-3 !text-[0.875rem] whitespace-nowrap")}
          >
            {APPOINTMENT_CTA.label}
          </Link>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
