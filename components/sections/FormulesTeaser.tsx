import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { CtaButton } from "@/components/navigation/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils/cn";
import { HOME } from "@/lib/content/home";

export function FormulesTeaser() {
  const { formulesTeaser } = HOME;

  return (
    <Section>
      <SectionHeading eyebrow={formulesTeaser.eyebrow} title={formulesTeaser.title} />

      <Reveal className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
        {formulesTeaser.cards.map((card) => (
          <div
            key={card.name}
            className={cn(
              "flex h-full flex-col gap-6 p-8",
              card.featured ? "bg-ink text-paper md:-my-4 md:py-12" : "border border-line text-ink"
            )}
          >
            {card.featured && (
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/60">
                La plus choisie
              </span>
            )}
            <h3 className={cn("text-3xl font-semibold tracking-[-0.02em] md:text-4xl", card.featured ? "text-paper" : "text-ink")}>
              {card.name}
            </h3>
            <div>
              <p className={cn("text-2xl font-semibold tabular-nums", card.featured ? "text-paper" : "text-ink")}>
                {card.price}
              </p>
              {card.priceNote && (
                <p className={cn("mt-1 text-sm", card.featured ? "text-paper/60" : "text-gray")}>
                  {card.priceNote}
                </p>
              )}
            </div>
            <dl className="flex flex-col gap-3 text-sm">
              {[
                ["Pour qui", card.pourQui],
                ["Volume", card.volume],
                ["Suivi", card.suivi],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className={card.featured ? "text-paper/60" : "text-gray"}>{label}</dt>
                  <dd className={cn("text-right", card.featured ? "text-paper" : "text-ink")}>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-auto pt-4">
              <CtaButton
                href={card.cta.href}
                variant={card.featured ? "solid" : "outline"}
                tone={card.featured ? "dark" : "light"}
                className="w-full justify-center"
              >
                {card.cta.label}
              </CtaButton>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
