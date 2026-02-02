import type { Metadata, Viewport } from "next";
import { Raleway, Poppins, Montserrat } from "next/font/google";
import clsx from "clsx";
//
import "@/styles/globals.css";
import { APP } from "@/constants/APP";

const fontPoppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fontMontserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
  display: "swap",
});

const fontRaleway = Raleway({
  variable: "--font-Raleway",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          fontPoppins.variable,
          fontMontserrat.variable,
          fontRaleway.variable,
          "font-[Poppins] antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: {
    default: APP.titleVerbose,
    template: `%s | ${APP.name}`,
  },
  description: APP.description,
  keywords: APP.keywords.split(", "),
  creator: APP.creator,
  // META
  generator: "Next.js",
  applicationName: APP.name,
  category: "ai automation",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  metadataBase: new URL(APP.website),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest
  manifest: `${APP.website}/manifest.json`,
  // OPEN GRAPH
  openGraph: {
    type: "website",
    url: APP.website,
    siteName: APP.name,
    title: APP.title,
    description: APP.description,
    images: {
      url: `${APP.website}/social-preview.png`,
      alt: "",
      width: 1280,
      height: 640,
    },
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: APP.titleVerbose,
    description: APP.description,
    creator: "@2gbeh",
    images: {
      url: `${APP.website}/social-preview.png`,
      alt: 'Next.js Logo',
    }
  },
  /**
  <meta name="twitter:url" content="https://2gbeh.github.io/odara-tv/" />
   */
  // ROBOTS
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: APP.colors.background },
    { media: "(prefers-color-scheme: dark)", color: APP.colors.backgroundDark },
  ],
};
