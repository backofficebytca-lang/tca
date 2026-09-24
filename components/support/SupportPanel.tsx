"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

/**
 * A quick-contact panel that lists real contact routes only — no bubble icon,
 * no assistant wording, no online-status dot. Closed, it is a small glass
 * button that settles in after the page has painted; open, a short list of
 * routes: email, then WhatsApp (TCA-Recommandations.pdf §9 replaces the
 * pending direct line with the WhatsApp number).
 */

function EmailGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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

  const optionClass =
    "group/opt flex items-center gap-4 border-t border-ink/10 px-5 py-4 t-small text-ink transition-colors duration-300 hover:bg-mist";

  return (
    <div
      ref={rootRef}
      className="glass-in fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6"
    >
      <div
        role="dialog"
        aria-label="Options de contact"
        aria-hidden={!open}
        className={cn(
          "absolute bottom-[calc(100%+0.75rem)] right-0 w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-ink/10 bg-paper/80 text-ink backdrop-blur-xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.35,0,0,1)]",
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <p className="t-eyebrow">Nous contacter</p>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
            aria-label="Fermer les options de contact"
            tabIndex={open ? 0 : -1}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-mist"
          >
            <span aria-hidden className="text-xl leading-none">
              ×
            </span>
          </button>
        </div>

        <a href={`mailto:${SITE.contactEmail}`} className={optionClass} tabIndex={open ? 0 : -1}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist transition-colors duration-300 group-hover/opt:bg-paper">
            <EmailGlyph />
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="font-medium">Écrire à TCA</span>
            <span className="break-all">{SITE.contactEmail}</span>
          </span>
          <span aria-hidden className="transition-transform duration-300 group-hover/opt:translate-x-1">
            →
          </span>
        </a>

        <a
          href={SITE.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className={optionClass}
          tabIndex={open ? 0 : -1}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist transition-colors duration-300 group-hover/opt:bg-paper">
            <WhatsAppIcon />
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="font-medium">Discuter sur WhatsApp</span>
            <span>{SITE.whatsappNumber}</span>
          </span>
          <span aria-hidden className="transition-transform duration-300 group-hover/opt:translate-x-1">
            →
          </span>
        </a>
      </div>

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Fermer les options de contact" : "Besoin d'aide ? Nous contacter"}
        className="t-button flex items-center gap-3 rounded-full border border-ink/10 bg-paper/75 px-5 py-3.5 text-ink backdrop-blur-xl transition-colors duration-300 hover:bg-ink hover:text-paper"
      >
        <span aria-hidden className={cn("inline-block transition-transform duration-500", open && "rotate-45")}>
          +
        </span>
        {open ? "Fermer" : "Besoin d’aide ?"}
      </button>
    </div>
  );
}
