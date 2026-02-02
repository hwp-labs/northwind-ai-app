import { IconBrandGithubFilled } from "@tabler/icons-react";
//
import { Logo } from "../../atoms/logo";
import { APP } from "@/constants/APP";

export const Header = () => {
  return (
    <header className="border_ flex-center-between p-6 lg:p-8">
      <Logo />
      <a href={APP.repository} target="_blank" title="View Source">
        <IconBrandGithubFilled size={20} color="white" />
      </a>
    </header>
  );
};
