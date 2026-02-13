import { IconBrandGithubFilled } from "@tabler/icons-react";
//
import { Logo } from "../logo";
import { VisitorTrackerWidget } from "../widgets/visitor-tracker-widget";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export const Header = () => {
  return (
    <header className="border_ flex-row-cb p-6 lg:p-8">
      <Logo path={PATH.home} />
      <section className="flex-row-cs border_ gap-4">
        <VisitorTrackerWidget />
        <a href={APP.repository} target="_blank" title="View Source">
          <IconBrandGithubFilled size={20} />
        </a>
      </section>
    </header>
  );
};
