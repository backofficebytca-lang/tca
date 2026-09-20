import { PhotoCarousel } from "@/components/ui/PhotoCarousel";
import { MarqueeBand } from "@/components/sections/MarqueeBand";
import { IMAGES } from "@/lib/constants/images";

/** Ten colour photographs for the roll, varied in subject and light. */
const ROLL = [
  IMAGES.parisGolden,
  IMAGES.deskSunlit,
  IMAGES.facadeOrange,
  IMAGES.handPen,
  IMAGES.glassCorridor,
  IMAGES.envelopes,
  IMAGES.parisRoof,
  IMAGES.deskMug,
  IMAGES.archiveShelves,
  IMAGES.parisBalconies,
];

/**
 * The homepage's second section, unchanged from the approved version: the
 * drifting roll of rounded portrait photographs and the services strip.
 */
export function PhotoRollBand() {
  return (
    <section className="pt-8 md:pt-12">
      <div className="fade-up" style={{ ["--d" as string]: "1000ms" }}>
        <PhotoCarousel photos={ROLL} />
      </div>
      <MarqueeBand />
    </section>
  );
}
