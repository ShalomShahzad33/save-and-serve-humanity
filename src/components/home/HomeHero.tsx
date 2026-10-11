import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HomeHeroMotion } from "@/components/motion/HomeHeroMotion";
import { siteMeta, workPillars } from "@/data/site";

export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative overflow-hidden bg-[var(--ssh-warm-white)]"
      data-home-hero
    >
      <HomeHeroMotion />
      <div className="hero-grid mx-auto grid min-h-[calc(100svh-80px)] w-full max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.78fr)] lg:px-12 lg:py-24">
        <div className="max-w-[760px]">
          <p
            className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-blue)]"
            data-hero-reveal
          >
            Pakistan-based humanitarian service
          </p>
          <h1
            className="max-w-[760px] font-display text-[clamp(3rem,8vw,6.8rem)] font-semibold leading-[0.92] text-[var(--ssh-ink)]"
            data-hero-reveal
            id="home-hero-title"
          >
            Compassion becomes meaningful when it moves.
          </h1>
          <p
            className="mt-7 max-w-[660px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl"
            data-hero-reveal
          >
            {siteMeta.name} is a Pakistan-based humanitarian organization with a
            documented service history reaching back to 2005 and real archive
            records across health, education and youth development, and community
            welfare.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            data-hero-reveal
          >
            <ButtonLink href="/donate">Donate Now</ButtonLink>
            <ButtonLink href="/our-work">Explore Our Work</ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              Read Our Story
            </ButtonLink>
          </div>

          <div
            aria-label="Known areas of work"
            className="mt-12 grid gap-4 border-y border-[var(--ssh-border)] py-6 sm:grid-cols-3"
            data-hero-reveal
          >
            {workPillars.map((pillar) => (
              <p
                className="text-sm font-semibold text-[var(--ssh-ink)]"
                key={pillar}
              >
                <span className="mb-2 block h-px w-10 bg-[var(--ssh-orange)]" />
                {pillar}
              </p>
            ))}
          </div>
        </div>

        <div className="relative" data-hero-logo>
          <div className="hero-seal-panel relative overflow-hidden rounded-[28px] bg-[var(--ssh-blue)] p-6 text-white shadow-[0_34px_70px_rgba(7,27,47,0.22)] sm:p-8">
            <div className="absolute inset-0 opacity-20 [background:linear-gradient(135deg,#01458E_0%,#07386F_56%,#082A4D_100%)]" />
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[var(--ssh-blue-950)] shadow-[0_22px_50px_rgba(0,0,0,0.18)]">
                <Image
                  alt="People gathered at Save and Serve Humanity's 160th free medical camp."
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  src="/media/home/hero-160th-free-medical-camp.jpg"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(7,27,47,0.74)] to-transparent" />
                <div className="absolute right-4 top-4 h-16 w-16 overflow-hidden rounded-full bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:h-20 sm:w-20">
                  <Image
                    alt=""
                    className="object-contain"
                    fill
                    priority
                    sizes="80px"
                    src="/brand/ssh-logo-transparent.png"
                  />
                </div>
              </div>
              <figcaption className="mt-6 text-sm leading-6 text-[rgba(255,255,255,0.78)]">
                Archive photograph from SSH&apos;s 160th Free Medical Camp record,
                now anchoring the rebuilt home hero.
              </figcaption>
            </figure>

            <div className="relative mt-8 border-t border-white/20 pt-6">
              <p className="font-metric text-sm uppercase tracking-[0.14em] text-[var(--ssh-nest-gold)]">
                2025 archive record
              </p>
              <p className="mt-2 text-2xl font-semibold leading-tight">
                160th Free Medical Camp
              </p>
              <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.78)]">
                A two-day outreach by SSH and Chief Cornerstone Fellow Church
                Ministries where more than 400 patients received care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
