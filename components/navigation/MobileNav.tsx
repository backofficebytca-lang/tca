"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, APPOINTMENT_CTA } from "@/lib/constants/nav";
import { buttonClasses } from "@/components/navigation/CtaButton";
import { cn } from "@/lib/utils/cn";

const noopSubscribe = () => () => {};

/**
 * Below 1024px the header shows a three-line hamburger (44px touch target).
 * It opens a full-screen white panel with the links at heading size and the
 * appointment CTA. Portaled to <body> so it escapes the header's blur
 * stacking context; Escape closes it and page scroll is locked while open.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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

  const content = (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="fixed right-[9px] top-[14px] z-50 flex h-11 w-11 items-center justify-center rounded-lg text-ink lg:hidden"
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden>
            <path d="M4 6.5h16M4 12h16M4 17.5h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto rounded-b-xl bg-paper px-5 pb-8 pt-24 text-ink transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.35,0,0,1)] lg:hidden",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <nav aria-label="Navigation principale mobile">
          <ul className="flex flex-col gap-1">
            {MAIN_NAV.map((item, i) => (
              <li
                key={item.href}
                className={cn(
                  "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.35,0,0,1)]",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <Link href={item.href} tabIndex={open ? 0 : -1} className="t-display block py-2 text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href={APPOINTMENT_CTA.href}
          tabIndex={open ? 0 : -1}
          className={buttonClasses("solid", "mt-10 w-full")}
        >
          {APPOINTMENT_CTA.label}
        </Link>
      </div>
    </>
  );

  if (!mounted) {
    return <div className="h-11 w-11 lg:hidden" aria-hidden />;
  }

  return createPortal(content, document.body);
}
