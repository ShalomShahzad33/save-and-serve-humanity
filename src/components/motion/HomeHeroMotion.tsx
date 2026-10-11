"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HomeHeroMotion() {
  const scopeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    scopeRef.current = document.querySelector("[data-home-hero]");

    if (!scopeRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        y: 18,
        opacity: 0,
        duration: 0.82,
        ease: "power4.out",
        stagger: 0.1
      });

      gsap.from("[data-hero-logo]", {
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        delay: 0.18
      });
    }, scopeRef);

    return () => context.revert();
  }, []);

  return null;
}
