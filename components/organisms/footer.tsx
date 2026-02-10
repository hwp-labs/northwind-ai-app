import { Copyright } from "./copyright";

export const Footer = () => {
  return (
    <footer className="px-4 text-xs lg:px-12">
      <div className="flex-col-cc gap-6 border-t py-8">
        <ul className="flex-row-cc text-muted-foreground gap-4">
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
