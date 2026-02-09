import { FieldLabel } from "@/components/shadcn/ui/field";
import { BaseInput } from "@/types/common";

interface Props {
  options: Omit<BaseInput, "disabled">;
}

export const CustomFieldLabel = ({ options }: Props) => {
  return options.label ? (
    <FieldLabel htmlFor={options.name} className="font-medium lg:font-normal">
      {options.label}{" "}
      {options.required && <span className="text-rose-600">*</span>}
    </FieldLabel>
  ) : null;
};
