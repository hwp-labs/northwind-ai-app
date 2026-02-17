import Link from "next/link";
//
import { Copyright } from "./copyright";
import { FooterBadges } from "./footer-badges";
import { PATH } from "@/constants/PATH";

export const Footer = () => {
  return (
    <footer className="px-4 text-sm lg:px-12">
      <section className="flex-col-cc gap-6 border-t py-8">
        <nav className="debug_ flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          {[
            { label: "Terms & Conditions", path: PATH.terms },
            { label: "Data Policy", path: PATH.dataPolicy },
            { label: "Manage Cookies", path: PATH.manageCookies },
          ].map(({ label, path }, i) => (
            <Link
              key={i}
              href={path}
              className="text-muted-foreground  text-center underline underline-offset-2 hover:font-medium hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <FooterBadges fastApi />
        <Copyright />
      </section>
    </footer>
  );
};
