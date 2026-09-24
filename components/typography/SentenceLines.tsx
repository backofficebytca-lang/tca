import { NoBreak } from "@/components/typography/NoBreak";

/**
 * Client rule: a heading made of several sentences shows each sentence on
 * its own line (never runs two sentences together). Splits after a period
 * followed by whitespace, so "Sept raisons. Sept engagements." becomes two
 * lines; a single-sentence title is unaffected. Each line still goes through
 * NoBreak, so a compound like "Sur-mesure" never breaks at the hyphen.
 */
const SPLIT = /(?<=\.)\s+(?=\S)/;

export function SentenceLines({ text }: { text: string }) {
  const lines = text.split(SPLIT).filter(Boolean);
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block">
          <NoBreak>{line}</NoBreak>
        </span>
      ))}
    </>
  );
}
