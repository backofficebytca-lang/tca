/** Shared WhatsApp glyph, used wherever the WhatsApp number/link appears. */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 8.4c.2-.5.4-.5.7-.5h.4c.2 0 .4 0 .5.4.2.5.6 1.5.6 1.6.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1.2-.2.7-.8.9-1.1.2-.2.3-.2.6-.1.2.1 1.5.7 1.8.9.3.1.4.2.5.3.1.2.1.9-.2 1.4-.3.6-1.5 1.1-2 1.2-.6.1-1.1.1-2.5-.5-2.1-.9-3.5-2.9-3.6-3.1-.1-.1-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}
