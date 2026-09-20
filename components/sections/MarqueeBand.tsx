import { Marquee } from "@/components/motion/Marquee";
import { HOME } from "@/lib/content/home";

/**
 * The services named in the brief, looped as a single quiet row under the
 * photo roll — the place the reference puts its client-logo strip. Faded at
 * both edges, paused on hover, still under reduced motion.
 */
export function MarqueeBand() {
  const terms = HOME.marquee;

  return (
    <div className="mask-x pb-2 pt-10 md:pt-14">
      <Marquee duration={70} className="text-gray">
        {(copy) => (
          <ul className="flex shrink-0 items-center" aria-hidden={copy === 1 || undefined}>
            {terms.map((term) => (
              <li
                key={term}
                className="t-h3 flex items-center whitespace-nowrap pr-10 text-ink/55 transition-colors duration-300 hover:text-ink md:pr-14"
              >
                {term}
                <span aria-hidden className="ml-10 h-1 w-1 rounded-full bg-ink/25 md:ml-14" />
              </li>
            ))}
          </ul>
        )}
      </Marquee>
    </div>
  );
}
