import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Handshake,
  ShieldCheck
} from "lucide-react";

const knownPoints = [
  {
    title: "Known historical initiative",
    description:
      "Public/historical SSH material describes a free dispensary initiative connected to SSH and local healthcare/community collaborators.",
    icon: ClipboardCheck
  },
  {
    title: "Named in older records",
    description:
      "The historical material names Health Care Poly Clinic, Ehsas-e-Milat Group, and a Shalom medical facility. Exact spelling, roles, and current status should be confirmed before partner-style publication.",
    icon: Building2
  },
  {
    title: "Safe public framing",
    description:
      "SSH has participated in a free dispensary initiative alongside local healthcare/community collaborators.",
    icon: Handshake
  }
];

const verificationItems = [
  "Exact date, location, and operating period of the dispensary initiative.",
  "Current status: historical, paused, active, or replaced by another health pathway.",
  "Confirmed collaborator names, roles, and whether any formal partnership still exists.",
  "Any patient totals, medicine distribution details, or service outcomes."
];

export function HealthFreeDispensary() {
  return (
    <section
      aria-labelledby="health-dispensary-title"
      className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Free dispensary
            </p>
            <h2
              className="mt-4 max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="health-dispensary-title"
            >
              A historical initiative, kept clear until the details are verified.
            </h2>
          </div>
          <p className="max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end">
            SSH&apos;s archive includes a free dispensary reference. The Health
            page can preserve that thread now, while leaving exact dates,
            current status, collaborator roles, and outcomes open for
            confirmation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {knownPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                className="border-l-2 border-[var(--ssh-blue)] bg-white p-6 shadow-[0_18px_50px_rgba(7,27,47,0.05)] sm:p-7"
                key={point.title}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[var(--ssh-blue-50)] text-[var(--ssh-blue)]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)]">
                  {point.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 rounded-[28px] bg-[var(--ssh-blue-50)] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-[0.14em]">
                Verification needed
              </p>
            </div>
            <p className="mt-5 max-w-[620px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
              This section deliberately avoids presenting the dispensary as a
              current service or formal partnership until SSH supplies updated
              records.
            </p>
          </div>
          <div>
            <ul className="grid gap-3">
              {verificationItems.map((item) => (
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
              href="/contact"
            >
              Share Dispensary Details
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
