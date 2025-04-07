import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { baseUrl } from "./sitemap";
import { classNames } from "./utils/class-names";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Index | beneisner.io",
    template: "%s | beneisner.io",
  },
  description: "",
  openGraph: {
    title: "beneisner.io",
    description: "",
    url: baseUrl,
    siteName: "beneisner.io",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        GeistSans.variable,
        GeistMono.variable,
        "!bg-neutral-950"
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto font-mono bg-neutral-950">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 bg-neutral-950">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
