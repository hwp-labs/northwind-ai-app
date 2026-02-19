import clsx from "clsx";
import { ColorVariantType } from "@/types";

interface Props {
  variant?: ColorVariantType;
  className?: string;
}

export const Indicator = ({ variant = "success", className }: Props) => {
  return (
    <div
      className={clsx(
        "absolute right-0 bottom-0 size-2.5 rounded-full border border-white",
        {
          "bg-neutral-400": variant === "default",
          "bg-indigo-400": variant === "info",
          "bg-emerald-400": variant === "success",
          "bg-amber-400": variant === "warning",
          "bg-rose-400": variant === "danger",
        },
        className,
      )}
    />
  );
};
