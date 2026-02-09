import Link from "next/link";
import { GpuIcon } from "lucide-react";
import { APP } from "@/constants/APP";

interface Props {
  path?: string;
  iconOnly?: boolean;
}

export const Logo = ({ path, iconOnly }: Props) => {
  const renderLogo = (
    <div className="flex-center-start border_ gap-2.5">
      <span className="flex-center-center size-[24px] rounded-full bg-black">
        <GpuIcon size={14} />
      </span>
      {!iconOnly && (
        <p className="font-[Raleway] font-semibold text-nowrap">{APP.name}</p>
      )}
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
