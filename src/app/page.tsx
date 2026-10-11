import { HomeHero } from "@/components/home/HomeHero";
import { HomeIdentity } from "@/components/home/HomeIdentity";
import { HomeLegacy } from "@/components/home/HomeLegacy";
import { HomeWorkPillars } from "@/components/home/HomeWorkPillars";
import { HomeHealthMilestone } from "@/components/home/HomeHealthMilestone";
import { HomeFeaturedStory } from "@/components/home/HomeFeaturedStory";
import { HomeYouthHighlight } from "@/components/home/HomeYouthHighlight";
import { HomeArchiveMoment } from "@/components/home/HomeArchiveMoment";
import { HomeFaithService } from "@/components/home/HomeFaithService";
import { HomeGetInvolved } from "@/components/home/HomeGetInvolved";
import { HomeLatestStories } from "@/components/home/HomeLatestStories";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeScrollMotion } from "@/components/motion/HomeScrollMotion";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIdentity />
      <HomeLegacy />
      <HomeWorkPillars />
      <HomeHealthMilestone />
      <HomeFeaturedStory />
      <HomeYouthHighlight />
      <HomeArchiveMoment />
      <HomeFaithService />
      <HomeGetInvolved />
      <HomeLatestStories />
      <HomeFinalCta />
      <HomeScrollMotion />
    </>
  );
}