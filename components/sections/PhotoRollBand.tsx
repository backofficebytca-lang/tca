import { MarqueeBand } from "@/components/sections/MarqueeBand";

/**
 * The homepage's second section. TCA-Recommandations.pdf §1: the photo roll
 * ("bande de photos") is removed as decorative; the services marquee stays,
 * right under the hero.
 */
export function PhotoRollBand() {
  return (
    <section className="pt-10 md:pt-14">
      <MarqueeBand />
    </section>
  );
}
