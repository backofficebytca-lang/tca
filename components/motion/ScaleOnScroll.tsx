"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * The reference's large image starts slightly reduced and grows to full size
 * as it scrolls into view. Scroll-linked (requestAnimationFrame), a pure
 * transform, and switched off for reduced-motion users.
 */
export function ScaleOnScroll({
  children,
  className,
  from = 0.9,
}: {
  children: React.ReactNode;
  className?: string;
  /** Starting scale, reached when the block is just below the fold. */
  from?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top edge is at the bottom of the viewport, 1 once it has
      // travelled 70% of the screen height.
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.7)));
      el.style.transform = `scale(${from + (1 - from) * p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [from]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
