import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Stethoscope
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const healthMarkers = [
  {
    value: "160th",
    label: "free medical camp",
    detail:
      "The 2025 archive records SSH's 160th Free Medical Camp as a two-day outreach with more than 400 patients served.",
    icon: Stethoscope
  },
  {
    value: "155",
    label: "patients in one Kasur record",
    detail:
      "On June 10, 2023, a brick-kiln medical camp in Kasur focused on women and children and recorded 155 patients receiving care.",
    icon: MapPin
  },
  {
    value: "147th",
    label: "women-focused camp",
    detail:
      "A historical record identifies the 147th free medical camp on 22 August 2022 at Shalom Maternity Home, Youhanabad, Lahore.",
    icon: CalendarDays
  }
];

const healthForms = [
  "Free medical camps and medical outreach",
  "Basic screening in recorded camps",
  "Women-focused medical outreach",
  "Health awareness activity",
  "Eye-care activity and free-dispensary initiative, kept conservative until fuller records are supplied"
];

export function HealthHero() {
  return (
    <>
      <section
        aria-labelledby="health-title"
        className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Health work
            </p>
            <h1
              className="mt-4 max-w-[860px] font-display text-[clamp(3rem,5.8vw,5.7rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="health-title"
            >
              Healthcare where practical care moves closer to communities.
            </h1>
            <p className="mt-6 max-w-[780px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              Health is SSH&apos;s strongest currently documented body of work. The
              archive includes free medical camps, basic screening, women-focused
              outreach, health awareness activity, and medical outreach to
              communities with limited access to care.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog/160th-free-medical-camp">
                Read 160th Camp Story
              </ButtonLink>
              <ButtonLink href="/our-work" variant="secondary">
                Back to Our Work
              </ButtonLink>
            </div>
          </div>

          <div
            className="relative self-center overflow-hidden rounded-[32px] bg-[var(--ssh-blue-950)] p-4 text-white shadow-[0_34px_90px_rgba(7,27,47,0.22)] sm:p-5"
            data-motion-reveal
          >
            <div className="relative aspect-square overflow-hidden rounded-[26px] sm:aspect-[4/3]">
              <Image
                alt="Medical camp participants and volunteers gathered during SSH's 160th Free Medical Camp."
                className="object-cover"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 58vw, 860px"
                src="/media/blog/160th-free-medical-camp/cover.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.88)] via-[rgba(7,27,47,0.22)] to-transparent" />
              <div className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/22 bg-white/12 text-white backdrop-blur-sm sm:left-7 sm:top-7 sm:h-20 sm:w-20">
                <HeartPulse aria-hidden="true" className="h-7 w-7" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                  2025 archive record
                </p>
                <p className="mt-3 max-w-[620px] text-xl font-semibold leading-tight sm:text-3xl">
                  The 160th Free Medical Camp is a confirmed milestone for this
                  specific record, not a claim about SSH&apos;s current lifetime
                  total.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="health-overview-title"
        className="bg-white py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div data-motion-reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Confirmed health overview
              </p>
              <h2
                className="mt-4 max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
                id="health-overview-title"
              >
                The evidence is specific, so the page stays specific.
              </h2>
            </div>
            <p
              className="max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end"
              data-motion-reveal
            >
              These records show healthcare outreach across camps, screening,
              women-focused care, brick-kiln communities, and public health
              awareness. They do not create unsupported totals or medical outcome
              claims.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3" data-motion-reveal>
            {healthMarkers.map((marker) => {
              const Icon = marker.icon;

              return (
                <article
                  className="border-l-2 border-[var(--ssh-blue)] bg-[var(--ssh-warm-white)] p-6 shadow-[0_18px_50px_rgba(7,27,47,0.05)] sm:p-7"
                  key={marker.value}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="mt-7 font-metric text-[clamp(3.3rem,8vw,5.8rem)] font-semibold leading-none text-[var(--ssh-blue)]">
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

          <div className="mt-10 grid gap-8 rounded-[28px] bg-[var(--ssh-blue-50)] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10" data-motion-reveal>
            <div>
              <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-[0.14em]">
                  Guardrail
                </p>
              </div>
              <p className="mt-5 max-w-[620px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                Known numbered records prove a long-running medical-camp
                history, but the current lifetime camp total has not been
                supplied. The site will not turn partial archive records into a
                fake dashboard.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                Known forms of health work
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {healthForms.map((item) => (
                  <li
                    className="flex gap-3 text-sm leading-6 text-[var(--ssh-ink)] sm:text-base"
                    key={item}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href="/blog/brick-kiln-medical-camp-kasur-2023"
              >
                Read Kasur Medical Camp Story
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}