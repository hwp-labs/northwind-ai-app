import type { Metadata, Viewport } from "next";
import clsx from "clsx";
//
import { METADATA, VIEWPORT } from "@/constants/META";
import { fontPoppins, fontMontserrat, fontRaleway } from "@/constants/FONT";
import "@/styles/globals.css";

export const metadata: Metadata = METADATA;
export const viewport: Viewport = VIEWPORT;

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
