const BRAND = "TCA Backoffice";

/** Wraps every occurrence of the site name in a paragraph with <strong>. */
export function BoldBrand({ text }: { text: string }) {
  const parts = text.split(BRAND);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <strong className="font-bold">{BRAND}</strong>}
        </span>
      ))}
    </>
  );
}
