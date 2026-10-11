import Link from "next/link";
import { ArrowRight, FileText, Handshake, ShieldCheck } from "lucide-react";

const leadershipThemes = [
  "Participation",
  "Development",
  "Empowerment",
  "Sustainability",
  "Resilience",
  "Collaboration"
] as const;

const governanceNotes = [
  {
    title: "Confirmed president record",
    description:
      "The 2025 SSH archive identifies Shahzad Masih as President of Save and Serve Humanity.",
    icon: ShieldCheck
  },
  {
    title: "Board details held for verification",
    description:
      "A full current board or governance list is not published until SSH supplies official current records.",
    icon: FileText
  },
  {
    title: "Leadership language grounded in service",
    description:
      "SSH's institutional material emphasizes participation, empowerment, resilience, collaboration, and grassroots service.",
    icon: Handshake
  }
] as const;

export function AboutLeadership() {
  return (
    <section
      aria-labelledby="about-leadership-title"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:px-12">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
            data-motion-reveal
          >
            Leadership and governance
          </p>
          <h2
            className="mt-4 max-w-[760px] font-display text-[clamp(2.55rem,5vw,4.8rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
            data-motion-reveal
            id="about-leadership-title"
          >
            Leadership shown with the same care as the archive.
          </h2>
          <p
            className="mt-6 max-w-[700px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl"
            data-motion-reveal
          >
            SSH&apos;s leadership information is presented from confirmed records.
            Current people and titles can be expanded as official governance
            details are supplied.
          </p>

          <div
            className="mt-10 rounded-[28px] border border-[var(--ssh-border)] bg-[var(--ssh-blue-50)] p-6 sm:p-8"
            data-motion-reveal
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div
                aria-hidden="true"
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[var(--ssh-blue)] font-display text-3xl font-semibold text-white shadow-[0_18px_50px_rgba(7,27,47,0.18)]"
              >
                SM
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                  Confirmed president
                </p>
                <h3 className="mt-3 font-display text-4xl font-semibold leading-tight text-[var(--ssh-ink)]">
                  Shahzad Masih
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--ssh-slate)]">
                  President, Save and Serve Humanity, identified in the 2025
                  SSH archive record connected to the CLAP oath taking ceremony.
                </p>
              </div>
            </div>

            <Link
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:text-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href="/blog/clap-oath-taking-ceremony-2025"
            >
              Read the related archive record
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="lg:pt-12">
          <div className="grid gap-4">
            {governanceNotes.map((note) => {
              const Icon = note.icon;

              return (
                <article
                  className="grid gap-4 border-t border-[var(--ssh-border)] pt-5 sm:grid-cols-[52px_minmax(0,1fr)]"
                  data-motion-reveal
                  key={note.title}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[var(--ssh-blue)] text-white shadow-[0_14px_32px_rgba(7,27,47,0.1)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)]">
                      {note.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--ssh-slate)]">
                      {note.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className="mt-10 border-l-2 border-[var(--ssh-nest-gold)] bg-[var(--ssh-warm-white)] px-6 py-6"
            data-motion-reveal
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
              Leadership themes
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {leadershipThemes.map((theme) => (
                <span
                  className="rounded-full border border-[var(--ssh-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ssh-blue)]"
                  key={theme}
                >
                  {theme}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-[var(--ssh-slate)]">
              These themes are used as orientation, while a current signed president&apos;s message can be added when SSH confirms the exact text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
