import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  HeartPulse,
  MapPin,
  ShieldCheck,
  UsersRound
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const guardrails = [
  "No current lifetime medical-camp total is claimed from partial records.",
  "No total beneficiaries, volunteers, donors, or financial impact numbers are estimated.",
  "Known places are examples tied to specific records, not SSH's full geographic footprint.",
  "Event numbers and patient counts are attached only to the records that supplied them."
];

const evidenceHighlights = [
  {
    marker: "160th",
    label: "Free Medical Camp",
    meta: "2025 archive record",
    href: "/blog/160th-free-medical-camp",
    description:
      "The confirmed 2025 archive identifies SSH's 160th Free Medical Camp as a two-day outreach with more than 400 patients served.",
    icon: HeartPulse
  },
  {
    marker: "155",
    label: "Patients served in one Kasur camp",
    meta: "June 10, 2023",
    href: "/blog/brick-kiln-medical-camp-kasur-2023",
    description:
      "A brick-kiln medical camp in Kasur focused on women and children and records 155 patients receiving care, nutritional supplements, and hygiene kits.",
    icon: UsersRound
  },
  {
    marker: "2025",
    label: "Youth Seminar",
    meta: "August 6, 2025",
    href: "/blog/ssh-youth-seminar-2025",
    description:
      "The youth seminar at Renewal Center, Rohinala, Youhanabad centered on faith, responsibility, leadership, and the message: From Prayer to Power, This is YOUR Hour.",
    icon: GraduationCap
  }
];

const timelineRecords = [
  {
    marker: "2012",
    title: "Mouth cancer awareness walk in Karachi",
    meta: "Health awareness",
    href: "/blog/mouth-cancer-awareness-walk-karachi-2012",
    description:
      "SSH organized an awareness walk focused on oral cancer prevention, early detection, tobacco use, betel nut/chalia, and oral hygiene."
  },
  {
    marker: "2022",
    title: "147th women-focused free medical camp",
    meta: "22 August 2022",
    description:
      "A historical record identifies SSH's 147th free medical camp at Shalom Maternity Home in Youhanabad, Lahore. This remains a dated milestone, not a current total."
  },
  {
    marker: "2023",
    title: "Brick-kiln medical camp in Kasur",
    meta: "June 10, 2023",
    href: "/blog/brick-kiln-medical-camp-kasur-2023",
    description:
      "The camp focused on women and children at a brick kiln in Kasur, with a recorded medical team and 155 patients receiving care."
  },
  {
    marker: "2025",
    title: "160th Free Medical Camp",
    meta: "Published March 16, 2025",
    href: "/blog/160th-free-medical-camp",
    description:
      "The record confirms a two-day medical outreach in collaboration with Chief Cornerstone Fellow Church Ministries, with more than 400 patients served."
  },
  {
    marker: "2025",
    title: "Youth Seminar in Youhanabad",
    meta: "August 6, 2025",
    href: "/blog/ssh-youth-seminar-2025",
    description:
      "A youth-development record centered on faith, responsibility, leadership, and action at Renewal Center, Rohinala, Youhanabad."
  }
];

const storyRecords = [
  {
    title: "160th Free Medical Camp",
    category: "Health",
    href: "/blog/160th-free-medical-camp",
    image: "/media/blog/160th-free-medical-camp/cover.png",
    alt: "Medical camp participants and volunteers gathered during SSH's 160th Free Medical Camp.",
    detail: "Two-day outreach; 400+ patients in this specific record."
  },
  {
    title: "Youth Seminar 2025",
    category: "Youth",
    href: "/blog/ssh-youth-seminar-2025",
    image: "/media/blog/ssh-youth-seminar-2025/cover.JPG",
    alt: "Participants gathered during Save and Serve Humanity's 2025 youth seminar in Youhanabad.",
    detail: "Faith, responsibility, leadership, and youth development."
  },
  {
    title: "COVID-19 Ration Distribution",
    category: "Community Welfare",
    href: "/blog/covid-19-ration-distribution",
    image: "/media/blog/covid-19-ration-distribution/cover.png",
    alt: "Ration supplies prepared for distribution during SSH's COVID-19 support work.",
    detail: "Food and household essentials during the lockdown period."
  }
];

const places = [
  {
    name: "Youhanabad, Lahore",
    detail:
      "Named in the 147th women-focused medical camp record and the 2025 youth seminar context."
  },
  {
    name: "District Kasur",
    detail:
      "Named through brick-kiln medical outreach, including the June 10, 2023 camp record."
  },
  {
    name: "Karachi",
    detail:
      "Named through the 2012 mouth cancer awareness walk record."
  },
  {
    name: "Laweray Village, Hafizabad",
    detail:
      "Named through the church construction and community welfare story."
  }
];

