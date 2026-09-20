"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type Photo = { src: string; alt: string; position?: string };

const SPEED = 26; // px per second of slow drift

/**
 * The hero's photo roll — rounded portrait cards in a horizontal track. It
 * drifts slowly by itself, pauses on hover / focus / touch, can be dragged
 * with the mouse, swiped, scrolled, or moved with the arrow buttons that
 * appear on hover. The list is duplicated so it loops without a seam; the
 * copy is hidden from assistive technology. No drift under reduced motion.
 */
export function PhotoCarousel({ photos, className }: { photos: Photo[]; className?: string }) {
  const scroller = useRef<HTMLDivElement>(null);
  const first = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = scroller.current;
    const copy = first.current;
    if (!el || !copy) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const period = () => copy.offsetWidth; // one full copy, including its trailing gap
    let pos = 0;
    let last = performance.now();
    let raf = 0;

    // Start at the second copy so the track can be moved both ways; while
    // moving, the position is kept inside [0.5, 1.5) periods by jumping a whole
    // period (the two copies are identical, so the jump is invisible).
    el.scrollLeft = period();
    pos = el.scrollLeft;

    const wrap = () => {
      const p = period();
      if (!p) return;
      if (el.scrollLeft >= p * 1.5) {
        el.scrollLeft -= p;
        pos = el.scrollLeft;
      } else if (el.scrollLeft < p * 0.5) {
        el.scrollLeft += p;
        pos = el.scrollLeft;
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      if (!reduce && !paused.current && !document.hidden) {
        // If the user moved the track, continue from where it is now.
        if (Math.abs(el.scrollLeft - Math.round(pos)) > 1) pos = el.scrollLeft;
        pos += (SPEED * dt) / 1000;
        el.scrollLeft = pos;
      }
      wrap();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mouse drag (touch uses native scrolling).
  const drag = useRef<{ x: number; left: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !scroller.current) return;
    drag.current = { x: e.clientX, left: scroller.current.scrollLeft };
    paused.current = true;
    scroller.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current || !scroller.current) return;
    scroller.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const endDrag = () => {
    drag.current = null;
  };

  const nudge = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(640, el.clientWidth * 0.7), behavior: "smooth" });
  };

  const arrow =
    "absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper opacity-0 transition-opacity duration-300 hover:bg-[#2a2d36] focus-visible:opacity-100 group-hover:opacity-100 md:flex";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Photographies"
      className={cn("group relative", className)}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => {
        if (!drag.current) paused.current = false;
      }}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
      onTouchEnd={() => (paused.current = false)}
    >
      <div
        ref={scroller}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="no-scrollbar flex cursor-grab overflow-x-auto overscroll-x-contain active:cursor-grabbing"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? first : undefined}
            aria-hidden={copy === 1 || undefined}
            className="flex shrink-0 gap-2.5 pr-2.5"
          >
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className="relative h-[300px] w-[230px] shrink-0 overflow-hidden rounded-xl bg-mist md:h-[360px] md:w-[300px]"
              >
                <Image
                  src={photo.src}
                  alt={copy === 0 ? photo.alt : ""}
                  fill
                  sizes="300px"
                  draggable={false}
                  priority={copy === 0 && i < 3}
                  loading={copy === 0 && i < 3 ? undefined : "lazy"}
                  className="select-none object-cover"
                  style={{ objectPosition: photo.position }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <button type="button" onClick={() => nudge(-1)} aria-label="Photographies précédentes" className={cn(arrow, "left-5")}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button type="button" onClick={() => nudge(1)} aria-label="Photographies suivantes" className={cn(arrow, "right-5")}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
