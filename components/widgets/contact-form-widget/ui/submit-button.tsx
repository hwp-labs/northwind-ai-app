import { CheckIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";

interface Props {
  options: {
    submitting?: boolean;
    success?: boolean;
  };
}

export const SubmitButton = ({ options }: Props) => {
  return (
    <div className="_border flex flex-col justify-end lg:flex-row">
      <Button
        type="submit"
        size="lg"
        className={
          options.success ? "bg-emerald-600 text-white dark:invert" : undefined
        }
      >
        {options.submitting ? (
          <Spinner />
        ) : options.success ? (
          <CheckIcon />
        ) : null}
        {options.submitting
          ? "Going..."
          : options.success
            ? "Gone!"
            : "Let's go"}
      </Button>
    </div>
  );
};