export function ImpactEvidence() {
  return (
    <>
      <section
        aria-labelledby="impact-title"
        className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Impact evidence
            </p>
            <h1
              className="mt-4 max-w-[860px] font-display text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="impact-title"
            >
              Impact shown through records, not inflated totals.
            </h1>
            <p className="mt-6 max-w-[780px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              SSH&apos;s impact page brings together confirmed medical, youth,
              awareness, and community welfare records. Each number is tied to a
              specific source story, date, or event so the page can grow without
              inventing organization-wide statistics.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog">Explore Stories</ButtonLink>
              <ButtonLink href="/gallery" variant="secondary">
                View Gallery
              </ButtonLink>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[32px] bg-[var(--ssh-blue-950)] p-4 text-white shadow-[0_34px_90px_rgba(7,27,47,0.22)] sm:p-5 lg:min-h-[640px]"
            data-motion-reveal
          >
            <div className="relative h-full min-h-[560px] overflow-hidden rounded-[26px]">
              <Image
                alt="Medical camp participants and volunteers gathered during SSH's 160th Free Medical Camp."
                className="object-cover"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 58vw, 860px"
                src="/media/blog/160th-free-medical-camp/cover.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.9)] via-[rgba(7,27,47,0.2)] to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                Confirmed record
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-metric text-[clamp(5rem,15vw,11rem)] font-semibold leading-none text-[var(--ssh-warm-white)]">
                  160th
                </p>
                <p className="mt-3 max-w-[640px] text-2xl font-semibold leading-tight sm:text-3xl">
                  By the 2025 archive record, SSH&apos;s numbered free medical camp
                  program had reached its 160th camp.
                </p>
                <p className="mt-4 max-w-[620px] border-l border-[rgba(216,166,106,0.68)] pl-5 text-sm leading-6 text-white/76 sm:text-base sm:leading-7">
                  This is a confirmed milestone for that record, not a claim
                  that SSH&apos;s current lifetime total is exactly 160.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="impact-highlights-title"
        className="bg-white py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div data-motion-reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Confirmed highlights
              </p>
              <h2
                className="mt-4 max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
                id="impact-highlights-title"
              >
                Numbers only appear where the record supports them.
              </h2>
            </div>
            <p
              className="max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end"
              data-motion-reveal
            >
              These highlights are not lifetime totals. They are evidence points
              connected to specific SSH activities already published in the
              site archive.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {evidenceHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="group border-l-2 border-[var(--ssh-blue)] bg-[var(--ssh-warm-white)] p-6 shadow-[0_18px_50px_rgba(7,27,47,0.05)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_24px_64px_rgba(7,27,47,0.08)] sm:p-7"
                  data-motion-reveal
                  key={item.label}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="mt-7 font-metric text-[clamp(3.3rem,8vw,5.8rem)] font-semibold leading-none text-[var(--ssh-blue)]">
                    {item.marker}
                  </p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                    {item.meta}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                    {item.description}
                  </p>
                  <Link
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                    href={item.href}
                  >
                    Read record
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="impact-milestones-title"
        className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:px-12">
          <aside className="lg:sticky lg:top-28 lg:self-start" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Timeline records
            </p>
            <h2
              className="mt-4 max-w-[620px] font-display text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.96] text-[var(--ssh-ink)]"
              id="impact-milestones-title"
            >
              Evidence before totals.
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-[var(--ssh-slate)]">
              A timeline can show continuity without pretending the archive is a
              complete annual report. Each item stays attached to its known date
              or historical marker.
            </p>

            <div className="mt-9 border-y border-[var(--ssh-border)] py-6">
              <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-[0.14em]">
                  Publication guardrails
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {guardrails.map((item) => (
                  <li
                    className="flex gap-3 text-sm leading-6 text-[var(--ssh-slate)]"
                    key={item}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <ol className="relative space-y-5 before:absolute before:left-8 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--ssh-border)] sm:before:left-10">
            {timelineRecords.map((record) => (
              <li
                className="relative grid gap-4 rounded-[24px] border border-[var(--ssh-border)] bg-white p-5 sm:grid-cols-[80px_minmax(0,1fr)] sm:p-6"
                data-motion-timeline-item
                key={`${record.marker}-${record.title}`}
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(1,69,142,0.18)] bg-[var(--ssh-warm-white)] font-metric text-lg font-semibold text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.08)] sm:h-20 sm:w-20 sm:text-xl">
                  {record.marker}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays aria-hidden="true" className="h-4 w-4" />
                      {record.meta}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] sm:text-4xl">
                    {record.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                    {record.description}
                  </p>
                  {record.href ? (
                    <Link
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                      href={record.href}
                    >
                      Open story
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="impact-stories-title"
        className="bg-white py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 border-b border-[var(--ssh-border)] pb-8 sm:flex-row sm:items-end sm:justify-between" data-motion-reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Stories behind the evidence
              </p>
              <h2
                className="mt-3 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
                id="impact-stories-title"
              >
                Impact is easier to trust when the story is visible.
              </h2>
            </div>
            <ButtonLink href="/blog" variant="secondary">
              Explore All Stories
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {storyRecords.map((story) => (
              <article
                className="group overflow-hidden rounded-[24px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] shadow-[0_18px_50px_rgba(7,27,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(7,27,47,0.1)]"
                data-motion-reveal
                key={story.href}
              >
                <Link
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                  href={story.href}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ssh-blue-50)]">
                    <Image
                      alt={story.alt}
                      className="object-cover transition duration-500 group-hover:scale-[1.035]"
                      fill
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      src={story.image}
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                      {story.category}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                      {story.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                      {story.detail}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)]">
                      Read story
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="impact-places-title"
        className="bg-[var(--ssh-blue-50)] py-20 lg:py-24"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Known places in current records
            </p>
            <h2
              className="mt-4 max-w-[660px] font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
              id="impact-places-title"
            >
              Places named because the records name them.
            </h2>
            <p className="mt-5 max-w-[620px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
              This is not a complete footprint map. It is a list of locations
              currently supported by published or historical SSH records.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-motion-reveal>
            {places.map((place, index) => (
              <div
                className="border-l-2 bg-white p-6 shadow-[0_16px_42px_rgba(7,27,47,0.05)]"
                key={place.name}
                style={{ borderColor: index % 2 === 0 ? "var(--ssh-blue)" : "var(--ssh-orange)" }}
              >
                <MapPin aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                <h3 className="mt-5 text-2xl font-semibold text-[var(--ssh-ink)]">
                  {place.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--ssh-slate)]">
                  {place.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}