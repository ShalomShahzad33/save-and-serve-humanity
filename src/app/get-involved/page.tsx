import type { Metadata } from "next";

import { GetInvolvedIndex } from "@/components/get-involved/GetInvolvedIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Practical ways to learn about supporting Save and Serve Humanity while volunteer, contact, and donation details are being confirmed."
};

export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedIndex />
      <ScrollRevealMotion />
    </>
  );
}
