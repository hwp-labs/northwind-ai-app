import { Logo } from "../atoms/logo";
import { APP } from "@/constants/APP";

export const Footer = () => {
  return (
    <footer className="flex-col-center-center gap-6 px-4 py-10 lg:gap-4">
      <Logo />
      <address className="text-sm" style={{ fontStyle: "normal" }}>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span
          className="font-medium"
          dangerouslySetInnerHTML={{ __html: APP.owner }}
        />
        {/* All rights reserved.*/}
      </address>
      <ul className="flex-center-center text-muted-foreground gap-4 text-xs">
        {["Privacy Policy", "Terms & Conditions", "Manage Cookies"].map(
          (item, i) => (
            <li
              key={i}
              className="underline underline-offset-2 hover:cursor-default hover:font-medium hover:text-primary"
            >
              {item}
            </li>
          ),
        )}
      </ul>
    </footer>
  );
};
