import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const seminarTitle = "\u0628\u0627\u0627\u062E\u062A\u06CC\u0627\u0631 \u0646\u0648\u062C\u0648\u0627\u0646\u060C \u0628\u0627\u0648\u0642\u0627\u0631 \u0642\u0648\u0645\u06D4";

const details = [
  {
    label: "Date",
    value: "6 August 2025",
    icon: CalendarDays
  },
  {
    label: "Venue",
    value: "Renewal Center, Rohinala, Youhanabad",
    icon: MapPin
  },
  {
    label: "Message",
    value: "From Prayer to Power, This is YOUR Hour.",
    icon: Sparkles
  }
];

const themes = [
  "faith and action",
  "responsibility",
  "youth empowerment",
  "leadership",
  "national contribution"
];

const guardrails = [
  "No attendance total has been supplied.",
  "No speaker list or session schedule has been supplied.",
  "The section presents the seminar as a historical 2025 event, not an upcoming program."
];

export function EducationYouthSeminarFeature() {
  return (
    <section
      aria-labelledby="youth-seminar-feature-title"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
            Youth Seminar 2025
          </p>
          <h2
            className="mt-4 max-w-[820px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
            id="youth-seminar-feature-title"
          >
            A record of young people being called from prayer into action.
          </h2>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
            On 6 August 2025, SSH conducted a youth seminar at Renewal Center,
            Rohinala, Youhanabad, under the theme{" "}
            <span className="font-semibold text-[var(--ssh-ink)]">
              {seminarTitle}
            </span>
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="rounded-[22px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-5"
                  data-motion-timeline-item
                  key={item.label}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-[var(--ssh-blue-50)] text-[var(--ssh-blue)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold leading-6 text-[var(--ssh-ink)]">
                    {item.value}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[28px] bg-[var(--ssh-blue-950)] p-6 text-white sm:p-8">
            <div className="flex items-center gap-3 text-[var(--ssh-nest-gold)]">
              <Quote aria-hidden="true" className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-[0.14em]">
                Scripture in the record
              </p>
            </div>
            <blockquote className="mt-5 max-w-[720px] font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Let no one despise your youth.
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-white/64">
              1 Timothy 4:12
            </p>
          </div>

          <div className="mt-8 grid gap-8 rounded-[28px] bg-[var(--ssh-blue-50)] p-6 sm:p-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--ssh-blue)]">
                Themes carried by the seminar
              </p>
              <ul className="mt-5 grid gap-3">
                {themes.map((theme) => (
                  <li
                    className="flex gap-3 text-sm leading-6 text-[var(--ssh-ink)] sm:text-base"
                    key={theme}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-[0.14em]">
                  Publication guardrails
                </p>
              </div>
              <ul className="mt-5 grid gap-3">
                {guardrails.map((item) => (
                  <li
                    className="flex gap-3 text-sm leading-6 text-[var(--ssh-slate)]"
                    key={item}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(1,69,142,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
            href="/blog/ssh-youth-seminar-2025"
          >
            Read the full seminar story
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[var(--ssh-blue-50)] sm:col-span-2">
              <Image
                alt="Participants gathered during Save and Serve Humanity's 2025 youth seminar in Youhanabad."
                className="object-cover"
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 46vw, 690px"
                src="/media/blog/ssh-youth-seminar-2025/cover.JPG"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(7,27,47,0.86)] to-transparent p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                  Historical youth record
                </p>
                <p className="mt-3 max-w-[620px] text-2xl font-semibold leading-tight">
                  {seminarTitle}
                </p>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[24px] bg-[var(--ssh-blue-50)]">
              <Image
                alt="Speaker and participants during the Save and Serve Humanity youth seminar."
                className="object-cover"
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 340px"
                src="/media/blog/ssh-youth-seminar-2025/4.JPG"
              />
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[24px] bg-[var(--ssh-blue-50)]">
              <Image
                alt="Participants seated during SSH's 2025 youth seminar in Youhanabad."
                className="object-cover"
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 340px"
                src="/media/blog/ssh-youth-seminar-2025/6.JPG"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
