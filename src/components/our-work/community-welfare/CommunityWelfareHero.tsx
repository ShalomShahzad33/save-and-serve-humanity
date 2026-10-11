import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Landmark,
  MapPin,
  Megaphone,
  PackageCheck,
  ShieldCheck
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const communityMarkers = [
  {
    value: "COVID-19",
    label: "ration distribution",
    detail:
      "SSH's community welfare archive records food and household support during the COVID-19 lockdown period.",
    icon: PackageCheck
  },
  {
    value: "Laweray",
    label: "village church support",
    detail:
      "A documented project in Laweray Village, Hafizabad supported a Christian community's worship space.",
    icon: Landmark
  },
  {
    value: "2012",
    label: "Karachi awareness walk",
    detail:
      "SSH organized a mouth cancer awareness walk focused on prevention, early detection, and public education.",
    icon: Megaphone
  }
];

const communityWorkForms = [
  "Community support and outreach",
  "Ration and household support during crisis",
  "Walks, seminars, and awareness activities",
  "Church-related and building support",
  "Faith-inspired practical service"
];

const communityStories = [
  {
    title: "Ration Distribution During COVID-19",
    meta: "Community Welfare / COVID-19",
    description:
      "A record of SSH distributing food and household essentials during the lockdown period.",
    href: "/blog/covid-19-ration-distribution",
    image: "/media/blog/covid-19-ration-distribution/ration-01.png",
    alt: "Volunteers handling ration supplies during COVID-19 relief work."
  },
  {
    title: "Building Faith in Laweray Village",
    meta: "Laweray Village, Hafizabad",
    description:
      "A specific church-related community project connected to safer and more dignified worship space.",
    href: "/blog/church-construction-laweray-hafizabad",
    image: "/media/blog/church-construction-laweray-hafizabad/completed-church.png",
    alt: "Completed church building connected to SSH's Laweray Village story."
  },
  {
    title: "Mouth Cancer Awareness Walk in Karachi",
    meta: "Karachi / 2012",
    description:
      "A public awareness record focused on oral cancer risks, prevention, and early detection.",
    href: "/blog/mouth-cancer-awareness-walk-karachi-2012",
    image: "/media/blog/mouth-cancer-awareness-walk-karachi-2012/walk-01.png",
    alt: "Participants in SSH's mouth cancer awareness walk in Karachi."
  }
];

