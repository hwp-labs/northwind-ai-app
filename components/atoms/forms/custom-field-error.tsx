import { ControllerFieldState } from "react-hook-form";
import { FieldDescription, FieldError } from "@/components/shadcn/ui/field";
import clsx from "clsx";

interface Props {
  options: {
    fieldState?: ControllerFieldState;
    description?: string;
    darkInvert?: boolean;
  };
}

export const CustomFieldError = ({ options }: Props) => {
  return options.fieldState?.invalid ? (
    <FieldError
      className={clsx("text-xs", options.darkInvert && "dark:invert")}
      errors={[options.fieldState?.error]}
    />
  ) : options.description ? (
    <FieldDescription>{options.description}</FieldDescription>
  ) : null;
};
