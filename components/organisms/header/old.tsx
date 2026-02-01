import { UserLockIcon } from "lucide-react";
//
import { Button } from "../../shadcn/ui/button";
import { Logo } from "../../atoms/logo";
import { Nav } from "../nav";

export const Header = () => {
  return (
    <header className="flex-center-between mx-auto mt-8 w-full rounded-xl border-0 px-6 lg:mt-10 lg:w-[80%] lg:border lg:py-4">
      <section className="flex-1">
        <Logo />
      </section>
      <Nav />
      <section className="flex-1 text-right">
        <Button>
          <UserLockIcon />
          Admin
        </Button>
      </section>
    </header>
  );
};
