import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { DotIndex } from "@/components/typography/DotIndex";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/lib/content/home";

export function AudienceSection() {
  const { audience } = HOME;

  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <SectionHeading eyebrow={audience.eyebrow} title={audience.title} lede={audience.lede} />
        </div>

        <Reveal className="md:col-span-7">
          <ul className="flex flex-col border-t border-line">
            {audience.profiles.map((profile, i) => (
              <li
                key={profile.name}
                className="flex flex-col gap-3 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <DotIndex n={i + 1} className="shrink-0" />
                <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-1 sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="text-lg tracking-[-0.01em] text-ink sm:w-56 sm:shrink-0">
                    {profile.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray sm:max-w-sm">{profile.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
