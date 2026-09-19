"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/navigation/Logo";
import { MobileNav } from "@/components/navigation/MobileNav";
import { HeaderNavLink } from "@/components/navigation/HeaderNavLink";
import { CtaButton } from "@/components/navigation/CtaButton";
import { cn } from "@/lib/utils/cn";
import { MAIN_NAV, APPOINTMENT_CTA } from "@/lib/constants/nav";

const HEADER_HEIGHT = 80;
// How far you have to scroll before the header blurs — small on purpose,
// so it reacts to scrolling almost immediately rather than waiting until
// you've cleared most of the hero.
const BLUR_SCROLL_THRESHOLD = 24;

/**
 * Three states, not two. At the very top of the homepage the header is
 * fully transparent over the hero. Once scrolled, it becomes a real glass
 * surface — genuine backdrop-filter blur, not a near-opaque background
 * standing in for one — and which glass (white-on-dark-tint or
 * black-on-light-tint) it shows is read directly off whatever section is
 * physically sitting behind it right now, via elementFromPoint against each
 * section's own data-header-surface marker. Every other page has no
 * transparent phase (it opens on a light PageHero), so it starts "settled".
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const [surface, setSurface] = useState<"light" | "dark">(isHome ? "dark" : "light");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf = 0;

    const readSurfaceBehindHeader = () => {
      const probeY = Math.min(HEADER_HEIGHT - 4, window.innerHeight - 1);
      // elementFromPoint would just return the header itself (it's the
      // topmost thing there, transparency doesn't affect hit-testing) — the
      // full stack lets us skip past it to whatever section is actually
      // sitting underneath.
      const stack = document.elementsFromPoint(window.innerWidth / 2, probeY);
      const behindHeader = stack.find((el) => !headerRef.current?.contains(el));
      const marker = behindHeader?.closest("[data-header-surface]");
      const tone = marker?.getAttribute("data-header-surface");
      setSurface(tone === "dark" ? "dark" : "light");
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (isHome) setScrolledPastThreshold(window.scrollY > BLUR_SCROLL_THRESHOLD);
        readSurfaceBehindHeader();
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const settled = !isHome || scrolledPastThreshold;
  const transparent = isHome && !settled;
  const glassDark = settled && surface === "dark";
  const tone = transparent || glassDark ? "dark" : "light";

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-30 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        transparent && "border-transparent bg-transparent",
        settled && !glassDark && "border-line/70 bg-paper/72 backdrop-blur-lg",
        glassDark && "border-white/10 bg-ink/55 backdrop-blur-lg"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo
          variant={tone === "dark" ? "white" : "black"}
          compact={settled}
          loading="eager"
          className="transition-opacity duration-300"
        />
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <HeaderNavLink href={item.href} tone={tone}>
                  {item.label}
                </HeaderNavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <CtaButton href={APPOINTMENT_CTA.href} tone={tone} variant={transparent ? "outline" : "solid"}>
            {APPOINTMENT_CTA.label}
          </CtaButton>
        </div>
        <MobileNav tone={tone} />
      </Container>
    </header>
  );
}
