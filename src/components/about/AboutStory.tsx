import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, CalendarClock, MapPin } from "lucide-react";

const storyMilestones = [
  {
    marker: "2005",
    title: "Documented service history begins",
    description:
      "The confirmed SSH website source connects the organization's medical-camp and service history to work beginning in 2005. This is used as documented history, not as a legal founding claim.",
    href: "/impact",
    meta: "Documented history",
    icon: CalendarClock
  },
  {
    marker: "2012",
    title: "Awareness work in Karachi",
    description:
      "SSH's archive includes a mouth cancer awareness walk in Karachi focused on prevention, early detection, tobacco use, betel nut/chalia, and oral hygiene.",
    href: "/blog/mouth-cancer-awareness-walk-karachi-2012",
    meta: "Awareness archive",
    icon: MapPin
  },
  {
    marker: "147th",
    title: "Women-focused free medical camp",
    description:
      "By 22 August 2022, SSH's numbered free medical camp records had reached the 147th camp, held for women at Shalom Maternity Home in Youhanabad, Lahore.",
    href: "/our-work/health",
    meta: "Health record",
    icon: BookOpenText
  },
  {
    marker: "2025",
    title: "Medical outreach and youth formation",
    description:
      "The 2025 archive includes the 160th Free Medical Camp and the SSH Youth Seminar in Youhanabad, connecting practical care with faith, responsibility, and action.",
    href: "/blog",
    meta: "Recent archive",
    icon: CalendarClock
  }
] as const;

const storyImages = [
  {
    src: "/media/blog/brick-kiln-medical-camp-kasur-2023/camp-01.png",
    alt: "Medical outreach record from SSH's brick-kiln community work in District Kasur.",
    caption: "Medical outreach"
  },
  {
    src: "/media/blog/ssh-youth-seminar-2025/cover.JPG",
    alt: "Participants gathered during SSH's 2025 youth seminar in Youhanabad.",
    caption: "Youth formation"
  },
  {
    src: "/media/blog/covid-19-ration-distribution/ration-01.png",
    alt: "Volunteers handling ration supplies during SSH's COVID-19 relief work.",
    caption: "Community support"
  }
] as const;

export function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-title"
      className="overflow-hidden bg-[var(--ssh-blue-50)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:px-12">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
            data-motion-reveal
          >
            Organization story
          </p>
          <h2
            className="mt-4 max-w-[760px] font-display text-[clamp(2.6rem,5.4vw,5rem)] font-semibold leading-[0.96] text-[var(--ssh-ink)]"
            data-motion-reveal
            id="about-story-title"
          >
            A story preserved through service records.
          </h2>
          <p
            className="mt-6 max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl"
            data-motion-reveal
          >
            SSH&apos;s About page can speak clearly without inventing a founder
            narrative. The strongest story already available is the public
            record itself: dated activities, real communities, archive images,
            and repeated practical service.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-1 sm:gap-5" data-motion-reveal>
            {storyImages.map((image) => (
              <figure
                className="overflow-hidden rounded-[18px] bg-white shadow-[0_20px_60px_rgba(7,27,47,0.08)] sm:grid sm:grid-cols-[220px_minmax(0,1fr)] sm:rounded-[24px]"
                key={image.src}
              >
                <div className="relative aspect-[4/3] bg-[var(--ssh-blue-100)] sm:aspect-auto sm:min-h-[210px]">
                  <Image
                    alt={image.alt}
                    className="object-cover"
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 320px, 220px"
                    src={image.src}
                  />
                </div>
                <figcaption className="flex min-h-16 items-center px-3 py-3 text-[0.68rem] font-bold uppercase leading-4 tracking-[0.1em] text-[var(--ssh-blue)] sm:px-5 sm:py-4 sm:text-sm sm:tracking-[0.13em]">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="border-l border-[var(--ssh-border)]">
            {storyMilestones.map((milestone) => {
              const Icon = milestone.icon;

              return (
                <article
                  className="group relative grid gap-5 border-b border-[var(--ssh-border)] py-7 pl-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[96px_minmax(0,1fr)]"
                  data-motion-reveal
                  key={milestone.title}
                >
                  <span className="absolute -left-[7px] top-9 h-3.5 w-3.5 rounded-full bg-[var(--ssh-blue)] ring-4 ring-[var(--ssh-blue-50)] first:top-2" />
                  <div>
                    <p className="font-display text-4xl font-semibold leading-none text-[var(--ssh-blue)]">
                      {milestone.marker}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                      {milestone.meta}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                          {milestone.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-[var(--ssh-slate)]">
                          {milestone.description}
                        </p>
                        <Link
                          className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:text-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                          href={milestone.href}
                        >
                          Follow this record
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className="mt-10 border-l-2 border-[var(--ssh-nest-gold)] bg-white px-6 py-5 shadow-[0_18px_50px_rgba(7,27,47,0.06)]"
            data-motion-reveal
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
              Integrity note
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--ssh-slate)]">
              Legal registration, founder, and board details are not stated here until SSH supplies official records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
