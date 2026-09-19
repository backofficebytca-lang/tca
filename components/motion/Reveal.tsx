"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  y?: number;
  id?: string;
  "data-header-surface"?: "light" | "dark";
};

/**
 * Reveal discret au scroll (fade + translateY court). GSAP est chargé
 * dynamiquement côté client uniquement, et l'effet est désactivé si
 * l'utilisateur préfère un mouvement réduit — le contenu reste visible
 * par défaut (aucune dépendance au JS pour être lisible).
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 20,
  id,
  "data-header-surface": headerSurface,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.set(el, { opacity: 0, y });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    })();

    return () => ctx?.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      id={id}
      data-header-surface={headerSurface}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
