/**
 * Keeps hyphenated compound labels on one line ("rendez-vous", "Sur-mesure")
 * so a narrow column never breaks them at the hyphen and strands half a word.
 * Only these two labels are handled; longer compounds are left free to wrap
 * so nothing can overflow a 320px screen.
 */
const KEEP_TOGETHER = /(rendez-vous|Sur-mesure)/gi;

export function NoBreak({ children }: { children: React.ReactNode }) {
  if (typeof children !== "string") return <>{children}</>;

  return (
    <>
      {children.split(KEEP_TOGETHER).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="whitespace-nowrap">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
