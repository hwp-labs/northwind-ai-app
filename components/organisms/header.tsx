import { Logo } from "../logo";
import { VisitorTrackerWidget } from "../widgets/visitor-tracker-widget";
import { GithubStarsWidget } from "../widgets/github-stars-widget";
import { PATH } from "@/constants/PATH";

export const Header = () => {
  return (
    <header className="border_ flex-row-cb p-6 lg:p-8">
      <Logo path={PATH.home} />
      <VisitorTrackerWidget />
      <GithubStarsWidget />
    </header>
  );
};
