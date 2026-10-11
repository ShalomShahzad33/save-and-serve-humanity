import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake } from "lucide-react";

const serviceImages = [
  {
    src: "/media/blog/covid-19-ration-distribution/ration-02.png",
    alt: "Ration distribution activity during SSH's COVID-19 relief work.",
    label: "COVID-19 ration support"
  },
  {
    src: "/media/blog/160th-free-medical-camp/cover.png",
    alt: "Medical camp participants and volunteers gathered during SSH's 160th Free Medical Camp.",
    label: "Free medical camp"
  }
] as const;

const scriptureThreads = [
  {
    reference: "Matthew 25:35",
    context: "COVID-19 ration distribution"
  },
  {
    reference: "Psalm 82:3",
    context: "Brick-kiln medical outreach in Kasur"
  },
  {
    reference: "1 Timothy 4:12",
    context: "SSH Youth Seminar 2025"
  }
] as const;

export function HomeFaithService() {
  return (
    <section
      aria-labelledby="home-faith-title"
      className="overflow-hidden bg-[var(--ssh-blue-50)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:px-12">
        <div className="relative min-h-[520px]" data-motion-reveal>
          <figure className="absolute left-0 top-0 w-[82%] overflow-hidden rounded-[30px] bg-[var(--ssh-warm-white)] shadow-[0_28px_80px_rgba(7,27,47,0.16)]">
            <div className="relative aspect-[5/4] bg-[var(--ssh-blue-100)]">
              <Image
                alt={serviceImages[0].alt}
                className="object-cover"
                fill
                quality={95}
                sizes="(max-width: 1024px) 82vw, 660px"
                src={serviceImages[0].src}
              />
            </div>
            <figcaption className="bg-[var(--ssh-warm-white)] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-blue)]">
              {serviceImages[0].label}
            </figcaption>
          </figure>

          <figure className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-[24px] border-4 border-[var(--ssh-blue-50)] bg-[var(--ssh-warm-white)] shadow-[0_24px_70px_rgba(7,27,47,0.18)]">
            <div className="relative aspect-[4/3] bg-[var(--ssh-blue-100)]">
              <Image
                alt={serviceImages[1].alt}
                className="object-cover"
                fill
                loading="lazy"
                quality={95}
                sizes="(max-width: 1024px) 58vw, 420px"
                src={serviceImages[1].src}
              />
            </div>
            <figcaption className="bg-[var(--ssh-blue)] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/82">
              {serviceImages[1].label}
            </figcaption>
          </figure>
        </div>

        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
            data-motion-reveal
          >
            Faith and service
          </p>
          <h2
            className="mt-4 max-w-[760px] font-display text-[clamp(2.6rem,5.4vw,5rem)] font-semibold leading-[0.96] text-[var(--ssh-ink)]"
            data-motion-reveal
            id="home-faith-title"
          >
            Prayer joined with practical care.
          </h2>
          <p
            className="mt-6 max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl"
            data-motion-reveal
          >
            Faith is visible in SSH&apos;s archive through ordinary acts of
            service: food support during COVID-19, medical outreach for
            families with limited access to care, youth formation, and community
            work carried out with compassion and dignity.
          </p>

          <div
            className="mt-9 border-l-4 border-[var(--ssh-nest-gold)] bg-[var(--ssh-warm-white)] px-6 py-6 shadow-[0_18px_50px_rgba(7,27,47,0.08)]"
            data-motion-reveal
          >
            <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
              <BookOpen aria-hidden="true" className="h-5 w-5" />
              <p className="text-xs font-bold uppercase tracking-[0.16em]">
                Scripture in the archive
              </p>
            </div>
            <div className="mt-5 grid gap-4">
              {scriptureThreads.map((thread) => (
                <div
                  className="grid gap-1 border-t border-[var(--ssh-border)] pt-4 first:border-t-0 first:pt-0"
                  key={thread.reference}
                >
                  <p className="font-display text-2xl font-semibold leading-tight text-[var(--ssh-ink)]">
                    {thread.reference}
                  </p>
                  <p className="text-sm leading-6 text-[var(--ssh-slate)]">
                    Referenced with SSH&apos;s {thread.context} story.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            data-motion-reveal
          >
            <Link
              className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href="/blog/covid-19-ration-distribution"
            >
              Read the Ration Story
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white/64 px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href="/our-work/community-welfare"
            >
              Explore Community Work
              <HeartHandshake aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
