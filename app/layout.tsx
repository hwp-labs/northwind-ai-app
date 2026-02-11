import type { Metadata, Viewport } from "next";
import clsx from "clsx";
//
import { ThemedToaster } from "@/components/atoms/themed-toaster";
import { Explorer } from "@/components/atoms/explorer";
import { METADATA, VIEWPORT } from "@/constants/META";
import { fontPoppins, fontMontserrat, fontRaleway } from "@/constants/FONT";
import "@/styles/globals.css";
import { MOCK } from "@/constants/MOCK";

export const metadata: Metadata = METADATA;
export const viewport: Viewport = VIEWPORT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="_dark">
      <body
        className={clsx(
          fontPoppins.variable,
          fontMontserrat.variable,
          fontRaleway.variable,
          "font-[Poppins] antialiased",
        )}
      >
        {children}
        {MOCK.explorer.show ? <Explorer /> : null}
        <ThemedToaster />
      </body>
    </html>
  );
}
