"use client";

import Link from "next/link";
import useQueryParams from "@/hooks/use-query-params";

export const Nav = () => {
  const { get } = useQueryParams();
  const tabIndex = Number(get("tabIndex", 0));
  //
  return (
    <nav className="flex-row-cs gap-6">
      {["Default", "Monthly", "List", "Blog"].map((item, i) => {
        const active = i === tabIndex;
        return (
          <Link
            key={i}
            href={`?tabIndex=${i}`}
            className={active ? "text-white" : "text-muted-foreground"}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
};
