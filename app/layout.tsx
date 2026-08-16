import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// @ts-expect-error - Next.js provides CSS side-effect typing during build, but TypeScript doesn't recognize it in the IDE.
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Trance Music — Bollywood Nostalgia Radio",
  description:
    "100 iconic Bollywood trance, psytrance, EDM & electronic tracks. From Manali Trance to Kun Faya Kun — relive the magic.",
  keywords: [
    "bollywood trance",
    "psytrance",
    "edm",
    "indian electronic music",
    "bollywood remixes",
    "nostalgia radio",
  ],
  openGraph: {
    title: "Trance Music — Bollywood Nostalgia Radio",
    description:
      "100 iconic Bollywood trance, psytrance, EDM & electronic tracks.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}