"use client";

import { APP } from "@/constants/APP";

export const Copyright = () => {
  return (
    <address className="not-italic text-sm">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <span className="font-medium">{APP.owner}&reg;</span>
    </address>
  );
};
