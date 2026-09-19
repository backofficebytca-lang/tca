"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

export function HeroTextReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const spans = el.querySelectorAll<HTMLElement>("[data-word]");
    if (prefersReduced) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      gsap.set(spans, { yPercent: 110 });
      const tween = gsap.to(spans, {
        yPercent: 0,
        duration: 0.9,
        delay: 0.1 + delay,
        stagger: 0.045,
        ease: "power3.out",
        // Drop the compositor-layer promotion once the one-time reveal is
        // done — these spans never move again, so keeping will-change
        // active for the rest of the page's life is pure waste.
        onComplete: () => gsap.set(spans, { willChange: "auto" }),
      });
      cleanup = () => {
        tween.kill();
      };
    })();

    return () => cleanup?.();
  }, [delay]);

  return (
    <Tag ref={containerRef as React.Ref<HTMLElement>} className={cn(className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span data-word className="inline-block will-change-transform">
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
