import { FieldLabel } from "@/components/shadcn/ui/field";
import { BaseInput } from "@/types";

interface Props {
  options: Omit<BaseInput, "disabled">;
}

export const CustomFieldLabel = ({ options }: Props) => {
  return options.label ? (
    <FieldLabel htmlFor={options.name} className="font-medium">
      {options.label}{" "}
      {options.required && <span className="text-destructive">*</span>}
    </FieldLabel>
  ) : null;
};
