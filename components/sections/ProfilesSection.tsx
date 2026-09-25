import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SentenceLines } from "@/components/typography/SentenceLines";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/lib/content/home";
import { IMAGES } from "@/lib/constants/images";

const PHOTOS = [IMAGES.artisanAtelier, IMAGES.tpeEquipeLivraison, IMAGES.pmeBureauOpenSpace];

/**
 * Centered introduction, then the three profiles as soft grey cards with a
 * photograph each. TCA-Recommandations.pdf §1: the large scaling photograph
 * and the counters bar above this are removed.
 */
export function ProfilesSection() {
  const { profiles } = HOME;

  return (
    <section className="section-y">
      <Container size="display" className="flex flex-col gap-14 md:gap-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Reveal>
            <h2 className="t-h1">
              <SentenceLines text={profiles.title} />
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-lead max-w-xl text-gray">{profiles.lede}</p>
          </Reveal>
        </div>

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
