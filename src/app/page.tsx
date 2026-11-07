import type { Metadata } from "next";

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
import { siteMeta, workPillars } from "@/data/site";

const homeTitle = `${siteMeta.name} | Humanitarian Service in Pakistan`;
const homeSocialImage = "/media/home/hero-160th-free-medical-camp.jpg";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle
  },
  description: siteMeta.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: homeTitle,
    description: siteMeta.description,
    url: "/",
    siteName: siteMeta.name,
    images: [
      {
        url: homeSocialImage,
        alt: "People gathered at Save and Serve Humanity's 160th free medical camp."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteMeta.description,
    images: [homeSocialImage]
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteMeta.url}/#organization`,
  name: siteMeta.name,
  alternateName: siteMeta.shortName,
  url: siteMeta.url,
  logo: `${siteMeta.url}/brand/ssh-logo-transparent.png`,
  description: siteMeta.description,
  areaServed: {
    "@type": "Country",
    name: "Pakistan"
  },
  knowsAbout: workPillars
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c")
        }}
      />
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
