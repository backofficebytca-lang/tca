"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, APPOINTMENT_CTA } from "@/lib/constants/nav";
import { cn } from "@/lib/utils/cn";

const noopSubscribe = () => () => {};

export function MobileNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // document is only available once mounted on the client — this avoids an
  // extra effect+setState render pass just to detect that.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

  const [trackedPathname, setTrackedPathname] = useState(pathname);
  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Portaled to <body> so the overlay escapes the header's stacking context
  // (backdrop-blur on the sticky header creates a containing block for
  // `position: fixed` descendants, which otherwise breaks full-viewport
  // coverage). The toggle button is portaled alongside it, fixed at the
  // same on-screen position as the header control, so both stay in one
  // stacking context and the button remains clickable/visible above the
  // open overlay.
  const content = (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="fixed right-6 top-5 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span
          className={cn(
            "block h-px w-6 transition-transform duration-200",
            open ? "bg-ink" : tone === "dark" ? "bg-paper" : "bg-ink",
            open && "translate-y-[3.5px] rotate-45"
          )}
        />
        <span
          className={cn(
            "block h-px w-6 transition-transform duration-200",
            open ? "bg-ink" : tone === "dark" ? "bg-paper" : "bg-ink",
            open && "-translate-y-[3.5px] -rotate-45"
          )}
        />
      </button>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-paper px-6 pb-10 pt-24 transition-opacity duration-200 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav aria-label="Navigation principale mobile">
          <ul className="flex flex-col gap-2">
            {MAIN_NAV.map((item, i) => (
              <li
                key={item.href}
                className="border-b border-line py-4 font-serif text-3xl"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <Link href={item.href} className="block">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href={APPOINTMENT_CTA.href}
          className="inline-flex items-center justify-center rounded-[var(--radius-tca)] bg-ink px-6 py-4 text-center text-sm font-medium tracking-wide text-paper"
        >
          {APPOINTMENT_CTA.label}
        </Link>
      </div>
    </>
  );

  if (!mounted) {
    return <div className="h-10 w-10 md:hidden" aria-hidden />;
  }

  return createPortal(content, document.body);
}
