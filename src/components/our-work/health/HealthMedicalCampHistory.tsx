import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  MapPin,
  ShieldCheck
} from "lucide-react";

const campRecords = [
  {
    marker: "132nd",
    meta: "Date not yet supplied",
    title: "Free medical camp at Shalom Medical Centre",
    location: "Shalom Medical Centre",
    description:
      "A historical record identifies SSH's 132nd free medical camp at Shalom Medical Centre, including blood glucose and blood calcium testing."
  },
  {
    marker: "133rd",
    meta: "Historical numbered record",
    title: "Medical outreach among brick-kiln communities",
    location: "District Kasur",
    description:
      "The 133rd free medical camp record places SSH's medical outreach among brick-kiln communities in District Kasur. The exact date and service details should remain open until fuller source material is added."
  },
  {
    marker: "147th",
    meta: "22 August 2022",
    title: "Women-focused free medical camp",
    location: "Shalom Maternity Home, Youhanabad, Lahore",
    description:
      "A confirmed historical record identifies the 147th free medical camp as a women-focused outreach at Shalom Maternity Home in Youhanabad, Lahore."
  },
  {
    marker: "2023",
    meta: "June 10, 2023",
    title: "Brick-kiln camp for women and children",
    location: "Kasur",
    href: "/blog/brick-kiln-medical-camp-kasur-2023",
    description:
      "The published Kasur story records a brick-kiln medical camp focused on women and children, with 155 patients receiving care, nutritional supplements, and hygiene kits."
  },
  {
    marker: "160th",
    meta: "Published March 16, 2025",
    title: "Two-day free medical camp record",
    location: "SSH archive",
    href: "/blog/160th-free-medical-camp",
    description:
      "The 2025 archive identifies SSH's 160th Free Medical Camp as a two-day outreach conducted with Chief Cornerstone Fellow Church Ministries, with more than 400 patients served in that specific record."
  }
];

const guardrails = [
  "This timeline does not claim SSH's current lifetime number of medical camps.",
  "Dates appear only where the record supplies them.",
  "Patient counts stay attached to the specific camp records that provided them.",
  "Shalom facility names are used as event locations, not ownership claims."
];

export function HealthMedicalCampHistory() {
  return (
    <section
      aria-labelledby="health-camp-history-title"
      className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:px-12">
        <aside className="lg:sticky lg:top-28 lg:self-start" data-motion-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
            Medical camp history
          </p>
          <h2
            className="mt-4 max-w-[660px] font-display text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.96] text-[var(--ssh-ink)]"
            id="health-camp-history-title"
          >
            Numbered records, handled with care.
          </h2>
          <p className="mt-6 max-w-[640px] text-lg leading-8 text-[var(--ssh-slate)]">
            SSH&apos;s medical-camp archive shows continuity through named
            milestones. The timeline keeps each record attached to its known
            date, place, and limits, so history can grow without becoming a
            fake total.
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
          {campRecords.map((record) => (
            <li
              className="relative grid gap-4 rounded-[24px] border border-[var(--ssh-border)] bg-white p-5 shadow-[0_18px_50px_rgba(7,27,47,0.05)] sm:grid-cols-[80px_minmax(0,1fr)] sm:p-6"
              data-motion-timeline-item
              key={`${record.marker}-${record.title}`}
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(1,69,142,0.18)] bg-[var(--ssh-warm-white)] font-metric text-base font-semibold text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.08)] sm:h-20 sm:w-20 sm:text-xl">
                {record.marker}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays aria-hidden="true" className="h-4 w-4" />
                    {record.meta}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[var(--ssh-blue)]">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {record.location}
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
                ) : (
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-slate)]">
                    <FileText aria-hidden="true" className="h-4 w-4" />
                    Historical record, article not yet published
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
