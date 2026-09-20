import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
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
 * Flow (after the client's reference): cover with a drifting photo roll and
 * a services strip → centred intro, large growing photo, counters, three
 * profile cards → stacked reminder steps → pricing cards → commitments in a
 * two-column photo grid → feedback card → centred call to action.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfilesSection />
      <RelancesStack />
      <FormulesTeaser />
      <EngagementsTeaser />
      <TestimonialsPlaceholder />
      <CtaBand />
    </>
  );
}
