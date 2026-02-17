import Link from "next/link";
//
import { Copyright } from "./copyright";
import { PATH } from "@/constants/PATH";

export const Footer = () => {
  return (
    <footer className="px-4 lg:px-12">
      <section className="flex-col-cc gap-6 border-t py-8">
        <nav className="flex-row-cc text-muted-foreground hidden gap-4">
          {[
            { label: "Data Policy", path: PATH.home },
            { label: "Terms & Conditions", path: PATH.home },
            { label: "Manage Cookies", path: PATH.login },
          ].map(({ label, path }, i) => (
            <Link
              key={i}
              href={path}
              className="text-xs underline underline-offset-2 hover:cursor-default hover:font-medium hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <figure className="flex-row-cs gap-4">
        <img
          src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
          alt="Python"
        />
        <img
          src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
          alt="FastAPI"
        />
        <img
          src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
          alt="Supabase"
        />
        </figure>
        <Copyright />
      </section>
    </footer>
  );
};
