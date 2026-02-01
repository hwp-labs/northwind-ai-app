import { UserRoundPlusIcon } from "lucide-react";
//
import { Button } from "../shadcn/ui/button";
import { Logo } from "../atoms/logo";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="flex-center-between mx-auto my-4 w-full rounded-xl border-0 px-6 lg:my-8 lg:w-[80%] lg:border lg:py-4">
      <Logo darkMode />
      <Nav />
      <Button>
        <UserRoundPlusIcon />
        Get started
      </Button>
    </header>
  );
};
