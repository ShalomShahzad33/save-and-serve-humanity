"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollRevealMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-motion-section]")
        .forEach((section) => {
          const revealItems = gsap.utils.toArray<HTMLElement>(
            "[data-motion-reveal]",
            section
          );

          if (revealItems.length === 0) {
            return;
          }

          gsap.from(revealItems, {
            opacity: 0,
            y: 18,
            duration: 0.72,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true
            }
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-motion-timeline-item]")
        .forEach((item, index) => {
          gsap.from(item, {
            opacity: 0,
            x: index % 2 === 0 ? -16 : 16,
            duration: 0.64,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
              once: true
            }
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-motion-chapter]")
        .forEach((chapter) => {
          const plate = chapter.querySelector("[data-motion-plate]");
          const content = chapter.querySelector("[data-motion-chapter-content]");

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: chapter,
              start: "top 78%",
              once: true
            }
          });

          if (plate) {
            timeline.from(plate, {
              opacity: 0,
              scale: 1.025,
              clipPath: "inset(0 0 10% 0)",
              duration: 0.8,
              ease: "power4.out"
            });
          }

          if (content) {
            timeline.from(
              content,
              {
                opacity: 0,
                y: 18,
                duration: 0.64,
                ease: "power3.out"
              },
              plate ? "-=0.48" : 0
            );
          }
        });

      ScrollTrigger.refresh();
    }, document.body);

    return () => context.revert();
  }, []);

  return null;
}
