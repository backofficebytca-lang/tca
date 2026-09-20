"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * FAQ as the reference does it: a stack of soft grey rounded cards, each a
 * question with a chevron. One answer opens at a time with a smooth height
 * transition (grid-rows 0fr → 1fr, no measuring). Real buttons with
 * aria-expanded / aria-controls; instant under reduced motion.
 */
export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;
        return (
          <div
            key={item.question}
            className={cn(
              "rounded-xl transition-colors duration-300",
              isOpen ? "bg-mist" : "bg-mist hover:bg-[#ececec]"
            )}
          >
            <h2>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className="text-[1.0625rem] font-medium leading-snug tracking-[-0.01em]">
                  {item.question}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  aria-hidden
                  className={cn(
                    "shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.35,0,0,1)]",
                    isOpen && "rotate-180"
                  )}
                >
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.35,0,0,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="t-body max-w-xl px-6 pb-6 text-gray">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
