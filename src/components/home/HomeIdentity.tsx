import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { programIntroductions } from "@/data/site";

export function HomeIdentity() {
  return (
    <section
      aria-labelledby="home-identity-title"
      className="bg-white py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div className="max-w-[620px]">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
            data-motion-reveal
          >
            What SSH does
          </p>
          <h2
            className="mt-4 font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
            data-motion-reveal
            id="home-identity-title"
          >
            Practical service, carried through real communities.
          </h2>
        </div>

        <div className="space-y-7">
          <p
            className="max-w-[760px] text-xl leading-8 text-[var(--ssh-slate)]"
            data-motion-reveal
          >
            SSH is presented through confirmed records, published stories, and
            curated media from its own archive. The homepage now points visitors
            to real medical outreach, youth development, and community welfare
            records instead of inflated claims.
          </p>

          <div className="divide-y divide-[var(--ssh-border)] border-y border-[var(--ssh-border)]">
            {programIntroductions.map((program, index) => (
              <Link
                className="group grid gap-4 py-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] sm:grid-cols-[88px_minmax(0,1fr)_44px]"
                data-motion-reveal
                href={program.href}
                key={program.href}
              >
                <span className="font-metric text-sm font-semibold text-[var(--ssh-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                    {program.eyebrow}
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-[var(--ssh-ink)]">
                    {program.title}
                  </span>
                  <span className="mt-3 block max-w-[760px] text-base leading-7 text-[var(--ssh-slate)]">
                    {program.description}
                  </span>
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--ssh-border)] text-[var(--ssh-blue)] transition duration-200 group-hover:-translate-y-0.5 group-hover:border-[rgba(1,69,142,0.35)] group-hover:bg-[var(--ssh-blue-50)]">
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}