import Link from "next/link";
import { ArrowRight, BadgeInfo } from "lucide-react";

type UnderDevelopmentNoticeProps = {
  eyebrow?: string;
  title: string;
  description: string;
  items?: string[];
  href?: string;
  linkLabel?: string;
  variant?: "light" | "blue";
};

function ConstructionMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 220 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .ssh-build-arm { transform-origin: 67px 75px; animation: sshBuildArm 4.8s ease-in-out infinite; }
        .ssh-build-load { transform-origin: 156px 82px; animation: sshBuildLoad 4.8s ease-in-out infinite; }
        .ssh-build-line { stroke-dasharray: 110; stroke-dashoffset: 110; animation: sshBuildLine 4.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ssh-build-arm, .ssh-build-load, .ssh-build-line { animation: none; stroke-dashoffset: 0; }
        }
        @keyframes sshBuildArm {
          0%, 100% { transform: rotate(-2deg); }
          42% { transform: rotate(4deg); }
          68% { transform: rotate(1deg); }
        }
        @keyframes sshBuildLoad {
          0%, 100% { transform: translateY(0); }
          42% { transform: translateY(10px); }
          68% { transform: translateY(4px); }
        }
        @keyframes sshBuildLine {
          0% { stroke-dashoffset: 110; }
          38%, 78% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -110; }
        }
      `}</style>
      <rect fill="#F3F7FB" height="130" rx="24" width="200" x="10" y="10" />
      <path
        d="M34 118H188"
        stroke="#C8D9EB"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M57 118V52L96 118"
        stroke="#01458E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        className="ssh-build-arm"
        d="M57 52H151L183 84"
        stroke="#01458E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M84 118L57 86H108L84 118Z"
        fill="#D8A66A"
        opacity="0.35"
      />
      <path
        className="ssh-build-line"
        d="M119 52V25H156"
        stroke="#E87818"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <g className="ssh-build-load">
        <path d="M156 84V108" stroke="#74231F" strokeWidth="4" />
        <rect
          fill="#D8A66A"
          height="22"
          rx="6"
          stroke="#74231F"
          strokeWidth="4"
          width="34"
          x="139"
          y="108"
        />
      </g>
      <circle cx="57" cy="52" fill="#FCFBF7" r="10" stroke="#01458E" strokeWidth="5" />
      <path
        d="M42 135H176"
        stroke="#D8A66A"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export function DevelopmentBanner() {
  return (
    <aside
      aria-label="Website development notice"
      className="border-b border-[rgba(216,166,106,0.34)] bg-[var(--ssh-blue-950)] text-white"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--ssh-nest-gold)]/16 text-[var(--ssh-nest-gold)]">
            <BadgeInfo aria-hidden="true" className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold leading-6">
              Website under development
            </p>
            <p className="max-w-[860px] text-sm leading-6 text-white/70">
              This SSH rebuild is being completed in phases. Published stories
              and archive sections are usable, while marked areas are still
              waiting for confirmed details or final functionality.
            </p>
          </div>
        </div>
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-nest-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
          href="/blog"
        >
          View published stories
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

export function UnderDevelopmentNotice({
  eyebrow = "Under development",
  title,
  description,
  items = [],
  href,
  linkLabel,
  variant = "light"
}: UnderDevelopmentNoticeProps) {
  const isBlue = variant === "blue";

  return (
    <section
      aria-labelledby="under-development-title"
      className={
        isBlue
          ? "bg-[var(--ssh-blue-950)] py-16 text-white sm:py-20"
          : "bg-[var(--ssh-blue-50)] py-16 sm:py-20"
      }
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-12">
        <div
          className={
            isBlue
              ? "rounded-[32px] border border-white/12 bg-white/8 p-4"
              : "rounded-[32px] border border-[var(--ssh-border)] bg-white p-4 shadow-[0_18px_50px_rgba(7,27,47,0.05)]"
          }
        >
          <ConstructionMark className="h-auto w-full" />
        </div>
        <div>
          <p
            className={
              isBlue
                ? "text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]"
                : "text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
            }
          >
            {eyebrow}
          </p>
          <h2
            className={
              isBlue
                ? "mt-4 max-w-[780px] font-display text-[clamp(2.2rem,4vw,4.4rem)] font-semibold leading-tight text-white"
                : "mt-4 max-w-[780px] font-display text-[clamp(2.2rem,4vw,4.4rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
            }
            id="under-development-title"
          >
            {title}
          </h2>
          <p
            className={
              isBlue
                ? "mt-5 max-w-[760px] text-base leading-7 text-white/72 sm:text-lg sm:leading-8"
                : "mt-5 max-w-[760px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8"
            }
          >
            {description}
          </p>
          {items.length > 0 ? (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li
                  className={
                    isBlue
                      ? "flex gap-3 text-sm leading-6 text-white/72"
                      : "flex gap-3 text-sm leading-6 text-[var(--ssh-slate)]"
                  }
                  key={item}
                >
                  <span
                    className={
                      isBlue
                        ? "mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-nest-gold)]"
                        : "mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]"
                    }
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {href && linkLabel ? (
            <Link
              className={
                isBlue
                  ? "group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                  : "group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              }
              href={href}
            >
              {linkLabel}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
