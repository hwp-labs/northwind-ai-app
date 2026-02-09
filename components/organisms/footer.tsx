import { Copyright } from "./copyright";

export const Footer = () => {
  return (
    <footer className="px-4 text-xs lg:px-8">
      <div className="flex-col-center-center gap-6 border-t pt-6 pb-4">
        <ul className="flex-center-center text-muted-foreground gap-4">
          {["Privacy Policy", "Terms & Conditions", "Manage Cookies"].map(
            (item, i) => (
              <li
                key={i}
                className="hover:text-white underline underline-offset-2 hover:cursor-default hover:font-medium"
              >
                {item}
              </li>
            ),
          )}
        </ul>
        <Copyright />
      </div>
    </footer>
  );
};
