import { CheckCheckIcon, CheckIcon } from "lucide-react";
import clsx from "clsx";
//
import { Button } from "../shadcn/ui/button";
import { Spinner } from "../shadcn/ui/spinner";
import { PropsWithChildren } from "react";

interface Props {
  children: string;
  submitting?: boolean;
  submittingText?: string;
  success?: boolean;
  successText?: string;
}

export const SubmitButton = ({
  children,
  submitting,
  submittingText,
  success,
  successText,
}: Props) => {
  return (
    <div className="_border flex flex-col justify-end lg:flex-row">
      <Button
        type="submit"
        className={clsx("h-10 lg:h-9", success && "bg-emerald-600")}
      >
        {submitting ? <Spinner /> : success ? <CheckCheckIcon /> : null}
        {submitting
          ? submittingText || children
          : success
            ? successText || children
            : children}
      </Button>
    </div>
  );
};

export const SubmitButtonGrid = ({ children }: PropsWithChildren) => (
  <section className="mt-4 grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
    {children}
  </section>
);