export function CommunityWelfareHero() {
  return (
    <>
      <section
        aria-labelledby="community-welfare-title"
        className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Community Welfare
            </p>
            <h1
              className="mt-4 max-w-[880px] font-display text-[clamp(3.25rem,7vw,6.9rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="community-welfare-title"
            >
              Practical service in the places where community life happens.
            </h1>
            <p className="mt-6 max-w-[780px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              SSH&apos;s community welfare archive includes crisis support,
              outreach, awareness activity, and church-related service. This
              page keeps the broad pillar grounded in specific published
              records.
            </p>
            <p className="mt-5 max-w-[740px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
              The current evidence includes ration distribution during the
              COVID-19 lockdown period, support connected to Laweray Village in
              Hafizabad, and a 2012 mouth cancer awareness walk in Karachi.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog/covid-19-ration-distribution">
                Read Community Story
              </ButtonLink>
              <ButtonLink href="/our-work" variant="secondary">
                Back to Our Work
              </ButtonLink>
            </div>
          </div>

          <figure
            className="relative overflow-hidden rounded-[32px] bg-[var(--ssh-blue-950)] p-4 text-white shadow-[0_34px_90px_rgba(7,27,47,0.22)] sm:p-5 lg:min-h-[650px]"
            data-motion-reveal
          >
            <div className="relative h-full min-h-[560px] overflow-hidden rounded-[26px]">
              <Image
                alt="Ration supplies prepared for distribution during SSH's COVID-19 support work."
                className="object-cover"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 58vw, 860px"
                src="/media/blog/covid-19-ration-distribution/cover.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.88)] via-[rgba(7,27,47,0.24)] to-transparent" />
              <div className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/22 bg-white/12 text-white backdrop-blur-sm sm:left-7 sm:top-7 sm:h-20 sm:w-20">
                <HeartHandshake aria-hidden="true" className="h-7 w-7" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                  Community support archive
                </p>
                <p className="mt-3 max-w-[650px] text-2xl font-semibold leading-tight sm:text-3xl">
                  During COVID-19, SSH&apos;s archive records ration support
                  with flour, rice, lentils, oil, sugar, tea, milk, baby food,
                  sanitizers, and masks.
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section
        aria-labelledby="community-welfare-overview-title"
        className="bg-white py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div data-motion-reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Documented community records
              </p>
              <h2
                className="mt-4 max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
                id="community-welfare-overview-title"
              >
                The pillar is broad, but the evidence stays concrete.
              </h2>
            </div>
            <p
              className="max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end"
              data-motion-reveal
            >
              Community welfare can include many kinds of service, so this page
              avoids sweeping totals. It highlights selected records that already
              exist in the SSH story archive.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3" data-motion-reveal>
            {communityMarkers.map((marker) => {
              const Icon = marker.icon;

              return (
                <article
                  className="border-l-2 border-[var(--ssh-blue)] bg-[var(--ssh-warm-white)] p-6 shadow-[0_18px_50px_rgba(7,27,47,0.05)] sm:p-7"
                  key={marker.label}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="mt-7 font-metric text-[clamp(3rem,7vw,5rem)] font-semibold leading-none text-[var(--ssh-blue)]">
                    {marker.value}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)]">
                    {marker.label}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                    {marker.detail}
                  </p>
                </article>
              );
            })}
          </div>

          <div
            className="mt-10 grid gap-8 rounded-[28px] bg-[var(--ssh-blue-50)] p-6 sm:p-8 lg:grid-cols-[0.86fr_1.14fr] lg:p-10"
            data-motion-reveal
          >
            <div>
              <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
                <MapPin aria-hidden="true" className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-[0.14em]">
                  Known forms of community work
                </p>
              </div>
              <ul className="mt-6 grid gap-3">
                {communityWorkForms.map((item) => (
                  <li
                    className="flex gap-3 text-sm leading-6 text-[var(--ssh-ink)] sm:text-base"
                    key={item}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[22px] bg-white p-5">
                <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                  <p className="text-sm font-bold uppercase tracking-[0.14em]">
                    Guardrail
                  </p>
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                  The current archive does not supply a complete project list,
                  footprint, beneficiary total, budget, or outcome report for
                  community welfare. Those details should be added only when SSH
                  provides the records.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {communityStories.map((story) => (
                <Link
                  className="group grid gap-4 rounded-[24px] bg-white p-4 shadow-[0_18px_50px_rgba(7,27,47,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(7,27,47,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] sm:grid-cols-[180px_1fr] sm:p-5"
                  href={story.href}
                  key={story.href}
                >
                  <div className="relative min-h-[220px] overflow-hidden rounded-[18px] bg-[var(--ssh-blue-50)] sm:min-h-[170px]">
                    <Image
                      alt={story.alt}
                      className="object-cover transition duration-300 group-hover:scale-[1.035]"
                      fill
                      quality={95}
                      sizes="(max-width: 640px) 100vw, 220px"
                      src={story.image}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-metric text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                      {story.meta}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-[var(--ssh-ink)] sm:text-3xl">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--ssh-slate)] sm:text-base sm:leading-7">
                      {story.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)]">
                      Read the story
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="mt-10 overflow-hidden rounded-[28px] bg-[var(--ssh-blue-950)] p-6 text-white sm:p-8 lg:p-10"
            data-motion-reveal
          >
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]">
                  Faith and practical service
                </p>
                <h2 className="mt-4 max-w-[620px] font-display text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-none">
                  Service is shown through ordinary needs, not only major events.
                </h2>
              </div>
              <p className="max-w-[760px] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                The community records include Scripture references such as
                Matthew 25:35 and Matthew 18:20, but the page keeps faith tied
                to documented action: food support, safer community spaces, and
                public awareness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

