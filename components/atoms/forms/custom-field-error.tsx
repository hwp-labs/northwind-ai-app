import { ControllerFieldState } from "react-hook-form";
import { FieldDescription, FieldError } from "@/components/shadcn/ui/field";

interface Props {
  options: {
    fieldState?: ControllerFieldState;
    description?: string;
  };
}

export const CustomFieldError = ({ options }: Props) => {
  return options.fieldState?.invalid ? (
    <FieldError errors={[options.fieldState?.error]} />
  ) : options.description ? (
    <FieldDescription>{options.description}</FieldDescription>
  ) : null;
};
