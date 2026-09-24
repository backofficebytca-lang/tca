import type { SVGProps } from "react";

/**
 * Small line icons for the two "engagements" grids (home and Pourquoi nous),
 * one per commitment. 20px, 1.6 stroke, rounded caps — matching the glyphs
 * already used in the support widget (client note 2026-09-24: sized down a
 * little from 24px).
 */
const base = { viewBox: "0 0 24 24", width: 20, height: 20, fill: "none", "aria-hidden": true } as const;
const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function PersonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.4" {...stroke} />
      <path d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5" {...stroke} />
    </svg>
  );
}

export function PhoneLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M5 4.5h3.2l1.4 4.2-2 1.8a11.5 11.5 0 0 0 5.9 5.9l1.8-2 4.2 1.4v3.2a1.5 1.5 0 0 1-1.6 1.5C10.4 20 4 13.6 3.5 6.1A1.5 1.5 0 0 1 5 4.5Z"
        {...stroke}
      />
    </svg>
  );
}

export function NoHireIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="8" width="16" height="11" rx="2" {...stroke} />
      <path d="M8.5 8V6.5A2.5 2.5 0 0 1 11 4h2a2.5 2.5 0 0 1 2.5 2.5V8M4 13h16" {...stroke} />
    </svg>
  );
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" {...stroke} />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" {...stroke} />
      <circle cx="12" cy="15" r="1.4" {...stroke} />
    </svg>
  );
}

export function CalendarFreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5.5" width="16" height="14" rx="2" {...stroke} />
      <path d="M4 10h16M8 3.5v4M16 3.5v4" {...stroke} />
      <path d="m9 15 2.2 2.2L15.5 13" {...stroke} />
    </svg>
  );
}

export function MailBellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="6" width="17" height="12" rx="2" {...stroke} />
      <path d="m4 7 8 6 8-6" {...stroke} />
      <circle cx="18.5" cy="6" r="3" fill="none" {...stroke} />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v5.5c0 4.2-2.9 7.2-7 9-4.1-1.8-7-4.8-7-9V6l7-2.5Z" {...stroke} />
      <path d="m9 12 2.2 2.2L15.5 10" {...stroke} />
    </svg>
  );
}

export function DoubleArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.5h13m0 0-3.5-3.5M17 8.5 13.5 12" {...stroke} />
      <path d="M20 15.5H7m0 0 3.5-3.5M7 15.5 10.5 19" {...stroke} />
    </svg>
  );
}

export function ExportArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M13 4.5h6.5V11M19.5 4.5 11 13" {...stroke} />
      <path d="M17.5 13.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V8a1.5 1.5 0 0 1 1.5-1.5h4.5" {...stroke} />
    </svg>
  );
}
