"use client";

import { useEffect, useRef } from "react";

/**
 * The reference's appear effect: a fade with a 30px rise over 800ms and a
 * strong ease-out, triggered as the block enters the viewport.
 * IntersectionObserver + CSS transition, no animation library. Content is
 * fully visible without JS, elements already on screen at load are never
 * hidden (no flash), and nothing animates under reduced motion.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /** Milliseconds added to the transition, for staggering siblings. */
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity 800ms cubic-bezier(0.35, 0, 0, 1) ${delay}ms, transform 800ms cubic-bezier(0.35, 0, 0, 1) ${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.opacity = "1";
        el.style.transform = "none";
        io.disconnect();
      },
      { rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as React.Ref<HTMLElement>} className={className}>
      {children}
    </Tag>
  );
}
