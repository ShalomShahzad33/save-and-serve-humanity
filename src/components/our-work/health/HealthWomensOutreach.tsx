import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  UsersRound
} from "lucide-react";

const evidencePoints = [
  {
    title: "147th women-focused camp",
    meta: "22 August 2022",
    location: "Shalom Maternity Home, Youhanabad, Lahore",
    description:
      "A historical record identifies SSH's 147th free medical camp as a women-focused outreach. The record supports women-focused healthcare language, but not unsupported maternity outcomes or ownership claims."
  },
  {
    title: "Women and children at a Kasur brick kiln",
    meta: "June 10, 2023",
    location: "Kasur",
    href: "/blog/brick-kiln-medical-camp-kasur-2023",
    description:
      "The published Kasur story records a free medical camp focused on women and children, with 155 patients receiving care along with nutritional supplements and hygiene kits."
  }
];

const careBoundaries = [
  "Presented as documented outreach records, not a permanent women's-health program claim.",
  "No patient names, diagnoses, maternity outcomes, or personal medical details are inferred.",
  "Facility names are treated as event locations unless SSH later confirms a formal relationship."
];

export function HealthWomensOutreach() {
  return (
    <section
      aria-labelledby="health-women-title"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:px-12">
        <div data-motion-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
            Women-focused outreach
          </p>
          <h2
            className="mt-4 max-w-[760px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
            id="health-women-title"
          >
            Care for women is shown through records, not assumptions.
          </h2>
          <p className="mt-6 max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
            SSH&apos;s health archive includes women-focused medical outreach,
            including a 147th free medical camp record in Youhanabad and a
            documented Kasur brick-kiln camp for women and children.
          </p>

          <div className="mt-10 grid gap-5">
            {evidencePoints.map((point) => (
              <article
                className="border-l-2 border-[var(--ssh-blue)] bg-[var(--ssh-warm-white)] p-6 shadow-[0_18px_50px_rgba(7,27,47,0.05)]"
                key={point.title}
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays aria-hidden="true" className="h-4 w-4" />
                    {point.meta}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[var(--ssh-blue)]">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {point.location}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)]">
                  {point.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                  {point.description}
                </p>
                {point.href ? (
                  <Link
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                    href={point.href}
                  >
                    Read the Kasur record
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div
          className="relative self-start overflow-hidden rounded-[32px] bg-[var(--ssh-blue-950)] p-4 text-white shadow-[0_34px_90px_rgba(7,27,47,0.18)] sm:p-5 lg:sticky lg:top-28"
          data-motion-reveal
        >
          <div className="relative aspect-[11/10] overflow-hidden rounded-[26px]">
            <Image
              alt="Women and children at a brick-kiln medical camp connected to SSH's Kasur outreach."
              className="object-cover"
              fill
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 44vw, 650px"
              src="/media/blog/brick-kiln-medical-camp-kasur-2023/cover.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.9)] via-[rgba(7,27,47,0.22)] to-transparent" />
            <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/22 bg-white/12 text-white backdrop-blur-sm sm:left-7 sm:top-7 sm:h-20 sm:w-20">
              <UsersRound aria-hidden="true" className="h-6 w-6" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                Kasur outreach record
              </p>
              <p className="mt-3 max-w-[600px] text-2xl font-semibold leading-tight sm:text-3xl">
                One documented camp served women and children at a brick-kiln
                community in Kasur.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-[24px] border border-white/14 bg-white/8 p-5">
            <div className="flex items-center gap-3 text-[var(--ssh-nest-gold)]">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              <p className="text-xs font-bold uppercase tracking-[0.16em]">
                Dignity guardrails
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {careBoundaries.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-white/72" key={item}>
                  <HeartHandshake
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ssh-nest-gold)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
