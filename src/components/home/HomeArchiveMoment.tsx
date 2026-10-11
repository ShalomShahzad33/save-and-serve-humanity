import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";

const archiveImages = [
  {
    src: "/media/blog/160th-free-medical-camp/cover.png",
    alt: "Medical camp participants and volunteers gathered during SSH's 160th Free Medical Camp.",
    label: "160th Free Medical Camp"
  },
  {
    src: "/media/blog/brick-kiln-medical-camp-kasur-2023/camp-01.png",
    alt: "Medical camp scene from SSH's brick-kiln outreach record.",
    label: "Brick-kiln outreach"
  },
  {
    src: "/media/blog/covid-19-ration-distribution/ration-01.png",
    alt: "Volunteers handling ration supplies during COVID-19 relief work.",
    label: "COVID-19 ration support"
  },
  {
    src: "/media/blog/ssh-youth-seminar-2025/2.JPG",
    alt: "Youth seminar participants and organizers at the Renewal Center in Youhanabad.",
    label: "Youth seminar"
  },
  {
    src: "/media/blog/mouth-cancer-awareness-walk-karachi-2012/walk-01.png",
    alt: "Participants in SSH's 2012 mouth cancer awareness walk in Karachi.",
    label: "Awareness walk"
  },
  {
    src: "/media/blog/church-construction-laweray-hafizabad/completed-church.png",
    alt: "Completed church construction work supported by SSH in Laweray Village, Hafizabad.",
    label: "Laweray Village"
  }
] as const;

const archiveRecords = [
  "Medical camps",
  "Youth seminars",
  "Community support",
  "Awareness activity"
] as const;

function ArchiveStrip({ reverse = false }: { reverse?: boolean }) {
  const duplicatedImages = [...archiveImages, ...archiveImages];

  return (
    <div
      aria-hidden="true"
      className="archive-film-strip overflow-hidden"
      data-direction={reverse ? "reverse" : "forward"}
    >
      <div className="archive-film-strip-track flex w-max gap-4">
        {duplicatedImages.map((image, index) => (
          <figure
            className="relative h-52 w-72 shrink-0 overflow-hidden rounded-[22px] bg-[var(--ssh-blue-50)] shadow-[0_18px_48px_rgba(7,27,47,0.12)] sm:h-64 sm:w-96"
            key={`${image.src}-${index}`}
          >
            <Image
              alt=""
              className="object-cover"
              fill
              loading="lazy"
              quality={95}
              sizes="(max-width: 640px) 288px, 384px"
              src={image.src}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(7,27,47,0.74)] to-transparent px-4 pb-4 pt-16">
              <figcaption className="text-sm font-semibold text-white">
                {image.label}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function HomeArchiveMoment() {
  return (
    <section
      aria-labelledby="home-archive-title"
      className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
              data-motion-reveal
            >
              Archive moment
            </p>
            <h2
              className="mt-4 max-w-[760px] font-display text-[clamp(2.6rem,5.6vw,5.1rem)] font-semibold leading-[0.96] text-[var(--ssh-ink)]"
              data-motion-reveal
              id="home-archive-title"
            >
              A living record of service, carried in images.
            </h2>
          </div>
          <div className="max-w-[720px] lg:justify-self-end" data-motion-reveal>
            <p className="text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              SSH&apos;s public archive now brings together medical outreach,
              youth formation, ration support, awareness activity, and
              church-related service through real photographs and published
              stories.
            </p>
            <Link
              className="group mt-7 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href="/gallery"
            >
              View the Gallery
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-14 space-y-4" data-motion-reveal>
          <ArchiveStrip />
          <ArchiveStrip reverse />
        </div>

        <div
          className="mt-10 grid gap-3 border-y border-[var(--ssh-border)] py-6 sm:grid-cols-2 lg:grid-cols-4"
          data-motion-reveal
        >
          {archiveRecords.map((record) => (
            <div className="flex items-center gap-3" key={record}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--ssh-blue-50)] text-[var(--ssh-blue)]">
                <Images aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-[var(--ssh-ink)]">
                {record}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
