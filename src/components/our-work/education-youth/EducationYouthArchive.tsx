import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  MapPin,
  ShieldCheck
} from "lucide-react";

const seminarTitle =
  "\u0628\u0627\u0627\u062E\u062A\u06CC\u0627\u0631 \u0646\u0648\u062C\u0648\u0627\u0646\u060C \u0628\u0627\u0648\u0642\u0627\u0631 \u0642\u0648\u0645\u06D4";

const archiveItems = [
  {
    eyebrow: "Historical programme record",
    title: "SMAC Programme opening",
    date: "2016",
    location: "SSH archive",
    description:
      "SSH records identify an Opening Ceremony of the SMAC Programme in 2016. The acronym expansion, programme scope, duration, and beneficiary details have not been supplied yet.",
    status: "Historical record; details still limited.",
    href: null
  },
  {
    eyebrow: "Published youth story",
    title: "Youth Seminar 2025",
    date: "6 August 2025",
    location: "Renewal Center, Rohinala, Youhanabad",
    description:
      "The strongest current youth archive record is the 2025 seminar under the theme " +
      seminarTitle +
      " and the slogan From Prayer to Power, This is YOUR Hour.",
    status: "Full story and gallery available.",
    href: "/blog/ssh-youth-seminar-2025"
  },
  {
    eyebrow: "Awareness archive",
    title: "Mouth Cancer Awareness Walk",
    date: "2012",
    location: "Karachi",
    description:
      "The awareness-walk record belongs mainly to SSH's public health archive, but it also shows how learning, prevention, and public awareness have appeared in SSH's wider activity history.",
    status: "Cross-pillar awareness record.",
    href: "/blog/mouth-cancer-awareness-walk-karachi-2012"
  }
];

const limits = [
  "SMAC is not expanded because the source does not define the acronym.",
  "The 2016 SMAC record is not presented as a current programme.",
  "The awareness walk is clearly framed as a health-linked awareness record, not a youth seminar.",
  "No attendance totals, student counts, scholarships, or training curricula are invented."
];

export function EducationYouthArchive() {
  return (
    <section
      aria-labelledby="education-youth-archive-title"
      className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Seminar / awareness archive
            </p>
            <h2
              className="mt-4 max-w-[820px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="education-youth-archive-title"
            >
              The youth record sits inside a wider history of learning and awareness.
            </h2>
          </div>
          <p className="max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end">
            This archive section keeps records separated by what each source
            actually supports: a limited 2016 programme opening, a published
            youth seminar story, and a cross-pillar awareness walk record.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <ol className="grid gap-5">
            {archiveItems.map((item) => (
              <li
                className="rounded-[24px] border border-[var(--ssh-border)] bg-white p-6 shadow-[0_18px_50px_rgba(7,27,47,0.05)] sm:p-7"
                data-motion-timeline-item
                key={item.title}
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                  <span>{item.eyebrow}</span>
                  <span className="inline-flex items-center gap-2 text-[var(--ssh-blue)]">
                    <CalendarDays aria-hidden="true" className="h-4 w-4" />
                    {item.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[var(--ssh-blue)]">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {item.location}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-slate)]">
                    <FileText aria-hidden="true" className="h-4 w-4" />
                    {item.status}
                  </p>
                  {item.href ? (
                    <Link
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                      href={item.href}
                    >
                      Open record
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

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[32px] bg-[var(--ssh-blue-950)] p-4 text-white shadow-[0_34px_90px_rgba(7,27,47,0.18)] sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <Image
                  alt="Youth seminar participants and organizers at the Renewal Center in Youhanabad."
                  className="object-cover"
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 42vw, 620px"
                  src="/media/blog/ssh-youth-seminar-2025/2.JPG"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.88)] via-[rgba(7,27,47,0.16)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                    Archive method
                  </p>
                  <p className="mt-3 max-w-[560px] text-2xl font-semibold leading-tight sm:text-3xl">
                    Each record can grow later without turning limited facts into claims.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-[24px] border border-white/14 bg-white/8 p-5">
                <div className="flex items-center gap-3 text-[var(--ssh-nest-gold)]">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em]">
                    What stays out for now
                  </p>
                </div>
                <ul className="mt-4 grid gap-3">
                  {limits.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-white/72" key={item}>
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-nest-gold)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
