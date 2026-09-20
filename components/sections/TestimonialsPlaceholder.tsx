import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/lib/content/home";

/**
 * Client feedback is not published yet, so this is a single quiet card that
 * says so — nothing is invented. Same soft grey surface as the rest.
 */
export function TestimonialsPlaceholder() {
  const { testimonials } = HOME;

  return (
    <section className="section-y">
      <Container size="display">
        <Reveal className="flex flex-col items-center gap-5 rounded-[18px] bg-mist px-6 py-16 text-center md:py-24">
          <Image src="/brand/tca-icon-black.png" alt="" width={44} height={44} className="h-11 w-11" />
          <h2 className="t-h1">{testimonials.title}</h2>
          <p className="t-lead text-gray">{testimonials.lede}</p>
        </Reveal>
      </Container>
    </section>
  );
}
