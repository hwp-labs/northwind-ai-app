import { IconBrandGithubFilled } from "@tabler/icons-react";
//
import { Logo } from "../atoms/logo";
import { VisitorTrackerWidget } from "../widgets/visitor-tracker-widget";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export const Header = () => {
  return (
    <header className="border_ flex-center-between p-6 lg:p-8">
      <Logo path={PATH.home} />
      <a
        href={APP.repository}
        target="_blank"
        title="View Source"
        className="flex-row-cs border_ gap-4"
      >
        <VisitorTrackerWidget />
        <IconBrandGithubFilled size={20} color="white" />
      </a>
    </header>
  );
};
