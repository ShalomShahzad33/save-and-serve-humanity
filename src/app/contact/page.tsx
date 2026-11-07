import type { Metadata } from "next";

import { ContactIndex } from "@/components/contact/ContactIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { siteMeta } from "@/data/site";

const contactDescription =
  "Contact Save and Serve Humanity through public email, phone, and location details.";
const contactSocialImage = "/media/home/hero-160th-free-medical-camp.jpg";

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteMeta.name}`,
    description: contactDescription,
    url: "/contact",
    siteName: siteMeta.name,
    images: [
      {
        url: contactSocialImage,
        alt: "People gathered at Save and Serve Humanity's 160th free medical camp."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${siteMeta.name}`,
    description: contactDescription,
    images: [contactSocialImage]
  }
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
        href="mailto:info@sshpk.org"
        linkLabel="Email SSH Instead"
      />
      <ScrollRevealMotion />
    </>
  );
}
