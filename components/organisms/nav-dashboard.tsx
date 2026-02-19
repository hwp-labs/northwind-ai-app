"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
//
import { DASHBOARD_MENU } from "@/constants/MENU";

export const NavDashboard = () => {
  const pathname = usePathname();
  //
  return (
    <nav className="flex-center-center hidden gap-8 lg:flex text-sm">
      {DASHBOARD_MENU.map((item, i) => (
        <Link
          key={i}
          href={item.path}
          className={clsx(
            "text-muted-foreground hover:text-white",
            pathname.startsWith(item.path) && "text-white",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
