import Link from "next/link";
//
import { Copyright } from "./copyright";
import { PATH } from "@/constants/PATH";

export const Footer = () => {
  return (
    <footer className="px-4 lg:px-12">
      <section className="flex-col-cc gap-6 border-t py-8">
        <nav className="flex-row-cs text-muted-foreground gap-4 _w-full">
          {[
            { label: "Data Policy", path: PATH.dataPolicy },
            { label: "Terms & Conditions", path: PATH.terms },
            // { label: "Manage Cookies", path: PATH.login },
          ].map(({ label, path }, i) => (
            <Link
              key={i}
              href={path}
              className="text-sm underline underline-offset-2 hover:cursor-default hover:font-medium hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Copyright />
      </section>
    </footer>
  );
};
