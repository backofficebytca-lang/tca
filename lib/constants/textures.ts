/**
 * Subtle film-grain overlay (SVG feTurbulence noise, data URI) — the one
 * signature texture detail that keeps a full-bleed photograph from reading
 * as flat stock imagery. Shared across every section that layers it over a
 * photograph, so the grain stays identical (and easy to tune once) site-wide.
 */
export const GRAIN_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
