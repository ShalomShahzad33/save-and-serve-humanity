"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { primaryNavigation, siteMeta } from "@/data/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.toggleAttribute("data-menu-open", menuOpen);

    return () => {
      document.body.removeAttribute("data-menu-open");
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ssh-border)] bg-[rgba(252,251,247,0.9)] backdrop-blur-md">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          aria-label={`${siteMeta.name} home`}
          className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-[0_8px_22px_rgba(1,69,142,0.12)]">
            <Image
              alt=""
              fill
              priority
              sizes="48px"
              src="/brand/ssh-logo.jpg"
              className="object-cover"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.02em] text-[var(--ssh-blue)]">
              SSH
            </span>
            <span className="block text-xs font-medium text-[var(--ssh-slate)]">
              Save and Serve Humanity
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-semibold text-[var(--ssh-ink)]">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="nav-link rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                  href={item.href}
                  prefetch={false}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className="hidden min-h-11 items-center rounded-[14px] bg-[var(--ssh-blue)] px-5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] lg:inline-flex"
          href="/donate"
          prefetch={false}
        >
          Donate Now
        </Link>

        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[var(--ssh-border)] bg-white text-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] lg:hidden"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        aria-hidden={!menuOpen}
        className="grid transition-[grid-template-rows] duration-300 ease-out lg:hidden"
        id="mobile-menu"
        style={{ gridTemplateRows: menuOpen ? "1fr" : "0fr" }}
      >
        <nav
          aria-label="Mobile navigation"
          className="overflow-hidden border-t border-[var(--ssh-border)] bg-[var(--ssh-warm-white)]"
        >
          <ul className="mx-auto flex max-w-[1440px] flex-col px-5 py-5 text-xl font-semibold text-[var(--ssh-ink)]">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                  href={item.href}
                  prefetch={false}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                className="inline-flex min-h-12 items-center rounded-[14px] bg-[var(--ssh-blue)] px-5 text-base font-semibold text-white"
                href="/donate"
                prefetch={false}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
