import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { PhotoRollBand } from "@/components/sections/PhotoRollBand";
import { ProfilesSection } from "@/components/sections/ProfilesSection";
import { RelancesStack } from "@/components/sections/RelancesStack";
import { FormulesTeaser } from "@/components/sections/FormulesTeaser";
import { EngagementsTeaser } from "@/components/sections/EngagementsTeaser";
import { TestimonialsPlaceholder } from "@/components/sections/TestimonialsPlaceholder";
import { CtaBand } from "@/components/sections/CtaBand";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: SITE.metaTitle,
  description: SITE.metaDescription,
  alternates: { canonical: "/" },
};

/**
 * Flow (after the client's reference): photographic cover → the four-figure
 * stats bar → the services marquee → centred intro and three profile cards →
 * stacked reminder steps → pricing cards → commitments as icon cards →
 * feedback card → centred call to action.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <PhotoRollBand />
      <ProfilesSection />
      <RelancesStack />
      <FormulesTeaser />
      <EngagementsTeaser />
      <TestimonialsPlaceholder />
      <CtaBand />
    </>
  );
}
