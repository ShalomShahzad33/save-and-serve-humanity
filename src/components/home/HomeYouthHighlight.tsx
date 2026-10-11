import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react";

const seminarTheme =
  "\u0628\u0627\u0627\u062e\u062a\u06cc\u0627\u0631 \u0646\u0648\u062c\u0648\u0627\u0646\u060c \u0628\u0627\u0648\u0642\u0627\u0631 \u0642\u0648\u0645";

const moments = [
  {
    label: "Date",
    value: "6 August 2025",
    icon: CalendarDays
  },
  {
    label: "Venue",
    value: "Renewal Center, Rohinala, Youhanabad",
    icon: MapPin
  },
  {
    label: "Message",
    value: "From Prayer to Power, This is YOUR Hour.",
    icon: Sparkles
  }
] as const;

const images = [
  {
    src: "/media/blog/ssh-youth-seminar-2025/4.JPG",
    alt: "Speaker and participants during the Save and Serve Humanity youth seminar."
  },
  {
    src: "/media/blog/ssh-youth-seminar-2025/6.JPG",
    alt: "Participants seated during SSH's 2025 youth seminar in Youhanabad."
  }
] as const;

export function HomeYouthHighlight() {
  return (
    <section
      aria-labelledby="home-youth-title"
      className="overflow-hidden bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1.1fr)] lg:px-12">
        <div className="flex flex-col justify-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]"
            data-motion-reveal
          >
            Youth highlight
          </p>
          <h2
            className="mt-4 max-w-[760px] font-display text-[clamp(2.6rem,5.6vw,5.2rem)] font-semibold leading-[0.96]"
            data-motion-reveal
            id="home-youth-title"
          >
            Young people, faith, and the courage to act.
          </h2>
          <p
            className="mt-6 max-w-[720px] text-lg leading-8 text-white/76 sm:text-xl"
            data-motion-reveal
          >
            SSH&apos;s 2025 youth seminar in Youhanabad gathered young people
            around responsibility, leadership, and faith moving into practical
            action.
          </p>

          <div
            className="mt-8 border-y border-white/14 py-7"
            data-motion-reveal
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
              Seminar theme
            </p>
            <p
              className="mt-3 font-display text-4xl font-semibold leading-tight text-[var(--ssh-warm-white)] sm:text-5xl"
              dir="rtl"
              lang="ur"
            >
              {seminarTheme}
            </p>
            <p className="mt-4 text-base font-semibold text-white/82">
              From Prayer to Power, This is YOUR Hour.
            </p>
          </div>

          <div className="mt-8 grid gap-4" data-motion-reveal>
            {moments.map((moment) => {
              const Icon = moment.icon;

              return (
                <div
                  className="grid gap-3 border-l border-[rgba(216,166,106,0.52)] pl-4 sm:grid-cols-[32px_minmax(0,1fr)] sm:items-start"
                  key={moment.label}
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 text-[var(--ssh-nest-gold)]"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/52">
                      {moment.label}
                    </p>
                    <p className="mt-1 text-base font-semibold leading-7 text-white">
                      {moment.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            data-motion-reveal
          >
            <Link
              className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-warm-white)] px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
              href="/blog/ssh-youth-seminar-2025"
            >
              Read the Youth Story
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] border border-white/22 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/44 hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
              href="/our-work/education-youth"
            >
              Explore Youth Work
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[560px]" data-motion-reveal>
          <figure className="absolute left-0 top-0 w-[78%] overflow-hidden rounded-[30px] border border-white/12 bg-white/8 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[4/5] bg-[var(--ssh-blue-900)]">
              <Image
                alt="Participants gathered during Save and Serve Humanity's 2025 youth seminar in Youhanabad."
                className="object-cover"
                fill
                quality={95}
                sizes="(max-width: 1024px) 76vw, 560px"
                src="/media/blog/ssh-youth-seminar-2025/cover.JPG"
              />
            </div>
          </figure>

          <div className="absolute bottom-0 right-0 grid w-[58%] gap-4">
            {images.map((image, index) => (
              <figure
                className="overflow-hidden rounded-[24px] border border-white/14 bg-white/8 shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
                key={image.src}
              >
                <div className="relative aspect-[4/3] bg-[var(--ssh-blue-900)]">
                  <Image
                    alt={image.alt}
                    className="object-cover"
                    fill
                    loading="lazy"
                    quality={95}
                    sizes="(max-width: 1024px) 48vw, 330px"
                    src={image.src}
                  />
                </div>
                {index === 1 ? (
                  <figcaption className="bg-[var(--ssh-blue)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/72">
                    Youth seminar archive, 2025
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
