import type { Metadata } from "next";

import { DonateIndex } from "@/components/donate/DonateIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donation readiness for Save and Serve Humanity, prepared for confirmed campaign details, giving methods, transparency notes, and donor questions."
};

export default function DonatePage() {
  return (
    <>
      <DonateIndex />
      <ScrollRevealMotion />
    </>
  );
}
