import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { StackedCards } from "@/components/sections/StackedCards";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";

const PHOTOS = [IMAGES.deskSunlit, IMAGES.envelopes, IMAGES.handPen];

/** The three reminder steps as the reference's stacked cards. */
export function RelancesStack() {
  const { relances } = HOME;

  return (
    <section className="pb-8 pt-4 md:pt-10">
      <Container size="display">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{relances.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className="t-h1 mt-5">{relances.title}</h2>
            </Reveal>
            <p className="t-lead mt-4 max-w-xl text-gray">{relances.lede}</p>
          </div>
          <ArrowLink href="/formules" className="md:mb-2">
            Découvrir nos formules
          </ArrowLink>
        </div>

        <div className="mt-10 md:mt-14">
          <StackedCards
            items={relances.steps.map((step, i) => ({ ...step, image: PHOTOS[i] }))}
          />
        </div>
      </Container>
    </section>
  );
}
