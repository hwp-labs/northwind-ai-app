import clsx from "clsx";
import { FieldLabel } from "@/components/shadcn/ui/field";
import { BaseInput } from "@/types/common";

interface Props {
  options: BaseInput;
}

export const CustomFieldLabel = ({ options }: Props) => {
  return options.label ? (
    <FieldLabel
      htmlFor={options.name}
      className={clsx(
        "font-medium lg:font-normal",
        options.darkInvert && "dark:invert",
      )}
    >
      {options.label}{" "}
      {options.required && <span className="text-rose-600">*</span>}
    </FieldLabel>
  ) : null;
};
