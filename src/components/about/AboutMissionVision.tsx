import Link from "next/link";
import { ArrowRight, Compass, Scale, Sparkles } from "lucide-react";

const commitments = [
  "Transparency and self-accountability",
  "Integrity and honesty",
  "Networking and partnerships",
  "Non-discrimination",
  "Higher standards of service"
] as const;

export function AboutMissionVision() {
  return (
    <section
      aria-labelledby="about-mission-title"
      className="overflow-hidden bg-[var(--ssh-blue-900)] py-20 text-white sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]"
              data-motion-reveal
            >
              Mission and vision
            </p>
            <h2
              className="mt-4 max-w-[720px] font-display text-[clamp(2.55rem,5vw,4.8rem)] font-semibold leading-[0.98] text-white"
              data-motion-reveal
              id="about-mission-title"
            >
              Purpose written as participation, dignity, and opportunity.
            </h2>
          </div>
          <p
            className="max-w-[760px] text-lg leading-8 text-white/76 sm:text-xl"
            data-motion-reveal
          >
            SSH&apos;s mission and vision describe service as participatory, practical, and rooted in dignity. They give shape to the way the organization speaks about community care, opportunity, and long-term change.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article
            className="relative overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.07] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10"
            data-motion-reveal
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)]">
              <Compass aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
              Our mission
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Bring change through mobilized communities.
            </h3>
            <p className="mt-5 text-lg leading-8 text-white/78">
              SSH&apos;s mission is to bring change by mobilizing marginalized
              communities to transform their lives through equitable and
              sustainable use of resources, and by developing innovative and
              sustainable solutions.
            </p>
          </article>

          <article
            className="relative overflow-hidden rounded-[26px] border border-white/14 bg-white text-[var(--ssh-ink)] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.2)] sm:p-8 lg:p-10"
            data-motion-reveal
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[var(--ssh-blue)] text-white">
              <Sparkles aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
              Our vision
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] sm:text-4xl">
              Empower people to make informed decisions.
            </h3>
            <p className="mt-5 text-lg leading-8 text-[var(--ssh-slate)]">
              SSH&apos;s vision is to empower communities through participatory
              approaches, enabling people to make informed decisions, maximize
              growth, and access opportunity.
            </p>
          </article>
        </div>

        <div
          className="mt-8 grid gap-6 border-t border-white/14 pt-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start"
          data-motion-reveal
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-[var(--ssh-nest-gold)] text-[var(--ssh-blue-950)]">
              <Scale aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                Ethical commitments
              </p>
              <p className="mt-3 max-w-[520px] text-base leading-7 text-white/72">
                SSH also names practical ethics that shape how the organization describes its work and relationships.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {commitments.map((commitment) => (
              <p
                className="rounded-[16px] border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-white/84"
                key={commitment}
              >
                {commitment}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10" data-motion-reveal>
          <Link
            className="group inline-flex items-center justify-center gap-2 rounded-[14px] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
            href="/our-work"
          >
            Explore Our Work
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
