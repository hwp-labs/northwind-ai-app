import { CheckIcon } from "lucide-react";
import clsx from "clsx";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";

interface Props {
  options: {
    submitting?: boolean;
    success?: boolean;
  };
}

export const SubmitButton = ({ options: { submitting, success } }: Props) => {
  return (
    <div className="_border flex flex-col justify-end lg:flex-row">
      <Button
        type="submit"
        className={clsx(
          "h-10 lg:h-9",
          success && "bg-emerald-600",
        )}
      >
        {submitting ? <Spinner /> : success ? <CheckIcon /> : null}
        {submitting ? "Going..." : success ? "Gone!" : "Let's go"}
      </Button>
    </div>
  );
};
