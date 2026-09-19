import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { GRAIN_TEXTURE } from "@/lib/constants/textures";

/**
 * Not another full-bleed strip — a right-bled asymmetric panel with the
 * section's own ink ground standing as deliberate negative space on the
 * left, so it reads as a considered break in the page's rhythm rather than
 * a photo dropped in edge to edge. Reused as-is wherever another page needs
 * the same beat.
 */
export function EditorialBreak({ src, alt }: { src: string; alt: string }) {
  return (
    <Reveal
      as="section"
      data-header-surface="dark"
      className="relative h-[52svh] w-full min-h-[320px] overflow-hidden bg-ink md:h-[64svh]"
    >
      <div className="absolute inset-y-0 right-0 w-[85%] sm:w-[78%] lg:w-[62%]">
        <ParallaxImage src={src} alt={alt} strength={10} />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_TEXTURE }}
        />
      </div>
    </Reveal>
  );
}
