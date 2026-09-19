"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function ParallaxImage({
  src,
  alt,
  priority,
  strength = 18,
  kenBurns = false,
  grayscale = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  strength?: number;
  /** A slow, one-time, non-looping scale — applied to the <img> itself, not
   * the div the scroll-parallax animates, so the two never fight over the
   * same transform. */
  kenBurns?: boolean;
  /** Every other photograph on the site renders monochrome to match the
   * strict noir/blanc/gris palette — defaults to on, with an explicit
   * opt-out for the one place (the hero) that's meant to stay in color. */
  grayscale?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

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
        gsap.fromTo(
          img,
          { yPercent: -strength },
          {
            yPercent: strength,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    })();

    return () => ctx?.revert();
  }, [strength]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <div ref={imgRef} className="absolute inset-[-12%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            "object-cover",
            grayscale && "grayscale contrast-[1.05]",
            kenBurns && "motion-safe:animate-[hero-kenburns_24s_ease-out_forwards]"
          )}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
