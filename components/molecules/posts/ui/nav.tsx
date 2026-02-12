"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const Nav = () => {
  const searchParams = useSearchParams();
  const tabIndex = Number(searchParams.get("tabIndex") || "0");
  //
  return (
    <ul className="flex-row-cs gap-6">
      {["Default", "Generic", "Blog"].map((item, i) => {
        const active = i === tabIndex;
        return (
          <li
            key={i}
            className={active ? "text-white" : "text-muted-foreground"}
          >
            <Link href={`?tabIndex=${i}`}>{item}</Link>
          </li>
        );
      })}
    </ul>
  );
};
