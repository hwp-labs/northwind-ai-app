import { GpuIcon, UserRoundPlusIcon, ZapIcon } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { Logo } from "../atoms/logo";

export const Header = () => {
  return (
    <header className="flex-center-between mx-auto w-[1280px] border rounded-2xl my-8 p-8">
      <Logo />
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
