import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: APP.title,
    template: `%s | ${APP.name}`,
  },
  description: APP.description,
};

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
