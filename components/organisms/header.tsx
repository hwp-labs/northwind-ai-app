import { UserRoundPlusIcon } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { Logo } from "../atoms/logo";

export const Header = () => {
  return (
    <header className="flex-center-between mx-auto my-8 w-[1280px] rounded-2xl border p-8">
      <Logo darkMode />
      <nav className="flex-center-start gap-8">
        <div>Home</div>
        <div>About</div>
        <div>Products</div>
        <div>Solutions</div>
        <div>Join Us</div>
      </nav>
      <Button>
        <UserRoundPlusIcon />
        Sign up
      </Button>
    </header>
  );
};
