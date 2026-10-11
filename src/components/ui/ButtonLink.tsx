import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  return (
    <Link
      className={clsx(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]",
        variant === "primary" &&
          "bg-[var(--ssh-blue)] text-white shadow-[0_14px_34px_rgba(1,69,142,0.18)] hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)]",
        variant === "secondary" &&
          "border border-[var(--ssh-border)] bg-white text-[var(--ssh-blue)] hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)]"
      )}
      href={href}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
