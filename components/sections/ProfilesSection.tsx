import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScaleOnScroll } from "@/components/motion/ScaleOnScroll";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";

const PHOTOS = [IMAGES.deskMug, IMAGES.deskSunlit, IMAGES.glassCorridor];

/**
 * Centered introduction, a large photograph that grows as it scrolls into
 * view, the four counters, then the three profiles as soft grey cards with a
 * photograph each — the reference's "We connect the dots" → stats → cards flow.
 */
export function ProfilesSection() {
  const { profiles, hero } = HOME;

  return (
    <section className="section-y">
      <Container size="display" className="flex flex-col gap-14 md:gap-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Reveal>
            <h2 className="t-h1">{profiles.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-lead max-w-xl text-gray">{profiles.lede}</p>
          </Reveal>
        </div>

        <ScaleOnScroll>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-mist sm:aspect-[16/9]">
            <Image
              src={IMAGES.parisStreet.src}
              alt={IMAGES.parisStreet.alt}
              fill
              sizes="(min-width: 1520px) 1440px, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 60%" }}
            />
          </div>
        </ScaleOnScroll>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {hero.counters.map((counter, i) => (
            <Reveal key={counter.label} delay={i * 80} className="flex flex-col-reverse gap-3 md:pr-6">
              <dt className="t-small max-w-[16rem] text-gray">{counter.label}</dt>
              <dd className="t-stat">{counter.value}</dd>
            </Reveal>
          ))}
        </dl>

        <ul className="grid gap-4 md:grid-cols-3">
          {profiles.items.map((item, i) => (
            <li key={item.n}>
              <Reveal delay={i * 100} className="h-full">
                <article className="flex h-full flex-col rounded-xl bg-mist p-3">
                  <div className="zoom relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={PHOTOS[i].src}
                      alt={PHOTOS[i].alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 px-3 pb-5 pt-6 md:px-4">
                    <Eyebrow on="card">{item.n}</Eyebrow>
                    <h3 className="t-h3">
                      <span className="sr-only">{item.n}. </span>
                      {item.name}
                    </h3>
                    <p className="t-body text-gray">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
