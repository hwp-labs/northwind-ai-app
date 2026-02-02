import { APP } from "@/constants/APP";

export const Footer = () => {
  return (
    <footer className="px-4 lg:px-8 text-xs">
      <div className="flex-col-center-center gap-6 border-t pt-6 pb-4">
        <ul className="flex-center-center text-muted-foreground gap-4">
          {["Privacy Policy", "Terms & Conditions", "Manage Cookies"].map(
            (item, i) => (
              <li
                key={i}
                className="hover:text-primary underline underline-offset-2 hover:cursor-default hover:font-medium"
              >
                {item}
              </li>
            ),
          )}
        </ul>
        <address
          className="not-italic"
        >
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span
            className="font-medium"
            dangerouslySetInnerHTML={{ __html: APP.owner }}
          />
        </address>
      </div>
    </footer>
  );
};
