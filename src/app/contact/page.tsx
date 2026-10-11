import type { Metadata } from "next";

import { ContactIndex } from "@/components/contact/ContactIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Save and Serve Humanity through public email, phone, and location details."
};

export default function ContactPage() {
  return (
    <>
      <ContactIndex />
      <ScrollRevealMotion />
    </>
  );
}
