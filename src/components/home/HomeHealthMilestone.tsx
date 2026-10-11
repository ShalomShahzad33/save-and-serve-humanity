import Link from "next/link";
import { ArrowRight, CalendarDays, Handshake } from "lucide-react";
import { healthMilestone } from "@/data/site";

export function HomeHealthMilestone() {
  return (
    <section
      aria-labelledby="home-health-milestone-title"
      className="bg-white py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <div className="relative overflow-hidden rounded-[30px] bg-[var(--ssh-blue)] p-6 text-white shadow-[0_30px_80px_rgba(1,69,142,0.2)] sm:p-8 lg:min-h-[560px] lg:p-10" data-motion-reveal>
          <div className="absolute inset-0 opacity-95 [background:linear-gradient(135deg,#01458E_0%,#07386F_56%,#082A4D_100%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-14">
            <div>
              <p className="font-metric text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                Historical health milestone
              </p>
              <p className="mt-8 max-w-full whitespace-nowrap font-display text-[clamp(4.9rem,14vw,10.6rem)] font-semibold leading-[0.9] text-[var(--ssh-warm-white)]">
                {healthMilestone.ordinal}
              </p>
              <p className="mt-5 max-w-[560px] text-2xl font-semibold leading-tight sm:text-3xl">
                {healthMilestone.label}
              </p>
            </div>

            <p className="max-w-[560px] border-l border-[rgba(216,166,106,0.62)] pl-5 text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
              {healthMilestone.guardrail}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center" data-motion-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
            Medical camp milestone
          </p>
          <h2
            className="mt-4 max-w-[760px] font-display text-[clamp(2.5rem,5vw,4.7rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
            id="home-health-milestone-title"
          >
            A confirmed 2025 milestone in SSH&apos;s medical camp archive.
          </h2>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
            {healthMilestone.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-[var(--ssh-border)] bg-[var(--ssh-blue-50)] p-5">
              <CalendarDays aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                Archive date
              </p>
              <time className="mt-2 block text-lg font-semibold text-[var(--ssh-ink)]" dateTime={healthMilestone.dateTime}>
                {healthMilestone.date}
              </time>
            </div>
            <div className="rounded-[22px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-5">
              <Handshake aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                Collaborator
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-[var(--ssh-ink)]">
                {healthMilestone.location}
              </p>
            </div>
          </div>

          <ul className="mt-8 grid gap-3" aria-label="Milestone evidence points">
            {healthMilestone.evidence.map((item) => (
              <li className="flex gap-3 text-base leading-7 text-[var(--ssh-ink)]" key={item}>
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            className="group mt-9 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
            href="/our-work/health"
          >
            Explore Health Work
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}