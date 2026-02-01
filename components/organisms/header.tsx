import Link from "next/link";
import { UserRoundPlusIcon } from "lucide-react";
import clsx from "clsx";
//
import { Logo } from "../atoms/logo";
import { Button } from "../shadcn/ui/button";

export const Header = () => {
  return (
    <header className="flex-center-between mx-auto my-8 w-[1280px] rounded-xl border px-6 py-4">
      <Logo darkMode />
      <nav className="flex-center-start gap-8">
        {["Home", "About", "Products", "Solutions", "Join Us"].map(
          (item, i) => {
            const active = i < 1;
            return (
              <Link
                key={i}
                href={""}
                className={clsx("text-muted-foreground hover:text-white", active && "text-white")}
              >
                {item}
              </Link>
            );
          },
        )}
      </nav>
      <Button>
        <UserRoundPlusIcon />
        Sign up
      </Button>
    </header>
  );
};
