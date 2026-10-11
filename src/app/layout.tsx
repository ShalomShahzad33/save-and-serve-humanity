import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { siteMeta } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} | Humanitarian Service in Pakistan`,
    template: `%s | ${siteMeta.name}`
  },
  description: siteMeta.description,
  icons: {
    icon: "/brand/ssh-logo.jpg",
    apple: "/brand/ssh-logo.jpg"
  },
  openGraph: {
    title: `${siteMeta.name} | Humanitarian Service in Pakistan`,
    description: siteMeta.description,
    siteName: siteMeta.name,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
