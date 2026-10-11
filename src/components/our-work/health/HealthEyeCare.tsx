import Link from "next/link";
import { ArrowRight, Eye, FileSearch, ShieldCheck } from "lucide-react";

const safeStatements = [
  "Historical/public SSH material indicates that eye-care activity is part of the health archive.",
  "The program can be referenced conservatively as known historical eye-care work.",
  "Exact details should be added only when source records are available."
];

const needsVerification = [
  "Exact launch date, location, services, and current program status.",
  "The precise role/title and affiliation of Dr. Akash Mathew.",
  "Patient totals, outcomes, partner relationships, or ongoing service claims."
];

export function HealthEyeCare() {
  return (
    <section
      aria-labelledby="health-eye-care-title"
      className="bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start lg:px-12">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/14 bg-white/10 text-[var(--ssh-nest-gold)]">
            <Eye aria-hidden="true" className="h-6 w-6" />
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]">
            Eye care
          </p>
          <h2
            className="mt-4 max-w-[700px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98]"
            id="health-eye-care-title"
          >
            A known health reference that should stay carefully qualified.
          </h2>
          <p className="mt-6 max-w-[680px] text-lg leading-8 text-white/72 sm:text-xl">
            Eye-care work appears in SSH&apos;s historical material, but the
            current record does not yet support a detailed program page,
            current-service claim, doctor profile, or outcome summary.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[24px] border border-white/14 bg-white/8 p-6 sm:p-7">
              <div className="flex items-center gap-3 text-[var(--ssh-nest-gold)]">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.16em]">
                  Safe to say now
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                {safeStatements.map((item) => (
                  <li className="flex gap-3 text-sm leading-6 text-white/74" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ssh-nest-gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[24px] border border-white/14 bg-white/8 p-6 sm:p-7">
              <div className="flex items-center gap-3 text-[var(--ssh-nest-gold)]">
                <FileSearch aria-hidden="true" className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.16em]">
                  Verify before publishing
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                {needsVerification.map((item) => (
                  <li className="flex gap-3 text-sm leading-6 text-white/74" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="rounded-[24px] border border-white/14 bg-white/10 p-6 sm:p-7">
            <p className="text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
              This keeps the Health page honest while still preserving the
              eye-care thread in SSH&apos;s archive. When source records are added,
              this section can expand into dated activity details, images, and
              related stories.
            </p>
            <Link
              className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
              href="/contact"
            >
              Share Updated Eye-Care Records
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
