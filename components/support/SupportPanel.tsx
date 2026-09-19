"use client";

import { useEffect, useRef, useState } from "react";
import { DotRing } from "@/components/typography/DotRing";
import { SITE, PENDING } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

/**
 * A quick-contact panel, not a chatbot — no bubble icon, no "assistant"
 * language, no online-status dot. Closed state is a small labelled button;
 * open state is a short list of real contact routes. Phone/WhatsApp only
 * render as active links when real data exists (PENDING.phone is a
 * placeholder today, and no WhatsApp number exists anywhere in the
 * project) — never invented.
 */

function EmailGlyph() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5.5" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneGlyph() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4.5h3.2l1.4 4.2-2 1.8a11.5 11.5 0 0 0 5.9 5.9l1.8-2 4.2 1.4v3.2a1.5 1.5 0 0 1-1.6 1.5C10.4 20 4 13.6 3.5 6.1A1.5 1.5 0 0 1 5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SupportPanel() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const hasPhone = !PENDING.phone.startsWith("[");

  const optionClass =
    "group/opt flex items-center gap-3.5 border-t border-line/70 px-5 py-4 text-sm text-ink transition-colors duration-200 hover:bg-ink/[0.035]";

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-40 md:bottom-6 md:right-6">
      {/* Panel — layered glass: a soft ink-tinted wash under a strong,
          saturated blur reads as considerably richer than a flat white
          card, while staying fully within the monochrome system. */}
      <div
        role="dialog"
        aria-label="Options de contact"
        aria-hidden={!open}
        className={cn(
          "absolute bottom-[calc(100%+0.875rem)] right-0 w-[min(320px,calc(100vw-2.5rem))] origin-bottom-right overflow-hidden border border-line/80 bg-paper/75 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.28)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ease-out",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-[0.97] opacity-0"
        )}
      >
        {/* Corner marks — the hero's viewfinder-bracket motif, scaled down,
            tying this floating surface back into the site's visual system. */}
        <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-2.5 w-2.5 border-l border-t border-ink/25" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-ink/25" />

        <div className="flex items-center justify-between gap-3 px-5 pb-3 pt-4.5">
          <div className="flex items-center gap-2.5">
            <DotRing size={14} tone="light" />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray">
              Nous contacter
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
            aria-label="Fermer les options de contact"
            tabIndex={open ? 0 : -1}
            className="flex h-6 w-6 items-center justify-center rounded-[var(--radius-tca)] text-gray transition-colors duration-200 hover:bg-ink/[0.06] hover:text-ink"
          >
            <span aria-hidden className="text-base leading-none">
              ×
            </span>
          </button>
        </div>

        <a href={`mailto:${SITE.contactEmail}`} className={optionClass} tabIndex={open ? 0 : -1}>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-line/80 text-ink transition-colors duration-200 group-hover/opt:border-ink">
            <EmailGlyph />
          </span>
          <span className="flex flex-1 flex-col">
            <span>Envoyer un email</span>
            <span className="text-xs text-gray">{SITE.contactEmail}</span>
          </span>
          <span
            aria-hidden
            className="text-gray transition-transform duration-200 group-hover/opt:translate-x-0.5 group-hover/opt:text-ink"
          >
            →
          </span>
        </a>

        {hasPhone ? (
          <a href={`tel:${PENDING.phone}`} className={optionClass} tabIndex={open ? 0 : -1}>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-line/80 text-ink transition-colors duration-200 group-hover/opt:border-ink">
              <PhoneGlyph />
            </span>
            <span className="flex-1">Nous appeler</span>
            <span
              aria-hidden
              className="text-gray transition-transform duration-200 group-hover/opt:translate-x-0.5 group-hover/opt:text-ink"
            >
              →
            </span>
          </a>
        ) : (
          <div className="flex items-center gap-3.5 border-t border-line/70 px-5 py-4 text-sm text-gray">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-line/60 text-gray/70">
              <PhoneGlyph />
            </span>
            <span className="flex flex-col">
              <span>Nous appeler</span>
              <span className="text-xs text-gray/70">Ligne directe — à venir</span>
            </span>
          </div>
        )}
      </div>

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Fermer les options de contact" : "Besoin d'aide ? Nous contacter"}
        className={cn(
          "motion-safe:animate-[widget-in_0.7s_ease-out_0.5s_both]",
          "group relative flex items-center gap-2.5 overflow-hidden rounded-[var(--radius-tca)] border border-dotted px-5 py-3.5 text-sm font-medium backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ease-out",
          open
            ? "border-ink bg-ink text-paper shadow-[0_10px_28px_-6px_rgba(0,0,0,0.32)]"
            : "border-ink/70 bg-paper/70 text-ink shadow-[0_8px_24px_-6px_rgba(0,0,0,0.14)] hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_14px_32px_-6px_rgba(0,0,0,0.2)]"
        )}
      >
        <DotRing size={16} tone={open ? "dark" : "light"} className="transition-transform duration-300 group-hover:rotate-45" />
        <span>{open ? "Fermer" : "Besoin d’aide ?"}</span>
      </button>
    </div>
  );
}
