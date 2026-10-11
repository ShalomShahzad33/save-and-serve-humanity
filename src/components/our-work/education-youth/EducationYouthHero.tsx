import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const seminarMarkers = [
  {
    value: "6 Aug",
    label: "2025 seminar date",
    detail:
      "The published youth record places the seminar on 6 August 2025.",
    icon: CalendarDays
  },
  {
    value: "Renewal",
    label: "Center, Rohinala",
    detail:
      "The venue is recorded as Renewal Center, Rohinala, Youhanabad, with Lahore as the city context.",
    icon: UsersRound
  },
  {
    value: "Prayer",
    label: "to practical action",
    detail:
      "The seminar theme connected faith, responsibility, leadership, and service to Pakistan's future.",
    icon: Sparkles
  }
];

const youthWorkForms = [
  "Youth seminars",
  "Educational campaigns and initiatives",
  "Awareness programs",
  "Youth empowerment and development",
  "Learning-oriented events"
];

const seminarImages = [
  {
    src: "/media/blog/ssh-youth-seminar-2025/1.JPG",
    alt: "Young people gathered during the SSH Youth Seminar 2025."
  },
  {
    src: "/media/blog/ssh-youth-seminar-2025/4.JPG",
    alt: "A speaker addressing participants at the SSH Youth Seminar 2025."
  },
  {
    src: "/media/blog/ssh-youth-seminar-2025/6.JPG",
    alt: "Participants seated during the SSH Youth Seminar 2025."
  }
];

export function EducationYouthHero() {
  return (
    <>
      <section
        aria-labelledby="education-youth-title"
        className="overflow-hidden bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]">
              Education & Youth
            </p>
            <h1
              className="mt-4 max-w-[860px] font-display text-[clamp(3.25rem,7vw,6.9rem)] font-semibold leading-[0.94] text-white"
              id="education-youth-title"
            >
              Young people, faith, and the courage to act.
            </h1>
            <p className="mt-6 max-w-[780px] text-lg leading-8 text-white/78 sm:text-xl">
              SSH&apos;s youth and education work includes seminars, awareness
              programs, learning-oriented events, and youth development. This
              page begins with the strongest current record: the 2025 Youth
              Seminar in Youhanabad.
            </p>
            <p className="mt-5 max-w-[740px] text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              The seminar was held on 6 August 2025 at Renewal Center, Rohinala,
              Youhanabad, with the theme language moving from prayer toward
              responsibility, leadership, and practical service.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog/ssh-youth-seminar-2025">
                Read Youth Seminar Story
              </ButtonLink>
              <ButtonLink href="/our-work" variant="secondary">
                Back to Our Work
              </ButtonLink>
            </div>
          </div>

          <figure
            className="relative overflow-hidden rounded-[32px] bg-white/8 p-4 shadow-[0_34px_90px_rgba(0,0,0,0.25)] sm:p-5 lg:min-h-[650px]"
            data-motion-reveal
          >
            <div className="relative h-full min-h-[560px] overflow-hidden rounded-[26px]">
              <Image
                alt="Young people and leaders gathered for SSH's Youth Seminar 2025."
                className="object-cover"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 58vw, 860px"
                src="/media/blog/ssh-youth-seminar-2025/cover.JPG"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.86)] via-[rgba(7,27,47,0.18)] to-transparent" />
              <div className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/22 bg-white/12 text-white backdrop-blur-sm sm:left-7 sm:top-7 sm:h-20 sm:w-20">
                <GraduationCap aria-hidden="true" className="h-7 w-7" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                  Youth Seminar 2025
                </p>
                <p className="mt-3 max-w-[650px] text-2xl font-semibold leading-tight sm:text-3xl">
                  بااختیار نوجوان، باوقار قوم۔
                </p>
                <p className="mt-3 max-w-[620px] text-sm leading-6 text-white/74 sm:text-base">
                  From Prayer to Power, This is YOUR Hour.
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section
        aria-labelledby="education-youth-overview-title"
        className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div data-motion-reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Confirmed youth overview
              </p>
              <h2
                className="mt-4 max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
                id="education-youth-overview-title"
              >
                Energy, learning, and responsibility are kept tied to records.
              </h2>
            </div>
            <p
              className="max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end"
              data-motion-reveal
            >
              Youth content can feel more alive than the health archive, but it
              still needs factual footing. The page names known program forms
              and uses the 2025 seminar as the primary documented example.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3" data-motion-reveal>
            {seminarMarkers.map((marker) => {
              const Icon = marker.icon;

              return (
                <article
                  className="border-l-2 border-[var(--ssh-blue)] bg-white p-6 shadow-[0_18px_50px_rgba(7,27,47,0.05)] sm:p-7"
                  key={marker.label}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[var(--ssh-blue-50)] text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
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
            className="mt-10 grid gap-8 rounded-[28px] bg-white p-6 shadow-[0_22px_70px_rgba(7,27,47,0.06)] sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10"
            data-motion-reveal
          >
            <div>
              <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
                <BookOpenText aria-hidden="true" className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-[0.14em]">
                  Known forms of youth work
                </p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {youthWorkForms.map((item) => (
                  <li
                    className="flex gap-3 text-sm leading-6 text-[var(--ssh-ink)] sm:text-base"
                    key={item}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[22px] bg-[var(--ssh-blue-50)] p-5">
                <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                  <p className="text-sm font-bold uppercase tracking-[0.14em]">
                    Guardrail
                  </p>
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                  The available record does not yet supply attendance, speaker
                  names, a session list, scholarship details, or student counts.
                  The page leaves those claims out until SSH provides them.
                </p>
              </div>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {seminarImages.map((image, index) => (
                  <div
                    className="relative min-h-[260px] overflow-hidden rounded-[22px] bg-[var(--ssh-blue-50)] sm:min-h-[340px]"
                    key={image.src}
                  >
                    <Image
                      alt={image.alt}
                      className="object-cover"
                      fill
                      quality={95}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, 360px"
                      src={image.src}
                    />
                    {index === 0 && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(7,27,47,0.72)] to-transparent p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                          Seminar archive
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href="/blog/ssh-youth-seminar-2025"
              >
                Explore Youth Stories
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
