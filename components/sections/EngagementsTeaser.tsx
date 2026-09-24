import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SentenceLines } from "@/components/typography/SentenceLines";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import {
  PersonIcon,
  PhoneLineIcon,
  NoHireIcon,
  LockIcon,
  CalendarFreeIcon,
  MailBellIcon,
} from "@/components/ui/EngagementIcons";
import { HOME } from "@/lib/content/home";

const ICONS = [PersonIcon, PhoneLineIcon, NoHireIcon, LockIcon, CalendarFreeIcon, MailBellIcon];

/**
 * The six commitments as a 3×2 grid of icon cards. TCA-Recommandations.pdf
 * §1: the six photographs (decorative, unrelated to the commitments) are
 * replaced with one icon per card, lighter and clearer at a glance.
 */
export function EngagementsTeaser() {
  const { engagements } = HOME;

  return (
    <section className="pb-4 pt-2 md:pt-6">
      <Container size="display">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>{engagements.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className="t-h1 mt-5">
                <SentenceLines text={engagements.title} />
              </h2>
            </Reveal>
          </div>
          <ArrowLink href={engagements.cta.href} className="md:mb-2">
            {engagements.cta.label}
          </ArrowLink>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {engagements.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <li key={item.title}>
                <Reveal delay={(i % 3) * 90} className="h-full">
                  <article className="flex h-full flex-col gap-4 rounded-xl bg-mist p-6 md:p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink">
                      <Icon />
                    </span>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="t-h3">{item.title}</h3>
                      <span className="t-small shrink-0 text-gray">{item.keyword}</span>
                    </div>
                    <p className="t-body text-gray">{item.text}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
