import Link from "next/link";
import { GpuIcon } from "lucide-react";
import clsx from "clsx";
//
import { APP } from "@/constants/APP";

interface Props {
  path?: string;
  iconOnly?: boolean;
  darkMode?: boolean;
}

export const Logo = ({ path, iconOnly, darkMode }: Props) => {
  const renderLogo = (
    <div className="flex-center-start border_ gap-2.5">
      <span
        className={clsx(
          "flex-center-center size-[24px] rounded-full",
          darkMode ? "bg-white" : "bg-black",
        )}
      >
        <GpuIcon size={14} color={darkMode ? "black" : "white"} />
      </span>
      {!iconOnly && <p className="font-[Raleway] font-semibold text-nowrap">{APP.name}</p>}
    </div>
  );

  return path ? (
    <Link href={path}>{renderLogo}</Link>
  ) : (
    <a href="" title="Reload">
      {renderLogo}
    </a>
  );
};
