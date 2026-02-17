"use client";

import { APP } from "@/constants/APP";

export const Copyright = () => {
  return (
    <address className="not-italic">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <span className="font-medium">{APP.owner}&reg;</span>
    </address>
  );
};
