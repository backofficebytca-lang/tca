import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/lib/content/home";

/**
 * The four-figure stats bar (ligne directe, suivi des règlements, abonnement,
 * embauche requise). Restored per client request, directly under the hero and
 * before the services marquee — without the photograph that used to sit
 * beside it.
 */
export function StatsBand() {
  const { counters } = HOME.hero;

  return (
    <section className="pb-2 pt-2 md:pb-6">
      <Container size="display">
        <Reveal>
          <dl className="grid grid-cols-2 divide-x divide-y divide-ink/10 overflow-hidden rounded-[18px] bg-mist md:grid-cols-4 md:divide-y-0">
            {counters.map((counter) => (
              <div key={counter.label} className="flex flex-col gap-2 px-5 py-7 md:px-8 md:py-9">
                <dt className="t-small text-gray">{counter.label}</dt>
                <dd className="t-stat">{counter.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
