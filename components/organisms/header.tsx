import {
  IconBrandGithubFilled,
  IconUserScan,
  IconUserShield,
} from "@tabler/icons-react";
//
import { Logo } from "../atoms/logo";
import { VisitorTrackerWidget } from "../widgets/visitor-tracker-widget";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border_ flex-center-between p-6 lg:p-8">
      <Logo path={PATH.home} />
      <div className="flex-row-cs border_ gap-4">
        <VisitorTrackerWidget />
        <a href={APP.repository} target="_blank" title="View Source">
          <IconBrandGithubFilled size={20} />
        </a>
        <Link href={PATH.login} title="Log in">
          <IconUserScan size={20} />
        </Link>
      </div>
    </header>
  );
};
