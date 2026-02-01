"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
//
import { PATH } from "@/constants/PATH";

export const Nav = () => {
  const pathname = usePathname();
  //
  return (
    <nav className="flex-center-start hidden gap-8 lg:flex">
      {[
        { label: "Home", path: PATH.home },
        { label: "Book a demo", path: PATH.demo },
      ].map((item, i) => {
        const active =
          item.path === "/"
            ? pathname === item.path
            : pathname.startsWith(item.path);
        //
        return (
          <Link
            key={i}
            href={item.path}
            className={clsx(
              "text-muted-foreground hover:text-white",
              active && "text-white",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
