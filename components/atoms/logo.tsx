import { GpuIcon } from "lucide-react";
import clsx from "clsx";
//
import { APP } from "@/constants/APP";

interface Props {
  iconOnly?: boolean;
  darkMode?: boolean;
}

export const Logo = ({ iconOnly, darkMode = true }: Props) => {
  return (
    <div className="flex-center-start gap-3">
      <span
        className={clsx(
          "flex-center-center size-[24px] rounded-full",
          darkMode ? "bg-white" : "bg-black",
        )}
      >
        <GpuIcon
          size={16}
          color={darkMode ? "black" : "white"}
          strokeWidth={2.5}
        />
      </span>
      {!iconOnly && <p className="font-[Raleway] font-semibold">{APP.name}</p>}
    </div>
  );
};
