import type { Metadata } from "next";

import { ContactIndex } from "@/components/contact/ContactIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Save and Serve Humanity through public email, phone, and location details."
};

export default function ContactPage() {
  return (
    <>
      <ContactIndex />
      <UnderDevelopmentNotice
        title="The direct message form is under development."
        description="Email and phone contact are visible now. A built-in form should be added only after submission handling, spam protection, privacy wording, and success/error states are configured."
        items={[
          "Form submission handling",
          "Spam protection",
          "Privacy wording",
          "Success and error states"
        ]}
        href="mailto:info@lavenderblush-herring-796782.hostingersite.com"
        linkLabel="Email SSH Instead"
      />
      <ScrollRevealMotion />
    </>
  );
}